import { motion } from 'framer-motion'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-900/50 bg-black/60 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="text-lg sm:text-xl font-heading font-bold gradient-text"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        DC
                    </motion.a>

                    {/* Copyright */}
                    <p className="text-gray-600 text-xs sm:text-sm text-center order-3 sm:order-2">
                        © {currentYear} Durga Chandrika. All rights reserved.
                    </p>

                    {/* Back to top */}
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 text-gray-500 hover:text-gold transition-colors duration-300 text-xs sm:text-sm order-2 sm:order-3"
                        whileHover={{ y: -2 }}
                    >
                        Back to top
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
