import { StandardEditorProps } from '@grafana/data'
import { Button, ColorPicker, Input, Select } from '@grafana/ui'
import { FieldSet } from 'types'
import React from 'react'

interface Props extends StandardEditorProps<FieldSet[]> { };

export const FieldSetsEditor: React.FC<Props> = ({ item, onChange, context }) => {
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
        selects.push(
          <div className="FieldSetsEditor">
            <div className="ScatterFlex">
              <div className="ScatterSelect">
                <Select<number>
                  isLoading={false}
                  value={values[index].col}
                  isClearable={values.length > 1}
                  onChange={e => {
                    if (e) { values[index].col = e.value } else { values.splice(index, 1) }
                    onChange(values)
                  }
                  }
                  options={options} />
              </div>
              <div className="ScatterDotColor">
                <ColorPicker
                  color={values[index].color}
                  onChange={e => {
                    values[index].color = e
                    onChange(values)
                  }
                  }
                />
              </div>
            </div>
            <div className="ScatterFlex">
              <div className="ScatterFlex ScatterSize">
                <div className="ScatterLabel">Dot Size</div>
                <Input
                  type="number"
                  label="Dot Size"
                  value={values[index].dotSize}
                  min={1}
                  max={20}
                  title="Set size of dot"
                  onChange={e => {
                    values[index].dotSize = (e.target as HTMLInputElement).valueAsNumber
                    onChange(values)
                  }
                  }
                />
              </div>
              <div className="ScatterFlex ScatterSize">
                <div className="ScatterLabel">Line Size</div>
                <Input
                  type="number"
                  label="Line Size"
                  value={values[index].lineSize}
                  min={0}
                  max={10}
                  title="Set size of line"
                  onChange={e => {
                    values[index].lineSize = (e.target as HTMLInputElement).valueAsNumber
                    onChange(values)
                  }
                  }
                />
              </div>
            </div>
            <hr/>
          </div>)
      })
    }

    const addButton = values.some((x: FieldSet) => x.col === -1)
      ? null
      : (
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            values.push(new FieldSet(-1, '#' + Math.floor(Math.random() * 16777215).toString(16), 2, 0, false))
            onChange(values)
          }}>
          <i className="fa fa-plus"></i> Add {item.name.replace('(s)', '')}
        </Button>
      )

    return (
      <div>
        {selects}
        {addButton}
      </div>
    )
  }

  return null
}
