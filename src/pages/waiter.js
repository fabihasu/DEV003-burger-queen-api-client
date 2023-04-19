import style from './styles/Home.module.css'
export default function waiter() {
    return (
        <>
        <header className={style.card}>
          <div>
          <img
            src="https://github.com/Laboratoria/burger-queen-api-mock/blob/main/resources/images/coffee.png?raw=true"
            alt= "Imagen"
            width={150}
            height={150}
          />
          <h1>BURGER QUEEN</h1>
             <button>Cocina</button>
            <button>Órdenes</button>
          </div>
        </header>
        </>
    )
}