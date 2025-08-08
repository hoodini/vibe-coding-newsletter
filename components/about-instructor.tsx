import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Users, Award, ExternalLink, Github, Linkedin, Youtube, Instagram } from 'lucide-react';

export function AboutInstructor() {
  const achievements = [
    { icon: Users, text: '4000+ תלמידים באקדמיה', color: 'text-blue-400' },
    { icon: Star, text: 'GitHub Star & AWS AI Superstar', color: 'text-yellow-400' },
    { icon: Award, text: '18+ שנות ניסיון תעסוקתי', color: 'text-green-400' }
  ];

  const companies = [
    'NICE', 'תנובה', 'משרד המשפטים', 'משרד ראש הממשלה', 'בנק הפועלים',
    'AWS', 'Microsoft', 'Google', 'GitHub', 'Applied Materials', 'פלאפון'
  ];

  const socialLinks = [
    { icon: ExternalLink, label: 'yuv.ai', url: 'https://yuv.ai' },
    { icon: Github, label: '@hoodini', url: 'https://github.com/hoodini' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/%F0%9F%8E%97%EF%B8%8Fyuval-avidani-87081474/' },
    { icon: Youtube, label: 'YouTube', url: 'https://www.youtube.com/@yuv-ai' },
    { icon: Instagram, label: '@yuval_770', url: 'https://instagram.com/yuval_770' }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-cyan-600 text-white mb-4 px-4 py-2">המרצה</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            יובל אבידני
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI Builder & Speaker • טכנולוג שמנגיש תוכן על בינה מלאכותית בשפה פשוטה ובעברית
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-gradient-to-br from-slate-800/80 to-cyan-900/50 border-cyan-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">אודות יובל</h3>
                
                <div className="space-y-4 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    בעל כ-18 שנות ניסיון תעסוקתי ממגוון תפקידים מרשים, לרבות מחקר, פיתוח, סייבר, 
                    מדע נתונים, למידת מכונה, בינה מלאכותית, מרצה ומייעץ לחברות וארגונים בארץ ובחו"ל.
                  </p>
                  
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                        <span className="text-lg">{achievement.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="bg-slate-800/50 border-slate-600 hover:bg-slate-700/50 text-white"
                  onClick={() => window.open(link.url, '_blank')}
                >
                  <link.icon className="w-4 h-4 mr-2" />
                  {link.label}
                </Button>
              ))}
            </motion.div>
          </motion.div>

          {/* Experience Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-gradient-to-br from-slate-800/80 to-purple-900/50 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">לקוחות וחברות מובילות</h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {companies.map((company, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-slate-700/50 rounded-lg p-3 text-center text-sm text-gray-300 hover:bg-slate-600/50 transition-colors"
                    >
                      {company}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-800/50 to-emerald-900/50 border-green-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">מה מבדל אותי?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  השילוב הייחודי בין מומחיות באבטחת מידע, סייבר ותחום ה-AI, 
                  יחד עם יכולת להנגיש טכנולוגיה מתקדמת בשפה נגישה ויצירת קהילות ידע משמעותיות.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}