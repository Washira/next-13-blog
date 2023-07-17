import React from 'react';
import Image from 'next/image';
import styles from './about.module.scss';
import Button from '@/components/button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/2333332/pexels-photo-2333332.jpeg"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Web Development</h1>
          <h2 className={styles.imgDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Libero veritatis numquam accusantium est corporis esse quam sed suscipit, 
            adipisci eos dolorum ad mollitia omnis voluptatibus similique! Unde eligendi rerum impedit?
            <br /><br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Libero veritatis numquam accusantium est corporis esse quam sed suscipit, 
            adipisci eos dolorum ad mollitia omnis voluptatibus similique! Unde eligendi rerum impedit?
            <br /><br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Libero veritatis numquam accusantium est corporis esse quam sed suscipit, 
            adipisci eos dolorum ad mollitia omnis voluptatibus similique! Unde eligendi rerum impedit?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Libero veritatis numquam accusantium est corporis esse quam sed suscipit, 
            adipisci eos dolorum ad mollitia omnis voluptatibus similique! Unde eligendi rerum impedit?
            <br /><br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Libero veritatis numquam accusantium est corporis esse quam sed suscipit, 
            adipisci eos dolorum ad mollitia omnis voluptatibus similique! Unde eligendi rerum impedit?
            <br /><br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Libero veritatis numquam accusantium est corporis esse quam sed suscipit, 
            adipisci eos dolorum ad mollitia omnis voluptatibus similique! Unde eligendi rerum impedit?
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;