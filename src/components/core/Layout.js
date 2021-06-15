import React from 'react'
import Navigation from './Navigation';
import { PageHeader } from 'antd';

export default function Layout(props) {
    const { title, subTitle } = props;
    return (
        <div>
            {/* 导航 */}
            <Navigation></Navigation>
            {/* 页头 */}
            <PageHeader className="jumbotron" title={title} subTitle={subTitle} />
            <div style={{ width: '80%', margin: '0 auto' }}>
                {props.children}
            </div>
        </div >
    )
}
