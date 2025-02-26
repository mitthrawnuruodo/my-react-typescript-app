// src/pages/CatDetail.tsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';

interface Cat {
  id: string;
  url: string;
}

const CatDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [cat, setCat] = useState<Cat | null>(null);

  useEffect(() => {
    const fetchCatDetail = async () => {
      try {
        // The Cat API does not have a dedicated detail endpoint so we use the search with id filter
        const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
        const data: Cat = await res.json();
        setCat(data);
      } catch (error) {
        console.error('Error fetching cat detail:', error);
      }
    };

    if (id) {
      fetchCatDetail();
    }
  }, [id]);

  return (
    <div>
      <h1>Cat Detail</h1>
      {cat ? (
        <div>
          <img src={cat.url} alt={`Cat ${cat.id}`} style={{ maxWidth: '100%' }} />
          <p>ID: {cat.id}</p>
        </div>
      ) : (
        <p>Loading cat details...</p>
      )}
      <Link to="/cats">Back to Cats</Link>
    </div>
  );
};

export default CatDetail;
