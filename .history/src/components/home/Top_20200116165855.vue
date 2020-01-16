<template>
 <div class="box">
   <div class="top">
     <div class="Inner">
          <div class="left" >
            <div><Icon type="ios-pin" size="24" /></div>
            <div>成都</div>
            <div><Button :size="buttonSize" type="default" >切换城市</Button></div>
            <div>[]</div>
          </div>
          <div class="right">右</div>
     </div>
   </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   },
   methods: {
        get(){
          this.$api.position()
          .then(res=>{
            console.log(res);
          })
        }
   },
   mounted() {
     this.get()
   },
   watch: {

   },
   computed: {
     
   }
 }
</script>

<style scoped lang='scss'>
.box{
  font-size: 16px;
}
.top{
  width: 100%;
  height: 40px;
  border: 1px solid red;
}
.Inner{
  width: 1200px;
  height: 40px;
  border: 1px solid red;
  margin: 0 auto;
  display: flex;
  justify-content: space-between
}
.left{
  width: 250px;
  height: 40px;
  background: skyblue
}
.right{
  width: 350px;
  height: 40px;
  background: skyblue
}
.box{
  font-size: 14px;
}
</style>