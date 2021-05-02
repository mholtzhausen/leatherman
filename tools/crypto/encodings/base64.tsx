import { Card, DatePicker, Input, Form, Alert, Modal, Button } from "antd";
import { InfoCircleTwoTone } from "@ant-design/icons";
import { useState, useEffect } from "react"
import { Base64 } from 'js-base64'
const INITIAL_MESSAGE = 'Paste Your Plain Text Here'


export default function Component() {

    const [text, setText] = useState(INITIAL_MESSAGE)
    const [b64, setB64] = useState(Base64.encode(INITIAL_MESSAGE))
    const [err, setErr] = useState('')

    const newText = ({ target }) => {
        setErr('')
        setText(target.value)
        setB64(Base64.encode(target.value))
    }

    const newB64 = ({ target }) => {
        setB64(target.value)
        setErr('')
        try{
            setText(Base64.decode(target.value))
        }catch(e){
            setText('')
            setErr('That string could not be decoded')
        }
    }

    return (
        <Card size="small" title="Format Date">
            <Form layout="vertical" size={'small'}>
                <Form.Item label="Plain Text">
                    <Input.TextArea rows={8} value={text} onChange={newText} />
                </Form.Item>
                <Form.Item label="Base64 Encoded">
                    <Input.TextArea rows={8} value={b64} onChange={newB64} />
                    {err && (<Alert message={err} type="error" showIcon />)}
                </Form.Item>

            </Form>
        </Card>
    )
}