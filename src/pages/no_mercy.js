import Head from '@docusaurus/Head';

import styles from './no_mercy.module.css';

const imgList = [
	"img/no-mercy-ionic.png",
	"img/no_mercy_use_case.png",
	"img/no-mercy-android.png",
]


const journalPoints = [
	{
		title: 'diagrama de caso de uso',
		desc: `el diagrama de caso es la mas sencillo de usar debido que poseo experiencia previa en crear diagramas UML mas en concreto a los diagramas de caso de uso y la herramienta que mas tenia conocimiento.\n\n
se utilizo el software visual paradigm ya que lo conocia hace la verdad habia mas opciones pero visual paradigm es en que màs conozco.`
	},
	{
		title: 'diseño de la app',
		desc: `para el diseño se opto por figma ya que es uno software de diseño en realidad se podria realizar prototipar la app usando la suite de adobe o canva pero figma tiene mas ventajas que las otras app no tiene.\n\n
					
figma tiene paquetes de interfaces hechos por la comunidad y algunas empresas como google con material design se opto por la biblioteca de material design 2 o 3 y plugin para crear los color para la app.`
	},
	{
		title: 'escanear las cartas',
		desc: `el escaneo de cartas fue la labor mas sencilla me tomo unos minutos o horas para realizar todo.\n\n
					
se utilizo un scanner puro en lugar de un celular para mayor facilidad y no arrastar con la desventja de usar el celular con una app de scanner y buena iluminaciòn.\n\n
					
la unica desventaja que me encontre fue realizar cada escaneo uno por uno.`
	},
	{
		title: 'la version para ionic',
		desc: `la version para ionic es una de las mas sencillas de realizar debido que tengo experiencia con el framework ionic y el manejo de vue.\n\n
					
lo estructure como lo tenia planeado salvo su biblioteca de iconos pero no es nada problematico de implementar y de realizar las compilaciones.`
	},
	{
		title: 'version para android',
		desc: `esta version fue la planeaciòn mas compleja la experiencia en kotlin me fue bien apesar de tener conocimientos en js y aprendizaje en java.\n\n
		
no se utilizo nada de chat GPT o derivados para crear apps en cambio se opto por ir a la documentaciòn, foros y videos de youtube ademas algo de codigo para la splash screen la dificultad de aprender jetpack compose fue algo compleja al principio pero al final lo conseguir con buen resultado debido a la similitud con los componetes tipo react o vue y la programaciòn funcional.`
	}
]

const Section = ({ title, desc }) => (
  <section className={styles.section}>
      <h2 className={styles.section_title}>{title}</h2>
      <p className={styles.section_desc}>{desc}</p>
  </section>
)

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
