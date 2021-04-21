<template>
<div>
  <div @click="showModal">登录test{{ userName }}</div>
  <div @click="showModal2">登录test{{ userName }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Message from "../../common/Message";

export default {
  data: function () {
    return {
      userName: "sbjue",
    };
  },
  methods: {
    ...mapState({
      count: (state) => state.moduleA.count,
    }),
    ...mapState("moduleB", {
      moduleBcount: (state) => state.moduleB.count,
    }),
    showModal() {
      Message({
        type: "prompt",
      }).then(data => {
        console.log(data, '拿到了')
      });
    },
    showModal2() {
      Message({
        type: "prompt",
      }).then(data => {
        console.log(data, '拿到了2')
      });
    },
  },
  created() {},
};
</script>

<style>
</style>