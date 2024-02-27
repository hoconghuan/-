<template>
  <div class="level">
    <div class="content">
      <div class="left">地区:</div>
      <ul>
        <li :class="{ active: activeFlag == '' }" @click="changeRegion('')">
          全部
        </li>

        <li v-for="item in regionArr" :key="item.id" :class="{ active: activeFlag == item.value }"
          @click="changeRegion(item.value)">
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
let regionArr = ref<HospitalLevelAndRegionArr>([]);
let activeFlag = ref<string>("");

let $emit = defineEmits(["getRegion"]);
onMounted(() => {
  getRegion();
});
const getRegion = async () => {
  const res: HospitalLevelAndRegionResponseData =
    await getHospitalLevelAndRegion("beijin");
  // console.log(res);
  regionArr.value = res.data;
};

const changeRegion = (value: string) => {
  activeFlag.value = value;
  $emit("getRegion", value);
};
</script>

<style scoped lang="scss">
.level {
  color: #7f7f7f;
  margin: 10px 0;

  .content {
    display: flex;

    .left {
      margin-right: 10px;
      min-width: 40px;
    }

    ul {
      display: flex;

      flex-wrap: wrap;

      li {
        margin: 0 10px 10px 0;

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
@/api/home/type copy