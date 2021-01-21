import React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { Checkbox, Input } from '@grafana/ui';
import { Legend } from 'types';

interface Props extends StandardEditorProps<Legend> { }

export const LegendEditor: React.FC<Props> = ({ value, onChange }) => {
  const textsize = value.show ? (
    <div className="ScatterFlex">
      <div className="ScatterLabel">Text Size</div>
      <Input
        css=''
        className="ScatterLegendSize"
        type="number"
        value={value.size}
        min={1}
        max={10}
        title="Legend Text Size"
        onChange={(e) => {
          value.size = (e.target as HTMLInputElement).valueAsNumber;
          onChange(value);
        }} />
    </div>
  ) : null;

  return (
    <div className="ScatterLegend ScatterFlex">
      <div className="ScatterFlex">
        <div className="ScatterCheckbox">Show</div>
        <Checkbox
          css=''
          value={value.show}
          onChange={(e) => {
            value.show = e.currentTarget.checked;
            onChange(value);
          }} />
      </div>
      {textsize}
    </div>);
}
