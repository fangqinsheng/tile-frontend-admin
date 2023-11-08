// 会员中心
import services from '@/services';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { Tooltip } from 'antd';
import dayjs from 'dayjs';
import React, { useRef } from 'react';

const { queryNoticesList } = services.SysteamController;

/**
 * @description 列表截取，超过多少字数截取，并加省略号,
 * @param {String || Array} value 传进来的数据
 * @param value 截取的长度
 */
const colSlice = (value: string | string[], num: number) => {
  let title = '';

  let result = '';

  if (Object.prototype.toString.call(value) === '[object Array]') {
    title = (value as string[]).join(',');
    result =
      value.length > num
        ? `${(value as string[]).slice(0, num).join(',')}...`
        : (value as string[]).join(',');
  }
  if (Object.prototype.toString.call(value) === '[object String]') {
    title = value as string;
    result =
      value.length > num ? `${value.slice(0, num)}...` : (value as string);
  }

  return <Tooltip title={title}>{result}</Tooltip>;
};

const TableList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();

  const columns: ProDescriptionsItemProps<API.NoticeInfo>[] = [
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
      title: '用户昵称',
      dataIndex: 'name',
    },
    {
      title: '反馈内容',
      dataIndex: 'content',
      hideInSearch: true,
      render: (_text, record) => {
        return colSlice(record.content, 8);
      },
    },
    {
      title: '反馈时间',
      dataIndex: 'feedbackTime',
      valueType: 'dateRange',
      render: (_, record) => {
        return dayjs(record.feedbackTime).format('YYYY-MM-DD HH:mm:ss');
      },
    },
  ];

  return (
    <PageContainer header={{ title: null }}>
      <ProTable<API.NoticeInfo>
        headerTitle="价格管理"
        tableLayout="auto"
        actionRef={actionRef}
        rowKey="id"
        search={{}}
        options={false}
        request={async (params, sorter, filter) => {
          const { data, success } = await queryNoticesList({
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
        columns={columns as ProColumns<API.NoticeInfo, 'text'>[]}
      />
    </PageContainer>
  );
};

export default TableList;
