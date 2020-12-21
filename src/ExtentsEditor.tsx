import { StandardEditorProps } from '@grafana/data';
import { Input } from '@grafana/ui';
import React from 'react';
import { Extents } from 'types';

interface Props extends StandardEditorProps<Extents> { }

export const ExtentsEditor: React.FC<Props> = ({ item, value, onChange, context }) => {
    return (
        <div className="ScatterExtents">
            <div className="ScatterExtentLimit">
                <Input
                    type="number"
                    value={value.min}
                    title="Axis Min (leave blank for auto)"
                    onChange={e => {
                        value.min = (e.target as HTMLInputElement).valueAsNumber;
                        onChange(value)
                    }
                    }
                /></div>
            <div className="ScatterExtentLimit">
                <Input
                    className="ScatterExtentLimit"
                    type="number"
                    value={value.max}
                    title="Axis Max (leave blank for auto)"
                    onChange={e => {
                        value.max = (e.target as HTMLInputElement).valueAsNumber;
                        onChange(value)
                    }
                    }
                /></div>
        </div>
    );
};