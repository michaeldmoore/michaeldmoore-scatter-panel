import { PanelPlugin } from '@grafana/data';
import { Extents, ScatterOptions } from './types';
import { ScatterPanel } from './ScatterPanel';
import { FieldSelectEditor } from './FieldSelectEditor';
import { FieldSetsEditor } from './FieldSetsEditor';
import { ExtentsEditor } from 'ExtentsEditor';

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

    builder.addCustomEditor({
      id: 'xAxisExtents',
      path: 'xAxisExtents',
      name: 'X Axis Extent (Min & Max)',
      category: ['Field Mappings'],
      editor: ExtentsEditor,
      defaultValue: new Extents(NaN, NaN),
    });

    builder.addCustomEditor({
      id: 'yAxisExtents',
      path: 'yAxisExtents',
      name: 'Y Axis Extent (Min & Max)',
      category: ['Field Mappings'],
      editor: ExtentsEditor,
      defaultValue: new Extents(NaN, NaN),
    });

    builder.addBooleanSwitch({
      path: 'showLegend',
      name: 'Show legend',
      defaultValue: false
    });

    builder.addTextInput({
      path: 'xAxisTitle',
      name: 'X Axis Title',
      defaultValue: ""
    });

    builder.addTextInput({
      path: 'yAxisTitle',
      name: 'Y Axis Title',
      defaultValue: ""
    });

    builder.addBooleanSwitch({
      path: 'rotateYAxisTitle',
      name: 'Rotate Y Axis Title',
      defaultValue: false,
      showIf: config => config.yAxisTitle?.length > 0 
    });


    return builder;
});
