import grafanaConfig from '@grafana/eslint-config';

export default [
  {
    ignores: ['**/dist/**', '**/coverage/**', '**/playwright-report/**', '**/test-results/**'],
  },
  ...grafanaConfig,
  {
    name: 'project/files',
    files: ['**/*.{js,jsx,ts,tsx,cjs,mjs}'],
  },
];
