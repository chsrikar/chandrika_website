import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const ref = useRef(null)
    const formRef = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        try {
            // EmailJS configuration from environment variables
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

            // Check if environment variables are configured
            if (!serviceId || !templateId || !publicKey ||
                serviceId === 'your_service_id_here') {
                throw new Error('EmailJS not configured. Please set up your .env file.')
            }

            // Send email using EmailJS
            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            )

            setIsSubmitting(false)
            setSubmitted(true)
            setFormData({ name: '', email: '', message: '' })

            // Reset submitted state after 3 seconds
            setTimeout(() => setSubmitted(false), 3000)
        } catch (err) {
            setIsSubmitting(false)
            setError(err.message || 'Failed to send message. Please try again.')
            console.error('EmailJS Error:', err)

            // Clear error after 5 seconds
            setTimeout(() => setError(null), 5000)
        }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    }

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/chandrikadurga/',
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            url: 'https://github.com/chandrikadurga',
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
        },
        {
            name: 'Email',
            url: 'mailto:chandrikadurga6@gmail.com',
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
    ]

    return (
        <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gold/5 rounded-full filter blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gold/5 rounded-full filter blur-3xl" />
            </div>

            <motion.div
                className="max-w-4xl mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Section Title */}
                <motion.div className="text-center mb-8 sm:mb-12 md:mb-16" variants={itemVariants}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                        Let's connect and discuss opportunities in product management, business development, or community building.
                    </p>
                    <div className="gold-separator" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                    {/* Contact Form */}
                    <motion.div variants={itemVariants}>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
                                    Your Name
                                </label>
                                <motion.input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-black/60 backdrop-blur-sm border-2 border-gold/30 rounded-lg text-white text-sm sm:text-base placeholder-gray-600 focus:border-gold focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300"
                                    placeholder="John Doe"
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
                                    Email Address
                                </label>
                                <motion.input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-black border-2 border-gold/30 rounded-lg text-white text-sm sm:text-base placeholder-gray-600 focus:border-gold focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300"
                                    placeholder="john@example.com"
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </div>

                            {/* Message Input */}
                            <div>
                                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
                                    Message
                                </label>
                                <motion.textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-black border-2 border-gold/30 rounded-lg text-white text-sm sm:text-base placeholder-gray-600 focus:border-gold focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project or opportunity..."
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${submitted
                                    ? 'bg-green-500 text-white'
                                    : 'bg-black border-2 border-gold text-gold hover:bg-gold hover:text-black'
                                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                                whileHover={{ scale: submitted ? 1 : 1.02, boxShadow: submitted ? 'none' : '0 0 30px rgba(212, 175, 55, 0.3)' }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : submitted ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Message Sent!
                                    </span>
                                ) : (
                                    'Send Message'
                                )}
                            </motion.button>

                            {/* Error Message */}
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-3 sm:p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-xs sm:text-sm text-center"
                                >
                                    {error}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="flex flex-col justify-center mt-8 md:mt-0">
                        <div className="space-y-6 sm:space-y-8">
                            <div>
                                <h3 className="text-lg sm:text-xl font-heading font-semibold text-white mb-3 sm:mb-4">
                                    Let's Build Something Together
                                </h3>
                                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                    I'm always open to discussing new opportunities, collaborations, or simply having a conversation about product management and business development.
                                </p>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="text-xs sm:text-sm font-semibold text-gold mb-3 sm:mb-4 uppercase tracking-wider">Connect With Me</h4>
                                <div className="flex gap-3 sm:gap-4">
                                    {socialLinks.map((link, index) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-gold/30 rounded-lg text-gray-400 hover:text-gold hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300"
                                            whileHover={{ y: -3, scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 + 0.5 }}
                                        >
                                            {link.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Info */}
                            <div className="p-4 sm:p-6 bg-black/60 backdrop-blur-sm border border-gray-800/50 rounded-xl">
                                <div className="flex items-center gap-2 sm:gap-3 text-gray-400">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-xs sm:text-sm">Available for opportunities</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact
