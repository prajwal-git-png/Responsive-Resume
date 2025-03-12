import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ToastProps {
  open: boolean;
  message: string;
  type: 'success' | 'error' | 'info';
  onDismiss: () => void;
}

export function Toast({ open, message, type, onDismiss }: ToastProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className={`fixed bottom-24 right-6 z-50 flex items-center gap-4 rounded-lg px-6 py-4 shadow-lg
            ${type === 'success' ? 'bg-green-500' : 
              type === 'error' ? 'bg-red-500' : 
              'bg-blue-500'} text-white`}
        >
          <span>{message}</span>
          <button
            onClick={onDismiss}
            className="rounded-full p-1 hover:bg-white/20 transition-colors"
          >
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 