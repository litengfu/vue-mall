<template>
  <div class="personal">
    <personal-header/>
    <me-scroll ref="scroll" class="scroll">
      <personal-user/>
      <personal-order/>
      <personal-property/>
      <personal-setlist/>
    </me-scroll>
  </div>
</template>
<script>
  import PersonalHeader from './header';
  import PersonalUser from './user';
  import PersonalOrder from './order';
  import PersonalProperty from './property';
  import PersonalSetlist from './setlist';
  import MeScroll from 'base/scroll';
  export default {
    name: 'Personal',
    data() {
      return {
        data: ''
      };
    },
    components: {
      PersonalHeader,
      PersonalUser,
      PersonalOrder,
      PersonalProperty,
      PersonalSetlist,
      MeScroll
    },
    methods: {
      update(newData) {
        console.log('sfsfs');
        this.data = newData;
      }
    },
    watch: {
      data() {
        this.$refs.scroll && this.$refs.scroll.update();
      }
    }
  };
</script>
<style lang="scss" scoped>
   .personal{
     height: 100%;
     padding-bottom: 50px;
   }
  .swiper-wrapper{
    height: 100%;
  }
</style>
