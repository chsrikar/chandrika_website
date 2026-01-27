import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

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

    return (
        <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
            {/* Background accent */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-gradient-to-r from-gold/5 to-transparent blur-3xl" />

            <motion.div
                className="max-w-4xl mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Section Title */}
                <motion.div className="text-center mb-8 sm:mb-12 md:mb-16" variants={itemVariants}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="gold-separator" />
                </motion.div>

                {/* Content */}
                <motion.div
                    className="bg-black/60 backdrop-blur-md border border-gray-800/50 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 relative overflow-hidden group"
                    variants={itemVariants}
                    whileHover={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}
                >
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-bl from-gold/10 to-transparent" />

                    <div className="relative z-10 space-y-4 sm:space-y-6">
                        <motion.p
                            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed"
                            variants={itemVariants}
                        >
                            I'm driven by one thing — <span className="text-gold font-medium">building products that people actually use.</span>
                        </motion.p>

                        <div className="gold-separator !mx-0 !max-w-16 sm:!max-w-24" />

                        <motion.p
                            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed"
                            variants={itemVariants}
                        >
                            My work sits at the intersection of <span className="text-white font-medium">product thinking</span>, <span className="text-white font-medium">business development</span>, and <span className="text-white font-medium">user psychology</span>.
                        </motion.p>

                        <div className="gold-separator !mx-0 !max-w-16 sm:!max-w-24" />

                        <motion.p
                            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed"
                            variants={itemVariants}
                        >
                            I focus on <span className="text-gold font-medium">structure</span>, <span className="text-gold font-medium">clarity</span>, and <span className="text-gold font-medium">decision-making</span> — skills that translate directly into product and business roles.
                        </motion.p>
                    </div>

                    {/* Hover glow effect */}
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)'
                        }}
                    />
                </motion.div>

                {/* Stats/Highlights */}
                <motion.div
                    className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 mt-8 sm:mt-12"
                    variants={itemVariants}
                >
                    {[
                        { number: '3+', label: 'Projects' },
                        { number: '2+', label: 'Internships' },
                        { number: '∞', label: 'Curiosity' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="text-center p-3 sm:p-4 md:p-6 bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-lg sm:rounded-xl hover:border-gold/30 transition-colors duration-300"
                            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                        >
                            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold gradient-text">{stat.number}</span>
                            <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default About
