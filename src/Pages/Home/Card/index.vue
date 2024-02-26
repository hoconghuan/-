<template>
    <div>
        <el-card shadow="hover" class="box-card">
            <div class="content">
                <div class="left">
                    <div class="name">{{ hospitalInfo.hosname }}</div>
                    <div class="tip">
                        <div class="left">
                            <svg t="1701917868231" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4242" width="14" height="14">
                                <path
                                    d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"
                                    p-id="4243"></path>
                            </svg>
                            <span>{{ hospitalInfo.param.hostypeString }}</span>
                        </div>
                        <div class="right">
                            <svg t="1701918391878" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="5560" id="mx_n_1701918391879" width="16"
                                height="16">
                                <path
                                    d="M554.666667 516.266667l102.4 102.4-59.733334 59.733333-123.733333-123.733333H469.333333V341.333333h85.333334v174.933334zM512 853.333333c-187.733333 0-341.333333-153.6-341.333333-341.333333s153.6-341.333333 341.333333-341.333333 341.333333 153.6 341.333333 341.333333-153.6 341.333333-341.333333 341.333333z m0-85.333333c140.8 0 256-115.2 256-256s-115.2-256-256-256-256 115.2-256 256 115.2 256 256 256z"
                                    fill="#bfbfbf" p-id="5561"></path>
                            </svg>
                            <span>{{ hospitalInfo.bookingRule?.releaseTime }}-{{ hospitalInfo.bookingRule?.stopTime
                            }}</span>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <img :src='`data:image/jpeg;base64,${hospitalInfo.logoData}`' alt="">
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
defineProps(['hospitalInfo'])
</script>

<style scoped lang="scss">
.content {
    display: flex;
    justify-content: space-between;

    .left {
        width: 60%;

        .name {
            font-size: 16px;
            color: grey;
        }

        .tip {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;

            font-size: 12px;
            color: grey;
            margin-top: 10px;

            .left,
            .right {
                display: flex;

                align-items: center;

                span {
                    margin-left: 5px;
                }
            }
        }
    }

    .right {
        img {
            width: 50px;
            height: 50px;
        }
    }

}
</style>