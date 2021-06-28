import React, { useState } from 'react'
import { Image, Input, Button } from 'antd'
import { API } from '../../config';
import { deleteProduct, updateCart } from '../../utils/cart';

// 接受父组件的状态设置方法，cart发生变化，父组件也更新cart
export default function CartItem({ product, setCart }) {
    const [count, setCount] = useState(product.count);
    const handleCountChange = e => {
        if (e.target.value <= 0) {
            return;
        }
        // TODO 为什么updateCart 更新时不能使用count，count是异步更新，此时还未更新完成
        setCount(parseInt(e.target.value));
        // 更新购物车信息同步到LocalStorage中,顺便更新父组件cart
        setCart(updateCart(product._id, parseInt(e.target.value)));
    }

    // 删除购物车的某数据
    const handleDelete = productId => {
        setCart(deleteProduct(productId));
    }

    return (
        <tbody className="ant-table-tbody">
            {
                <tr className="ant-table-row" key={product._id}>
                    <td className="ant-table-cell">
                        <Image src={`${API}/product/photo/${product._id}`} width={120}></Image>
                    </td>
                    <td className="ant-table-cell">{product.name}</td>
                    <td className="ant-table-cell">{product.price}</td>
                    <td className="ant-table-cell">{product.category.name}</td>
                    <td className="ant-table-cell">
                        <Input type="number" value={count} onChange={handleCountChange}></Input>
                    </td>
                    <td className="ant-table-cell">
                        {/* TODO onClick如果是一个函数，会直接被调用 */}
                        <Button danger type="primary" onClick={() => { handleDelete(product._id) }}>删除</Button>
                    </td>
                </tr>
            }
        </tbody>
    )
}
