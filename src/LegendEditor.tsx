import { StandardEditorProps } from '@grafana/data'
import { Input } from '@grafana/ui'
import React from 'react'
import { Legend } from 'types'

interface Props extends StandardEditorProps<Legend> { };

export const LegendEditor: React.FC<Props> = ({ value, onChange }) => (
  <div className="ScatterLegend ScatterFlex">
    <div className="ScatterLabel">Text Size</div>
    <Input
      className="ScatterLegendSize"
      type="number"
      value={value.size}
      min={0}
      max={10}
      title="Legend Text Size (or 0 to turn off legends)"
      onChange={e => {
        value.size = (e.target as HTMLInputElement).valueAsNumber
        onChange(value)
      } } />
  </div>
)
