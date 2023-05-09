import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const ProductsContext = createContext()
export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBydWViYWx1aXNhQGdtYWlsLmNvbSIsImlhdCI6MTY4MzY1MDM3MCwiZXhwIjoxNjgzNjUzOTcwLCJzdWIiOiIzIn0.z2t_EBViPzmmjY9cfeEEgU_fZTg_zgA5FN3Jr7I1qPY"
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