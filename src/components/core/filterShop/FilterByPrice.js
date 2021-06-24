import React from 'react';
import { List, Typography, Radio } from 'antd';
import { price } from '../../../utils/price';

const { Title } = Typography;

export default function FilterByPrice({ handleFilters }) {
    // 获取用户输入的数据
    const onChange = e => handleFilters(e.target.value);
    return (
        <>
            <Radio.Group onChange={onChange}>
                <Title level={5}>按照分类筛选</Title>
                <List
                    dataSource={price}
                    renderItem={item => (
                        <List.Item>
                            <Radio value={item.price}>
                                {item.name}
                            </Radio>
                        </List.Item>
                    )}
                />
            </Radio.Group>
        </>
    )
}
