import React from 'react';
import { Col, Row } from 'antd';
import iconCheck from 'assets/images/sotiemchung/265740123_1844370845952552_2242414283725798612_n.png';
import icon1 from 'assets/images/sotiemchung/274655040_1024160701846195_4421914978385017371_n.png';
import News from '../News';
const InjectionHistory = () => {
    const historyI = [
        {
            time: 'Sơ sinh',
            items: [
                {
                    name: 'Viêm gan B',
                    description: 'Viêm gan B',
                },
                {
                    name: 'BCG',
                    description: 'Lao',
                },
            ],
        },
        {
            time: '2 Tháng',
            items: [
                {
                    name: 'OPV',
                    description: 'Bại liệt',
                },
                {
                    name: 'DPT-VGB-Hib',
                    description: 'Bạch hầu,Ho gà, Viêm gan B, Uốn ván, Hib',
                },
            ],
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
    console.log('history: ', historyI);
    return (
        <Row gutter={14} style={{ height: '100%' }}>
            <Col
                span={18}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#F2F5F5',
                }}
            >
                <div style={{ width: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', fontSize: '25px', fontWeight: '600' }}>
                        Lịch sử tiêm
                    </div>
                    {/* -------------------------- */}
                    {historyI.map((child, index) => {
                        return (
                            <>
                                <div
                                    style={{
                                        fontSize: '20px',
                                        padding: '20px 0',
                                        fontWeight: 'bold',
                                        color: '#9AA1A1',
                                    }}
                                >
                                    {child.time}
                                </div>
                                <Row style={{ justifyContent: 'space-around' }}>
                                    {child.items.map((item, index) => {
                                        return (
                                            <Col span={8}>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        backgroundColor: '#E5E5E5',
                                                        borderRadius: '5px',
                                                        borderLeft: '5px solid #32CD32',
                                                    }}
                                                >
                                                    <img
                                                        src={iconCheck}
                                                        style={{
                                                            height: '15px',
                                                            padding: '0 15px 0 5px',
                                                        }}
                                                    ></img>
                                                    <div>
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                            }}
                                                        >
                                                            <strong style={{ fontSize: '16px' }}>
                                                                {item.name} &nbsp;
                                                            </strong>
                                                            <img
                                                                src={icon1}
                                                                style={{ height: '15px' }}
                                                            ></img>
                                                        </div>

                                                        <div>{item.description}</div>
                                                    </div>
                                                </div>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </>
                        );
                    })}

                    {/* --------------------------------------------- */}
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
export default InjectionHistory;
