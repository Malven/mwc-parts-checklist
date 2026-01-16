import { useTranslation } from 'react-i18next';
import { BuildCarContent } from '../components/BuildCar/BuildCarContent';

export function BuildCarPage() {
  const { t } = useTranslation();
  return (
    <div className="card">
      <h2 className="heading-2" style={{ marginBottom: 24 }}>
        {t('buildCarPage.title')}
      </h2>
      <BuildCarContent />
    </div>
  );
}
