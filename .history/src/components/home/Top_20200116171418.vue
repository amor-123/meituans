<template>
  <div class="box">
    <div class="top">
      <div class="Inner">
        <div class="left">
          <div>
            <div class="city">
              <Icon type="ios-pin" size="20" />
            </div>
            <div class="chengdu">成都</div>
            <div>切换城市</div>
            <div>[成都市 高新区 华阳]</div>
          </div>
          <div class="login">
            <div>立即登录</div>
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
  width: 400px;
  height: 40px;
  background: skyblue;
  font-size: 13px;
  display: flex;
  line-height: 40px;
}
.right {
  width: 350px;
  height: 40px;
  background: skyblue;
}
.box {
  font-size: 14px;
}
.login {
  display: flex;
}
</style>