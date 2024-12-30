import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

export default function Property() {
    const { slug } = useParams(); // Mengambil slug dari URL
    const [property, setProperty] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchProperty() {
          setIsLoading(true);
          try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || import.meta.env.VITE_LOCAL_API_URL}/property/${slug}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'api-key': `${import.meta.env.VITE_API_KEY}`
              }
            });
            const data = await response.json();
            setProperty(data);
          } catch (error) {
            console.error('Error fetching property data:', error);
          } finally {
            setIsLoading(false);
          }
        }
    
        fetchProperty();
      }, [slug]);

      if (isLoading) {
        return <Loading/>;
      }
    
      if (!property) {
        return <div>Property not found</div>;
      }

    return (
        <div>Property {slug}</div>
    )
}
