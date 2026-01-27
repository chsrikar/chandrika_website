import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-0">
            {/* Background Elements - Semi-transparent overlay to blend with Galaxy */}
            <div className="absolute inset-0">
                {/* Subtle gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                {/* Centered Content */}
                <motion.div
                    className="text-center w-full"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Small Intro */}
                    <motion.p
                        className="text-gold text-xs sm:text-sm md:text-base font-medium tracking-widest uppercase mb-2 sm:mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Hello, I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold mb-4 sm:mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <span className="gradient-text">Chandrika</span>{' '}
                        <span className="text-white">Durga</span>
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 font-light mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <span className="block sm:inline">Aspiring Product Manager</span>
                        <span className="hidden sm:inline"> | </span>
                        <span className="block sm:inline">Business Development & Growth Strategy</span>
                        <br className="hidden sm:block" />
                        <span className="block sm:inline text-gold mt-1 sm:mt-0">Community Manager @ ADC</span>
                    </motion.h2>

                    {/* Subtext */}
                    <motion.p
                        className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4 sm:px-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        "Building market-ready products & early-stage GTM foundations."
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                    >
                        <motion.a
                            href="/My_resume.pdf"
                            download
                            className="btn-gold-hover bg-gold text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download Resume
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/chandrikadurga"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-gold text-gold font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base hover:bg-gold hover:text-black transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            Connect on LinkedIn
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Hidden on very small screens */}
            <motion.div
                className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <motion.div
                    className="flex flex-col items-center gap-2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-5 h-8 border-2 border-gold/50 rounded-full flex justify-center pt-2">
                        <motion.div
                            className="w-1 h-2 bg-gold rounded-full"
                            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
