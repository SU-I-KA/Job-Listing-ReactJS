import React from 'react'

export default function Filters({ searchTags, setSearchTags, removeFilter }) {
  return (
    <div className='filterSection'>
      <div className='filters'>
        {searchTags?.map?.((tag, index) => {
          return (
            <button key={index} onClick={() => removeFilter(tag)}>
              {tag}
            </button>
          )
        })}
      </div>
      <div className='clear'>
        <button className='btn-clear' onClick={() => setSearchTags([])}>
          clear
        </button>
      </div>
    </div>
  )
}
