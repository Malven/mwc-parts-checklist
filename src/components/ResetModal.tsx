import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface ResetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function ResetModal({ isOpen, onClose, onConfirm }: ResetModalProps) {
  const { t } = useTranslation();
  const modalRef = useRef<HTMLDivElement>(null);
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      firstButtonRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">
            {t('resetModal.title')}
          </h2>
        </div>
        <div className="modal-body">{t('resetModal.description')}</div>
        <div className="modal-footer">
          <button
            className="btn btn-ghost text-uppercase"
            onClick={onClose}
            style={{ letterSpacing: '0.05em' }}
          >
            {t('resetModal.cancel')}
          </button>
          <button
            ref={firstButtonRef}
            className="btn btn-danger text-uppercase"
            onClick={handleConfirm}
            style={{ letterSpacing: '0.05em' }}
          >
            {t('resetModal.confirm')}
          </button>
        </div>
      </div>
    </div>
  );
}
