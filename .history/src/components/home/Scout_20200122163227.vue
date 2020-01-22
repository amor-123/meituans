<template>
  <div class="box">
    <div class="boxs">
      <div class="scout">
        <div class="input">
          <div>
            <img src="../../assets/meituan.png" alt />
          </div>
          <div class="meituan">美团</div>
        </div>
        <div class="Magnifier">
           <Input search enter-button placeholder="搜索商家或地点" size='large' style="width:500px "/>
        </div>
      </div>
      <div class="introduce">
        <div>美团外卖</div>
        <div>猫眼电影</div>
        <div>美团酒店</div>
        <div>民宿 / 公寓</div> 
        <div>商家入驻</div> 
        <div>美团公益</div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
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
    },
    
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
  width: 100%;
  height: 150px;
  background: #ffffff;
  .boxs {
    width: 1200px;
    height: 150px;
    border: 1px solid red;
    margin: 0 auto;
  }
  .scout{
    display: flex;
    border: 1px solid red
  }
  .input {
    display: flex;
  }
  .input img {
    width: 50px;
    height: 50px;
    margin-top: 25px;
  }
  .meituan {
    font-size: 40px;
    font-weight: 700;
    line-height: 99px;
  }
  .Magnifier{
    display: flex;
    margin: 30px 200px;
    
  }
  .introduce{
    display: flex;
    font-size: 16px;
    font-weight: 700;
  }
}
</style>