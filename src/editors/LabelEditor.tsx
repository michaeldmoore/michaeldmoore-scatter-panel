import * as React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { Select } from '@grafana/ui';
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
      }));

    return (
      <div className="LabelEditor">
        <div className="ScatterFlex">
          <div className="ScatterSelect">
            <Select<number>
              isLoading={false}
              isClearable={true}
              value={label.col}
              onChange={(e) => {
                label.col = e ? e.value as number : -1;
                onChange(label);
              }}
              options={options}
            />
          </div>
        </div>
      </div>
    );
  }

  return <Select onChange={() => { }} disabled />;
};
