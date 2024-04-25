<template>
  <div class="wrap">
    <!-- 顶部结构 -->
    <div class="top">
      <div class="hosname">yiy</div>
      <div class="line"></div>
      <div>kes</div>
      <div class="dot">.</div>
      <div class="hosdeparment">sa</div>
    </div>
    <!-- 中间展示日期的结构 -->
    <div class="center">
      <h1 class="time">shij</h1>
      <div class="container">
        <div class="item">
          <div class="top1">1</div>
          <div class="bottom">
            <div>停止挂号</div>
            <div></div>
            <div>即将放号</div>
          </div>
        </div>
      </div>
      <el-pagination layout="prev, pager, next" :total="10" />
    </div>
    <!-- 底部展示医生的结构 -->
    <div class="bottom"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { reqHospitalRegisterData } from "@/api/hospital/index";
import type { registerData } from "@/api/hospital/type";
import { useRoute } from "vue-router";
let $route = useRoute();
let page = ref(1);
let limit = ref(10);

const fetchData = async () => {
  let result: registerData = await reqHospitalRegisterData(
    page.value,
    limit.value,
    $route.query.hoscode as string,
    $route.query.depcode as string
  );
  console.log(result);
};
onMounted(() => {
  fetchData();
});
</script>

<style scoped lang="scss">
.wrap {
  .top {
    display: flex;
    color: #7f7f7f;
    .line {
      width: 5px;
      height: 20px;
      background: skyblue;
      margin: 0px 5px;
    }
    .dot {
      margin: 0px 5px;
      color: skyblue;
    }
  }
  .center {
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .time {
      font-weight: 900;
    }
    .container {
      width: 100%;
      display: flex;
      margin: 30px 0px;
      .item {
        flex: 1;
        width: 100%;
        border: 1px solid skyblue;
        margin: 0px 10px;
        transition: all 0.3s;
        &.active {
          border: 1px solid #ccc;
          color: #7f7f7f;
          .top1 {
            background: #ccc;
          }
        }

        &.cur {
          transform: scale(1.1);
        }
        .top1 {
          background: #e8f2ff;
          height: 30px;
          width: 100%;
          text-align: center;
          line-height: 30px;
        }
        .bottom {
          width: 100%;
          height: 60px;
          text-align: center;
          line-height: 60px;
        }
      }
    }
  }
  .bottom {
    .will {
      text-align: center;
      font-size: 30px;
      font-weight: 900;
      .time {
        color: red;
      }
      .willText {
        color: skyblue;
      }
    }
    .doctor {
      .moring {
        .tip {
          display: flex;
          align-items: center;
          .text {
            color: #7f7f7f;
            font-weight: 900;
          }
        }
        .doc_info {
          display: flex;
          justify-content: space-between;
          margin: 10px 0px;
          border-bottom: 1px solid #ccc;
          .left {
            .info {
              color: skyblue;
              margin: 10px 0px;
              span {
                margin: 0px 5px;
                font-size: 18px;
                font-weight: 900;
              }
            }
            .skill {
              margin: 10px 0px;
              color: #7f7f7f;
            }
          }
          .right {
            width: 150px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .money {
              color: #7f7f7f;
              font-weight: 900;
            }
          }
        }
      }
    }
  }
}
</style>
