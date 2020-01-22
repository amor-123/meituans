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
           <Input search='true' enter-button placeholder="搜索商家或地点" size='large' style="width:500px "/>
          <!-- <div>
          <AutoComplete
            v-model="value3"
            :data="data3"
            :filter-method="filterMethod"
            placeholder="搜索商家或地点"
            style="width:400px"
          ></AutoComplete>
        </div>
        <div class="sesrch"><Icon type="ios-search" /></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value3: "",
      data3: [],
      true:true
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
    filterMethod(value, option) {
      return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
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
    margin-top: 30px;
    
  }
 
  
 
}
</style>