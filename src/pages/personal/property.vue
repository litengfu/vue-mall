<template>
  <div class="wrapper">
    <div class="property-header">
      <div class="property-header-myProperty">
        <i class="iconfont icon-zichan"></i>
        <span>我的资产</span>
      </div>
    </div>
    <div class="property-bottom">
      <div class="property-bottom-item">
        <span>现金卷</span>
      </div>
      <div class="property-bottom-item">
        <span>红包</span>
      </div>
      <div class="property-bottom-item">
        <span>余额</span>
      </div>
      <div class="property-bottom-item">
        <span>礼品卡</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PersonalProperty'
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/mixins";
  .wrapper{
    margin-top:10px;
    background: #fff;
    width: 100%;
    .property-header{
      text-indent: 1em;
      border-bottom:1px #efefef solid;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height:40px;
      .property-header-myProperty{
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
    }
    .property-bottom{
      width:100%;
      height:50px;
      display:flex;
      &-item{
        flex:1;
        @include flex-center(column);
        span{
          font-size: 14px;
        }
      }
    }
  }
</style>
