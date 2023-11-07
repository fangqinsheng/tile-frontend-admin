// 会员中心
import services from '@/services';
import { updateClub } from '@/services/ClubController';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Form, Input, Radio, Space, message } from 'antd';
import React, { useRef, useState } from 'react';
import CreateForm from './components/CreateForm';

const { forbiddenClub, enableClub, queryClubList, saveClub } =
  services.ClubController;

const TableList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();

  const [visible, setVisible] = useState<boolean>(false);

  const [isFlag, setIsFlag] = useState<boolean>(false);

  const [form] = Form.useForm();

  const [selectedRowsState, setSelectedRows] = useState<API.ClubInfo[]>([]);

  /**
   * 禁用
   * @param id
   */
  const handleAdd = async (data: API.ClubInfoVO) => {
    const hide = message.loading('正在新建');
    try {
      await saveClub(data);
      hide();
      message.success('新建成功');
      actionRef.current?.reloadAndRest?.();
      return true;
    } catch (error) {
      hide();
      message.error('新建失败请重试！');
      return false;
    }
  };

  /**
   * 禁用
   * @param id
   */
  const handleUpdate = async (data: API.ClubInfoVO) => {
    const hide = message.loading('正在修改');
    try {
      await updateClub(data);
      hide();
      message.success('修改成功');
      actionRef.current?.reloadAndRest?.();
      return true;
    } catch (error) {
      hide();
      message.error('修改失败请重试！');
      return false;
    }
  };

  /**
   * 禁用
   * @param id
   */
  const handleForbidden = async (id: string) => {
    const hide = message.loading('正在冻结');
    try {
      await forbiddenClub(id);
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
   * 启用
   * @param id
   */
  const hanldeEnable = async (id: string) => {
    const hide = message.loading('正在解冻');
    try {
      await enableClub(id);
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

  const columns: ProColumns<API.ClubInfo>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
    },
    {
      title: '会员卡名称',
      dataIndex: 'name',
    },
    {
      title: '会员卡类型',
      dataIndex: 'type',
      valueType: 'select',
      valueEnum: {
        0: { text: 'VIP' },
        1: { text: 'SVIP' },
      },
    },
    {
      title: '有效期',
      dataIndex: 'effective',
      hideInSearch: true,
    },
    {
      title: '价格',
      dataIndex: 'price',
      hideInSearch: true,
    },
    {
      title: '包含权益',
      dataIndex: 'content',
      hideInSearch: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: {
        0: { text: '启用' },
        1: { text: '禁用' },
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      hideInSearch: true,
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
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
                ? handleForbidden(record.id)
                : hanldeEnable(record.id)
            }
          >
            {record.status === '1' ? '禁用' : '启用'}
          </a>
          <a
            onClick={() => {
              setVisible(true);
              setIsFlag(true);
              form.setFieldsValue(record);
            }}
          >
            编辑
          </a>
        </Space>
      ),
    },
  ];

  return (
    <PageContainer header={{ title: null }}>
      <ProTable<API.ClubInfo>
        headerTitle="会员管卡理"
        tableLayout="auto"
        actionRef={actionRef}
        toolBarRender={() => [
          <Button
            key="1"
            type="primary"
            onClick={() => {
              setIsFlag(false);
              setVisible(true);
              form.resetFields();
            }}
          >
            新建
          </Button>,
        ]}
        rowKey="id"
        search={{}}
        options={false}
        request={async (params, sorter, filter) => {
          const { data, success } = await queryClubList({
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
        columns={columns as ProColumns<API.ClubInfo, 'text'>[]}
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
      />
      <CreateForm
        title={isFlag ? '编辑会员卡' : '新建会员卡'}
        onCancel={() => setVisible(false)}
        modalVisible={visible}
      >
        <Form
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ type: 'VIP', status: '1' }}
          onFinish={(changeValue) => {
            if (isFlag) {
              handleUpdate(changeValue);
              return;
            }
            handleAdd(changeValue);
          }}
        >
          <Form.Item
            label="会员卡类型"
            name="type"
            required
            rules={[{ required: true, message: '请选择' }]}
          >
            <Radio.Group
              disabled={isFlag}
              options={[
                { label: 'VIP', value: 'VIP' },
                { label: 'SVIP', value: 'SVIP' },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="会员卡名称"
            name="name"
            required
            rules={[{ required: true, message: '请输入' }]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="有效期"
            name="effective"
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
          <Form.Item label="会员卡类型" name="status">
            <Radio.Group
              options={[
                { label: '禁用', value: '1' },
                { label: '启用', value: '2' },
              ]}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8 }}>
            <Space>
              <Button onClick={() => setVisible(false)}>取消</Button>
              <Button htmlType="submit">确定</Button>
            </Space>
          </Form.Item>
        </Form>
      </CreateForm>
      {/* 选中的展示 */}
      {selectedRowsState && <></>}
    </PageContainer>
  );
};

export default TableList;
