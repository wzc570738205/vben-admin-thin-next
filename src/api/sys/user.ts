/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-05-20 10:06:58
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-05-31 17:31:09
 */
import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  // LoginResultModel,
  GetUserInfoParams,
  GetUserInfoByUserIdModel,
  GetUserListParams,
} from './model/userModel';

import { ErrorMessageMode } from '/@/utils/http/axios/types';

enum Api {
  Login = '/login/auth',
  GetUserInfo = '/login/getInfo',
  GetPermCodeByUserId = '/getPermCodeByUserId',
  GetRoleNameList = '/user/getAllRoles',
  GetUserList = '/user/list',
}

/**
 * @description: user login api
 */
export function loginApi(data: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<string>(
    {
      url: Api.Login,
      data,
    },
    {
      errorMessageMode: mode,
    }
  );
}

/**
 * @description: GetUserInfo
 */
export function getUserInfo(params: GetUserInfoParams) {
  return defHttp.post<GetUserInfoByUserIdModel>({
    url: Api.GetUserInfo,
    params,
  });
}

export function getPermCodeByUserId(params: GetUserInfoParams) {
  return defHttp.post<string[]>({
    url: Api.GetPermCodeByUserId,
    params,
  });
}

/**
 * 获取全部角色列表
 * @returns <string[]>
 */
export function getRoleNameList() {
  return defHttp.get<string[]>({
    url: Api.GetRoleNameList,
  });
}

/**
 * 获取用户列表
 * @returns
 */
export function getUserList(data: GetUserListParams) {
  return defHttp.post<string[]>({
    url: Api.GetUserList,
    data,
  });
}
