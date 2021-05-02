import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Alert, Button, Form, Input, Layout, Typography, Menu } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import styles from '../styles/Home.module.css'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom'
const { Sider } = Layout
const { SubMenu } = Menu


import { Tabs } from 'antd';

const { TabPane } = Tabs;
const menuStyles = {
  menuItem: { fontSize: '0.9em', lineHeight: '30px', height: '30px' }
}


//DynamicComponent
const DynamicComponent = function (name) {
  return function Component() {
    return (
      <div>
        <div><strong>{name}</strong></div>
        <div><em>Coming Soon</em></div>
      </div>
    )
  }
}


const { Header, Content, Footer } = Layout;

export default function Home() {
  // const [status, setStatus] = useState<'initial' | 'error' | 'success'>('initial');
  // const [form] = Form.useForm();
  const history = useHistory()

  const navigate = function (menuItem) {
    // history.push(`/${menuItem.key}`)
  }

  return (
    <Router>
      <Layout>
        <Head>
          <title>{process.env.NEXT_PUBLIC_APP_TITLE}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header>
          <div className={styles.logo} >{process.env.NEXT_PUBLIC_APP_TITLE}</div>
        </Header>
        <Layout>
          <Sider width="300px">
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <SubMenu key="dateTime" title="Date & Time" >
                <Menu.Item key="dateTime.timeStamp" style={menuStyles.menuItem} >
                  <span>Timestamp &lt;=&gt; Date</span>
                  <Link to="/datetime.timeStamp" />
                </Menu.Item>
                <Menu.Item key="dateTime.format" style={menuStyles.menuItem}>
                  <span>Format Date</span>
                  <Link to="/datetime.format" />
                </Menu.Item>
              </SubMenu>
              <SubMenu key="crypto" title="Crypto" >
                <Menu.Item key="crypto.hashes" style={menuStyles.menuItem}>
                  <span>Hashes</span>
                  <Link to="/crypto.hashes" />
                </Menu.Item>
                <SubMenu key="crypto.encodings" title="Encodings" >
                  <Menu.Item key="crypto.encodings.base64" style={menuStyles.menuItem}>
                    <span>Base64</span>
                    <Link to="/crypto.encodings.base64" />
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="crypto.encryption" style={menuStyles.menuItem}>
                  <span>Encryption</span>
                  <Link to="/crypto.encryption" />
                </Menu.Item>
                <Menu.Item key="crypto.passwords" style={menuStyles.menuItem}>
                  <span>Password Generation</span>
                  <Link to="/crypto.passwords" />
                </Menu.Item>
              </SubMenu>
              <SubMenu key="data" title="Data" >
                <Menu.Item key="data.json.format" style={menuStyles.menuItem}>
                  <span>JSON format</span>
                  <Link to="data.json.format" />
                </Menu.Item>
                <Menu.Item key="data.json.validate" style={menuStyles.menuItem}>
                  <span>JSON Validation</span>
                  <Link to="data.json.validate" />
                </Menu.Item>
                <Menu.Item key="data.yaml.format" style={menuStyles.menuItem}>
                  <span>Yaml Format</span>
                  <Link to="data.yaml.format" />
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content className={styles.content}>
            <div className="card-container">
              <Route exact path="/" component={DynamicComponent('Home')} />
              <Route path="/datetime.timeStamp" component={dynamic(() => import('../tools/dateTime/timestamp'))} />
              <Route path="/datetime.format" component={dynamic(() => import('../tools/dateTime/format'))} />

              <Route path="/crypto.hashes" component={DynamicComponent('/crypto.hashes')} />
              <Route path="/crypto.encodings.base64" component={dynamic(() => import('../tools/crypto/encodings/base64'))} />
              <Route path="/crypto.encryption" component={DynamicComponent('/crypto.encryption')} />
              <Route path="/crypto.passwords" component={DynamicComponent('/crypto.passwords')} />

              <Route path="/data.json.format" component={DynamicComponent('/data.json.format')} />
              <Route path="/data.json.validate" component={DynamicComponent('/data.json.validate')} />
              <Route path="/data.yaml.format" component={DynamicComponent('/data.yaml.format')} />
            </div>
          </Content>
        </Layout>
        <Footer className={styles.footer}>
          Environment: {process.env.NEXT_PUBLIC_VERCEL_ENV} | Shorty &copy; 2021 | Alt: 3
        </Footer>
      </Layout>
    </Router>
  )
}