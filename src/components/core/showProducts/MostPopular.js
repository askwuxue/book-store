import React from 'react'
import { Divider, Row, Col, Typography } from 'antd';
import ProductItem from '../ProductItem';
const { Title } = Typography;

export default function MostPopular() {
    return (
        <>
            <Divider />
            <Title level={3}>最受欢迎</Title>
            <Row>
                <Col span={6}>
                    <ProductItem></ProductItem>
                </Col>
                <Col span={6}>
                    <ProductItem></ProductItem>
                </Col>
                <Col span={6}>
                    <ProductItem></ProductItem>
                </Col>
                <Col span={6}>
                    <ProductItem></ProductItem>
                </Col>
            </Row>
        </>
    )
}
