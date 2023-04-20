import style from './styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function waiter() {
    return (
        <>
        <header className={style.card}>
          <div>

          <Image 
          src="/bq-logo.jpg"
          alt= "BQ logo"
          width={100}
          height={100}
          priority
          />

          <h1>BURGER QUEEN</h1>
          <Link href='/kitchen'><button>Cocina</button> </Link>
             
            <button>Órdenes</button>
          </div>
        </header>
        </>
    )
}