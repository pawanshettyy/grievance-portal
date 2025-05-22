import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import {
  Heart,
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Lock,
  Eye,
  EyeOff,
} from 'lucide-react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState('')

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    mood: '',
    severity: '',
    name: 'Your Princess 👸',
    date: new Date().toISOString().split('T')[0]
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const loggedIn = localStorage.getItem('alisha_logged_in')
    if (loggedIn === 'true') {
      setIsLoggedIn(true)
    }
  }, [])

  useEffect(() => {
    emailjs.init("q_9u8VWQ1ag5cTTck") // Replace this
  }, [])

  const VALID_CREDENTIALS = {
    username: 'alisha',
    password: 'ilovepawan'
  }

  const moodOptions = [
    { value: 'angry', label: '😠 Angry', emoji: '😠' },
    { value: 'sad', label: '😢 Sad', emoji: '😢' },
    { value: 'frustrated', label: '😤 Frustrated', emoji: '😤' },
    { value: 'annoyed', label: '🙄 Annoyed', emoji: '🙄' },
    { value: 'disappointed', label: '😞 Disappointed', emoji: '😞' },
    { value: 'pouty', label: '😤 Pouty', emoji: '😤' }
  ]

  const severityLevels = [
    { value: 'cuddles', label: 'Cuddles would fix this 🤗', emoji: '🤗' },
    { value: 'kisi', label: 'Kisi would fix this 💋', emoji: '💋' },
    { value: 'sax-sux', label: 'sax sux would fix this 🍫', emoji: '🍫' },
    { value: 'flowers', label: 'Flowers would fix this 🌹', emoji: '🌹' },
    { value: 'ghumi-ghumi', label: 'Ghumi Ghumi would fix this 💕', emoji: '💕' },
    { value: 'cinemax-panipuri', label: 'A plate of Cinemax Panipuri 🍫', emoji: '🍫' }
  ]

  const handleLogin = (e) => {
    e.preventDefault()
    setLoginError('')

    if (loginData.username === VALID_CREDENTIALS.username &&
      loginData.password === VALID_CREDENTIALS.password) {
      setIsLoggedIn(true)
      localStorage.setItem('Alisha_logged_in', 'true')
    } else {
      setLoginError('Wrong credentials, baby! Try again 🥺')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('Alisha_logged_in')
    setLoginData({ username: '', password: '' })
  }

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }))
    setLoginError('')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.title.trim()) newErrors.title = 'Tell me what\'s wrong, baby 💕'
    if (!formData.description.trim()) newErrors.description = 'I need details so I can fix it! 🥺'
    if (!formData.mood) newErrors.mood = 'How are you feeling, love?'
    if (!formData.severity) newErrors.severity = 'What would make you feel better? 💖'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const templateParams = {
        to_name: 'Alisha',
        from_name: formData.name,
        title: formData.title,
        description: formData.description,
        mood: formData.mood,
        severity: formData.severity,
        date: formData.date,
        grievance_id: `LOVE-${Date.now()}`
      }

      await emailjs.send(
        'service_6kvwgzu',      // Replace this
        'template_dkfrgc1',     // Replace this
        templateParams
      )

      setSubmitStatus('success')
      setFormData({
        title: '',
        description: '',
        mood: '',
        severity: '',
        name: 'Your Princess 👸',
        date: new Date().toISOString().split('T')[0]
      })
    } catch (error) {
      console.error('Error sending grievance:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-purple-100">
        <form onSubmit={handleLogin} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-pink-200 p-8 space-y-6 w-full max-w-sm">
          <div className="text-center">
            <Heart className="h-10 w-10 text-pink-500 mx-auto mb-2" />
            <h2 className="text-2xl font-bold text-pink-700">Welcome back, my Radhaji 💖</h2>
            <p className="text-sm text-gray-600 mt-1">Please enter the magic words to see my heart 💌</p>
          </div>
  
          <div>
            <input
              type="text"
              name="username"
              placeholder="Your name, sweetheart 💕"
              value={loginData.username}
              onChange={handleLoginInputChange}
              className="w-full px-4 py-3 border rounded-2xl text-gray-700 placeholder-gray-400 border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
  
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Secret passcode 💘"
              value={loginData.password}
              onChange={handleLoginInputChange}
              className="w-full px-4 py-3 border rounded-2xl text-gray-700 placeholder-gray-400 border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-pink-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
  
          {loginError && (
            <div className="text-sm text-center text-red-600 font-medium">
              {loginError}
            </div>
          )}
  
          <button
            type="submit"
            className="w-full bg-pink-400 hover:bg-pink-500 text-white py-3 rounded-2xl font-medium transition-colors"
          >
            Enter the Love Portal 💞
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-pink-200">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Heart className="h-8 w-8 text-pink-500" />
              <h1 className="text-3xl font-bold text-gray-800">
                Alisha's Grievance Portal ❤️
              </h1>
            </div>
            <button
              onClick={handleLogout}
              className="text-sm text-pink-600 hover:text-pink-700 underline"
            >
              Logout
            </button>
          </div>
          <p className="text-center text-gray-600 mt-2">
            Tell me what's bothering you, my love 💕
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mb-6 bg-pink-50 border border-pink-200 rounded-2xl p-6 text-center">
            <div className="flex flex-col items-center space-y-3">
              <Heart className="h-12 w-12 text-pink-500" />
              <div>
                <h3 className="text-xl font-bold text-pink-600 mb-2">
                  Thank you, Alisha 💖
                </h3>
                <p className="text-gray-700 mb-2">
                  Your grievance has been sent to<br />
                  <span className="font-semibold">Pawan ❤️</span>
                </p>
                <p className="text-gray-600 text-sm">
                  He will get back to you very soon!<br />
                  (He will think about it)
                </p>
              </div>
              <button
                onClick={() => setSubmitStatus('')}
                className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full font-medium transition-colors"
              >
                Submit Another
              </button>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-4">
            <div className="flex items-center justify-center space-x-2">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <span className="text-red-800 font-medium">
                Oops! Please fix the errors below 🥺
              </span>
            </div>
          </div>
        )}

        {/* Grievance Form */}
        {submitStatus !== 'success' && (
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-pink-200">
            <div className="px-6 py-4 border-b border-pink-100 bg-pink-50/50 rounded-t-3xl">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center justify-center space-x-2">
                <span>Submit a Grievance 🌹</span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Title */}
              <div>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-colors text-gray-700 placeholder-gray-400 ${
                    errors.title ? 'border-red-400' : 'border-gray-300'
                  }`}
                  placeholder="Title"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  className={`w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-colors text-gray-700 placeholder-gray-400 ${
                    errors.description ? 'border-red-400' : 'border-gray-300'
                  }`}
                  placeholder="What's bothering you?"
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                )}
              </div>

              {/* Mood */}
              <div>
                <label className="block text-lg font-medium text-gray-800 mb-3 text-center">
                  Mood:
                </label>
                <div className="flex flex-wrap gap-2 justify-center">
                  {moodOptions.map((mood) => (
                    <button
                      key={mood.value}
                      type="button"
                      onClick={() => handleInputChange({
                        target: { name: 'mood', value: mood.value }
                      })}
                      className={`px-4 py-2 rounded-full border-2 transition-all ${
                        formData.mood === mood.value
                          ? 'border-pink-400 bg-pink-100 text-pink-700'
                          : 'border-gray-300 hover:border-pink-300 text-gray-600'
                      }`}
                    >
                      {mood.emoji}
                    </button>
                  ))}
                </div>
                {errors.mood && (
                  <p className="mt-1 text-sm text-red-600 text-center">{errors.mood}</p>
                )}
              </div>

              {/* Severity */}
              <div>
                <label className="block text-lg font-medium text-gray-800 mb-3 text-center">
                  Severity:
                </label>
                <div className="space-y-2">
                  {severityLevels.map((level) => (
                    <button
                      key={level.value}
                      type="button"
                      onClick={() => handleInputChange({
                        target: { name: 'severity', value: level.value }
                      })}
                      className={`w-full px-4 py-3 rounded-2xl border-2 transition-all text-left ${
                        formData.severity === level.value
                          ? 'border-pink-400 bg-pink-100 text-pink-700'
                          : 'border-gray-300 hover:border-pink-300 text-gray-600'
                      }`}
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
                {errors.severity && (
                  <p className="mt-1 text-sm text-red-600 text-center">{errors.severity}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-pink-400 hover:bg-pink-500 disabled:bg-pink-300 text-white py-4 rounded-2xl font-medium text-lg transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Sending to pawan... 💕</span>
                    </>
                  ) : (
                    <>
                      <span>Submit 💖</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Love Note */}
        <div className="mt-8 bg-pink-50/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-pink-200">
          <Heart className="h-8 w-8 text-pink-500 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-pink-800 mb-2">
            Remember, my Radhaji 💕
          </h3>
          <p className="text-pink-700 text-sm">
            No matter what's bothering you, I'm here to make it better. 
            You're my everything and I'll always take care of you! 🥰
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-pink-50/50 backdrop-blur-sm border-t border-pink-200 mt-12">
        <div className="max-w-2xl mx-auto px-4 py-6 text-center text-pink-600 text-sm">
          <p>Made with 💖 for my Radhaji 💖</p>
        </div>
      </footer>
    </div>
  )
}

export default App