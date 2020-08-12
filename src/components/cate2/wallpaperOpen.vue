<template>
    <div>

    </div>
</template>

<script>
import { wallpaperOpen } from '../../router/name-type'
export default {
  mounted() {
    this.jumpHtml()
  },
  methods: {
    jumpHtml() {
      window.location.href = wallpaperOpen
    }
  }
}
</script>

<style lang="less">

</style>
