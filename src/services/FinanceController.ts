/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/v1/queryMemberList */
export async function queryPaymentList(
  params: {
    // query
    /** 用户id */
    userId?: string;
    /** 支付状态 */
    status?: string;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.AjaxRes<API.PageInfo<API.MemberInfo[]>>>(
    '/api/v1/queryPaymentList',
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
export async function queryReundList(
  params: {
    // query
    /** 用户id */
    userId?: string;
    /** 支付状态 */
    status?: string;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.AjaxRes<API.PageInfo<API.MemberInfo[]>>>(
    '/api/v1/queryRefundList',
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
  return request<API.AjaxRes<API.PageInfo<API.MemberInfo[]>>>(
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
