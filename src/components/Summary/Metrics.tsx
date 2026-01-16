import { useTranslation } from 'react-i18next';

interface MetricsProps {
  totalNeeded: number;
  totalHave: number;
  totalMissing: number;
}

export function Metrics({
  totalNeeded,
  totalHave,
  totalMissing,
}: MetricsProps) {
  const { t } = useTranslation();
  const completionPercentage =
    totalNeeded > 0 ? Math.round((totalHave / totalNeeded) * 100) : 0;

  return (
    <div className="flex flex-col gap-lg">
      {/* Progress Bar */}
      <div className="metric-progress-container">
        <div className="flex justify-between items-center mb-sm">
          <span
            className="text-uppercase-sm"
            style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}
          >
            {t('metrics.totalParts')}
          </span>
          <span
            className="text-primary"
            style={{ fontSize: '14px', fontWeight: 600 }}
          >
            {completionPercentage}%
          </span>
        </div>
        <div className="metric-progress-bar">
          <div
            className="metric-progress-fill"
            style={{
              width: `${completionPercentage}%`,
              background: `linear-gradient(90deg, var(--color-success) 0%, var(--color-secondary) 100%)`,
            }}
          />
        </div>
      </div>

      {/* Metric Cards */}
      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}
      >
        <div className="metric-card">
          <div
            className="metric-card-icon"
            style={{
              background: 'var(--color-primary-light)',
              borderColor: 'var(--color-primary-border)',
            }}
          >
            <span style={{ fontSize: '20px' }}>📦</span>
          </div>
          <div className="metric-card-content">
            <p
              className="text-uppercase-sm"
              style={{ fontSize: '10px', marginBottom: 6 }}
            >
              {t('metrics.totalParts')}
            </p>
            <span className="metric-card-value">{totalNeeded}</span>
          </div>
        </div>
        <div className="metric-card metric-card-success">
          <div
            className="metric-card-icon"
            style={{
              background: 'var(--color-success-bg)',
              borderColor: 'var(--color-success-border)',
            }}
          >
            <span style={{ fontSize: '20px' }}>✓</span>
          </div>
          <div className="metric-card-content">
            <p
              className="text-uppercase-sm"
              style={{ fontSize: '10px', marginBottom: 6 }}
            >
              {t('metrics.have')}
            </p>
            <span
              className="metric-card-value"
              style={{ color: 'var(--color-success)' }}
            >
              {totalHave}
            </span>
          </div>
        </div>
        <div className="metric-card metric-card-error">
          <div
            className="metric-card-icon"
            style={{
              background: 'var(--color-error-bg)',
              borderColor: 'var(--color-error-border)',
            }}
          >
            <span style={{ fontSize: '20px' }}>⚠</span>
          </div>
          <div className="metric-card-content">
            <p
              className="text-uppercase-sm"
              style={{ fontSize: '10px', marginBottom: 6 }}
            >
              {t('metrics.missing')}
            </p>
            <span
              className="metric-card-value"
              style={{ color: 'var(--color-error)' }}
            >
              {totalMissing}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
