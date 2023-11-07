// 会员中心
import CardWrapper from '@/components/CardWrapper';
import services from '@/services';
import {
  ActionType,
  PageContainer,
  ProCard,
  ProColumns,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { useLocation, useRequest } from '@umijs/max';
import { useMount } from 'ahooks';
import { Button } from 'antd';
import React, { useRef } from 'react';

const { queryMember } = services.MemberController;

const TableList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();

  const { search } = useLocation();

  const { run, data } = useRequest(queryMember, {
    manual: true,
  });

  useMount(() => run(search));

  const columns: ProDescriptionsItemProps<API.ClubInfo>[] = [
    {
      title: '会员卡名称',
      dataIndex: 'happenTime',
    },
    {
      title: '类型',
      dataIndex: 'type',
      valueEnum: {
        0: { text: 'VIP' },
        1: { text: 'VVIP' },
      },
    },
    {
      title: '有效期',
      dataIndex: 'effective',
    },
    {
      title: '价格',
      dataIndex: 'price',
    },
    {
      title: '开通时间',
      dataIndex: 'createTime',
    },
    {
      title: '到期时间',
      dataIndex: 'endTime',
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueEnum: {
        0: { text: '生效中' },
        1: { text: '失效中' },
      },
    },
  ];

  const columns1: ProDescriptionsItemProps<API.IBalanceDetail>[] = [
    {
      title: '发生时间',
      dataIndex: 'happenTime',
    },
    {
      title: '类型',
      dataIndex: 'type',
    },
    {
      title: '金额（瓷币）',
      dataIndex: 'price',
    },
  ];

  return (
    <PageContainer
      header={{
        title: '会员详情',
      }}
    >
      <CardWrapper title="基本信息" noPadding>
        <ProCard split="vertical" bordered headerBordered>
          <ProCard title="用户ID">{data?.id ?? ''}</ProCard>
          <ProCard title="用户昵称">{data?.userName ?? ''}</ProCard>
          <ProCard title="性别">{data?.sex ?? ''}</ProCard>
          <ProCard title="生日">
            {{ '1': '男', '2': '女' }[data?.birthday ?? '1']}
          </ProCard>
          <ProCard title="年龄">{data?.age ?? ''}</ProCard>
          <ProCard title="联系电话">{data?.telephone ?? ''}</ProCard>
          <ProCard title="联系地址">{data?.adress ?? ''}</ProCard>
        </ProCard>
        <ProCard split="vertical" bordered headerBordered>
          <ProCard title="微信号">{data?.webchat ?? ''}</ProCard>
          <ProCard title="注册时间">{data?.createTime ?? ''}</ProCard>
          <ProCard title="状态">
            {{ '1': '禁用', '2': '启用' }[data?.status ?? '1']}
          </ProCard>
          <ProCard title="冻结原因">{data?.freezeReason ?? ''}</ProCard>
          <ProCard title="最后一次登录时间">{data?.updateTime ?? ''}</ProCard>
          <ProCard title=""></ProCard>
          <ProCard title=""></ProCard>
        </ProCard>
      </CardWrapper>

      <CardWrapper title="基本信息" noPadding extra={<Button>开通会员</Button>}>
        <ProTable<API.MemberInfo>
          tableLayout="auto"
          actionRef={actionRef}
          rowKey="id"
          search={false}
          dataSource={data?.clubInfo}
          columns={columns as ProColumns<API.MemberInfo, 'text'>[]}
        />
      </CardWrapper>
      <CardWrapper title="基本信息" noPadding>
        账户余额： {data?.balance}瓷币<Button>调整余额</Button>
      </CardWrapper>
      <CardWrapper title="余额明细" noPadding>
        <ProTable<API.MemberInfo>
          tableLayout="auto"
          actionRef={actionRef}
          rowKey="id"
          search={false}
          dataSource={data?.balanceDetail}
          columns={columns1 as ProColumns<API.MemberInfo, 'text'>[]}
        />
      </CardWrapper>
    </PageContainer>
  );
};

export default TableList;
