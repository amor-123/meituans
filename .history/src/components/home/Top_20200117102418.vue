<template>
  <div class="box">
    <div class="top">
      <div class="Inner">
        <div class="left">
          <div class="city" style="cursor:pointer ">
            <div>
              <Icon type="ios-pin" size="20" />
            </div>
            <div>{{city.city}}</div>
            <div class="switch">切换城市</div>
            <div class="citys">[ 成都市 高新区 华阳 ]</div>
          </div>
          <div class="login" style="cursor:pointer ">
            <div class="logins">立即登录</div>
            <div>注册</div>
          </div>
        </div>

        <div class="right">
          <div class="mys">
            <div >我的美团</div>
            <div class="my">
              <div>我的订单</div>
              <div>我的收藏</div>
              <div>抵用券</div>
              <div>账户设置</div>
            </div>
          </div>
          <div>手机APP</div>
          <div>商家中心</div>
          <div>美团规则</div>
          <div>网站导航</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: []
    };
  },
  components: {},
  methods: {
    get() {
      this.$api
        .position()
        .then(res => {
          this.city = JSON.parse(res.data);
          console.log(this.city);
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
  font-size: 16px;
}
.top {
  width: 100%;
  height: 40px;
  border: 1px solid red;
  background: #f8f8f8;
}
.Inner {
  width: 1200px;
  height: 40px;
  border: 1px solid red;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 330px;
  height: 40px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  color: gray;
}
.box {
  font-size: 14px;
}
.city {
  display: flex;
  justify-content: space-between;
  .citys {
    margin-left: 5px;
  }
}
.switch {
  margin-left: 5px;
}
.switch:hover {
  color: #fe8c00;
}

.login {
  display: flex;
}
.logins {
  margin-right: 10px;
  color: #fe8c00;
}
.right {
  width: 370px;
  height: 40px;
  font-size: 12px;
  display: flex;
  justify-content: space-around;
  line-height: 40px;
}
.my {
  position: absolute;
  display: none;
}
.mys:hover {
  background: #FFFFFF;
    box-shadow: 0 3px 5px 0;
   width: 100px;
    border: 1px solid red;
  .my {
    display: block !important;
    z-index: 9999;
    
  }
}
</style>