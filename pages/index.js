import { useState, useEffect } from 'react';

export default function Home() {
  const hellos = {
    "Português": "Olá Mundo 😄",
    "Inglês": "Hello World 😄",
    "Espanhol": "Hola Mundo 😄",
    "Francês": "Bonjour le Monde 😄",
    "Alemão": "Hallo Welt 😄",
    "Italiano": "Ciao Mondo 😄",
    "Japonês": "こんにちは世界 😄 (Konnichiwa Sekai)",
    "Coreano": "안녕하세요 세계 😄 (Annyeonghaseyo Segye)",
    "Árabe": "مرحبا بالعالم 😄 (Marhaban bialalam)"
  };

  const languages = Object.keys(hellos);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % languages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* GIF no lugar do título */}
      <img 
        src="https://i0.wp.com/media4.giphy.com/media/dK23dhZ6xdg8E/giphy.gif" 
        alt="Hello World GIF" 
        style={{ width: '250px', marginBottom: '20px' }}
      />

      <div style={{ fontSize: '2em', margin: '20px 0' }}>
        <strong>{languages[currentIndex]}:</strong> {hellos[languages[currentIndex]]}
      </div>
    </div>
  );
}

