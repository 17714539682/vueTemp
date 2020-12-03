<!--
 * @Description: 公共菜单
 * @Author: wuwei
 * @Date: 2020-11-16 14:08:58
-->
<template>
  <a-layout class="layout">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <slider :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <a-icon
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />

        <div class="right">
          <div class="navList">
            <div class="item">
              <router-link to="/dashboard">首页</router-link>
            </div>
            <div class="item">
              <router-link to="/help">帮助中心</router-link>
            </div>
            <div class="item">
              <router-link to="/about">关于我们</router-link>
            </div>
          </div>
          <a-dropdown placement="bottomRight" :trigger="['click']">
            <a-menu slot="overlay" class="userList">
              <a-menu-item>
                <router-link to="/userinfo">个人中心</router-link>
              </a-menu-item>
              <a-menu-item>
                <router-link to="/login" @click="loginOut">退出系统</router-link>
              </a-menu-item>
            </a-menu>
            <div class="user">
              <a-avatar style="background: #eef3fb;">
                <w-Icon slot="icon" iconClass="user" />
              </a-avatar>
              <span class="name">张传</span>
              <a-icon type="caret-down" />
            </div>
          </a-dropdown>
        </div>
      </a-layout-header>
      <a-layout-content>
        <a-breadcrumb v-if="breadcrumb">
          <a-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">{{
            item
          }}</a-breadcrumb-item>
        </a-breadcrumb>
        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="[]"> <router-view /></keep-alive>
        </transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { mapActions } from "vuex";
import slider from "./slider";

export default {
  components: { slider },
  computed: {
    breadcrumb() {
      return this.$route.meta.breadcrumb;
    },
  },
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
    ...mapActions("user", ["loginOut"]),
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
<style lang="less">
.ant-layout-header {
  background-color: #fff;
  padding: 0 16px;
  height: 56px;
  line-height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .right {
    display: flex;

    .navList {
      display: flex;

      .item {
        margin: 0 16px;
        cursor: pointer;

        a {
          color: inherit;
        }
      }
    }

    .user {
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-left: 60px;

      .name {
        font-size: 16px;
        padding: 0 8px;
      }

      .ant-avatar {
        background-color: #87d068;
      }
    }
  }
}

.ant-layout-content {
  margin: 8px;

  .ant-breadcrumb {
    padding-bottom: 8px;
    background-color: #f0f2f5;
  }
}
</style>
