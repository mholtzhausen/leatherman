import { Card, DatePicker, Input, Form } from "antd";
import { useState } from "react"
import moment, { Moment } from "moment"

type SizeType = Parameters<typeof Form>[0]['size']

export default function TimeStampConvert() {
    const [timestamp, setTimestamp] = useState<number>(Math.floor(Date.now()/1000))
    const [datetime, setDateTime] = useState<Moment>(moment(Date.now()))    

    const dateTimeUpdate = (value) => {
        let _timestamp = value.unix()
        setDateTime(value)
        setTimestamp(_timestamp)
    }

    const timestampChange = ({ target }) => {
        let _dateTime = moment.unix(target.value)
        setTimestamp(target.value)
        setDateTime(_dateTime)
    }

    return (
            <Card size="small" title="Unix Timestamp" style={{ width: 540 }}>
                <Form layout="inline" size={'small'}>
                    <Form.Item label="Date">
                        <DatePicker showTime value={datetime} onChange={dateTimeUpdate}/>
                    </Form.Item>
                    <Form.Item label="Timestamp">
                        <Input placeholder="unix timestamp" allowClear type="text" onChange={timestampChange} value={timestamp} style={{width:'152px'}} />
                    </Form.Item>
                </Form>
            </Card>
    )
}