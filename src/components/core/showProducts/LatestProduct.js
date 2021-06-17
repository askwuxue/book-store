import React from 'react'
import { Divider, Row, Col, Typography } from 'antd';
import ProductItem from '../ProductItem';
import { useSelector } from 'react-redux';
const { Title } = Typography;

export default function LatestProduct() {
    // const product = useSelector(state => state.product)
    // const { sold, createdAt } = useSelector(state => state.product)
    const { sold } = useSelector(state => state.product)
    // console.log('createdAt: ', createdAt);
    // console.log('sold: ', sold);
    return (
        <>
            <Divider />
            <Title level={3}>最新上架</Title>
            <Row>
                {
                    sold.map(item => (
                        <Col span={6} key={item._id}>
                            <ProductItem></ProductItem>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}
