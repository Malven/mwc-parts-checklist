import { useTranslation } from 'react-i18next';
import { Dropdown, Button, Space } from 'antd';
import type { MenuProps } from 'antd';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
] as const;

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const currentLanguage =
    languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  const menuItems: MenuProps['items'] = languages.map(lang => ({
    key: lang.code,
    label: (
      <Space>
        <span style={{ fontSize: '18px' }}>{lang.flag}</span>
        <span style={{ flex: 1 }}>{lang.name}</span>
        {i18n.language === lang.code && (
          <span style={{ color: '#38bdf8' }}>✓</span>
        )}
      </Space>
    ),
    onClick: () => handleLanguageChange(lang.code),
    style: {
      backgroundColor:
        i18n.language === lang.code ? 'rgba(56,189,248,0.2)' : 'transparent',
      color: i18n.language === lang.code ? '#38bdf8' : undefined,
    },
  }));

  return (
    <Dropdown
      menu={{ items: menuItems }}
      trigger={['click']}
      placement="bottomRight"
    >
      <Button
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 12px',
          height: 'auto',
          borderColor: 'rgba(148, 163, 184, 0.3)',
          backgroundColor: 'rgba(15,23,42,0.8)',
        }}
        aria-label={t('languageSwitcher.ariaLabel')}
      >
        <span style={{ fontSize: '18px' }}>{currentLanguage.flag}</span>
        <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {currentLanguage.code}
        </span>
        <span style={{ fontSize: '11px' }}>▾</span>
      </Button>
    </Dropdown>
  );
}
