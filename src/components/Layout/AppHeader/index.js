import { Avatar, Dropdown, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { getNavItem } from 'components/Layout/AppLayout/AppLayout';
import { LogoutOutlined, BellFilled, UserOutlined, CaretDownOutlined } from '@ant-design/icons';
import { TOKEN_KEY } from 'app-configs';
import { useSelector } from 'react-redux';
import './Header.css';
import { Link } from 'react-router-dom';
const userDropdownItems = [getNavItem('Đăng xuất', '/auth/logout', <LogoutOutlined />, null)];

const onClickUserAvatar = (item) => {
    if (item?.key == '/auth/logout') {
        handleLogout();
    }
};

function handleLogout() {
    localStorage.removeItem(TOKEN_KEY);
    window.location.reload(false);
}

export default function (props) {
    const userDetail = useSelector((state) => state?.user?.profile);

    return (
        <Header
            style={{
                padding: '0px 20px',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #C8C8C8',
            }}
        >
            <div className="flex-center" style={{}}>
                <div class="topnav">
                    <Link to="/">
                        <strong>
                            <div style={{ fontSize: '20px', color: '#1558BE' }}>Sổ tiêm chủng</div>
                        </strong>
                    </Link>
                    <Link to="/injection-schedule">LỊCH TIÊM</Link>
                    <Link to="/knowledge">KIẾN THỨC</Link>
                    <Link to="/service">DỊCH VỤ</Link>
                    <Link to="/about">Câu hỏi nổi bật</Link>
                </div>
            </div>

            <div
                style={{
                    marginRight: '20px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        marginRight: '10px',
                        fontWeight: '550',
                        userSelect: 'none',
                        width: '100px',
                        justifyContent: 'space-around',
                    }}
                >
                    {userDetail?.name}
                </div>

                <BellFilled style={{ fontSize: '32px', color: 'blue', padding: '0 5px' }} />
                <Avatar
                    size={32}
                    style={{
                        backgroundColor: 'blue',
                        padding: '0 5px',
                    }}
                >
                    <UserOutlined />
                </Avatar>

                <div style={{ padding: '0 5px ' }}>Trung Hậu</div>
                <Dropdown
                    overlay={<Menu items={userDropdownItems} onClick={onClickUserAvatar} />}
                    placement="bottomRight"
                    trigger={['click']}
                    arrow={{ pointAtCenter: true }}
                    className="hover-pointer"
                >
                    <CaretDownOutlined />
                </Dropdown>
            </div>
        </Header>
    );
}
