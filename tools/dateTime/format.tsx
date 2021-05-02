import { Card, DatePicker, Input, Form, Alert, Modal, Button } from "antd";
import { InfoCircleTwoTone } from "@ant-design/icons";
import { useState, useEffect } from "react"
import moment, { Moment } from "moment"
import MomentReference from './_moment_modal_content'

export default function Component() {
    const [datetime, setDatetime] = useState<Moment>(moment(Date.now()))
    const [format, setFormat] = useState<string>('Do MMMM, Y HH:mm:ss')
    const [formatted, setFormatted] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        formatDate()
    })

    const formatDate = (fmt = null) => {
        setFormatted(datetime.format(fmt || format))
    }

    const dateTimeUpdate = (value) => {
        setDatetime(value)
        formatDate()
    }

    const formatUpdate = ({ target }) => {
        setFormat(target.value)
        formatDate(target.value)
    }


    return (
        <Card size="small" title="Format Date">
            <Form layout="horizontal" size={'small'}>
                <Form.Item label="Date">
                    <DatePicker showTime value={datetime} onChange={dateTimeUpdate} />
                </Form.Item>
                <Form.Item label="Format">
                    <Input placeholder="hh:mm:ss" allowClear type="text" onChange={formatUpdate} value={format} />
                </Form.Item>
                <Form.Item label="Formatting Help">
                    <Button type="primary" icon={<InfoCircleTwoTone />} size='small' style={{ marginLeft: '15px' }} onClick={showModal} />
                </Form.Item>
                <Form.Item >
                    {formatted && (<Alert message={formatted} type="success" showIcon />)}
                </Form.Item>
                <Modal title="Formatting Help" visible={isModalVisible} cancelButtonProps={{ hidden: true }} onCancel={handleCancel} onOk={handleOk} width="747px">
                    <MomentReference />
                </Modal>
            </Form>
        </Card>
    )
}