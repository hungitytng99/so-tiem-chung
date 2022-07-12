import React from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import './Style.sass';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import News from './News';

const cx = classNames.bind(styles);

function index(props) {
    const contents = [
        {
            name: 'Nguyen Binh Duong',
            time: '47 thang',
            imgSrc: 'https://cf.shopee.vn/file/a032f8c9323d9987a546ebd23302d3a7',
        },
        {
            name: 'Nguyen Anh Ngoc',
            time: '14 thang',
            imgSrc: 'https://cf.shopee.vn/file/441ed6fd280a316979764a06d2512a93',
        },
        {
            name: 'Nguyen Van Toan',
            time: '24 thang',
            imgSrc: 'https://cf.shopee.vn/file/101af67ae8e8597ba05c4b9c6a9da02d',
        },
        {
            name: 'Nguyen Binh Duong',
            time: '47 thang',
            imgSrc: 'https://cf.shopee.vn/file/a032f8c9323d9987a546ebd23302d3a7',
        },
        {
            name: 'Nguyen Anh Ngoc',
            time: '14 thang',
            imgSrc: 'https://cf.shopee.vn/file/441ed6fd280a316979764a06d2512a93',
        },
        {
            name: 'Nguyen Van Toan',
            time: '24 thang',
            imgSrc: 'https://cf.shopee.vn/file/101af67ae8e8597ba05c4b9c6a9da02d',
        },
    ];
    const news = [
        {
            title: 'Thông tin báo chí về tình hình triển khai vắc xin CombE Five trong Tiêm chủng mở rộng',
            description:
                'Thông tin báo chí về tình hình triển khai vắc xin CombE Five trong Tiêm chủng mở rộng',
            author: 'tiemchungmorong.com',
            time: 'Cách đây 3 năm',
            imgSrc: 'https://careplusvn.com/files/chich-ngua-HPV-2.jpg',
        },
        {
            title: 'Thông tin báo chí về tình hình triển khai vắc xin CombE Five trong Tiêm chủng mở rộng',
            description:
                'Thông tin báo chí về tình hình triển khai vắc xin CombE Five trong Tiêm chủng mở rộng',
            author: 'tiemchungmorong.com',
            time: 'Cách đây 3 năm',
            imgSrc: 'https://careplusvn.com/files/chich-ngua-HPV-2.jpg',
        },
        {
            title: 'Thông tin báo chí về tình hình triển khai vắc xin CombE Five trong Tiêm chủng mở rộng',
            description:
                'Thông tin báo chí về tình hình triển khai vắc xin CombE Five trong Tiêm chủng mở rộng',
            author: 'tiemchungmorong.com',
            time: 'Cách đây 3 năm',
            imgSrc: 'https://careplusvn.com/files/chich-ngua-HPV-2.jpg',
        },
    ];
    console.log('content:', contents[0].name);
    return (
        <Row gutter={15} style={{ height: '100%' }}>
            <Col span={18}>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Thành viên</div>
                <Row gutter={14}>
                    {contents.map((myContent, index) => {
                        return (
                            <Col xs={6}>
                                <div className={cx('image-box')}>
                                    <Link to="/detail-child">
                                        <img className={cx('image')} src={myContent.imgSrc} />
                                    </Link>
                                </div>
                                <div className={cx('card-content')}>
                                    <h3>{myContent.name}</h3>
                                </div>
                                <div className={cx('card-content')}>
                                    <h4>{myContent.time}</h4>
                                </div>
                            </Col>
                        );
                    })}
                </Row>

                {/* </div> */}
            </Col>
            <Col span={6}>
                <div
                    style={{
                        fontSize: '36px',
                        fontWeight: 700,
                        lineHeight: ' 42.19px ',
                        height: '55px',
                    }}
                >
                    Kiến thức
                </div>
                {news.map((myNew, index) => {
                    return (
                        <News
                            key={index}
                            title={myNew.title}
                            description={myNew.description}
                            author={myNew.author}
                            time={myNew.time}
                            imgSrc={myNew.imgSrc}
                        ></News>
                    );
                })}
            </Col>
        </Row>
    );
}

export default index;
