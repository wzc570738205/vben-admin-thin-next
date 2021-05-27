/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-05-20 10:06:58
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-05-26 18:15:15
 */
/**
 * @description: Request result set
 */
export enum ResultEnum {
  SUCCESS = '200',
  ERROR = '500',
  TIMEOUT = '502',
  TYPE = 'success',
}

/**
 * @description: request method
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

/**
 * @description:  contentTyp
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
