import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {
    render() {
        return (
            <div className="section-share section-about ">
                <div className='section-about-header'>
                    Truyền thông nói về Lê Minh Nghĩa
                </div>
                <div className="section-about-content">
                    <div className='content-left'>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/147SkAVXEqM?list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI" title="#51 Kết Thúc Design Giao Diện Clone BookingCare.vn 4 | React.JS Cho Người Mới Bắt Đầu"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                    <div className='content-right'>
                        <p>"Sinh năm 2k3. Đang học ngành Công Nghệ Thông Tin cuối năm 2 tại trường Đại học Công Nghệ Đồng Nai.<br />
                            Hướng trở thành một FullStack-Developer."
                        </p>
                    </div>
                </div>

            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(About); // Connect Redux to React
