// src/pages/Home.tsx
import { useEffect, useState } from 'react';
import { Cat } from '../types';

const Home: React.FC = () => {
  const [cat, setCat] = useState<Cat | null>(null);

  const fetchRandomCat = async () => {
    try {
      const res = await fetch('https://api.thecatapi.com/v1/images/search');
      const data: Cat[] = await res.json();
      setCat(data[0]);
    } catch (error) {
      console.error('Error fetching cat:', error);
    }
  };

  useEffect(() => {
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
