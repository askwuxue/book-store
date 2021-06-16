import React, { useState, useEffect } from 'react'
import { Form, Select, Input, Button } from 'antd'
import axios from 'axios'
import { API } from '../../config';

const { Option } = Select;

export default function SearchBar() {

    // TODO 如何将公共的使用的hooks抽离为公共函数
    // 分类信息
    const [categories, setCategories] = useState([]);

    // 获取分类数据，展示分类
    useEffect(() => {
        const getCategories = async () => {
            let { data: categories } = await axios.get(`${API}/categories`);
            setCategories(categories);
        };
        getCategories();
    }, [])
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
