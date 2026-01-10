import type { ThemeConfig } from 'antd';
import { theme } from 'antd';

/**
 * Ant Design theme configuration mapping existing CSS variables to Ant Design tokens
 * Configured for dark mode with custom colors matching the original design
 */
export const appTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    // Primary color (accent)
    colorPrimary: '#38bdf8',

    // Text colors
    colorText: '#e5e7eb',
    colorTextSecondary: '#94a3b8',
    colorTextTertiary: '#94a3b8',

    // Background colors
    colorBgBase: '#0f172a',
    colorBgContainer: '#020617',
    colorBgElevated: '#020617',

    // Border colors
    colorBorder: '#1e293b',
    colorBorderSecondary: 'rgba(148, 163, 184, 0.15)',

    // Success colors (have parts)
    colorSuccess: '#22c55e',
    colorSuccessBg: 'rgba(34, 197, 94, 0.18)',
    colorSuccessBorder: '#22c55e',

    // Error colors (missing parts)
    colorError: '#f87171',
    colorErrorBg: 'rgba(248, 113, 113, 0.06)',
    colorErrorBorder: 'rgba(248, 113, 113, 0.4)',

    // Warning colors (partial parts)
    colorWarning: '#fbbf24',
    colorWarningBg: 'rgba(251, 191, 36, 0.12)',
    colorWarningBorder: 'rgba(251, 191, 36, 0.4)',

    // Border radius
    borderRadius: 8,
    borderRadiusLG: 14,
    borderRadiusSM: 6,

    // Font sizes
    fontSize: 14,
    fontSizeLG: 16,
    fontSizeSM: 12,

    // Spacing
    padding: 16,
    paddingLG: 18,
    paddingSM: 12,
    paddingXS: 8,

    // Control height
    controlHeight: 32,
    controlHeightLG: 40,
    controlHeightSM: 24,
  },
  components: {
    Card: {
      borderRadiusLG: 18,
      paddingLG: 18,
      colorBorderSecondary: 'rgba(148, 163, 184, 0.15)',
    },
    Button: {
      borderRadius: 8,
      controlHeight: 32,
      colorTextDisabled: 'rgba(148, 163, 184, 0.3)',
      colorBgContainerDisabled: 'rgba(15, 23, 42, 0.5)',
      colorBorderDisabled: 'rgba(148, 163, 184, 0.2)',
      colorText: '#e5e7eb',
      colorBgContainer: 'rgba(15, 23, 42, 0.8)',
      colorBorder: 'rgba(148, 163, 184, 0.5)',
      colorPrimaryHover: 'rgba(56, 189, 248, 0.2)',
      colorPrimaryBorderHover: 'rgba(56, 189, 248, 0.5)',
      colorTextTertiary: '#e5e7eb',
    },
    Input: {
      borderRadius: 8,
      controlHeight: 32,
    },
    Modal: {
      borderRadius: 18,
    },
    Switch: {
      colorPrimary: '#22c55e',
      colorPrimaryHover: '#16a34a',
    },
  },
};
