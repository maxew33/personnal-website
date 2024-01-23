import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import styles from './Animated.module.css'

const defaultAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
}

export default function AnimatedText({ text, className, once }) {
    const textArray = Array.isArray(text) ? text : [text]
    const ref = useRef(null)
    const inView = useInView(ref, { amount: 1 , once: once})

    return (
        <div className={className}>
            <motion.span
                className={styles.block}
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ staggerChildren: 0.01 }}
                aria-hidden
            >
                {textArray.map((line) => (
                    <span className={styles.line}>
                        {line.split(' ').map((word) => (
                            <span className={styles.word}>
                                {word.split('').map((char) => (
                                    <motion.span
                                        className={styles.char}
                                        variants={defaultAnimation}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            <span>{' '}</span>
                            </span>
                        ))}
                    </span>
                ))}
            </motion.span>
        </div>
    )
}
