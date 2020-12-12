import React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { Select, Button } from '@grafana/ui';

interface Props extends StandardEditorProps<number[]> {}

export const MultiFieldSelectEditor: React.FC<Props> = ({ item, value, onChange, context }) => {

  if (context.data && context.data.length > 0) {
    const options = context.data
      .flatMap(frame => frame.fields)
      .map((field, index) => ({
        label: field.config?.displayName ? field.config.displayName : field.name,
        value: index,
      }));


    var selects = new Array();

    let values = context.options.yAxisFields.filter((x: number) => x != null)

    if (values) {
      values.forEach((val:Number, index:number) => {
        selects.push(<div css='display:inline-block'>
          <Select<number> 
            isLoading={false} 
            value={values[index]} 
            isClearable={values.length > 1}
            onChange={e => {
              values[index] = e?.value; 
              onChange(values)
            }
          } 
          options={options} />
        <p>Hi</p>
        </div>)
      });
    }

    var addButton = values.some((x: number) => x == -1) ? null :
      (<Button variant='primary' size="sm" 
        onClick={() => {
          values.push(-1);
          onChange(values)
        }}>
        <i className="fa fa-plus addBtn"></i> Add {item.name.replace("(s)","")}
      </Button>);

    return (
      <div>
        {selects}
        {addButton}
      </div>
    );
  }

  return null;
};