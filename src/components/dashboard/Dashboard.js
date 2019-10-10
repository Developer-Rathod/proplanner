import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                    <ProjectList />
                    </div>
                    <div className="col s12 m5">
                    <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}
