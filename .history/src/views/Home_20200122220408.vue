<template>
  <div >
  <Top></Top>
  <Scout></Scout>
  <div class="right">
    <Right></Right>
  </div>

  </div>
</template>

<script>
import Top from '../components/Home/Top'
import Scout from '../components/Home/Scout'
import Right from '../components/Home/Right'
export default {
  data() {
    return {};
  },
  components: {
    Top,
    Scout,
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