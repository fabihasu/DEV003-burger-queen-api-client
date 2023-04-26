import Link from 'next/link'
import Image from 'next/image'
import Menus from './components_waiter/menus'
import Orden from './components_waiter/orden'
import waiterStyle from './styles/Waiter.module.css'

export default function waiter() {
    return (
        <>
        <header>

          <div className= {waiterStyle.header}>

          <Image 
          className={waiterStyle.logoBq}
          src="/bq-logo.jpg"
          alt= "BQ logo"
          width={100}
          height={100}
          priority
          />

          <h1 className= {waiterStyle.bqTitle}>BURGER <span className={waiterStyle.queen} >QUEEN</span></h1>
         <div className= {waiterStyle.divbtns}>
             <Link href='/kitchen'><button className={waiterStyle.wbtns}>Cocina</button> </Link>
             
             <button className={waiterStyle.wbtns}>Órdenes</button>
         </div>
          </div>
        </header>
         <div className= {waiterStyle.divMain}>
        <Menus/>
        <Orden/>
        </div>
        <button className={waiterStyle.exitBtn}>Salir</button>
        </>
    )
}