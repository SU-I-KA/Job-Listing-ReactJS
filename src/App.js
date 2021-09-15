import { useEffect, useState } from 'react'
import JOBDATA from './services/data.json'
import './App.css'

function App() {
  const [jobs, setJobs] = useState([])
  const [searchTags, setSearchTags] = useState([])

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

  const addFilter = (tagItem) => {
    // setSearchTags((oldTags) => {
    //   return [...oldTags, tagItem]
    // })
    let newsearchtags = [...searchTags]
    if (newsearchtags.indexOf(tagItem) === -1) {
      newsearchtags.push(tagItem)
    }
    setSearchTags(newsearchtags)
  }

  const removeFilter = (tag) => {
    const newTags = searchTags.filter((item) => {
      return item !== tag
    })
    setSearchTags(newTags)
  }

  useEffect(() => {
    getJobs()
  }, [])

  return (
    <div className='App'>
      {searchTags.length > 0 && (
        <div className='tagsection'>
          {searchTags.map((tag, index) => {
            return (
              <button key={index} onClick={() => removeFilter(tag)}>
                {tag}
              </button>
            )
          })}
          <button onClick={() => setSearchTags([])}>clear</button>
        </div>
      )}
      {jobs
        ?.filter((item) => {
          if (searchTags.length === 0) {
            return item
          } else {
            return searchTags.every((tag) => item.tags.includes(tag))
          }
        })
        ?.map?.((job) => {
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
                return (
                  <p key={index} onClick={() => addFilter(item)}>
                    {item}
                  </p>
                )
              })}
            </div>
          )
        })}
    </div>
  )
}

export default App
