import { Modal, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

interface ResetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function ResetModal({ isOpen, onClose, onConfirm }: ResetModalProps) {
  const { t } = useTranslation();

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      onOk={handleConfirm}
      title={t('resetModal.title')}
      okText={t('resetModal.confirm')}
      cancelText={t('resetModal.cancel')}
      okButtonProps={{
        danger: true,
        style: {
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        },
      }}
      cancelButtonProps={{
        style: {
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        },
      }}
      width={420}
      styles={{
        body: {
          borderRadius: 18,
        },
      }}
    >
      <Text type="secondary" style={{ fontSize: '14px', lineHeight: 1.75 }}>
        {t('resetModal.description')}
      </Text>
    </Modal>
  );
}
