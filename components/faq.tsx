import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
      question: "מה שם העסק שלך?",
      answer: "שם העסק שלי הוא YUV.AI – עסק עצמאי שאני מוביל מאז 2025, בו אני משלב ייעוץ, הרצאות, פיתוח כלים מבוססי בינה מלאכותית, ותוכן טכנולוגי עשיר בעברית ובאנגלית."
    },
    {
      question: "מה התפקיד שלך כיום?",
      answer: "אני AI Builder & Speaker בעסק העצמאי שלי – YUV.AI. אני מפתח סוכני AI מתקדמים, מעביר הרצאות וסדנאות עומק, ובונה תשתיות RAG ו-MCP שמבוססות על LLMs מהמתקדמים בעולם."
    },
    {
      question: "מה הניסיון התעסוקתי שלך?",
      answer: "למעלה מ-18 שנות ניסיון בשורה של תפקידים בכירים ומגוונים, כולל Senior Data & Machine Learning Scientist ב-Lusha, חוקר סייבר בחברת Akamai, ארכיטקט סייבר בטקיוניטי והסוכנות היהודית, מומחה אבטחת מידע בשטראוס, מנהל דיגיטל במשרד החינוך ועוד."
    },
    {
      question: "איזה טכנולוגיות אתה משתמש בפיתוח AI?",
      answer: "אני משתמש בכלים מתקדמים כמו Cursor AI, GitHub Copilot, Claude Code, LangChain, LangGraph, Flowise AI, LangSmith, Cohere, OpenAI, Anthropic, Huggingface, MCP Servers ועוד."
    },
    {
      question: "מה מבדל אותך?",
      answer: "השילוב הייחודי בין מומחיות באבטחת מידע, סייבר ותחום ה-AI, יחד עם יכולת להנגיש טכנולוגיה מתקדמת בשפה נגישה ויצירת קהילות ידע משמעותיות."
    },
    {
      question: "האם הקורס מתאים למתחילים?",
      answer: "הקורס מיועד למי שיש לו ידע בסיסי בפיתוח Web ורקע עם סביבות פיתוח. אני מסביר הכל בקורס, אבל חשוב שיהיה לך רקע טכני בסיסי."
    },
    {
      question: "כמה זמן לוקח להשלים את הקורס?",
      answer: "הקורס בנוי בצורה גמישה שמאפשרת לימוד בקצב אישי. אין מגבלת זמן על הגישה לתכנים, ותוכל ללמוד כפי שנוח לך."
    },
    {
      question: "האם אקבל תעודה בסיום הקורס?",
      answer: "כן, בסיום הקורס תקבל תעודת השלמה דיגיטלית שתוכל להציג בקורות החיים ובפרופיל המקצועי שלך."
    },
    {
      question: "איך אוכל ליצור קשר לשאלות נוספות?",
      answer: "לכל שאלה או פנייה, תוכל לפנות אליי במייל: info@yuv.ai. אני משתדל לענות במהירות ולעזור בכל נושא שקשור לקורס."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-orange-600 text-white mb-4 px-4 py-2">שאלות ותשובות</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
            שאלות נפוצות
          </h2>
          <p className="text-xl text-gray-300">
            מצאתי עבורך את השאלות הנפוצות ביותר והתשובות המלאות
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/60 border-slate-600/50 backdrop-blur-sm hover:border-slate-500/70 transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-right flex justify-between items-center hover:bg-slate-700/30 transition-colors"
                  >
                    <span className="text-lg font-semibold text-white pr-4">
                      {item.question}
                    </span>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}