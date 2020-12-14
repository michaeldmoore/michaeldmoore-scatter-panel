import { PanelPlugin } from '@grafana/data';
import { ScatterOptions } from './types';
import { ScatterPanel } from './ScatterPanel';
import { FieldSelectEditor } from './FieldSelectEditor';
import { FieldSetsEditor } from './FieldSetsEditor';

export const plugin = new PanelPlugin<ScatterOptions>(ScatterPanel)
  .setPanelOptions(builder => {

    builder.addCustomEditor({
      id: 'xAxisField',
      path: 'xAxisField',
      name: 'X Axis Field',
      category: ['Field Mappings'],
      editor: FieldSelectEditor,
      defaultValue: 0
    });

    builder.addCustomEditor({
      id: 'fieldSets',
      path: 'fieldSets',
      name: 'Y Axis Field(s)',
      category: ['Field Mappings'],
      editor: FieldSetsEditor,
      defaultValue: [],
    });

    builder.addNumberInput({
      path: 'xAxisMin',
      name: 'X Axis Min (leave blank for auto)',
      defaultValue: NaN,
      category: ['Layout'],
    });

    builder.addNumberInput({
      path: 'xAxisMax',
      name: 'X Axis Max (leave blank for auto)',
      defaultValue: NaN,
      category: ['Layout'],
    });

    builder.addNumberInput({
      path: 'yAxisMin',
      name: 'Y Axis Min (leave blank for auto)',
      defaultValue: NaN,
      category: ['Layout'],
    });

    builder.addNumberInput({
      path: 'yAxisMax',
      name: 'Y Axis Max (leave blank for auto)',
      defaultValue: NaN,
      category: ['Layout'],
    });

    return builder;
});
