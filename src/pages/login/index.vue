<template>
    <div class="login">
       <div class="username">
           <span>用户名</span>
           <input type="text" v-model="username"/>
       </div>
       <div class="username">
            <span>密&nbsp;&nbsp;&nbsp;码</span>
            <input type="password" v-model="password"/>
       </div>
       <div >
          <button @click="login">
           登录
          </button>
          <p>{{error}}</p>
       </div>
    </div>
</template>
<script>
  import axios from 'axios';
  import Crypto from 'crypto-js';
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: ''
      };
    },
    methods: {
      login: async function () {
        axios.defaults.withCredentials = true;
        let self = this;
        let {status, data} = await axios.post('http://localhost:3000/users/signin', {
          username: window.encodeURIComponent(self.username),
          password: Crypto.MD5(self.password).toString()
        });
        if (status === 200) {
          if (data && data.code === 0) {
            self.error = data.msg;
            window.location.href = '#/personal';
          } else {
            self.error = data.msg;
          }
        } else {
          self.error = `服务器出错${status}`;
        }
      }
    }
  };
</script>
<style lang="scss">
   .login{
       width: 60%;
       height: 200px;
       position: absolute;
       bottom:0;
       top:0;
       left: 0;
       right:0;
       margin:auto;
       div{
           margin-top:20px;
           input{
               border:1px solid rgba(0,0,0,.2);
           }
           button{
               margin-left:70px;
               background: red;
               padding:10px 20px;
               color:#fff;
               border-radius: 4px;
               box-shadow: -1px -1px 2px 0px gray;
           }
       }
   }
</style>
