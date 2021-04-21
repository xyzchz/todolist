<template>
  <div class="main" v-if="show && visible">
    <span @click="showModal">测试看看</span>
    <input type="text" v-model="val">
    <input type="button" value="确定" @click="getV">
  </div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      visible: true,
      val: ''
    }
  },
  props: {
    show: {
      type: Boolean
    },
    getVal: {
      type: Function
    },
    remove: {
      type: Function
    }
  },
  methods: {
    showModal () {
      this.visible = false
    },
    getV () {
      this.visible = false
      this.remove()
      this.getVal(this.val)
    }
  },
  created () {
    console.log('init')
  }
}
</script>

<style scoped>
.main{
  position: fixed;
  width: 500px;
  height: 500px;
  background-color: pink;
}
</style>