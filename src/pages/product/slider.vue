<template>
  <div class="product-slider">
    <div class="slider-wrapper">
      <me-loading inline v-if="!productItemImgUrl.length"/>
      <me-slider
        :direction="direction"
        :loop="loop"
        :interval="interval"
        :pagination="pagination"
        v-else
      >
        <swiper-slide v-for="(item, index) in productItemImgUrl" :key="index">
          <img :src="item" alt="" class="slider-img" @load="update">
        </swiper-slide>
      </me-slider>
    </div>
    <div class="slider-bottom" v-if="productItemImgUrl.length">
      <p class="slider-bottom-price">￥<span>{{price}}</span></p>
      <div class="slider-bottom-number">{{number}}件已售</div>
    </div>
  </div>
</template>
<script>
  import {swiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions} from './config';
  import MeSlider from 'base/slider';
  import {getProductData} from 'api/product';
  import MeLoading from 'base/loading';
  export default {
    name: 'ProductSlider',
    components: {
      MeSlider,
      swiperSlide,
      MeLoading
    },
    data() {
      return {
        productItemImgUrl: [],
        price: '',
        number: ''
      };
    },
    created() {
      this.init();
      this.productId = this.$route.params.id;
      this.getProductDetails(this.productId).then(data => {
        this.productItem = data;
        this.$emit('getData', data);
        this.productItemImgUrl = data.item.images;
        this.price = JSON.parse(data.mockData).price.price.priceText;
        this.number = JSON.parse(data.mockData).skuCore.sku2info[0].quantity;
      });
    },
    methods: {
      init() {
        this.direction = sliderOptions.direction;
        this.loop = sliderOptions.loop;
        this.interval = sliderOptions.interval;
        this.pagination = sliderOptions.pagination;
      },
      getProductDetails(id) {
        return new Promise((resolve, reject) => {
          getProductData(id).then(data => {
            if (data) {
              resolve(data);
            } else {
              reject(new Error('没有数据'));
            }
          });
        });
      },
      update() {
        this.$emit('update');
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/mixins";
  .slider-wrapper {
    height:316px;
  }
  .slider-img{
    width:100%;
    height:100%;
  }
  .slider-bottom{
    height:40px;
    background: linear-gradient(left, #ef3386, #ef3648);
    @include flex-between();
    padding: 0 10px;
    &-price {
      color: #fff;
      >span{
        font-size:16px;
      }
    }
    &-number {
      padding: 6px 13px;
      color: #fff;
      border-radius: 5px;
      background: rgba(0, 16, 26, 0.2);
      @include flex-center(row);
    }
  }
</style>
