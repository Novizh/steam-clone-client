import React from 'react';
import Header from '../components/Header';
import image from '../assets/images/pic01.jpg';
import Footer from '../components/Footer';

function Home() {
    return (
        <React.Fragment>
            <Header />
            <div id="features-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-12-medium">
                            <section className="box feature">
                                <a href="/#" className="image featured"><img src={image} alt="" /></a>
                                <div className="inner">
                                    <header>
                                        <h2>Put something here</h2>
                                        <p>Maybe here as well I think</p>
                                    </header>
                                    <p>Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus. Praesent sed semper
                                        amet bibendum tristique fringilla.</p>
                                </div>
                            </section>
                        </div>
                        <div className="col-4 col-12-medium">
                            <section className="box feature">
                                <a href="/#" className="image featured"><img src={image} alt="" /></a>
                                <div className="inner">
                                    <header>
                                        <h2>An interesting title</h2>
                                        <p>This is also an interesting subtitle</p>
                                    </header>
                                    <p>Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus. Praesent sed semper
                                        amet bibendum tristique fringilla.</p>
                                </div>
                            </section>
                        </div>
                        <div className="col-4 col-12-medium">
                            <section className="box feature">
                                <a href="/#" className="image featured"><img src={image} alt="" /></a>
                                <div className="inner">
                                    <header>
                                        <h2>Oh, and finally ...</h2>
                                        <p>Here's another intriguing subtitle</p>
                                    </header>
                                    <p>Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus. Praesent sed semper
                                        amet bibendum tristique fringilla.</p>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Home;