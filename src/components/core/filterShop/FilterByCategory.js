import React from 'react'
import useGetCategories from '../../../utils/useGetCategories'
import { List, Typography, Checkbox } from 'antd';

const { Title } = Typography;

export default function FilterByCategory() {
    const categories = useGetCategories();
    return (
        <>
            <Title level={5}>按照分类筛选</Title>
            <List
                dataSource={categories}
                renderItem={item => (
                    <List.Item>
                        <Checkbox>
                            {item.name}
                        </Checkbox>
                    </List.Item>
                )}
            />
        </>
    )
}
