<template>
  <div class="wrapper">
    <div class="order-header">
      <div class="order-header-myOrder">
        <i class="iconfont icon-dingdan"></i>
        <span>我的订单</span>
      </div>
      <div class="order-header-queryOrder">
        查看我的全部订单 >
      </div>
    </div>
    <div class="order-bottom">
      <div class="order-bottom-item">
        <i class="iconfont icon-daifukuan"></i>
        <span>待付款</span>
      </div>
      <div class="order-bottom-item">
        <i class="iconfont icon-daifahuo-"></i>
        <span>待收货</span>
      </div>
      <div class="order-bottom-item">
        <i class="iconfont icon-daipingjia"></i>
        <span>待评价</span>
      </div>
      <div class="order-bottom-item">
        <i class="iconfont icon-tuihuo"></i>
        <span>退货/退款</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PersonalOrder'
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/mixins";
  .wrapper{
    margin-top:10px;
    background: #fff;
    width: 100%;
    .order-header{
      text-indent: 1em;
      border:1px #efefef solid;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height:40px;
      .order-header-myOrder{
        .iconfont{
          font-size: 18px;
          margin-right:3px;
        }
        span{
          color:black;
          font-size: 14px;
          margin-left:5px;
        }
      }
      .order-header-queryOrder{
        font-size: 14px;
        margin-right:10px;
      }
    }
    .order-bottom{
      width:100%;
      height:70px;
      display:flex;
      &-item{
        flex:1;
        @include flex-center(column);
        .iconfont{
          font-size: 23px;
          margin-bottom: 8px;
          color:black;
        }
        span{
          font-size: 14px;
        }
      }
    }
  }
</style>
