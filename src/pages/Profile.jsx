import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { ArrowLeft } from 'lucide-react'
import { supabase } from '../lib/supabase'

export default function Profile() {
    const { user, signOut } = useAuth()
    const navigate = useNavigate()
    const [userProfile, setUserProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [editing, setEditing] = useState(false)
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        address: ''
    })

    useEffect(() => {
        if (!user) {
            navigate('/login')
            return
        }

        const fetchUserProfile = async () => {
            try {
                const { data, error } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', user.id)
                    .single()

                if (error && error.code !== 'PGRST116') {
                    console.error('Error fetching profile:', error)
                } else if (data) {
                    setUserProfile(data)
                    setFormData({
                        fullName: data.full_name || '',
                        phone: data.phone || '',
                        address: data.address || ''
                    })
                } else {
                    // Profile doesn't exist, create initial data from auth user
                    const fullName = user.user_metadata?.full_name || ''
                    setFormData({ fullName, phone: '', address: '' })
                }
            } catch (error) {
                console.error('Error:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchUserProfile()
    }, [user, navigate])

    const handleUpdateProfile = async () => {
        try {
            const { error } = await supabase
                .from('profiles')
                .upsert({
                    id: user.id,
                    full_name: formData.fullName,
                    phone: formData.phone,
                    address: formData.address,
                    updated_at: new Date()
                })

            if (error) {
                console.error('Error updating profile:', error)
                alert('Failed to update profile')
            } else {
                setUserProfile({ ...userProfile, ...formData })
                setEditing(false)
                alert('Profile updated successfully!')
            }
        } catch (error) {
            console.error('Error:', error)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-[#1f4f3f] text-lg font-semibold">Loading...</div>
            </div>
        )
    }

    if (!user) {
        return null
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <div className="bg-[#1f4f3f] px-4 py-6 sm:px-10">
                <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium text-sm mb-6">
                    <ArrowLeft size={18} />
                    <span>Back to Home</span>
                </Link>
                <h1 className="text-[48px] sm:text-[56px] font-black uppercase text-white shake-condensed leading-none">
                    My Profile
                </h1>
            </div>

            {/* Content */}
            <div className="flex-1 px-4 py-10 sm:px-10">
                <div className="max-w-2xl mx-auto">
                    {/* Profile Header Card */}
                    <div className="bg-gradient-to-br from-[#1f4f3f]/5 to-[#39d98a]/5 rounded-[32px] p-8 sm:p-10 border border-[#1f4f3f]/10 ring-1 ring-[#1f4f3f]/5 mb-8 shadow-soft">
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#ffd900] to-[#39d98a] flex items-center justify-center shadow-soft ring-4 ring-white">
                                    <div className="text-[40px] font-black text-white">
                                        {user.email?.charAt(0).toUpperCase()}
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-[28px] font-black text-[#1f4f3f] uppercase">
                                        {formData.fullName || 'User'}
                                    </h2>
                                    <p className="text-[14px] text-[#1f4f3f]/70 font-medium">{user.email}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setEditing(!editing)}
                                className="px-4 py-2 rounded-[12px] bg-[#1f4f3f] text-white font-bold text-sm uppercase tracking-wide hover:bg-[#1f4f3f]/90 transition-colors"
                            >
                                {editing ? 'Cancel' : 'Edit'}
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                            <div>
                                <p className="text-[11px] font-bold uppercase text-[#1f4f3f]/60 tracking-wide mb-1">Joined</p>
                                <p className="text-[14px] font-semibold text-[#1f4f3f]">
                                    {new Date(user.created_at).toLocaleDateString()}
                                </p>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold uppercase text-[#1f4f3f]/60 tracking-wide mb-1">Account Status</p>
                                <p className="text-[14px] font-semibold text-[#39d98a]">Active</p>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold uppercase text-[#1f4f3f]/60 tracking-wide mb-1">User Type</p>
                                <p className="text-[14px] font-semibold text-[#1f4f3f]">Customer</p>
                            </div>
                        </div>
                    </div>

                    {/* Profile Details Card */}
                    <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-soft ring-1 ring-[#1f4f3f]/10 mb-8">
                        <h3 className="text-[22px] font-black uppercase text-[#1f4f3f] mb-6">
                            Personal Information
                        </h3>

                        {editing ? (
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-[13px] font-bold uppercase text-[#1f4f3f] tracking-wide mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/80 border-2 border-[#1f4f3f]/10 rounded-[16px] text-[15px] font-medium focus:outline-none focus:border-[#1f4f3f] focus:ring-2 focus:ring-[#1f4f3f]/20 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[13px] font-bold uppercase text-[#1f4f3f] tracking-wide mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={user.email}
                                        disabled
                                        className="w-full px-4 py-3 bg-gray-100 border-2 border-gray-200 rounded-[16px] text-[15px] font-medium text-gray-600 cursor-not-allowed"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[13px] font-bold uppercase text-[#1f4f3f] tracking-wide mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full px-4 py-3 bg-white/80 border-2 border-[#1f4f3f]/10 rounded-[16px] text-[15px] font-medium focus:outline-none focus:border-[#1f4f3f] focus:ring-2 focus:ring-[#1f4f3f]/20 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[13px] font-bold uppercase text-[#1f4f3f] tracking-wide mb-2">
                                        Address
                                    </label>
                                    <textarea
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        placeholder="Your address"
                                        rows="4"
                                        className="w-full px-4 py-3 bg-white/80 border-2 border-[#1f4f3f]/10 rounded-[16px] text-[15px] font-medium focus:outline-none focus:border-[#1f4f3f] focus:ring-2 focus:ring-[#1f4f3f]/20 transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="button"
                                    onClick={handleUpdateProfile}
                                    className="w-full py-4 rounded-[16px] bg-[#39d98a] text-white font-black uppercase tracking-wide hover:bg-[#39d98a]/90 transition-colors shadow-soft"
                                >
                                    Save Changes
                                </button>
                            </form>
                        ) : (
                            <div className="space-y-6">
                                <div className="pb-4 border-b border-[#1f4f3f]/10">
                                    <p className="text-[11px] font-bold uppercase text-[#1f4f3f]/60 tracking-wide mb-2">Full Name</p>
                                    <p className="text-[16px] font-semibold text-[#1f4f3f]">{formData.fullName || 'Not provided'}</p>
                                </div>

                                <div className="pb-4 border-b border-[#1f4f3f]/10">
                                    <p className="text-[11px] font-bold uppercase text-[#1f4f3f]/60 tracking-wide mb-2">Email</p>
                                    <p className="text-[16px] font-semibold text-[#1f4f3f]">{user.email}</p>
                                </div>

                                <div className="pb-4 border-b border-[#1f4f3f]/10">
                                    <p className="text-[11px] font-bold uppercase text-[#1f4f3f]/60 tracking-wide mb-2">Phone Number</p>
                                    <p className="text-[16px] font-semibold text-[#1f4f3f]">{formData.phone || 'Not provided'}</p>
                                </div>

                                <div>
                                    <p className="text-[11px] font-bold uppercase text-[#1f4f3f]/60 tracking-wide mb-2">Address</p>
                                    <p className="text-[16px] font-semibold text-[#1f4f3f]">{formData.address || 'Not provided'}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Danger Zone */}
                    <div className="bg-red-50/50 rounded-[32px] p-8 sm:p-10 border border-red-200/50 ring-1 ring-red-100/50">
                        <h3 className="text-[22px] font-black uppercase text-red-900 mb-4">
                            Danger Zone
                        </h3>
                        <p className="text-[14px] text-red-800/80 font-medium mb-6">
                            Once you sign out, you will need to log in again to access your account.
                        </p>
                        <button
                            onClick={async () => {
                                if (window.confirm('Are you sure you want to sign out?')) {
                                    await signOut()
                                    navigate('/')
                                }
                            }}
                            className="w-full py-4 rounded-[16px] bg-red-600 text-white font-black uppercase tracking-wide hover:bg-red-700 transition-colors shadow-soft"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
