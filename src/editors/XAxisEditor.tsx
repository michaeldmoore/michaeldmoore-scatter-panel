import * as React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { Checkbox, Select } from '@grafana/ui';
import { XAxis } from '../types/XAxis';

interface Props extends StandardEditorProps<XAxis> { }

export const XAxisEditor: React.FC<Props> = ({ onChange, context }) => {
  if (
    context.data
    && context.data.length > 0) {
    const { xAxis } = context.options;
    const options = context.data
      .flatMap((frame) => frame.fields)
      .map((field, index) => ({
        label: field.config?.displayName ? field.config.displayName : field.name,
        value: index,
        valid: field.type !== "string"
      }))
      .filter(o => o.valid);

    return (
      <div className="XAxisEditor">
        <div className="ScatterFlex">
          <div className="ScatterSelect">
            <Select<number>
              isLoading={false}
              value={xAxis.col}
              onChange={(e) => {
                xAxis.col = e.value as number;
                onChange(xAxis);
              }}
              options={options}
            />
          </div>
          <div className="ScatterFlex">
            <div className="ScatterCheckbox" title="Draw X axis right to left">Inverted</div>
            <Checkbox
              value={xAxis.inverted}
              onChange={(e) => {
                xAxis.inverted = e.currentTarget.checked;
                onChange(xAxis);
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return <Select onChange={() => { }} disabled />;
};
