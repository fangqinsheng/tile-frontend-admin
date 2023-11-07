import { PageContainer } from '@ant-design/pro-components';
import { Button, Form, Input } from 'antd';
import type { FC } from 'react';

const Index: FC = () => {
  return (
    <PageContainer header={{ title: null }}>
      {/* <Breadcrumb
        items={[
          {
            title: '系统管理',
          },
          {
            title: '系统设置',
          },
        ]}
      /> */}
      <Form labelWrap layout="vertical">
        <Form.Item label="系统公告" name="content">
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">保存</Button>
        </Form.Item>
      </Form>
    </PageContainer>
  );
};

export default Index;
