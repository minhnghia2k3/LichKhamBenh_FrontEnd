import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {
    render() {
        return (
            <div className="home-footer">
                <p>&copy; 2023 Le Minh Nghia with HoiDanIT. <a href="https://github.com/minhnghia2k3" target="_blank">More information</a></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter); // Connect Redux to React
