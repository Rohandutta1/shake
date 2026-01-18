import { useState } from 'react'
import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'
import SimilarProducts from './SimilarProducts'
import { products, similarProducts } from './productData'

export default function ProductDetail({ productId, onClose, onProductSelect }) {
  const product = products.find(p => p.id === productId)
  const similar = similarProducts(productId)

  if (!product) {
    return null
  }

  return (
    <>
      {/* Modal Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Product Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 z-50 w-full flex justify-end p-4 sm:p-6 bg-white border-b border-black/10"
        >
          <svg className="w-8 h-8 text-[#1f4f3f] hover:text-[#ffd900] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Product Content */}
        <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
          {/* Product Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Gallery */}
            <ProductGallery images={product.images} productName={product.name} />

            {/* Product Info */}
            <ProductInfo product={product} />
          </div>

          {/* Divider */}
          <div className="h-px bg-black/10 my-12" />

          {/* Similar Products */}
          {similar.length > 0 && (
            <SimilarProducts
              products={similar}
              onProductSelect={(id) => {
                onProductSelect(id)
              }}
            />
          )}
        </div>
      </div>
    </>
  )
}
