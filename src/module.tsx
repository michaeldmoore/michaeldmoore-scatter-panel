import { PanelPlugin } from '@grafana/data'
import { Extents, Legend, ScatterOptions, Title } from './types'
import { ScatterPanel } from './ScatterPanel'
import { XAxisEditor } from './XAxisEditor'
import { YAxisEditor } from './YAxisEditor'
import { ExtentsEditor } from 'ExtentsEditor'
import { TitleEditor } from 'TitleEditor'
import { LegendEditor } from 'LegendEditor'

export const plugin = new PanelPlugin<ScatterOptions>(ScatterPanel)
  .setPanelOptions(builder => {
    builder.addCustomEditor({
      id: 'xAxis',
      path: 'xAxis',
      name: 'X Axis Field',
      category: ['X Axis'],
      editor: XAxisEditor,
      defaultValue: 0
    })

    builder.addCustomEditor({
      id: 'xAxisExtents',
      path: 'xAxisExtents',
      name: 'X Axis Extent (Min & Max)',
      category: ['X Axis'],
      editor: ExtentsEditor,
      defaultValue: new Extents(NaN, NaN)
    })

    builder.addCustomEditor({
      id: 'xAxisTitle',
      path: 'xAxisTitle',
      name: 'X Axis Title',
      category: ['X Axis'],
      editor: TitleEditor,
      defaultValue: new Title('', '#777', 1)
    })


    builder.addCustomEditor({
      id: 'fieldSets',
      path: 'fieldSets',
      name: 'Field(s)',
      category: ['Y Axis'],
      editor: YAxisEditor,
      defaultValue: []
    })

    builder.addCustomEditor({
      id: 'yAxisExtents',
      path: 'yAxisExtents',
      name: 'Y Axis Extent (Min & Max)',
      category: ['Y Axis'],
      editor: ExtentsEditor,
      defaultValue: new Extents(NaN, NaN)
    })

    builder.addCustomEditor({
      id: 'yAxisTitle',
      path: 'yAxisTitle',
      name: 'Y Axis Title',
      category: ['Y Axis'],
      editor: TitleEditor,
      defaultValue: new Title('', '#777', 1)
    })

    builder.addBooleanSwitch({
      path: 'rotateYAxisTitle',
      name: 'Rotate Y Axis Title',
      category: ['Y Axis'],
      defaultValue: false,
      showIf: (config: { yAxisTitle: { text: string | any[] } }) => config.yAxisTitle.text?.length > 0
    })

    builder.addCustomEditor({
      id: 'legend',
      path: 'legend',
      name: 'Legend',
      category: ['Legend'],
      editor: LegendEditor,
      defaultValue: new Legend(false, 1)
    })

    builder.addColorPicker({
      path: 'gridColor',
      name: 'Grid Color',
      defaultValue: 'rgba(255, 255, 255, 0.25)'
    })

    return builder
  })
