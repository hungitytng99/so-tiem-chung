import React, { useEffect } from 'react';
import { Col, Row, Image, Typography } from 'antd';
import './Style.sass';
import Content from './Content';
import { useDispatch, useSelector } from 'react-redux';
import { GET_COMMING_SCHEDULE } from './redux/action';

const { Text } = Typography;
function Page(props) {
    const dispatch = useDispatch();
    const schedules = useSelector((state) => state.commingSchedule.list);
    const profile = useSelector((state) => state.user?.profile);

    function getNextDayScheduleText(nextDay) {
        if (nextDay > 0) {
            return `${nextDay} ngày`;
        }

        if (nextDay == 0) {
            return 'Hôm nay';
        }

        return `Đã lỡ ${-nextDay} ngày`;
    }

    useEffect(() => {
        dispatch(GET_COMMING_SCHEDULE({ parentId: profile?.id }));
    }, []);

    return (
        <Row gutter={60}>
            <Col
                span={24}
                style={{
                    padding: '0px 200px',
                    marginBottom: '100px',
                }}
            >
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
                    {(schedules.data ?? []).map((schedule, index) => {
                        return (
                            <Col span={12} key={index}>
                                <Content
                                    key={index}
                                    name="Nguyen Trung Hau"
                                    dayLeft={getNextDayScheduleText(schedule.nextDays)}
                                    location="TYT Phong Khê"
                                    vaccine={`${schedule?.antigen?.name} - mũi ${schedule?.dose}`}
                                    date={schedule?.actualInjectionDate}
                                    time="Buổi sáng"
                                ></Content>
                            </Col>
                        );
                    })}
                </Row>
            </Col>
        </Row>
    );
}

export default Page;
