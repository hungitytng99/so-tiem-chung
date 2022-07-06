import { Avatar, Dropdown, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { getNavItem } from 'components/Layout/AppLayout/AppLayout';
import { LogoutOutlined, BellOutlined, UserOutlined, CaretDownOutlined } from '@ant-design/icons';
import { TOKEN_KEY } from 'app-configs';
import { useSelector } from 'react-redux';
import './Header.css';
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
            }}
        >
            <div className="flex-center" style={{}}>
                <span>
                    <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#1558BE' }}>
                        Sổ tiêm chủng
                    </div>
                </span>

                <nav style={{ paddingLeft: '15px' }}>
                    <a>LỊCH TIÊM</a>
                    <a>KIẾN THỨC</a>
                    <a>DỊCH VỤ</a>
                    <a>Câu hỏi nổi bật</a>
                </nav>
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

                <BellOutlined style={{ fontSize: '32px' }} />
                <Avatar size={32}>
                    <UserOutlined />
                </Avatar>

                <div>Trung Hậu</div>
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
