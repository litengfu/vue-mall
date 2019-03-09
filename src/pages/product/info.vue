<template>
  <div class="product-info" v-if="infoTitle.length">
    <p class="product-info-title">{{infoTitle}}</p>
    <p class="product-info-baseInfo">sfsdf</p>
  </div>
</template>
<script>
  export default {
    name: 'ProductInfo',
    data() {
      return {
        infoTitle: ''
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
        this.infoTitle = newData.item.title;
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/mixins";
  .product-info{
    width: 100%;
    background: #fff;
    color: #051b28;
    padding:5px 10px;
    .product-info-title {
      line-height: 1.6em;
    }
  }
</style>
