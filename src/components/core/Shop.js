import React, { useState, useEffect } from 'react'
import Layout from './Layout';
import { Row, Col, Space, Button, Empty } from 'antd';
import FilterByCategory from './filterShop/FilterByCategory';
import FilterByPrice from './filterShop/FilterByPrice';
import { useDispatch, useSelector } from 'react-redux';
import { filterProduct } from '../../store/actions/filter';
import ProductItem from '../core/ProductItem';

export default function Shop() {
    // filter数据获取
    const [filters, setFilter] = useState({ category: [], price: [] });
    const dispatch = useDispatch();
    const { data, size } = useSelector(state => state.filter);
    const [skip, setSkip] = useState(0);

    // skip和filter发生变化，重新调用action
    useEffect(() => {
        dispatch(filterProduct({ skip, filters }))
    }, [filters, skip, dispatch])

    // 删选条件发生变化，skip置零
    useEffect(() => {
        setSkip(0);
    }, [filters])

    const loadMore = () => {
        setSkip(skip + 4);
    }

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
                    {/* <Space size="large" direction="vertical"> */}
                    <Row gutter={[16, 16]}>
                        {
                            data.map(item =>
                                <Col span="6" key={item._id}>
                                    <ProductItem product={item} />
                                </Col>
                            )
                        }
                    </Row>
                    <Row>
                        {
                            size >= 4 ? <Button onClick={loadMore}>加载更多</Button> : <Empty></Empty>
                        }
                    </Row>
                    {/* </Space> */}
                </Col>
            </Row>
        </Layout>
    )
}
