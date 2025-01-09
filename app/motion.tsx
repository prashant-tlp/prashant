'use client'
import React, { ReactNode } from "react"
import { motion } from 'framer-motion'
import { usePathname } from "next/navigation"

interface MotionProp {
    children: ReactNode,
}

const Transition: React.FC<MotionProp> = ({ children }) => {
    const pathname = usePathname();
    return (
        <motion.div 
            initial={{ y: 20, opacity: 0,}}
            animate={{ y: 0, opacity: 1,  }}
            exit={{ y: -20, opacity: 0 }}
            transition={{
                ease: 'easeInOut', 
                duration: 0.6, 
                delay: 0.2,
            }}
            className="flex flex-col w-full"
            key={pathname}
        >
            {children}
        </motion.div>
        // <>{children}</>
    )
}

export default Transition;
