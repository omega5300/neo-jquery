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

import styles from './stepfi-pole.module.css';

export default function StepfiPole() {
  const {siteConfig} = useDocusaurusContext();
  
  const links = [
  	{
  		link: 'https://www.instagram.com/miss_stepfi_polestar',
  		detail: 'miss stepfi IG',
  		icon: faInstagram
  	},
  	{
  		link: 'https://www.twitch.tv/stepfi_polestar',
  		detail: 'streams',
  		icon: faTwitch
  	},
  	{
  		link: 'https://www.facebook.com/missstepfipolestar',
  		detail: 'miss stepfi FB',
  		icon: faFacebook
  	},
  	{
  		link: 'https://youtube.com/@missstepfipolestar',
  		detail: 'canal de youtube',
  		icon: faYoutube
  	},
  	{
  		link: 'https://www.tiktok.com/@stepfi_polestar',
  		detail: 'miss stepfi tiktok',
  		icon: faTiktok
  	},
  ];
  
  return (
     <>
     <Head>
     	<title>miss stepfi polestar</title>
     	<link rel="canonical" href="http://neo-jquery.vercel.app/stepfi-pole" />
     	<meta name="robots" content="noindex,nofollow" />
     	<meta property="og:title" content="miss stepfi polestar" />
     	<meta property="og:description" content="cosplayer y bailarina de pole exotic & pole fitness" />
     	<meta property="og:type" content="website" />
     	<meta property="og:locale" content="es_MX" />
     	<meta property="og:url" content="http://neo-jquery.vercel.app/stepfi-pole" />
     	<meta property="og:image" content="http://neo-jquery.vercel.app/img/profile.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
     </Head>
     
     <main className={styles.stepfi}>
       <img 
       		className={styles.profile}
       		src="/img/profile.jpg" 
       		alt="image" 
       		width={200}
       		height={200}
       />
       
       <h1 className={styles.title}>Miss Stepfi PoleStar</h1>
       
       <p className={styles.desc}>Cosplay, poledancer</p>
       
       <ul className={styles.links}>
         {links.map(({ link, detail, icon }) => (<li>
         		<a 
         			className={styles.webLink} href={link} target="_blank"
         		>
         	  	<FontAwesomeIcon icon={icon} /> <span>{detail}</span>
         		</a>
         </li>))}
        </ul>
      </main>
      </>
  )
}
