<template>
  <div class="container">
     <scroll>
      <div class="cart-item" v-for="(item,index) in cart" :key="index">
        <p class="title">{{item.title}}</p>
        <p class="detail">
          {{item.detail}}
        </p>
        <p class="total">
          <span class="price">{{item.price*item.number}}</span>
          <span>
            <button @click="dec" :class="item.price">-</button>
            <span class="number">{{item.number}}</span>
            <button @click="inc" :class="item.price">+</button>
          </span>
        </p>
        <div class="photo">
          <img :src="item.img" alt="">
        </div>
        <div class="change">
            <button @click="change" ref="change">√</button>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
  import Scroll from 'base/scroll';
  export default {
    name: 'Cart',
    components: {
      Scroll
    },
    data() {
      return {
        cart: [{
                 title: '手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机',
                 detail: '0.8kg,金色手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机',
                 price: '3299',
                 number: 1,
                 img: '//img.alicdn.com/imgextra/i3/1061746493/O1CN01PQ5Iq01xpq8Qxqe59_!!0-item_pic.jpg'
               },
               {
                 title: '手机',
                 weight: '0.8kg',
                 detail: '金色',
                 price: '3299',
                 number: 2,
                 img: '//img.alicdn.com/imgextra/i3/1061746493/O1CN01PQ5Iq01xpq8Qxqe59_!!0-item_pic.jpg'
               },
               {
                 title: '手机',
                 weight: '0.8kg',
                 detail: '金色',
                 price: '3299',
                 number: 1,
                 img: '//img.alicdn.com/imgextra/i3/1061746493/O1CN01PQ5Iq01xpq8Qxqe59_!!0-item_pic.jpg'
               },
               {
                 title: '手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机',
                 detail: '0.8kg,金色手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机',
                 price: '3299',
                 number: 1,
                 img: '//img.alicdn.com/imgextra/i3/1061746493/O1CN01PQ5Iq01xpq8Qxqe59_!!0-item_pic.jpg'
               },
               {
                 title: '手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机',
                 detail: '0.8kg,金色手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机',
                 price: '3299',
                 number: 1,
                 img: '//img.alicdn.com/imgextra/i3/1061746493/O1CN01PQ5Iq01xpq8Qxqe59_!!0-item_pic.jpg'
        }]
      };
    },
    methods: {
      dec(e) {
        if (e.target.parentNode.querySelector('.number').innerHTML === 1) {
          return false;
        }
        e.target.parentNode.querySelector('.number').innerHTML--;
        e.target.parentNode.parentNode.querySelector('.price').innerHTML = e.target.parentNode.querySelector('.number').innerHTML * e.target.className;
      },
      inc(e) {
        e.target.parentNode.querySelector('.number').innerHTML++;
        e.target.parentNode.parentNode.querySelector('.price').innerHTML = e.target.parentNode.querySelector('.number').innerHTML * e.target.className;
      },
      change(e) {
        e.target.classList.toggle('active');
      }
    }
  };
</script>
<style lang="scss">
   @import "../../assets/scss/mixins";
   .container{
     width:100%;
     height:100%;
    .cart-item{
       width: 100%;
       height: 130px;
       overflow: hidden;
       padding-left:150px;
       padding-top:10px;
       position: relative;
       .title,
       .detail{
         border-bottom: 1px solid gray;
       }
       .title{
         height: 40px;
         @include multiline-ellipsis();
         font-size: 14px;
         line-height: 20px;
       }
       .detail{
         padding: 5px;
         line-height: 20px;
         @include multiline-ellipsis(1);
         height: 30px;
       }
      .total{
        @include flex-between();
        padding:5px;
        span{
          height:30px;
          text-align: center;
          line-height:30px;
        }
        button{
          height:30px;
          width:30px;
          font-size:16px;
        }
        .number{
          display: inline-block;
          height: 30px;
          width:30px;
          text-align: center;
          background: #d4d9dc;
        }
      }
      .photo{
        position: absolute;
        top:15px;
        left: 40px;
        img{
          width:100px;
          height: 100px;
        }
      }
      .change{
        position: absolute;
        top:51px;
        left:7px;
        button{
          background:#fff;
          color:#fff;
          height: 20px;
          width:20px;
          border-radius:50%;
        }
      }
    }
    .active{
      background:red !important;
    }
   }
</style>
