<template>
  <div>
    <div>列表</div>
    <ul>
      <li :key="item.userId" v-for="item in items">
        <Item :item="item" />
      </li>
    </ul>
    <button @click='add'>添加一个</button>
  </div>
</template>

<script>
import Item from './component/ListItem'
export default {
  data: function () {
    return {
      userName: "sbjue",
      items: [],
      pageInfo: {},
    };
  },
  mounted() {
    this.$axios.get("/v1/user").then(({ data: { items, pageInfo } }) => {
      this.items = items;
      this.pageInfo = pageInfo;
    });
  },
  methods: {
      add () {
          this.items.push({ userId: 1001, userName: '新增' })
      }
  },
  components: {
      Item
  }
};
</script>

<style>
</style>