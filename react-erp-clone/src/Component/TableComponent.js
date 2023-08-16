import React, {useState} from "react";
import {Button, Col, Input, Modal, Row, Select, Table} from "antd";

function TableComponent(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const dataSource = [
        {
            no: '69',
            esl: '2023.08.02',
            network: '2023.07.30',
            contractName: 'SAP-EMS Test (08-02)',
            shopName : '백석문화대학교 산학협력단',
            orderNo : '295',
            pm : '',
            progress : '계획 미수립',
        },
        {
            no: '68',
            esl: '2023.08.02',
            network: '2023.07.30',
            contractName: 'SAP-EMS Test (08-03)',
            shopName : '베스트샵평화점 본사',
            orderNo : '298',
            pm : '',
            progress : '계획 미수립',
        },
        {
            no: '67',
            esl: '2023.08.02',
            network: '2023.07.30',
            contractName: 'SAP-EMS Test (08-04)',
            shopName : '청호대리점 본사',
            orderNo : '299',
            pm : '',
            progress : '계획 미수립',
        },
        {
            no: '66',
            esl: '2023.08.02',
            network: '2023.07.30',
            contractName: 'SAP-EMS Test (08-05)',
            shopName : '납품처',
            orderNo : '300',
            pm : '',
            progress : '계획 미수립',
        },

    ];

    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
        },
        {
            title: '설치계획일(ESL)',
            dataIndex: 'esl',
            key: 'esl',
        },
        {
            title: '설치계획일(네트워크)',
            dataIndex: 'network',
            key: 'network',
        },
        {
            title: '계약명',
            dataIndex: 'contractName',
            key: 'contractName',
        },
        {
            title: 'Shop',
            dataIndex: 'shopName',
            key: 'shopName',
        },
        {
            title: '주문번호',
            dataIndex: 'orderNo',
            key: 'orderNo',
        },
        {
            title: '담당PM',
            dataIndex: 'pm',
            key: 'pm',
        },
        {
            title: '진행상태',
            dataIndex: 'progress',
            key: 'progress',
        },
    ];

    return(
        <div className="m-3">
            <div className="flex justify-between py-2">
                <Button className="rounded-full">엑셀 다운로드</Button>
                <p className="text-sm">총 69건</p>
            </div>
            <Table dataSource={dataSource} columns={columns} className="border border-gray-300" onRow={(record) => ({
                onClick: () => {
                    showModal();
                },
            })}/>
            <Modal title="영업 기회 등록"
                   open={isModalOpen}
                   onOk={handleOk}
                   onCancel={handleCancel}
                   width={'100%'}
                   okButtonProps={{ style:{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}}
                   className="overflow-x-scroll"
            >
                <hr/>
                <h1 className="my-2">고객사 정보</h1>
                <div className="my-2 border border-gray-300 ">
                    <Row>
                        <Col span={12}>
                            <Row>
                                <Col span={8} className="py-3 text-center bg-gray-100 border-r border-gray-300">
                                    Industry / Type <span className="text-red-500">*</span>
                                </Col>
                                <Col span={16} className="py-3">
                                    <Row>
                                        <Col span={12} className="px-2">
                                            <Select
                                                placeholder="선택하세요"
                                                style={{ width: '100%' }}
                                                options={[
                                                    {value: 'all', label: '전체'},
                                                    {value: 'test', label: 'Industry Select'},
                                                ]}
                                            />
                                        </Col>
                                        <Col span={12} className="px-2">
                                            <Select
                                                placeholder="선택하세요"
                                                style={{ width: '100%' }}
                                                options={[
                                                    {value: 'all', label: '전체'},
                                                    {value: 'test', label: 'Type Select'},
                                                ]}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={8} className="py-3 text-center bg-gray-100 border-l border-r border-gray-300">
                                    Division_SP <span className="text-red-500">*</span>
                                </Col>
                                <Col span={16} className="py-3 px-2">
                                    <Select
                                        placeholder="선택하세요"
                                        style={{ width: '100%' }}
                                        options={[
                                            {value: 'all', label: '전체'},
                                            {value: 'test', label: 'Division_SP Select'},
                                        ]}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="border-t border-gray-300">
                        <Col span={12}>
                            <Row>
                                <Col span={8} className="py-3 text-center bg-gray-100 border-r border-gray-300">
                                    Client Name <span className="text-red-500">*</span>
                                </Col>
                                <Col span={16} className="py-3 px-2">
                                    <Input placeholder="Client Name을 입력하새요."/>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={8} className="py-3 text-center bg-gray-100 border-l border-r border-gray-300">
                                    Send to Name
                                </Col>
                                <Col span={16} className="py-3 px-2">
                                    <Input placeholder="Send to Name을 입력하새요."/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="border-t border-gray-300">
                        <Col span={12}>
                            <Row>
                                <Col span={8} className="py-3 text-center bg-gray-100 border-r border-gray-300">
                                    Ship to Name
                                </Col>
                                <Col span={16} className="py-3 px-2">
                                    <Input placeholder="Ship to Name을 입력하새요."/>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={8} className="py-3 text-center bg-gray-100 border-l border-r border-gray-300">
                                    Bill to Name
                                </Col>
                                <Col span={16} className="py-3 px-2">
                                    <Input placeholder="Bill to Name을 입력하새요."/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="border-t border-gray-300">
                        <Col span={24}>
                            <Row>
                                <Col span={4} className="py-3 text-center bg-gray-100 border-r border-gray-300">
                                    Channel <span className="text-red-500">*</span>
                                </Col>
                                <Col span={20} className="py-3 px-2">
                                    <Select
                                        placeholder="선택하세요"
                                        style={{ width: '100%' }}
                                        options={[
                                            {value: 'all', label: '전체'},
                                            {value: 'test', label: 'Channel Select'},
                                        ]}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="border-t border-gray-300">
                        <Col span={12}>
                            <Row>
                                <Col span={8} className="py-3 text-center bg-gray-100 border-r border-gray-300">
                                    Market Type <span className="text-red-500">*</span>
                                </Col>
                                <Col span={16} className="py-3 px-2">
                                    <Select
                                        placeholder="선택하세요"
                                        style={{ width: '100%' }}
                                        options={[
                                            {value: 'all', label: '전체'},
                                            {value: 'test', label: 'Market Type Select'},
                                        ]}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={8} className="py-3 text-center bg-gray-100 border-l border-r border-gray-300">
                                    Region <span className="text-red-500">*</span>
                                </Col>
                                <Col span={16} className="py-3 px-2">
                                    <Col span={24} className="">
                                        <Input placeholder = "지역을 입력하세요"/>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="border-t border-gray-300">
                        <Col span={12}>
                            <Row>
                                <Col span={8} className="py-3 text-center bg-gray-100 border-r border-gray-300">
                                    사업자등록번호
                                </Col>
                                <Col span={16} className="py-3 px-2">
                                    <Col span={24}>
                                        <Input placeholder = "사업자등록번호를 입력하세요"/>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={8} className="py-3 text-center bg-gray-100 border-l border-r border-gray-300">
                                    주소
                                </Col>
                                <Col span={16} className="py-3 px-2">
                                    <Col span={24}>
                                        <Input placeholder = "주소를 입력하세요"/>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="border-t border-gray-300">
                        <Col span={12}>
                            <Row>
                                <Col span={8} className="py-3 text-center bg-gray-100 border-r border-gray-300">
                                    대표자명
                                </Col>
                                <Col span={16} className="py-3 px-2">
                                    <Col span={24}>
                                        <Input placeholder = "대표자명을 입력하세요"/>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={8} className="py-3 text-center bg-gray-100 border-l border-r border-gray-300">
                                    대표번호
                                </Col>
                                <Col span={16} className="py-3 px-2">
                                    <Col span={24}>
                                        <Input placeholder = "대표번호를 입력하세요"/>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <h1 className="my-2">고객사 정보</h1>
                <div className="my-2 border border-gray-300 ">
                    <Row>
                        <Col span={12}>
                            <Row>
                                <Col span={8} className="py-3 text-center bg-gray-100 border-r border-gray-300">
                                    Project Name <span className="text-red-500">*</span>
                                </Col>
                                <Col span={16} className="py-3 px-2">
                                    <Input placeholder="Project Name을 입력하새요."/>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={8} className="py-3 text-center bg-gray-100 border-l border-r border-gray-300">
                                    Product <span className="text-red-500">*</span>
                                </Col>
                                <Col span={16} className="py-3">
                                    <Row>
                                        <Col span={12} className="px-2">
                                            <Select
                                                placeholder="선택하세요"
                                                style={{ width: '100%' }}
                                                options={[
                                                    {value: 'all', label: '전체'},
                                                    {value: 'test', label: 'Product Select 1'},
                                                ]}
                                            />
                                        </Col>
                                        <Col span={12} className="px-2">
                                            <Select
                                                placeholder="선택하세요"
                                                style={{ width: '100%' }}
                                                options={[
                                                    {value: 'all', label: '전체'},
                                                    {value: 'test', label: 'Product Select 1'},
                                                ]}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="border-t border-gray-300">
                        <Col span={12}>
                            <Row>
                                <Col span={8} className="py-3 text-center bg-gray-100 border-r border-gray-300">
                                    Deal Type <span className="text-red-500">*</span>
                                </Col>
                                <Col span={16} className="py-3 px-2">
                                    <Select
                                        placeholder="선택하세요"
                                        style={{ width: '100%' }}
                                        options={[
                                            {value: 'all', label: '전체'},
                                            {value: 'test', label: 'Deal Type Select'},
                                        ]}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={8} className="py-3 text-center bg-gray-100 border-l border-r border-gray-300">
                                    Service Type <span className="text-red-500">*</span>
                                </Col>
                                <Col span={16} className="py-3 px-2">
                                    <Select
                                        placeholder="선택하세요"
                                        style={{ width: '100%' }}
                                        options={[
                                            {value: 'all', label: '전체'},
                                            {value: 'test', label: 'Service Type Select'},
                                        ]}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Modal>
        </div>
    )
}

export default TableComponent;