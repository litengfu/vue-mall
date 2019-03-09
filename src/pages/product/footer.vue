<template>
  <footer class="g-tabbar">
    <div class="footer-left">
      <a :href="seller.taoShopUrl">
        <i class="iconfont icon-shop"></i>
        <span>店铺</span>
      </a>
      <a href="javascript:void(0)">
        <i class="iconfont icon-service"></i>
        <span>客服</span>
      </a>
      <a href="javascript:void(0)">
        <i class="iconfont icon-collect"></i>
        <span>收藏</span>
      </a>
    </div>
    <div class="footer-right">
      <div class="footer-right-cart" @click='createCart'>加入购物车</div>
      <div class="footer-right-buy">马上抢</div>
    </div>
  </footer>
</template>
<script>
  import {cart} from 'api/cart';
  export default {
    name: 'ProductFooter',
    data() {
      return {
        seller: {}
      };
    },
    props: {
      data: {
        type: [Array, Object],
        default() {
          return {};
        }
      }
    },
    watch: {
      data(newData) {
        this.seller = newData.seller;
        this.$emit('update');
      }
    },
    methods: {
      createCart() {
        cart().then(data => {
          console.log(data);
        });
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/tabbar";
  @import "../../assets/scss/mixins";
  .g-tabbar{
    position: absolute;
    bottom:0;
    left:0;
    z-index: $product-z-index + 10;
  }
  .footer-left{
    width: 48%;
    display: flex;
    a{
      display: inline-block;
      flex:1;
      @include flex-center(column);
      .iconfont{
        font-size: 18px;
        display: inline-block;
        margin-bottom: 3px;
      }
    }
  }
  .footer-right{
    flex: 1;
    display: flex;
    &-cart,
    &-buy
    {
      flex: 1;
      @include flex-center();
      color:#fff;
    }
    &-cart{
      background: #ff9500;
    }
    &-buy{
      background: #ff0036;
    }
  }
</style>
