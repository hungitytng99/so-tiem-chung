import React from 'react';
import { Col, Row, Image } from 'antd';
import './Style.sass';
function index(props) {
    return (
        <div>
            <Row>
                <Col span={18}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Thành viên</div>
                    <Image
                        width={200}
                        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                    />
                    <Image
                        width={200}
                        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                    />
                    <Image
                        width={200}
                        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                    />
                </Col>
                <Col span={6}>
                    <div style={{ width: '300px', height: '400px', border: '1px solid #C7C7C7' }}>
                        Kiến thức
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default index;
