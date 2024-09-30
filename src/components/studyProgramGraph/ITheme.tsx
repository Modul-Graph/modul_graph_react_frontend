import {lightTheme} from "reagraph";

export type ThemeColor = number | string;
export type ColorRepresentation = number | string;

export interface Theme {
  canvas: {
    background: ThemeColor;
    fog: ThemeColor;
  };
  node: {
    fill: ThemeColor;
    activeFill: ThemeColor;
    opacity: number;
    selectedOpacity: number;
    inactiveOpacity: number;
    label: {
      color: ThemeColor;
      stroke: ThemeColor;
      activeColor: ThemeColor;
    };
    subLabel?: {
      color: ColorRepresentation;
      stroke?: ColorRepresentation;
      activeColor: ColorRepresentation;
    };
  };
  ring: {
    fill: ThemeColor;
    activeFill: ThemeColor;
  };
  edge: {
    fill: ThemeColor;
    activeFill: ThemeColor;
    opacity: number;
    selectedOpacity: number;
    inactiveOpacity: number;
    label: {
      color: ThemeColor;
      stroke: ThemeColor;
      activeColor: ThemeColor;
      fontSize: number;
    }
  };
  arrow: {
    fill: ThemeColor;
    activeFill: ThemeColor;
  };
  lasso: {
    background: string;
    border: string;
  };
  cluster?: {
    stroke?: ColorRepresentation;
    fill?: ColorRepresentation;
    opacity?: number;
    selectedOpacity?: number;
    inactiveOpacity?: number;
    label?: {
      stroke?: ColorRepresentation;
      color: ColorRepresentation;
    };
  };
}

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