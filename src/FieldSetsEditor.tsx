/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
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
            <div className="ScatterDotSize">
              <Input
                type="number"
                label="Size"
                value={values[index].size}
                min={1}
                max={20}
                title="Set size of dot"
                onChange={e => {
                  values[index].size = (e.target as HTMLInputElement).valueAsNumber
                  onChange(values)
                }
                }
              />
            </div>
            <div className="ScatterDot">
              <ColorPicker
                color={values[index].color}
                onChange={e => {
                  values[index].color = e
                  onChange(values)
                }
                }
              />
            </div>
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
            values.push(new FieldSet(-1, '#' + Math.floor(Math.random() * 16777215).toString(16), 2, false))
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
