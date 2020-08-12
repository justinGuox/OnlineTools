<template>
    <div>

    </div>
</template>

<script>
  import { localhost, baiduHelpOpen } from '../../router/name-type'
  export default {
    mounted() {
      this.jumpHtml()
    },
    methods: {
      jumpHtml() {
        window.open(baiduHelpOpen)
        window.location.href = localhost
      }
    }
  }
</script>

<style lang="less">

</style>
