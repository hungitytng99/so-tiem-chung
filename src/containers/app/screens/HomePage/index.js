import React from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import './Style.sass';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function index(props) {
    console.log(styles);
    return (
        <Row style={{ height: '100%' }}>
            <Col span={18}>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Thành viên</div>
                <Row gutter={14}>
                    <Col xs={6}>
                        <div className={cx('image-box')}>
                            <Link to="/detail-child">
                                <img
                                    className={cx('image')}
                                    src="https://cf.shopee.vn/file/88a44e840248a2ae2695d4d79548cfa1"
                                />
                            </Link>
                        </div>
                        <div className={cx('card-content')}>
                            <h3>Nguyễn Bình Dương</h3>
                        </div>
                        <div className={cx('card-content')}>
                            <h4>47 tháng</h4>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className={cx('image-box')}>
                            <img
                                className={cx('image')}
                                src="https://product.hstatic.net/1000160337/product/aberaltria_pendragon__alter__heroic_spirit_traveling_outfit_ver._1__1__654db0fc8f874a44af260699c62a9495_master.jpg"
                            />
                        </div>
                        <div className={cx('card-content')}>
                            <h3>Nguyễn Ánh Ngọc</h3>
                        </div>
                        <div className={cx('card-content')}>
                            <h4>29 tháng</h4>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className={cx('image-box')}>
                            <img
                                className={cx('image')}
                                src="https://product.hstatic.net/1000160337/product/aberaltria_pendragon__alter__heroic_spirit_traveling_outfit_ver._1__1__654db0fc8f874a44af260699c62a9495_master.jpg"
                            />
                        </div>
                        <div className={cx('card-content')}>
                            <h3>Nguyễn Ánh Ngọc</h3>
                        </div>
                        <div className={cx('card-content')}>
                            <h4>29 tháng</h4>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className={cx('image-box')}>
                            <img
                                className={cx('image')}
                                src="https://product.hstatic.net/1000160337/product/aberaltria_pendragon__alter__heroic_spirit_traveling_outfit_ver._1__1__654db0fc8f874a44af260699c62a9495_master.jpg"
                            />
                        </div>
                        <div className={cx('card-content')}>
                            <h3>Nguyễn Ánh Ngọc</h3>
                        </div>
                        <div className={cx('card-content')}>
                            <h4>29 tháng</h4>
                        </div>
                    </Col>
                </Row>

                {/* </div> */}
            </Col>
            <Col span={6}>
                <div style={{ width: '300px', height: '400px', border: '1px solid #C7C7C7' }}>
                    Kiến thức
                </div>
            </Col>
        </Row>
    );
}

export default index;
