import React from 'react'
import Layout from '../core/Layout'
import { Menu, Row, Col, Typography, Descriptions } from 'antd';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined, UserAddOutlined, OrderedListOutlined } from '@ant-design/icons'
import isLogin from '../../utils/auth';
const { Title } = Typography;

export default function AdminDashBoard() {

    const handleAdminLinks = () => {
        return (
            <Menu>
                <Menu.Item>
                    <ShoppingCartOutlined />
                    <Link to="/create/category">添加分类</Link>
                </Menu.Item>
                <Menu.Item>
                    <UserAddOutlined />
                    <Link to="/create/product">添加商品</Link>
                </Menu.Item>
                <Menu.Item>
                    <OrderedListOutlined />
                    <Link to="/admin/orders">订单列表</Link>
                </Menu.Item>
            </Menu>
        )
    }

    const handleDescription = () => {
        let { user: { name, email } } = isLogin();

        return (
            <Descriptions title="管理员信息" bordered>
                <Descriptions.Item label="用户名">{name}</Descriptions.Item>
                <Descriptions.Item label="邮箱">{email}</Descriptions.Item>
                <Descriptions.Item label="角色">admin</Descriptions.Item>
            </Descriptions>
        )
    }

    return (
        <Layout title="AdminDashBoard">
            <Row>
                <Col span={4}>
                    <Title level={5}>管理员链接</Title>
                    {handleAdminLinks()}
                </Col>
                <Col span={20}>{handleDescription()}</Col>
            </Row>
        </Layout>
    )
}
