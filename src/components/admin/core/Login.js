import React from 'react';
import Layout from './Layout';
import { Form, Input, Button } from 'antd';

// 控制表单的样式
const layout = {
    labelCol: {
        span: 2,
    },
    wrapperCol: {
        span: 0,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 2,
        span: 2,
    },
};

export default function Login() {
    return (
        <Layout title="登录" subTitle="">
            <Form {...layout}>
                <Form.Item label="用户名" name="username">
                    <Input></Input>
                </Form.Item>
                <Form.Item label="密码" name="password">
                    <Input.Password></Input.Password>
                </Form.Item>
                <Form.Item label="邮箱" name="email">
                    <Input type="email"></Input>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}
