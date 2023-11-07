/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！

declare namespace API {
  interface PageInfo<T = any> {
    /** 
1 */
    current?: number;
    pageSize?: number;
    total?: number;
    list?: T;
  }

  interface AjaxRes<T = any> {
    errorMessage?: string;
    success: boolean;
    data: T;
  }

  interface PageInfo_UserInfo_ {
    /** 
1 */
    current?: number;
    pageSize?: number;
    total?: number;
    list?: Array<UserInfo>;
  }

  interface Result {
    success?: boolean;
    errorMessage?: string;
    data?: Record<string, any>;
  }

  interface Result_PageInfo_UserInfo__ {
    success?: boolean;
    errorMessage?: string;
    data?: PageInfo_UserInfo_;
  }

  interface Result_UserInfo_ {
    success?: boolean;
    errorMessage?: string;
    data?: UserInfo;
  }

  interface Result_string_ {
    success?: boolean;
    errorMessage?: string;
    data?: string;
  }

  type UserGenderEnum = 'MALE' | 'FEMALE';

  // 会员信息
  interface MemberInfo {
    id: string;
    userName?: string; // 用户昵称
    sex?: string; // 性别
    birthday?: string; // 生日
    telePhone?: string; // 联系电话
    age?: string; // 年龄
    address?: string; // 联系地址
    webchat?: string; // 微信号
    createTime?: string; // 注册时间
    memberCard?: string; // 会员卡
    status?: string; // 状态
    updateTime?: string; // 最后一次登录时间
    freezeReason?: string; // 冻结原因
    balance?: string; // 账户余额
  }

  // 会员卡信息
  interface ClubInfo {
    id: string;
    name?: string; // 会员卡名称
    type?: string; // 会员卡类型
    effective?: string; // 有效期
    price?: string; // 价格
    content?: string; // 包含权益
    status?: string; // 状态
    createTime?: string; // 创建时间
    updateTime?: string; // 更新时间
  }

  interface ClubInfoVO {
    /** 会员卡类型 */
    type?: string;
    /** 会员卡名称 */
    memberName?: string;
    /** 有效期 */
    effectTime?: number;
    /** 价格 */
    price?: number;
    /** 状态 */
    status?: string;
  }

  interface ProductInfo {
    id?: string;
    userName?: string; // 用户昵称
    telePhone?: string; // 联系电话
    productCode?: string; // 商品编码
    productName?: string; // 商品名称
    productDetail?: string; // 商品详情
    productImg?: string; // 商品图片
    status?: string; // 状态
    createTime?: string; // 创建时间
  }

  interface UserInfoVO {
    name?: string;
    /** nick */
    nickName?: string;
    /** email */
    email?: string;
  }

  interface MemberInfoVO {
    /** 会员卡类型 */
    type?: string;
    /** 会员卡名称 */
    memberName?: string;
    /** 有效期 */
    effectTime?: number;
    /** 价格 */
    price?: number;
    /** 状态 */
    status?: string;
  }

  interface IBalanceDetail {
    id: string;
    happenTime: string;
    type: string;
    price: number;
  }

  interface MemberDetail {
    id: string;
    userName: string;
    sex: string;
    birthday: string;
    age: string;
    telephone: string;
    adress: string;
    webchat: string;
    createTime: string;
    status: string;
    freezeReason: string;
    updateTime: string;
    balance: number;
    clubInfo: ClubInfo[];
    balanceDetail: IBalanceDetail[];
  }

  type definitions_0 = null;
}
