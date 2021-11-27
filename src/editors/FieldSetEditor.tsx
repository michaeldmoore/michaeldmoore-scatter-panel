import * as React from 'react';
import { StandardEditorProps } from '@grafana/data';
import {
  Button, ColorPicker, Input, Select,
} from '@grafana/ui';
import { FieldSet } from '../types/FieldSet';

const randomColor = require('randomcolor');

interface Props extends StandardEditorProps<FieldSet[]> { }

export const FieldSetEditor: React.FC<Props> = ({ item, onChange, context }) => {
  if (context.data && context.data.length > 0) {
    const options = context.data
      .flatMap((frame) => frame.fields)
      .map((field, index) => ({
        label: field.config?.displayName ? field.config.displayName : field.name,
        value: index,
        valid: field.type !== "string"
      }))
      .filter(o => o.valid);

    var sizeOptions = Array(0);

    for (var i = 1; i < 11; i += 2)
      sizeOptions.push({label: i, value: -i});

    options.forEach(o => {
      sizeOptions.push(o);
    });

    const selects = new Array(0);

    const values = context.options.fieldSets.filter((x: FieldSet) => x.col != null);

    if (values) {
      values.forEach((val: Number, index: number) => {
        const lineSize = values[index].lineType === 'none' ? null : (
          <div className="ScatterFlex ScatterSize">
            <div className="ScatterLabel">Size</div>
            <Input
              type="number"
              label="Line Size"
              value={values[index].lineSize}
              min={1}
              max={10}
              title="Set size of line"
              onChange={(e) => {
                values[index].lineSize = (e.target as HTMLInputElement).valueAsNumber;
                onChange(values);
              }}
            />
          </div>
        );

        selects.push(
          <div className="FieldSetEditor">
            <div className="ScatterFlex">
              <div className="ScatterSelect">
                <Select<number>
                  isLoading={false}
                  value={values[index].col}
                  isClearable={values.length > 1}
                  onChange={(e) => {
                    if (e) { values[index].col = e.value; } else { values.splice(index, 1); }
                    onChange(values);
                  }}
                  options={options}
                />
              </div>
              <div className="ScatterFlex ScatterDotSize">
                <div className="ScatterLabel">Size</div>

                <div className="ScatterSelect">
                  <Select<number>
                    isLoading={false}
                    value={values[index].sizeCol}
                    isClearable={true}  //  NB.  Add 1 thru 10 as negative numbers etc.
                    onChange={(e) => {
                      values[index].sizeCol = e ? e.value as number : -1;
                      onChange(values);
                    }}
                    options={sizeOptions}
                  />
                </div>
              </div>
              <div className="ScatterDotColor">
                <ColorPicker
                  color={values[index].color}
                  enableNamedColors={false}
                  onChange={(e) => {
                    values[index].color = e;
                    onChange(values);
                  }}
                />
              </div>
            </div>
            <div className="ScatterFlex">
              <div className="ScatterFlex ScatterLineType">
                <div className="ScatterLabel">Line</div>
                <Select<string>
                  isLoading={false}
                  value={values[index].lineType}
                  onChange={(e) => {
                    values[index].lineType = e.value;
                    onChange(values);
                  }}
                  options={[
                    { label: 'None', value: 'none' },
                    { label: 'Simple', value: 'simple' },
                    { label: 'Linear', value: 'linear' },
                    { label: 'Exponential', value: 'exponential' },
                    { label: 'Power', value: 'power' }]}
                />
              </div>
              {lineSize}
            </div>
            <hr />
          </div>,
        );
      });
    }

    const addButton = values.some((x: FieldSet) => x.col === -1)
      ? null
      : (
        <div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              values.push(new FieldSet(-1, -1, randomColor(), 2, 0, 'none', false));
              onChange(values);
            }}
          >
            <i className="fa fa-plus" />
            {' '}
            Add
            {item.name.replace('(s)', '')}
          </Button>
          <hr />
        </div>
      );

    return (
      <div>
        {selects}
        {addButton}
      </div>
    );
  }

  return null;
};
