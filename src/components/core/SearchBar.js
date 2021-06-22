import React from 'react'
import { Form, Select, Input, Button, Row } from 'antd'
import useGetCategories from '../../utils/useGetCategories';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../store/actions/search';
import { Divider } from 'antd';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const { Option } = Select;

export default function SearchBar() {
    const categories = useGetCategories();
    const dispatch = useDispatch();
    const { results } = useSelector(state => state.search)

    const handleOnFish = value => {
        dispatch(searchProducts(value))
    }

    return (
        <>
            <Form onFinish={handleOnFish} layout="inline" initialValues={{ category: '-1' }}>
                <Form.Item name="category">
                    <Select>
                        <Option value="-1">全部分类</Option>
                        {
                            categories.map(({ _id, name }) => {
                                return <Option value={_id} key={_id}>{name}</Option>
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item name="search">
                    <Input placeholder="请输入搜索关键字"></Input>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">搜索</Button>
                </Form.Item>
            </Form>
            <Divider />
            <Row gutter={[16, 16]}>
                {
                    results.map(item => {
                        // TODO 渲染时分类信息没有渲染
                        return <ProductItem {...item} key={item._id}></ProductItem>
                    })
                }
            </Row>
        </>
    )
}
