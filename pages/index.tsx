import Head from 'next/head'
import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Alert, Button, Form, Input, Layout, Typography } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import styles from '../styles/Home.module.css'
import DateTime from '../tools/DateTime'
import Crypto from '../tools/Crypto'
import Hashes from '../tools/Hashes'

import { Tabs } from 'antd';

const { TabPane } = Tabs;



const { Header, Content, Footer } = Layout;

export default function Home() {
  // const [status, setStatus] = useState<'initial' | 'error' | 'success'>('initial');
  // const [form] = Form.useForm();


  return (
    <Layout>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <div className={styles.logo} >{process.env.NEXT_PUBLIC_APP_TITLE}</div>
      </Header>
      <Content className={styles.content}>
        <div className="card-container">
          <Tabs defaultActiveKey="1" type="card" className={styles.tabs}>
            <TabPane tab="Datetime" key="datetime" className={styles.tabpanes}><DateTime /></TabPane>
            <TabPane tab="Hashes"  key="hashes" className={styles.tabpanes}><Hashes /></TabPane>
            <TabPane tab="Crypto" key="crypto" className={styles.tabpanes}><Crypto /></TabPane>
          </Tabs>

        </div>
      </Content>
      <Footer className={styles.footer}>
        Environment: {process.env.NEXT_PUBLIC_VERCEL_ENV} | Shorty &copy; 2021 | Alt: 3
      </Footer>
    </Layout>
  )
}