import React from 'react'
import { Divider, Row, Col, Typography } from 'antd';
import ProductItem from '../ProductItem';
import { useSelector } from 'react-redux';
const { Title } = Typography;

export default function LatestProduct() {
    const { sold } = useSelector(state => state.products)
    return (
        <>
            <Divider />
            <Title level={3}>最新上架</Title>
            <Row>
                {
                    sold.map(item => (
                        <Col span={6} key={item._id}>
                            <ProductItem product={item}></ProductItem>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}
