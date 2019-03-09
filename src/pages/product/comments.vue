<template>
  <div class="product-comment-wrapper">
    <me-loading v-if="!CommentContnent.length"/>
    <div class="product-comment-wrapper-nav" v-else>
      <p class="product-total-comment">商品评价 ({{totalComment}})</p>
      <ul class="nav-content">
        <li class="nav-content-item" v-for="(item, index) in keywords" :key="index">
          <a href="">{{item.word}}({{item.count}})</a>
        </li>
      </ul>
      <ul class="product-shop-comment-content">
        <li class="product-shop-comment-content-item" v-for="(item, index) in CommentContnent" :key="index">
          <p class="item-name">
            <span class="item-name-headImg">
              <img :src="item.headPic" alt="无">
            </span>
            <span class="item-name-headText">{{item.userName}}</span>
          </p>
          <p class="item-content">{{item.content}}</p>
          <p class="item-comment-info">
            <span class="dateTime">{{item.dateTime}}</span>
            <span class="skuInfo">{{item.skuInfo}}</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="shopEvaluate" v-if="CommentContnent.length">
       <div class="store">
          <span class="store-img">
            <img :src="seller.shopIcon" alt="">
          </span>
          <div class="store-name">
            <p>{{seller.sellerNick}}</p>
            <p class="store-name-creditLevelIcon">
              <img :src="seller.creditLevelIcon" alt="">
            </p>
          </div>
       </div>
       <div class="evaluate-info">
         <ul class="evaluate-info-list">
           <li v-for="(item, index) in seller.evaluates" :key="index">
             <span>{{item.title}}</span>
             <span>{{item.score}}</span>
           </li>
         </ul>
       </div>
    </div>
  </div>
</template>
<script>
  import MeLoading from 'base/loading';
  export default {
    name: 'ProductComments',
    components: {
      MeLoading
    },
    data() {
      return {
        keywords: [],
        totalComment: '',
        CommentContnent: [],
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
        this.keywords = newData.rate.keywords;
        this.totalComment = newData.rate.totalCount;
        this.CommentContnent = newData.rate.rateList;
        this.seller = newData.seller;
        this.$emit('update');
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/mixins";
  .product-comment-wrapper-nav ,
  .shopEvaluate
  {
    padding: 10px;
    background:#fff;
    margin:10px 0;
  }
  .product-total-comment {
    font-size: 15px;
    margin-bottom: 10px;
  }
  .nav-content {
    &-item {
      display: inline-block;
      margin-bottom: 10px;
      margin-right:10px;
      padding:10px;
      background: #ffeeee;
      border-radius: 8px;
    }
  }
  .product-shop-comment-content {
    margin-top:20px;
    &-item {
      margin-bottom: 10px;
      .item-name {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        &-headImg {
          display: inline-block;
          width:26px;
          height: 26px;
          margin-right: 8px;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
      .item-content{
        line-height: 1.5em;
        color: black;
        text-align: justify;
        margin-bottom: 10px;
      }
      .item-comment-info {
        line-height: 1.5em;
        .dateTime{
          margin-right:10px;
        }
      }
    }
  }
  .shopEvaluate{
    margin-top:10px;
    .store{
      display: flex;
      .store-img {
        display: inline-block;
        width:45px;
        height:45px;
        margin-right:10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .store-name {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        &-creditLevelIcon{
           img {
            width: 40px;
            height:15px;
          }
        }
      }
    }
    .evaluate-info{
      margin-top:20px;
      &-list{
        display: flex;
        li{
          flex: 1;
          text-align: center;
        }
      }
    }
  }
</style>
