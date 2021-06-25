import Layout from './Layout'
import React, { useEffect } from 'react'
import { Row, Col } from 'antd'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../store/actions/product'
import ProductItem from './ProductItem'

export default function Product() {
    // url的参数，获取的内容从route定义的内容中取
    const { productId } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.product)

    useEffect(() => {
        dispatch(getProduct({ productId }))
    }, [productId, dispatch])
    return (
        <Layout title="商品详情">
            <Row>
                <Col span="18">
                    {
                        // 数量满足情况下，渲染组件，防止组件的错误
                        Object.keys(product).length > 0 &&
                        <ProductItem product={product} showView={false} showCar={true}></ProductItem>
                    }
                    {/* {JSON.stringify(product)} */}
                </Col>
                <Col span="6">right</Col>
            </Row>
        </Layout>
    )
}
