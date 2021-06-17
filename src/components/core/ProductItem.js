import React from 'react';
import { Row, Col, Card, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
const { Title, Paragraph } = Typography;

export default function ProductItem() {
    return (
        <>
            <Card
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                actions={[
                    <Button type="link"><Link to="/">查看详情</Link></Button>,
                    <Button type="link">加入购物车</Button>
                ]}
            >
                <Title level={5}>GUCCI</Title>
                <Paragraph ellipsis={{ rows: 2 }}>古驰是意大利的奢侈时装品牌，由古驰奥·古驰在1921年于佛罗伦斯创办。古驰的产品包括时装、皮具、皮鞋、手表、领带、丝巾、香水、家居用品及宠物用品等</Paragraph>
                <Row>
                    <Col span={12}>价格:</Col>
                    <Col span={12}>销量:</Col>
                </Row>
                <Row>
                    <Col span={12}>所属分类:</Col>
                    <Col span={12}>上架时间:</Col>
                </Row>
            </Card>
        </>
    )
}
