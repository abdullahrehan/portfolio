import React, { useState } from 'react'
import ProjectsFolders from './ProjectsFolders'
import ProjectDetails from './ProjectDetails.jsx'


function MyWork({ showProjectDetails, setShowProjectDetails }) {

    const [selectedProject, setSelectedProject] = useState()

    return (
        <div className='w-full h-full bg-red-000 mywork relative center' >

            {
                !showProjectDetails ?

                    <ProjectsFolders
                        showProjectDetails={showProjectDetails}
                        setShowProjectDetails={(value) => setShowProjectDetails(value)}
                        setSelectedProject={(value) => setSelectedProject(value)}
                        projectData={showProjectDetails} />

                    :
                    <ProjectDetails
                        showProjectDetails={showProjectDetails}
                        setShowProjectDetails={(value) => setShowProjectDetails(value)}
                        projectData={showProjectDetails}
                        selectedProject={selectedProject}
                        setSelectedProject={(value) => setSelectedProject(value)} />

            }

        </div>
    )
}

export default MyWork
