import styles from './index.less';
import { Link, history } from 'umi';

import {Button} from 'antd'

export default function IndexPage(props) {
  function goToHomePage() {
    history.push('/home');
  }

  return (
    <div>
      <h1 className={styles.title}>Page login</h1>
      <Link to="/">登录成功</Link>

      <Button onClick={()=>props.history.push('/home')}>Go to list page</Button>
    </div>
  );
}
