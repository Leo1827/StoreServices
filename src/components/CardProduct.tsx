import { useState } from "react"
import IconList from "./IconList"

const CardProduct = (): JSX.Element => {
  const images = [
    "../Images/eat-card.png",
    "./Images/fruit.png",
    "./Images/eat-carrusel.png",
  ]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="w-full max-w-[320px] bg-white rounded-2xl shadow-md overflow-hidden mx-auto hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
      {/* 🔹 Imagen / Carrusel */}
      <div className="relative w-full h-48 sm:h-52">
        <img
          src={images[current]}
          alt="Producto"
          className="w-full h-full object-cover transition-all duration-500"
        />

        {/* Indicadores */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
          {images.map((_, i) => (
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
          Taquiza
        </div>
      </div>

      {/* 🔹 Contenido */}
      <div className="p-3">
        {/* Descripción */}
        <div className="flex items-start gap-2">
          <img
            src="./Images/symbol-list.png"
            alt=""
            className="w-5 h-5 mt-1 opacity-80"
          />
          <p className="text-gray-600 text-xs leading-tight">
            Lorem ipsum dolor sit amet, sed do consectet.
          </p>
        </div>

        {/* Título */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-gray-900 font-semibold text-sm">
            Tacos “El tamal”
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 101 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M98.1982 49.3101C94.0373 44.8549 92.8987 38.3181 95.3034 32.6906C98.0318 26.3052 93.9022 19.0645 87.0739 18.2632C81.0569 17.5566 76.0342 13.2909 74.3027 7.416C72.3373 0.748998 64.5758 -2.11017 58.8369 1.71872C53.7791 5.09235 47.2226 5.09235 42.1648 1.71872C36.4259 -2.11017 28.6643 0.750314 26.6989 7.416C24.9675 13.2909 19.9448 17.5579 13.9277 18.2632C7.10082 19.0645 2.97114 26.3052 5.69826 32.6906C8.10302 38.3181 6.96433 44.8549 2.80345 49.3101C-1.91767 54.3665 -0.483913 62.5993 5.66187 65.7164C11.0771 68.4624 14.3554 74.211 13.9979 80.3319C13.5924 87.2765 19.9188 92.6515 26.6054 91.0396C32.4977 89.6199 38.659 91.8896 42.2714 96.8119C46.3699 102.396 54.6305 102.396 58.729 96.8119C62.3413 91.8909 68.5027 89.6199 74.395 91.0396C81.0816 92.6501 87.408 87.2765 87.0024 80.3319C86.645 74.211 89.9233 68.4637 95.3385 65.7164C101.483 62.5993 102.918 54.3665 98.1969 49.3101H98.1982ZM76.1706 39.4865L46.8989 74.1557C46.3101 74.8531 45.4613 75.2702 44.5552 75.3057C44.5123 75.307 44.4707 75.3083 44.4279 75.3083C43.5673 75.3083 42.7406 74.9636 42.1297 74.3452L25.0039 57.0099C23.7352 55.7257 23.7352 53.6429 25.0039 52.3574C26.2726 51.0719 28.3303 51.0732 29.6003 52.3574L44.2407 67.1769L71.2298 35.2116C72.3958 33.83 74.447 33.6682 75.8119 34.8484C77.1767 36.0287 77.3366 38.105 76.1706 39.4865Z"
              fill="#F9A823"
            />
          </svg>
        </div>

        {/* Precio + Botón */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-gray-900 text-sm font-semibold">
            <b>$100.00</b> COP
          </span>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-medium px-4 py-1.5 rounded">
            Ver perfil
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardProduct
