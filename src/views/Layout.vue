<!--
 * @Description: 公共部分
 * @Author: wuwei
 * @Date: 2020-11-16 14:08:58
-->
<template>
  <a-layout class="layout">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <img :src="require('@/assets/image/logo.png')" alt="" />
        <span class="sysName">Webot</span>
      </div>
      <a-menu theme="dark" mode="inline" class="layoutMenu">
        <a-menu-item v-for="item in menuList" :key="item.key">
          <div class="title" @click="() => handleMenu(item)">
            <Icon :iconClass="item.icon" />
            <span>
              {{ item.name }}
            </span>
            <a-icon
              :type="openKeys[item.key] ? 'down' : 'up'"
              class="toggle"
              @click.stop="() => handleToggle(item.key)"
            />
          </div>
          <div :class="{ menuInfo: true, hideMenu: openKeys[item.key] }">
            <span
              v-for="item1 in item.children"
              :key="item1.key"
              @click.stop="() => handleMenu(item1)"
              >{{ item1.name }}</span
            >
          </div>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <a-icon
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content>
        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="[]"> <router-view /></keep-alive>
        </transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      // 侧拉开关
      collapsed: false,
      // 折叠keys
      openKeys: {},
      // 侧拉菜单
      menuList: [
        {
          name: "首页",
          key: "home",
          icon: "integral",
          children: [
            {
              name: "首页",
              key: "home",
            },
            {
              name: "关于",
              key: "about",
            },
          ],
        },
        {
          name: "关于",
          key: "about",
          icon: "Customermanagement",
          children: [
            {
              name: "首页",
              key: "home",
            },
            {
              name: "关于",
              key: "about",
            },
          ],
        },
      ],
    };
  },
  methods: {
    // 二级菜单折叠
    handleToggle(key) {
      this.$set(this.openKeys, key, !this.openKeys[key]);
    },
    // 菜单点击
    handleMenu(item) {
      this.$router.push(item.key);
    },
  },
};
</script>
<style lang="less" scoped>
// 侧拉菜单悬浮
.svg-icon {
  display: none;
}

.toggle {
  display: none;
}

.menuInfo {
  display: none;
}

// 收起样式
.ant-layout-sider-collapsed {
  .sysName {
    display: none;
  }

  .layoutMenu {
    .title {
      padding-left: 28px !important;

      span {
        display: none !important;
      }

      .toggle {
        display: none !important;
      }
    }

    .menuInfo {
      display: none !important;
    }
  }
}

.ant-layout-header {
  background-color: #fff;
  text-align: left;
  padding: 0 24px;
}

.ant-layout-sider {
  .logo {
    display: flex;
    align-items: center;
    padding: 16px 0 16px 26px;
    background-color: #1a2d66;

    img {
      height: 32px;
    }

    .sysName {
      margin-left: 16px;
      color: #fff;
    }
  }

  .layoutMenu {
    background-color: #1a2d6e;
    min-height: calc(100vh - 64px);

    .title {
      height: 40px;
      font-size: 16px;
      display: flex;
      align-items: center;
      color: #b0b5cb;
      padding-left: 24px;
      position: relative;

      .svg-icon {
        display: inline-block;
        margin-right: 8px;
        font-size: 24px;
      }

      .toggle {
        display: inline-block;
        position: absolute;
        right: 14px;
        top: 14px;
        font-size: 12px;
      }
    }

    .menuInfo {
      display: block;
      padding-left: 24px;
      color: #999;
      background-color: #1a2d68;

      &.hideMenu {
        height: 0;
      }

      span {
        &:not(:last-child) {
          margin-right: 16px;
        }
      }
    }

    .ant-menu-item {
      height: auto;
      text-align: left;
      padding: 0 !important;

      &.ant-menu-item-selected {
        background-color: inherit;
      }
    }
  }
}
</style>
