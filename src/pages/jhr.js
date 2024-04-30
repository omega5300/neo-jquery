import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
	faInstagram, 
	faTiktok, 
	faDiscord, 
	faFacebook,
	faYoutube, 
	faTwitch
} from '@fortawesome/free-brands-svg-icons';

import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import styles from './jhr.module.css';

export default function Jhr() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
     <>
     <Head>
     	<title>Japon HR</title>
     	<link rel="canonical" href="http://neo-jquery.vercel.app/jhr" />
     	<meta name="robots" content="noindex,nofollow" />
     	<meta property="og:title" content="Japon HR" />
     	<meta property="og:description" content="cosplayer, machinimadora y bailarina de pole exotic & pole fitness" />
     	<meta property="og:type" content="website" />
     	<meta property="og:locale" content="es_MX" />
     	<meta property="og:url" content="http://neo-jquery.vercel.app/jhr" />
     	<meta property="og:image" content="http://neo-jquery.vercel.app/img/profile.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
     </Head>
     
     <main className={styles.jhr}>
       <img 
       		className={styles.profile}
       		src="img/profile.jpg" 
       		alt="image" 
       		width={200}
       		height={200}
       />
       
       <h1 className={styles.title}>japon hr</h1>
       
       <p className={styles.desc}>
       	🇨🇴🇲🇽 BAILARINA, COSPLAYER & MACHINIMADORA DE HALO
       </p>
       
       <ul className={styles.links}>
         <li>
         		<a 
         			className={styles.webLink} 
         			href="https://japonhr.com/" 
         			target="_blank"
         		>
         		  <FontAwesomeIcon icon={faGlobe} /> <span>web</span>
           	</a>
          </li>
          
          <li>
         		<a 
         			className={styles.facebookLink} 
         			href="https://www.facebook.com/japonhr/" 
         			target="_blank"
         		>
         		  <FontAwesomeIcon icon={faFacebook} /> <span>facebook</span>
           	</a>
          </li>
            
          <li>
            <a 
            	className={styles.youtubeLink} 
            	href="https://www.youtube.com/@japonhr" 
            	target="_blank"
            >
            	<FontAwesomeIcon icon={faYoutube} /> <span>shows & machinimas</span>
          	</a>
          </li>
            
          <li>
            <a 
            	className={styles.twitchLink} 
            	href="https://www.twitch.tv/japon_hr" 
            	target="_blank"
            >
            	<FontAwesomeIcon icon={faTwitch} /> <span>shows</span>
          	</a>
          </li>
           
          <li>
          	<a 
          		className={styles.instagramLink} 
          		href="https://www.instagram.com/japon_hr/" 
          		target="_blank"
          	>
              <FontAwesomeIcon icon={faInstagram} /> <span>Japon HR</span>
            </a>
          </li>
            	
          <li>
            <a 
            	className={styles.tiktokLink} 
            	href="https://www.tiktok.com/@japonhr" 
            	target="_blank"
            >
            	<FontAwesomeIcon icon={faTiktok} /> <span>baile & cosplay</span>
            </a>
          </li>
          
          <li>
          	<a 
          		className={styles.tiktokLink} 
          		href="https://www.tiktok.com/@japonhr2" 
          		target="_blank"
          	>
          		<FontAwesomeIcon icon={faTiktok} /> <span>TT baile</span>
          	</a>
          </li>
        </ul>
      </main>
      </>
  )
}
