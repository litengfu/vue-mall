<template>
  <transition name="product">
    <div class="product">
    <header class="g-header-container">
      <product-header/>
    </header>
    <me-scroll :data="data" ref="scroll">
      <div class="product-content">
        <product-slider :productItem="productItem" v-if="productItem" @getData="getData"/>
        <product-info :data="data"/>
        <product-comments :data="data" @update="update"/>
      </div>
    </me-scroll>
    <product-footer :data="data"/>
  </div>
  </transition>
</template>
<script>
  import MeScroll from 'base/scroll';
  import ProductHeader from './header';
  import ProductSlider from './slider';
  import ProductInfo from './info';
  import ProductComments from './comments';
  import ProductFooter from './footer';
  export default {
    name: 'Product',
    data() {
      return {
        productId: '',
        productItem: [],
        data: [],
        newData: []
      };
    },
    components: {
      ProductHeader,
      ProductSlider,
      ProductInfo,
      ProductComments,
      MeScroll,
      ProductFooter
    },
    methods: {
      getData(data) {
        this.data = data;
      },
      update() {
        this.$refs.scroll.update();
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/mixins";
  .product {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: $product-z-index;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }
  .g-header-container{
    z-index: $product-z-index + 1;
  }
  .product-content{
    width:100%;
    height:100%;
    padding: 0 0 $tabbar-height 0;
  }
  .product-enter-active,
  .product-leave-active{
    transition: all 0.3s;
  }
  .product-enter,
  .product-leave-to
  {
    transform: translate3d(100%, 0, 0);
  }
</style>
