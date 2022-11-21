import React from 'react';
import { StandardEditorProps } from '@grafana/data';
import {
  Button, ColorPicker, Input, Checkbox
} from '@grafana/ui';
import { ReferenceLine } from '../types/ReferenceLine';

const randomColor = require('randomcolor');

interface Props extends StandardEditorProps<ReferenceLine[]> { }

export const ReferenceLinesEditor: React.FC<Props> = ({ item, onChange, context }) => {
  if (context.data && context.data.length > 0) {
    const ReferenceLines = context.options.ReferenceLines;

    const ReferenceLinesContent = new Array(0);
     
    context.options.ReferenceLines.forEach((ReferenceLine: ReferenceLine, index: number) => {
      ReferenceLinesContent.push(
        <div className="ReferenceLineEditor">
          <div className="ScatterFlex">
            <div className="ScatterLabel">Value</div>
            <Input
              className='ReferenceLineValue'
              type="number"
              value={ReferenceLine.value}
              onChange={(e) => {
                ReferenceLine.value = (e.target as HTMLInputElement).valueAsNumber;
                onChange(ReferenceLines);
              }}
            />
            <div className='ScatterFlex ScatterSize'>
              <div className="ScatterLabel">Size</div>
              <Input
                type="number"
                min={0}
                max={10}
                title="Set size of text"
                value={ReferenceLine.lineSize}
                onChange={(e) => {
                  ReferenceLine.lineSize = (e.target as HTMLInputElement).valueAsNumber;
                  onChange(ReferenceLines);
                }}
              />
            </div>
            <div className="ScatterDotColor">
              <ColorPicker
                color={ReferenceLine.lineColor}
                enableNamedColors={false}
                onChange={(e) => {
                  ReferenceLine.lineColor = e;
                  onChange(ReferenceLines);
                }}
              />
            </div>
            <div className="ScatterLabel">Label</div>
            <Input
              className='ReferenceLineLabel'
              type="string"
              value={ReferenceLine.label}
              onChange={(e) => {
                ReferenceLine.label = (e.target as HTMLInputElement).value.toString();
                onChange(ReferenceLines);
              }}
            />
            <div className="ScatterFlex">
              <div className="ScatterCheckbox" title="Draw X axis right to left">Vertical</div>
              <Checkbox
                value={ReferenceLine.vertical}
                onChange={(e) => {
                  ReferenceLine.vertical = e.currentTarget.checked;
                  onChange(ReferenceLines);
                }}
              />
            </div>

            <Button
              className='ReferenceLineDeleteButton'
              variant="secondary"
              size="sm"
              onClick={() => {
                ReferenceLines.splice(index, 1);
                onChange(ReferenceLines);
              }}
            >
              {' '}
              <i className="fa fa-trash" />
            </Button>
          </div>
          <hr />
        </div>,
      );
    });

    const addButton = 
      (
        <div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              ReferenceLines.push(new ReferenceLine('', 0, randomColor(), 1, false));
              onChange(ReferenceLines);
            }}
          >
            <i className="fa fa-plus" />
            {'  '}
            Add
            {' ' + item.name.replace('(s)', '')}
          </Button>
          <hr />
        </div>
      );

    return (
      <div>
        {ReferenceLinesContent}
        {addButton}
      </div>
    );
  }

  return null;
};
