import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { MessageCircle, Instagram, Youtube, Music, Facebook, ExternalLink, Play } from 'lucide-react'
import IntelligentSearch from './components/IntelligentSearch.jsx'
import AIChatbot from './components/AIChatbot.jsx'
import './App.css'
import backgroundImage from './assets/trancoso_background.webp';
import Carousel from './components/Carousel';
import trancosLogo from './public/images/trancoso-experience-logo.png';

const carouselImages = [
  '/images/carousel/02_ethos.webp',
  '/images/carousel/03_trajetoria.webp',
  '/images/carousel/04_experiencias.webp',
  '/images/carousel/05_midia.webp',
  '/images/carousel/6d500c3a-f7c0-47bc-bfab-1e9b4abf3239.webp',
];

const carouselAltTexts = [
  'Ethos - Toca Experience',
  'Trajetória - Toca Experience',
  'Experiências - Toca Experience',
  'Mídia - Toca Experience',
  'Tony Monteiro - Toca Experience'
];

function App() {
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const FloatingApps = () => (
    <motion.div 
      className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 space-y-3"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      {/* WhatsApp - Interface de chat com bolhas arredondadas */}
      <a 
        href="https://wa.me/5521997731321" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group block w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-white hover:bg-green-600 transition-all duration-300 shadow-xl hover:scale-110 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600"></div>
        <MessageCircle size={26} className="relative z-10" />
        <div className="absolute top-1 right-1 w-3 h-3 bg-white rounded-full opacity-20"></div>
      </a>
      
      {/* Instagram - Feed com stories em círculos */}
      <a 
        href="https://www.instagram.com/tonyismusic?igsh=b3U2eXFiN2x1eXBq&utm_source=qr" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group block w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-xl relative overflow-hidden"
      >
        <div className="absolute inset-1 bg-gray-900 rounded-xl flex items-center justify-center">
          <Instagram size={24} className="text-white" />
        </div>
      </a>
      
      {/* YouTube - Thumbnails grandes com player central */}
      <a 
        href="https://youtube.com/@tocamusiccrew?si=xuV9LNcSgLfQ7j3X" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group block w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white hover:bg-red-700 transition-all duration-300 shadow-xl hover:scale-110 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700"></div>
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-8 h-6 bg-white rounded-sm flex items-center justify-center">
            <div className="w-0 h-0 border-l-[6px] border-l-red-600 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
          </div>
        </div>
      </a>
      
      {/* Spotify - Fundo escuro com capas de álbuns */}
      <a 
        href="https://open.spotify.com/artist/2r4S2RPdfnx7UPL73jJWlQ?si=fecvQQ8YQuSygm4wPYtcsQ" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group block w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-green-500 hover:bg-gray-900 transition-all duration-300 shadow-xl hover:scale-110 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex space-x-1 mb-1">
            <div className="w-1 h-2 bg-green-500 rounded-full"></div>
            <div className="w-1 h-3 bg-green-500 rounded-full"></div>
            <div className="w-1 h-2 bg-green-500 rounded-full"></div>
          </div>
          <Music size={16} />
        </div>
      </a>
      
      {/* SoundCloud - Cores alaranjadas com waveform */}
      <a 
        href="https://on.soundcloud.com/YjRNAgQXyfWcPrfAX1" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group block w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-white hover:bg-orange-600 transition-all duration-300 shadow-xl hover:scale-110 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600"></div>
        <div className="relative z-10 flex items-end space-x-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
          <div className="w-1 h-4 bg-white rounded-full"></div>
          <div className="w-1 h-3 bg-white rounded-full"></div>
          <div className="w-1 h-5 bg-white rounded-full"></div>
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </a>
      
      {/* Threads - Layout minimalista preto/branco */}
      <a 
        href="https://www.threads.com/@tonyismusic?igshid=NTc4MTIwNjQ2YQ==" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group block w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300 shadow-xl hover:scale-110 relative overflow-hidden border border-gray-700"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-xl font-bold">@</span>
          <div className="w-6 h-px bg-white mt-1"></div>
        </div>
      </a>
      
      {/* Apple Music - Estilo clean com destaques rosa/vermelho */}
      <a 
        href="https://music.apple.com/br/artist/tony-monteiro/373816598" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group block w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-pink-500 hover:scale-110 transition-all duration-300 shadow-xl relative overflow-hidden border border-gray-200"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
            <Music size={18} className="text-white" />
          </div>
        </div>
      </a>
      
      {/* Facebook - Azul como cor primária */}
      <a 
        href="https://www.facebook.com/share/1D2R3NspD9/?mibextid=wwXIfr" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group block w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 shadow-xl hover:scale-110 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>
        <div className="relative z-10">
          <Facebook size={26} />
        </div>
      </a>
      
      {/* Linktree - Botões verticais com degradê */}
      <a 
        href="https://linktr.ee/tocamusiccrew?utm_source=linktree_profile_share&ltsid=4221baf4-c951-46a3-9e49-65bb8d266b0c" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group block w-14 h-14 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-xl relative overflow-hidden"
      >
        <div className="relative z-10 flex flex-col items-center space-y-1">
          <div className="w-6 h-1 bg-white rounded-full"></div>
          <div className="w-6 h-1 bg-white rounded-full"></div>
          <div className="w-6 h-1 bg-white rounded-full"></div>
        </div>
      </a>
    </motion.div>
  )

  const SpotifyPlayer = () => (
    <motion.div 
      className="fixed bottom-4 left-4 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
    >
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 shadow-2xl w-80 border border-gray-800">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
            <Music className="text-white" size={24} />
          </div>
          <div className="flex-1">
            <h4 className="text-white font-semibold text-sm">Tony Monteiro</h4>
            <p className="text-green-400 text-xs">Tocando agora • Spotify</p>
          </div>
          <Button 
            size="sm" 
            className="bg-green-500 hover:bg-green-600 rounded-full w-10 h-10 p-0 shadow-lg hover:scale-110 transition-all duration-200"
            onClick={() => window.open('https://open.spotify.com/artist/2r4S2RPdfnx7UPL73jJWlQ?si=fecvQQ8YQuSygm4wPYtcsQ', '_blank')}
          >
            <Play size={18} />
          </Button>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-3">
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div className="bg-green-500 h-1 rounded-full w-1/3 transition-all duration-300"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>1:23</span>
            <span>3:45</span>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-center space-x-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M13 1.07a1 1 0 0 1 1 1v11.86a1 1 0 0 1-1.5.87L8 11.93l-4.5 2.87A1 1 0 0 1 2 13.93V2.07a1 1 0 0 1 1.5-.87L8 4.07l4.5-2.87A1 1 0 0 1 13 1.07z"/>
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M6.271 5.055a.5.5 0 0 1 .52.038L11 7.055a.5.5 0 0 1 0 .89L6.791 9.907a.5.5 0 0 1-.791-.389V5.482a.5.5 0 0 1 .271-.427z"/>
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src="/images/trancoso-experience-logo.png" alt="Logotipo da Trancoso Experience" className="h-12 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-green-400 hover:text-green-300 px-3 py-2 rounded-md text-sm font-medium bg-green-900/30">Home</a>
                <a href="#ethos" className="text-blue-400 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium bg-blue-900/30">Ethos</a>
                <a href="#narrativa" className="text-orange-400 hover:text-orange-300 px-3 py-2 rounded-md text-sm font-medium bg-orange-900/30">Narrativa</a>
                <a href="#paisagens" className="text-purple-400 hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium bg-purple-900/30">Paisagens Sonoras</a>
                <a href="#servicos" className="text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium bg-cyan-900/30">Nossos Serviços</a>
                <a href="#galeria" className="text-pink-400 hover:text-pink-300 px-3 py-2 rounded-md text-sm font-medium bg-pink-900/30">Galeria</a>
                <a href="#contato" className="text-gray-400 hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium bg-gray-900/30">Contato</a>
              </div>
            </div>
            <Button 
              className="bg-green-500 hover:bg-green-600 text-white"
              onClick={() => window.open('https://wa.me/5521997731321', '_blank')}
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        id="home"
        className="relative h-screen flex items-center justify-center"
      >
        <Carousel images={carouselImages} altTexts={carouselAltTexts} />
        <motion.div 
          className="absolute inset-0 bg-black/40"
          style={{ opacity, zIndex: 1 }}
        ></motion.div>
        <motion.div 
          className="relative z-10 text-center text-white px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Experiência Exclusiva em Trancoso
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Paraíso Exclusivo para Seus Eventos. Trancoso é o cenário perfeito para momentos inesquecíveis.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <motion.span 
              className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Exclusividade
            </motion.span>
            <motion.span 
              className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Luxo
            </motion.span>
            <motion.span 
              className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Paraíso
            </motion.span>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg hover:scale-105 transition-transform"
              onClick={() => window.open('https://wa.me/5521997731321', '_blank')}
            >
              Falar no WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Ethos Section */}
      <section id="ethos" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Ethos</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              A música como linguagem universal que conecta culturas, gerações e experiências. 
              Cada set é uma jornada cuidadosamente construída para criar momentos únicos e memoráveis.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Inovação Sonora</h3>
              <p className="text-gray-300">Fusão entre elementos eletrônicos contemporâneos e brasilidades autênticas</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Conexão Global</h3>
              <p className="text-gray-300">Experiência internacional com adaptação cultural em diversos países</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Excelência Técnica</h3>
              <p className="text-gray-300">Equipamentos Pioneer de última geração e produção impecável</p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrativa Section */}
      <section id="narrativa" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Narrativa</h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-gray-300 space-y-6 text-lg leading-relaxed">
            <p>
              Desde 2015, Tony Monteiro constrói uma trajetória marcada pela busca constante da excelência artística. 
              Sua jornada musical transcende fronteiras geográficas e culturais, levando a energia tropical de Trancoso 
              para palcos internacionais.
            </p>
            <p>
              Com mais de 500 mil streams e apresentações em vários países, Tony estabeleceu residências em clubes 
              renomados do Rio de Janeiro e realizou turnês pela Polinésia Francesa, Europa e América do Sul.
            </p>
            <p>
              Em 2022, seu remix de "Jovem", em colaboração com Jesus Luz e Julio Secchin, tornou-se um sucesso nacional, 
              consolidando sua posição na cena eletrônica brasileira.
            </p>
            <p>
              Atualmente, lidera a Toca Experience, sua label que promove eventos e a união de talentos da cena eletrônica 
              global, sempre com foco na qualidade e inovação sonora.
            </p>
          </div>
        </div>
      </section>

      {/* Paisagens Sonoras Section */}
      <section id="paisagens" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Paisagens Sonoras</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Cada performance é uma paisagem sonora única, construída com elementos que refletem a diversidade 
              cultural e a sofisticação técnica que caracterizam o trabalho de Tony Monteiro.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🥁</div>
              <h3 className="text-2xl font-bold text-white mb-4">Afro House</h3>
              <p className="text-gray-300 mb-6">Grooves profundos e atmosféricos</p>
              <Button 
                className="bg-green-500 hover:bg-green-600"
                onClick={() => window.open('https://open.spotify.com/artist/2r4S2RPdfnx7UPL73jJWlQ?si=fecvQQ8YQuSygm4wPYtcsQ', '_blank')}
              >
                Ouvir no Spotify
              </Button>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🎹</div>
              <h3 className="text-2xl font-bold text-white mb-4">Deep House</h3>
              <p className="text-gray-300 mb-6">Progressões melódicas envolventes</p>
              <Button 
                className="bg-green-500 hover:bg-green-600"
                onClick={() => window.open('https://open.spotify.com/artist/2r4S2RPdfnx7UPL73jJWlQ?si=fecvQQ8YQuSygm4wPYtcsQ', '_blank')}
              >
                Ouvir no Spotify
              </Button>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold text-white mb-4">Organic House</h3>
              <p className="text-gray-300 mb-6">Texturas naturais e orgânicas</p>
              <Button 
                className="bg-green-500 hover:bg-green-600"
                onClick={() => window.open('https://open.spotify.com/artist/2r4S2RPdfnx7UPL73jJWlQ?si=fecvQQ8YQuSygm4wPYtcsQ', '_blank')}
              >
                Ouvir no Spotify
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços Section */}
      <section id="servicos" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Nossos Serviços</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Oferecemos experiências musicais exclusivas e serviços personalizados para tornar seu evento 
              inesquecível em Trancoso.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold text-white mb-4">DJ Sets Exclusivos</h3>
              <p className="text-gray-300">Performances personalizadas com os melhores equipamentos Pioneer e seleção musical única.</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🏖️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Eventos em Trancoso</h3>
              <p className="text-gray-300">Organização completa de eventos em locais paradisíacos com toda infraestrutura necessária.</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🎧</div>
              <h3 className="text-2xl font-bold text-white mb-4">Produção Musical</h3>
              <p className="text-gray-300">Criação de trilhas sonoras personalizadas e remixes exclusivos para seu evento.</p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Explore Nossos Serviços Completos</h3>
            <p className="text-gray-300 mb-6">Descubra todos os nossos serviços exclusivos e como podemos transformar seu evento em uma experiência única.</p>
            <Button 
              size="lg" 
              className="bg-cyan-500 hover:bg-cyan-600"
              onClick={() => window.open('https://wa.me/5521997731321', '_blank')}
            >
              Acessar Portal de Serviços
            </Button>
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Galeria</h2>
            <p className="text-xl text-gray-300">Momentos capturados durante performances e sessões de estúdio</p>
          </div>
        </div>
      </section>

      {/* Guia Inteligente de Serviços */}
      <IntelligentSearch />

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Contato</h2>
            <p className="text-xl text-gray-300">Para booking, colaborações e consultas</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Booking & Management</h3>
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600"
                onClick={() => window.open('https://wa.me/5521997731321', '_blank')}
              >
                WhatsApp
              </Button>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Consultas & Imprensa</h3>
              <a 
                href="mailto:tocaorganic@gmail.com" 
                className="text-cyan-400 hover:text-cyan-300 text-lg"
              >
                tocaorganic@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Apps */}
      <FloatingApps />
      
      {/* Spotify Player */}
      <SpotifyPlayer />
      
      {/* AI Chatbot */}
      <AIChatbot />
      
      {/* Dashboard IA Button */}
      <Button 
        className="fixed bottom-4 right-24 bg-purple-600 hover:bg-purple-700 z-40"
        onClick={() => window.open('https://wa.me/5521997731321', '_blank')}
      >
        📊 Dashboard IA
      </Button>
    </div>
  )
}

export default App
