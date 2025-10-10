import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-800 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Made with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />{' '}
            by Maddala Ramya
          </p>
          <p className="text-sm text-slate-500 mt-2">
            {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
