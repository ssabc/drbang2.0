import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';

import './style.scss'

export default function (props) {
    console.log(props)
    return (
        <div className="login-wrap">
            <Button color="primary" onClick={ ()=> props.history.push("/home")}>登录</Button>
            <Link to="/home">首页</Link>
        </div>
    )
}