import React from 'react';
import { Col, Row } from 'antd';
import icon from 'assets/images/sotiemchung/250796959_438751234280879_3710454219591718876_n.png';
import iconHistory from 'assets/images/sotiemchung/290821183_438571107896215_6949142220786622021_n.png';
import iconDiagram from 'assets/images/sotiemchung/264234976_752854762737773_7097975190760909866_n.png';
import iconNutrition from 'assets/images/sotiemchung/273058511_326665202806471_8882966341918769407_n.png';
import { SolutionOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import News from '../News';
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
const detailUser = () => {
    return (
        <Row gutter={14} style={{ height: '100%' }}>
            <Col
                span={18}
                style={{
                    padding: '10px 200px',
                }}
            >
                <div style={{ width: '500px' }}>
                    <Row>
                        <Col span={6}>
                            <img src={icon} style={{ width: '100px' }}></img>
                        </Col>

                        <Col>
                            <h2 style={{ fontWeight: 'bold' }}>Nguyễn Ngọc Ánh</h2>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <SolutionOutlined />
                                <div style={{ paddingLeft: '10px' }}>13/12/2017</div>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '10px 0',
                                }}
                            >
                                <HomeOutlined />
                                <div style={{ paddingLeft: '10px' }}>
                                    Phong Khê, Thành Phố Bắc Ninh, Bắc Ninh
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div
                        style={{
                            padding: '5px 0',
                            cursor: 'pointer',
                        }}
                    >
                        <Link to="/injection-history">
                            <Row
                                style={{
                                    alignItems: 'center',
                                    borderRadius: '10px',
                                    backgroundColor: '#E5E5E5',
                                    color: 'black',
                                }}
                            >
                                <div style={{ padding: '5px 20px' }}>
                                    <img src={iconHistory} style={{ width: '60px' }}></img>
                                </div>
                                <div style={{ paddingLeft: '20px' }}>Lịch sử tiêm</div>
                            </Row>
                        </Link>
                    </div>
                    <div
                        style={{
                            padding: '5px 0',
                            cursor: 'pointer',
                        }}
                    >
                        <Row
                            style={{
                                alignItems: 'center',
                                borderRadius: '10px',
                                backgroundColor: '#E5E5E5',
                            }}
                        >
                            <div style={{ padding: '5px 20px' }}>
                                <img src={iconDiagram} style={{ width: '60px' }}></img>
                            </div>

                            <div style={{ paddingLeft: '20px' }}>Phác đồ tiêm chủng</div>
                        </Row>
                    </div>
                    <div
                        style={{
                            padding: '5px 0',
                            cursor: 'pointer',
                        }}
                    >
                        <Row
                            style={{
                                alignItems: 'center',
                                borderRadius: '10px',
                                backgroundColor: '#E5E5E5',
                            }}
                        >
                            <div style={{ padding: '5px 20px' }}>
                                <img src={iconNutrition} style={{ width: '60px' }}></img>
                            </div>
                            <div style={{ paddingLeft: '20px' }}>Dinh dưỡng</div>
                        </Row>
                    </div>
                </div>
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
};
export default detailUser;
