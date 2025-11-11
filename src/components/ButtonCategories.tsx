import { Link } from 'react-router-dom'

interface ItemCategory {
  imgBg: string
  description: string
  uid: string
}

const ButtonCategories = (): JSX.Element => {
  // 🔹 Datos de prueba (array local)
  const catalog: ItemCategory[] = [
    {
      uid: 'comida',
      description: 'Comida',
      imgBg: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
    },
    {
      uid: 'bebidas',
      description: 'Bebidas',
      imgBg: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=800',
    },
    {
      uid: 'decoracion',
      description: 'Decoración',
      imgBg: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
    },
    {
      uid: 'fotografia',
      description: 'Fotografía',
      imgBg: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
    },
  ]

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Explora las categorías
        </h2>

        {/* 🔹 Grid de categorías */}
        <div className="grid grid-cols-2 mt-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-5">
          {catalog.map((item, i) => (
            <Link
              to={`/category/${item.uid}`}
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Imagen de fondo */}
              <img
                src={item.imgBg}
                alt={item.description}
                className="w-full h-20 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

              {/* Texto */}
              <p className="absolute bottom-3 left-0 right-0 text-center text-white text-sm font-medium tracking-wide drop-shadow-md">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ButtonCategories
