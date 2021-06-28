import React from 'react';
import { Row, Col, Card, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import { API } from '../../../src/config';
import { addCart } from '../../utils/cart';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
const { Title, Paragraph } = Typography;

export default function ProductItem({ product, showView = true, showCar = true }) {
    let { category: { name: categoryName }, name, description, price, quantity, createdAt, _id } = product;
    const actionsArray = [];
    const dispatch = useDispatch();
    // 添加到购物车
    const addToProduct = () => {
        addCart(product, () => {
            // 调用回调函数，重定向
            dispatch(push('/cart'))
        });
    }
    // Card 的actions接受一个数组，展示底部的显示组件
    // 查看详情
    if (showView) {
        actionsArray.push(<Button type="link"><Link to={`/product/${_id}`}>查看详情</Link></Button>)
    }
    // 加入购物车
    if (showCar) {
        actionsArray.push(<Button type="link" onClick={addToProduct}>加入购物车</Button>)
    }
    return (
        <>
            <Card
                style={{ width: 240 }}
                cover={<img alt="example" src={`${API}/product/photo/${_id}`} />}
                actions={actionsArray}
            >
                <Title level={5}>{name}</Title>
                <Paragraph ellipsis={{ rows: 2 }}>{description}</Paragraph>
                <Row>
                    <Col span={12}>价格:{price}</Col>
                    <Col span={12}>销量:{quantity}</Col>
                </Row>
                <Row>
                    <Col span={12}>所属分类:{categoryName}</Col>
                    <Col span={12}>上架时间:{createdAt}</Col>
                </Row>
            </Card>
        </>
    )
}
