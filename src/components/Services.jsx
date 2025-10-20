import React from 'react';

const Services = () => {
  const servicos = [
    {
      id: 1,
      nome: "Garçom Profissional",
      img: "/assets/garcom-praia.webp",
      alt: "Garçom profissional vestindo uniforme branco impecável, servindo em evento de luxo na praia de Trancoso durante o pôr do sol",
      preco: "R$ 150/hora"
    },
    {
      id: 2,
      nome: "Eletricista Certificado",
      img: "/assets/eletricista-trabalho.webp",
      alt: "Eletricista profissional realizando instalação elétrica segura em residência de alto padrão em Trancoso",
      preco: "R$ 120/hora"
    },
    {
      id: 3,
      nome: "Babá Experiente",
      img: "/assets/baba-crianca.webp",
      alt: "Babá qualificada brincando com crianças em ambiente seguro e confortável",
      preco: "R$ 80/hora"
    }
  ];

  return (
    <main>
      <header>
        <h1>MeAjudaToca - Conectamos você aos melhores serviços da região</h1>
        <p>Garçom, Eletricista, Babá e muito mais para sua experiência em Trancoso</p>
      </header>
      
      <section aria-labelledby="services-title">
        <h2 id="services-title">Serviços em Destaque</h2>
        <div className="services-grid">
          {servicos.map((servico) => (
            <article key={servico.id}>
              <img 
                src={servico.img}
                alt={servico.alt}
                width="300"
                height="200"
                loading="lazy"
              />
              <h3>{servico.nome}</h3>
              <div className="service-price">{servico.preco}</div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;

