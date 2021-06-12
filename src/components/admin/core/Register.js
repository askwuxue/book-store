import React from 'react'
import Layout from './Layout'
import { Form, Input, Button, Checkbox } from 'antd';

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

export default function Register() {
    return (
        <Layout title="注册" subTitle="">
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
                <Form.Item name="remember" {...tailLayout} valuePropName="checked">
                    <Checkbox>协议</Checkbox>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}
