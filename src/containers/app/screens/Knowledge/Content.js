import React from 'react';
import { Typography, Row, Col } from 'antd';

function Content({ age, vaccine1, vaccine2 }) {
    return (
        <>
            <Col
                span={24}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '183px',
                    backgroundColor: '#F4F4F4',
                    borderRadius: '10px',
                    fontSize: '32px',
                    lineHeight: '61px',
                    alignSelf: 'center',
                    marginBottom: '40px',
                }}
            >
                <span
                    style={{
                        height: '33.33%',
                        fontWeight: '700',
                        color: '#FF0000',
                        padding: '0 50px',
                    }}
                >
                    {age}
                </span>
                <span
                    style={{
                        height: '33.33%',
                        fontWeight: '400',
                        color: '#000000',
                        background: 'rgba(217, 217, 217, 0.3)',
                        padding: '0 50px',
                        borderRadius: '10px',
                    }}
                >
                    {vaccine1}
                </span>
                <span
                    style={{
                        height: '33.33%',
                        fontWeight: '400',
                        color: '#000000',
                        padding: '0 50px',
                    }}
                >
                    {vaccine2}
                </span>
            </Col>
        </>
    );
}

export default Content;
