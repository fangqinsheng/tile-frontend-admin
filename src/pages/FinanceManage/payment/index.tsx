// 会员中心
import services from '@/services';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { message } from 'antd';
import React, { useRef } from 'react';

const { refundPayment, queryPaymentList } = services.FinanceController;

const TableList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();

  /**
   * 冻结会员
   * @param id
   */
  const handleRefund = async (id: string) => {
    const hide = message.loading('正在退款');
    try {
      await refundPayment(id);
      hide();
      message.success('退款成功');
      actionRef.current?.reloadAndRest?.();
      return true;
    } catch (error) {
      hide();
      message.error('退款失败请重试！');
      return false;
    }
  };

  const columns: ProDescriptionsItemProps<API.PaymentInfo>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
    },
    {
      title: '用户id',
      dataIndex: 'id',
      hideInSearch: true,
    },
    {
      title: '支付流水号',
      dataIndex: 'code',
      hideInSearch: true,
    },
    {
      title: '金额（元）',
      dataIndex: 'price',
      hideInSearch: true,
    },
    {
      title: '支付状态',
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: {
        0: { text: '待支付', status: '1' },
        1: { text: '已支付', status: '2' },
        2: { text: '已取消', status: '3' },
        3: { text: '已关闭', status: '4' },
      },
    },
    {
      title: '下单时间',
      dataIndex: 'createTime',
      hideInSearch: true,
    },
    {
      title: '支付时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a onClick={() => handleRefund(record.id)}>退款</a>
        </>
      ),
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
          const { data, success } = await queryPaymentList({
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
    </PageContainer>
  );
};

export default TableList;
