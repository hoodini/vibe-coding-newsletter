import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Clock, Star, Users, TrendingUp, Zap, Rocket, Sparkles, Diamond, Infinity, Play, Video, ArrowRight } from 'lucide-react'

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleCTAClick = () => {
    window.open('https://meshulam.co.il', '_blank')
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.charset = 'utf-8'
    document.head.appendChild(script)

    return () => {
      const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* 3D Spline Element */}
      <div className="absolute top-0 left-0 w-full h-80 z-0">
        <div className="relative h-full rounded-b-3xl overflow-hidden backdrop-blur-sm border-b border-white/10">
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.41/build/spline-viewer.js"></script>
                <spline-viewer url="https://prod.spline.design/yxepDZvcPh8L4kND/scene.splinecode"></spline-viewer>
              `
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/95" />
        </div>
      </div>

      <div className="container mx-auto relative z-10 pt-80 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-center space-y-12"
        >
          {/* Launch Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }} 
            className="relative"
          >
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 text-xl font-bold border-0 shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 relative">
              <Rocket className="w-6 h-6 mr-3" />
              🚀 השקה בלעדית - מחיר מיוחד! 
              <Sparkles className="w-6 h-6 ml-3" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 blur-xl opacity-50 -z-10 animate-pulse" />
            </Badge>
          </motion.div>

          {/* Main Title */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 1 }} 
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight">
              <motion.span
                className="block bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                Vibe Coding
              </motion.span>
              <motion.span
                className="block text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['100% 50%', '0% 50%', '100% 50%']
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                with Claude Code
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4, duration: 0.8 }} 
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-6">
                הקורס המהפכני בפיתוח עם AI • למד לפתח
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-bold"> FULL STACK </span>
                עם הכלי המתקדם ביותר
              </p>
              <div className="flex items-center justify-center gap-4">
                <Diamond className="w-8 h-8 text-cyan-400" />
                <span className="text-cyan-400 font-bold text-xl">בהנחיית יובל אבידני</span>
                <Diamond className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-purple-300 font-semibold text-lg mt-2">AI Builder & Speaker</p>
            </div>
          </motion.div>

          {/* Social Proof Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.5 }} 
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { icon: Users, text: '4000+ תלמידים באקדמיה', color: 'from-cyan-400 to-blue-500' },
              { icon: Star, text: 'GitHub Star & AWS AI Superstar', color: 'from-yellow-400 to-orange-500' },
              { icon: TrendingUp, text: '18+ שנות ניסיון', color: 'from-green-400 to-emerald-500' },
              { icon: Infinity, text: 'גישה לכל החיים', color: 'from-purple-400 to-pink-500' }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05, y: -5 }} 
                whileTap={{ scale: 0.95 }} 
                className="flex items-center gap-3 bg-white/5 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/10 shadow-xl hover:border-white/20 transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${item.color} p-3 rounded-full shadow-lg`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-semibold text-lg">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Price Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.6, type: 'spring', stiffness: 80 }} 
            className="relative max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-red-600/90 to-pink-600/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-red-400/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-pink-600/20 blur-2xl" />
              
              <div className="space-y-8 relative z-10">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }} 
                  transition={{ duration: 2, repeat: Infinity }} 
                  className="flex items-center justify-center gap-4"
                >
                  <Zap className="w-10 h-10 text-yellow-300" />
                  <h3 className="text-4xl font-black text-white">מחיר השקה מיוחד!</h3>
                  <Zap className="w-10 h-10 text-yellow-300" />
                </motion.div>

                <div className="flex items-center justify-center gap-8">
                  <motion.span 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ duration: 2, repeat: Infinity }} 
                    className="text-7xl md:text-8xl font-black text-yellow-300 drop-shadow-2xl"
                  >
                    ₪1,100
                  </motion.span>
                  <div className="text-right">
                    <div className="text-gray-200 line-through text-3xl">₪1,399</div>
                    <div className="text-green-300 font-bold text-2xl">חסכת ₪299!</div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                  <p className="text-2xl font-bold mb-4 text-yellow-300">⚡ בונוס מיוחד: 2 מיני קורסים במתנה!</p>
                  <p className="text-cyan-300 text-xl">מבוא לסביבות פיתוח + מבוא לפיתוח Web</p>
                  <p className="text-yellow-300 font-bold text-2xl mt-3">שווי כולל: ₪298 - חינם!</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.7 }} 
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-red-500/30 shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Clock className="w-8 h-8 text-red-400" />
                <h3 className="text-3xl font-bold text-red-400">המחיר המיוחד יסתיים בעוד:</h3>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: 'ימים', value: timeLeft.days },
                  { label: 'שעות', value: timeLeft.hours },
                  { label: 'דקות', value: timeLeft.minutes },
                  { label: 'שניות', value: timeLeft.seconds }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ scale: 1.1 }} 
                    className="bg-gradient-to-b from-red-600 to-red-800 rounded-2xl p-6 shadow-xl border border-red-400/30"
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }} 
                      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }} 
                      className="text-4xl md:text-5xl font-black text-yellow-300"
                    >
                      {item.value.toString().padStart(2, '0')}
                    </motion.div>
                    <div className="text-lg text-gray-200 font-bold mt-2">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Twitter Video */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.8 }} 
            className="max-w-lg mx-auto"
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-purple-500/30 p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Play className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    טיזר הקורס
                  </h3>
                  <Video className="w-8 h-8 text-cyan-400" />
                </div>
                <p className="text-purple-200 text-lg">צפה בסרטון הטיזר המלא שפורסם בX שלי</p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm p-4">
                <blockquote className="twitter-tweet" data-conversation="none" data-dnt="true" data-theme="dark" data-width="400">
                  <p lang="iw" dir="rtl">
                    מוכנים? קורס הווייב קודינג שלי עם קלוד קוד כבר מוכן וההשקה הרשמית מתקרבת בצעדי ענק! כל מה שתרצו לדעת על פיתוח עם AI, מיועד למי שיש לו ידע בסיסי בפיתוח web.
                    <br />
                    <br />
                    רוצים לדעת עוד? זה בשבילכם &gt;&gt;&gt;
                    <a href="https://t.co/Rvn1obZVZ6">pic.twitter.com/Rvn1obZVZ6</a>
                  </p>
                  &mdash; Yuval Avidani (יובל אבידני) (@yuvalav)
                  <a href="https://twitter.com/yuvalav/status/1952078806359126330?ref_src=twsrc%5Etfw">January 27, 2025</a>
                </blockquote>
              </div>
            </Card>
          </motion.div>

          {/* Main CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.9 }} 
            className="space-y-8"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="relative"
            >
              <Button
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-green-500 via-emerald-600 to-green-700 hover:from-green-600 hover:via-emerald-700 hover:to-green-800 text-white font-black text-2xl md:text-3xl px-16 py-8 rounded-full shadow-2xl border-2 border-green-400 relative overflow-hidden group transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                <span className="relative z-10 flex items-center gap-4">
                  <Rocket className="w-8 h-8" />
                  🚀 רוכש עכשיו במחיר מיוחד! 🚀
                  <ArrowRight className="w-8 h-8" />
                </span>
              </Button>
            </motion.div>

            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/10">
              <p className="text-lg text-gray-200">
                ⚠️ <strong className="text-yellow-400">שימו לב:</strong> התשלום מתבצע באתר משולם. לא ניתן לשלם בכרטיס חו"ל. נדרשת הרשמה עם מספר טלפון ישראלי.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}