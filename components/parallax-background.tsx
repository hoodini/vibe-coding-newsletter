import {useEffect, useState} from 'react'
import {motion} from 'framer-motion'

export function ParallaxBackground() {
 const [scrollY, setScrollY] = useState(0)

 useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY)
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
 }, [])

 return (
  <>
   {/* Ultra Enhanced dynamic gradient mesh */}
   <div className="fixed inset-0 opacity-60">
    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_20%,rgba(68,0,255,0.4)_50%,transparent_80%),linear-gradient(-45deg,transparent_20%,rgba(255,0,150,0.4)_50%,transparent_80%)] bg-[length:100px_100px] animate-pulse" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_20%,rgba(0,255,255,0.3)_50%,transparent_80%),linear-gradient(0deg,transparent_20%,rgba(255,255,0,0.3)_50%,transparent_80%)] bg-[length:120px_120px] animate-pulse" style={{animationDelay: '1s'}} />
    <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_20%,rgba(255,100,255,0.2)_50%,transparent_80%),linear-gradient(-135deg,transparent_20%,rgba(100,255,100,0.2)_50%,transparent_80%)] bg-[length:80px_80px] animate-pulse" style={{animationDelay: '2s'}} />
   </div>

   {/* Mega Enhanced moving geometric shapes */}
   <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <motion.div
     className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-600/40 to-cyan-600/40 rounded-full blur-3xl"
     style={{
      x: scrollY * 0.2,
      y: scrollY * 0.1
     }}
     animate={{
      scale: [1, 1.3, 1],
      rotate: [0, 180, 360]
     }}
     transition={{
      duration: 25,
      repeat: Number.POSITIVE_INFINITY,
      ease: 'linear'
     }}
     initial={{top: '5%', left: '5%'}}
    />

    <motion.div
     className="absolute w-[400px] h-[400px] bg-gradient-to-r from-cyan-600/40 to-purple-600/40 rounded-full blur-3xl"
     style={{
      x: -scrollY * 0.15,
      y: scrollY * 0.25
     }}
     animate={{
      scale: [1.3, 0.8, 1.3],
      rotate: [360, 180, 0]
     }}
     transition={{
      duration: 20,
      repeat: Number.POSITIVE_INFINITY,
      ease: 'linear'
     }}
     initial={{top: '60%', right: '5%'}}
    />

    <motion.div
     className="absolute w-[300px] h-[300px] bg-gradient-to-r from-pink-600/50 to-orange-600/50 rounded-full blur-2xl"
     style={{
      x: scrollY * 0.3,
      y: -scrollY * 0.1
     }}
     animate={{
      scale: [1, 0.7, 1],
      rotate: [0, 120, 240, 360]
     }}
     transition={{
      duration: 15,
      repeat: Number.POSITIVE_INFINITY,
      ease: 'linear'
     }}
     initial={{top: '25%', left: '70%'}}
    />

    <motion.div
     className="absolute w-[200px] h-[200px] bg-gradient-to-r from-green-600/40 to-blue-600/40 rounded-full blur-2xl"
     style={{
      x: scrollY * 0.1,
      y: scrollY * 0.35
     }}
     animate={{
      scale: [0.7, 1.4, 0.7],
      rotate: [180, 0, 180]
     }}
     transition={{
      duration: 22,
      repeat: Number.POSITIVE_INFINITY,
      ease: 'linear'
     }}
     initial={{top: '75%', left: '15%'}}
    />

    <motion.div
     className="absolute w-[350px] h-[350px] bg-gradient-to-r from-yellow-600/30 to-red-600/30 rounded-full blur-3xl"
     style={{
      x: -scrollY * 0.25,
      y: -scrollY * 0.15
     }}
     animate={{
      scale: [1.2, 0.8, 1.2],
      rotate: [90, 270, 450]
     }}
     transition={{
      duration: 30,
      repeat: Number.POSITIVE_INFINITY,
      ease: 'linear'
     }}
     initial={{top: '35%', right: '25%'}}
    />
   </div>

   {/* Ultra Enhanced 3D grid effect */}
   <div className="fixed inset-0 opacity-25">
    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_22%,rgba(255,255,255,0.15)_25%,rgba(255,255,255,0.15)_28%,transparent_30%,transparent_72%,rgba(255,255,255,0.15)_75%,rgba(255,255,255,0.15)_78%,transparent_80%,transparent)] bg-[length:60px_60px]" />
    <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_22%,rgba(255,255,255,0.15)_25%,rgba(255,255,255,0.15)_28%,transparent_30%,transparent_72%,rgba(255,255,255,0.15)_75%,rgba(255,255,255,0.15)_78%,transparent_80%,transparent)] bg-[length:60px_60px]" />
   </div>

   {/* Ultra Enhanced pulsating light rays */}
   <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <motion.div
     className="absolute inset-0"
     animate={{
      background: [
       'radial-gradient(circle at 15% 85%, rgba(120, 119, 198, 0.5) 0%, transparent 60%)', 
       'radial-gradient(circle at 85% 15%, rgba(255, 119, 198, 0.5) 0%, transparent 60%)', 
       'radial-gradient(circle at 50% 50%, rgba(119, 255, 198, 0.5) 0%, transparent 60%)',
       'radial-gradient(circle at 75% 25%, rgba(255, 255, 119, 0.5) 0%, transparent 60%)',
       'radial-gradient(circle at 25% 75%, rgba(198, 119, 255, 0.5) 0%, transparent 60%)'
      ]
     }}
     transition={{
      duration: 12,
      repeat: Number.POSITIVE_INFINITY,
      ease: 'easeInOut'
     }}
    />
   </div>

   {/* Enhanced hexagonal pattern overlay */}
   <div className="fixed inset-0 opacity-15">
    <div 
     className="absolute inset-0 bg-repeat opacity-50"
     style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M30 30L47.32 40L47.32 20z'/%3E%3Cpath d='M30 30L12.68 40L12.68 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
     }}
    />
   </div>

   {/* Enhanced animated code symbols */}
   <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
    {Array.from({length: 30}).map((_, i) => (
     <motion.div
      key={i}
      className="absolute text-cyan-400 font-mono text-xl font-bold"
      style={{
       left: `${Math.random() * 100}%`,
       top: `${Math.random() * 100}%`,
      }}
      animate={{
       y: [-30, -150],
       opacity: [0, 1, 1, 0],
       rotate: [0, 360]
      }}
      transition={{
       duration: 10 + Math.random() * 6,
       repeat: Number.POSITIVE_INFINITY,
       delay: Math.random() * 8
      }}
     >
      {['</>', '{}', '[]', '()', '=>', '!=', '===', '++', '--', '&&', '||', '??'][Math.floor(Math.random() * 12)]}
     </motion.div>
    ))}
   </div>

   {/* New: Floating tech icons */}
   <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
    {Array.from({length: 15}).map((_, i) => (
     <motion.div
      key={i}
      className="absolute text-purple-400 text-2xl"
      style={{
       left: `${Math.random() * 100}%`,
       top: `${Math.random() * 100}%`,
      }}
      animate={{
       y: [0, -200],
       x: [0, Math.random() * 100 - 50],
       opacity: [0, 0.8, 0],
       scale: [0.5, 1, 0.5],
       rotate: [0, 180]
      }}
      transition={{
       duration: 15 + Math.random() * 10,
       repeat: Number.POSITIVE_INFINITY,
       delay: Math.random() * 10
      }}
     >
      {['⚡', '🚀', '💻', '🔥', '✨', '💎', '🌟', '⭐', '💫'][Math.floor(Math.random() * 9)]}
     </motion.div>
    ))}
   </div>
  </>
 )
}