import React from 'react';
import './Joblist.scss';
import Job from '../Job/Job';



const jobs = [
    {
        title:"General Manager",
        location: "Jakarta, Indonesia"
    },
    {
        title:"UI/UX Designer",
        location: "Yokohama, Japan"
    },
    {
        title:"Blog Content Copywriter",
        location: "New York, United States"
    },
    {
        title:"Graphic Designer",
        location: "New York, United States"
    },
    {
        title:"Fleet Supervisor",
        location: "Jakarta, Indonesia"
    },
    {
        title:"UX Analyst",
        location: "London, United Kingdom"
    }
]




class Joblist extends React.Component{





    render() {

        return(
            <div className="Joblist">
                {
                    jobs.map(job => {
                        return <Job title={job.title}
                                    location={job.location}/>
                    })
                }

            </div>
        )
    }
}

export default Joblist;