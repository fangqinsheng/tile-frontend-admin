// 会员中心
import services from '@/services';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import dayjs from 'dayjs';
import React, { useRef } from 'react';

const { queryReundList } = services.FinanceController;

const TableList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();

  const columns: ProDescriptionsItemProps<API.RefundInfo>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
    },
    {
      title: '用户id',
      dataIndex: 'id',
    },
    {
      title: '退款流水号',
      dataIndex: 'code',
      hideInSearch: true,
    },
    {
      title: '金额（元）',
      dataIndex: 'price',
      hideInSearch: true,
    },
    {
      title: '退款状态',
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: {
        0: { text: '待退款', status: '1' },
        1: { text: '已退款', status: '2' },
        2: { text: '已取消', status: '3' },
        3: { text: '已关闭', status: '4' },
      },
    },
    {
      title: '申请时间',
      dataIndex: 'createTime',
      hideInSearch: true,
    },
    {
      title: '退款时间',
      dataIndex: 'refundTime',
      valueType: 'dateRange', // 设置列的类型为日期
      render: (_, record) => {
        return dayjs(record.createTime).format('YYYY-MM-DD HH:mm:ss');
      },
    },
  ];

  return (
    <PageContainer header={{ title: null }}>
      <ProTable<API.MemberInfo>
        headerTitle="支付流水"
        tableLayout="auto"
        actionRef={actionRef}
        rowKey="id"
        search={{}}
        options={false}
        request={async (params, sorter, filter) => {
          const { data, success } = await queryReundList({
            ...params,
            // FIXME: remove @ts-ignore
            // @ts-ignore
            sorter,
            filter,
          });
          return {
            data: data?.list || [],
            success,
          };
        }}
        columns={columns as ProColumns<API.MemberInfo, 'text'>[]}
      />
      {/* 选中的展示 */}
    </PageContainer>
  );
};

export default TableList;
