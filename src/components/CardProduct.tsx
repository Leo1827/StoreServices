import { useState } from "react"
import IconList from "./IconList"

// IMÁGENES COLOMBIANAS PARA EL CARRUSEL
const imagesColombia = [
  "https://images.pexels.com/photos/18196354/pexels-photo-18196354.jpeg?auto=compress&cs=tinysrgb&w=800", // Arepa
  "https://images.pexels.com/photos/6279891/pexels-photo-6279891.jpeg?auto=compress&cs=tinysrgb&w=800", // Bandeja paisa
  "https://images.pexels.com/photos/5966439/pexels-photo-5966439.jpeg?auto=compress&cs=tinysrgb&w=800", // Empanadas
  "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800", // Café colombiano
];

// INFORMACIÓN DEL PRODUCTO (COLOMBIANO)
const productInfo = {
  etiqueta: "Comida Colombiana",
  descripcion: "Comida típica colombiana preparada con ingredientes frescos.",
  titulo: "Arepas “Doña María”",
  precio: 12000,
  icono: "/Images/symbol-list.png",
};

const CardProduct = (): JSX.Element => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % imagesColombia.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + imagesColombia.length) % imagesColombia.length);

  return (
    <div className="w-full max-w-[320px] bg-white rounded-2xl shadow-md overflow-hidden mx-auto hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">

      {/* Imagen / Carrusel */}
      <div className="relative w-full h-48 sm:h-52">
        <img
          src={imagesColombia[current]}
          alt="Comida Colombiana"
          className="w-full h-full object-cover transition-all duration-500"
        />

        {/* Indicadores */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
          {imagesColombia.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full cursor-pointer transition ${
                current === i ? "bg-yellow-500" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Flechas */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-2 py-1 rounded-full text-sm"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-2 py-1 rounded-full text-sm"
        >
          ›
        </button>

        {/* Icono favorito */}
        <div className="absolute top-2 right-2 bg-black/40 p-1.5 rounded-full">
          <IconList icon="favorite" color="#fff" size="sm" />
        </div>

        {/* Etiqueta */}
        <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2.5 py-0.5 rounded-full text-xs font-semibold shadow">
          {productInfo.etiqueta}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-3">
        {/* Descripción */}
        <div className="flex items-start gap-2">
          <img
            src={productInfo.icono}
            alt=""
            className="w-5 h-5 mt-1 opacity-80"
          />
          <p className="text-gray-600 text-xs leading-tight">
            {productInfo.descripcion}
          </p>
        </div>

        {/* Título */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-gray-900 font-semibold text-sm">
            {productInfo.titulo}
          </span>

          {/* Check */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 101 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M98.1982 49.3101C94.0373 44.8549..."
              fill="#F9A823"
            />
          </svg>
        </div>

        {/* Precio + Botón */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-gray-900 text-sm font-semibold">
            <b>${productInfo.precio.toLocaleString()}</b> COP
          </span>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-medium px-4 py-1.5 rounded">
            Ver perfil
          </button>
        </div>
      </div>

    </div>
  );
};

export default CardProduct;
