import React, { useEffect, useState } from 'react'
import Layout from '../core/Layout'
import { Form, Upload, Button, Input, Select, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { API } from '../../config';
import isLogin from '../../utils/auth';
import { useHistory } from 'react-router-dom';

const { Option } = Select;

export default function AddProduct() {

    // 图片信息
    const [file, setFile] = useState();

    // 分类信息
    const [categories, setCategories] = useState([]);

    // 创建form实例
    const [form] = Form.useForm();

    // 使用useHistory进行重定向
    const history = useHistory();

    // 获取分类数据，展示分类
    useEffect(() => {
        const getCategories = async () => {
            let { data: categories } = await axios.get(`${API}/categories`);
            setCategories(categories);
        };
        getCategories();
    }, [])

    // 文件上传之前回调，处理默认行为，保存file到state中
    const beforeUpload = (file) => {
        setFile(file);
        return false;
    }

    // 发送添加商品请求
    const addProduct = (formData) => {
        const { user: { _id }, token } = isLogin();
        // console.log('token: ', token);
        // console.log('_id: ', _id);
        axios.post(`${API}/product/create/${_id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            // 发送请求成功
            message.success('添加商品信息成功');
            // 充值表单
            form.resetFields();
            // 跳转
            history.push('/admin/dashboard');
            // console.log('response: ', response);
        }).catch(err => {
            message.error('添加商品失败');
            // console.log('err: ', err);
        })
    }

    // 提交表单
    const handleFinish = value => {
        // 创建form对象
        const formData = new FormData();
        const form = Object.entries(value);
        for (let i = 0; i < form.length; i++) {
            formData.append(form[i][0], form[i][1]);
        }
        // 添加file到formData对象
        formData.append('photo', file);
        // 发送添加商品请求请求
        addProduct(formData);
    }

    return (
        <Layout title="添加商品">
            <Form onFinish={handleFinish} form={form} initialValues={{ category: "-1", shipping: "-1" }}>
                <Form.Item>
                    <Upload beforeUpload={beforeUpload}>
                        <Button icon={<UploadOutlined />}>上传图片</Button>
                    </Upload>
                </Form.Item>
                <Form.Item label="商品名称" name="name">
                    <Input></Input>
                </Form.Item>
                <Form.Item label="商品描述" name="description">
                    <Input></Input>
                </Form.Item>
                <Form.Item label="商品价格" name="price">
                    <Input type="number"></Input>
                </Form.Item>
                <Form.Item label="商品分类" name="category">
                    <Select>
                        <Option value="-1">请选择分类</Option>
                        {
                            categories.map(({ _id, name }) => {
                                return <Option value={_id} key={_id}>{name}</Option>
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item label="商品数量" name="quantity">
                    <Input type="number"></Input>
                </Form.Item>
                <Form.Item label="是否包邮" name="shipping">
                    <Select>
                        <Option value="-1">请选择是否包邮</Option>
                        <Option value="1">是</Option>
                        <Option value="0">否</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">确认添加</Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}
