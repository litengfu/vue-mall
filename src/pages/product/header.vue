<template>
  <product-navbar title = "商品详情" class="product-header">
    <i
      class="iconfont icon-back"
      slot="left"
      @click="back"
    ></i>
    <i
      class="iconfont icon-cart"
      slot="right"
    ></i>
  </product-navbar>
</template>
<script>
  import ProductNavbar from 'base/navbar';
  export default {
    name: 'ProductHeader',
    components: {
      ProductNavbar
    },
    methods: {
      back() {
        this.$router.back();
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/mixins";
  .product-header {
    color: #fff;
    background: $header-bgc-translucent;
    .iconfont{
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }
</style>
