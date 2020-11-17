<!--
 * @Description: 
 * @Author: wuwei
 * @Date: 2020-11-16 14:08:58
-->
<template>
  <a-layout class="layout">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" class="layoutMenu">
        <a-menu-item key="1">
          <div class="title">
            <a-icon type="video-camera" />
            <span>nav 1</span>
            <a-icon type="up" class="toggle" @click="openKeys[1] = true" />
          </div>
          <div :class="{ menuInfo: true, hideInfo: openKeys[1] }">1111</div>
        </a-menu-item>
        <a-menu-item key="2">
          <div class="title">
            <a-icon type="video-camera" />
            <span>nav 2</span>
            <a-icon type="up" class="toggle" />
          </div>
          <div class="menuInfo">1111</div>
        </a-menu-item>
        <a-menu-item key="3">
          <div class="title">
            <a-icon type="video-camera" />
            <span>nav 3</span>
            <a-icon type="up" class="toggle" />
          </div>
          <div class="menuInfo">1111</div>
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
      // 侧拉
      collapsed: false,
      // keys
      openKeys: {},
    };
  },
};
</script>
<style lang="less" scoped>
.toggle {
  display: none;
}
.menuInfo {
  height: 0;
}
.layout {
  .logo {
    height: 10px;
  }
  .ant-layout-header {
    background-color: #fff;
    text-align: left;
  }
  .layoutMenu {
    height: 100%;
    .title {
      line-height: 40px;
      .toggle {
        display: inline-block;
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
    .menuInfo {
      height: inherit;
    }
    &.ant-menu-inline-collapsed {
      .toggle {
        display: none;
      }
      .menuInfo {
        height: 0;
      }
    }
    .ant-menu-item {
      height: auto;
      text-align: left;
      &.ant-menu-item-selected {
        background-color: inherit;
      }
    }
  }
}
</style>
