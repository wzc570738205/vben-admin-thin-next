<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-05-31 11:02:47
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-05-31 18:52:29
-->
<template>
  <a-form
    ref="formRef"
    :model="formState"
    :label-col="labelCol"
    class="ant-table-wrapper"
    style="margin-bottom: 16px"
    :wrapper-col="wrapperCol"
  >
    <a-row>
      <a-col :span="24">
        <a-form-item ref="roleName" label="角色" name="roleName" style="width: 100%">
          <a-select v-model:value="formState.roleName" placeholder="请选择角色">
            <a-select-option value="">全部</a-select-option>
            <a-select-option
              :value="item.roleName"
              v-for="(item, index) in state.roleList"
              :key="index"
              >{{ item.roleName }}</a-select-option
            >
          </a-select>
        </a-form-item>
      </a-col>

      <a-col :span="24">
        <a-form-item style="width: 100%; text-align: right" label="" :wrapper-col="{ span: 24 }">
          <a-button type="dashed" @click="onSubmit">添加</a-button>
          <a-button type="primary" @click="onSubmit" style="margin-left: 10px">查询</a-button>
          <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>
<script lang="ts">
  import { defineComponent, onMounted, reactive, ref, toRaw, UnwrapRef } from 'vue';
  import { getRoleNameList } from '/@/api/sys/user';
  interface FormState {
    roleName: string | undefined;
  }
  interface State {
    roleList: string[];
  }
  export default defineComponent({
    name: 'Search',
    emits: ['searchData'],
    setup(_props, context) {
      //data
      const formRef = ref();
      const state: UnwrapRef<State> = reactive({
        roleList: [],
      });
      const formState: UnwrapRef<FormState> = reactive({
        roleName: '',
      });

      //Lifecycle Hooks
      onMounted(() => {
        getAallRole();
      });

      // methods
      const getAallRole = () => {
        getRoleNameList().then((res) => {
          state.roleList = res || [];
        });
      };
      const onSubmit = () => {
        context.emit('searchData', toRaw(formState));
      };
      const resetForm = () => {
        formRef.value.resetFields();
      };
      return {
        formRef,
        state,
        labelCol: { span: 2 },
        wrapperCol: { span: 14 },
        other: '',
        formState,
        getAallRole,
        onSubmit,
        resetForm,
      };
    },
  });
</script>
<style lang="less" scoped></style>
