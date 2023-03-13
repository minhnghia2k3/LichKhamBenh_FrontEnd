import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./MedicalFacility.scss";

import { FormattedMessage } from 'react-intl';

// import Slick Slider
import Slider from "react-slick";

class MedicalFacility extends Component {

    render() {
        return (
            <div>
                <div className="section-share section-medical-facility">
                    <div className="section-container">
                        <div className="section-header">
                            <span className="title-section">Cơ sở y tế nổi bật</span>
                            <button className="btn-section">xem thêm</button>
                        </div>
                        <div className="section-body">
                            <Slider {...this.props.settings}>
                                <div className="section-customize">
                                    <div className="bg-image section-medical-facility" />
                                    <div>Hệ thống Y tế thu cúc 1</div>
                                </div>
                                <div className="section-customize">
                                    <div className="bg-image section-medical-facility" />
                                    <div>Hệ thống Y tế thu cúc 2</div>
                                </div>
                                <div className="section-customize">
                                    <div className="bg-image section-medical-facility" />
                                    <div>Hệ thống Y tế thu cúc 3</div>
                                </div>
                                <div className="section-customize">
                                    <div className="bg-image section-medical-facility" />
                                    <div>Hệ thống Y tế thu cúc 4</div>
                                </div>
                                <div className="section-customize">
                                    <div className="bg-image section-medical-facility" />
                                    <div>Hệ thống Y tế thu cúc 5</div>
                                </div>
                                <div className="section-customize">
                                    <div className="bg-image section-medical-facility" />
                                    <div>Hệ thống Y tế thu cúc 6</div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
