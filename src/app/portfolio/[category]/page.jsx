import React from 'react'
import styles from './page.module.scss'

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
    </div>
  )
}

export default Category