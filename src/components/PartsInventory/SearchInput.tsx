import { Input } from 'antd';
import { useTranslation } from 'react-i18next';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  const { t } = useTranslation();

  return (
    <Input
      placeholder={t('search.placeholder')}
      aria-label={t('search.ariaLabel')}
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{ marginBottom: 12 }}
    />
  );
}
