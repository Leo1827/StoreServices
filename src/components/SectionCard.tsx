import CardProduct from "./CardProduct"

const SectionCard = ({ title, prevTitle, style }: any): JSX.Element => {
  return (
    <section className="my-10">
      {/* 🔹 Encabezado */}
      <div className="flex flex-wrap items-center justify-between mb-6 px-4">
        <h2 className="text-2xl sm:text-3xl font-light text-gray-800">
          {prevTitle}
          <strong className="font-semibold">{title}</strong>
        </h2>

        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-sm sm:text-base px-5 py-2 rounded-lg shadow transition"
          style={style}
        >
          Ver más
        </button>
      </div>

      {/* 🔹 Cards */}
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </section>
  )
}

export default SectionCard
