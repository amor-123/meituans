<template>
 <div class="box">
   <div class="top">
     <div class="Inner">
          <div class="left">左</div>
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

   },
   mounted() {

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
  font-size: 16px;
}
</style>