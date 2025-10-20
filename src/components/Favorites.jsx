import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('tocaFavorites');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const addFavorite = (item) => {
    const updated = [...favorites, { ...item, addedAt: new Date().toISOString() }];
    setFavorites(updated);
    localStorage.setItem('tocaFavorites', JSON.stringify(updated));
  };

  const removeFavorite = (itemId) => {
    const updated = favorites.filter(fav => fav.id !== itemId);
    setFavorites(updated);
    localStorage.setItem('tocaFavorites', JSON.stringify(updated));
  };

  const isFavorited = (itemId) => {
    return favorites.some(fav => fav.id === itemId);
  };

  return { favorites, addFavorite, removeFavorite, isFavorited };
};

export default Favorites;
