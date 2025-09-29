import { useState, useEffect } from 'react'
import { Search, Filter, MapPin, Star, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const IntelligentSearch = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    category: 'all',
    location: 'all',
    priceRange: 'all'
  })
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Mock data para demonstração
  const mockServices = [
    {
      id: 1,
      title: 'DJ Set Exclusivo - Sunset em Trancoso',
      category: 'dj-sets',
      location: 'Trancoso',
      price: 'Premium',
      rating: 5.0,
      duration: '4 horas',
      description: 'Performance exclusiva ao pôr do sol com vista para o mar, equipamentos Pioneer de última geração.',
      image: '/api/placeholder/300/200',
      tags: ['sunset', 'beach', 'premium', 'pioneer']
    },
    {
      id: 2,
      title: 'Evento Corporativo - Casa na Praia',
      category: 'eventos',
      location: 'Trancoso',
      price: 'Premium',
      rating: 4.9,
      duration: '6 horas',
      description: 'Organização completa de eventos corporativos em locações paradisíacas.',
      image: '/api/placeholder/300/200',
      tags: ['corporativo', 'praia', 'completo']
    },
    {
      id: 3,
      title: 'Produção Musical Personalizada',
      category: 'producao',
      location: 'Online',
      price: 'Médio',
      rating: 4.8,
      duration: '2-4 semanas',
      description: 'Criação de trilhas sonoras exclusivas e remixes personalizados.',
      image: '/api/placeholder/300/200',
      tags: ['remix', 'trilha', 'personalizado']
    }
  ]

  // Simulação de busca inteligente
  useEffect(() => {
    if (searchQuery.length > 0) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        const filtered = mockServices.filter(service => 
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        setSearchResults(filtered)
        setIsLoading(false)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setSearchResults(mockServices)
    }
  }, [searchQuery])

  const ServiceCard = ({ service }) => (
    <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 hover:scale-105 border border-gray-700">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
          <p className="text-gray-300 text-sm mb-3">{service.description}</p>
        </div>
        <div className="flex items-center space-x-1 text-yellow-400">
          <Star size={16} fill="currentColor" />
          <span className="text-sm font-medium">{service.rating}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <MapPin size={14} />
            <span>{service.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{service.duration}</span>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          service.price === 'Premium' ? 'bg-purple-900 text-purple-300' :
          service.price === 'Médio' ? 'bg-blue-900 text-blue-300' :
          'bg-green-900 text-green-300'
        }`}>
          {service.price}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {service.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
            #{tag}
          </span>
        ))}
      </div>
      
      <Button 
        className="w-full bg-green-500 hover:bg-green-600"
        onClick={() => window.open('https://wa.me/5521997731321?text=Olá! Gostaria de saber mais sobre: ' + encodeURIComponent(service.title), '_blank')}
      >
        Solicitar Orçamento
      </Button>
    </div>
  )

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Guia Inteligente de Serviços</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Encontre o serviço perfeito para seu evento com nossa busca inteligente alimentada por IA
          </p>
        </div>
        
        {/* Barra de Busca */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Busque por serviços, localização, tipo de evento..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
        
        {/* Filtros */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex items-center space-x-2">
              <Filter size={16} className="text-gray-400" />
              <span className="text-gray-400 text-sm">Filtros:</span>
            </div>
            
            <select 
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">Todas as Categorias</option>
              <option value="dj-sets">DJ Sets</option>
              <option value="eventos">Eventos</option>
              <option value="producao">Produção Musical</option>
            </select>
            
            <select 
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">Todas as Localizações</option>
              <option value="trancoso">Trancoso</option>
              <option value="online">Online</option>
              <option value="rio">Rio de Janeiro</option>
            </select>
            
            <select 
              value={filters.priceRange}
              onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">Todas as Faixas de Preço</option>
              <option value="basico">Básico</option>
              <option value="medio">Médio</option>
              <option value="premium">Premium</option>
            </select>
          </div>
        </div>
        
        {/* Resultados */}
        <div className="max-w-6xl mx-auto">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
              <p className="text-gray-400 mt-4">Buscando serviços...</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white">
                  {searchResults.length} serviços encontrados
                </h3>
                {searchQuery && (
                  <Button 
                    variant="outline" 
                    onClick={() => setSearchQuery('')}
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    Limpar busca
                  </Button>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchResults.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
              
              {searchResults.length === 0 && searchQuery && (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">Nenhum serviço encontrado para "{searchQuery}"</p>
                  <p className="text-gray-500 text-sm mt-2">Tente usar termos diferentes ou entre em contato conosco</p>
                  <Button 
                    className="mt-4 bg-green-500 hover:bg-green-600"
                    onClick={() => window.open('https://wa.me/5521997731321', '_blank')}
                  >
                    Falar com Especialista
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default IntelligentSearch
