import { useState } from "react"
import IconList from "./IconList"

const CardProduct = (): JSX.Element => {
  const images = [
    "../Images/eat-card.png",
    "./Images/fruit.png",
    "./Images/eat-carrusel.png",
  ]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="w-full max-w-sm bg-white rounded-3xl shadow-md overflow-hidden mx-auto my-6 transition-transform hover:scale-[1.02]">
      {/* 🔹 Carrusel */}
      <div className="relative w-full h-50 sm:h-64 overflow-hidden">
        <img
          src={images[current]}
          alt="Producto"
          className="w-full h-full object-cover transition-all duration-500 rounded-t-3xl"
        />

        {/* Flechas */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        >
          ›
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                current === i ? "bg-yellow-500" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Icono favorito */}
        <div className="absolute top-3 right-3 bg-black/40 rounded-full p-2">
          <IconList icon="favorite" color="#fff" size="lg" />
        </div>

        {/* Tooltip o etiqueta */}
        <div className="absolute top-3 left-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
          Taquiza
        </div>
      </div>

      {/* 🔹 Descripción */}
      <div className="p-4">
        <div className="relative flex items-start">
          <img
            src="./Images/symbol-list.png"
            alt=""
            className="w-7 h-7 absolute left-0 top-1"
          />
          <p className="ml-9 text-gray-700 text-sm font-medium leading-snug">
            Lorem ipsum dolor sit amet, sed do consectet
          </p>
        </div>

        {/* 🔹 Título + Check */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-gray-800 font-semibold text-sm sm:text-base">
            Tacos “El tamal”
          </span>
          <svg
            width="18"
            height="18"
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

        {/* 🔹 Precio y botón */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-gray-900 text-base sm:text-lg font-semibold">
            $ <b>+100.00 COP</b>
          </span>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm sm:text-base px-5 py-2 rounded transition">
            Ver perfil
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardProduct
