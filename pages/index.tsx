import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Layout, Menu } from 'antd'
import styles from '../styles/Home.module.css'
import { Route, useHistory } from 'react-router-dom'
import wrapRouter from './_wrapRouter'

const { Sider } = Layout
const { SubMenu } = Menu

const menuStyles = {
  menuItem: { fontSize: '0.9em', lineHeight: '30px', height: '30px' },
  footerVersion: {
    fontSize: '0.8em',
    fontStyle: 'italic',
  }
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

const Component = function Home() {
  const history = useHistory()

  const navigate = function (menuItem) {
    history.push(`/${menuItem.key}`)
  }

  return (
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
            <SubMenu key="dateTime" title="Date &amp; Time" >
              <Menu.Item key="dateTime.format" style={menuStyles.menuItem} onClick={navigate} >Format Date</Menu.Item>
            </SubMenu>
            <SubMenu key="crypto" title="Crypto" >
              <Menu.Item key="crypto.hashes" style={menuStyles.menuItem} onClick={navigate} >Hashes</Menu.Item>
              <SubMenu key="crypto.encodings" title="Encodings" >
                <Menu.Item key="crypto.encodings.base64" style={menuStyles.menuItem} onClick={navigate} >Base64</Menu.Item>
              </SubMenu>
              <Menu.Item key="crypto.encryption" style={menuStyles.menuItem} onClick={navigate} >Encryption</Menu.Item>
              <Menu.Item key="crypto.passwords" style={menuStyles.menuItem} onClick={navigate} >Password Generation</Menu.Item>
            </SubMenu>
            <SubMenu key="data" title="Data" >
              <Menu.Item key="data.json.format" style={menuStyles.menuItem} onClick={navigate} >JSON format</Menu.Item>
              <Menu.Item key="data.json.validate" style={menuStyles.menuItem} onClick={navigate} >JSON Validation</Menu.Item>
              <Menu.Item key="data.yaml.format" style={menuStyles.menuItem} onClick={navigate} >Yaml Format</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content className={styles.content}>
          <div className="card-container">
            <Route exact path="/" component={DynamicComponent('Home')} />
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
        <div>
          Environment: {process.env.NEXT_PUBLIC_VERCEL_ENV} | Shorty &copy; 2021 | Alt: 3
        </div>
        <div style={menuStyles.footerVersion}>
          &lt;<span style={{color:'#a10000'}}>{process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF}</span> <span style={{color:'#a10000'}}>:</span> {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}&gt;
        </div>
      </Footer>
    </Layout>
  )
}

export default wrapRouter(Component)