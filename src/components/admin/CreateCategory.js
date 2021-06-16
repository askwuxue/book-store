import React from 'react'
import Layout from '../core/Layout'
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import isLogin from '../../utils/auth';
import { API } from '../../../src/config';
import { message } from 'antd';
import { Link } from 'react-router-dom';

export default function CreateCategory() {

    // 提交表单添加分类
    const handleFinish = value => {
        const { user: { _id }, token } = isLogin();
        if (value.category) {
            axios.post(`${API}/category/create/${_id}`, { name: value.category }, {
                // TODO 请求时携带token
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                message.success(`${response.data.name}添加成功`);
            })
        }
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
            <Button>
                <Link to="/admin/dashboard">返回</Link>
            </Button>
        </Layout>
    )
}
