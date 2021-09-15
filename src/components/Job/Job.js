import React from 'react'
import styles from './Job.module.css'

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
    <div className={styles.job}>
      <div className={styles.jobDetails}>
        <img src={logo} alt='company' />
        <div className={styles.jobDta}>
          <div className={styles.row}>
            <h4>{company}</h4>
            {newlisted && <p>new</p>}
            {featured && <p>featured</p>}
          </div>
          <div className={styles.row}>
            <h2>{position}</h2>
          </div>
          <div className={styles.row}>
            <ul>
              <li>{postedAt}</li>
              <li>{contract}</li>
              <li>{location}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.categories}>
        {tags?.map((item, index) => {
          return (
            <button
              key={index}
              className={styles.btnTag}
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
