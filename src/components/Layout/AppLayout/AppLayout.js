import React, { useEffect, useState } from 'react';
import { Avatar, Dropdown, Image, Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import './AppLayout.sass';
import 'antd/dist/antd.css';
import { MAIN_COLOR } from 'app-configs';
import logo from 'assets/images/logo.png';
import hustLogo from 'assets/images/header/hust-logo.jpeg';
import hustLogoNgang from 'assets/images/header/logo-hust-ngang.jpg';
import logo_ngang from 'assets/images/logo-ngang.png';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
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
const sliderItems = [
    getNavItem('Tài khoản', 'account', <UserOutlined />, [
        getNavItem('Danh sách tài khoản', '/accounts/list'),
        getNavItem('Thêm tài khoản', '/accounts/add'),
    ]),
    getNavItem('Cấu hình chứng chỉ', '/config/select-ceft', <AppstoreOutlined />, null),
    getNavItem('Cấu hình hợp đồng', '/config/blockchain', <SettingOutlined />, null),
];

function AppLayout({ children, match }) {
    const [collapsed, setCollapsed] = useState(localStorage.getItem(SIDER_COLLAPSE) ?? false);
    const history = useHistory();
    const currentRouter = useSelector((state) => state.router.location);
    const [selectedSider, setSelectedSider] = useState(getSelectedNav());

    function toggleSider() {
        setCollapsed(!collapsed);
        localStorage.setItem(SIDER_COLLAPSE, !collapsed);
    }

    const onClickSliderMenu = (item) => {
        history.push(item.key);
    };

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
        <Layout>
            {/* <Sider
                style={{
                    border: 'none',
                    
                }}
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                    }}
                >
                    <Link
                        to={'/'}
                        style={{ display: 'block', padding: '8px', marginBottom: '6px' }}
                    >
                        <Image
                            className="icon-home-page"
                            width="100%"
                            style={{
                                objectFit: 'contain',
                                maxHeight: '70px',
                            }}
                            src={collapsed ? hustLogo : hustLogoNgang}
                            preview={false}
                        />
                    </Link>
                    <div style={{ marginTop: '10px', flex: '1' }}>
                        <Menu
                            mode="inline"
                            theme="dark"
                            defaultOpenKeys={['account']}
                            selectedKeys={[selectedSider]}
                            items={sliderItems}
                            onClick={onClickSliderMenu}
                        />
                    </div>
                    
                </div>
            </Sider> */}
            <Layout>
                <AppHeader />
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        height: 'calc( 100vh - 152px )',
                    }}
                >
                    {children}
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
}

export default AppLayout;
