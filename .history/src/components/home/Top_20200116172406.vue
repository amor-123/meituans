<template>
  <div class="box">
    <div class="top">
      <div class="Inner">
        <div class="left">
          <div class="city">
            <div>
              <Icon type="ios-pin" size="20" />
            </div>
            <div>成都</div>
            <div class="citys">切换城市</div>
            <div class="citys">[ 成都市 高新区 华阳 ]</div>
          </div>
          <div class="login">
            <div class="logins">立即登录</div>
            <div>注册</div>
          </div>
        </div>

        <div class="right">右</div>
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
  methods: {
    get() {
      this.$api.position().then(res => {
        console.log(res);
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
  width: 350px;
  height: 40px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  color: gray
}
.right {
  width: 350px;
  height: 40px;
  background: skyblue;
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
.login {
  display: flex;
}
.logins {
  margin-right: 10px;
  color
}
</style>