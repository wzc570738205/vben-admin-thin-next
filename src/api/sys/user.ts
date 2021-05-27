/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-05-20 10:06:58
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-05-27 09:50:15
 */
import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  // LoginResultModel,
  GetUserInfoParams,
  GetUserInfoByUserIdModel,
} from './model/userModel';

import { ErrorMessageMode } from '/@/utils/http/axios/types';

enum Api {
  Login = '/login/auth',
  GetUserInfo = '/login/getInfo',
  GetPermCodeByUserId = '/getPermCodeByUserId',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<string>(
    {
      url: Api.Login,
      params,
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
