import Head from 'next/head'
import styles from '../styles/Home.module.css'

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
            href=""
            className={styles.card2}
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
            className={styles.card2}
          >
            <h3>LINGUAGENS FORMAIS E AUTÔMATOS</h3>
            <p>Quarta-feira e quinta-feira 17:10 as 18:50</p>
          </a>
          <a
            href="https://meet.google.com/xaa-hgzh-knm"
            className={styles.card}
          >
            <h3>PESQUISA OPERACIONAL</h3>
            <p>Segunda-feira 07:30 as 11:10</p>
          </a>
          <a
            href=" https://meet.google.com/aon-ovke-tya

            "
            className={styles.card}
          >
            <h3>PROJETO FINAL DE CURSO 2</h3>
            <p>Quinta-feira 13:30 as 15:10</p>
          </a>
          <a
            href="https://meet.google.com/wqm-zyup-xgh"
            className={styles.card}
          >
            <h3>REDES DE COMPUTADORES 2</h3>
            <p>Segunda-feira e terça-feira 15:30 as 17:10</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
