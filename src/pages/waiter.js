import Link from 'next/link'
import Image from 'next/image'
import Menus from './components_waiter/menus'
import Orden from './components_waiter/orden'
import waiterStyle from './styles/Waiter.module.css'
import { ProductContextProvider } from './components_waiter/productsContext'
import { TotalProvider } from './components_waiter/totalContext'
import { OrderProvider } from './components_waiter/orderContext'

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
        <ProductContextProvider>
          <OrderProvider>
          <TotalProvider>
           <div className= {waiterStyle.divMain}>
             <Menus/>
             <Orden/>
           </div>
          </TotalProvider>
          </OrderProvider>
        </ProductContextProvider>
         
        <Image 
        className={waiterStyle.backimg}
        src="/hamburguesafondo.png"
        alt="fondo"
        width={830}
        height={730}
        priority
        />
        <button className={waiterStyle.exitBtn}>SALIR</button>
        </>
    )
}