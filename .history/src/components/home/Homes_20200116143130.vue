<template>
 <div>
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
  justify-content: space-around
}
.left{
  width: 200px;
  height: 40px;
  background: skyblue
}
.right{
  width: 300px;
  height: 40px;
  background: skyblue
}
</style>