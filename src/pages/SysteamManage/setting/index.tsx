import services from '@/services';
import { ActionType, PageContainer } from '@ant-design/pro-components';
import { Button, Form, Input, message } from 'antd';
import { useRef, type FC } from 'react';

const { saveNotice } = services.SysteamController;

const Index: FC = () => {
  const actionRef = useRef<ActionType>();

  /**
   * 开通会员
   * @param id
   */
  const handleSave = async (record: { content: string }) => {
    const hide = message.loading('正在保存公告');
    try {
      await saveNotice(record);
      hide();
      message.success('保存公告成功');
      actionRef.current?.reloadAndRest?.();
      return true;
    } catch (error) {
      hide();
      message.error('保存公告失败请重试！');
      return false;
    }
  };

  return (
    <PageContainer header={{ title: '系统设置' }}>
      <Form
        labelWrap
        layout="vertical"
        onFinish={(changeValue) => {
          handleSave(changeValue);
        }}
      >
        <Form.Item label="系统公告" name="content">
          <Input.TextArea maxLength={1000} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">保存</Button>
        </Form.Item>
      </Form>
    </PageContainer>
  );
};

export default Index;
