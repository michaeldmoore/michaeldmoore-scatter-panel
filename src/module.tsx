import { PanelPlugin } from '@grafana/data';
import { Extents, ScatterOptions, Title } from './types';
import { ScatterPanel } from './ScatterPanel';
import { FieldSelectEditor } from './FieldSelectEditor';
import { FieldSetsEditor } from './FieldSetsEditor';
import { ExtentsEditor } from 'ExtentsEditor';
import { TitleEditor } from 'TitleEditor';

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
      category: ['Legend'],
      defaultValue: false
    });

    builder.addNumberInput({
      path: 'legendSize',
      name: 'Size',
      category: ['Legend'],
      defaultValue: 1,
      showIf: config => config.showLegend 
    });

    builder.addCustomEditor({
      id: 'xAxisTitle',
      path: 'xAxisTitle',
      name: 'X Axis Title',
      editor: TitleEditor,
      defaultValue: new Title("","#777",1)
    });

    builder.addCustomEditor({
      id: 'yAxisTitle',
      path: 'yAxisTitle',
      name: 'Y Axis Title',
      editor: TitleEditor,
      defaultValue: new Title("","#777",1)
    });

    builder.addBooleanSwitch({
      path: 'rotateYAxisTitle',
      name: 'Rotate Y Axis Title',
      defaultValue: false,
      showIf: config => config.yAxisTitle.text?.length > 0 
    });

    return builder;
});
