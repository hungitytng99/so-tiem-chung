import React from 'react';
import { Col, Row, Image, Typography } from 'antd';
import './Style.sass';
import Content from './Content';
import News from './News';

const { Text } = Typography;
function index(props) {
    const patients = [
        {
            name: 'Ngô Bá Khá',
            dayLeft: '23',
            location: 'Thái Bình',
            vaccine: 'Viêm não Nhật Bản',
            date: '26/12/2022',
            time: 'Buổi chiều',
        },
        {
            name: 'Nguyễn Đức Chung',
            dayLeft: '30',
            location: 'Hà Nội',
            vaccine: 'Viêm não Nhật Bản',
            date: '23/1/2022',
            time: 'Buổi sáng',
        },
        {
            name: 'Lê Văn Luyện',
            dayLeft: '50',
            location: 'Hải Dương',
            vaccine: 'Viêm gan B',
            date: '26/5/2022',
            time: 'Buổi sáng',
        },
        {
            name: 'Nguyễn Thanh Long',
            dayLeft: '98',
            location: 'Hà Nội',
            vaccine: 'Viêm gan D',
            date: '26/9/2022',
            time: 'Buổi chiều',
        },
        {
            name: 'Nguyễn Đức Chung',
            dayLeft: '30',
            location: 'Hà Nội',
            vaccine: 'Viêm não Nhật Bản',
            date: '23/1/2022',
            time: 'Buổi sáng',
        },
        {
            name: 'Lê Văn Luyện',
            dayLeft: '50',
            location: 'Hải Dương',
            vaccine: 'Viêm gan B',
            date: '26/5/2022',
            time: 'Buổi sáng',
        },
        {
            name: 'Nguyễn Thanh Long',
            dayLeft: '98',
            location: 'Hà Nội',
            vaccine: 'Viêm gan D',
            date: '26/9/2022',
            time: 'Buổi chiều',
        },
        {
            name: 'Nguyễn Đức Chung',
            dayLeft: '30',
            location: 'Hà Nội',
            vaccine: 'Viêm não Nhật Bản',
            date: '23/1/2022',
            time: 'Buổi sáng',
        },
        {
            name: 'Lê Văn Luyện',
            dayLeft: '50',
            location: 'Hải Dương',
            vaccine: 'Viêm gan B',
            date: '26/5/2022',
            time: 'Buổi sáng',
        },
        {
            name: 'Nguyễn Thanh Long',
            dayLeft: '98',
            location: 'Hà Nội',
            vaccine: 'Viêm gan D',
            date: '26/9/2022',
            time: 'Buổi chiều',
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
    return (
        <Row gutter={60}>
            <Col span={18}>
                <div
                    style={{
                        fontSize: '36px',
                        fontWeight: 700,
                        lineHeight: ' 42.19px ',
                        height: '55px',
                    }}
                >
                    Sắp diễn ra
                </div>
                <Row gutter={[80, 60]}>
                    {patients.map((patient, index) => {
                        return (
                            <Col span={12}>
                                <Content
                                    key={index}
                                    name={patient.name}
                                    dayLeft={patient.dayLeft}
                                    location={patient.location}
                                    vaccine={patient.vaccine}
                                    date={patient.date}
                                    time={patient.time}
                                ></Content>
                            </Col>
                        );
                    })}
                </Row>
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
