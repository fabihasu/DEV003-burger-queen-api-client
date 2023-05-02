import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const ProductsContext = createContext()
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBydWViYWx1aXNhQGdtYWlsLmNvbSIsImlhdCI6MTY4MzA2MDE3NSwiZXhwIjoxNjgzMDYzNzc1LCJzdWIiOiIzIn0.mICBwW0y40EcjwMAVq0Rgi4SDN7RZcE739Saa1HZuEQ"

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