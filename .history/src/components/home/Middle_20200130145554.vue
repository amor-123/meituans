<template>
  <div class="box">
    <div class="classification">
      <div class="font">全部分类</div>
      <div v-for="(item,index) in data" :key="index" class="data">
        <div class="img">
          <img src="../../assets/meishi.svg" alt />
        </div>
        <div class="name">{{item.name}}</div>
        <div class="tb">
          <Icon type="ios-arrow-forward" />
        </div>
      </div>
    </div>
    <div class="photo">
      <div class="top">
       <div class="image"><img src="../../assets/33ff80dc00f832d697f3e20fc030799560495.jpg" alt=""></div>
        <div class="image1"><img src="../../assets/e.jpg" alt=""></div>
        <div class="login">3</div>
      </div>
      <div class="bottom">下</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      
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
    this.get();
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
  margin: 0 auto;
  display: flex;
  .classification {
    width: 250px;
    height: 550px;
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
  .img img {
    width: 18px;
    height: 18px;
  }
  .data {
    font-size: 14px;
    margin: 6px 10px;
    display: flex;
  }
  .tb {
    position: absolute;
    right: 10px;
  }
  .name {
  }
  .photo {
    width: 950px;
    height: 490px;
    border: 1px solid red;
    margin: 10px 10px;
  }
  .top {
    width: 950px;
    height: 280px;
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    .image img{
      width: 550px;
      height: 280px;
    }
    .image1 img{
       width: 150px;
      height: 280px;
    }
    .login{
      width: 230px;
      height: 280px;
      background: #ffffff
    }
  }
  .bottom {
    width: 950px;
    height: 200px;
    border: 1px solid red;
    display: flex;
    margin-top: 10px;
  }
}


</style>