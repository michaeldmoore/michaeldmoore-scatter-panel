import { FieldType, PanelPlugin } from '@grafana/data';
import { ScatterPanel } from './ScatterPanel';
import { SeriesEditor } from './SeriesEditor';
import { defaultOptions, type ScatterOptions } from './types';

export const plugin = new PanelPlugin<ScatterOptions>(ScatterPanel)
  .useFieldConfig()
  .setDefaults(defaultOptions)
  .setPanelOptions((builder) =>
    builder
      .addFieldNamePicker({
        path: 'xField',
        name: 'X field',
        description: 'Numeric field used for the horizontal axis.',
        settings: { filter: (f) => f.type === FieldType.number },
      })
      .addCustomEditor({
        id: 'series',
        path: 'series',
        name: 'Y series',
        description: 'Choose Y fields and configure their line width and point display.',
        editor: SeriesEditor,
      })
      .addTextInput({ path: 'xAxisLabel', name: 'X-axis title' })
      .addTextInput({ path: 'yAxisLabel', name: 'Y-axis title' })
      .addBooleanSwitch({ path: 'showGrid', name: 'Show grid' })
      .addBooleanSwitch({ path: 'showLegend', name: 'Show legend' })
      .addBooleanSwitch({ path: 'tooltip', name: 'Show tooltip', defaultValue: true })
      .addRadio({
        path: 'xScale',
        name: 'X scale',
        settings: { options: [{ value: 'linear', label: 'Linear' }, { value: 'log', label: 'Logarithmic' }] },
      })
      .addRadio({
        path: 'yScale',
        name: 'Y scale',
        settings: { options: [{ value: 'linear', label: 'Linear' }, { value: 'log', label: 'Logarithmic' }] },
      })
  );
