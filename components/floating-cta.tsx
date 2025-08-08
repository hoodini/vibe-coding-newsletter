import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingCart, X } from 'lucide-react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = window.innerHeight * 0.5;
      setIsVisible(scrolled > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    window.open('https://meshulam.co.il', '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {isMinimized ? (
            <Button
              onClick={() => setIsMinimized(false)}
              className="bg-green-600 hover:bg-green-700 text-white rounded-full w-16 h-16 shadow-2xl border-2 border-green-400"
            >
              <ShoppingCart className="w-8 h-8" />
            </Button>
          ) : (
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 shadow-2xl border-2 border-green-400 max-w-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-white text-lg">מחיר מיוחד!</h4>
                  <p className="text-green-100 text-sm">רק ₪1,100 במקום ₪1,399</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(true)}
                  className="text-white hover:bg-white/20 p-1"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <Button 
                onClick={handleCTAClick}
                className="w-full bg-white text-green-600 hover:bg-gray-100 font-bold py-3 rounded-full"
              >
                🚀 רוכש עכשיו!
              </Button>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}