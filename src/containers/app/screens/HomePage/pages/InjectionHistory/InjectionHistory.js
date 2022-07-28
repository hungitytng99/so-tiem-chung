import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import iconCheck from 'assets/images/sotiemchung/265740123_1844370845952552_2242414283725798612_n.png';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CHILDREN_INJECT_BY_ID } from '../../redux/action';
import './InjectionHistory.sass';
import Moment from 'react-moment';

const InjectionHistory = ({ match }) => {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const childrenInjection = useSelector((state) => state.homePage?.childrenInjection);
    const [selectedInjection, setSelectedInjection] = useState({});

    const showDetailJnjectionModal = (injection) => {
        console.log('injection: ', injection);
        setIsModalVisible(true);
        setSelectedInjection(injection);
    };

    useEffect(() => {
        dispatch(GET_CHILDREN_INJECT_BY_ID({ id: match.params?.id }));
    }, [match.params?.id]);

    return (
        <Row gutter={14}>
            <Col
                span={24}
                style={{
                    padding: '10px 20px',
                }}
            >
                <div
                    style={{
                        maxWidth: '1200px',
                        width: '100%',
                        margin: '0 auto',
                        backgroundColor: '#F2F5F5',
                        padding: '25px 40px 35px 40px',
                    }}
                >
                    <div style={{ textAlign: 'center', fontSize: '25px', fontWeight: '600' }}>
                        Lịch sử tiêm
                    </div>
                    {Object.keys(childrenInjection?.data ?? {}).map((injection, index) => {
                        return (
                            <div key={index}>
                                <div
                                    style={{
                                        fontSize: '22px',
                                        padding: '20px 0',
                                        fontWeight: 'bold',
                                        color: '#9AA1A1',
                                    }}
                                >
                                    {injection}
                                </div>
                                <Row gutter={15}>
                                    {childrenInjection?.data[injection].map((history, index) => {
                                        return (
                                            <Col
                                                span={12}
                                                key={index}
                                                onClick={() =>
                                                    showDetailJnjectionModal(
                                                        childrenInjection?.data[injection][index],
                                                    )
                                                }
                                            >
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        backgroundColor: '#E5E5E5',
                                                        borderRadius: '0 10px 10px 0',
                                                        borderLeft: '5px solid #32CD32',
                                                        fontSize: '16px',
                                                        marginTop: '15px',
                                                    }}
                                                    className="injectionHistoryDose"
                                                >
                                                    <img
                                                        src={iconCheck}
                                                        style={{
                                                            height: '15px',
                                                            padding: '0 15px 0 5px',
                                                        }}
                                                    ></img>
                                                    <div style={{ padding: '5px 0' }}>
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                            }}
                                                        >
                                                            <strong style={{ fontSize: '20px' }}>
                                                                {history?.vaccine?.code} &nbsp;
                                                            </strong>
                                                            <div
                                                                style={{
                                                                    width: '25px',
                                                                    height: '25px',
                                                                    borderRadius: '50%',
                                                                    border: '2px solid #333',
                                                                    textAlign: 'center',
                                                                    lineHeight: '20px',
                                                                    fontWeight: 'bold',
                                                                }}
                                                            >
                                                                {history?.doseOfVaccine}
                                                            </div>
                                                        </div>
                                                        <div
                                                            style={{
                                                                fontSize: '18px',
                                                            }}
                                                        >
                                                            {history?.vaccine?.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </div>
                        );
                    })}
                </div>
            </Col>
            <Modal
                title={`${selectedInjection?.vaccine?.name} - ${selectedInjection?.vaccine?.code}`}
                visible={isModalVisible}
                footer={null}
                onCancel={() => {
                    setIsModalVisible(false);
                    setSelectedInjection({});
                }}
                bodyStyle={{
                    padding: '15px',
                }}
            >
                <div className="injectionHistoryList">
                    <div className="injectionHistoryItem">
                        <div className="injectionHistoryItemTitle">Mô tả</div>
                        <div className="injectionHistoryItemDesc">
                            {selectedInjection?.vaccine?.description}
                        </div>
                    </div>
                    <div className="injectionHistoryItem">
                        <div className="injectionHistoryItemTitle">Mũi số</div>
                        <div className="injectionHistoryItemDesc">
                            {selectedInjection?.doseOfVaccine}
                        </div>
                    </div>
                    <div className="injectionHistoryItem">
                        <div className="injectionHistoryItemTitle">Ngày tiêm</div>
                        <div className="injectionHistoryItemDesc">
                            {' '}
                            <Moment format="DD/MM/YYYY">{selectedInjection?.createdAt}</Moment>
                        </div>
                    </div>
                    <div className="injectionHistoryItem">
                        <div className="injectionHistoryItemTitle">Nơi tiêm</div>
                        <div className="injectionHistoryItemDesc">{selectedInjection?.address}</div>
                    </div>
                </div>
            </Modal>
        </Row>
    );
};
export default InjectionHistory;
