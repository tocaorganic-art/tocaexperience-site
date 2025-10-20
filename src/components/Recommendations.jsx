import React, { useState, useEffect } from 'react';
import { Star, TrendingUp } from 'lucide-react';

const Recommendations = ({ userPreferences = {} }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const generateRecommendations = () => {
      const items = [
        { id: 1, title: 'DJ Set Exclusivo', rating: 4.9, reviews: 128, price: 'A partir de R$ 5.000' },
        { id: 2, title: 'Casamento em Trancoso', rating: 5.0, reviews: 89, price: 'A partir de R$ 25.000' },
        { id: 3, title: 'Festa Corporativa', rating: 4.7, reviews: 45, price: 'A partir de R$ 8.000' },
        { id: 4, title: 'Afro House Experience', rating: 4.8, reviews: 156, price: 'A partir de R$ 3.000' },
      ];
      setRecommendations(items);
    };

    generateRecommendations();
  }, [userPreferences]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {recommendations.map((item) => (
        <div key={item.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-white font-semibold text-sm">{item.title}</h3>
            <TrendingUp size={16} className="text-green-500" />
          </div>
          <p className="text-gray-400 text-xs mb-3">{item.price}</p>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(item.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
                />
              ))}
            </div>
            <span className="text-gray-400 text-xs ml-1">({item.reviews})</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
