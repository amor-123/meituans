<template>
  <div >
  <Top></Top>
  <Scout></Scout>
  <div class="">
    <Left></Left>
    <Middle></Middle>
    <Right></Right>
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

</style>