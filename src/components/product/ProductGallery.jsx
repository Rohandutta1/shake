import { useState } from 'react'

export default function ProductGallery({ images, productName }) {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-[40px] bg-[#e9eef0] ring-1 ring-black/10 h-[400px] sm:h-[500px]">
        <img
          src={mainImage}
          alt={productName}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setMainImage(img)}
            className={`relative overflow-hidden rounded-[20px] w-20 h-20 ring-1 transition-all ${
              mainImage === img
                ? 'ring-[#ffd900] ring-2'
                : 'ring-black/10 hover:ring-black/20'
            }`}
          >
            <img
              src={img}
              alt={`${productName} ${idx + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
