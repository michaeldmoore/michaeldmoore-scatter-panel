/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import { StandardEditorProps } from '@grafana/data'
import { Select } from '@grafana/ui'
import React from 'react'

interface Props extends StandardEditorProps<number> { };

export const FieldSelectEditor: React.FC<Props> = ({ value, onChange, context }) => {
  if (context.data && context.data.length > 0) {
    const options = context.data
      .flatMap(frame => frame.fields)
      .map((field, index) => ({
        label: field.config?.displayName ? field.config.displayName : field.name,
        value: index
      }))

    return <Select<number> isLoading={false} value={value} onChange={e => onChange(e.value)} options={options} />
  }

  return <Select onChange={() => { }} disabled={true} />
}
