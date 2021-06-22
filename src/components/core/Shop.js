import React from 'react'
import Layout from './Layout';
import { Row, Col, Card, Typography, Button } from 'antd';
import FilterByCategory from './filterShop/FilterByCategory';

export default function Shop() {
    return (
        <Layout title="书城列表" subTitle="挑选一本好书">
            <Row>
                <Col span={4}>
                    <FilterByCategory></FilterByCategory>
                </Col>
                <Col span={4}>right</Col>
            </Row>
        </Layout>
    )
}
