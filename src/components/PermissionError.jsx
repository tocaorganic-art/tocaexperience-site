import React from 'react';
import { AlertCircle, Home, MessageSquare } from 'lucide-react';

export default function PermissionError({ userType, requiredType, onGoHome, onContact }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-amber-100 rounded-full p-4">
            <AlertCircle className="w-12 h-12 text-amber-600" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Sem Permissão</h1>
        
        <p className="text-gray-600 mb-4">
          Esta página requer o tipo de usuário <strong>"{requiredType}"</strong>.
        </p>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 text-left">
          <p className="text-sm text-gray-700">
            <strong>Seu tipo atual:</strong> <span className="text-amber-600 font-semibold">"{userType || 'indefinido'}"</span>
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Se você acredita que deveria ter acesso, entre em contato com o suporte.
          </p>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={onGoHome}
            className="w-full flex items-center justify-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            <Home size={20} />
            <span>Ir para Início</span>
          </button>
          
          <button
            onClick={onContact}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            <MessageSquare size={20} />
            <span>Solicitar Acesso</span>
          </button>
        </div>
      </div>
    </div>
  );
}
