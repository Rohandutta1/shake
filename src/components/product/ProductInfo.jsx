import { useState } from 'react'

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1)
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <div className="flex flex-col gap-6">
      {/* Category & Rating */}
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-[#ffd900] text-[#1f4f3f] rounded-full">
          {product.category}
        </span>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-[#ffd900]' : 'text-black/20'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[12px] font-semibold text-black/60">({product.reviews})</span>
        </div>
      </div>

      {/* Product Name */}
      <div>
        <h1 className="text-[32px] sm:text-[40px] font-black uppercase leading-tight text-[#1f4f3f]">
          {product.name}
        </h1>
        <p className="text-[12px] font-semibold text-black/50 mt-2">
          {product.flavor} • {product.servings} Servings
        </p>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-[36px] font-black text-[#1f4f3f]">
          ${product.price.toFixed(2)}
        </span>
        <span className="text-[18px] font-semibold line-through text-black/40">
          ${product.originalPrice.toFixed(2)}
        </span>
        <span className="text-[14px] font-black px-3 py-1 bg-[#d7ff2f] text-[#1f4f3f] rounded-full">
          -{discount}%
        </span>
      </div>

      {/* Stock Status */}
      <div>
        {product.inStock ? (
          <p className="text-[13px] font-semibold text-[#39d98a]">✓ In Stock</p>
        ) : (
          <p className="text-[13px] font-semibold text-red-500">Out of Stock</p>
        )}
      </div>

      {/* Description */}
      <p className="text-[13px] font-semibold text-black/70 leading-relaxed">
        {product.description}
      </p>

      {/* Features */}
      <div className="bg-[#f3f1ea] rounded-[24px] p-6">
        <h3 className="text-[14px] font-black uppercase tracking-tight text-[#1f4f3f] mb-4">
          Key Features
        </h3>
        <ul className="space-y-2">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-[12px] font-semibold text-black/70">
              <span className="text-[#39d98a] mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <span className="text-[13px] font-semibold text-black/70">Quantity:</span>
        <div className="flex items-center border-2 border-[#1f4f3f] rounded-[12px]">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 font-bold text-[#1f4f3f] hover:bg-[#f3f1ea] transition"
          >
            −
          </button>
          <span className="px-6 py-2 font-bold text-[#1f4f3f]">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 font-bold text-[#1f4f3f] hover:bg-[#f3f1ea] transition"
          >
            +
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 flex-col sm:flex-row">
        <button className="flex-1 bg-[#ffd900] text-[#1f4f3f] px-8 py-4 rounded-[20px] font-black uppercase text-[14px] sm:text-[16px] tracking-tight hover:bg-[#ffd900]/90 transition ring-2 ring-[#ffd900]">
          BUY NOW
        </button>
        <button className="flex-1 border-2 border-[#1f4f3f] text-[#1f4f3f] px-8 py-4 rounded-[20px] font-black uppercase text-[14px] sm:text-[16px] tracking-tight hover:bg-[#1f4f3f] hover:text-white transition">
          ADD TO CART
        </button>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-white rounded-[16px] p-4 ring-1 ring-black/10">
          <p className="text-[11px] font-semibold text-black/60">Free Shipping</p>
          <p className="text-[12px] font-black text-[#1f4f3f] mt-1">On orders $50+</p>
        </div>
        <div className="bg-white rounded-[16px] p-4 ring-1 ring-black/10">
          <p className="text-[11px] font-semibold text-black/60">30-Day Guarantee</p>
          <p className="text-[12px] font-black text-[#1f4f3f] mt-1">Money-back</p>
        </div>
      </div>
    </div>
  )
}
