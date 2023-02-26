import { createTheme } from '@stitches/react'

export const standardTheme = createTheme('standard', {
  colors: {
    gray100: '#f3f4f6',
    gray200: '#e5e7eb',
    gray300: '#d1d5db',
    gray400: '#9ca3af',
    gray50: '#f9fafb',
    gray500: '#6b7280',
    gray600: '#4b5563',
    gray700: '#374151',
    gray800: '#1f2937',
    gray900: '#111827',
    indigo100: '#e0e7ff',
    indigo200: '#c7d2fe',
    indigo300: '#a5b4fc',
    indigo400: '#818cf8',
    indigo50: '#eef2ff',
    indigo500: '#6366f1',
    indigo600: '#4f46e5',
    indigo700: '#4338ca',
    indigo800: '#3730a3',
    indigo900: '#312e81',
    slate100: '#f1f5f9',
    slate200: '#e2e8f0',
    slate300: '#cbd5e1',
    slate400: '#94a3b8',
    slate50: '#f8fafc',
    slate500: '#64748b',
    slate600: '#475569',
    slate700: '#334155',
    slate800: '#1e293b',
    slate900: '#0f172a'
  },
  space: {
    1: '0.8rem',
    2: '1.6rem',
    3: '2.4rem',
    4: '3.2rem'
  },
  fontSizes: {
    1: '1rem',
    2: '1.2rem',
    3: '1.4rem',
    4: '1.6rem',
    5: '1.8rem',
    6: '2.4rem',
    7: '3.2rem',
    8: '4.8rem'
  },
  fontWeights: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2
  },
  radii: {
    full: '50%',
    lg: '0.8rem',
    md: '0.4rem',
    sm: '0.2rem'
  },
  shadows: {
    card: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;',
    button:
      'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;',
    input:
      'box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;'
  },
  sizes: {
    fabIcon: '20px',
    hClickable: '48px',
    maxWidth: '60rem'
  }
})
