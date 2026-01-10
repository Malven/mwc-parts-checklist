import { useTranslation } from 'react-i18next';
import { Row, Col, Card, Typography } from 'antd';

const { Text } = Typography;

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

  return (
    <Row gutter={8}>
      <Col xs={8} sm={8}>
        <Card
          size="small"
          style={{
            borderRadius: 12,
            background:
              'radial-gradient(circle at top, rgba(15,23,42,0.9), #020617)',
            borderColor: 'rgba(148, 163, 184, 0.9)',
            padding: '8px 10px',
          }}
          styles={{ body: { padding: '8px 10px' } }}
        >
          <Text
            type="secondary"
            style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              display: 'block',
              marginBottom: 3,
            }}
          >
            {t('metrics.totalParts')}
          </Text>
          <Text
            style={{
              fontSize: '18px',
              fontWeight: 600,
              display: 'block',
            }}
          >
            {totalNeeded}
          </Text>
        </Card>
      </Col>
      <Col xs={8} sm={8}>
        <Card
          size="small"
          style={{
            borderRadius: 12,
            background:
              'radial-gradient(circle at top, rgba(15,23,42,0.9), #020617)',
            borderColor: 'rgba(34, 197, 94, 0.7)',
            padding: '8px 10px',
          }}
          styles={{ body: { padding: '8px 10px' } }}
        >
          <Text
            type="secondary"
            style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              display: 'block',
              marginBottom: 3,
            }}
          >
            {t('metrics.have')}
          </Text>
          <Text
            style={{
              fontSize: '18px',
              fontWeight: 600,
              display: 'block',
            }}
          >
            {totalHave}
          </Text>
        </Card>
      </Col>
      <Col xs={8} sm={8}>
        <Card
          size="small"
          style={{
            borderRadius: 12,
            background:
              'radial-gradient(circle at top, rgba(15,23,42,0.9), #020617)',
            borderColor: 'rgba(248, 113, 113, 0.6)',
            padding: '8px 10px',
          }}
          styles={{ body: { padding: '8px 10px' } }}
        >
          <Text
            type="secondary"
            style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              display: 'block',
              marginBottom: 3,
            }}
          >
            {t('metrics.missing')}
          </Text>
          <Text
            style={{
              fontSize: '18px',
              fontWeight: 600,
              display: 'block',
            }}
          >
            {totalMissing}
          </Text>
        </Card>
      </Col>
    </Row>
  );
}
