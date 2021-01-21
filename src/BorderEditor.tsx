import React from 'react'
import { StandardEditorProps } from '@grafana/data';
import { Checkbox, ColorPicker, Input } from '@grafana/ui';
import { Border } from 'types';

interface Props extends StandardEditorProps<Border> { }

export const BorderEditor: React.FC<Props> = ({ value, onChange }) => {
  const colorandsize = value.show ? (
    <div className="ScatterFlex">
      <div className="ScatterLabel">Size</div>
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
      <div className="ScatterDotColor">
        <ColorPicker
          color={value.color}
          enableNamedColors={false}
          onChange={(e: string) => {
            value.color = e;
            onChange(value);
          }} />
      </div>
    </div>
  ) : null;

  return (
    <div className="ScatterBorder ScatterFlex">
      <div className="ScatterFlex">
        <div className="ScatterCheckbox">Show</div>
        <Checkbox
          css=''
          value={value.show}
          onChange={(e: { currentTarget: { checked: boolean } }) => {
            value.show = e.currentTarget.checked;
            onChange(value);
          }}
        />
      </div>
      {colorandsize}
    </div>);
}
