/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/v1/queryMemberList */
export async function queryProductList(
  params: {
    // query
    /** 商品名称 */
    name?: string;
    /** 用户id */
    userId?: string;
    /** 用户昵称 */
    userName?: string;
    /** 联系电话 */
    telephone?: string;
    /** 上架状态 */
    status?: string;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.AjaxRes<API.PageInfo<API.ProductInfo[]>>>(
    '/api/v1/queryProductList',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 GET /api/v1/queryMemberList */
export async function queryContractsList(
  params: {
    // query
    /** 用户id */
    userId?: string;
    /** 用户名称 */
    userName?: string;
    /** 联系电话 */
    telephone?: string;
    /** 发布状态 */
    status?: string;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.AjaxRes<API.PageInfo<API.ProductInfo[]>>>(
    '/api/v1/queryContractsList',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 GET /api/v1/queryMemberList */
export async function queryPriceList(options?: { [key: string]: any }) {
  return request<API.AjaxRes<API.PageInfo<API.ProductInfo[]>>>(
    '/api/v1/queryPriceList',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 POST /api/v1/user */
export async function refundPayment(
  id: string,
  options?: { [key: string]: any },
) {
  return request<API.Result_UserInfo_>(`/api/v1/refundPayment?id=${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/user */
export async function savePrice(
  body: API.PriceInfo,
  options?: { [key: string]: any },
) {
  return request<API.Result_UserInfo_>(`/api/v1/savePrice`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/user */
export async function freezeProduct(
  id: string,
  options?: { [key: string]: any },
) {
  return request<API.Result_UserInfo_>(`/api/v1/freezeProduct?id=${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/user */
export async function thawProduct(
  id: string,
  options?: { [key: string]: any },
) {
  return request<API.Result_UserInfo_>(`/api/v1/thawProduct?id=${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/user */
export async function listProduct(
  id: string,
  options?: { [key: string]: any },
) {
  return request<API.Result_UserInfo_>(`/api/v1/listProduct?id=${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/user */
export async function delistProduct(
  id: string,
  options?: { [key: string]: any },
) {
  return request<API.Result_UserInfo_>(`/api/v1/delistProduct?id=${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
