import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Specialty.scss";
import { FormattedMessage } from 'react-intl';

// Slick-Slider library
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Specialty extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
        return (
            <div className="section-specialty">
                <div className="specialty-container">
                    <div className="specialty-header">
                        <span className="title-section">Chuyên khoa phổ biến</span>
                        <button className="btn-section">xem thêm</button>
                    </div>
                    <div className="specialty-body">
                        <Slider {...settings}>
                            <div className="specialty-customize">
                                <div className="bg-image" />
                                <div>Cơ xương khớp 1</div>
                            </div>
                            <div className="specialty-customize">
                                <div className="bg-image" />
                                <div>Cơ xương khớp 2</div>
                            </div>
                            <div className="specialty-customize">
                                <div className="bg-image" />
                                <div>Cơ xương khớp 3</div>
                            </div>
                            <div className="specialty-customize">
                                <div className="bg-image" />
                                <div>Cơ xương khớp 4</div>
                            </div>
                            <div className="specialty-customize">
                                <div className="bg-image" />
                                <div>Cơ xương khớp 5</div>
                            </div>
                            <div className="specialty-customize">
                                <div className="bg-image" />
                                <div>Cơ xương khớp 6</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

// map State from Redux to React
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    // redux's action: fire event
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty); // Connect Redux to React
