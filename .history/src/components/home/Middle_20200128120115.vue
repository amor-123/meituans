<template>
  <div class="box">
    <div>
      <div class="classification">全部分类</div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 1200px;
  height: 600px;
  border: 1px solid red;
  margin-left:352px;
  .classification{
  width: 250px;
  height: 600px;
  border: 1px solid red;
  position: relative;
  left:20px;
  bottom:80px;
}
}
</style>