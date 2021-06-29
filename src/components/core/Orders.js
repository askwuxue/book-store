import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { API } from '../../config';
import Layout from './Layout';
import isLogin from '../../utils/auth';
import dateFormat from 'dateformat';
import { Divider } from 'antd';

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const { user, token } = isLogin();

    // 挂载完成请求订单信息
    useEffect(() => {
        async function loadOrders() {
            let response = await axios.get(`${API}/order/list/${user._id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setOrders(response.data);
        }
        loadOrders()
    }, [user._id, token])

    // 获取当前的订单数量展示
    const handleTotalOrder = () => {
        return orders.length > 0 ? `您的订单共: ${orders.length}件` : '您当前还没有订单';
    };

    return (
        <Layout title="订单列表" subTitle={handleTotalOrder()}>
            {
                orders.map(order => (
                    <React.Fragment key={order._id}>
                        <table style={{ width: "100%" }}>
                            <thead className="ant-table-thead">
                                <tr>
                                    <th className="ant-table-cell">订单状态</th>
                                    <th className="ant-table-cell">订单号</th>
                                    <th className="ant-table-cell">总价</th>
                                    <th className="ant-table-cell">创建时间</th>
                                    <th className="ant-table-cell">邮寄地址</th>
                                    <th className="ant-table-cell">客户姓名</th>
                                </tr>
                            </thead>
                            <tbody className="ant-table-tbody">
                                <tr className="ant-table-row">
                                    <td className="ant-table-cell">{order.status}</td>
                                    <td className="ant-table-cell">{order.trade_no}</td>
                                    <td className="ant-table-cell">{order.amount}</td>
                                    <td className="ant-table-cell">{dateFormat(order.createdAt, "yyyy-mm-dd")}</td>
                                    <td className="ant-table-cell">{order.address}</td>
                                    <td className="ant-table-cell">{order.name}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table style={{ width: "100%" }}>
                            <thead className="ant-table-thead">
                                <tr>
                                    <th className="ant-table-cell">商品名称</th>
                                    <th className="ant-table-cell">商品价格</th>
                                    <th className="ant-table-cell">商品数量</th>
                                    <th className="ant-table-cell">商品ID</th>
                                </tr>
                            </thead>
                            <tbody className="ant-table-tbody">
                                {
                                    order.products.map(item => (
                                        <tr className="ant-table-row" key={item._id}>
                                            <td className="ant-table-cell">{item.product.name}</td>
                                            <td className="ant-table-cell">{item.product.price}</td>
                                            <td className="ant-table-cell">{item.count}</td>
                                            <td className="ant-table-cell">{item._id}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <Divider />
                    </React.Fragment>
                ))
            }
            {/* <pre>
                {
                    JSON.stringify(orders, null, 2)
                }
            </pre> */}
        </Layout>
    )
}
