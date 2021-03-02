import { Route, Switch, Redirect} from 'react-router-dom';

import Header from './header/index'
import Footer from './footer/index'
import Index from '../pages/index/index'
import Home from '../pages/home/index'
import About from '../pages/about/index'

import TopMenu from '../components/topMenu/index'

import './style.scss'

export default function (props) {
    return (
        <Route path="/">
            { 1 ?
                <div className="layout-wrap">
                    <Header></Header>
                    <TopMenu></TopMenu>
                    <Switch>
                        <Route exact path="/" component={Index}></Route>
                        <Route exact path="/home" component={Home}></Route>
                        <Route exact path="/about" component={About}></Route>
                    </Switch>
                    <Footer></Footer>
                </div>
                : <Redirect to='/login' />
            }
        </Route>
    )
}