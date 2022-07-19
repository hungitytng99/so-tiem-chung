import React from 'react';
import { Typography, Row, Col, Divider } from 'antd';

const { Text } = Typography;

function News({ title, description, author, time, imgSrc }) {
    return (
        <div>
            <Row gutter={40} style={{ marginBottom: '20px' }}>
                <Col span={16}>
                    <Text style={{ fontSize: '16px', fontWeight: '600' }}>{title}</Text>
                    <br></br>
                    <Text style={{ fontSize: '13px' }}>{description}</Text>
                    <div
                        style={{
                            fontSize: '11px',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text style={{ color: '#D55DB3' }}>{author}</Text>
                        <Text style={{ color: 'grey' }}>{time}</Text>
                    </div>
                </Col>
                <Col span={8}>
                    <img
                        src={imgSrc}
                        alt={'img'}
                        style={{
                            width: '120px',
                            height: '120px',
                            objectFit: 'cover',
                            borderRadius: '3px',
                        }}
                    ></img>
                </Col>
            </Row>
        </div>
    );
}

export default News;
