import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, ExternalLink, AlertTriangle } from 'lucide-react';

export function Footer() {
  const handleCTAClick = () => {
    window.open('https://meshulam.co.il', '_blank');
  };

  return (
    <footer className="py-20 px-4">
      <div className="container mx-auto">
        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Card className="bg-gradient-to-r from-green-600 to-emerald-600 border-green-400 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                מוכן להתחיל את המסע שלך עם Claude Code?
              </h3>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                הצטרף עכשיו לקורס המהפכני ותלמד לפתח עם AI כמו מקצוען. 
                המחיר המיוחד זמין רק לזמן מוגבל!
              </p>
              
              <Button 
                onClick={handleCTAClick}
                className="bg-white text-green-600 hover:bg-gray-100 font-bold text-xl px-12 py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white"
              >
                🚀 רוכש עכשיו ב-₪1,100 במקום ₪1,399! 🚀
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Important Notes */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <Card className="bg-yellow-600/20 border-yellow-500/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-yellow-300 mb-2">הערות חשובות</h4>
                  <ul className="text-yellow-100 space-y-2 text-sm">
                    <li>• התשלום מתבצע באתר משולם</li>
                    <li>• לא ניתן לשלם בכרטיס חו"ל</li>
                    <li>• נדרשת הרשמה עם מספר טלפון ישראלי</li>
                    <li>• אין מגבלת זמן על הגישה לתכנים</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-red-600/20 border-red-500/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-red-300 mb-2">תנאי שימוש</h4>
                  <ul className="text-red-100 space-y-2 text-sm">
                    <li>• התכנים יתעדכנו מעת לעת ללא התחייבות מתי</li>
                    <li>• אין לבצע שימוש בתכנים ללא אישור מפורש בכתב</li>
                    <li>• אין לשכפל, להעתיק או לצלם את התכנים</li>
                    <li>• הזכות שמורה להעביר לפלטפורמה אחרת</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact & Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="flex items-center justify-center gap-3">
            <Mail className="w-6 h-6 text-cyan-400" />
            <span className="text-xl text-gray-300">
              לפניות ושאלות: 
              <a href="mailto:info@yuv.ai" className="text-cyan-400 hover:text-cyan-300 ml-2">
                info@yuv.ai
              </a>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>© 2025 YUV.AI - יובל אבידני</span>
            <span>•</span>
            <a href="https://yuv.ai" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              yuv.ai
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}