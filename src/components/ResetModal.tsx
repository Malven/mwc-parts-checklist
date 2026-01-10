import { useEffect, useRef, type MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

interface ResetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function ResetModal({ isOpen, onClose, onConfirm }: ResetModalProps) {
  const { t } = useTranslation();
  const confirmButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previousActiveElementRef.current = document.activeElement as HTMLElement;

      // Focus the confirm button for keyboard accessibility
      setTimeout(() => {
        confirmButtonRef.current?.focus();
      }, 0);

      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll
      document.body.style.overflow = '';

      // Return focus to the previously focused element
      if (
        previousActiveElementRef.current &&
        typeof previousActiveElementRef.current.focus === 'function'
      ) {
        previousActiveElementRef.current.focus();
      }
      previousActiveElementRef.current = null;
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[2000] p-5 backdrop-blur-sm"
      role="dialog"
      aria-labelledby="reset-modal-title"
      aria-modal="true"
      onClick={handleOverlayClick}
    >
      <div className="bg-[linear-gradient(135deg,#020617,#020617)] border border-(--card-border) rounded-[18px] p-6 max-w-[420px] w-full shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-modal-fade-in">
        <h2 id="reset-modal-title" className="text-xl font-semibold text-(--text-main) mb-3 tracking-[0.02em]">
          {t('resetModal.title')}
        </h2>
        <p className="text-(--text-muted) text-sm leading-relaxed mb-6">
          {t('resetModal.description')}
        </p>
        <div className="flex gap-3 justify-end">
          <button
            className="rounded-lg py-2.5 px-5 text-sm font-medium cursor-pointer transition-all duration-150 border bg-[rgba(15,23,42,0.8)] border-slate-400/40 text-(--text-main) uppercase tracking-[0.05em] hover:bg-[rgba(15,23,42,0.95)] hover:border-slate-400/60 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-2"
            type="button"
            onClick={onClose}
          >
            {t('resetModal.cancel')}
          </button>
          <button
            ref={confirmButtonRef}
            className="rounded-lg py-2.5 px-5 text-sm font-medium cursor-pointer transition-all duration-150 border bg-red-900/40 border-red-400/60 text-red-200 uppercase tracking-[0.05em] hover:bg-red-900/60 hover:border-red-400/90 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-2"
            type="button"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {t('resetModal.confirm')}
          </button>
        </div>
      </div>
    </div>
  );
}
