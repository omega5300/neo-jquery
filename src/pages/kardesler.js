import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './kardesler.module.css';

const kardesler = [
  {
    imgUri: 'https://images.unsplash.com/photo-1551893665-f843f600794e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ5Nzg5NjV8&ixlib=rb-4.0.3&q=80&w=400',
    imgAlt: 'seyyahi solist',
    linkIG: 'https://www.instagram.com/seyyahikaktus',
    titleIG: 'seyyahi',
    desc: 'kaktüs kardeş seyyahi IG'
  },
  {
    imgUri: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ5ODE1NDd8&ixlib=rb-4.0.3&q=80&w=400',
    imgAlt: 'melodi SS',
    linkIG: 'https://www.instagram.com/melodikaktus',
    titleIG: 'melodi',
    desc: 'kaktüs kardeş melodi IG'
  }
]

export default function Kardesler() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout 
      title="katus-kardesler"
      description="katus kardesler intagram promo"
    >
      <main className={styles.cards}>
        {kardesler.map((kardes, i) => (
          <section className={styles.content} key={i}>
            <img 
              className={styles.image}
              src={kardes.imgUri} 
              alt={kardes.imgAlt} 
            />
              
            <a 
              className={styles.link}
              href={kardes.linkIG} 
              target="_blank" 
              title={kardes.titleIG}
            >
              {kardes.desc}
            </a>
          </section>
        ))} 
      </main>
    </Layout>
  )
}
