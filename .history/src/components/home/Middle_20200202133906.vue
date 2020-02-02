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
    <div class="hide" v-for="(item,index) in title" :key="index">
      <div>{{item.title}}</div>
      <div>更多<Icon type="ios-arrow-forward" /></div>
      
    </div>
    <div class="photo">
      <div class="top">
        <div class="image">
          <img src="../../assets/33ff80dc00f832d697f3e20fc030799560495.jpg" alt />
        </div>
        <div class="image1">
          <img src="../../assets/e.jpg" alt />
        </div>
        <div class="login">
          <div class="login1">
            <div class="image2">
              <img src="../../assets/avatar.jpg" alt />
            </div>
            <div class="hi">Hi! 你好</div>
            <div class="circles">
              <Button shape="circle">立即注册</Button>
            </div>
            <div class="circles">
              <Button shape="circle">立即登录</Button>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom1">
          <img src="../../assets/843d7347cb20d945e4bc39b6403f0515182965.png" alt />
        </div>
        <div class="bottom2">
          <img src="../../assets/16442c19da1f1c4544f794e29d99c92051716.jpg" alt />
        </div>
        <div class="bottom3">
          <img src="../../assets/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt />
        </div>
        <div class="bottom4">
          <div class="download">
            <img src="../../assets/download-qr.png" alt />
          </div>
          <div class="meituanapp">美团APP手机版</div>
          <div class="two">
            <span class="yiyuan">一元起</span>
            <span class="chi">吃喝玩乐</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      title: []
    };
  },
  components: {},
  methods: {
    get() {
      this.$api
        .menu()
        .then(res => {
          this.data = res.data.menu;
          this.title = res.data.menu[0].child;
          console.log(this.data);
          console.log(this.title);
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

  .photo {
    width: 950px;
    height: 490px;
    // border: 1px solid red;
    margin: 10px 10px;
  }
  .top {
    width: 950px;
    height: 280px;
    // border: 1px solid red;
    display: flex;
    justify-content: space-between;
    .image img {
      width: 550px;
      height: 280px;
    }
    .image1 img {
      width: 150px;
      height: 280px;
    }

    .login {
      width: 230px;
      height: 280px;
      background: #ffffff;
      .login1 {
        width: 100px;
        height: 200px;
        margin: 40px auto;
        // background: skyblue;
        .hi {
          font-size: 16px;
          color: black;
          margin-top: 10px;
          margin-left: 20px;
        }
        .circles {
          margin-top: 10px;
        }
      }
      .image2 img {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        margin-left: 20px;
      }
    }
  }
  .bottom {
    width: 950px;
    height: 200px;
    // border: 1px solid red;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
  }
  .bottom1 img {
    width: 270px;
    height: 200px;
  }
  .bottom2 img {
    width: 270px;
    height: 200px;
  }
  .bottom3 img {
    width: 150px;
    height: 200px;
  }
  .bottom4 {
    width: 230px;
    height: 280px;
    background: #ffffff;
  }
  .meituanapp {
    font-size: 16px;
    color: #222222;
    font-weight: 500;
    text-align: center;
  }
}
.two {
  text-align: center;
}
.yiyuan {
  color: #ec5330;
  margin-right: 5px;
  font-size: 12px;
}
.chi {
  font-size: 12px;
  color: black;
}
.download {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.download img {
  width: 95px;
  height: 95px;
}
.data:hover {
  background: #fff7eb;
  cursor: pointer;
}
.hide {
  width: 400px;
  height: 490px;
  background: white;
  border: 1px solid #e5e5e5;
  position: absolute;
  top: 200px;
  left: 590px;
  // display: none;
  display: flex;
  justify-content: space-between
}
</style>