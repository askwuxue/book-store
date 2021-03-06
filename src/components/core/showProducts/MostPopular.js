import React from 'react'
import { Divider, Row, Col, Typography } from 'antd';
import ProductItem from '../ProductItem';
import { useSelector } from 'react-redux';

const { Title } = Typography;

export default function MostPopular(props) {
    const { createdAt } = useSelector(state => state.products);
    return (
        <>
            <Divider />
            <Title level={3}>最受欢迎</Title>
            <Row>
                {
                    createdAt.map(item => (
                        <Col span={6} key={item._id}>
                            <ProductItem product={item}></ProductItem>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}
