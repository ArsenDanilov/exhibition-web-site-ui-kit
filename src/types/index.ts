import type {FC} from 'react'

export interface EditableComponent<P = Record<string, unknown>> extends FC<P> {
    schema: {
        getDefaultProps: () => P;
        label: string;
        type: string;
    };
}