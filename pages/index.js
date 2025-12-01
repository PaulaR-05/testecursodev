"use client";
import dynamic from "next/dynamic";

const BrasilMap = dynamic(() => import("../components/BrasilMap.js"), {
  ssr: false,
});

export default function Home() {
  const dogs = [
    {
      nome: "Thor",
      idade: "2 anos",
      raca: "Golden Retriever",
      comportamento: "Brincalhão, carinhoso e adora crianças!",
      cidade: "São Paulo - SP",
      coordenadas: [-46.6333, -23.5505],
      imagem:
        "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
    },
    {
      nome: "Luna",
      idade: "3 anos",
      raca: "Vira-lata",
      comportamento: "Calma, protetora e adora cochilos ao sol ☀️",
      cidade: "Curitiba - PR",
      coordenadas: [-49.2731, -25.4278],
      imagem:
        "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80",
    },
    {
      nome: "Max",
      idade: "1 ano e 6 meses",
      raca: "Labrador",
      comportamento: "Super energético e ama brincar com bolinhas 🎾",
      cidade: "Rio de Janeiro - RJ",
      coordenadas: [-43.1729, -22.9068],
      imagem:
        "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=800&q=80",
    },
    {
      nome: "Maya",
      idade: "4 anos",
      raca: "Border Collie",
      comportamento: "Inteligente, ativa e muito obediente 🧠🐾",
      cidade: "Belo Horizonte - MG",
      coordenadas: [-43.9378, -19.9208],
      imagem:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff8f0",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          color: "#ff7f50",
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        🐶 Adoção de Pets - Encontre seu novo amigo!
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          justifyItems: "center",
          marginBottom: "3rem",
        }}
      >
        {dogs.map((dog, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#fff",
              borderRadius: "15px",
              padding: "1.5rem",
              maxWidth: "300px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <img
              src={dog.imagem}
              alt={`Foto de ${dog.nome}`}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "15px",
                marginBottom: "1rem",
              }}
            />
            <h3 style={{ color: "#ff7f50", marginBottom: "0.5rem" }}>
              {dog.nome}
            </h3>
            <p>
              <strong>🎂 Idade:</strong> {dog.idade}
            </p>
            <p>
              <strong>🐕 Raça:</strong> {dog.raca}
            </p>
            <p>
              <strong>💬 Perfil:</strong> {dog.comportamento}
            </p>
            <p>
              <strong>📍 Cidade:</strong> {dog.cidade}
            </p>
            <button
              style={{
                marginTop: "1rem",
                backgroundColor: "#ff7f50",
                color: "white",
                border: "none",
                padding: "0.6rem 1.2rem",
                borderRadius: "10px",
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
              onClick={() =>
                alert(`Você demonstrou interesse em adotar ${dog.nome}!`)
              }
            >
              Quero Adotar ❤️
            </button>
          </div>
        ))}
      </div>

      {/* Mapa carregado dinamicamente */}
      <BrasilMap dogs={dogs} />
    </div>
  );
}
