import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Toupawa Website</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. 
          Quas vitae est eius inventore ipsa labore temporibus nostrum nesciunt deserunt molestiae! 
          Sapiente nobis quis doloribus facilis! Illo ullam distinctio nesciunt aspernatur.
        </p>
        <Button url="/portfolio" text="See our works"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='' className={styles.img} />
      </div>
    </div>
  )
}
