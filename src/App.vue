<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>
<style lang="scss">
  html,
  body,
  #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .rangle {
    background: linear-gradient(to left, #74fbf5, #74fbf5) left top no-repeat,
    linear-gradient(to bottom, #74fbf5, #74fbf5) left top no-repeat,
    linear-gradient(to left, #74fbf5, #74fbf5) right top no-repeat,
    linear-gradient(to bottom, #74fbf5, #74fbf5) right top no-repeat,
    linear-gradient(to left, #74fbf5, #74fbf5) left bottom no-repeat,
    linear-gradient(to bottom, #74fbf5, #74fbf5) left bottom no-repeat,
    linear-gradient(to left, #74fbf5, #74fbf5) right bottom no-repeat,
    linear-gradient(to left, #74fbf5, #74fbf5) right bottom no-repeat;
    /*设置大小*/

    background-size: 0.15rem 0.9rem, 0.9rem 0.15rem, 0.15rem 0.9rem,
    0.9rem 0.15rem;
  }
  .overflow {
    overflow: hidden; //超出的文本隐藏
    text-overflow: ellipsis; //溢出用省略号显示
    white-space: nowrap; //溢出不换行
  }
</style>
