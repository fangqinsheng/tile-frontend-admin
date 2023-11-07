/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/v1/queryMemberList */
export async function queryMemberList(
  params: {
    // query
    /** 用户昵称 */
    userName?: string;
    /** 联系电话 */
    telephone?: string;
    /** 会员卡 */
    memberType?: string;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 状态 */
    status?: string;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.AjaxRes<API.PageInfo<API.MemberInfo[]>>>(
    '/api/v1/queryMemberList',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 POST /api/v1/user */
export async function freezeMember(
  id: string,
  options?: { [key: string]: any },
) {
  return request<API.Result_UserInfo_>(`/api/v1/freezeMember?id=${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/user */
export async function thawMember(id: string, options?: { [key: string]: any }) {
  return request<API.Result_UserInfo_>(`/api/v1/thawMember?id=${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/user */
export async function openVip(id: string, options?: { [key: string]: any }) {
  return request<API.Result_UserInfo_>(`/api/v1/openVip?id=${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/user */
export async function saveMember(
  body?: API.MemberInfoVO,
  options?: { [key: string]: any },
) {
  return request<API.Result_UserInfo_>('/api/v1/saveMember', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/user */
export async function queryMember(
  search?: string,
  options?: { [key: string]: any },
) {
  return request<API.AjaxRes<API.MemberDetail>>(
    `/api/v1/queryMember${search}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      ...(options || {}),
    },
  );
}
