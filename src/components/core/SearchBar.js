import React from 'react'
import { Form, Select, Input, Button } from 'antd'
import useGetCategories from '../../utils/useGetCategories';

const { Option } = Select;

export default function SearchBar() {

    const categories = useGetCategories();

    return (
        <>
            <Form layout="inline" initialValues={{ category: '-1' }}>
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
        </>
    )
}
