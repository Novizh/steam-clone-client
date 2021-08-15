import React from 'react';
import Header from '../components/Header';
import image from '../assets/images/pic01.jpg';
import Footer from '../components/Footer';

function GameDetails() {
    return (
        <React.Fragment>
            <Header />
            <div id="main-wrapper">
                <div className="container">
                    <div className="row gtr-200">
                        <div className="col-8 col-12-medium imp-medium">
                            <div id="content">
                                <section className="last">
                                    <h2>Game Details</h2>
                                    <h3>Carousel</h3>
                                    <a href="/#" className="button icon solid fa-arrow-circle-right">Add to wishlist</a>
                                </section>
                            </div>

                        </div>
                        <div className="col-4 col-12-medium">
                            <div id="sidebar">
                                <section className="widget thumbnails">
                                    <div className="grid">
                                        <div className="row gtr-50">
                                            <div className="col-12"><a href="/#" className="image fit"><img src={image} alt="" /></a></div>
                                        </div>
                                    </div>
                                    <p>Game informations</p>
                                    <a href="/#" className="button icon fa-file-alt">More</a>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default GameDetails;