import './style.scss'

export default function (props) {
    return (
        <div className="contanier home-wrap_outer">
            <div className="home-wrap">
                <div className="row">
                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                            <li className="list-group-item">A fourth item</li>
                            <li className="list-group-item">And a fifth one</li>
                        </ul>
                    </div>
                    <div className="col">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://img.huabaike.com/uploads/ad/201806/5b2a0cba9cccd.jpg"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://img.huabaike.com/uploads/ad/201806/5b2a0cba9cccd.jpg"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://img.huabaike.com/uploads/ad/201806/5b2a0cba9cccd.jpg"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            </div>
                    </div>
                </div>
                <div className="row"></div>
                <div className="row"></div>
                <div className="row"></div>
            </div>
        </div>
    )
}