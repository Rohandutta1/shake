import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { ArrowLeft } from 'lucide-react'

export default function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { signIn } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setLoading(true)

        try {
            const { error } = await signIn(formData.email, formData.password)
            if (error) throw error
            navigate('/')
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
                    <div className="h-16 w-16 rounded-full bg-[#ffd900] flex items-center justify-center shadow-soft">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1f4f3f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2v20M2 12h20" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-center text-[56px] font-black uppercase text-[#1f4f3f] shake-condensed leading-none sm:text-[64px]">
                    Welcome Back
                </h1>
                
                <p className="mt-4 text-center text-[15px] text-[#1f4f3f]/70 font-medium">
                    Don't have an account?{' '}
                    <Link to="/signup" className="font-bold text-[#1f4f3f] underline underline-offset-4 hover:text-[#1f4f3f]/80 transition-colors">
                        Sign up now
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
                                    autoComplete="current-password"
                                    required
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
                                className="w-full flex justify-center py-4 px-4 rounded-[16px] text-[15px] font-black uppercase text-[#1f4f3f] bg-[#ffd900] hover:bg-[#ffd900]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffd900] disabled:opacity-50 transition-all transform active:scale-[0.98] duration-200 shadow-soft"
                            >
                                {loading ? 'Signing in...' : 'Sign In'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
