import { PanelPlugin } from '@grafana/data';
import { NewScatterPanel } from './NewScatterPanel';

export const plugin = new PanelPlugin<Record<string, unknown>>(NewScatterPanel);
