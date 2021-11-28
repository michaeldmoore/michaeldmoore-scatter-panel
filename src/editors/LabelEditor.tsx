import React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { Select, Input, ColorPicker } from '@grafana/ui';
import { Label } from '../types/Label';

interface Props extends StandardEditorProps<Label> { }

export const LabelEditor: React.FC<Props> = ({ onChange, context }) => {
  if (
    context.data
    && context.data.length > 0) {
    const { label } = context.options;
    const options = context.data
      .flatMap((frame) => frame.fields)
      .map((field, index) => ({
        label: field.config?.displayName ? field.config.displayName : field.name,
        value: index,
        valid: field.type === 'string',
      }))
      .filter((o) => o.valid);

    const color = label.col >= 0
      ?
      (
        <div className="ScatterFlex">
          <div className="ScatterFlex ScatterSize">
            <div className="ScatterLabel">Size</div>
            <Input
              type="number"
              min={1}
              max={10}
              title="Set size of text"
              value={label.textSize}
              onChange={(e) => {
                label.textSize = (e.target as HTMLInputElement).valueAsNumber;
                onChange(label);
              }}
            />
          </div>

          <div className="LabelColor">
            <ColorPicker
              color={label.color}
              enableNamedColors={false}
              onChange={(e) => {
                label.color = e;
                onChange(label);
              }}
            />
          </div>
        </div>
      )
      : null;

    return (
      <div className="LabelEditor">
        <div className="ScatterFlex">
          <div className="ScatterSelect">
            <Select<number>
              isLoading={false}
              isClearable
              value={label.col}
              onChange={(e) => {
                label.col = e ? e.value as number : -1;
                onChange(label);
              }}
              options={options}
            />
          </div>
        </div>
        {color}
      </div>
    );
  }

  return <Select onChange={() => { }} disabled />;
};
