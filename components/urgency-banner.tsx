import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export function UrgencyBanner() {
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 px-4 shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-center gap-3 text-center">
        <AlertTriangle className="w-5 h-5 animate-pulse" />
        <span className="font-bold text-sm md:text-base">
          🔥 מחיר השקה מיוחד! רק עוד מספר ימים לפני שהמחיר עולה ל-₪1,399
        </span>
        <AlertTriangle className="w-5 h-5 animate-pulse" />
      </div>
    </motion.div>
  );
}