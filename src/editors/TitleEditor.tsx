import * as React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { ColorPicker, Input } from '@grafana/ui';
import { Title } from '../types/Title';

interface Props extends StandardEditorProps<Title> { }

export const TitleEditor: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="TitleEditor">
      <div className="TitleText">
        <Input
          css=""
          type="string"
          value={value.text}
          onChange={(e) => {
            value.text = (e.target as HTMLInputElement).value;
            onChange(value);
          }} 
        />
      </div>
      <div className="TitleLabel">Size</div>
      <div className="TitleSize">
        <Input
          css=""
          type="number"
          label="Size"
          min={0}
          max={10}
          value={value.textSize}
          onChange={(e) => {
            value.textSize = (e.target as HTMLInputElement).valueAsNumber;
            onChange(value);
          }} 
        />
      </div>
      <div className="TitleColor">
        <ColorPicker
          color={value.color}
          enableNamedColors={false}
          onChange={(e) => {
            value.color = e;
            onChange(value);
          }} 
        />
      </div>
    </div>);
};
