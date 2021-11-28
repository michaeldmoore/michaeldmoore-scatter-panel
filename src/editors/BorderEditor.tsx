import React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { ColorPicker, Input } from '@grafana/ui';
import { Border } from '../types/Border';

interface Props extends StandardEditorProps<Border> { }

export const BorderEditor: React.FC<Props> = ({ value, onChange }) => {
  const color = value.size > 0
    ?
    (<div className="ScatterDotColor">
      <ColorPicker
        color={value.color}
        enableNamedColors={false}
        onChange={(e: string) => {
          value.color = e;
          onChange(value);
        }}
      />
    </div>)
    : null;

  return
  (
    <div className="ScatterFlex">
      <div className="ScatterFlex ScatterSize">
        <div className="ScatterLabel">Size</div>
        <Input
          type="number"
          min={0}
          max={10}
          title="Border Line width"
          value={value.size}
          onChange={(e) => {
            value.size = (e.target as HTMLInputElement).valueAsNumber;
            onChange(value);
          }}
        />
      </div>
      {color}
    </div>
  );
};
