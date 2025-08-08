import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {Card, CardContent} from '@/components/ui/card'
import {Badge} from '@/components/ui/badge'
import {Button} from '@/components/ui/button'
import {BookOpen, Play, Clock, Target, ChevronDown, ChevronUp, Code, Monitor, Globe, Cpu, Workflow, Video, Layers} from 'lucide-react'

export function CourseSyllabus() {
 const [openCourse, setOpenCourse] = useState<string | null>(null)

 const courses = [
  {
   id: 'main',
   title: 'Vibe Coding with Claude Code',
   duration: '~8 שעות תוכן',
   description: 'הקורס המקצועי הראשי - מסע פיתוח מהפכני עם Claude Code',
   price: '₪1,100',
   icon: Code,
   gradient: 'from-purple-600 to-cyan-600',
   requirements: [
    'רקע עם סביבות פיתוח (IDE) וטרמינל (CLI)',
    'רקע עם פיתוח WEB ברמת בסיס',
    'הבנה של GIT, GITHUB (Repositories, Commit, Push)',
    'ידע בדאטה בייס ברמת בסיס',
    'ידע ב-REACT / NEXT.JS - יתרון (מוסבר בקורס)'
   ],
   chapters: [
    {
     title: 'פרק 1 - מבוא ויסודות',
     lessons: [
      'ברוכים הבאים! (3:30)',
      'פתיחה (6:49)',
      'מבוא לפיתוח WEB (23:06)',
      'מבוא לקלוד קוד (15:56)',
      'מודל התמחור של קלוד קוד (13:04)'
     ]
    },
    {
     title: 'פרק 2 - הבנת מגבלות',
     lessons: ['בעיית גודל חלון ההקשר (13:53)']
    },
    {
     title: 'פרק 3 - ניהול גרסאות',
     lessons: ['Git (19:13)']
    },
    {
     title: 'פרק 4 - עבודה עם GitHub',
     lessons: ['GitHub (14:44)']
    },
    {
     title: 'פרק 5 - Claude Code בטרמינל',
     lessons: ['קלוד קוד בטרמינל (19:31)']
    },
    {
     title: 'פרק 6 - בניית SPA',
     lessons: [
      'מבוא ל-SPA עם VITE',
      'מתחילים לבנות SPA (27:41)',
      'ממשיכים לבנות SPA (27:41)',
      'משפרים את ה-SPA (30:15)',
      'פוליש ל-SPA (30:10)',
      'מפרסמים את ה-SPA (DEPLOYMENT)'
     ]
    },
    {
     title: 'פרק 7 - Next.js ו-MCP',
     lessons: [
      'בונוס: NEXT.JS (9:12)',
      'מתחילים עם ריפו וחוקים (17:09)',
      'הופה!! הנה ה-MCP!! (20:30)',
      'חלק 2 - MCP (19:08)',
      'חלק 3 - MCP (22:21)',
      'חלק 4 - MCP (27:37)',
      'מהדקים את הבייסליין של הפרויקט (18:12)',
      'ממשיכים להדק'
     ]
    },
    {
     title: 'פרק 8 - פיתוח Full Stack',
     lessons: [
      'פיתוח FULL STACK - 1 (19:50)',
      'פיתוח FULL STACK - 2 (22:51)',
      'פיתוח 3 - צוללים ל-NEXT.JS (19:52)',
      'פיתוח 4 - מחברים LLMs (15:45)',
      'פיתוח 5 - מתקנים וממשיכים (22:53)',
      'פיתוח 6 - ממשיכים (29:40)',
      'מחברים RSS (14:33)',
      'ממשיכים עם החיווט (17:36)',
      'וייב דיבאגינג (20:29)',
      'עוד דיבאגינג (23:25)',
      'פוליש לקראת סיום',
      'טאץ\' אפים אחרונים (20:54)'
     ]
    },
    {
     title: 'פרק 9 - בדיקות איכות',
     lessons: ['בונוס: MCP QA - PLAYWRIGHT (34:17)']
    },
    {
     title: 'פרק 10 - פרסום',
     lessons: ['FULL STACK DEPLOYMENT - VERCEL (25:13)']
    },
    {
     title: 'פרק 11 - סיכום',
     lessons: ['סיכום וסיום (5:29)']
    }
   ]
  },
  {
   id: 'ide',
   title: 'מבוא לסביבות פיתוח - IDEs',
   duration: '~1.5 שעות תוכן',
   description: 'למד לעבוד עם VSCode ו-JetBrains כמו מקצוען',
   price: '₪149',
   originalPrice: 'חינם במתנה!',
   icon: Monitor,
   gradient: 'from-green-600 to-teal-600',
   requirements: [
    'חוש טכני ללא חשש מלמידה של מונחים חדשים',
    'שימוש בדפדפן והתקנה של תוכנות על המחשב',
    'יכולת למידה ומחקר עצמאי'
   ],
   chapters: [
    { title: 'ברוכים הבאים', lessons: ['פתיחה (3:45)'] },
    { title: 'מה זה סביבת פיתוח (IDE)?', lessons: ['מבוא לסביבות פיתוח (10:05)'] },
    { title: 'התקנת VSCode', lessons: ['מדריך התקנה שלב אחר שלב (8:23)'] },
    { title: 'היכרות עם תוכנת VSCode', lessons: ['הבנה של סביבת הפיתוח (12:36)'] },
    { title: 'הגדרות שכדאי להכיר', lessons: ['מעבר על ההגדרות ב-VSCode (17:03)'] },
    { title: 'היכרות עם JetBrains IDE', lessons: ['הכירו את JetBrains! (19:53)'] },
    { title: 'סיכום', lessons: ['מה היה לנו פה? (7:35)'] }
   ]
  },
  {
   id: 'web',
   title: 'מבוא לפיתוח Web',
   duration: '~1.5 שעות תוכן',
   description: 'הבן איך עובד הדפדפן ומה זה Web Application',
   price: '₪149',
   originalPrice: 'חינם במתנה!',
   icon: Globe,
   gradient: 'from-blue-600 to-indigo-600',
   requirements: [
    'רצון ללמוד וגישה פתוחה',
    'רצון ללמוד טכנולוגיות חדשות (אין צורך בידע בכתיבת קוד)',
    'נכונות ללמידה בקצב עצמי'
   ],
   chapters: [
    { title: 'ברוכים הבאים!', lessons: ['פתיחה (5:01)'] },
    { title: 'יסודות פיתוח WEB', lessons: ['בואו נכיר את עולם ה-WEB (11:45)'] },
    { title: 'צוללים למעמקי ה-WEB', lessons: ['ממשיכים לצלול (20:44)'] },
    { title: 'איך בונים WEB APP?', lessons: ['בואו נדבר על אבני הבניין'] },
    { title: 'Frameworks & Libraries', lessons: ['מהן מסגרות עבודה וחבילות? (23:28)'] },
    { title: 'JSON', lessons: ['איך נראית בקשה ותגובה ב-API (ומה זה)? (13:20)'] },
    { title: 'סיכום', lessons: ['מה היה לנו פה? (18:11)'] }
   ]
  }
 ]

 const toggleCourse = (courseId: string) => {
  setOpenCourse(openCourse === courseId ? null : courseId)
 }

 return (
  <section className="py-20 px-4 relative">
   <div className="container mx-auto max-w-6xl">
    <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} className="text-center mb-16">
     <Badge className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white mb-4 px-6 py-3 text-lg font-bold border-0">
      <BookOpen className="w-5 h-5 mr-2" />
      סילבוס הקורסים
     </Badge>
     <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent leading-tight">
      התכנים המלאים
     </h2>
     <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
      הסילבוס המפורט של שלושת הקורסים - כל מה שתלמד בדרך למומחיות AI Development
     </p>
    </motion.div>

    <div className="grid gap-8">
     {courses.map((course, index) => (
      <motion.div
       key={course.id}
       initial={{opacity: 0, y: 20}}
       whileInView={{opacity: 1, y: 0}}
       viewport={{once: true}}
       transition={{delay: index * 0.2}}
      >
       <Card className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/50 backdrop-blur-xl hover:border-slate-500/70 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl overflow-hidden relative`}>
        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${course.gradient} opacity-0 hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
        
        <CardContent className="p-8">
         {/* Course Header */}
         <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
           <div className={`bg-gradient-to-r ${course.gradient} p-4 rounded-2xl shadow-lg`}>
            <course.icon className="w-8 h-8 text-white" />
           </div>
           <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{course.title}</h3>
            <div className="flex items-center gap-4 text-sm">
             <div className="flex items-center gap-1 text-cyan-400">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
             </div>
             <div className="flex items-center gap-1 text-green-400">
              <Video className="w-4 h-4" />
              <span>וידאו HD</span>
             </div>
            </div>
           </div>
          </div>
          
          <div className="text-right">
           {course.originalPrice ? (
            <div>
             <div className="text-lg line-through text-gray-400">{course.price}</div>
             <div className="text-2xl font-bold text-green-400">{course.originalPrice}</div>
            </div>
           ) : (
            <div className="text-3xl font-black text-white">{course.price}</div>
           )}
          </div>
         </div>

         <p className="text-gray-300 text-lg mb-6 leading-relaxed">{course.description}</p>

         {/* Requirements */}
         <div className="mb-6">
          <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
           <Target className="w-5 h-5 text-yellow-400" />
           דרישות קדם:
          </h4>
          <div className="grid gap-2">
           {course.requirements.map((req, reqIndex) => (
            <div key={reqIndex} className="flex items-start gap-2 text-gray-300">
             <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0" />
             <span>{req}</span>
            </div>
           ))}
          </div>
         </div>

         {/* Toggle Button */}
         <Button
          onClick={() => toggleCourse(course.id)}
          variant="outline"
          className="w-full bg-slate-700/50 border-slate-600 hover:bg-slate-600/50 text-white mb-6 py-3"
         >
          <Layers className="w-5 h-5 mr-2" />
          {openCourse === course.id ? 'הסתר סילבוס' : 'הצג סילבוס מפורט'}
          {openCourse === course.id ? 
           <ChevronUp className="w-5 h-5 ml-2" /> : 
           <ChevronDown className="w-5 h-5 ml-2" />
          }
         </Button>

         {/* Expandable Syllabus */}
         <AnimatePresence>
          {openCourse === course.id && (
           <motion.div
            initial={{height: 0, opacity: 0}}
            animate={{height: 'auto', opacity: 1}}
            exit={{height: 0, opacity: 0}}
            transition={{duration: 0.5, ease: "easeInOut"}}
            className="overflow-hidden"
           >
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/50">
             <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Play className="w-5 h-5 text-green-400" />
              תוכן הקורס:
             </h4>
             
             <div className="space-y-4">
              {course.chapters.map((chapter, chapterIndex) => (
               <motion.div
                key={chapterIndex}
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: chapterIndex * 0.1}}
                className="border-l-2 border-gradient-to-b from-cyan-500 to-purple-500 pl-4"
               >
                <h5 className="font-bold text-cyan-300 mb-2">{chapter.title}</h5>
                <div className="space-y-1">
                 {chapter.lessons.map((lesson, lessonIndex) => (
                  <div key={lessonIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                   <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                   <span>{lesson}</span>
                  </div>
                 ))}
                </div>
               </motion.div>
              ))}
             </div>
            </div>
           </motion.div>
          )}
         </AnimatePresence>
        </CardContent>
       </Card>
      </motion.div>
     ))}
    </div>

    {/* Total Value Summary */}
    <motion.div
     initial={{opacity: 0, y: 20}}
     whileInView={{opacity: 1, y: 0}}
     viewport={{once: true}}
     className="mt-12"
    >
     <Card className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-500/50 backdrop-blur-xl max-w-3xl mx-auto">
      <CardContent className="p-8 text-center">
       <h3 className="text-3xl font-bold text-white mb-6">🎯 סך הכול אתה מקבל:</h3>
       
       <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-black/20 rounded-xl p-4">
         <div className="text-2xl font-bold text-white mb-1">~11 שעות</div>
         <div className="text-yellow-300">תוכן וידאו</div>
        </div>
        <div className="bg-black/20 rounded-xl p-4">
         <div className="text-2xl font-bold text-white mb-1">3 קורסים</div>
         <div className="text-yellow-300">מקצועיים</div>
        </div>
        <div className="bg-black/20 rounded-xl p-4">
         <div className="text-2xl font-bold text-white mb-1">₪298</div>
         <div className="text-green-400">חיסכון!</div>
        </div>
       </div>

       <div className="text-2xl font-bold text-white mb-2">
        💰 אתה משלם רק ₪1,100 ומקבל שווי של ₪1,398!
       </div>
       <div className="text-cyan-300">חיסכון של ₪298 + גישה לכל החיים!</div>
      </CardContent>
     </Card>
    </motion.div>
   </div>
  </section>
 )
}