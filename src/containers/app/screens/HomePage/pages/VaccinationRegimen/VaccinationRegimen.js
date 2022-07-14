import React from 'react';
import styles from './VaccinationRegimen.module.sass';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Page(props) {
    console.log('styles: ', styles);
    return (
        <div className={cx('vaccine')}>
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
                                    (4 mũi)
                                </th>
                                <td
                                    className={cx('schedule-yellow')}
                                    title="Range of recommended ages for all children"
                                    headers="hepb birth"
                                >
                                    1
                                </td>
                                <td
                                    className={cx('schedule-yellow')}
                                    title="Range of recommended ages for all children"
                                    headers="hepb mo1 mos2"
                                >
                                    2
                                </td>
                                <td
                                    className={cx('schedule-yellow')}
                                    title="Range of recommended ages for catch-up vaccination"
                                    headers="hepb 4mos"
                                >
                                    3
                                </td>
                                <td
                                    className={cx('schedule-yellow')}
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
                                    (1 mũi)
                                </th>
                                <td
                                    className={cx('schedule-yellow')}
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
                                    className={cx('schedule-yellow')}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                >
                                    1
                                </td>
                                <td
                                    className={cx('schedule-yellow')}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                >
                                    2
                                </td>
                                <td
                                    className={cx('schedule-yellow')}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                >
                                    3
                                </td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td
                                    className={cx('schedule-yellow')}
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
                                    className={cx('schedule-yellow')}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                >
                                    1
                                </td>
                                <td
                                    className={cx('schedule-yellow')}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                >
                                    2
                                </td>
                                <td
                                    className={cx('schedule-yellow')}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                >
                                    3
                                </td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td
                                    className={cx('schedule-yellow')}
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
                                    className={cx('schedule-yellow')}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                >
                                    1
                                </td>
                                <td
                                    className={cx('schedule-yellow')}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                >
                                    2
                                </td>
                                <td
                                    className={cx('schedule-yellow')}
                                    title="Range of recommended ages for all children"
                                    headers="dtap mos2"
                                >
                                    3
                                </td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-gray')}></td>
                                <td
                                    className={cx('schedule-yellow')}
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
                                <td className={cx('schedule-yellow')}>1</td>
                                <td className={cx('schedule-yellow')}>2</td>
                                <td className={cx('schedule-yellow')}>3</td>
                                <td className={cx('schedule-yellow')}>4</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th className={cx('vaccine-text')}>
                                    Hib
                                    <br />
                                    <span>(3 mũi)</span>
                                </th>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-yellow')}>1</td>
                                <td className={cx('schedule-yellow')}>2</td>
                                <td className={cx('schedule-yellow')}>3</td>
                                <td></td>
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
                                <td className={cx('schedule-yellow')} colSpan={2}>
                                    1
                                </td>
                                <td className={cx('schedule-yellow')} colSpan={2}>
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
                                <td className={cx('schedule-yellow')}>1 vs 2</td>
                                <td className={cx('schedule-gray')}></td>
                                <td className={cx('schedule-yellow')}>3</td>
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
                                <td className={cx('schedule-yellow')}>1</td>
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
