import React from 'react'
import styles from './footer.module.scss'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Toupawa. All rights reserved.</div>
      <div>
        <Image src="/1.png" width={15} height={15} alt="toupawa" />
      </div>
    </div>
  )
}

export default Footer