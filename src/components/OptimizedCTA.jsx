import React from 'react';
import { ArrowRight, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const OptimizedCTA = ({ onCtaClick }) => {
  return (
    <div className="space-y-4">
      {/* Primary CTA - High Contrast */}
      <Button
        onClick={() => onCtaClick && onCtaClick('primary')}
        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <Zap size={20} />
        Solicitar Orçamento Agora
        <ArrowRight size={20} />
      </Button>

      {/* Secondary CTA - Urgency */}
      <Button
        onClick={() => onCtaClick && onCtaClick('secondary')}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        ⏰ Apenas 3 datas disponíveis em Dezembro
      </Button>

      {/* Tertiary CTA - Social */}
      <Button
        onClick={() => onCtaClick && onCtaClick('tertiary')}
        className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
      >
        <Heart size={20} />
        Adicionar aos Favoritos
      </Button>

      {/* Trust Badge */}
      <div className="text-center text-gray-400 text-sm pt-2">
        ✓ Pagamento seguro • ✓ Garantia de satisfação • ✓ Cancelamento sem multa
      </div>
    </div>
  );
};

export default OptimizedCTA;
