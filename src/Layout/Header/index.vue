<template>
    <div class="header">
        <div class="container">
            <div class="left">
                <img src="../../assets/images/logo.png" alt="tubuaio">
                <span>尚医通 预约挂号统一平台</span>
            </div>
            <div class="right">
                <div class="span1">帮助中心</div>
                <div>登录/注册</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

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