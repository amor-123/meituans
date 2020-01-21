<template>
  <div class="box">
    <div class="boxs">
      <div>
        <div class="img">
          <div>
            <img src="../../assets/meituan.png" alt />
          </div>
          <div>美团</div>
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
  .img{
    display: flex;
  }
  .img img {
    width: 50px;
    height: 50px;
    margin-top: 25px;
  }
  .img span {
    font-size: 40px;
    font-weight: 700;
    line-height: 91px;
  }
}
</style>