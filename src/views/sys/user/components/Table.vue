<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-05-31 15:23:19
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-06-01 15:46:27
-->
<template>
  <a-table
    :data-source="state.dataSource"
    :pagination="false"
    :loading="state.loading"
    :rowKey="(record, index) => index"
    :rowClassName="(record, index) => (index % 2 === 1 ? 'table-striped' : null)"
  >
    <a-table-column key="number" title="序号" data-index="number">
      <template #default="{ index }">
        <span> {{ index + 1 }}</span>
      </template>
    </a-table-column>
    <a-table-column key="nickname" title="昵称" data-index="nickname" />

    <a-table-column key="username" title="用户名" data-index="username" />
    <a-table-column key="roleName" title="角色" data-index="roleName">
      <template #default="{ record }">
        <a-tag color="green" v-if="record.roleId === 1">{{ record.roleName }}</a-tag>
        <a-tag color="blue" v-else>{{ record.roleName }}</a-tag>
      </template>
    </a-table-column>
    <a-table-column key="createTime" title="创建时间" data-index="createTime" />
    <a-table-column key="updateTime" title="最近修改时间" data-index="updateTime" />
    <a-table-column key="action" title="操作">
      <template #default="{ record }">
        <span>
          <a-button type="link" @click="edit(record)">编辑</a-button>
          <a-button type="link" @click="del(record)" style="color: #ff7875">删除</a-button>
        </span>
      </template>
    </a-table-column>
  </a-table>
</template>
<script lang="ts">
  import { defineComponent, onMounted, reactive, toRaw, UnwrapRef } from 'vue';
  import { GetUserListParams } from '/@/api/sys/model/userModel';
  import { getUserList } from '/@/api/sys/user';

  interface state {
    dataSource: Array<string>;
    loading: Boolean;
  }
  export default defineComponent({
    props: {
      quaryParams: {
        type: Object as PropType<GetUserListParams>,
        default: () => ({
          pageNum: 1,
          pageSize: 10,
          roleName: '',
        }),
      },
    },
    setup(props) {
      console.log('props: ', props);
      let state: UnwrapRef<state> = reactive({
        dataSource: [],
        loading: false,
      });

      // watch(
      //   () => props.roleName,
      //   (count, _prevCount) => {
      //     state.quaryParams.roleName = count || '';
      //     getData();
      //   }
      // );

      onMounted(() => {
        getData();
      });

      const getData = () => {
        state.loading = true;
        getUserList(toRaw(props.quaryParams))
          .then((res: any) => {
            state.dataSource = res.list || [];
          })
          .finally(() => {
            state.loading = false;
          });
      };
      return {
        state,
        getData,
      };
    },
  });
</script>
<style scoped lang="less"></style>
