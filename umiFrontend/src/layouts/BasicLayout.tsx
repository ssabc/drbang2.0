import { Layout } from 'antd';
import { Redirect } from 'umi'
import styles from './BasicLayout.less';

const { Header, Footer, Content } = Layout;

import Lheader from './Header'
import Topmenu from './Topmenu'
import Lfooter from './Footer'

export default (props) => {
  console.log(props)
  const isLogin = true
  if (isLogin) {
    return (
        <Layout>
          <Lheader></Lheader>
          <Topmenu></Topmenu>
          <div className={styles.content_wrap}></div>
          <Lfooter></Lfooter>
      </Layout>
    );
  } else {
    return <Redirect to="/login" />;
  }
}