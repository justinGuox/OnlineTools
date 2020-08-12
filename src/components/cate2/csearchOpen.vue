<template>
    <div>

    </div>
</template>

<script>
import { localhost, csearchOpen } from '../../router/name-type'
export default {
  mounted() {
    this.jumpHtml()
  },
  methods: {
    jumpHtml() {
      window.open(csearchOpen)
      window.location.href = localhost
    }
  }
}
</script>

<style lang="less">

</style>
