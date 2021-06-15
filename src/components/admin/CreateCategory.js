import React from 'react'
import Layout from '../core/Layout'
import { Form, Input, Button } from 'antd';

export default function CreateCategory() {
    const handleFinish = value => {
        console.log(value);
    }
    return (
        <Layout title="添加分类">
            <Form onFinish={handleFinish}>
                <Form.Item label="添加分类" name="category">
                    <Input></Input>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">确认添加</Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}
