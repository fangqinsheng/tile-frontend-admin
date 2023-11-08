import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '瓷砖小程序',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '会员中心',
      path: '/MemberManage',
      // hideInBreadcrumb: true,
      routes: [
        {
          name: '会员管理',
          path: '/MemberManage/list',
          component: './MemberManage/list',
        },
        {
          name: '会员详情',
          path: '/MemberManage/detail',
          component: './MemberManage/detail',
          menu: false,
        },
        {
          name: '会员卡',
          path: '/MemberManage/card',
          component: './MemberManage/card',
        },
      ],
    },
    {
      name: '财务管理',
      path: '/FinanceManage',
      // hideInBreadcrumb: true,
      routes: [
        {
          name: '支付流水',
          path: '/FinanceManage/payment',
          component: './FinanceManage/payment',
        },
        {
          name: '退款流水',
          path: '/FinanceManage/refund',
          component: './FinanceManage/refund',
        },
        {
          name: '价格管理',
          path: '/FinanceManage/price',
          component: './FinanceManage/price',
        },
      ],
    },
    {
      name: '商品管理',
      path: '/GoodsManage',
      // hideInBreadcrumb: true,
      routes: [
        {
          name: '商品管理',
          path: '/GoodsManage/product',
          component: './GoodsManage/product',
        },
        {
          name: '委托管理',
          path: '/GoodsManage/contracts',
          component: './GoodsManage/contracts',
        },
      ],
    },
    {
      name: '系统管理',
      path: '/SysteamManage',
      // hideInBreadcrumb: true,
      routes: [
        {
          name: '系统设置',
          path: '/SysteamManage/setting',
          component: './SysteamManage/setting',
        },
        {
          name: '反馈',
          path: '/SysteamManage/list',
          component: './SysteamManage/list',
        },
      ],
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
  outputPath: 'public',
});
