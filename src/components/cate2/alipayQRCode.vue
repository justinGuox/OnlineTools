<template>
    <div>

    </div>
</template>

<script>
  import { localhost, alipayQRCode } from '../../router/name-type'
  export default {
    mounted() {
      this.jumpHtml()
    },
    methods: {
      jumpHtml() {
        window.open(alipayQRCode)
        window.location.href = localhost
      }
    }
  }
</script>

<style lang="less">

</style>
