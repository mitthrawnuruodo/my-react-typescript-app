// src/pages/Cats.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

interface Cat {
  id: string;
  url: string;
}

const Cats: React.FC = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=12');
        const data: Cat[] = await res.json();
        setCats(data);
      } catch (error) {
        console.error('Error fetching cats:', error);
      }
    };

    fetchCats();
  }, []);

  return (
    <div>
      <h1>Cats</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))', gap: '1rem' }}>
        {cats.map(cat => (
          <div key={cat.id}>
            <Link to={`/cats/${cat.id}`}>
              <img src={cat.url} alt={`Cat ${cat.id}`} style={{ width: '100%', height: 'auto' }} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cats;
