import logo from  '../../assets/images/logo.png'
import './style.scss'

import { Link } from 'react-router-dom'
import {withRouter} from "react-router-dom";
import { useState, useEffect } from 'react'
// import { message} from 'antd';
// 菜单列表
function MenuList(props) {
    const list = []
    const listItems = props.list.map( item => {
        <div className="menu-li">
            {/* <Link to={}>{item.name}</Link> */}
            <a target="_blank" href={'https://www.huabaike.com/' + item.href}></a>
        </div>
    })
    return (
        <div className="menu-ul"> { listItems }</div>
    )
}

export default withRouter(function (props) {
    let [menus, setMenus] = useState([]) // 头部菜单

    useEffect(()=>{
        getMenusFetch()
    }, [])

    function getMenusFetch() {
        fetch(`/api/home/menulist`).then(response => response.json())
        .then(res =>  {
          console.log(res)
          if ( res.status != 1) {
            // message.error('请求服务器错误！')
            return
          }
          setMenus(res.data.list || [])
        })
    }
    return (
        <div className="top-menu-wrap_outer">
            <div className="top-menu-wrap">
                <img src={logo} onClick={ ()=> props.history.push("/home") }/>
                <MenuList list={menus}/>
            </div>
        </div>
    )
})