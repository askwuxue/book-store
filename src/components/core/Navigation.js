import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import isLogin from '../../utils/auth';

export default function Navigation() {
    const state = useSelector(state => state);
    // 路由名
    const pathName = state.router.location.pathname;

    // 未登录展示组件
    const showAuto = () => {
        return (
            <>
                <Menu.Item key="/login">
                    <Link to="/login">登录</Link>
                </Menu.Item>
                <Menu.Item key="/register">
                    <Link to="/register">注册</Link>
                </Menu.Item>
            </>
        )
    }

    // 已经处于登录状态展示组件
    const showDashboard = (role) => {
        // 显示组件的迁移地址
        let url = role === 0 ? '/user/dashboard' : 'admin/dashboard';
        return (
            <Menu.Item key={url}>
                <Link to={url}>dashboard</Link>
            </Menu.Item>
        )
    }

    // 根据用户的登录状态进行展示
    const handleShow = () => {
        // TODO 这个地方留一个坑，如何根据token来验证用户的身份已经登录状态
        const auth = isLogin();
        if (auth) {
            // 用户的身份
            const role = auth.user.role;
            return showDashboard(role);
        }
        return showAuto();
    }

    return (
        <Menu mode="horizontal" selectedKeys={[pathName]}>
            {/* key属性时 selectedKeys 进行匹配*/}
            <Menu.Item key="/">
                <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="/shop">
                <Link to="/shop">商城</Link>
            </Menu.Item>
            {
                handleShow()
            }
        </Menu>
    )
}
