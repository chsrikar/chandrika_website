import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SpotlightCard from './SpotlightCard'

const Skills = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    const productSkills = [
        { name: 'Product Thinking', icon: '💡' },
        { name: 'Business Development', icon: '📈' },
        { name: 'Market Research', icon: '🔍' },
        { name: 'Stakeholder Alignment', icon: '🤝' },
        { name: 'User Insights', icon: '👥' },
        { name: 'Communication', icon: '💬' },
        { name: 'Project Management', icon: '📋' },
        { name: 'Gantt Chart', icon: '📊' },
    ]

    const techSkills = [
        { name: 'Basic Web Development', icon: '🌐' },
        { name: 'Graphic Design', icon: '🎨' },
        { name: 'Prompt Engineering', icon: '⚡' },
        { name: 'Git/GitHub', icon: '🔗' },
        { name: 'Product Management tools', icon: '📦' },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: 'easeOut' },
        },
    }

    return (
        <section id="skills" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
            {/* Background elements */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full max-w-4xl">
                <div className="absolute inset-0 bg-gradient-to-b from-gold/3 via-transparent to-gold/3 blur-3xl" />
            </div>

            <motion.div
                className="max-w-6xl mx-auto relative z-10"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={containerVariants}
            >
                {/* Section Title */}
                <motion.div className="text-center mb-8 sm:mb-12 md:mb-16" variants={itemVariants}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">
                        <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg">What I Bring to the Table</p>
                    <div className="gold-separator" />
                </motion.div>

                {/* Product & Business Skills */}
                <motion.div className="mb-8 sm:mb-12 md:mb-16" variants={itemVariants}>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-semibold text-white mb-4 sm:mb-6 md:mb-8 flex items-center gap-2 sm:gap-3">
                        <span className="w-4 sm:w-6 md:w-8 h-0.5 bg-gold" />
                        Product & Business Skills
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                        {productSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <SpotlightCard
                                    className="text-center h-full"
                                    spotlightColor="rgba(212, 175, 55, 0.25)"
                                >
                                    {/* Icon */}
                                    <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4">
                                        {skill.icon}
                                    </div>
                                    {/* Name */}
                                    <h4 className="text-white font-medium text-xs sm:text-sm md:text-base leading-tight">
                                        {skill.name}
                                    </h4>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Tech Skills */}
                <motion.div variants={itemVariants}>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-semibold text-white mb-4 sm:mb-6 md:mb-8 flex items-center gap-2 sm:gap-3">
                        <span className="w-4 sm:w-6 md:w-8 h-0.5 bg-gold" />
                        Tech Skills
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-2xl">
                        {techSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                            >
                                <SpotlightCard
                                    className="text-center h-full"
                                    spotlightColor="rgba(212, 175, 55, 0.25)"
                                >
                                    {/* Icon */}
                                    <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4">
                                        {skill.icon}
                                    </div>
                                    {/* Name */}
                                    <h4 className="text-white font-medium text-xs sm:text-sm md:text-base leading-tight">
                                        {skill.name}
                                    </h4>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Skills
