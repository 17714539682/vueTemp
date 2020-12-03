<template>
  <a-config-provider :locale="zh_CN">
    <div id="app">
      <router-view v-if="!$route.meta.keepAlive && isRouterAlive"></router-view>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive && isRouterAlive"></router-view>
      </keep-alive>
    </div>
  </a-config-provider>
</template>

<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("zh-cn");
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      zh_CN,
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => (this.isRouterAlive = true));
    },
  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
  min-width: 1280px;
  min-height: 660px;
}
</style>
