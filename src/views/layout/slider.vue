<template>
  <div :class="['slider', { hideInfo: collapsed }]">
    <div class="logo">
      <w-Icon iconClass="robot" />
      <span class="label">{{ systemTitle }}</span>
    </div>
    <div class="menuList">
      <template v-for="(item, index) in menuList">
        <div :key="index">
          <div class="title">{{ item.title }}</div>
          <a-menu mode="inline" v-for="(item1, index1) in item.children" :key="index1">
            <a-sub-menu key="sub2">
              <span slot="title"
                ><w-Icon :iconClass="item1.iconClass" /><span class="label">{{
                  item1.title
                }}</span></span
              >
              <a-menu-item v-for="(item2, index2) in item1.list" :key="index2">
                <span class="name" @click="() => handleMenu(item2)">{{ item2.name }}</span>
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { systemTitle } from "@/settings";

export default {
  props: ["collapsed"],
  data() {
    return {
      systemTitle,
      menuList: [
        {
          title: "账号管理",
          children: [
            {
              title: "团队管理",
              iconClass: "gudongzhanghaoguanli",
              list: [
                {
                  name: "部门管理",
                  path: "/dashboard",
                },
                {
                  name: "岗位管理",
                  path: "/about",
                },
                {
                  name: "账号管理",
                  path: "/dashboard",
                },
              ],
            },
          ],
        },
        {
          title: "微信号",
          children: [
            {
              title: "微信号管理",
              iconClass: "wechat_icon",
              list: [
                {
                  name: "微信号管理",
                  path: "/wechat/acount",
                },
                {
                  name: "好友管理",
                  path: "/wechat/friendList",
                },
                {
                  name: "重复好友",
                  path: "/wechat/repeatFriends",
                },
                {
                  name: "标签管理",
                  path: "/wechat/labelSet",
                },
                {
                  name: "白名单",
                  path: "/wechat/whiteList",
                },
                {
                  name: "黑名单",
                  path: "/wechat/blackList",
                },
              ],
            },
            {
              title: "营销管理",
              iconClass: "yingxiao",
              list: [
                {
                  name: "添加好友",
                  path: "/about",
                },
                {
                  name: "发朋友圈",
                  path: "/about",
                },
                {
                  name: "同步朋友圈",
                  path: "/about",
                },
                {
                  name: "自动点赞",
                  path: "/about",
                },
              ],
            },
            {
              title: "智能化管理",
              iconClass: "guanli",
              list: [
                {
                  name: "自动通过",
                  path: "/about",
                },
                {
                  name: "好友问候",
                  path: "/about",
                },
                {
                  name: "自动回复",
                  path: "/about",
                },
                {
                  name: "关键字回复",
                  path: "/about",
                },
              ],
            },
          ],
        },
        {
          title: "社群",
          children: [
            {
              title: "社群管理",
              iconClass: "qun",
              list: [
                {
                  name: "群管理",
                  path: "/dashboard",
                },
                {
                  name: "行为管理",
                  path: "/about",
                },
                {
                  name: "群成员提取",
                  path: "/dashboard",
                },
                {
                  name: "重复加群",
                  path: "/about",
                },
              ],
            },
            {
              title: "营销管理",
              iconClass: "yewutuiguang",
              list: [
                {
                  name: "入群问候",
                  path: "/dashboard",
                },
                {
                  name: "关键字回复",
                  path: "/about",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    // 菜单导航
    handleMenu(item) {
      const { path } = item;
      this.$router.push(path);
    },
  },
};
</script>

<style lang="less" scoped>
.slider {
  background-color: #253f80;

  &.hideInfo {
    .label,
    .title {
      display: none;
    }
  }

  .logo {
    height: 56px;
    display: flex;
    align-items: center;
    color: #fff;
    background-color: #55a8fd;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;

    .svg-icon {
      font-size: 22px;
      margin: 0 28px;
    }
  }

  .menuList {
    height: calc(100vh - 56px);
    overflow: auto;

    .title {
      padding: 14px 0;
      font-size: 14px;
      color: #fff;

      &::before {
        width: 2px;
        height: 14px;
        content: "";
        vertical-align: middle;
        margin: 0 22px 0 0;
        display: inline-block;
        background: #55a8fd;
      }
    }

    /deep/ .ant-menu-submenu {
      background-color: #253f80;
      color: #f5f5f5;

      .ant-menu-submenu-title {
        width: 100%;

        &:hover {
          color: #f5f5f5;
          background-color: rgba(85, 168, 253, 0.3) !important;
        }

        .svg-icon {
          margin-right: 8px;
          font-size: 16px;
        }

        .ant-menu-submenu-arrow::before,
        .ant-menu-submenu-arrow::after {
          background: #666 !important;
        }
      }

      .ant-menu-sub {
        background-color: #253f80;
        color: #f5f5f5;

        .ant-menu-item {
          padding: 0 0 0 24px !important;
          width: 94px;
          height: 28px;
          line-height: 28px;
          float: left;

          .name {
            border-radius: 4px;
            padding: 4px 5px;
            font-size: 12px;
          }

          &:active {
            background-color: inherit;
          }

          &.ant-menu-item-selected,
          &:hover {
            background-color: inherit;
            color: #f5f5f5;

            &::after {
              opacity: 0;
            }

            .name {
              background-color: rgba(85, 168, 253, 0.3) !important;
            }
          }
        }
      }
    }
  }
}
</style>
