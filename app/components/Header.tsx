"use client"; 

import { useState } from "react";
import Link from "next/link";
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    /* 1. The conditional open class is now applied directly to the main header wrapper */
    <header className={`${styles['site-header']} ${isOpen ? styles['site-header-open'] : ''}`}>
      <div className={styles['site-header-container']}>

        <Link href="/" className={styles['site-logo']} onClick={closeMenu}>
          <img src="images/logo.png" alt="My Site Logo" />
        </Link>
   
        <nav className={styles['site-navigation']}>

          {/* 2. The menu also retains its open class if you need to style internal children */}
          <ul className={`${styles['site-menu']} ${isOpen ? styles['site-menu-open'] : ''}`}>
            <li><Link href="/" onClick={closeMenu}>Home</Link></li>
            <li><Link href="/company" onClick={closeMenu}>Company</Link></li>
            <li><Link href="/tours" onClick={closeMenu}>Tours</Link></li>
            <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>

          <button 
            type="button"
            className={`${styles['site-menu-button']} ${isOpen ? styles.open : ''}`} 
            onClick={toggleMenu} 
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} 
            aria-haspopup="true" 
            aria-expanded={isOpen} >  
            
              <svg className={styles['menu-icon']} version="1.1" viewBox="0 0 45 46">
                <g>
                <rect className={styles['menu-bottom-bar']} y="40" width="45" height="6"/>
                <rect className={styles['menu-middle-bar']} y="20" width="45" height="6"/>
                <rect className={styles['menu-top-bar']} width="45" height="6"/>
                </g>
              </svg>

           </button>   

        </nav>

      </div>
    </header>
  );
}
