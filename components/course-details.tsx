import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, GitBranch, Cloud, Zap, Target, Users, CheckCircle } from 'lucide-react';

export function CourseDetails() {
  const topics = [
    { icon: Code, title: 'פיתוח FULL STACK', desc: 'למד לבנות אפליקציות שלמות מקצה לקצה' },
    { icon: Target, title: 'Single Page Applications', desc: 'יצירת עמודי נחיתה ואפליקציות מתקדמות' },
    { icon: GitBranch, title: 'Git & GitHub', desc: 'ניהול קוד וגרסאות בצורה מקצועית' },
    { icon: Database, title: 'MCP Integration', desc: 'חיבור לבסיסי נתונים ושירותים חיצוניים' },
    { icon: Cloud, title: 'Deployment', desc: 'העלאה לאינטרנט ופרסום האפליקציה' },
    { icon: Zap, title: 'AI-Powered Development', desc: 'פיתוח מהיר ויעיל עם כלי AI מתקדמים' }
  ];

  const requirements = [
    'רקע עם סביבות פיתוח (IDE) וטרמינל (CLI)',
    'רקע עם פיתוח WEB ברמת בסיס',
    'הבנה של GIT, GITHUB (Repositories, Commit, Push)',
    'ידע בדאטה בייס ברמת בסיס',
    'ידע ב-REACT / NEXT.JS - יתרון (מוסבר בקורס)'
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
          <Badge className="bg-purple-600 text-white mb-4 px-4 py-2">מה תלמד בקורס</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            מסע פיתוח מהפכני עם Claude Code
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            בקורס נצא למסע פיתוח עם סוכן הקוד המדהים Claude Code שסוחף את קהילת הפיתוח וה-AI. 
            בסוף הקורס תצא עם מיומנות פיתוח עם AI תוך הבנת היתרונות והאתגרים שבדרך.
          </p>
        </motion.div>

        {/* Course Topics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/80 to-purple-900/50 border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-3 rounded-full">
                      <topic.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{topic.title}</h3>
                  </div>
                  <p className="text-gray-300">{topic.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Requirements */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">למי הקורס מתאים?</h3>
              </div>
              
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{req}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/30">
                <p className="text-center text-lg text-cyan-300 font-semibold">
                  💡 <strong>טיפ:</strong> גם אם אין לך ידע מלא בכל הנושאים - אני מסביר הכל בקורס!
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}