<template>
  <div class="box">
    <div class="boxs">
      <div>
        <div class="img">
          <img src="../../assets/meituan.png" alt />
          <span>美团</span>
        </div>
        <div></div>
      </div>
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
  width: 100%;
  height: 150px;
  background: #ffffff;
  .boxs {
    width: 1200px;
    height: 150px;
    border: 1px solid red;
    margin: 0 auto;
  }
  .img img{
    width: 70px;
    height: 70px;
  }
}
</style>