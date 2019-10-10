import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
            <span className="card-title">Project title - { id }</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Kalpana Rathod</div>
            <div>10th October, 2am</div>
            </div>
        </div>
    </div>
    )
}

export default ProjectDetails
