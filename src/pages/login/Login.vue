<template>
  <div>登录test{{userName}}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: function() {
    return {
      userName: 'sbjue'
    }
  },
  methods: {
    ...mapState({
      count:  state => state.moduleA.count
    }),
    ...mapState('moduleB', {
      moduleBcount: state => state.moduleB.count
    })
  },
  created () {
    console.log(this.count())
  }
};
</script>

<style>
</style>