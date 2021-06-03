import * as Blockly from 'blockly';

export default Blockly.Theme.defineTheme('EricRTheme', {
    'base': Blockly.Themes.Classic,
    'blockStyles': {
        "motion": {
          "colourPrimary": "#004099",
          "colourSecondary": "#003073",
          "colourTertiary": "#00204d"
        },
        "looks": {
          "colourPrimary": "#220066",
          "colourSecondary": "#150040",
          "colourTertiary": "#08001a"
        },
        "sounds": {
          "colourPrimary": "#752475",
          "colourSecondary": "#331033",
          "colourTertiary": "#0d040d"
        },
        "control": {
          "colourPrimary": "#664100",
          "colourSecondary": "#402800",
          "colourTertiary": "#1a1000"
        },
        "event": {
          "colourPrimary": "#997300",
          "colourSecondary": "#594300",
          "colourTertiary": "#332600"
        },
        "sensing": {
          "colourPrimary": "#1f5f7a",
          "colourSecondary": "#133b4d",
          "colourTertiary": "#0a1d26"
        },
        "pen": {
          "colourPrimary": "#0a805e",
          "colourSecondary": "#075942",
          "colourTertiary": "#043326"
        },
        "operators": {
          "colourPrimary": "#235c23",
          "colourSecondary": "#133313",
          "colourTertiary": "#050d05"
        },
        "data": {
          "colourPrimary": "#b35900",
          "colourSecondary": "#8c4600",
          "colourTertiary": "#663300"
        },
        // This is not a new category, but rather for differentiation
        // between lists and scalar variables.
        "data_lists": {
          "colourPrimary": "#993300",
          "colourSecondary": "#732600",
          "colourTertiary": "#4d1900"
        },
        "more": {
          "colourPrimary": "#99004d",
          "colourSecondary": "#730039",
          "colourTertiary": "#4d0026"
      },
      "text": {
        "colourPrimary": "#FFFFFF",
        "colourSecondary": "#FFFFFF",
        "colourTertiary": "#FFFFFF"
    },
    },
    'categoryStyles': {
        'motion_category': {
            'colour': '#4C97FF',
        },
        'motion_category': {
            'colour': 'myColor'
        },
    },
    'componentStyles': {
        'workspaceBackgroundColour': '#F9F9F9',
        'toolboxBackgroundColour': '#FFFFFF',
        'toolboxForegroundColour': '#575E75',
        'flyoutBackgroundColour': '#F9F9F9',
        'flyoutForegroundColour': '#575E75',
        'insertionMarkerColour': '#000000',
        'insertionMarkerOpacity': '.2',

    },
    'fontStyle': {
        "family": "Helvetica Neue",
    },
    'startHats': null,
});
