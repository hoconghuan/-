<template>
    <div class="level">

        <div class="content">
            <div class="left">地区:</div>
            <ul>
                <li class="active">全部</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li v-for="item in 40" key="item">昌平区</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.level {
    color: #7f7f7f;
    margin: 10px 0;

    .content {
        display: flex;

        .left {
            margin-right: 10px;
            min-width: 40px
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
