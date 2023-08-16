import React, {useState} from "react";
import {Button, Col, Input, Row, Select} from "antd";
import {CloseOutlined} from "@ant-design/icons";

function SearchComponent() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClearInput = () => {
        setInputValue('');
    };

    return (
        <div className="m-3명">
            <Row>
                <Col span={4} className="py-4 text-center font-bold border border-gray-300 bg-gray-100">검색어</Col>
                <Col span={20} className="py-2.5 border border-gray-300">
                    <Row>
                        <Col span={4}>
                        <Select
                            className="pl-2"
                            defaultValue="계약명"
                            style={{ width: 150 }}
                            options={[
                                {value: 'no', label: 'NO'},
                                {value: 'esl', label: '설치계획일(ESL)'},
                                {value: 'network', label: '설치계획일(네트워크)'},
                                {value: 'contractName', label: '계약명'},
                                {value: 'shopName', label: 'Shop명'},
                                {value: 'orderNo', label: '주문번호'},
                                {value: 'pm', label: '담당PM'},
                                {value: 'progress', label: '진행상태'},
                            ]}
                        />
                        </Col>
                        <Col span={12}>
                            <Input placeholder="검색어를 입력하세요."/>
                        </Col>
                        <Col span={2}>
                            <Button type="primary" className="mx-2 rounded-full" style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}>
                            검색
                            </Button>
                        </Col>
                        <Col span={2}>
                            <Button className="rounded-full">검색 조건 초기화</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={4} className="py-4 text-center font-bold border-r border-l border-gray-300 bg-gray-100">담당PM</Col>
                <Col span={8} className="p-2.5 border-r border-l border-gray-300">
                    <Input placeholder="담당자 없음"
                           value={inputValue}
                           onChange={handleInputChange}
                           suffix={inputValue && <CloseOutlined onClick={handleClearInput} />}
                    />
                </Col>
                <Col span={4} className="py-4 text-center font-bold border-r border-l border-gray-300 bg-gray-100">진행상태</Col>
                <Col span={8} className="p-2.5 border-r border-l border-gray-300">
                    <Select
                        defaultValue="전체"
                        style={{ width: '100%' }}
                        options={[
                            {value: 'all', label: '전체'},
                            {value: 'noPlan', label: '계획 미수립'},
                        ]}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={4} className="py-4 text-center font-bold border border-gray-300 bg-gray-100">작업상태</Col>
                <Col span={8} className="p-2.5 border border-gray-300">
                    <Select
                        defaultValue="전체"
                        style={{ width: '100%' }}
                        options={[
                            {value: 'all', label: '전체'},
                        ]}
                    />
                </Col>
                <Col span={4} className="py-4 text-center font-bold border border-gray-300 bg-gray-100">주문번호</Col>
                <Col span={8} className="p-2.5 border border-gray-300">
                    <Input placeholder="주문번호를 입력하세요."
                           style={{ width: '80%' }}
                    />
                    <Button type="primary"
                            className="mx-2 rounded-full"
                            style={{ backgroundColor: '#1890ff', borderColor: '#1890ff'}}>
                        검색
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default SearchComponent;