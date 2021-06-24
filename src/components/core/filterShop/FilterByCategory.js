import React from 'react'
import useGetCategories from '../../../utils/useGetCategories'
import { List, Typography, Checkbox } from 'antd';

const { Title } = Typography;

export default function FilterByCategory({ handleFilters }) {
    const categories = useGetCategories();
    // 获取CheckBox选择的值
    const onChange = checkedValue => handleFilters(checkedValue);
    return (
        <>
            <Title level={5}>按照分类筛选</Title>
            <Checkbox.Group onChange={onChange}>
                <List
                    dataSource={categories}
                    renderItem={item => (
                        <List.Item>
                            <Checkbox value={item._id}>
                                {item.name}
                            </Checkbox>
                        </List.Item>
                    )}
                />
            </Checkbox.Group>
        </>
    )
}
