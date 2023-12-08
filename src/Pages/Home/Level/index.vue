<template>
    <div class="level">
        <h1>医院</h1>
        <div class="content">
            <div class="left">等级:</div>
            <ul>
                <li class="active">全部</li>
                <li>三级甲等</li>
                <li>三级甲等</li>
                <li>三级甲等</li>
                <li>三级甲等</li>
                <li>三级甲等</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

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
            min-width: 40px
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
