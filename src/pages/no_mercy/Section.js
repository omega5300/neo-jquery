import styles from './index.module.css'

export const Section = ({ title, desc }) => (
  <section className={styles.section}>
      <h2 className={styles.section_title}>{title}</h2>
      <p className={styles.section_desc}>{desc}</p>
  </section>
)
