import * as React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { ColorPicker } from '@grafana/ui';
import { Grid } from '../types/Grid';

interface Props extends StandardEditorProps<Grid> { }

export const GridEditor: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="ScatterBorder ScatterFlex">
      <div className="ScatterFlex">
        <div className="ScatterCheckbox">Color</div>
        <div className="ScatterDotColor">
          <ColorPicker
            color={value.color}
            enableNamedColors={false}
            onChange={(e: string) => {
              value.color = e;
              onChange(value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
