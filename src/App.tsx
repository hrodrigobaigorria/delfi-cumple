import { useRef, useState, type CSSProperties } from "react";
import "./App.css";

export default function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch {
      console.log("El navegador bloqueó la reproducción automática.");
    }
  };

  return (
    <main className="page">
      <audio ref={audioRef} loop>
        <source src="/delfi.mp3" type="audio/mpeg" />
      </audio>

      <div className="confetti">
        {Array.from({ length: 35 }).map((_, i) => (
          <span key={i} style={{ "--i": i } as CSSProperties} />
        ))}
      </div>

      <section className="card">
        <div className="badge">🎂 8 años</div>

        <h1>Feliz cumpleaños, mi bebé ❤️</h1>

        <p className="intro">
          Hoy es un día muy especial, porque celebramos la alegría más linda de
          nuestra casa.
        </p>

        <div className="letter">
          <p>
            Mi amor, hoy cumplís 8 años y quiero que sepas algo que nunca va a
            cambiar: <strong>siempre vas a ser mi bebé</strong>, aunque sigas
            creciendo y cada día seas más grande.
          </p>

          <p>
            Desde que llegaste a nuestras vidas, llenaste nuestra casa de
            alegría, risas y amor. Sos la luz de mis ojos y una de las razones
            más importantes de mi felicidad.
          </p>

          <p>
            Estoy muy orgulloso de la niña hermosa, inteligente y cariñosa que
            sos. Deseo que hoy tengas un día lleno de sonrisas, abrazos,
            juegos y todo lo que te haga feliz.
          </p>

          <p>
            Papá te ama con todo su corazón, hoy, mañana y para siempre.
          </p>
        </div>

        <h2>Feliz cumpleaños, princesa 💖</h2>

        <p className="signature">Con todo mi amor,<br />Papá 🥰</p>

        <button onClick={toggleMusic}>
          {playing ? "Pausar música ⏸️" : "Tocar música 🎵"}
        </button>
      </section>
    </main>
  );
}