import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
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
        <hr></hr>
        <div className={styles.grid}>
        <Link href="segunda#card">
        <a href="" className={styles.card2}>
            <strong>Segunda-feira</strong>
        </a>
        </Link>

        <Link href="terca#card">
        <a href="terca" className={styles.card2}>
            <strong>Terça-feira</strong>
        </a>
        </Link>

        <Link href="quarta#card">
        <a href="" className={styles.card2}>
            <strong>Quarta-feira</strong>
        </a>
        </Link>

        <Link href="quinta#card">
        <a href="" className={styles.card2}>
            <strong>Quinta-feira</strong>
        </a>
        </Link>

        <Link href="sexta#card">
        <a href="" className={styles.card2}>
            <strong>Sexta-feira</strong>
        </a>
        </Link>
        </div>
        
        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>AUDITORIA DE SISTEMAS</h3>
            <p>Quinta-feira 7:30 as 9:10.</p>
          </a>

          <a href="https://meet.google.com/ptj-oayi-tgs" className={styles.card}>
            <h3>COMPUTAÇÃO GRÁFICA</h3>
            <p>Terça-feira e quinta-quinta 9:30 as 11:10. </p>
          </a>

          <a
            href="meet.google.com/cff-etyv-ave"
            className={styles.card}
          >
            <h3>DIREITO</h3>
            <p>Sexta-feira 15:30 as 18:50.</p>
          </a>

          <a
            href="https://meet.google.com/lookup/a7csubeoj4"
            className={styles.card}
          >
            <h3>INTELIGÊNCIA ARTIFICIAL</h3>
            <p>Segunda-feira 07:30 as 11:10</p>
          </a>
          <a
            href="https://meet.google.com/jtv-awpa-wds"
            className={styles.card}
          >
            <h3>INTERFACE HOMEM-COMPUTADOR</h3>
            <p>Terça-feira e quarta-feira  07:30 as 9:10</p>
          </a>
          <a
            href=""
            className={styles.card}
          >
            <h3>LINGUAGENS FORMAIS E AUTÔMATOS</h3>
            <p>Quarta-feira e quinta-feira 17:10 as 18:50</p>
          </a>
          <a
            href="https://meet.google.com/xaa-hgzh-knm"
            className={styles.card}
          >
            <h3>PESQUISA OPERACIONAL</h3>
            <p>Segunda-feira e terça-feira 13:30 as 15:10</p>
          </a>
          
          <a href=" https://meet.google.com/aon-ovke-tya"className={styles.card}>
            <h3>PROJETO FINAL DE CURSO 2</h3>
            <p>Quinta-feira 13:30 as 15:10</p>
          </a>

          <a
            href="https://meet.google.com/mxg-dpbs-gre"
            className={styles.card}
          >
            <h3>REDES DE COMPUTADORES 2</h3>
            <p>Segunda-feira e terça-feira 15:30 as 17:10</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://amorimsilva.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered {' '}
          <img src="/logo.png" alt="Vercel Logo" className={styles.logo} /> <strong >Amorim</strong>
        </a>
      </footer>
    </div>
  )
}
