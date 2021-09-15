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
      {featured && <div className={styles.brdrLft}></div>}
      <div className={styles.jobDetails}>
        <img src={logo} alt={company} title={company} />
        <div className={styles.jobDta}>
          <div className={styles.row}>
            <h4>{company}</h4>
            {newlisted && <p>new!</p>}
            {featured && <p className={styles.featured}>featured</p>}
          </div>
          <div className={styles.row}>
            <a href='/' className={styles.position}>
              {position}
            </a>
          </div>
          <div className={styles.row}>
            <ul>
              <li>{postedAt}</li>
              <li className={styles.dotted}>{contract}</li>
              <li className={styles.dotted}>{location}</li>
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
