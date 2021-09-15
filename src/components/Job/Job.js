import React from 'react'

export default function Job({
  company,
  logo,
  featured,
  position,
  postedAt,
  contract,
  location,
  tags,
  new: newlisted,
  addFilter,
}) {
  return (
    <div className='job'>
      <div className='jobDetails'>
        <img src={logo} alt='company' />
        <div className='jobDta'>
          <div className='row'>
            <h4>{company}</h4>
            {newlisted && <p>new</p>}
            {featured && <p>featured</p>}
          </div>
          <div className='row'>
            <h2>{position}</h2>
          </div>
          <div className='row'>
            <ul>
              <li>{postedAt}</li>
              <li>{contract}</li>
              <li>{location}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='categories'>
        {tags?.map((item, index) => {
          return (
            <button
              key={index}
              className='btn-tag'
              onClick={() => addFilter(item)}
            >
              {item}
            </button>
          )
        })}
      </div>
    </div>
  )
}
