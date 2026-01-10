import { Space, Tag, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

const { Title, Text } = Typography;

export function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <Space orientation="vertical" size="small" style={{ width: '100%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 12,
            flexWrap: 'wrap',
          }}
        >
          <Space size="middle" wrap>
            <Title
              level={1}
              style={{
                margin: 0,
                fontSize: '1.75rem',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              {t('header.title', { gameName: 'My Winter Car' })}
            </Title>
            <Tag
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                padding: '4px 10px',
                borderRadius: '999px',
                borderColor: 'rgba(56,189,248,0.5)',
                backgroundColor: 'rgba(15,23,42,0.8)',
                color: '#38bdf8',
              }}
            >
              {t('header.subtitle')}
            </Tag>
          </Space>
          <LanguageSwitcher />
        </div>
        <Text
          type="secondary"
          style={{
            fontSize: '14px',
            maxWidth: '640px',
            display: 'block',
          }}
        >
          {t('header.description')}
        </Text>
      </Space>
    </header>
  );
}
