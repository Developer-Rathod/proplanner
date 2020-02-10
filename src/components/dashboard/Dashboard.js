import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'; //glue lib connect to redux store to react
import { compose } from 'redux'; // connecting 2 hoc
// which collection we need to sync with database?
import { firestoreConnect } from 'react-redux-firebase'; // glue lib for redux to react to firebase 


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
    console.log(state);
    return {
       // projects: state.project.projects //creating property projects as props was showing dummy data
       projects: state.firestore.ordered.projects
    }
}
//we will use compose function to connect two higher order component
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "projects" }
    ])
)(Dashboard) 
// [ this is array] { this is object 'property'}