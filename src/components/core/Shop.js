import React, { useState, useEffect } from 'react'
import Layout from './Layout';
import { Row, Col, Space } from 'antd';
import FilterByCategory from './filterShop/FilterByCategory';
import FilterByPrice from './filterShop/FilterByPrice';
import { useDispatch, useSelector } from 'react-redux';
import { filterProduct } from '../../store/actions/filter';
import ProductItem from '../core/ProductItem';

export default function Shop() {
    // filter数据获取
    const [filters, setFilter] = useState({ category: [], price: [] });
    const dispatch = useDispatch();
    const filterData = useSelector(state => state.filter);
    useEffect(() => {
        dispatch(filterProduct({ skip: 0, filters }))
    }, [filters, dispatch])

    return (
        <Layout title="书城列表" subTitle="挑选一本好书">
            <Row>
                <Col span={4}>
                    <Space direction="vertical" size="Middle">
                        {/* TODO 通过传递给子组件方法，获取子组件传递的数据 */}
                        <FilterByCategory handleFilters={(value) => setFilter({ ...filters, category: value })}>
                        </FilterByCategory>
                        <FilterByPrice handleFilters={(value) => setFilter({ ...filters, price: value })}>
                        </FilterByPrice>
                    </Space>
                </Col>
                <Col span={20}>
                    <Row gutter={[16, 16]}>
                        {
                            filterData.data.map(item =>
                                <Col span="6" key={item._id}>
                                    <ProductItem {...item} />
                                </Col>
                            )
                        }
                    </Row>
                </Col>
            </Row>
        </Layout>
    )
}
