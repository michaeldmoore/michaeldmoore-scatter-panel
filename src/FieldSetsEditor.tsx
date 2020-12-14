import React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { Select, Button, ColorPicker, Input } from '@grafana/ui';
import { FieldSet } from 'FieldSet';

import './ScatterEditor.css';

interface Props extends StandardEditorProps<FieldSet[]> { }

export const FieldSetsEditor: React.FC<Props> = ({ item, value, onChange, context }) => {

  if (context.data && context.data.length > 0) {
    const options = context.data
      .flatMap(frame => frame.fields)
      .map((field, index) => ({
        label: field.config?.displayName ? field.config.displayName : field.name,
        value: index,
      }));

    var selects = new Array();

    let values = context.options.fieldSets.filter((x: FieldSet) => x.col != null)

    if (values) {
      values.forEach((val: Number, index: number) => {
        selects.push(
          <div className="FieldSetsEditor">
            <div className="ScatterSelect">
              <Select<number>
                isLoading={false}
                value={values[index].col}
                isClearable={values.length > 1}
                onChange={e => {
                  values[index].col = e?.value;
                  onChange(values)
                }
                }
                options={options} />
            </div>
            <div className="ScatterDotSize">
              <Input
                type="number"
                label="Size"
                value={values[index].size}
                min={1}
                max={20}
                title="Set size of dot"
                onChange={e => {
                  values[index].size = e.target.valueAsNumber;
                  onChange(values)
                }
                }
              />
            </div>
            <div className="ScatterDot">
              <ColorPicker
                color={values[index].color}
                onChange={e => {
                  values[index].color = e;
                  onChange(values)
                }
                }
              />
            </div>
          </div>)
      });
    }

    var addButton = values.some((x: FieldSet) => x.col == -1) ? null :
      (
        <Button 
          variant="secondary"
          size="sm"
          onClick={() => {
            values.push(new FieldSet(-1, '#' + Math.floor(Math.random() * 16777215).toString(16), 2));
            onChange(values)
          }}>
          <i className="fa fa-plus"></i> Add {item.name.replace("(s)", "")}
        </Button>
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