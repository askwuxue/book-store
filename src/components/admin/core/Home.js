import React from 'react'
import { useSelector } from 'react-redux';
import Layout from './Layout'

export default function Home() {
    // TODO useSelector
    const state = useSelector(state => state);
    return (
        <Layout>
            Home---state{JSON.stringify(state)}
        </Layout>
    )
}
