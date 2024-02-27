<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级:</div>
      <ul>
        <li :class="{ active: activeFlag == '0' }" @click="changeLevel('0')">
          全部
        </li>
        <li
          v-for="item in levelArr"
          :class="{ active: activeFlag == item.value }"
          @click="changeLevel(item.value)"
          :key="item.id"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getHospitalLevelAndRegion } from "@/api/home/index";
import type {
  HospitalLevelAndRegionResponseData,
  HospitalLevelAndRegionArr,
} from "@/api/home/type";
import { onMounted, ref } from "vue";
let levelArr = ref<HospitalLevelAndRegionArr>([]);
let activeFlag = ref<string>("0");
let $emit = defineEmits(["changeLevel"]);
onMounted(() => {
  getLevel();
});
const getLevel = async () => {
  const res: HospitalLevelAndRegionResponseData =
    await getHospitalLevelAndRegion("HosType");
  // console.log(res);
  if (res.code == 200) {
    levelArr.value = res.data;
  }
};
const changeLevel = (value: string) => {
  activeFlag.value = value;
  //   console.log(activeFlag.value);
  $emit("changeLevel", activeFlag.value);
};
</script>

<style scoped lang="scss">
.level {
  color: #7f7f7f;

  h1 {
    font-weight: 900;
    margin: 10px 0;
  }

  .content {
    display: flex;

    .left {
      margin-right: 10px;
      min-width: 40px;
    }

    ul {
      display: flex;
      justify-content: center;

      li {
        margin-right: 10px;

        &.active {
          color: skyblue;
        }

        &:hover {
          color: skyblue;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
