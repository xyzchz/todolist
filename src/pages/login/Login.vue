<template>
  <div>
    <div @click="showModal">登录test{{ userName }}</div>
    <div @click="showModal2">登录test{{ userName }}</div>
    <div @click="showTouchModal">手势弹窗</div>
    <transition name="fade">
      <div
        @touchmove.stop="move"
        @touchend.stop="end"
        ref="modal"
        v-if="visible"
        class="modal"
      >
        11
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Message from "../../common/Message";

export default {
  data: function () {
    return {
      userName: "sbjue",
      visible: false,
      firstRecord: "",
    };
  },
  methods: {
    ...mapState({
      count: (state) => state.moduleA.count,
    }),
    ...mapState("moduleB", {
      moduleBcount: (state) => state.moduleB.count,
    }),
    move(e) {
      e.stopPropagation()
      e.preventDefault()
      if (!this.firstRecord) this.firstRecord = e.changedTouches[0].clientY;
      const y = e.changedTouches[0].clientY;
      const diff = y - this.firstRecord;
      const target = e.target;
      if (diff > 0) {
        target.style.bottom = `-${diff}px`;
      }
    },
    end() {
      // this.visible = false
    },
    showModal() {
      Message({
        type: "prompt",
      }).then((data) => {
        console.log(data, "拿到了");
      });
    },
    showModal2() {
      Message({
        type: "prompt",
      }).then((data) => {
        console.log(data, "拿到了2");
      });
    },
    showTouchModal() {
      this.visible = !this.visible;
    },
  },
  created() {
    document.body.addEventListener("touchmove", function (event) {
      event.stopPropagation()
      event.preventDefault(); //阻止默认行为
      return
    }, { passive: false });
  },
};
</script>

<style>
html, body{
  height: 100vh;
  overflow: hidden;
}
.modal {
  position: fixed;
  width: 100vw;
  height: 300px;
  left: 0;
  bottom: 0;
  background-color: crimson;
  border-radius: 8px 8px 0 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.fade-enter,
.fade-leave-to {
  bottom: -300px;
}
</style>