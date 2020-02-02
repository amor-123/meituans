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
        <div><Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel" ></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel></div>
        <div>2</div>
        <div>3</div>
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
      value2: 0
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
    height: 300px;
    border: 1px solid red;
    display: flex;
  }
  .bottom {
    width: 950px;
    height: 190px;
    border: 1px solid red;
    display: flex;
  }
}
</style>