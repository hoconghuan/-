<template>
  <div class="header">
    <div class="container">
      <div class="left" @click="getback">
        <img src="../../assets/images/logo.png" alt="tubuaio" />
        <span>尚医通 预约挂号统一平台</span>
      </div>
      <div class="right">
        <div class="span1">帮助中心</div>
        <div style="cursor: pointer;" @click="login" v-if="!userStore.userInfo.token">登录/注册</div>
        <div v-else>
          <el-dropdown>
            <span class="el-dropdown-link">
              <span>欢迎您，{{ userStore.userInfo.name }}</span>
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
let $router = useRouter();
import { useUserStore } from "@/store/user/index";
let userStore = useUserStore();
const getback = () => {
  $router.push("/");
};
const login = () => {
  userStore.visible = true;
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 70px;
  background-color: #ccc;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  .container {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 70px;
        height: 70px;
      }

      span {
        font-size: 20px;
        color: #fff;
      }
    }

    .right {
      display: flex;
      font-size: 16px;
      color: #ac5d5d;

      div {
        &:first-child {
          border-right: 1px solid black;
        }

        padding: 0 10px;
      }
    }
  }
}
</style>
