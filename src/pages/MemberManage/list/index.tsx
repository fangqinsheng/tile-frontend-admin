// 会员中心
import services from '@/services';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Space, message } from 'antd';
import dayjs from 'dayjs';
import React, { useRef, useState } from 'react';

const { freezeMember, thawMember, queryMemberList, openVip, saveMember } =
  services.MemberController;

const TableList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();

  const [selectedRowsState, setSelectedRows] = useState<API.MemberInfo[]>([]);

  /**
   * 冻结会员
   * @param id
   */
  const handleFreeze = async (id: string) => {
    const hide = message.loading('正在冻结');
    try {
      await freezeMember(id);
      hide();
      message.success('冻结成功');
      actionRef.current?.reloadAndRest?.();
      return true;
    } catch (error) {
      hide();
      message.error('冻结失败请重试！');
      return false;
    }
  };

  /**
   * 解冻会员
   * @param id
   */
  const handleThaw = async (id: string) => {
    const hide = message.loading('正在解冻');
    try {
      await thawMember(id);
      hide();
      message.success('解冻成功');
      actionRef.current?.reloadAndRest?.();
      return true;
    } catch (error) {
      hide();
      message.error('解冻失败请重试！');
      return false;
    }
  };

  /**
   * 开通会员
   * @param id
   */
  const handleOpenVip = async (id: string) => {
    const hide = message.loading('正在开通会员');
    try {
      await openVip(id);
      hide();
      message.success('开通会员成功');
      actionRef.current?.reloadAndRest?.();
      return true;
    } catch (error) {
      hide();
      message.error('开通会员失败请重试！');
      return false;
    }
  };

  /**
   * 开通会员
   * @param id
   */
  const handleSave = async (record: API.MemberInfoVO) => {
    const hide = message.loading('正在保存会员');
    try {
      await saveMember(record);
      hide();
      message.success('保存会员成功');
      actionRef.current?.reloadAndRest?.();
      return true;
    } catch (error) {
      hide();
      message.error('保存会员失败请重试！');
      return false;
    }
  };

  const columns: ProColumns<API.MemberInfo>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      editable: false,
    },
    {
      title: '用户id',
      dataIndex: 'id',
      hideInSearch: true,
      editable: false,
    },
    {
      title: '用户昵称',
      dataIndex: 'userName',
      editable: false,
    },
    {
      title: '性别',
      dataIndex: 'sex',
      hideInSearch: true,
      editable: false,

      valueEnum: {
        0: { text: '男' },
        1: { text: '女' },
      },
    },
    {
      title: '生日',
      dataIndex: 'birthday',
      hideInSearch: true,
      editable: false,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      hideInSearch: true,
      editable: false,
    },
    {
      title: '联系电话',
      dataIndex: 'telePhone',
      editable: false,
    },
    {
      title: '联系地址',
      dataIndex: 'address',
      hideInSearch: true,
      editable: false,
    },
    {
      title: '微信号',
      dataIndex: 'webchat',
      hideInSearch: true,
      editable: false,
    },
    {
      title: '注册时间',
      dataIndex: 'createTime',
      valueType: 'dateRange', // 设置列的类型为日期
      render: (_, record) => {
        return dayjs(record.createTime).format('YYYY-MM-DD HH:mm:ss');
      },
      editable: false,
    },
    {
      title: '会员卡',
      dataIndex: 'memberCard',
      valueType: 'select',
      valueEnum: {
        1: { text: '未开通' },
        2: { text: '已开通' },
      },
      editable: false,
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: {
        1: { text: '正常', status: 'MALE' },
        2: { text: '冻结', status: 'FEMALE' },
      },
      editable: false,
    },
    {
      title: '最后一次登录时间',
      dataIndex: 'updateTime',
      hideInSearch: true,
      editable: false,
    },
    {
      title: '冻结原因',
      dataIndex: 'freezeReason',
      hideInSearch: true,
      editable: false,
    },
    {
      title: '账户余额',
      dataIndex: 'balance',
      hideInSearch: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <Space>
          <a
            onClick={() =>
              history.push(`/MemberManage/detail?userId=${record.id}`)
            }
          >
            详情
          </a>

          <a
            onClick={() =>
              record.status === '1'
                ? handleFreeze(record.id)
                : handleThaw(record.id)
            }
          >
            {record.status === '1' ? '冻结' : '解冻'}
          </a>
          <a onClick={() => handleOpenVip(record.id)}>开通会员</a>
          <a
            onClick={() => {
              actionRef.current?.startEditable(record.id);
            }}
          >
            调整余额
          </a>
        </Space>
      ),
    },
  ];

  return (
    <PageContainer header={{ title: null }}>
      <ProTable<API.MemberInfo>
        editable={{
          onSave: async (key, row) => {
            // 在这里处理保存编辑后的数据
            await handleSave(row);
          },
        }}
        headerTitle="会员管理"
        tableLayout="auto"
        actionRef={actionRef}
        rowKey="id"
        search={{}}
        options={false}
        request={async (params, sorter, filter) => {
          const { data, success } = await queryMemberList({
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
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
      />
      {/* 选中的展示 */}
      {selectedRowsState && <></>}
    </PageContainer>
  );
};

export default TableList;
