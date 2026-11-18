import { PanelPlugin } from '@grafana/data';
import { ScatterPanel } from './ScatterPanel';

export const plugin = new PanelPlugin<Record<string, unknown>>(ScatterPanel);
