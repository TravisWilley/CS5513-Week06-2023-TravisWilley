import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <title>Basic Next.js app</title>
      </Head>
      <header>
        <nav>
          <a href='http://www.santarosa.edu'>Visit SRJC</a>
        </nav>
      </header>
      <main>
        {children}
      </main>
      {!home && (
        <Link href='/' className='btn btn-primary mt-3'>
          Back to Home
        </Link>
      )
      }
      <footer>
        <p> The Footer</p>
      </footer>
    </div>
  )
}