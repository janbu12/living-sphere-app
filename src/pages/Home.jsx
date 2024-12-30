import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

export default function Home() {
    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function getData() {
        setIsLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL || import.meta.env.VITE_LOCAL_API_URL}/properties`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'api-key': `${import.meta.env.VITE_API_KEY}`
            }
        });
        const json = await response.json();

        // fetch('https://livingsphere.tscreativestudio.com/api/properties', { method: 'GET', 
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'api-key': `${import.meta.env.VITE_API_KEY}`
        //     }
        // })
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        //     .catch(err => console.error(err));
        console.log(json);
        setData(json);
        setIsLoading(false);
    }

    useEffect(()=>{
        getData();
    },[]);
  return (
    <>
        {isLoading &&
            <Loading/>
        }
        <div className="bg-white">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                {data && data.map((product) => (
                    <Link 
                        key={product.id} 
                        to={`/property/${product.id}`}
                        state={{ product }} 
                        className="group bg-white drop-shadow rounded">
                    <img
                        alt={product.title}
                        src={product.images[0]}
                        className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[4/3]"
                    />
                        <div className='px-4 pb-4 text-pretty'>
                            <h3 className="mt-4 text-lg text-gray-700">{product.title}</h3>
                            <p className="mt-1 text-xl font-medium text-gray-900">{product.price}</p>
                            <p className="mt-1 text-sm text-gray-900">{product.description}</p>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
    </>
  )
}
