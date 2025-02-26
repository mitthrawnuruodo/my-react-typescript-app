// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';

interface Cat {
  id: string;
  url: string;
}

const Home: React.FC = () => {
  const [cat, setCat] = useState<Cat | null>(null);

  useEffect(() => {
    const fetchRandomCat = async () => {
      try {
        const res = await fetch('https://api.thecatapi.com/v1/images/search');
        const data: Cat[] = await res.json();
        setCat(data[0]);
      } catch (error) {
        console.error('Error fetching cat:', error);
      }
    };

    fetchRandomCat();
  }, []);

  return (
    <div>
      <h1>Welcome to the Cat App</h1>
      {cat ? (
        <img src={cat.url} alt="Random Cat" style={{ maxWidth: '100%' }} />
      ) : (
        <p>Loading a random cat...</p>
      )}
    </div>
  );
};

export default Home;
