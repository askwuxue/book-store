import React from 'react'
import { Divider, Row, Col, Typography } from 'antd';
import ProductItem from '../ProductItem';
const { Title } = Typography;

export default function LatestProduct() {
    return (
        <>
            <Divider />
            <Title level={3}>最新上架</Title>
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
