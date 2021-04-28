import { Card, DatePicker, Input, Form, Alert, Modal, Button } from "antd";
import { InfoCircleTwoTone } from "@ant-design/icons";
import { useState, useEffect } from "react"
import moment, { Moment } from "moment"

export default function Component() {
    const [datetime, setDatetime] = useState<Moment>(moment(Date.now()))
    const [format, setFormat] = useState<string>('Do MMMM, Y hh:mm:ss')
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
        <Card size="small" title="Format Date" style={{ width: 540, marginTop: "15px" }} hoverable>
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
                    <table class="table table-striped table-bordered">
                        <tbody>
                            <tr>
                                <th style={{width:"180px"}}></th>
                                <th style={{width:"150px"}}>Token</th>
                                <th>Output</th>
                            </tr>
                            <tr>
                                <td><b>Month</b></td>
                                <td>M</td>
                                <td>1 2 ... 11 12</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Mo</td>
                                <td>1st 2nd ... 11th 12th</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>MM</td>
                                <td>01 02 ... 11 12</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>MMM</td>
                                <td>Jan Feb ... Nov Dec</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>MMMM</td>
                                <td>January February ... November December</td>
                            </tr>
                            <tr>
                                <td><b>Quarter</b></td>
                                <td>Q</td>
                                <td>1 2 3 4</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Qo</td>
                                <td>1st 2nd 3rd 4th</td>
                            </tr>
                            <tr>
                                <td><b>Day of Month</b></td>
                                <td>D</td>
                                <td>1 2 ... 30 31</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Do</td>
                                <td>1st 2nd ... 30th 31st</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>DD</td>
                                <td>01 02 ... 30 31</td>
                            </tr>
                            <tr>
                                <td><b>Day of Year</b></td>
                                <td>DDD</td>
                                <td>1 2 ... 364 365</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>DDDo</td>
                                <td>1st 2nd ... 364th 365th</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>DDDD</td>
                                <td>001 002 ... 364 365</td>
                            </tr>
                            <tr>
                                <td><b>Day of Week</b></td>
                                <td>d</td>
                                <td>0 1 ... 5 6</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>do</td>
                                <td>0th 1st ... 5th 6th</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>dd</td>
                                <td>Su Mo ... Fr Sa</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>ddd</td>
                                <td>Sun Mon ... Fri Sat</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>dddd</td>
                                <td>Sunday Monday ... Friday Saturday</td>
                            </tr>
                            <tr>
                                <td><b>Day of Week (Locale)</b></td>
                                <td>e</td>
                                <td>0 1 ... 5 6</td>
                            </tr>
                            <tr>
                                <td><b>Day of Week (ISO)</b></td>
                                <td>E</td>
                                <td>1 2 ... 6 7</td>
                            </tr>
                            <tr>
                                <td><b>Week of Year</b></td>
                                <td>w</td>
                                <td>1 2 ... 52 53</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>wo</td>
                                <td>1st 2nd ... 52nd 53rd</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>ww</td>
                                <td>01 02 ... 52 53</td>
                            </tr>
                            <tr>
                                <td><b>Week of Year (ISO)</b></td>
                                <td>W</td>
                                <td>1 2 ... 52 53</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Wo</td>
                                <td>1st 2nd ... 52nd 53rd</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>WW</td>
                                <td>01 02 ... 52 53</td>
                            </tr>
                            <tr>
                                <td><b>Year</b></td>
                                <td>YY</td>
                                <td>70 71 ... 29 30</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>YYYY</td>
                                <td>1970 1971 ... 2029 2030</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>YYYYYY</td>
                                <td>-001970 -001971 ... +001907 +001971
        <br />
                                    <b>Note:</b> <a href="https://tc39.es/ecma262/#sec-expanded-years">Expanded Years</a> (Covering the full time value range of approximately 273,790 years forward or backward from 01 January, 1970)
      </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Y</td>
                                <td>1970 1971 ... 9999 +10000 +10001
        <br />
                                    <b>Note:</b> This complies with the ISO 8601 standard for dates past the year 9999
      </td>
                            </tr>
                            <tr>
                                <td><b>Era Year</b></td>
                                <td>y</td>
                                <td>1 2 ... 2020 ... </td>
                            </tr>
                            <tr>
                                <td><b>Era</b></td>
                                <td>N, NN, NNN</td>
                                <td> BC AD<br />
                                    <b>Note:</b> Abbr era name
      </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>NNNN</td>
                                <td> Before Christ, Anno Domini <br />
                                    <b>Note:</b> Full era name
      </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>NNNNN</td>
                                <td> BC AD<br />
                                    <b>Note:</b> Narrow era name
      </td>
                            </tr>
                            <tr>
                                <td><b>Week Year</b></td>
                                <td>gg</td>
                                <td>70 71 ... 29 30</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>gggg</td>
                                <td>1970 1971 ... 2029 2030</td>
                            </tr>
                            <tr>
                                <td><b>Week Year (ISO)</b></td>
                                <td>GG</td>
                                <td>70 71 ... 29 30</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>GGGG</td>
                                <td>1970 1971 ... 2029 2030</td>
                            </tr>
                            <tr>
                                <td><b>AM/PM</b></td>
                                <td>A</td>
                                <td>AM PM</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>a</td>
                                <td>am pm</td>
                            </tr>
                            <tr>
                                <td><b>Hour</b></td>
                                <td>H</td>
                                <td>0 1 ... 22 23</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>HH</td>
                                <td>00 01 ... 22 23</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>h</td>
                                <td>1 2 ... 11 12</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>hh</td>
                                <td>01 02 ... 11 12</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>k</td>
                                <td>1 2 ... 23 24</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>kk</td>
                                <td>01 02 ... 23 24</td>
                            </tr>
                            <tr>
                                <td><b>Minute</b></td>
                                <td>m</td>
                                <td>0 1 ... 58 59</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>mm</td>
                                <td>00 01 ... 58 59</td>
                            </tr>
                            <tr>
                                <td><b>Second</b></td>
                                <td>s</td>
                                <td>0 1 ... 58 59</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>ss</td>
                                <td>00 01 ... 58 59</td>
                            </tr>
                            <tr>
                                <td><b>Fractional Second</b></td>
                                <td>S</td>
                                <td>0 1 ... 8 9</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>SS</td>
                                <td>00 01 ... 98 99</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>SSS</td>
                                <td>000 001 ... 998 999</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>SSSS ... SSSSSSSSS</td>
                                <td>000[0..] 001[0..] ... 998[0..] 999[0..]</td>
                            </tr>
                            <tr>
                                <td><b>Time Zone</b></td>
                                <td>z or zz</td>
                                <td>
                                    EST CST ... MST PST
        <br />
                                    <b>Note:</b> as of <b>1.6.0</b>, the z/zz format tokens have been deprecated from plain moment objects. <a href="https://github.com/moment/moment/issues/162">Read more about it here.</a>
        However, they *do* work if you are using a specific time zone with the moment-timezone addon.
      </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Z</td>
                                <td>-07:00 -06:00 ... +06:00 +07:00</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>ZZ</td>
                                <td>
                                    -0700 -0600 ... +0600 +0700
      </td>
                            </tr>
                            <tr>
                                <td><b>Unix Timestamp</b></td>
                                <td>X</td>
                                <td>1360013296</td>
                            </tr>
                            <tr>
                                <td><b>Unix Millisecond Timestamp</b></td>
                                <td>x</td>
                                <td>1360013296123</td>
                            </tr>
                        </tbody>
                    </table>
                </Modal>
            </Form>
        </Card>
    )
}