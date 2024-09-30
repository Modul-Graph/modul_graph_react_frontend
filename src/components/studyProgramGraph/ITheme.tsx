import {lightTheme} from "reagraph";

export const myTheme = {
    ...lightTheme,

    canvas: {
        ...lightTheme.canvas,

    },

    node: {
        ...lightTheme.node,

        label: {
            ...lightTheme.node.label,
            color: '#151717',
            stroke: '#ffffff'

        },
    },
    edge: {
        ...lightTheme.edge,
        fill: '#ccc1c1',
        activeFill: '#151717',
        opacity: 0.3,
        selectedOpacity: 5,
        inactiveOpacity: 0.1,
    },
    arrow: {
        fill: '#ab9999',
        activeFill: '#151717',
    },

};