import { useRef } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Utensils,
  GlassWater,
  PartyPopper,
  Camera,
  Music,
  Flower2,
  Gift,
  Users,
  Building2,
  Car,
  Palette,
} from 'lucide-react'

const CarrouselCategories = (): JSX.Element => {
  const carouselRef = useRef<HTMLDivElement | null>(null)

  // 🔹 Categorías adaptadas a una plataforma de servicios / eventos
  const categorys = [
    { id: 1, name: 'Eventos', icon: <CalendarDays className="w-8 h-8 text-sky-500" /> },
    { id: 2, name: 'Comida', icon: <Utensils className="w-8 h-8 text-rose-400" /> },
    { id: 3, name: 'Bebidas', icon: <GlassWater className="w-8 h-8 text-cyan-400" /> },
    { id: 4, name: 'Decoración', icon: <Flower2 className="w-8 h-8 text-amber-400" /> },
    { id: 5, name: 'Fotografía', icon: <Camera className="w-8 h-8 text-indigo-400" /> },
    { id: 6, name: 'Música / DJ', icon: <Music className="w-8 h-8 text-violet-400" /> },
    { id: 7, name: 'Fiestas Temáticas', icon: <PartyPopper className="w-8 h-8 text-pink-400" /> },
    { id: 8, name: 'Regalos', icon: <Gift className="w-8 h-8 text-teal-400" /> },
    { id: 9, name: 'Salones / Lugares', icon: <Building2 className="w-8 h-8 text-orange-400" /> },
    { id: 10, name: 'Transporte', icon: <Car className="w-8 h-8 text-lime-500" /> },
    { id: 11, name: 'Equipo Humano', icon: <Users className="w-8 h-8 text-emerald-500" /> },
    { id: 12, name: 'Diseño / Ambientación', icon: <Palette className="w-8 h-8 text-blue-400" /> },
  ]

  // 🔹 Movimiento del carrusel
  const scroll = (direction: 'left' | 'right') => {
    const container = carouselRef.current
    if (container) {
      const scrollAmount = container.clientWidth * 0.8
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="w-full bg-[#FCFCFA] py-2 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto relative">
        {/* 🔹 Flecha Izquierda */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md z-10 hidden md:flex transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* 🔹 Carrusel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth gap-6 px-6"
          style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // Edge antiguos
          }}
        >
          {/* Ocultar scrollbar en navegadores WebKit */}
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {categorys.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center justify-center flex-shrink-0 min-w-[100px] cursor-pointer"
            >
              <div className="w-15 h-15 flex items-center justify-center bg-gray-50 rounded-full shadow-sm hover:shadow-md hover:bg-gray-100 transition-all duration-300">
                {category.icon}
              </div>
              <p className="text-sm font-medium text-gray-700 mt-2 text-center">
                {category.name}
              </p>
            </div>
          ))}
        </div>

        {/* 🔹 Flecha Derecha */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md z-10 hidden md:flex transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </section>
  )
}

export default CarrouselCategories
