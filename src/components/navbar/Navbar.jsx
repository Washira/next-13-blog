"use client"

import Link from 'next/link';
import React from 'react'
import styles from './navbar.module.scss'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Dashboard',
    url: '/dashboard',
  },
  {
    id: 3,
    title: 'About',
    url: '/about',
  },
  {
    id: 4,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Portfolio',
    url: '/portfolio',
  },
]

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Toupawa
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button onClick={() => console.log('logout')} className={styles.logout}>
          logout
        </button>
      </div>
    </div>
  )
}

export default Navbar