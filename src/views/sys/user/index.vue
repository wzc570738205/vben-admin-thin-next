<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-05-27 10:18:09
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-06-01 15:46:09
-->
<template>
  <div class="p-4">
    <Search @searchData="searchData" />
    <Table :quaryParams="state.quaryParams" ref="tableRef" />
    <a-row>
      <a-col :span="24">分页</a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, UnwrapRef } from 'vue';
  import Search from './components/Search.vue';
  import Table from './components/Table.vue';
  import { GetUserListParams } from '/@/api/sys/model/userModel';
  interface state {
    quaryParams: GetUserListParams;
  }
  export default defineComponent({
    components: {
      Search,
      Table,
    },
    setup() {
      let state: UnwrapRef<state> = reactive({
        quaryParams: {
          pageNum: 1,
          pageSize: 10,
          roleName: '',
        },
      });
      const tableRef = ref();

      const searchData = (e: any) => {
        state.quaryParams.roleName = e.roleName;
        tableRef.value.getData();
      };
      return {
        searchData,
        tableRef,
        state,
      };
    },
  });
</script>

<style lang="less" scoped></style>
