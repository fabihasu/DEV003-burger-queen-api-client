import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const ProductsContext = createContext()
export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RicUBnbWFpbC5jb20iLCJpYXQiOjE2ODM2NTA3MDksImV4cCI6MTY4MzY1NDMwOSwic3ViIjoiMyJ9.AftOmdQzrEdBbhKSM-El0LtjsfeWJaphpzXNCgwzQXE"
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