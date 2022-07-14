import React, { useEffect } from 'react';
import { Col, Row } from 'antd';

import './Style.sass';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import News from './News';
import { GET_CHILDREN_BY_PARENT_ID } from './redux/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { durationInMonths } from '@progress/kendo-date-math';

const cx = classNames.bind(styles);

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

function index(props) {
    const dispatch = useDispatch();
    const listChildren = useSelector((state) => state.homePage?.listChildren);
    const profile = useSelector((state) => state.user?.profile?.id);

    useEffect(() => {
        dispatch(GET_CHILDREN_BY_PARENT_ID({ parentId: profile }));
    }, []);

    return (
        <Row style={{ height: '100%' }}>
            <Col span={18}>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Thành viên</div>
                <Row gutter={14}>
                    {(listChildren?.data ?? []).map((children, index) => {
                        return (
                            <Col xs={6}>
                                <div className={cx('image-box')}>
                                    <Link to={`/detail-child/${children.id}`}>
                                        <img
                                            className={cx('image')}
                                            src="https://picsum.photos/300/400"
                                        />
                                    </Link>
                                </div>
                                <div className={cx('card-content')}>
                                    <h3>{children.name}</h3>
                                </div>
                                <div className={cx('card-content')}>
                                    <h4>
                                        {durationInMonths(new Date(children.birth), new Date()) + 1}
                                        &nbsp;tháng
                                    </h4>
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
