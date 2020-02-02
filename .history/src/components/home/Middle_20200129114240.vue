<template>
  <div class="box">
    <div class="classification">
      <div class="font">全部分类</div>
      <div v-for="(item,index) in data" :key="index" class="data">
        <div></div>
        <div>{{item.name}}</div>
        <div class="tb">></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:[]
    };
  },
  components: {},
  methods: {
    get() {
      this.$api
        .menu()
        .then(res => {
          this.data = res.data.menu;
          console.log(this.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.get()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 1200px;
  height: 500px;
  // border: 1px solid red; 
  margin-left: 352px;
  .classification {
    width: 250px;
    height: 500px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    position: relative;
    left: 0px;
    bottom: 50px;
    .font {
      font-size: 16px;
      font-weight: 700;
      color: black;
      margin: 18px 13px;
    }
  }
  .data{
    font-size: 14px;
    margin: 6px 10px;
    display: flex;
  }
  .tb{
    position: relative;
    right:100px;

  }
}
</style>