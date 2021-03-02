import './style.scss'

export default function (props) {
    return (
        <div className="contanier home-wrap">
            <div className="row">
                <div className="col">
                    <ul class="list-group">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>
                </div>
                <div className="col">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://img.huabaike.com/uploads/ad/201806/5b2a0cba9cccd.jpg"/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://img.huabaike.com/uploads/ad/201806/5b2a0cba9cccd.jpg"/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://img.huabaike.com/uploads/ad/201806/5b2a0cba9cccd.jpg"/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                        </div>
                </div>
            </div>

            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
        </div>
    )
}