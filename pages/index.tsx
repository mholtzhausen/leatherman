import Head from 'next/head'
import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Alert, Button, Form, Input, Layout, Typography } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import styles from '../styles/Home.module.css'



const { Header, Content, Footer } = Layout;
const { Title } = Typography;

type ShortenLinkResponse = {
  short_link: string;
}

type ShortenLinkError = {
  error: string;
  error_description: string;
}

type FormValues = {
  link: string;
}

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
        <div className={styles.shortner}>
          Hello world
        </div>
      </Content>
      <Footer className={styles.footer}>
      Environment: {process.env.NEXT_PUBLIC_VERCEL_ENV} | Shorty &copy; 2021 | Alt: 3
      </Footer>
    </Layout>
  )
}