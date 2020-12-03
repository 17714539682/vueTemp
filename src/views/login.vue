<!--
 * @Description: 登录
 * @Author: wuwei
 * @Date: 2020-11-24 14:20:36
-->

<template>
  <div class="login">
    <div class="desc"></div>
    <div class="info">
      <h3>{{ systemTitle }}</h3>
      <a-form :form="form">
        <a-form-item>
          <a-input
            v-decorator="[
              'username',
              { initialValue: username, rules: [{ required: true, message: '请输入账户名!' }] },
            ]"
            placeholder="账户"
            autoComplete="off"
          >
            <a-icon slot="prefix" type="user" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              { initialValue: password, rules: [{ required: true, message: '请输入密码!' }] },
            ]"
            placeholder="密码"
            type="password"
            autoComplete="new-password"
          >
            <a-icon slot="prefix" type="lock" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <div class="safety">
            <a-input
              v-decorator="[
                'safety',
                { rules: [{ required: true, min: 4, max: 4, message: '请输入验证码!' }] },
              ]"
              placeholder="验证码"
              autoComplete="off"
            >
              <a-icon slot="prefix" type="safety" />
            </a-input>
            <img class="safety" :src="`${safetyUrl}${uuid}`" @click="getVerifyCode" />
          </div>
        </a-form-item>
        <a-form-item class="oper">
          <a-checkbox :checked="checkNick" @change="handleSavePass">
            记住密码
          </a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" class="submit" @click="loginConfirm">
            登录
          </a-button>
        </a-form-item>
      </a-form>
      <div class="back">
        <a-icon type="tag" /> 没有账号， <router-link to="/register">免费注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { systemTitle } from "@/settings";
import { mapActions } from "vuex";
import { setCookie, getCookie, delCookie } from "@/utils/cookie";
// 验证码地址
const safetyUrl = "/api/normal/tools/getVerifyCode?uuid=";

export default {
  name: "login",
  data() {
    return {
      systemTitle,
      username: "",
      password: "",
      safetyUrl,
      uuid: "",
      checkNick: false,
      form: this.$form.createForm(this, { name: "login" }),
    };
  },
  created() {
    this.getVerifyCode();
    const username = getCookie("username");
    const password = getCookie("password");
    if (username) {
      this.username = username;
      this.password = password;
      this.checkNick = true;
    }
  },
  methods: {
    ...mapActions("user", ["login"]),
    // 验证码刷新
    getVerifyCode() {
      this.uuid = Math.ceil(Math.random() * 100000000);
    },
    // 记住密码
    handleSavePass(e) {
      this.checkNick = e.target.checked;
    },
    // 登录
    loginConfirm() {
      this.form.validateFields((err, values) => {
        if (!err) {
          if (this.checkNick) {
            const { username, password } = values;
            setCookie("username", username, 7);
            setCookie("password", password, 7);
          } else {
            delCookie("username");
            delCookie("password");
          }
          this.login(values);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
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

    .back {
      display: flex;
      align-items: center;

      .anticon {
        margin-right: 8px;
      }
    }
  }

  .ant-form-item {
    .safety {
      display: flex;

      img {
        height: 30px;
        width: 90px;
        margin-left: 8px;
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
