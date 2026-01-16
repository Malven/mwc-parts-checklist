import { useTranslation } from 'react-i18next';
import { SummaryPart } from '../../types';

interface PartItemProps {
  content: string;
}

function PartItem({ content }: PartItemProps) {
  return (
    <div className="parts-list-item">
      <div className="flex gap-md items-center">
        <div className="parts-list-dot" />
        <span
          className="text-primary"
          style={{ fontSize: '14px', lineHeight: 1.5 }}
        >
          {content}
        </span>
      </div>
    </div>
  );
}

interface PartsListProps {
  haveParts: SummaryPart[];
  missingParts: SummaryPart[];
}

export function PartsList({ haveParts, missingParts }: PartsListProps) {
  const { t } = useTranslation();

  const haveListItems = haveParts
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((part, index) => ({
      key: `have-${part.name}-${index}`,
      content:
        part.needed > 1
          ? `${part.name} (${part.have}/${part.needed})`
          : part.name,
    }));

  const missingListItems = missingParts
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((part, index) => ({
      key: `missing-${part.name}-${index}`,
      content: part.needed > 1 ? `${part.name} (0/${part.needed})` : part.name,
    }));

  return (
    <div className="grid-responsive" style={{ marginTop: 16, gap: 12 }}>
      <div className="parts-list-card parts-list-card-success">
        <div className="parts-list-header">
          <div className="flex gap-md items-center">
            <div
              className="parts-list-icon"
              style={{
                background: 'var(--color-success-bg)',
                borderColor: 'var(--color-success-border)',
              }}
            >
              <span
                className="badge badge-success"
                style={{ width: 12, height: 12 }}
              />
            </div>
            <div>
              <h4
                className="text-uppercase-sm"
                style={{
                  fontSize: '12px',
                  margin: 0,
                  marginBottom: 2,
                  color: 'var(--color-success)',
                }}
              >
                {t('partsList.haveTitle')}
              </h4>
              <p
                className="text-secondary"
                style={{ fontSize: '11px', margin: 0 }}
              >
                {haveParts.length === 1
                  ? `1 ${t('partsList.item')}`
                  : `${haveParts.length} ${t('partsList.items')}`}
              </p>
            </div>
          </div>
        </div>
        <div
          className="parts-list-content scrollbar-custom"
          style={{
            fontSize: '14px',
            maxHeight: '200px',
            overflowY: 'auto',
            overflowX: 'hidden',
            paddingRight: 4,
          }}
        >
          {haveParts.length === 0 ? (
            <p
              className="text-secondary parts-list-empty"
              style={{
                fontSize: '12px',
                display: 'block',
                fontStyle: 'italic',
                textAlign: 'center',
                padding: '20px 0',
              }}
            >
              {t('partsList.noPartsSelected')}
            </p>
          ) : (
            <div className="parts-list-items">
              {haveListItems.map(item => (
                <PartItem key={item.key} content={item.content} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="parts-list-card parts-list-card-error">
        <div className="parts-list-header">
          <div className="flex gap-md items-center">
            <div
              className="parts-list-icon"
              style={{
                background: 'var(--color-error-bg)',
                borderColor: 'var(--color-error-border)',
              }}
            >
              <span
                className="badge badge-error"
                style={{ width: 12, height: 12 }}
              />
            </div>
            <div>
              <h4
                className="text-uppercase-sm"
                style={{
                  fontSize: '12px',
                  margin: 0,
                  marginBottom: 2,
                  color: 'var(--color-error)',
                }}
              >
                {t('partsList.missingTitle')}
              </h4>
              <p
                className="text-secondary"
                style={{ fontSize: '11px', margin: 0 }}
              >
                {missingParts.length === 1
                  ? `1 ${t('partsList.item')}`
                  : `${missingParts.length} ${t('partsList.items')}`}
              </p>
            </div>
          </div>
        </div>
        <div
          className="parts-list-content scrollbar-custom"
          style={{
            fontSize: '14px',
            maxHeight: '200px',
            overflowY: 'auto',
            overflowX: 'hidden',
            paddingRight: 4,
          }}
        >
          {missingParts.length === 0 ? (
            <p
              className="text-secondary parts-list-empty"
              style={{
                fontSize: '12px',
                display: 'block',
                fontStyle: 'italic',
                textAlign: 'center',
                padding: '20px 0',
              }}
            >
              {t('partsList.noPartsMissing')}
            </p>
          ) : (
            <div className="parts-list-items">
              {missingListItems.map(item => (
                <PartItem key={item.key} content={item.content} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
