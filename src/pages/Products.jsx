import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { ArrowLeft } from 'lucide-react'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'

export default function Products() {
    const location = useLocation()
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(location.state?.category || null)
    const [loading, setLoading] = useState(true)

    const categories = [
        { id: 'whey', label: 'WHEY', color: '#ffd900' },
        { id: 'plant', label: 'PLANT', color: '#39d98a' },
        { id: 'gainer', label: 'GAINER', color: '#1b9aaa' },
    ]

    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
        if (selectedCategory) {
            setFilteredProducts(products.filter(p => p.category?.toLowerCase() === selectedCategory))
        } else {
            setFilteredProducts(products)
        }
    }, [selectedCategory, products])

    const fetchProducts = async () => {
        try {
            console.log('Fetching products...')
            const { data, error } = await supabase
                .from('products')
                .select('*')
                .order('created_at', { ascending: false })

            console.log('Fetch result:', { data, error })

            if (error) {
                console.error('Error fetching products:', error)
            } else {
                console.log('Products loaded:', data?.length)
                setProducts(data || [])
            }
        } catch (error) {
            console.error('Exception:', error)
        } finally {
            setLoading(false)
        }
    }

    const getImageUrl = (imagePath) => {
        if (!imagePath) return null
        if (imagePath.startsWith('http')) return imagePath
        return `${supabase.storage.from('product-images').getPublicUrl(imagePath).data.publicUrl}`
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-[#1f4f3f] text-lg font-semibold">Loading products...</div>
            </div>
        )
    }

    return (
        <>
            <TopNav />
            <div className="min-h-screen bg-white">
                {/* Header */}
                <div className="bg-[#1f4f3f] px-4 py-6 sm:px-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium text-sm mb-6">
                        <ArrowLeft size={18} />
                        <span>Back to Home</span>
                    </Link>
                    <h1 className="text-[48px] sm:text-[64px] font-black uppercase text-white shake-condensed leading-none">
                        Products
                    </h1>
                </div>

                {/* Content */}
                <div className="px-4 py-10 sm:px-10">
                    {/* Category Filter */}
                    <div className="max-w-7xl mx-auto mb-12">
                        <div className="flex flex-wrap gap-3 sm:gap-4">
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={`px-6 py-3 rounded-full font-bold uppercase text-sm tracking-wide transition-all ${selectedCategory === null
                                    ? 'bg-[#1f4f3f] text-white shadow-soft'
                                    : 'bg-[#1f4f3f]/10 text-[#1f4f3f] hover:bg-[#1f4f3f]/20'
                                    }`}
                            >
                                All
                            </button>
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-6 py-3 rounded-full font-bold uppercase text-sm tracking-wide transition-all ${selectedCategory === cat.id
                                        ? 'text-[#1f4f3f] shadow-soft'
                                        : 'bg-gray-100 text-[#1f4f3f] hover:bg-gray-200'
                                        }`}
                                    style={{
                                        backgroundColor: selectedCategory === cat.id ? cat.color : undefined,
                                        color: selectedCategory === cat.id ? '#1f4f3f' : undefined,
                                    }}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="max-w-7xl mx-auto">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {filteredProducts.map(product => {
                                    const imageUrl = product.images?.[0] ? getImageUrl(product.images[0]) : null
                                    return (
                                        <Link
                                            key={product.id}
                                            to={`/products/${product.id}`}
                                            className="group rounded-[28px] overflow-hidden bg-white border border-[#1f4f3f]/10 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                                        >
                                            {/* Image Container */}
                                            <div className="relative h-64 sm:h-72 bg-gradient-to-br from-[#1f4f3f]/5 to-[#39d98a]/5 overflow-hidden">
                                                {imageUrl ? (
                                                    <img
                                                        src={imageUrl}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <div className="text-[#1f4f3f]/40 font-semibold">No Image</div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 sm:p-8">
                                                <div className="mb-2">
                                                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide" style={{
                                                        backgroundColor: categories.find(c => c.id === product.category?.toLowerCase())?.color || '#ffd900',
                                                        color: '#1f4f3f',
                                                    }}>
                                                        {product.category || 'General'}
                                                    </span>
                                                </div>

                                                <h3 className="text-[20px] font-black uppercase text-[#1f4f3f] mb-2 line-clamp-2">
                                                    {product.name}
                                                </h3>

                                                <p className="text-[14px] text-[#1f4f3f]/70 mb-4 line-clamp-2">
                                                    {product.description || 'Premium quality product'}
                                                </p>

                                                {product.features && product.features.length > 0 && (
                                                    <ul className="mb-4 space-y-1">
                                                        {product.features.slice(0, 2).map((feature, idx) => (
                                                            <li key={idx} className="text-[12px] text-[#1f4f3f]/60 flex items-center gap-2">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-[#39d98a]" />
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                                <div className="flex items-center justify-between pt-4 border-t border-[#1f4f3f]/10">
                                                    <div className="text-[28px] font-black text-[#1f4f3f]">
                                                        ${product.price}
                                                    </div>
                                                    <button className="px-4 py-2 rounded-[12px] bg-[#1f4f3f] text-white font-bold text-sm uppercase tracking-wide hover:bg-[#1f4f3f]/90 transition-colors">
                                                        View Details
                                                    </button>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-[18px] font-semibold text-[#1f4f3f]/70 mb-4">
                                    No products found in this category
                                </p>
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className="px-6 py-3 rounded-[12px] bg-[#1f4f3f] text-white font-bold uppercase tracking-wide hover:bg-[#1f4f3f]/90 transition-colors"
                                >
                                    View All Products
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
