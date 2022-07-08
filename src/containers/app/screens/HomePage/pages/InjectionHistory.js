import React from 'react';
import { Col, Row } from 'antd';
import iconCheck from 'assets/images/sotiemchung/265740123_1844370845952552_2242414283725798612_n.png';
import icon1 from 'assets/images/sotiemchung/274655040_1024160701846195_4421914978385017371_n.png';
const InjectionHistory = () => {
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

                    <div
                        style={{
                            fontSize: '20px',
                            padding: '20px 0',
                            fontWeight: 'bold',
                            color: '#9AA1A1',
                        }}
                    >
                        Sơ sinh
                    </div>
                    <Row style={{ justifyContent: 'space-between' }}>
                        <Col span={8}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#E5E5E5',
                                    borderRadius: '5px',
                                    borderLeft: '5px solid #32CD32',
                                    width: '350px',
                                }}
                            >
                                <img
                                    src={iconCheck}
                                    style={{ height: '15px', padding: '0 15px 0 5px' }}
                                ></img>
                                <div>
                                    <div>
                                        <strong style={{ fontSize: '16px' }}> Viêm gan B </strong>
                                        <img src={icon1} style={{ height: '15px' }}></img>
                                    </div>

                                    <div>Viêm gan B</div>
                                </div>
                            </div>
                        </Col>

                        <Col span={8}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#E5E5E5',
                                    borderRadius: '5px',
                                    borderLeft: '5px solid #32CD32',
                                    width: '350px',
                                }}
                            >
                                <img
                                    src={iconCheck}
                                    style={{ height: '15px', padding: '0 15px 0 5px' }}
                                ></img>
                                <div>
                                    <div>
                                        <strong style={{ fontSize: '16px' }}> BCG </strong>
                                        <img src={icon1} style={{ height: '15px' }}></img>
                                    </div>

                                    <div>Lao</div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <div
                        style={{
                            fontSize: '20px',
                            padding: '20px 0',
                            fontWeight: 'bold',
                            color: '#9AA1A1',
                        }}
                    >
                        2 Tháng
                    </div>
                    <Row style={{ justifyContent: 'space-between' }}>
                        <Col span={8}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#E5E5E5',
                                    borderRadius: '5px',
                                    borderLeft: '5px solid #32CD32',
                                    width: '350px',
                                }}
                            >
                                <img
                                    src={iconCheck}
                                    style={{ height: '15px', padding: '0 15px 0 5px' }}
                                ></img>
                                <div>
                                    <div>
                                        <strong style={{ fontSize: '16px' }}> OPV </strong>
                                        <img src={icon1} style={{ height: '15px' }}></img>
                                    </div>

                                    <div>Bại liệt</div>
                                </div>
                            </div>
                        </Col>

                        <Col span={8}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#E5E5E5',
                                    borderRadius: '5px',
                                    borderLeft: '5px solid #32CD32',
                                    width: '350px',
                                }}
                            >
                                <img
                                    src={iconCheck}
                                    style={{ height: '15px', padding: '0 15px 0 5px' }}
                                ></img>
                                <div>
                                    <div>
                                        <strong style={{ fontSize: '16px' }}> DPT-VGB-Hib </strong>
                                        <img src={icon1} style={{ height: '15px' }}></img>
                                    </div>

                                    <div>Bạch hầu, Ho gà, Viêm Gan B, Uốn ván, Hib</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>

            <Col span={6}>
                <div style={{ height: '100%', border: '1px solid' }}>kien thuc</div>
            </Col>
        </Row>
    );
};
export default InjectionHistory;
