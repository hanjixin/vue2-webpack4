<template>
  <div class="login-container">
    <div class="top">
      <div class="text">加入如荐，工作就在身边!</div>
    </div>
    <div class="login-content">
      <mt-field label="姓名" placeholder="请填写" :disableClear="true" v-model="name"></mt-field>
      <mt-field
        label="性别"
        placeholder="请选择"
        @click.native="showActionSheetSex"
        readonly
        :disabled="true"
        :disableClear="true"
        v-model="sex"
      >
        <img src="/static/img/right.png" width="24" height="24">
      </mt-field>
      <mt-field
        label="年龄"
        placeholder="请选择"
        @click.native="showActionSheetAge"
        readonly
        :disabled="true"
        :disableClear="true"
        v-model="age"
      >
        <img src="/static/img/right.png" width="24" height="24">
      </mt-field>
      <mt-field
        label="手机"
        placeholder="请输入常用手机号"
        :attr="{ maxlength: 11 }"
        type="number"
        v-model="phone"
      ></mt-field>
      <mt-field
        label="验证码"
        :disableClear="true"
        :attr="{ maxlength: 6}"
        type="number"
        v-model="number"
      >
        <div class>
          <span @click="sendcode" v-if="is_disabled">获取验证码</span>
          <span v-else>{{time}}s</span>
        </div>
      </mt-field>
    </div>
    <div class="btn-container">
      <mt-button @click.native="next" type="danger" size="large" :disabled="is_disabled">进入如荐</mt-button>
    </div>
    <div class="tips">
      进入如荐代表你已同意
      <span @click="goAgree" path="/useagree" class="color">《如荐用户协议》</span>
    </div>
    <my-popup
      @callbackvalue="enter"
      @cancel="cancel"
      v-bind:popupVisible="popupVisible"
      :popupData="popupData"
    ></my-popup>
  </div>
</template>

<script>
import myPopup from "@/views/myPopup.vue";
import ENUM from "src/config/enum";
import { isPhone } from "@/utils";
import { updateInfo, selectType } from "src/api/city";
import { sendCode, login } from "src/api/company";

import axios from "axios";
import downVue from "./down.vue";
export default {
  components: {
    ENUM,
    myPopup
  },
  data: () => {
    return {
      number: "",
      phone: "",
      name: "",
      sex: "",
      age: "",
      is_disabled: true,
      time: 60,
      key: "",
      popupData: [],
      popupVisible: false
    };
  },
  methods: {
    sendcode() {
      if (!isPhone(this.phone)) {
        this.$toast({
          message: "请填写正确的手机号",
          position: "bottom",
          duration: 2000
        });
        return;
      }
      sendCode(this.phone).then(res => {
        if (res.data.status == 1) {
          this.is_disabled = false;
          this.time = 60;
          this.time--;
          window.timer = setInterval(() => {
            this.time--;
            if (this.time == 0) {
              window.clearInterval(window.timer);
              this.is_disabled = true;
              this.number = "";
            }
          }, 1000);
        }
      });
    },
    showActionSheetSex(theme) {
      this.popupData = [
        {
          flex: 1,
          values: ["女", "男"],
          defaultIndex: 1,
          textAlign: "center"
        }
      ];
      this.popupVisible = true;
      this.key = "sex";
    },
    showActionSheetAge() {
      var values = [];
      for (var i = 16; i <= 65; i++) {
        values.push(i);
      }
      this.popupData = [
        {
          flex: 1,
          values: values,
          defaultIndex: 0,
          value: "",
          textAlign: "center"
        }
      ];
      this.popupVisible = true;
      this.key = "age";
    },
    enter(value) {
      console.log(value);
      this[this.key] = value;
      this.popupVisible = false;
    },
    cancel() {
      this.popupVisible = false;
    },
    goAgree() {
      this.$router.push({
        path: "/useagree"
      });
    },
    next() {
      if (this.name == "" || this.name == "请填写") {
        this.$toast({
          message: "请填写姓名",
          position: "middle",
          duration: 2000
        });
      } else if (this.sex == "" || this.sex == "请选择") {
        this.$toast({
          message: "请选择性别",
          position: "middle",
          duration: 2000
        });
      } else if (this.age == "" || this.age == "请选择") {
        this.$toast({
          message: "请选择年龄",
          position: "middle",
          duration: 2000
        });
      } else if (!isPhone(this.phone)) {
        this.$toast({
          message: "请填写正确的手机号",
          position: "middle",
          duration: 2000
        });
      } else if (this.number == "") {
        this.$toast({
          message: "请填写验证码",
          position: "middle",
          duration: 2000
        });
      } else {
        login(parseInt(this.phone), this.number, this.$route.query.qrid).then(
          res => {
            if (res.data.status == 1 && !res.data.data.type) {
              this.$store.dispatch("setUserInfo", res.data.data);
              updateInfo(
                this.name,
                this.sex,
                this.age,
                "",
                "",
                this.$store.getters.userInfo.ticket,
                "",
                "",
                "/static/img/logo.png"
              ).then(res => {
                selectType(1, this.$store.getters.userInfo.ticket)
                  .then(res => {
                    this.$router.push({
                      path: "/down"
                    });
                  })
                  .catch(() => {});
              });
            } else {
              if (
                res.data.data == "registered" ||
                res.data.errorMessage.indexOf("手机号已注册") != -1 ||
                res.data.data.type
              ) {
                this.$toast({
                  message: "此手机号已注册，可通过APP直接登录 然后直接进入到 APP 下载页面",
                  position: "middle",
                  duration: 2000
                });
                this.$router.push({
                  path: "/down"
                });
              } else {
                  this.$toast({
                  message: "" + res.data.errorMessage,
                  position: "middle",
                  duration: 2000
                });
              }
            }
          }
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  background: white;
  height: 100vh;
  padding-top: 60px;
  box-sizing: border-box;

  .top {
    padding: 0 20px;
    display: block;
    align-items: center;
    text-align: center;
    height: 25px;
    .text {
      font-size: 19px;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      font-size: 19px;
      color: #333333;
    }

    margin-bottom: 35px;
  }

  .login-content {
    position: relative;
    input {
      text-align: right;
    }
    .mint-field-core {
      text-align: right;
    }
    .code {
      position: absolute;
      right: 20px;
      bottom: 15px;
      color: #666666;
      font-size: 13px;
    }
  }
  .mint-cell-wrapper {
    padding: 0 !important;
    margin: 0 20px !important;
    width: 100% !important;
  }
  .btn-container {
    padding: 50px 20px 15px;
  }
  .tips {
    padding-left: 20px;
    color: #cccccc;
    font-size: 12px;
  }
}
</style>
<style>
.login-container .mint-cell-wrapper {
  padding: 0 !important;
  margin: 0 20px !important;
  width: 100% !important;
}
.login-container input:disabled {
  background-color: #fff;
  color: #333333;
  opacity: 1;
  /* -webkit-text-fill-color:#333333 ; */
  -webkit-opacity: 1;
}
  .login-container .mint-field-core {
  font-size: 15px;
}
.login-container .mint-button--danger {
  background-color: #01b888;
}
.login-content input {
  position: relative;
  text-align: right;
}
.login-content .mint-cell:last-child .mint-cell-wrapper {
  background-image: linear-gradient(
    180deg,
    #d9d9d9,
    #d9d9d9 50%,
    transparent 50%
  ) !important;
}
</style>
