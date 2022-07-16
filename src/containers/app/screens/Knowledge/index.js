import React, { useEffect } from 'react';
import { Col, Row, Image, Typography } from 'antd';
import './Style.sass';
import News from '../InjectionSchedule/News';
import Content from '../Knowledge/Content';
import { useSelector, useDispatch } from 'react-redux';
import { GET_VACCINE_BY_ID } from './redux/action';

const vaccines = [
    {
        age: 'Sơ sinh',
        vaccine1: 'Lao',
        vaccine2: 'Viêm gan B',
    },
    {
        age: '6 tháng tuổi',
        vaccine1: 'Lao',
        vaccine2: 'Bạch hầu, Ho gà, Uốn ván, Bại liệt',
    },
    {
        age: '2 tháng tuổi',
        vaccine1: 'Lao',
        vaccine2: 'Viêm gan C',
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
    const vaccine = useSelector((state) => state.knowledge);
    const profile = useSelector((state) => state.user?.profile?.id);

    useEffect(() => {
        console.log('hi');
        dispatch(GET_VACCINE_BY_ID({ id: profile }));
    }, []);

    console.log('gsgsggsgss', vaccine);

    return (
        <Row>
            <Col span={18}>
                <Typography.Title> Danh mục Vaccine</Typography.Title>
                {vaccines.map((vaccine, index) => {
                    return (
                        <Row style={{ width: '80%' }}>
                            <Content
                                age={vaccine.age}
                                vaccine1={vaccine.vaccine1}
                                vaccine2={vaccine.vaccine2}
                            ></Content>
                        </Row>
                    );
                })}
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
