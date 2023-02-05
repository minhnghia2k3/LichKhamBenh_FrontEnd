import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./userManage.scss";
import { getAllUsers } from "../../services/userService";
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: []

        }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            }) // setState -> bất đồng bộ

        }

    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="user-container">
                <div className="title text-center">Manage Users with Eric</div>
                <div className="user-table mt-3 mx-1">
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Actions</th>

                        </tr>


                        {// Viết Javascipt trong HTML
                            arrUsers && arrUsers.map((item, index) => {
                                console.log('eric check map', item, index)
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className="btn-edit"><i className="fas fa-pencil-alt"></i></button>
                                            <button className="btn-delete"><i className="fas fa-trash"></i></button>

                                        </td>
                                    </tr>

                                )
                            })

                        }



                    </table>

                </div>
            </div>
        );
    }
    /*
  Life Cycle 
  * Run component:
  1. Run constructor -> init state // tao cac bien
  2. Did mount ( set state )
  3. Render
  */


}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
