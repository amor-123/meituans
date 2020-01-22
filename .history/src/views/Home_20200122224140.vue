<template>
  <div >
  <Top></Top>
  <Scout></Scout>
  <div class="box">
    <div class="nav">
    <Left></Left>
    <Middle></Middle>
    <Right></Right>
  </div>
  </div>

  </div>
</template>

<script>
import Top from '../components/Home/Top'
import Scout from '../components/Home/Scout'
import Left from '../components/Home/Left'
import Middle from '../components/Home/Middle'
import Right from '../components/Home/Right'
export default {
  data() {
    return {};
  },
  components: {
    Top,
    Scout,
    Left,
    Middle,
    Right,
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box{
  background:#F8F8F8;
  .nav{
  width: 1200px;
  height: 530px;
  border: 1px solid red;
  margin:  0 auto;
  display: flex;
  
}
}

</style>