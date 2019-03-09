<template>
  <div class="home">
    <header class="g-header-container">
      <home-header :class="{'header-transition': isHeaderTransition}" ref="header"/>
    </header>
    <me-scroll :data="recommends" pullDown pullUp @pull-down="pullToRefresh" @pull-up="pullToLoadMore" @scroll="scroll" @scroll-end="scrollEnd" @pull-down-transition-end="pullDownTransitionEnd" ref="scroll">
      <home-slider ref="slider"/>
      <home-nav/>
      <home-recommend @loaded="getRecommends" ref="recommend"/>
    </me-scroll>
    <div class="g-backtop-container">
      <me-backtop :visible="isBacktopVisible" @backtop="backToTop"/>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import MeBacktop from 'base/backtop';
  import HomeHeader from './header';
  import HomeSlider from './slider';
  import MeScroll from 'base/scroll';
  import HomeNav from './nav';
  import HomeRecommend from './recommend';
  import {HEADER_TRANSITION_HEIGHT} from './config';
  export default {
    name: 'home',
    components: {
      HomeHeader,
      HomeSlider,
      MeScroll,
      HomeNav,
      HomeRecommend,
      MeBacktop
    },
    data() {
      return {
        recommends: [],
        isHeaderTransition: false,
        isBacktopVisible: false
      };
    },
    methods: {
      updateScroll() {

      },
      getRecommends(recommends) {
        this.recommends = recommends;
      },
      pullToRefresh(end) {
        this.$refs.slider.update().then(end);
        // setTimeout(() => {
        // console.log('下拉');
        // end();
        // }, 1000);
      },
      pullToLoadMore(end) {
        this.$refs.recommend.update().then(end).catch(err => {
          if (err) {
            console.log(err);
          }
          end();
        });
        // setTimeout(() => {
        // console.log('上拉');
        // end();
        // }, 1000);
      },
      scroll(translate) {
        this.changeHeaderStatus(translate);
      },
      scrollEnd(translate, scroll, pulling) {
        if (!pulling) {
          this.changeHeaderStatus(translate);
        }
        this.isBacktopVisible = translate < 0 && -translate > scroll.height;
      },
      pullDownTransitionEnd() {
        this.$refs.header.show();
      },
      backToTop() {
        this.$refs.scroll && this.$refs.scroll.scrollToTop();
        // this.changeHeaderStatus(translate);
      },
      changeHeaderStatus(translate) {
        if (translate > 0) {
          this.$refs.header.hide();
          return;
        }
        this.$refs.header.show();
        this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT;
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/mixins";
  .home{
    overflow: hidden;
    width:100%;
    height:100%;
    background-color:$bgc-theme;
  }
</style>
