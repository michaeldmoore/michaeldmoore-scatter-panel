import type React from 'react';
import type { PanelProps } from '@grafana/data';
import { useTheme2 } from '@grafana/ui';

type NewScatterOptions = Record<string, unknown>;

type Props = PanelProps<NewScatterOptions>;

const panelName = 'New Scatter Panel';

export const NewScatterPanel: React.FC<Props> = ({ width, height }) => {
  const theme = useTheme2();

  return (
    <div style={{ width, height, display: 'grid', placeItems: 'center' }}>
      <input
        aria-label="Panel name"
        readOnly
        type="text"
        value={panelName}
        style={{
          boxSizing: 'border-box',
          width: '100%',
          padding: '8px 12px',
          color: theme.colors.text.primary,
          backgroundColor: theme.colors.background.secondary,
          border: `1px solid ${theme.colors.border.weak}`,
          borderRadius: '4px',
        }}
      />
    </div>
  );
};
