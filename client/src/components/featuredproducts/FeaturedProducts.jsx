import React, { useEffect, useState } from 'react'
import './featuredproducts.scss'
import Card from '../card/Card'
import axios from 'axios'

const FeaturedProducts = ({type}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/products?populate=*&[filters][type][$eq]=${type}`, {
                    headers: {
                        Authorization: `bearer ${import.meta.env.VITE_REACT_APP_API_TOKEN}`,
                    }
                });
                setData(res.data.data)
            } catch(err) {
                console.log(err);
            }
        };
        fetchData()
    }, [])

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda est deleniti dolorum, ipsa consequuntur nemo aliquid architecto. Doloribus facere quos quasi dolore! Consequatur saepe non, distinctio doloribus provident amet error deserunt ullam culpa aspernatur porro accusamus, eveniet sunt, fuga dolorum quis? Libero eos odio recusandae.</p>
        </div>

        <div className="bottom">
            {data.map(item => (
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts