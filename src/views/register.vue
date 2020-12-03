<!--
 * @Description: 注册
 * @Author: wuwei
 * @Date: 2020-11-24 14:20:36
-->

<template>
  <div class="register">
    <div class="desc"></div>
    <div class="info">
      <h3>{{ systemTitle }}</h3>
      <a-tabs v-model="acountType">
        <a-tab-pane key="1">
          <span slot="tab">
            企业账号
          </span>
        </a-tab-pane>
        <a-tab-pane key="2">
          <span slot="tab">
            个人账号
          </span>
        </a-tab-pane>
      </a-tabs>
      <a-form :form="form">
        <a-form-item>
          <a-input
            v-decorator="['username', { rules: [{ required: true, message: '请输入账号名称!' }] }]"
            placeholder="账号名称"
            autoComplete="off"
          >
            <a-icon slot="prefix" type="user" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="['mobile', { rules: [{ required: true, message: '请输入手机号!' }] }]"
            placeholder="手机号"
            autoComplete="off"
          >
            <a-icon slot="prefix" type="mobile" />
          </a-input>
        </a-form-item>
        <a-form-item v-if="acountType === '2'">
          <a-input
            v-decorator="[
              'indestry',
              { rules: [{ required: true, message: '请输入您所从事的行业类型!' }] },
            ]"
            placeholder="您所从事的行业类型"
            autoComplete="off"
          >
            <a-icon slot="prefix" type="appstore" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="['password', { rules: [{ required: true, message: '请输入密码!' }] }]"
            placeholder="密码"
            type="password"
            autoComplete="new-password"
          >
            <a-icon slot="prefix" type="lock" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="['passwordAgain', { rules: [{ validator: checkPass }] }]"
            placeholder="确认密码"
            type="password"
            autoComplete="new-password"
          >
            <a-icon slot="prefix" type="lock" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            placeholder="验证码"
            autoComplete="off"
            size="large"
            :class="{ notSend: msgTime < 60 }"
          >
            <a-icon slot="prefix" type="safety" />
            <div slot="addonAfter" class="sendMsg" @click="sendMsg">
              {{ msgText }}
            </div>
          </a-input>
        </a-form-item>
        <a-form-item class="oper">
          <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
            我已阅读并同意
            <router-link to="/agreement">用户协议</router-link>
          </a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" class="submit" @click="registerConfirm">
            注册
          </a-button>
        </a-form-item>
      </a-form>
      <div class="back">
        <a-icon type="tag" /> 已有账号，<router-link to="/login">立即登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { systemTitle } from "@/settings";
const MSG_TIME = 60;

export default {
  name: "register",
  data() {
    return {
      acountType: "1",
      systemTitle,
      msgText: "发送验证码",
      msgTime: MSG_TIME,
      form: this.$form.createForm(this, { name: "register" }),
    };
  },
  beforeRouteLeave(to, from, next) {
    if (to.fullPath === "/agreement") {
      from.meta.keepAlive = true;
    } else {
      from.meta.keepAlive = false;
    }
    next();
  },
  mounted() {
    this.form.resetFields();
  },
  methods: {
    // 密码校验
    checkPass(rule, value, cb) {
      if (!value) {
        cb("请确认密码！");
      } else {
        const password = this.form.getFieldValue("password");
        if (password !== value) {
          cb("两次密码输入不一致！");
        } else {
          cb();
        }
      }
    },
    // 发送验证码
    sendMsg() {
      const time = setInterval(() => {
        this.msgTime--;
        this.msgText = `${this.msgTime}秒后重发`;
        if (this.msgTime === 0) {
          this.msgTime = MSG_TIME;
          this.msgText = "发送验证码";
          clearInterval(time);
        }
      }, 1000);
    },
    // 注册
    registerConfirm() {
      this.form.validateFields(err => {
        if (!err) {
          console.info("success");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.register {
  height: 100%;
  width: 100vw;
  background: #fff url("~@/assets/image/loginBack.png") no-repeat scroll center;
  background-size: cover;
  display: flex;
  align-items: center;

  .desc {
    flex: 1;
  }

  .info {
    width: 400px;
    border-radius: 16px;
    background-color: #fff;
    padding: 24px 32px;
    margin-right: 12%;

    h3 {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 16px;
    }

    /deep/ .ant-tabs-nav-wrap {
      text-align: center;
    }

    .back {
      display: flex;
      align-items: center;

      .anticon {
        margin-right: 8px;
      }
    }
  }

  .ant-form-item {
    .sendMsg {
      width: 70px;
      cursor: pointer;
    }

    .notSend {
      div {
        cursor: not-allowed;
        color: #999;
      }
    }

    &.oper {
      height: 40px;

      /deep/ .ant-form-item-control {
        line-height: 30px;

        .ant-form-item-children {
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .submit {
      width: 100%;
    }
  }
}
</style>
