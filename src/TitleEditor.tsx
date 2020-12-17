import { StandardEditorProps } from '@grafana/data';
import { ColorPicker, Input } from '@grafana/ui';
import React from 'react';
import { Title } from 'types';


interface Props extends StandardEditorProps<Title> { }

export const TitleEditor: React.FC<Props> = ({ item, value, onChange, context }) => {

  return (
    <div className="TitleEditor">
      <div className="TitleText">
        <Input
          type="string"
          value={value.text}
          onChange={e => {
            value.text = e.target.value;
            onChange(value)
          }
          }
        />
      </div>
      <div className="TitleLabel">Size</div>
      <div className="TitleSize">
        <Input
          type="number"
          label="Size"
          value={value.size}
          onChange={e => {
            value.size = e.target.valueAsNumber;
            onChange(value)
          }
          }
        />
      </div>
      <div className="TitleColor">
        <ColorPicker
          color={value.color}
          onChange={e => {
            value.color = e;
            onChange(value)
          }
          }
        />
      </div>
    </div>);
};