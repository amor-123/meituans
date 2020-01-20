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
            <div class="myss">我的美团</div>
            <div class="my">
              <div>我的订单</div>
              <div>我的收藏</div>
              <div>抵用券</div>
              <div>账户设置</div>
            </div>
          </div>
          <div class="app">手机APP</div>
          <div class="business">
            <div class="core">商家中心</div>
            <div class="Restaurant">
              <div>美团餐饮商户中心</div>
              <div>登录商家中心</div>
              <div>美团智能收银</div>
              <div>我想合作</div>
              <div>手机免费开店</div>
              <div>餐饮代理商招募</div>
              <div>商家申请开票</div>
              <div>免费合作美团排队</div>
            </div>
          </div>
          <div class="rule">
            <div class="cores">美团规则</div>
            <div class="Catalog">
              <div>规则中心</div>
              <div>规则目录</div>
              <div>规则评议院</div>
            </div>
          </div>
          <div class="website">
            <div class="Navigation">网站导航</div>
            <div class="deviation">
              <div class="Travel">
                <div class="Tourism">酒店旅游</div>
                <div class="ticket">
                  <div>国际机票</div>
                  <div>火车票</div>
                  <div>民宿</div>
                </div>
                <div class="hotel">
                  <div>经济型酒店</div>
                  <div>主题酒店</div>
                  <div>商务酒店</div>
                </div>
                <div class="Inn">
                  <div>公寓</div>
                  <div>豪华酒店</div>
                  <div>客栈</div>
                </div>
                <div class="Villa">
                  <div>青年旅社</div>
                  <div>度假酒店</div>
                  <div>别墅</div>
                </div>
                <div class="House">
                  <div>农家院</div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="Delicious">
                <div class="food">吃美食</div>
                <div class="classification">
                  <div>
                  <ul>
                    <li>烤鱼</li>
                    <li>烧烤</li>
                    <li>火锅</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>特色小吃</li>
                    <li>自助餐</li>
                    <li>代金券</li>
                  </ul>
                </div>
                </div>
              </div>
              <div class="Tourism">看电影</div>
              <div class="Tourism">手机APP</div>
            </div>
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
  font-size: 16px;
}
.top {
  width: 100%;
  height: 40px;
  background: #f8f8f8;
}
.Inner {
  width: 1200px;
  height: 40px;
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
  color: gray;
}

.mys {
  position: relative;
  padding: 0 14px;
  .my {
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    display: none;
  }
  .myss:hover {
    color: #fe8c00;
  }
}
.mys:hover {
  background: #ffffff;
  box-shadow: 0 3px 5px 0;
  text-align: center;

  .my {
    display: block;
    box-shadow: 0 3px 5px 0;
    text-align: center;
    background: #ffffff;
  }
}
.app:hover {
  color: #fe8c00;
}

.business {
  position: relative;
  padding: 0 14px;
  .Restaurant {
    position: absolute;
    top: 40px;
    left: -30px;
    right: 0;
    display: none;
  }
  .core:hover {
    color: #fe8c00;
  }
}
.business:hover {
  background: #ffffff;
  box-shadow: 0 3px 5px 0;
  text-align: center;

  .Restaurant {
    display: block;
    box-shadow: 0 3px 5px 0;
    text-align: center;
    background: #ffffff;
  }
}
.rule {
  position: relative;
  padding: 0 14px;
  .Catalog {
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    display: none;
  }
  .cores:hover {
    color: #fe8c00;
  }
}
.rule:hover {
  background: #ffffff;
  box-shadow: 0 3px 5px 0;
  text-align: center;

  .Catalog {
    display: block;
    box-shadow: 0 3px 5px 0;
    text-align: center;
    background: #ffffff;
  }
}
.website {
  position: relative;
  padding: 0 14px;
  .deviation {
    position: absolute;
    top: 40px;
    left: -1140px;
    right: 0;
    display: none;
  }
  .Navigation:hover {
    color: #fe8c00;
  }
}
.website:hover {
  // background: #ffffff;
  background: skyblue;
  box-shadow: 0 3px 5px 0;
  text-align: center;

  .deviation {
    display: block;
    box-shadow: 0 3px 5px 0;
    text-align: center;
    background: #ffffff;
    background: skyblue;
    display: flex;
    height: 300px;
  }
}
.Travel {
  width: 400px;
  height: 300px;
  border: 1px solid black;
  .Tourism {
    font-size: 16px;
  }
  .ticket {
    display: flex;
    justify-content: space-around;
  }
  .hotel {
    display: flex;
    justify-content: space-around;
  }
  .Inn {
    display: flex;
    justify-content: space-around;
  }
  .Villa {
    display: flex;
    justify-content: space-around;
  }
  .House {
    display: flex;
    justify-content: space-around;
  }
}
.Delicious {
  width: 400px;
  height: 300px;
  border: 1px solid black;
}
</style>