import React, { useEffect } from 'react';
import { Col, Row, Image, Typography } from 'antd';
import './Style.sass';
import Content from './Content';
import News from './News';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PATIENT_BY_ID } from './redux/action';
// import { dispatch } from '@adobe/redux-saga-promise';

const { Text } = Typography;
function index(props) {
    // const patients = [
    //     {
    //         name: 'Ngô Bá Khá',
    //         dayLeft: '23',
    //         location: 'Thái Bình',
    //         vaccine: 'Viêm não Nhật Bản',
    //         date: '26/12/2022',
    //         time: 'Buổi chiều',
    //     },
    //     {
    //         name: 'Nguyễn Đức Chung',
    //         dayLeft: '30',
    //         location: 'Hà Nội',
    //         vaccine: 'Viêm não Nhật Bản',
    //         date: '23/1/2022',
    //         time: 'Buổi sáng',
    //     },
    //     {
    //         name: 'Lê Văn Luyện',
    //         dayLeft: '50',
    //         location: 'Hải Dương',
    //         vaccine: 'Viêm gan B',
    //         date: '26/5/2022',
    //         time: 'Buổi sáng',
    //     },
    //     {
    //         name: 'Nguyễn Thanh Long',
    //         dayLeft: '98',
    //         location: 'Hà Nội',
    //         vaccine: 'Viêm gan D',
    //         date: '26/9/2022',
    //         time: 'Buổi chiều',
    //     },
    //     {
    //         name: 'Nguyễn Đức Chung',
    //         dayLeft: '30',
    //         location: 'Hà Nội',
    //         vaccine: 'Viêm não Nhật Bản',
    //         date: '23/1/2022',
    //         time: 'Buổi sáng',
    //     },
    //     {
    //         name: 'Lê Văn Luyện',
    //         dayLeft: '50',
    //         location: 'Hải Dương',
    //         vaccine: 'Viêm gan B',
    //         date: '26/5/2022',
    //         time: 'Buổi sáng',
    //     },
    //     {
    //         name: 'Nguyễn Thanh Long',
    //         dayLeft: '98',
    //         location: 'Hà Nội',
    //         vaccine: 'Viêm gan D',
    //         date: '26/9/2022',
    //         time: 'Buổi chiều',
    //     },
    //     {
    //         name: 'Nguyễn Đức Chung',
    //         dayLeft: '30',
    //         location: 'Hà Nội',
    //         vaccine: 'Viêm não Nhật Bản',
    //         date: '23/1/2022',
    //         time: 'Buổi sáng',
    //     },
    //     {
    //         name: 'Lê Văn Luyện',
    //         dayLeft: '50',
    //         location: 'Hải Dương',
    //         vaccine: 'Viêm gan B',
    //         date: '26/5/2022',
    //         time: 'Buổi sáng',
    //     },
    //     {
    //         name: 'Nguyễn Thanh Long',
    //         dayLeft: '98',
    //         location: 'Hà Nội',
    //         vaccine: 'Viêm gan D',
    //         date: '26/9/2022',
    //         time: 'Buổi chiều',
    //     },
    // ];

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

    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user?.profile?.id);

    // const listPatient = useSelector((state) => state.injectionSchedule.listPatient.data);
    const listPatient = useSelector((state) => state.injectionSchedule?.listPatient?.data);
    useEffect(() => {
        dispatch(GET_PATIENT_BY_ID({ parentId: profile }));
    }, []);

    // listPatient.map((patient) => {
    //     console.log(patient.antigen.name);
    // });

    return (
        <Row gutter={40}>
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
                <Row gutter={[60, 40]} style={{ padding: '0 50px' }}>
                    {(listPatient ?? []).map((patient, index) => {
                        const currDate = new Date(patient.standardInjectionDate);
                        var dateNow = new Date();
                        var diff = new Date(currDate.getTime() - dateNow.getTime());
                        var diffDate = Math.floor(parseInt(diff / (1000 * 3600 * 24)));
                        if (diffDate >= 0)
                            // cho nay em loc ra nhung nguoi chua tiem chung
                            // neu ko co dong if(218) thi se in ra cac ca da tiem chung
                            return (
                                <Col span={12}>
                                    <Content
                                        key={index}
                                        // name={patient.name}
                                        dayLeft={diffDate}
                                        // location={patient.location}
                                        vaccine={patient.antigen.name}
                                        date={`${currDate.getDay()}/${
                                            currDate.getMonth() + 1
                                        }/${currDate.getFullYear()}`}
                                        time={
                                            currDate.getHours() + 1 >= 12
                                                ? 'Buổi chiều'
                                                : 'Buổi sáng'
                                        }
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
