import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import ProductDetail from '../components/product/ProductDetail'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'

export default function ProductDetailPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const [similarProducts, setSimilarProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchProductDetails()
    }, [id])

    const fetchProductDetails = async () => {
        try {
            setLoading(true)
            setError(null)

            // Fetch the main product
            const { data: productData, error: productError } = await supabase
                .from('products')
                .select('*')
                .eq('id', id)
                .single()

            if (productError) throw productError

            if (!productData) {
                setError('Product not found')
                return
            }

            setProduct(productData)

            // Fetch similar products (same category, excluding current product)
            const { data: similarData, error: similarError } = await supabase
                .from('products')
                .select('*')
                .eq('category', productData.category)
                .neq('id', id)
                .limit(3)

            if (similarError) {
                console.error('Error fetching similar products:', similarError)
                setSimilarProducts([])
            } else {
                setSimilarProducts(similarData || [])
            }
        } catch (err) {
            console.error('Error fetching product:', err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const getImageUrl = (imagePath) => {
        if (!imagePath) return null
        if (imagePath.startsWith('http')) return imagePath
        return `${supabase.storage.from('product-images').getPublicUrl(imagePath).data.publicUrl}`
    }

    const handleClose = () => {
        navigate('/products')
    }

    const handleProductSelect = (productId) => {
        navigate(`/products/${productId}`)
    }

    if (loading) {
        return (
            <>
                <TopNav />
                <div className="min-h-screen bg-white flex items-center justify-center">
                    <div className="text-[#1f4f3f] text-lg font-semibold">Loading product...</div>
                </div>
                <Footer />
            </>
        )
    }

    if (error || !product) {
        return (
            <>
                <TopNav />
                <div className="min-h-screen bg-white flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-[#1f4f3f] text-lg font-semibold mb-4">
                            {error || 'Product not found'}
                        </div>
                        <button
                            onClick={handleClose}
                            className="px-6 py-3 bg-[#1f4f3f] text-white rounded-[12px] font-bold uppercase hover:bg-[#1f4f3f]/90 transition"
                        >
                            Back to Products
                        </button>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

    // Transform product data to match expected format
    const transformedProduct = {
        ...product,
        images: product.images?.map(img => getImageUrl(img)).filter(Boolean) || [],
        image: product.images?.[0] ? getImageUrl(product.images[0]) : null,
        rating: product.rating || 4.5,
        reviews: product.reviews || 0,
        originalPrice: product.original_price || product.price * 1.5,
        inStock: product.in_stock !== false,
        flavor: product.flavor || 'Classic',
        servings: product.servings || 30,
    }

    const transformedSimilarProducts = similarProducts.map(p => ({
        ...p,
        image: p.images?.[0] ? getImageUrl(p.images[0]) : null,
        rating: p.rating || 4.5,
        reviews: p.reviews || 0,
    }))

    return (
        <>
            <TopNav />
            <ProductDetail
                product={transformedProduct}
                similarProducts={transformedSimilarProducts}
                onClose={handleClose}
                onProductSelect={handleProductSelect}
            />
            <Footer />
        </>
    )
}
