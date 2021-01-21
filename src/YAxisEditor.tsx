import React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { Button, ColorPicker, Input, Select } from '@grafana/ui';
import { FieldSet } from 'types';

var randomColor = require('randomcolor');

interface Props extends StandardEditorProps<FieldSet[]> { }

export const YAxisEditor: React.FC<Props> = ({ item, onChange, context }) => {
  if (context.data && context.data.length > 0) {
    const options = context.data
      .flatMap(frame => frame.fields)
      .map((field, index) => ({
        label: field.config?.displayName ? field.config.displayName : field.name,
        value: index
      }))

    const selects = new Array(0)

    const values = context.options.fieldSets.filter((x: FieldSet) => x.col != null)

    if (values) {
      values.forEach((val: Number, index: number) => {
        const lineSize = values[index].lineType == 'none' ? null : (
          <div className="ScatterFlex ScatterSize">
            <div className="ScatterLabel">Size</div>
            <Input
              css=''
              type="number"
              label="Line Size"
              value={values[index].lineSize}
              min={1}
              max={10}
              title="Set size of line"
              onChange={(e) => {
                values[index].lineSize = (e.target as HTMLInputElement).valueAsNumber;
                onChange(values);
              }} />
          </div>);

        selects.push(
          <div className="YAxisEditor">
            <div className="ScatterFlex">
              <div className="ScatterSelect">
                <Select<number>
                  isLoading={false}
                  value={values[index].col}
                  isClearable={values.length > 1}
                  onChange={e => {
                    if (e) { values[index].col = e.value; } else { values.splice(index, 1); }
                    onChange(values);
                  }}
                  options={options} />
              </div>
              <div className="ScatterDotColor">
                <ColorPicker
                  color={values[index].color}
                  enableNamedColors={false}
                  onChange={(e) => {
                    values[index].color = e;
                    onChange(values);
                  }} />
              </div>
              <div className="ScatterFlex ScatterSize">
                <div className="ScatterLabel">Size</div>
                <Input
                  css=''
                  type="number"
                  label="Dot Size"
                  value={values[index].dotSize}
                  min={1}
                  max={20}
                  title="Set size of dot"
                  onChange={(e) => {
                    values[index].dotSize = (e.target as HTMLInputElement).valueAsNumber;
                    onChange(values);
                  }} />
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
                    { label: 'Power', value: 'power' }]} />
              </div>
              {lineSize}
            </div>
            <hr />
          </div>);
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
              values.push(new FieldSet(-1, randomColor(), 2, 0, 'none', false));
              onChange(values);
            }}>
            <i className="fa fa-plus"></i> Add {item.name.replace('(s)', '')}
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
}
