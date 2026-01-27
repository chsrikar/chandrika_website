import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Certifications = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    const certifications = [
        {
            title: 'Project Management Job Simulation',
            company: 'CBRE',
            platform: 'Forage',
            date: '2026',
            certificateUrl: '/certificates/chandrika%20durga%20job%20simulation-1.pdf',
            skills: [
                'Timeline structuring & dependency mapping',
                'Strategic planning fundamentals',
                'Execution clarity from ambiguous inputs',
                'Early-stage planning discipline',
                'Gantt Chart creation',
            ],
            color: 'from-gold/30 to-amber-800/20',
        },
        {
            title: 'Project Manager Job Simulation',
            company: 'Siemens Mobility',
            platform: 'Forage',
            date: '2026',
            certificateUrl: '/certificates/chandrika%20durga%20job%20simulation-2.pdf',
            skills: [
                'Outcome-based KPI design',
                'Stakeholder input synthesis & alignment',
                'Data-to-dashboard translation',
                'Risk & delay communication frameworks',
            ],
            color: 'from-gold/25 to-yellow-900/20',
        },
        {
            title: 'Web Development Internship',
            company: 'Oasis Infobyte',
            platform: 'Verified Completion',
            date: 'Jul 2025',
            certificates: [
                { label: 'Certificate 1', url: '/certificates/Oasis_infobyte_certificate.jpeg' },
                { label: 'Certificate 2', url: '/certificates/Oasis_infobyte_certificate2.jpeg' },
                { label: 'Letter Of Recommendation', url: '/certificates/Oasis_infobyte_LOR.jpeg' },
            ],
            skills: [
                'Completed structured beginner-level web development program',
                'Built basic UI components using HTML, CSS, and JavaScript',
                'Practiced debugging, clean code structure, and page layouts',
                'Learned fundamentals of collaboration and version control',
            ],
            color: 'from-gold/20 to-amber-900/15',
        },
        {
            title: 'Web Development Internship',
            company: 'CodSoft',
            platform: 'Verified Completion',
            date: 'Jun 2025',
            certificates: [
                { label: 'Certificate', url: '/certificates/codsoft_certificate.jpeg' },
            ],
            skills: [
                'Completed guided web development internship on fundamentals',
                'Developed static web pages under mentor review',
                'Strengthened basics of layout design and responsive structure',
                'Gained exposure to documentation and task-based workflows',
            ],
            color: 'from-gold/20 to-yellow-900/15',
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
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    }

    return (
        <section id="certifications" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/3 to-transparent" />

            <motion.div
                className="max-w-4xl mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Section Title */}
                <motion.div className="text-center mb-8 sm:mb-12 md:mb-16" variants={cardVariants}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">
                        <span className="gradient-text">Certifications</span>
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg">Validated Learning</p>
                    <div className="gold-separator" />
                </motion.div>

                {/* Certification Cards */}
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-black/70 backdrop-blur-sm border-2 border-gold/40 rounded-xl sm:rounded-2xl overflow-hidden"
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.01,
                                borderColor: 'rgba(212, 175, 55, 0.8)',
                                boxShadow: '0 0 40px rgba(212, 175, 55, 0.2)'
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Header with gradient */}
                            <div className={`p-4 sm:p-6 md:p-8 bg-gradient-to-r ${cert.color} relative`}>

                                {/* Company & Platform Tag */}
                                <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                                    <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 text-xs font-bold rounded-full bg-gold text-black">
                                        {cert.company}
                                    </span>
                                    <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium rounded-full bg-white/10 text-gray-300 border border-white/20">
                                        {cert.platform}
                                    </span>
                                    <span className="text-xs text-gray-500 ml-auto pr-12 sm:pr-16">
                                        {cert.date}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white pr-12 sm:pr-16 group-hover:text-gold transition-colors duration-300">
                                    {cert.title}
                                </h3>
                            </div>

                            {/* Skills - Bullet Points */}
                            <div className="p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-sm">
                                <h4 className="text-xs sm:text-sm font-semibold text-gold mb-3 sm:mb-4 uppercase tracking-wider">
                                    Skill Outcomes
                                </h4>
                                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                                    {cert.skills.map((skill, skillIndex) => (
                                        <motion.li
                                            key={skillIndex}
                                            className="flex items-start gap-2 sm:gap-3"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: skillIndex * 0.1 }}
                                        >
                                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                                            <span className="text-gray-300 text-sm sm:text-base">
                                                {skill}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* View Certificate Button(s) */}
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    {cert.certificates ? (
                                        cert.certificates.map((certItem, certIndex) => (
                                            <motion.a
                                                key={certIndex}
                                                href={certItem.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gold border border-gold/50 rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                {certItem.label}
                                            </motion.a>
                                        ))
                                    ) : (
                                        <motion.a
                                            href={cert.certificateUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gold border border-gold/50 rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            View Certificate
                                        </motion.a>
                                    )}
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-0 left-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-gold/10 to-transparent pointer-events-none" />
                            <div className="absolute bottom-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-tl from-gold/10 to-transparent pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Footer note */}
                <motion.p
                    className="text-center text-gray-600 text-xs sm:text-sm mt-6 sm:mt-8 px-4"
                    variants={cardVariants}
                >
                    Building structured decision-making and operational clarity.
                </motion.p>
            </motion.div>
        </section>
    )
}

export default Certifications
