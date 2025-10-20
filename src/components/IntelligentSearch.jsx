import React, { useState, useEffect } from 'react';
import { Search, X, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const IntelligentSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Dados de exemplo para busca
  const searchableItems = [
    { id: 1, title: 'DJ Set Exclusivo', category: 'Serviço', description: 'Experiência musical personalizada com equipamento Pioneer' },
    { id: 2, title: 'Casamento em Trancoso', category: 'Evento', description: 'Pacote completo para casamentos paradisíacos' },
    { id: 3, title: 'Festa Corporativa', category: 'Evento', description: 'Eventos corporativos com ambiente exclusivo' },
    { id: 4, title: 'Afro House', category: 'Estilo Musical', description: 'Ritmos africanos contemporâneos' },
    { id: 5, title: 'Deep House', category: 'Estilo Musical', description: 'Eletrônico profundo e envolvente' },
    { id: 6, title: 'Organic House', category: 'Estilo Musical', description: 'Fusão de elementos naturais e eletrônicos' },
  ];

  const performSearch = (searchQuery) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }

    setIsLoading(true);
    
    // Simular busca com delay
    setTimeout(() => {
      const filtered = searchableItems.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setResults(filtered);
      setShowResults(true);
      setIsLoading(false);
    }, 300);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    performSearch(value);
  };

  const handleResultClick = (item) => {
    if (onSearch) {
      onSearch(item);
    }
    setShowResults(false);
    setQuery('');
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          onFocus={() => query && setShowResults(true)}
          placeholder="Buscar experiências, eventos, estilos musicais..."
          className="w-full pl-10 pr-10 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              setShowResults(false);
            }}
            className="absolute right-3 top-3 text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-600 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 flex items-center justify-center">
              <Loader className="animate-spin text-green-500" size={20} />
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y divide-gray-700">
              {results.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleResultClick(item)}
                  className="w-full p-4 text-left hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                    <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded">
                      {item.category}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-400">
              Nenhum resultado encontrado para "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IntelligentSearch;
