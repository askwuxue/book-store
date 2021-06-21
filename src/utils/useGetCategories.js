import { useState, useEffect } from 'react'
import axios from 'axios'
import { API } from '../../src/config'

export default function useGetCategories() {
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
    return categories;
}
