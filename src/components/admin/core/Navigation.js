import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navigation() {
    const state = useSelector(state => state);
    const pathName = state.router.location.pathname;

    return (
        <Menu mode="horizontal" selectedKeys={[pathName]}>
            {/* key属性时 selectedKeys 进行匹配*/}
            <Menu.Item key="/">
                <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="/shop">
                <Link to="/shop">商城</Link>
            </Menu.Item>
            <Menu.Item key="/login">
                <Link to="/login">登录</Link>
            </Menu.Item>
            <Menu.Item key="/register">
                <Link to="/register">注册</Link>
            </Menu.Item>
        </Menu>
    )
}
