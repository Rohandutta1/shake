import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { ArrowLeft } from 'lucide-react'

export default function Signup() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fullName: ''
    })
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { signUp } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setLoading(true)

        try {
            const { error } = await signUp(formData.email, formData.password, formData.fullName)
            if (error) throw error
            // Redirect to login or home, depending on whether email confirmation is required
            // For this implementation, we'll assume they need to check email or can login
            alert('Account created! Please check your email for confirmation.')
            navigate('/login')
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans relative">
            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <Link to="/" className="inline-flex items-center justify-center gap-2 text-[#1f4f3f]/60 hover:text-[#1f4f3f] mb-8 transition-colors font-medium text-sm">
                    <ArrowLeft size={18} />
                    <span>Back to Home</span>
                </Link>
                
                <div className="mb-4 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-[#39d98a] flex items-center justify-center shadow-soft">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-center text-[56px] font-black uppercase text-[#1f4f3f] shake-condensed leading-none sm:text-[64px]">
                    Join Us
                </h1>
                
                <p className="mt-4 text-center text-[15px] text-[#1f4f3f]/70 font-medium">
                    Already have an account?{' '}
                    <Link to="/login" className="font-bold text-[#1f4f3f] underline underline-offset-4 hover:text-[#1f4f3f]/80 transition-colors">
                        Sign in here
                    </Link>
                </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <div className="bg-white rounded-[32px] py-10 px-6 shadow-soft ring-1 ring-black/10 sm:px-12">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-50/80 text-red-900 p-4 rounded-[16px] text-sm border border-red-200/50 backdrop-blur-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label htmlFor="fullName" className="block text-[13px] font-bold uppercase text-[#1f4f3f] tracking-wide">
                                Full Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    required
                                    value={formData.fullName}
                                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                                    className="appearance-none block w-full px-4 py-3 bg-white/80 border-2 border-[#1f4f3f]/10 rounded-[16px] placeholder-[#1f4f3f]/40 focus:outline-none focus:border-[#1f4f3f] focus:ring-2 focus:ring-[#1f4f3f]/20 text-[15px] font-medium transition-all duration-200"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-[13px] font-bold uppercase text-[#1f4f3f] tracking-wide">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                    className="appearance-none block w-full px-4 py-3 bg-white/80 border-2 border-[#1f4f3f]/10 rounded-[16px] placeholder-[#1f4f3f]/40 focus:outline-none focus:border-[#1f4f3f] focus:ring-2 focus:ring-[#1f4f3f]/20 text-[15px] font-medium transition-all duration-200"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-[13px] font-bold uppercase text-[#1f4f3f] tracking-wide">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    minLength={6}
                                    value={formData.password}
                                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                                    className="appearance-none block w-full px-4 py-3 bg-white/80 border-2 border-[#1f4f3f]/10 rounded-[16px] placeholder-[#1f4f3f]/40 focus:outline-none focus:border-[#1f4f3f] focus:ring-2 focus:ring-[#1f4f3f]/20 text-[15px] font-medium transition-all duration-200"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-4 px-4 rounded-[16px] text-[15px] font-black uppercase text-[#1f4f3f] bg-[#39d98a] hover:bg-[#39d98a]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#39d98a] disabled:opacity-50 transition-all transform active:scale-[0.98] duration-200 shadow-soft"
                            >
                                {loading ? 'Creating account...' : 'Create Account'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
