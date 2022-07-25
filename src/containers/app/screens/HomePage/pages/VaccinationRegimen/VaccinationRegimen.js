import React, { useEffect } from 'react';
import styles from './VaccinationRegimen.module.sass';
import classNames from 'classnames/bind';
import { GET_SCHEDULE } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

function Page({ match }) {
    console.log('match: ', match);
    const dispatch = useDispatch();
    const schedules = useSelector((state) => state.homePage?.schedule);
    console.log('schedules: ', schedules);

    function getScheduleColor(status) {
        if (status === 0) {
            return 'schedule-yellow';
        }

        if (status === 1) {
            return 'schedule-green-piece';
        }

        if (status === 2) {
            return 'schedule-red';
        }

        return '';
    }

    useEffect(() => {
        dispatch(GET_SCHEDULE({ childId: match.params?.childId }));
    }, []);

    return (
        <div className={cx('vaccine')}>
            <div className={cx('schedule')}>Phác đồ tiêm chủng</div>
            <div className={cx('title')}>Sơ sinh tới 24 tháng</div>
            <div className={cx('table')}>
                <div className={cx('table-responsive')}>
                    <table className={cx('table', 'table-schedule', 'table-bordered')}>
                        <thead className={cx('thead-light')}>
                            <tr>
                                <th>Vaccine</th>
                                <th className={cx('text-align-center')}>Sơ sinh</th>
                                <th className={cx('text-align-center')}>2 tháng</th>
                                <th className={cx('text-align-center')}>3 tháng</th>
                                <th className={cx('text-align-center')}>4 tháng</th>
                                <th className={cx('text-align-center')}>5 tháng</th>
                                <th className={cx('text-align-center')}>9 tháng</th>
                                <th className={cx('text-align-center')}>12 tháng</th>
                                <th className={cx('text-align-center')}>18 tháng</th>
                                <th className={cx('text-align-center')}>24 tháng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className={cx('vaccine-text')}>
                                    Viêm gan B<br />
                                    <span>(4 mũi)</span>
                                </th>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[0]?.status))}
                                    title="Range of recommended ages for all children"
                                    headers="hepb birth"
                                >
                                    1
                                </td>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[1]?.status))}
                                    title="Range of recommended ages for all children"
                                    headers="hepb mo1 mos2"
                                >
                                    2
                                </td>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[2]?.status))}
                                    title="Range of recommended ages for catch-up vaccination"
                                    headers="hepb 4mos"
                                >
                                    3
                                </td>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[3]?.status))}
                                    title="Range of recommended ages for all children"
                                    headers="hepb mos6 mos9 mos12 mos15"
                                >
                                    4
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th className={cx('vaccine-text')}>
                                    Lao
                                    <br />
                                    <span>(1 mũi)</span>
                                </th>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[4]?.status))}
                                    title="No recommendation/Not applicable"
                                    headers="rotavirus birth"
                                >
                                    1
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th className={cx('vaccine-text')}>
                                    Bạch hầu
                                    <br />
                                    <span>(4 mũi)</span>
                                </th>
                                <td className={cx('schedule-gray')}></td>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[5]?.status))}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                >
                                    1
                                </td>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[6]?.status))}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                >
                                    2
                                </td>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[7]?.status))}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                >
                                    3
                                </td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[8]?.status))}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                    colSpan={2}
                                >
                                    4
                                </td>
                            </tr>
                            <tr>
                                <th className={cx('vaccine-text')}>
                                    Ho gà
                                    <br />
                                    <span>(4 mũi)</span>
                                </th>
                                <td className={cx('schedule-gray')}></td>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[9]?.status))}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                >
                                    1
                                </td>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[10]?.status))}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                >
                                    2
                                </td>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[11]?.status))}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                >
                                    3
                                </td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[12]?.status))}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                    colSpan={2}
                                >
                                    4
                                </td>
                            </tr>
                            <tr>
                                <th className={cx('vaccine-text')}>
                                    Uốn ván
                                    <br />
                                    <span>(4 mũi)</span>
                                </th>
                                <td className={cx('schedule-gray')}></td>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[13]?.status))}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                >
                                    1
                                </td>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[14]?.status))}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                >
                                    2
                                </td>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[15]?.status))}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                >
                                    3
                                </td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[16]?.status))}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                    colSpan={2}
                                >
                                    4
                                </td>
                            </tr>
                            <tr>
                                <th className={cx('vaccine-text')}>
                                    Bại liệt
                                    <br />
                                    <span>(4 mũi)</span>
                                </th>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx(getScheduleColor(schedules?.data?.[17]?.status))}>
                                    1
                                </td>
                                <td className={cx(getScheduleColor(schedules?.data?.[18]?.status))}>
                                    2
                                </td>
                                <td className={cx(getScheduleColor(schedules?.data?.[19]?.status))}>
                                    3
                                </td>
                                <td className={cx(getScheduleColor(schedules?.data?.[20]?.status))}>
                                    4
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th className={cx('vaccine-text')}>
                                    Sởi
                                    <br />
                                    <span>(2 mũi)</span>
                                </th>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[21]?.status))}
                                    colSpan={2}
                                >
                                    1
                                </td>
                                <td
                                    className={cx(getScheduleColor(schedules?.data?.[22]?.status))}
                                    colSpan={2}
                                >
                                    2
                                </td>
                            </tr>
                            <tr>
                                <th className={cx('vaccine-text')}>
                                    Viêm não Nhật Bản
                                    <br />
                                    <span>(3 mũi)</span>
                                </th>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td
                                    style={{
                                        padding: 0,
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            height: '60px',
                                        }}
                                    >
                                        <div
                                            className={cx(
                                                getScheduleColor(schedules?.data?.[23]?.status),
                                            )}
                                            style={{
                                                flex: 1,
                                                borderRight: '1px solid #333',
                                                lineHeight: '60px',
                                            }}
                                        >
                                            1
                                        </div>
                                        <div
                                            className={cx(
                                                getScheduleColor(schedules?.data?.[24]?.status),
                                            )}
                                            style={{
                                                flex: 1,
                                                lineHeight: '60px',
                                            }}
                                        >
                                            2
                                        </div>
                                    </div>
                                </td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx(getScheduleColor(schedules?.data?.[25]?.status))}>
                                    3
                                </td>
                            </tr>
                            <tr>
                                <th className={cx('vaccine-text')}>
                                    Rubella
                                    <br />
                                    <span>(1 mũi)</span>
                                </th>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx(getScheduleColor(schedules?.data?.[26]?.status))}>
                                    1
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <th className={cx('vaccine-text')}>
                                    Hib
                                    <br />
                                    <span>(3 mũi)</span>
                                </th>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx(getScheduleColor(schedules?.data?.[27]?.status))}>
                                    1
                                </td>
                                <td className={cx(getScheduleColor(schedules?.data?.[28]?.status))}>
                                    2
                                </td>
                                <td className={cx(getScheduleColor(schedules?.data?.[29]?.status))}>
                                    3
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Page;
