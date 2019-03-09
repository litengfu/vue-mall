<template>
  <div>
    {{error}}
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        error: ''
      };
    },
    mounted: async function () {
      let {status, data: {code}} = await axios.get('http://localhost:3000/users/exit');
      if (status === 200 && code === 0) {
        window.location.href = '#/personal';
      } else {
        this.error = '退出失败';
      }
    }
  };
</script>
<style lang="scss">

</style>
