
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Terca() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Salas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Link salas  <a href="">2020.2</a>
        </h1>
        <p className={styles.description}>
          {' '}
          <code className={styles.code}>Sempre da trabalho buscar as salas novamente</code>
        </p>

        <div className={styles.grid}>
        <Link href="segunda">
        <a href="" className={styles.card2}>
            <strong>Segunda-feira</strong>
        </a>
        </Link>

        <Link href="terca">
        <a href="terca" className={styles.card2}>
            <strong>Terça-feira</strong>
        </a>
        </Link>

        <Link href="quarta">
        <a href="" className={styles.card3}>
            <strong>Quarta-feira</strong>
        </a>
        </Link>

        <Link href="quinta">
        <a href="" className={styles.card2}>
            <strong>Quinta-feira</strong>
        </a>
        </Link>

        <Link href="sexta">
        <a href="" className={styles.card2}>
            <strong>Sexta-feira</strong>
        </a>
        </Link>
        </div>


        <div className={styles.grid}>
        <a
            href="https://meet.google.com/jtv-awpa-wds"
            className={styles.card}
          >
            <h3>INTERFACE HOMEM-COMPUTADOR</h3>
            <p>Terça-feira e quarta-feira  07:30 as 9:10</p>
          </a>

          <a
            href="" className={styles.card}
          >
            <h3>LINGUAGENS FORMAIS E AUTÔMATOS</h3>
            <p>Quarta-feira e quinta-feira 17:10 as 18:50</p>
          </a>
          <a
            href="" className={styles.card}
          >
            <h3>Estude no tempo livre!</h3>
            <p></p>
          </a>
        </div>


        <Link href="/">
            <a>
            <img src="/home.png" alt="casa Logo" className={styles.imagem} />
            </a>
        </Link>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/logo.png" alt="Vercel Logo" className={styles.logo} /> <strong >Amorim</strong>
        </a>
      </footer>
    </div>
  )
}
