import { useState, useRef, useEffect } from 'react'
import { MessageCircle, Send, X, Bot, User } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Olá! Sou o assistente virtual da Toca Experience. Como posso ajudá-lo hoje?',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Respostas pré-definidas do chatbot (simulação de IA)
  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase()
    
    if (message.includes('preço') || message.includes('valor') || message.includes('custo')) {
      return 'Os valores dos nossos serviços variam conforme o tipo de evento e duração. Para um orçamento personalizado, posso conectá-lo diretamente com nossa equipe via WhatsApp. Gostaria que eu faça isso?'
    }
    
    if (message.includes('dj') || message.includes('set') || message.includes('música')) {
      return 'Oferecemos DJ sets exclusivos com equipamentos Pioneer de última geração. Nossos estilos incluem Afro House, Deep House e Organic House. Qual estilo mais combina com seu evento?'
    }
    
    if (message.includes('evento') || message.includes('festa') || message.includes('casamento')) {
      return 'Organizamos eventos completos em Trancoso, desde casamentos íntimos até grandes celebrações. Nossos pacotes incluem música, decoração e toda a logística. Que tipo de evento você está planejando?'
    }
    
    if (message.includes('trancoso') || message.includes('local') || message.includes('onde')) {
      return 'Estamos baseados em Trancoso, Bahia, um dos destinos mais paradisíacos do Brasil. Realizamos eventos em praias, casas de luxo e locações exclusivas. Você já tem um local em mente?'
    }
    
    if (message.includes('contato') || message.includes('whatsapp') || message.includes('telefone')) {
      return 'Você pode entrar em contato conosco pelo WhatsApp: +55 21 99773-1321 ou pelo email: tocaorganic@gmail.com. Prefere que eu abra o WhatsApp para você?'
    }
    
    if (message.includes('sim') || message.includes('ok') || message.includes('pode')) {
      return 'Perfeito! Vou abrir o WhatsApp para você falar diretamente com nossa equipe. Eles poderão dar todos os detalhes e fazer um orçamento personalizado.'
    }
    
    if (message.includes('obrigad') || message.includes('valeu') || message.includes('tchau')) {
      return 'Foi um prazer ajudá-lo! Estamos sempre aqui para tornar seu evento inesquecível. Até logo! 🎵'
    }
    
    // Resposta padrão
    return 'Entendo! Para melhor atendê-lo com informações detalhadas sobre nossos serviços, recomendo falar diretamente com nossa equipe especializada. Posso conectá-lo via WhatsApp agora mesmo!'
  }

  const sendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simular delay de resposta da IA
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: getBotResponse(inputMessage),
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/5521997731321?text=Olá! Vim através do chatbot do site e gostaria de mais informações.', '_blank')
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <>
      {/* Botão flutuante do chat */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 shadow-2xl hover:scale-110 transition-all duration-300"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Janela do chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-semibold">Assistente IA</h3>
                <p className="text-sm opacity-90">Toca Experience</p>
              </div>
            </div>
          </div>

          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-800 text-gray-100'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                  <div className={`flex items-center space-x-2 mt-1 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      message.type === 'user' ? 'bg-green-600' : 'bg-gray-700'
                    }`}>
                      {message.type === 'user' ? <User size={12} /> : <Bot size={12} />}
                    </div>
                    <span className="text-xs text-gray-400">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-800 p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Ações rápidas */}
          <div className="p-3 border-t border-gray-700">
            <div className="flex flex-wrap gap-2 mb-3">
              <button
                onClick={() => setInputMessage('Quais são os preços dos serviços?')}
                className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full text-xs transition-colors"
              >
                💰 Preços
              </button>
              <button
                onClick={() => setInputMessage('Que tipos de eventos vocês fazem?')}
                className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full text-xs transition-colors"
              >
                🎉 Eventos
              </button>
              <button
                onClick={openWhatsApp}
                className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-full text-xs transition-colors"
              >
                📱 WhatsApp
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 bg-gray-800 border border-gray-600 rounded-xl px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />
              <Button
                onClick={sendMessage}
                disabled={!inputMessage.trim()}
                className="bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed p-2"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AIChatbot
