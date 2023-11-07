/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/v1/queryMemberList */
export async function queryClubList(
  params: {
    // query
    /** 会员卡名称 */
    name?: string;
    /** 会员卡类型 */
    type?: string;
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
    '/api/v1/queryClubList',
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
export async function enableClub(id: string, options?: { [key: string]: any }) {
  return request<API.Result_UserInfo_>(`/api/v1/enableClub?id=${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/user */
export async function forbiddenClub(
  id: string,
  options?: { [key: string]: any },
) {
  return request<API.Result_UserInfo_>(`/api/v1/forbiddenClub?id=${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/user */
export async function saveClub(
  body?: API.ClubInfoVO,
  options?: { [key: string]: any },
) {
  return request<API.Result_UserInfo_>('/api/v1/saveClub', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/user */
export async function updateClub(
  body?: API.ClubInfoVO,
  options?: { [key: string]: any },
) {
  return request<API.Result_UserInfo_>('/api/v1/updateClub', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
