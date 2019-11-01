import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'; //glue lib connect to redux store to react

class Dashboard extends Component {
    render() {
        console.log(this.props);
        const { projects } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                    <ProjectList  projects={projects} />
                    </div>
                    <div className="col s12 m5">
                    <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}
// get initial state from project reducer projects,
// send it to rootreducer project and finally state to the projects props <-
// console.log(this.props) 
const mapStateToProps = (state) => {
    return {
        projects: state.project.projects //creating property projects as props
    }
}
export default connect(mapStateToProps)(Dashboard)