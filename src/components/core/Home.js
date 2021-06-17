import React from 'react'
// import { useSelector } from 'react-redux';
import Layout from './Layout'
import SearchBar from './SearchBar';
import ProductItem from './ProductItem'
import LatestProduct from './showProducts/LatestProduct';
import MostPopular from './showProducts/MostPopular';
import { Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProduct } from '../../store/actions/products';

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        // TODO 根据排序规则，获得不同的数据集合
        dispatch(getProduct({ sortBy: 'sold', order: 'asc', limit: 5 }));
        dispatch(getProduct({ sortBy: 'createdAt', order: 'asc', limit: 1 }));
    }, [dispatch])

    // TODO useSelector
    return (
        <Layout title="精华书城" subTitle="好书尽在精华书城">
            <SearchBar></SearchBar>
            <Divider />
            <ProductItem></ProductItem>
            <LatestProduct></LatestProduct>
            <MostPopular></MostPopular>
        </Layout >
    )
}
