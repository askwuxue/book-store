import React from 'react';
import Layout from './Layout';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { API } from '../../config';
import { useHistory } from 'react-router';

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
    const history = useHistory();

    // 用户登录
    const handleLogin = async value => {
        let { data } = await axios.post(`${API}/signin`, value);
        // token写入本地
        localStorage.setItem('jwt', JSON.stringify(data));
        // 根据用户的权限，跳转到不同的页面
        const { role } = data.user;
        handleLocation(role);
    }

    // 根据用户权限，决定跳转的地址
    const handleLocation = (role) => {
        console.log('role: ', role);
        let locationUrl = role === 0 ? '/user/dashboard' : '/admin/dashboard';
        console.log('locationUrl: ', locationUrl);
        history.push(locationUrl);
    }

    return (
        <Layout title="登录" subTitle="">
            <Form {...layout} onFinish={handleLogin}>
                <Form.Item label="邮箱" name="email">
                    <Input type="email"></Input>
                </Form.Item>
                <Form.Item label="密码" name="password">
                    <Input.Password></Input.Password>
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
