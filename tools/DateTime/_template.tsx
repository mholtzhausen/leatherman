import { Card, DatePicker, Input, Form } from "antd";
// import { useState } from "react"
import moment, { Moment } from "moment"

export default function Component() {
    // const [statevar, setStateVar] = useState<Boolean>(true)

    return (
        <Card size="small" title="Unix Timestamp" style={{ width: 540 }}>
            <Form layout="inline" size={'small'}>
                <Form.Item label="Date">
                    <DatePicker showTime value={datetime} onChange={dateTimeUpdate} />
                </Form.Item>
                <Form.Item label="Timestamp">
                    <Input placeholder="unix timestamp" allowClear type="text" onChange={timestampChange} value={timestamp} style={{ width: '152px' }} />
                </Form.Item>
            </Form>
        </Card>
    )
}