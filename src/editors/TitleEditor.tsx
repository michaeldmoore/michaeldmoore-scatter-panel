import React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { ColorPicker, Input } from '@grafana/ui';
import { Title } from '../types/Title';

interface Props extends StandardEditorProps<Title> { }

export const TitleEditor: React.FC<Props> = ({ value, onChange }) => {
  const color = value.textSize > 0 ?
    <div className="TitleColor">
      <ColorPicker
        color={value.color}
        enableNamedColors={false}
        onChange={(e) => {
          value.color = e;
          onChange(value);
        }}
      />
    </div> : null;

  return (
    <div className="TitleEditor">
      <div className="TitleText">
        <Input
          type="string"
          value={value.text}
          onChange={(e) => {
            value.text = (e.target as HTMLInputElement).value;
            onChange(value);
          }}
        />
      </div>
      <div className="ScatterFlex ScatterSize">
        <div className="ScatterLabel">Size</div>
        <Input
          type="number"
          min={0}
          max={10}
          title="Set size of text"
          value={value.textSize}
          onChange={(e) => {
            value.textSize = (e.target as HTMLInputElement).valueAsNumber;
            onChange(value);
          }}
        />
      </div>
      {color}
    </div>
  );
};
