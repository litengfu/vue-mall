<template>
  <div class="wrapper">
    <div class="user-img">
      <i class="iconfont icon-personal"></i>
    </div>
    <div class="user-text" v-if='!user'>
      <span>
          <router-link to="register" class="item">注册</router-link>
      </span>
      <span>
        <router-link to="login" class="item">登录</router-link>
      </span>
    </div>
    <div class="exit" v-else>
       <span>{{user}}</span>
       [<router-link to="exit"><span>退出</span></router-link>]
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'PersonalLoain',
    data() {
      return {
        user: ''
      };
    },
    async mounted() {
      const {status, data: {user}} = await axios.get('http://localhost:3000/users/getUser', {
        withCredentials: true
      });
      if (status === 200) {
        this.user = user;
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/mixins";
 .wrapper{
   a{
      color:#fff;
   }
   width: 100%;
   height:150px;
   background: $header-bgc;
   @include flex-center(column);
   color:$bgc-theme;
   .user-img{
     .iconfont{
       font-size:70px;
     }
   }
   .user-text{
     font-size:0px;
     span {
       font-size:18px;
       display: inline-block;
       padding:20px;
       position: relative;
       &:nth-child(1){
         &:before{
           content: '|';
           position: absolute;
           right:0;
         }
       }
       a{
         color:#fff;
       }
     }
   }
 }
</style>
