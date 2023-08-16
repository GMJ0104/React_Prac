import React from "react";
import {Col, Progress, Row} from "antd";

function MiddleComponent(){
    return(
        <div className="m-3">
            <Row>
                <Col span={14}>
                    <Row>
                        <Col span={24}>
                            <Row className="bg-gray-100">
                                <Col span={4} className="py-12 text-center font-bold border border-gray-300">
                                    전체
                                </Col>
                                <Col span={10} className="text-center font-bold border border-gray-300">
                                    <Col span={24}>
                                        <Row>
                                            <Col span={24} className="py-2">
                                                설치 <br/> 미완료
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={12} className="py-2 border-r border-t border-gray-300">
                                                계획 <br/>미수립
                                            </Col>
                                            <Col span={12} className="py-2 border-t font-bold border-gray-300">
                                                계획<br/> 수립
                                            </Col>
                                        </Row>
                                    </Col>
                                </Col>
                                <Col span={10} className="text-center font-bold border border-gray-300">
                                    <Col span={24}>
                                        <Row>
                                            <Col span={24} className="py-2">
                                                설치 <br/> 완료
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={12} className="py-2 border-r border-t border-gray-300">
                                                Billing<br/> 미완료
                                            </Col>
                                            <Col span={12} className="py-2 border-t font-bold border-gray-300">
                                                Billing<br/> 완료
                                            </Col>
                                        </Row>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={4} className="py-2 text-center  border border-gray-300">
                                    94
                                </Col>
                                <Col span={10} className="text-center  border border-gray-300">
                                    <Col span={24}>
                                        <Row>
                                            <Col span={12} className="py-2 border-r border-gray-300">
                                                86
                                            </Col>
                                            <Col span={12} className="py-2  border-gray-300">
                                                6
                                            </Col>
                                        </Row>
                                    </Col>
                                </Col>
                                <Col span={10} className="text-center  border border-gray-300">
                                    <Col span={24}>
                                        <Row>
                                            <Col span={12} className="py-2 border-r border-gray-300">
                                                2
                                            </Col>
                                            <Col span={12} className="py-2  border-gray-300">
                                                0
                                            </Col>
                                        </Row>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col span={1}/>
                <Col span={9}>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={4} className="py-16 text-center font-bold border border-gray-300 bg-gray-100">
                                    진척도
                                </Col>
                                <Col span={20} className="text-center font-bold border border-gray-300">
                                    <Col span={24}>
                                        <Row>
                                            <Col span={24} className="py-6">
                                                <Row>
                                                    <Col span={4}>
                                                        실적
                                                    </Col>
                                                    <Col span={20}>
                                                        <Progress percent={2.1} status="active" style={{width:'80%'}} />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={24} className="py-6 border-r border-t border-gray-300">
                                                <Row>
                                                    <Col span={4}>
                                                        Billing
                                                    </Col>
                                                    <Col span={20}>
                                                        <Progress percent={0} status="active" style={{width:'80%'}} />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default MiddleComponent;