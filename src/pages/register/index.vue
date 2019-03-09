<template>
    <div class="register" ref='container'>
      <form action="">
        <div>
            <span>用户名</span>
            <input type="text" required v-model="username" ref="username">
        </div>
        <div>
            <span>密码</span>
            <input type="password" required v-model="pass">
        </div>
        <div>
            <span>确认密码</span>
            <input type="password" required v-model="checkPass">
            <p>{{passwordError}}</p>
        </div>
        <div>
            <span>邮箱</span>
            <input type="email" required v-model="email" ref="email">
        </div>
        <div>
            <button class="send" @click.stop="sendCode">获得验证码</button>
            <p>{{error}}</p>
        </div>
        <div>
            <span>验证码</span>
            <input type="text" required v-model="code">
        </div>
        <div>
            <button type="submit" @click.stop="register">注册</button>
            <div>{{registerError}}</div>
        </div>
    </form>
    </div>
</template>
<script>
  import axios from 'axios';
  import Crypto from 'crypto-js';
  export default {
    data() {
      return {
        username: '',
        pass: '',
        checkPass: '',
        email: '',
        code: '',
        error: '',
        passwordError: '',
        registerError: ''
      };
    },
    methods: {
      sendCode: async function () {
        let self = this;
        if (self.timerId) {
          return false;
        }
        if (!this.$refs.email.checkValidity() && !this.$refs.username.checkValidity()) {
          return false;
        }
        let {status, data} = await axios.post('http://localhost:3000/users/verify', {
          username: self.username,
          email: self.email
        });
        if (status === 200 && data.code === 0) {
          let count = 60;
          self.timerId = setInterval(function () {
            self.error = count;
            count--;
            if (count === 0) {
              self.error = '';
              clearInterval(self.timerId);
              self.timerId = 0;
            }
          }, 1000);
        } else {
          self.error = data.msg;
        }
      },
      register: async function () {
        this.registerError = '';
        console.log('sfsf');
        let self = this;
        let success = true;
        if (this.pass === this.checkPass) {
          this.passwordError = '';
        } else {
          this.passwordError = '密码不一致';
          return false;
        }
        this.$refs.container.querySelectorAll('input').forEach(function (val) {
          if (!val.checkValidity()) {
            success = false;
          }
        });
        if (success === false) {
          return false;
        }
        let {status, data} = await axios.post('http://localhost:3000/users/signup', {
          username: window.encodeURIComponent(self.username),
          password: Crypto.MD5(self.pass).toString(),
          code: self.code,
          email: self.email
        });
        if (status === 200 && data && data.code === 0) {
          this.$router.push({name: 'login'});
        } else {
          self.registerError = data.msg;
        }
      }
    }
  };
</script>
<style lang="scss">
.register{
       width: 60%;
       height: 200px;
       position: absolute;
       bottom:0;
       top:0;
       left: 0;
       right:0;
       margin:auto;
       div{
           position: relative;
           margin-top:20px;
           input{
               border:1px solid rgba(0,0,0,.2);
               position: absolute;
               right:0;
           }
           p{
               margin-left:99px;
               color:red;
               margin-top:10px;
           }
           button{
               margin-left:99px;
               background: red;
               padding:5px 5px;
               color:#fff;
               border-radius: 4px;
               box-shadow: -1px -1px 2px 0px gray;
           }
       }
   }
</style>
