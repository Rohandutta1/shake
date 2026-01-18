import { classNames } from '../../utils/classNames'

export default function SimilarProducts({ products, onProductSelect }) {
  return (
    <div className="w-full bg-[#f3f1ea] px-0 py-10 sm:px-6 sm:py-12 lg:px-10">
      <h2 className="text-[32px] sm:text-[40px] font-black uppercase text-[#1f4f3f] mb-8">
        Similar Products
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => onProductSelect(product.id)}
            className="group text-left"
          >
            <div
              className={classNames(
                'relative overflow-hidden rounded-[40px] ring-1 ring-black/10 mx-4 sm:mx-0',
                'h-[260px] sm:h-[320px] lg:h-[340px]',
                'transition-transform duration-300 hover:scale-105',
                product.image ? 'bg-[#e9eef0]' : 'bg-gray-200',
              )}
            >
              {product.image && (
                <>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </>
              )}

              {/* Overlay Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f4f3f]/90 via-transparent to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-black text-[14px] uppercase tracking-tight mb-2">
                  {product.category}
                </p>
                <p className="text-white font-bold text-[13px]">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="mt-4 px-4 sm:px-0">
              <p className="font-bold text-[14px] text-[#1f4f3f] group-hover:text-[#ffd900] transition">
                {product.name}
              </p>
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-[#ffd900]' : 'text-black/20'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-[11px] text-black/60 ml-1">({product.reviews})</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
