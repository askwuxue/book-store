import React from 'react'
// import { useSelector } from 'react-redux';
import Layout from './Layout'
import SearchBar from '../core/SearchBar';

export default function Home() {
    // TODO useSelector
    return (
        <Layout title="精华书城" subTitle="好书尽在精华书城">
            <SearchBar></SearchBar>
        </Layout >
    )
}
