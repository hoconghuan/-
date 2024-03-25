<template>
  <div>倒计时{{ time }}s</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

let props = defineProps(['flag'])
let emit = defineEmits(['getFlag']);
// props和emit传递时为什么要这样写：props=defineProps(['flag'])，emit=defineEmits(['getFlag'])
// 上面的两种写法等同于 props=defineProps({flag:Boolean}), emit=defineEmits({getFlag:voolean})   
// 在JS中 obj={a:1,b:2} 等同于 obj['a'] = 1, obj['b'] = 2 ,即obj.a 等同于 obj['a']
let time = ref(5)
watch(() => props.flag, () => {
  //开启定时器
  let timer = setInterval(() => {
    time.value--;
    if (time.value == 0) {
      //通知父组件倒计时模式结束
      emit('getFlag', false);
      //清除定时器
      clearInterval(timer);
    }
  }, 1000);;
}, {
  immediate: true, deep: true
})

</script>

<style scoped></style>
