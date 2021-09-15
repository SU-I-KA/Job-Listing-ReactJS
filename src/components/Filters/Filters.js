import React from 'react'
import styles from './Filters.module.css'

export default function Filters({ searchTags, setSearchTags, removeFilter }) {
  const btnBg = {
    backgroundImage: `url(${'./images/icon-remove.svg'})`,
    backgroundRepeat: `no-repeat`,
  }
  return (
    <div className={styles.filterSection}>
      <div className={styles.filters}>
        {searchTags?.map?.((tag, index) => {
          return (
            <div className={styles.tagWrap}>
              <div className={styles.tagName}>{tag}</div>
              <button
                key={index}
                style={btnBg}
                className={styles.btnRemove}
                onClick={() => removeFilter(tag)}
              ></button>
            </div>
          )
        })}
      </div>
      <div className={styles.clear}>
        <button className={styles.btnClear} onClick={() => setSearchTags([])}>
          clear
        </button>
      </div>
    </div>
  )
}
