import './style.scss'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function (props) {
    return (
        <div className="head-wrap_outer">
            <div className="head-wrap">
                <div className="links-lf_wrap">
                    <Link to="/zhaohua">找花</Link>
                    <Link to="/zhaoduorou">找多肉</Link>
                    <Link to="/">社区</Link>
                    <Link to="/">花友圈</Link>
                </div>

                <div className="form-group">
                    <span className="iconfont iconsearch"></span>
                    <input type="input" className="form-control search-input" aria-describedby="emailHelp"/>
                    <Button className="search-btn" color="link">搜索</Button>
                </div>
            </div>
        </div>
    )
}