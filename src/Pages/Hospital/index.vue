<template>
  <div class="hospital">
    <div class="menu">
      <div class="top">
        <el-icon> <HomeFilled /> </el-icon><span> / 医院信息</span>
      </div>
      <el-menu
        @select="handleSelect"
        :router="true"
        default-active="/hospital/register"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="/hospital/register">
          <el-icon><icon-menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/information">
          <el-icon>
            <document />
          </el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospital/appointment">
          <el-icon>
            <setting />
          </el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/diagnose">
          <el-icon>
            <InfoFilled />
          </el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hospital/check">
          <el-icon>
            <Search />
          </el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content" :span="18">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Setting,
  InfoFilled,
  Search,
  HomeFilled,
} from "@element-plus/icons-vue";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "@/store/hospital"; //const useStore: StoreDefinition<"info", 拿到的是pinia设置存储useStore函数。
let getDtail = useStore(); // 执行pinia中的useStore函数，并拿到返回值赋值给getDtail

let $route = useRoute();
let $router = useRouter();
// console.log('router', $router);

// console.log('route', $route);

onMounted(() => {
  getDtail.getCode($route.query.hoscode as string);
  getDtail.getDepartment($route.query.hoscode as string);
});
const handleSelect = (index: string) => {
  $router.push({ path: index, query: { hoscode: $route.query.hoscode } });
};
// 当使用第三方插件时一定要把它的特性、方法、属性都认真看一遍。比如这里尚硅谷老师用了事件循环，然后才传递query参数。但是elementplus里面写了"router'属性，不用再单独设path，在事件循环里人家也写了select函数来传递query参数。 c:\Users\ho\Desktop\syt\src\pages\hospital\search\index.vue
</script>

<style lang="scss" scoped>
.hospital {
  display: flex;

  .menu {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;

    .top {
      margin-top: 10px;
      color: #7f7f7f;
      font-size: 1rem;
      align-items: center;
    }
  }

  .content {
    flex: 8;
  }
}
</style>
