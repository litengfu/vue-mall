<template>
  <me-navbar title="我的幕淘" class="personal-header">
    <div slot="right">
      <i class="iconfont icon-setting" ></i>
      <i class="iconfont icon-msg"></i>
    </div>
  </me-navbar>
</template>
<script>
  import MeNavbar from 'base/navbar';
  export default {
    name: 'PersonalHeader',
    components: {
      MeNavbar
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/mixins";
  .mine-navbar.personal-header{
    background: $header-bgc;
    color: $bgc-theme;
      .iconfont {
        font-size: 18px;
        margin-right:2px;
      }
  }
</style>
