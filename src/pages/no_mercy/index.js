import Head from '@docusaurus/Head';

import { Section } from './Section';

import { imgList } from './imgList'
import { journalPoints } from './journalPoints'
import styles from './index.module.css';

const NoMercy = () => (
		<>
			<Head>
				<title>uno no mercy journal</title>
				<meta property="og:title" content="uno no mercy journal" />
				<meta 
					property="og:description" 
					content="diario de como se desarrollo la app." 
				/>
				<meta name="robots" content="noindex,nofollow" />
				<meta property="og:type" content="website" />
     		<meta property="og:locale" content="es_CO" />
     		<meta property="og:url" content="http://neo-jquery.vercel.app/no_mercy" />
     		<meta property="og:image" content="http://neo-jquery.vercel.app/img/no_mercy.webp" />
     		<meta name="twitter:card" content="summary_large_image" />
			</Head>
			
			<header className={styles.hero}>
        <h1 className="hero_title">uno no mercy app</h1>
        <img
          src="./img/no_mercy.webp"
          alt="App Interface"
          className={styles.hero_img}
        />
        <p>
          este diario o conocido como journal cuenta como omega5300 o conocido como juliomixtreria cuanta como se planificò pasa a paso la app. <br/>
          debido a que adquirir el uno no mercy y planificar todo paso a paso con las siguientes puntos.
        </p>
      </header>
      
      <section className={styles.images}>
					{ imgList.map(img => (
						<img 
							className={styles.image}
							src={img} 
							alt='jounal image' 
						/>
					)) }
			</section>
			
			<main className={styles.sections}>
				{journalPoints.map(({ title, desc }) => (
					<Section title={title} desc={desc} />
				))}
			</main>
		</>
	)

export default NoMercy
