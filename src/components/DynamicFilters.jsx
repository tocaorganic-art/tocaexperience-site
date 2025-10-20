import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const DynamicFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    rating: 'all',
    availability: 'all'
  });

  const handleFilterChange = (filterName, value) => {
    const updated = { ...filters, [filterName]: value };
    setFilters(updated);
    if (onFilterChange) {
      onFilterChange(updated);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-gray-800 rounded-lg">
      <div>
        <label className="text-gray-300 text-sm font-semibold mb-2 block">Categoria</label>
        <select
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
          className="bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="all">Todas</option>
          <option value="eventos">Eventos</option>
          <option value="servicos">Serviços</option>
          <option value="musica">Música</option>
        </select>
      </div>

      <div>
        <label className="text-gray-300 text-sm font-semibold mb-2 block">Preço</label>
        <select
          value={filters.priceRange}
          onChange={(e) => handleFilterChange('priceRange', e.target.value)}
          className="bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="all">Todos</option>
          <option value="budget">Até R$ 5.000</option>
          <option value="mid">R$ 5.000 - R$ 15.000</option>
          <option value="premium">Acima de R$ 15.000</option>
        </select>
      </div>

      <div>
        <label className="text-gray-300 text-sm font-semibold mb-2 block">Avaliação</label>
        <select
          value={filters.rating}
          onChange={(e) => handleFilterChange('rating', e.target.value)}
          className="bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="all">Todas</option>
          <option value="5">5 estrelas</option>
          <option value="4">4+ estrelas</option>
          <option value="3">3+ estrelas</option>
        </select>
      </div>

      <div>
        <label className="text-gray-300 text-sm font-semibold mb-2 block">Disponibilidade</label>
        <select
          value={filters.availability}
          onChange={(e) => handleFilterChange('availability', e.target.value)}
          className="bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="all">Todas</option>
          <option value="available">Disponível</option>
          <option value="soon">Em breve</option>
        </select>
      </div>
    </div>
  );
};

export default DynamicFilters;
