<template>
  <nav class="wrapper">
    <ul class="setlist">
      <li class="setlist-item">
        <i class="iconfont icon-kefu"></i>
        <span>售后服务</span>
      </li>
      <li class="setlist-item">
        <i class="iconfont icon-yijian"></i>
        <span>意见反馈</span>
      </li>
      <li class="setlist-item">
        <i class="iconfont icon-dengchu"></i>
        <span>收货地址</span>
      </li>
      <li class="setlist-item">
        <i class="iconfont icon-dianhua"></i>
        <span>退出登录</span>
      </li>
      <li class="setlist-item">
        <i class="iconfont icon-kefu"></i>
        <span>400-123-8888</span>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    name: 'PersonalSetlist'
  };
</script>
<style lang="scss" scoped>
  .wrapper{
    background: #fff;
    width: 100%;
    margin-top:10px;
    text-indent: 1em;
    .setlist {
      &-item{
        padding:10px 0;
        border-bottom:1px #efefef solid;
        display: flex;
        align-items: center;
        position: relative;
        &:before{
          content: '>';
          position: absolute;
          right:10px;
          font-size: 19px;
        }
        .iconfont{
          font-size: 17px;
        }
        span{
          font-size: 14px;
          color:black;
        }
      }
    }
  }
</style>
