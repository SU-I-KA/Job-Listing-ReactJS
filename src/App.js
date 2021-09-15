import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import Filters from './components/Filters/Filters'
import Job from './components/Job/Job'

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

  // add tag filter
  const addFilter = (tagItem) => {
    let newsearchtags = [...searchTags]
    if (newsearchtags.indexOf(tagItem) === -1) {
      newsearchtags.push(tagItem)
    }
    setSearchTags(newsearchtags)
  }

  // remove tag filter
  const removeFilter = (tag) => {
    const newTags = searchTags.filter((item) => {
      return item !== tag
    })
    setSearchTags(newTags)
  }

  //call getJobs function
  useEffect(() => {
    getJobs()
  }, [])

  // responsive media query for header's bg
  const isMobile = useMediaQuery({ query: '(max-width: 376px)' })

  //header background styling
  const headerBg = {
    backgroundImage: `url(${
      isMobile
        ? './images/bg-header-mobile.svg'
        : './images/bg-header-desktop.svg'
    })`,
  }

  return (
    <div className='App'>
      <header>
        <div className='headerBg' style={headerBg}></div>
        <div className='container'>
          {searchTags.length > 0 && (
            <Filters
              searchTags={searchTags}
              setSearchTags={setSearchTags}
              removeFilter={removeFilter}
            />
          )}
        </div>
      </header>

      <div className='job-list'>
        <div className='container'>
          {jobs
            ?.filter((item) => {
              if (searchTags.length === 0) {
                return item
              } else {
                return searchTags.every((tag) => item.tags.includes(tag))
              }
            })
            ?.map?.((job) => {
              return <Job key={job.id} {...job} addFilter={addFilter} />
            })}
        </div>
      </div>
    </div>
  )
}

export default App
