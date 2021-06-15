import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout'
import { Form, Input, Button, Checkbox, Spin, Result } from 'antd';
import { Link } from 'react-router-dom';
// import { register } from '../../../store/actions/register';

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
    const dispatch = useDispatch();
    const handleOnFish = value => {
        dispatch({ type: 'REGISTER', payload: value });
    }

    // 结构register状态
    const { loading, loaded, success, message } = useSelector(state => state.register);

    // 加载中
    const showLoading = () => {
        if (loading) {
            return (
                <Spin />
            )
        }
    }

    // 注册成功
    const showSuccess = () => {
        if (loaded && success) {
            return (
                <Result
                    status="success"
                    title="登录成功!"
                    extra={[
                        <Button type="primary" key="console">
                            <Link to="/login">登录</Link>
                        </Button>,
                    ]}
                />
            )
        }
    }

    // 注册失败
    const showFailed = () => {
        if (loaded && !success) {
            return (
                <Result
                    status="error"
                    title="注册失败"
                    subTitle={message}
                    extra={[
                    ]}
                >
                </Result>
            )
        }
    }

    // 注册表单
    const showForm = () => {
        return (
            <Form {...layout} onFinish={handleOnFish} form={form}>
                <Form.Item label="用户名" name="name">
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
        )
    }

    // 获得表单实例
    const [form] = Form.useForm();
    useEffect(() => {
        // 注册成功，重置表单
        if (loaded && success) {
            form.resetFields();
        }
    }, [loaded, success, form])

    // 离开当前页面，重置state状态。为什么不在上面的useEffect函数中清除state。因为依赖项不同，总是会被调用，不止在离开当前页面时被调用
    useEffect(() => {
        return () => {
            console.log('leave2');
            dispatch({ type: 'REGISTERRESET' })
        }
    }, [dispatch])

    return (
        <Layout title="注册" subTitle="">
            {/* loading */}
            {showLoading()}
            {/* 注册成功 */}
            {showSuccess()}
            {/* 注册失败 */}
            {showFailed()}
            {/* 注册表单 */}
            {showForm()}
        </Layout>
    )
}
