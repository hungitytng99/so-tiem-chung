import React, { useEffect, useState } from 'react';
import { Avatar, Dropdown, Image, Layout, Menu } from 'antd';

import './AppLayout.sass';
import 'antd/dist/antd.css';

import { useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { SIDER_COLLAPSE } from 'app-configs';
import AppHeader from '../AppHeader';
import Footer from '../AppFooter';
const { Header, Sider, Content } = Layout;

export function getNavItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

function AppLayout({ children, match }) {
    const [collapsed, setCollapsed] = useState(localStorage.getItem(SIDER_COLLAPSE) ?? false);
    const history = useHistory();
    const currentRouter = useSelector((state) => state.router.location);
    const [selectedSider, setSelectedSider] = useState(getSelectedNav());

    function getSelectedNav() {
        if (currentRouter?.pathname.includes('/config/sign-ceft/')) {
            return '/config/select-ceft';
        }
        return currentRouter?.pathname;
    }

    useEffect(() => {
        console.log('selectedSider: ', selectedSider);
    }, [selectedSider]);

    return (
        <>
            <AppHeader />
            <Content
                style={{
                    margin: '24px 16px',
                    padding: 20,
                    height: 'calc( 100vh - 152px )',
                }}
            >
                {children}
            </Content>
            <Footer />
        </>
    );
}

export default AppLayout;
