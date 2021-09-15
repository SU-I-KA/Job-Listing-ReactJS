import { useEffect, useState } from 'react'
import JOBDATA from './services/data.json'
import './App.css'

function App() {
  const [jobs, setJobs] = useState([])

  // adding categories section to each job
  const getJobs = () => {
    JOBDATA.map((job) => {
      const tags = [job.role, job.level, ...job.languages, ...job.tools]
      return setJobs((oldjobs) => {
        return [
          ...oldjobs,
          {
            ...job,
            tags: tags,
          },
        ]
      })
    })
  }

  useEffect(() => {
    getJobs()
  }, [])

  return (
    <div className='App'>
      {jobs?.map?.((job) => {
        return (
          <div key={job.id} className='job'>
            <img src={job.logo} alt='company' />
            <p>{job.company}</p>
            {job.new && <p>new</p>}
            {job.featured && <p>featured</p>}
            <h3>{job.position}</h3>
            <ul>
              <li>{job.postedAt}</li>
              <li>{job.contract}</li>
              <li>{job.location}</li>
            </ul>
            {job?.tags?.map((item, index) => {
              return <p key={index}>{item}</p>
            })}
          </div>
        )
      })}
    </div>
  )
}

export default App
