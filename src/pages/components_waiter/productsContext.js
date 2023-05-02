import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const ProductsContext = createContext()
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBydWViYWx1aXNhQGdtYWlsLmNvbSIsImlhdCI6MTY4Mjk5MDc4NywiZXhwIjoxNjgyOTk0Mzg3LCJzdWIiOiIzIn0.vjxuQcB5d0LwKrbkyYlbnEhi1kJ2-6-LGyCiZhE5uTs"

export const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        
        axios({
            method : 'GET',
            url: 'http://localhost:8080/products',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setProducts(response.data)
        })
        .catch(console.log)
    }, [])

    return (
        <ProductsContext.Provider value={products}>
           {children}
        </ProductsContext.Provider>
         
    )
}