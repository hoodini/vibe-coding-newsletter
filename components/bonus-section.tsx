import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gift, Code, Globe, CheckCircle } from 'lucide-react';

export function BonusSection() {
  const bonusCourses = [
    {
      icon: Code,
      title: 'מבוא לסביבות פיתוח - IDEs',
      description: 'כדי לפתח מוצרים אנחנו צריכים לעבוד עם תוכנה שמאפשרת לנו לכתוב ולהריץ קוד. במיני-קורס הזה נלמד את המבוא לעבודה עם IDE של VSCode ונכיר גם את JetBrains.',
      value: '₪149',
      features: [
        'למי שיש חוש טכני ולא מפחד מלמידה של מונחים חדשים',
        'שימוש בדפדפן והתקנה של תוכנות על המחשב',
        'יכולת למידה ומחקר עצמאי'
      ]
    },
    {
      icon: Globe,
      title: 'מבוא לפיתוח Web',
      description: 'איך עובד דפדפן? מה זה אתר אינטרנט ומה ההבדל בינו לבין Web Application? במיני-קורס הזה נדבר על המבוא וכל מה שצריך לדעת כדי להבין מהו הדפדפן, איך הוא עובד, מה זה אפליקציית Web.',
      value: '₪149',
      features: [
        'מה זה צד לקוח וצד שרת ומה זה API',
        'היסודות שיעזרו לפתח עם AI בהמשך',
        'אין צורך בידע בכתיבת קוד',
        'נכונות ללמידה בקצב עצמי'
      ]
    }
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
          <Badge className="bg-green-600 text-white mb-4 px-4 py-2 text-lg">
            <Gift className="w-5 h-5 mr-2" />
            בונוס מיוחד!
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            2 מיני קורסים במתנה!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            כל מי שרוכש את הקורס, מקבל במתנה 2 מיני קורסים בשווי כולל של ₪298
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {bonusCourses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-gradient-to-br from-green-800/50 to-emerald-900/50 border-green-500/30 backdrop-blur-sm h-full hover:border-green-400/60 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full">
                      <course.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                      <Badge className="bg-yellow-600 text-white font-bold">
                        שווי: {course.value} - חינם!
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-bold text-white">למי הקורס מתאים:</h4>
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Total Value */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-500/50 max-w-2xl mx-auto backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">סך הכול אתה מקבל:</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xl">
                  <span className="text-gray-300">קורס Vibe Coding with Claude Code</span>
                  <span className="font-bold text-white">₪1,100</span>
                </div>
                <div className="flex justify-between items-center text-xl">
                  <span className="text-gray-300">2 מיני קורסים במתנה</span>
                  <span className="font-bold text-green-400">₪298</span>
                </div>
                <hr className="border-gray-600" />
                <div className="flex justify-between items-center text-2xl font-bold">
                  <span className="text-white">סך הכול</span>
                  <span className="text-yellow-400">₪1,398</span>
                </div>
                <div className="bg-red-600/20 rounded-lg p-4 border border-red-500/30">
                  <p className="text-lg font-bold text-red-300">
                    🔥 אתה משלם רק ₪1,100 וחוסך ₪298!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}