import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    const experiences = [
        {
            title: 'Community Manager',
            company: 'ADC',
            type: 'Current',
            offerLetterUrl: '/certificates/ALGON_Offer_letter.jpeg', // Replace with actual offer letter URL
            points: [
                'Leading student communities',
                'Organizing product-focused tech events',
                'Coordinating with cross-functional teams',
                'Driving engagement and operational clarity',
            ],
        },
        {
            title: 'Web Development Intern',
            company: 'CodSoft',
            type: 'Internship',
            offerLetterUrl: '/certificates/codsoft.jpeg', // Replace with actual offer letter URL
            points: [
                'Built UI components with HTML, CSS, JS',
                'Followed structured workflows',
                'Learned basics of documentation & teamwork',
            ],
        },
        {
            title: 'Web Development Intern',
            company: 'Oasis Infobyte',
            type: 'Internship',
            offerLetterUrl: '/certificates/Oasis_infobyte.jpeg', // Replace with actual offer letter URL
            points: [
                'Beginner-level web pages',
                'Version control basics',
                'Task documentation',
            ],
        },
    ]

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

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    }

    return (
        <section id="experience" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
            {/* Background accent */}
            <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-l from-gold/5 to-transparent blur-3xl" />

            <motion.div
                className="max-w-6xl mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Section Title */}
                <motion.div className="text-center mb-8 sm:mb-12 md:mb-16" variants={cardVariants}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">
                        <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg">Product-Aligned Journey</p>
                    <div className="gold-separator" />
                </motion.div>

                {/* Experience Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-black/70 backdrop-blur-sm border border-gold/30 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 overflow-hidden"
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: '0 0 40px rgba(212, 175, 55, 0.2)',
                                borderColor: 'rgba(212, 175, 55, 0.8)'
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Badge */}
                                <motion.span
                                    className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold rounded-full mb-3 sm:mb-4 ${exp.type === 'Current'
                                        ? 'bg-gold/20 text-gold border border-gold/30'
                                        : 'bg-gray-800 text-gray-400 border border-gray-700'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {exp.type}
                                </motion.span>

                                {/* Title */}
                                <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-white mb-1 sm:mb-2 group-hover:text-gold transition-colors duration-300">
                                    {exp.title}
                                </h3>

                                {/* Company */}
                                <p className="text-gold text-xs sm:text-sm md:text-base font-medium mb-4 sm:mb-6">
                                    @ {exp.company}
                                </p>

                                {/* Points */}
                                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                                    {exp.points.map((point, pointIndex) => (
                                        <motion.li
                                            key={pointIndex}
                                            className="flex items-start gap-2 sm:gap-3 text-gray-400 text-xs sm:text-sm md:text-base"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: pointIndex * 0.1 }}
                                        >
                                            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gold rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                                            {point}
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* View Offer Letter Button */}
                                <motion.a
                                    href={exp.offerLetterUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gold border border-gold/50 rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    View Offer Letter
                                </motion.a>
                            </div>

                            {/* Corner decoration */}
                            <div className="absolute bottom-0 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-tl from-gold/10 to-transparent" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Experience
