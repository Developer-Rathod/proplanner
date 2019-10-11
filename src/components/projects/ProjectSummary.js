import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title ">{project.title}</span>
                    
                    <p>Posted by Kalpana</p>
                    <p className="grey-text">11th October, 11 am</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary
