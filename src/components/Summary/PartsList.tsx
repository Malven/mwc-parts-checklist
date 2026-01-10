import { Badge, Card, Col, Row, Space, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { SummaryPart } from '../../types';

const { Text } = Typography;

interface PartItemProps {
  content: string;
}

function PartItem({ content }: PartItemProps) {
  return (
    <div style={{ padding: '2px 0' }}>
      <Space size="small">
        <div
          style={{
            width: 4,
            height: 4,
            borderRadius: '50%',
            backgroundColor: 'rgba(148, 163, 184, 0.7)',
            flexShrink: 0,
          }}
        />
        <Text style={{ fontSize: '14px' }}>{content}</Text>
      </Space>
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
    <Row gutter={10} style={{ marginTop: 10 }}>
      <Col xs={24} sm={12}>
        <Card
          size="small"
          style={{
            borderRadius: 12,
            backgroundColor: 'rgba(15,23,42,0.9)',
            borderColor: 'rgba(148, 163, 184, 0.9)',
          }}
          styles={{ body: { padding: '8px 10px 6px' } }}
        >
          <Space orientation="vertical" size="small" style={{ width: '100%' }}>
            <Space>
              <Badge color="#22c55e" />
              <Text
                type="secondary"
                style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  whiteSpace: 'nowrap',
                }}
              >
                {t('partsList.haveTitle')}
              </Text>
            </Space>
            <Text type="secondary" style={{ fontSize: '12px' }}>
              {haveParts.length === 1
                ? `1 ${t('partsList.item')}`
                : `${haveParts.length} ${t('partsList.items')}`}
            </Text>
            <div
              style={{
                fontSize: '14px',
                maxHeight: '170px',
                overflowY: 'auto',
                overflowX: 'hidden',
                paddingRight: 2,
              }}
              className="scrollbar-custom"
            >
              {haveParts.length === 0 ? (
                <Text
                  type="secondary"
                  italic
                  style={{ fontSize: '12px', display: 'block' }}
                >
                  {t('partsList.noPartsSelected')}
                </Text>
              ) : (
                <div>
                  {haveListItems.map(item => (
                    <PartItem key={item.key} content={item.content} />
                  ))}
                </div>
              )}
            </div>
          </Space>
        </Card>
      </Col>

      <Col xs={24} sm={12}>
        <Card
          size="small"
          style={{
            borderRadius: 12,
            backgroundColor: 'rgba(15,23,42,0.9)',
            borderColor: 'rgba(148, 163, 184, 0.9)',
          }}
          styles={{ body: { padding: '8px 10px 6px' } }}
        >
          <Space orientation="vertical" size="small" style={{ width: '100%' }}>
            <Space>
              <Badge color="#f97316" />
              <Text
                type="secondary"
                style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  whiteSpace: 'nowrap',
                }}
              >
                {t('partsList.missingTitle')}
              </Text>
            </Space>
            <Text type="secondary" style={{ fontSize: '12px' }}>
              {missingParts.length === 1
                ? `1 ${t('partsList.item')}`
                : `${missingParts.length} ${t('partsList.items')}`}
            </Text>
            <div
              style={{
                fontSize: '14px',
                maxHeight: '170px',
                overflowY: 'auto',
                overflowX: 'hidden',
                paddingRight: 2,
              }}
              className="scrollbar-custom"
            >
              {missingParts.length === 0 ? (
                <Text
                  type="secondary"
                  italic
                  style={{ fontSize: '12px', display: 'block' }}
                >
                  {t('partsList.noPartsMissing')}
                </Text>
              ) : (
                <div>
                  {missingListItems.map(item => (
                    <PartItem key={item.key} content={item.content} />
                  ))}
                </div>
              )}
            </div>
          </Space>
        </Card>
      </Col>
    </Row>
  );
}
