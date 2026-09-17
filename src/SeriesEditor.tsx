import React from 'react';
import type { StandardEditorProps } from '@grafana/data';
import { Input, InlineField, InlineFieldRow, Select, Switch } from '@grafana/ui';
import type { ScatterOptions, SeriesStyle } from './types';

type Props = StandardEditorProps<ScatterOptions['series']>;

export const SeriesEditor = ({ value, onChange, context }: Props) => {
  const numericFields = (context.data ?? []).flatMap((frame) =>
    frame.fields.filter((field) => field.type === 'number').map((field) => field.name)
  );
  const uniqueFields = [...new Set(numericFields)];
  const series = value ?? [];

  const update = (index: number, patch: Partial<SeriesStyle>) => {
    const next = series.map((item, i) => (i === index ? { ...item, ...patch } : item));
    onChange(next);
  };

  return (
    <div>
      {series.map((item, index) => (
        <div key={`${item.field}-${index}`} style={{ marginBottom: 12 }}>
          <InlineFieldRow>
            <InlineField label="Field" grow>
              <Select
                options={uniqueFields.map((field) => ({ label: field, value: field }))}
                value={item.field}
                onChange={(v) => v.value && update(index, { field: v.value })}
              />
            </InlineField>
          </InlineFieldRow>
          <InlineFieldRow>
            <InlineField label="Line width">
              <Input
                type="number"
                min={0}
                max={20}
                step={1}
                value={item.lineWidth}
                onChange={(e) => update(index, { lineWidth: Number(e.currentTarget.value) })}
              />
            </InlineField>
            <InlineField label="Points">
              <Switch value={item.showPoints} onChange={(e) => update(index, { showPoints: e.currentTarget.checked })} />
            </InlineField>
          </InlineFieldRow>
        </div>
      ))}
      {uniqueFields.length > 0 && (
        <button
          type="button"
          onClick={() => onChange([...series, { field: uniqueFields.find((f) => !series.some((s) => s.field === f)) ?? uniqueFields[0], lineWidth: 2, showPoints: true, pointSize: 5 }])}
        >
          Add series
        </button>
      )}
    </div>
  );
};
