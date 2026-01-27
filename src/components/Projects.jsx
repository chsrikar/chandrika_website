import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Projects = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const [activeProject, setActiveProject] = useState(null)

    const projects = [
        {
            id: 1,
            title: 'Urban Rail Expansion Simulation',
            type: 'Product Case Study',
            description: 'A strategic simulation focused on infrastructure expansion with data-driven decision making.',
            highlights: [
                { label: 'KPI Definition', desc: 'Identified and tracked key performance indicators for project success' },
                { label: 'Dashboard Building', desc: 'Created visual dashboards for stakeholder reporting' },
                { label: 'Stakeholder Communication', desc: 'Managed multi-team alignment and updates' },
                { label: 'Decision Clarity', desc: 'Structured approach to complex problem-solving' },
            ],
            color: 'from-gold/20 to-amber-900/20',
        },
        {
            id: 2,
            title: 'Community-Led Growth Initiative',
            type: 'Growth Strategy',
            description: 'Building engagement-first community strategies with measurable outcomes.',
            highlights: [
                { label: 'Event Strategy', desc: 'Planned and executed community-focused events' },
                { label: 'User Research', desc: 'Gathered insights through engagement and feedback' },
                { label: 'Outcome-Driven Approach', desc: 'Focused on measurable growth metrics' },
                { label: 'Community Building', desc: 'Created sustainable engagement frameworks' },
            ],
            color: 'from-gold/20 to-yellow-900/20',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
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
        <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
            {/* Background accents */}
            <div className="absolute left-0 top-1/3 w-1/4 h-1/3 bg-gradient-to-r from-gold/5 to-transparent blur-3xl" />
            <div className="absolute right-0 bottom-1/3 w-1/4 h-1/3 bg-gradient-to-l from-gold/5 to-transparent blur-3xl" />

            <motion.div
                className="max-w-6xl mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Section Title */}
                <motion.div className="text-center mb-8 sm:mb-12 md:mb-16" variants={cardVariants}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">
                        <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg">Mini Case Studies</p>
                    <div className="gold-separator" />
                </motion.div>

                {/* Project Cards */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className={`group relative bg-black/70 backdrop-blur-sm border border-gold/30 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer ${activeProject === project.id ? 'ring-2 ring-gold' : ''
                                }`}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(212, 175, 55, 0.15)'
                            }}
                            onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                        >
                            {/* Header */}
                            <div className={`p-4 sm:p-6 md:p-8 bg-gradient-to-br ${project.color}`}>
                                <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold rounded-full bg-gold/20 text-gold border border-gold/30 mb-3 sm:mb-4">
                                    {project.type}
                                </span>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-white mb-2 sm:mb-3 group-hover:text-gold transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Highlights */}
                            <div className="p-4 sm:p-6 md:p-8 border-t border-gold/10">
                                <h4 className="text-xs sm:text-sm font-semibold text-gold mb-3 sm:mb-4 uppercase tracking-wider">Key Highlights</h4>
                                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                                    {project.highlights.map((highlight, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-start gap-2 sm:gap-3"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                                            <div>
                                                <span className="text-white font-medium text-xs sm:text-sm">{highlight.label}</span>
                                                <p className="text-gray-500 text-xs mt-0.5 hidden sm:block">{highlight.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            {/* Corner decoration */}
                            <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-bl from-gold/10 to-transparent" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Projects
