// components/Footer.js
import { getPageBySlug } from '@/lib/wordpress';
import styles from './Footer.module.css';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles['site-footer']}>

   <div className={styles['footer-container']}>

            <div className={styles['footer-column']}>
                <h3>Navigation</h3>
           </div>

           <div className={styles['footer-column']}>
               <h3>About Company</h3>

                <p>Logo</p>
                <Link href="">Privacy</Link>
                <Link href="">Terms</Link>
                
           </div>
           <div className={styles['footer-column']}>

                <h3>Contact</h3>

              <div className={styles['footer-contact']}>
                  <div className={styles['busn-hours']}>Monday-Friday <br /> 8:00AM - 6:30PM</div>
	                <div className={styles['contact-phone']}>
		                 	<img src="https://www.pipeandsteel.com/layout-images/icons/icon-phone.svg" alt="contact phone icon" />
		          	      <a href="tel:3056921009">305-592-1009</a>
	                	</div>
		               <div className={styles['contact-email']}>	
		        	      <img src="https://www.pipeandsteel.com/layout-images/icons/icon-email.svg" alt="contact email icon" />
		      	        <a href="/contact-us/">sales@pipeandsteel.com</a>
		          	</div>
		            <div className={styles['contact-address']}>	
		            	<img src="https://www.pipeandsteel.com/layout-images/icons/icon-location.svg" alt="contact address icon" />
		            	<address>2001 NW 93rd Ave <br /> Miami, FL 33172</address>
	             </div>
              </div>


           </div>

      </div>


    </footer>
  );
}