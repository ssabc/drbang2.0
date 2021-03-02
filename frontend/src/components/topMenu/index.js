import logo from  '../../assets/images/logo.png'
import './style.scss'

import { Link } from 'react-router-dom'

// 菜单列表
function MenuList() {
    const list = []
    return (
        <div className="menu-ul"> 
            <div className="menu-li">
                <Link to="/about">首页</Link>
            </div>
        </div>
    )
}

export default function (props) {
    console.log(props)
    return (
        <div className="top-menu-wrap_outer">
            <div className="top-menu-wrap">
                <img src={logo} onClick={ ()=> props.history.push("/") }/>
                <MenuList />
            </div>
        </div>
    )
}