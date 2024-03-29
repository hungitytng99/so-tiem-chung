import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import iconMale from 'assets/images/sotiemchung/292405212_593354112428688_3230046090394934406_n.png';
import iconFemale from 'assets/images/sotiemchung/250796959_438751234280879_3710454219591718876_n.png';
import iconHistory from 'assets/images/sotiemchung/290821183_438571107896215_6949142220786622021_n.png';
import iconDiagram from 'assets/images/sotiemchung/264234976_752854762737773_7097975190760909866_n.png';
import iconNutrition from 'assets/images/sotiemchung/273058511_326665202806471_8882966341918769407_n.png';
import { SolutionOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import News from '../News';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CHILDREN_BY_ID } from '../redux/action';
import Moment from 'react-moment';
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
// Đổi tên đi nhé. CHữ D viết hoa
const detailUser = ({ match }) => {
    console.log(match);
    const dispatch = useDispatch();
    const children = useSelector((state) => state.homePage?.children);
    useEffect(() => {
        dispatch(GET_CHILDREN_BY_ID({ id: match.params?.id }));
    }, [match.params?.id]);
    return (
        <Row gutter={14} style={{ height: '100%' }}>
            <Col
                span={24}
                style={{
                    padding: '10px 200px',
                    marginBottom: '300px',
                }}
                className="flex-center"
            >
                <div style={{ width: '500px' }}>
                    <Row>
                        <Col span={6}>
                            <img
                                src={children?.data?.gender === 'female' ? iconFemale : iconMale}
                                style={{ width: '100px' }}
                            ></img>
                        </Col>

                        <Col>
                            <h2 style={{ fontWeight: 'bold' }}>{children?.data?.name}</h2>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <SolutionOutlined />
                                <div style={{ paddingLeft: '10px' }}>
                                    <Moment format="DD/MM/YYYY">{children?.data?.birth}</Moment>
                                </div>
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
                            paddingTop: '45px',
                            cursor: 'pointer',
                        }}
                    >
                        <Link to={`/injection-history/${children?.data?.id}`}>
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
                            paddingTop: '15px',
                            cursor: 'pointer',
                        }}
                    >
                        <Link to={`/vaccination-regimen/${match.params?.id}`}>
                            <Row
                                style={{
                                    borderRadius: '10px',
                                    backgroundColor: '#E5E5E5',
                                    alignItems: 'center',
                                }}
                            >
                                <div style={{ padding: '5px 20px' }}>
                                    <img src={iconDiagram} style={{ width: '60px' }}></img>
                                </div>

                                <div
                                    style={{
                                        paddingLeft: '20px',
                                        color: 'black',
                                    }}
                                >
                                    Phác đồ tiêm chủng
                                </div>
                            </Row>
                        </Link>
                    </div>
                </div>
            </Col>
        </Row>
    );
};
export default detailUser;
