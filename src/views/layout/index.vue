<!--
 * @Description: 
 * @Author: wuwei
 * @Date: 2020-11-16 14:08:58
-->
<template>
  <div class="about">
    <h1>layout</h1>
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="[]"> <router-view /></keep-alive>
    </transition>
  </div> </template
>;

<script>
export default {
  name: "layout"
};
</script>
