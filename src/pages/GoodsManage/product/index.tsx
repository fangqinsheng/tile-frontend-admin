// 会员中心
import services from '@/services';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { Space, message } from 'antd';
import React, { useRef } from 'react';

const {
  queryProductList,
  freezeProduct,
  thawProduct,
  listProduct,
  delistProduct,
} = services.GoodsController;

const TableList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();

  /**
   * 冻结商品
   * @param id
   */
  const handleFreeze = async (id: string) => {
    const hide = message.loading('正在冻结');
    try {
      await freezeProduct(id);
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
   * 解冻商品
   * @param id
   */
  const handleThaw = async (id: string) => {
    const hide = message.loading('正在解冻');
    try {
      await thawProduct(id);
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
   * 冻结商品
   * @param id
   */
  const handleDelist = async (id: string) => {
    const hide = message.loading('正在下架');
    try {
      await delistProduct(id);
      hide();
      message.success('下架成功');
      actionRef.current?.reloadAndRest?.();
      return true;
    } catch (error) {
      hide();
      message.error('下架失败请重试！');
      return false;
    }
  };

  /**
   * 上架商品
   * @param id
   */
  const handleList = async (id: string) => {
    const hide = message.loading('正在上架');
    try {
      await listProduct(id);
      hide();
      message.success('上架成功');
      actionRef.current?.reloadAndRest?.();
      return true;
    } catch (error) {
      hide();
      message.error('上架失败请重试！');
      return false;
    }
  };

  const columns: ProDescriptionsItemProps<API.ProductInfo>[] = [
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
      dataIndex: 'userName',
    },
    {
      title: '联系电话',
      dataIndex: 'telephone',
    },
    {
      title: '商品编码',
      dataIndex: 'code',
      hideInSearch: true,
    },
    {
      title: '商品名称',
      dataIndex: 'name',
    },
    {
      title: '商品详情',
      dataIndex: 'description',
      hideInSearch: true,
    },
    {
      title: '商品图片',
      dataIndex: 'imgurl',
      hideInSearch: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: {
        0: { text: '未上架', status: '1' },
        1: { text: '已上架', status: '2' },
        2: { text: '已冻结', status: '3' },
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
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
              record.status === '1'
                ? handleDelist(record.id)
                : handleList(record.id)
            }
          >
            {record.status === '1' ? '下架' : '上架'}
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
        </Space>
      ),
    },
  ];

  return (
    <PageContainer header={{ title: null }}>
      <ProTable<API.ProductInfo>
        headerTitle="会员管理"
        tableLayout="auto"
        actionRef={actionRef}
        rowKey="id"
        search={{}}
        options={false}
        request={async (params, sorter, filter) => {
          const { data, success } = await queryProductList({
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
        columns={columns as ProColumns<API.ProductInfo, 'text'>[]}
      />
    </PageContainer>
  );
};

export default TableList;
