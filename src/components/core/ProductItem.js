import React from 'react';
import { Row, Col, Card, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import { API } from '../../../src/config';
const { Title, Paragraph } = Typography;

export default function ProductItem(props) {
    let { name, description, price, quantity, createdAt, _id } = props;
    return (
        <>
            <Card
                style={{ width: 240 }}
                cover={<img alt="example" src={`${API}/product/photo/${_id}`} />}
                actions={[
                    <Button type="link"><Link to="/">查看详情</Link></Button>,
                    <Button type="link">加入购物车</Button>
                ]}
            >
                <Title level={5}>{name}</Title>
                <Paragraph ellipsis={{ rows: 2 }}>{description}</Paragraph>
                <Row>
                    <Col span={12}>价格:{price}</Col>
                    <Col span={12}>销量:{quantity}</Col>
                </Row>
                <Row>
                    <Col span={12}>所属分类:{ }</Col>
                    <Col span={12}>上架时间:{createdAt}</Col>
                </Row>
            </Card>
        </>
    )
}
