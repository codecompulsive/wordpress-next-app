// components/Footer.js
import { getPageBySlug } from '@/lib/wordpress';
import styles from './Footer.module.css';
import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa';







export default function Footer() {
  return (
    <footer className={styles['site-footer']}>

   <div className={styles['footer-container']}>

        <div className={styles['footer-column']}>

          <h4>Links</h4>


             <div className={styles['footer-contact']}>
               <ul className={styles['footer-nav-links']}>
                  <li><Link href="/tours">Tours</Link></li>
                  <li><Link href="/company">Company</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
               </ul>
  
                <hr />

               <ul className={styles['company-links']}>
                  <li><Link href="#">Privacy</Link></li>
                  <li><Link href="#">Terms</Link></li>
               </ul>

           </div>
        </div>  


           <div className={styles['footer-column']}>

              <h4>Company</h4>

              <div className={styles['footer-contact']}>
                 <div className={styles['footer-sub-column']}>
	                <div className={styles['contact-address']}>	
                    Company Name
		              	<address>2400 Biscayne Blvd. <br /> Miami, FL 33333</address>
	                </div>
    <hr />

	                <div className={styles['contact-phone-email']}>
		          	      Phone: <a href="tel:3055555555">305-555-5555</a><br />
		      	          Email: <a href="/contact-us/">sales@yoursite.com</a>
		            	</div>
                </div>
	
              </div>
           </div>


          <div className={styles['footer-column']}>

               <h4>Connect</h4>

            <div className={styles['footer-contact']}>
                <ul className={styles['social-links']}>
                  <li><a href="https://tiktok.com"><FaTiktok className="h-6 w-6 text-white-400" /></a></li>
                  <li><a href="https://instagram.com"><FaInstagram className="h-6 w-6 text-white-400" /></a></li>
                  <li><a href="https://twitter.com"><FaTwitter className="h-6 w-6 text-white-400" /></a></li>
                  <li><a href="https://linedin.com"><FaLinkedin className="h-6 w-6 text-white-400" /></a></li>
                </ul>
              </div>  
           </div>




      </div>


    </footer>
  );
}