import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Star, Award, TrendingUp } from 'lucide-react';

export function SocialProof() {
  const stats = [
    { icon: Users, number: '4000+', label: 'תלמידים באקדמיה', color: 'text-blue-400' },
    { icon: Star, number: '18+', label: 'שנות ניסיון', color: 'text-yellow-400' },
    { icon: Award, number: 'GitHub', label: 'Star & AWS AI Superstar', color: 'text-green-400' },
    { icon: TrendingUp, number: '10+', label: 'חברות Fortune 500', color: 'text-purple-400' }
  ];

  const testimonials = [
    {
      text: "יובל הוא מומחה אמיתי בתחום ה-AI. השילוב של הידע הטכני עם היכולת להסביר בצורה פשוטה הוא נדיר.",
      author: "מנהל פיתוח, חברת הייטק מובילה"
    },
    {
      text: "התוכן שיובל מייצר הוא איכותי ומעשי. אחרי הקורסים שלו הרגשתי שאני באמת מבין איך לעבוד עם AI.",
      author: "מפתח Full Stack"
    },
    {
      text: "הגישה המעשית של יובל ללמידת AI עזרה לי להתחיל לפתח עם Claude ולחסוך המון זמן בעבודה.",
      author: "אנטרפרנר טכנולוגי"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-blue-600 text-white mb-4 px-4 py-2">הוכחה חברתית</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            מצטרפים לאקדמיה המובילה
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/50 backdrop-blur-sm text-center hover:transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                  <div className={`text-3xl font-black ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/60 to-purple-900/40 border-purple-500/30 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div className="text-yellow-400 text-2xl mb-4">"</div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="text-sm text-gray-400 font-medium">
                    — {testimonial.author}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}