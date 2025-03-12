import { useState, useCallback } from 'react';

type ToastType = 'success' | 'error' | 'info';

interface ToastState {
  open: boolean;
  message: string;
  type: ToastType;
}

interface ToastOptions {
  type?: ToastType;
  duration?: number;
}

export function useToast() {
  const [toast, setToast] = useState<ToastState>({
    open: false,
    message: '',
    type: 'info',
  });

  const dismiss = useCallback(() => {
    setToast((prev) => ({ ...prev, open: false }));
  }, []);

  const toast_ = useCallback((message: string, options: ToastOptions = {}) => {
    const { type = 'info', duration = 3000 } = options;
    
    setToast({
      open: true,
      message,
      type,
    });

    setTimeout(dismiss, duration);
  }, [dismiss]);

  return {
    toast: toast_,
    dismiss,
    ...toast,
  };
}

export const toast = (message: string, options?: ToastOptions) => {
  // This is a dummy implementation for direct toast calls
  // In a real app, you might want to use a global toast state management
  console.log(`Toast: ${message}`, options);
};
