import React from 'react';
import { Star, Users, TrendingUp, Clock } from 'lucide-react';

const SocialProof = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gray-800 rounded-lg">
      <div className="text-center">
        <div className="flex justify-center mb-2">
          <Star className="fill-yellow-400 text-yellow-400" size={24} />
        </div>
        <p className="text-2xl font-bold text-white">4.9/5</p>
        <p className="text-gray-400 text-sm">Avaliação média</p>
        <p className="text-gray-500 text-xs">312 avaliações</p>
      </div>

      <div className="text-center">
        <div className="flex justify-center mb-2">
          <Users className="text-green-500" size={24} />
        </div>
        <p className="text-2xl font-bold text-white">2.4K+</p>
        <p className="text-gray-400 text-sm">Clientes satisfeitos</p>
        <p className="text-gray-500 text-xs">Últimos 12 meses</p>
      </div>

      <div className="text-center">
        <div className="flex justify-center mb-2">
          <TrendingUp className="text-blue-500" size={24} />
        </div>
        <p className="text-2xl font-bold text-white">98%</p>
        <p className="text-gray-400 text-sm">Taxa de retorno</p>
        <p className="text-gray-500 text-xs">Clientes recorrentes</p>
      </div>

      <div className="text-center">
        <div className="flex justify-center mb-2">
          <Clock className="text-orange-500" size={24} />
        </div>
        <p className="text-2xl font-bold text-white">24h</p>
        <p className="text-gray-400 text-sm">Resposta garantida</p>
        <p className="text-gray-500 text-xs">Suporte 24/7</p>
      </div>
    </div>
  );
};

export default SocialProof;
