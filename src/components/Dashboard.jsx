import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simular carregamento de dados do usuário
    const loadUser = async () => {
      try {
        // Aqui você faria uma chamada à API para obter os dados do usuário
        // Por enquanto, vamos simular com dados locais
        const userData = localStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
        } else {
          setError('Usuário não autenticado');
        }
      } catch (err) {
        setError('Erro ao carregar dados do usuário');
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-loading">
        <p>Carregando...</p>
      </div>
    );
  }

  if (!user || user.type !== 'prestador') {
    return (
      <div className="error-message">
        <h1>Acesso Restrito</h1>
        <p>Esta página requer autenticação como prestador de serviços.</p>
        <a href="/login" className="btn-primary">Fazer Login</a>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <h1>Erro</h1>
        <p>{error}</p>
        <a href="/" className="btn-primary">Voltar para Home</a>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h1>Bem-vindo ao Dashboard, {user.name}</h1>
      <p>Gerencie seus serviços e agendamentos aqui.</p>
      
      <section className="dashboard-content">
        <div className="dashboard-card">
          <h2>Meus Serviços</h2>
          <p>Aqui você pode gerenciar seus serviços oferecidos.</p>
          <a href="/meus-servicos" className="btn-secondary">Ver Serviços</a>
        </div>

        <div className="dashboard-card">
          <h2>Agendamentos</h2>
          <p>Visualize e gerencie seus agendamentos.</p>
          <a href="/agendamentos" className="btn-secondary">Ver Agendamentos</a>
        </div>

        <div className="dashboard-card">
          <h2>Perfil</h2>
          <p>Atualize suas informações de perfil.</p>
          <a href="/perfil" className="btn-secondary">Editar Perfil</a>
        </div>

        <div className="dashboard-card">
          <h2>Ganhos</h2>
          <p>Acompanhe seus ganhos e pagamentos.</p>
          <a href="/ganhos" className="btn-secondary">Ver Ganhos</a>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

