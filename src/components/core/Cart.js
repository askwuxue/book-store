import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { Row, Col, Typography, Form, Button, Input } from 'antd'
import { getCart } from '../../utils/cart'
import CartItem from './CartItem'
import axios from 'axios'
import { API } from '../../config'
import isLogin from '../../utils/auth'

const { Title } = Typography

export default function Cart() {
    const [cart, setCart] = useState([])
    useEffect(() => {
        setCart(getCart())
    }, [])

    // 地址状态
    const [address, setAddress] = useState("")

    // 商品总价
    const [totalPrice, setTotalPrice] = useState(0);

    // 计算商品总价
    useEffect(() => {
        let totalPrice = cart.reduce((currentValue, nextValue) => {
            return currentValue += nextValue.count * nextValue.price;
        }, 0);
        setTotalPrice(totalPrice.toFixed(2));
    }, [cart])

    // 购物车商品详情
    const showProduct = (cart) => {
        return (
            <table style={{ width: "100%" }}>
                <thead className="ant-table-thead">
                    <tr>
                        <th className="ant-table-cell">商品封面</th>
                        <th className="ant-table-cell">商品名称</th>
                        <th className="ant-table-cell">商品价格</th>
                        <th className="ant-table-cell">商品分类</th>
                        <th className="ant-table-cell">商品数量</th>
                        <th className="ant-table-cell">操作</th>
                    </tr>
                </thead>
                {/* 商品列表tbody */}
                {
                    cart.length > 0 && cart.map(item => <CartItem product={item} key={item._id} setCart={setCart}></CartItem>)
                }
            </table>
        )
    }

    // 支付
    const handlePay = () => {
        axios.post(`${API}/alipay`, {
            "totalAmount": totalPrice,
            "subject": "订单标题",
            "body": "订单描述",
            "products": cart.map(item => ({
                product: item._id,
                count: item.count
            })),
            "address": address,
            "userId": isLogin().user._id
        }).then(response => {
            window.location.href = response.data.result
        })
    }

    return (
        <Layout title="购物车" subTitle="快付款把我带走吧">
            <Row gutter={16}>
                <Col span="18">
                    {
                        showProduct(cart)
                    }
                </Col>
                <Col span="6">
                    <Title level={4}>订单详情</Title>
                    <Form.Item label="收货地址">
                        <Input value={address}
                            onChange={event => setAddress(event.target.value)}
                            placeholder="请输入收货地址"
                        />
                    </Form.Item>
                    <Title level={5}>Price: {totalPrice}</Title>
                    <Button type="primary" onClick={handlePay}>提交订单</Button>
                </Col>
            </Row>
        </Layout>
    )
}
