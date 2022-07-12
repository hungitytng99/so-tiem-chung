import React from 'react';
import { Typography, Row, Col, Divider } from 'antd';
import styles from './index.module.css';
const cx = classNames.bind(styles);
const { Text } = Typography;
function Content({ img, name, time }) {
    return (
        // <Row gutter={14}>
        //     <Col xs={6}>
        //         <div className={cx('image-box')}>
        //             <Link to="/detail-child">
        //                 {/* <img className={cx('image')} src={img} /> */}
        //             </Link>
        //         </div>
        //         <div className={cx('card-content')}>
        //             <h3>{name}</h3>
        //         </div>
        //         <div className={cx('card-content')}>
        //             <h4>{time}</h4>
        //         </div>
        //     </Col>
        // </Row>
        <div>daay la content</div>
    );
}
export default Content;
