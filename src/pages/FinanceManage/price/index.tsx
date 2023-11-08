// 会员中心
import services from '@/services';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Form, Input, Space, message } from 'antd';
import React, { useRef, useState } from 'react';
import CreateForm from './components/CreateForm';

const { queryPriceList, savePrice } = services.FinanceController;

const TableList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();

  const [form] = Form.useForm();

  const [visible, setVisible] = useState<boolean>(false);

  /**
   * 禁用
   * @param id
   */
  const handleUpdate = async (data: API.PriceInfo) => {
    const hide = message.loading('正在编辑');
    try {
      await savePrice(data);
      hide();
      message.success('编辑成功');
      actionRef.current?.reloadAndRest?.();
      return true;
    } catch (error) {
      hide();
      message.error('编辑失败请重试！');
      return false;
    }
  };

  const columns: ProDescriptionsItemProps<API.PriceInfo>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
    },
    {
      title: '项目',
      dataIndex: 'name',
    },
    {
      title: '规格',
      dataIndex: 'spec',
    },
    {
      title: '价格（元）',
      dataIndex: 'price',
    },
    {
      title: '免费数量',
      dataIndex: 'createTime',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a onClick={() => handleUpdate(record)}>编辑</a>
        </>
      ),
    },
  ];

  return (
    <PageContainer header={{ title: null }}>
      <ProTable<API.MemberInfo>
        headerTitle="价格管理"
        tableLayout="auto"
        actionRef={actionRef}
        rowKey="id"
        search={false}
        options={false}
        request={async (params, sorter, filter) => {
          const { data, success } = await queryPriceList({
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

      <CreateForm onCancel={() => setVisible(false)} modalVisible={visible}>
        <Form
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ type: 'VIP', status: '1' }}
          onFinish={(changeValue) => {
            handleUpdate(changeValue);
          }}
        >
          <Form.Item
            label="项目"
            name="name"
            required
            rules={[{ required: true, message: '请输入' }]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="规格"
            name="spec"
            required
            rules={[{ required: true, message: '请输入' }]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="价格"
            name="price"
            required
            rules={[{ required: true, message: '请输入' }]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="免费数量"
            name="num"
            required
            rules={[{ required: true, message: '请输入' }]}
          >
            <Input placeholder="请输入" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8 }}>
            <Space>
              <Button onClick={() => setVisible(false)}>取消</Button>
              <Button htmlType="submit">确定</Button>
            </Space>
          </Form.Item>
        </Form>
      </CreateForm>
    </PageContainer>
  );
};

export default TableList;
