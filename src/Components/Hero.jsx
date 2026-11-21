import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  // un effet est réquis pour gérer l'ajout d'évenement
  useEffect (() => {
    function handleMouseMove(e) {
    console.log(e.clientX, e.clientY);
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 sm:px-16 lg:px-8 overflow-hidden">

      <div className="absolute inset-0 opacity-30"/>

    </section>
  )
}