import * as Blockly from 'blockly';

export default Blockly.Theme.defineTheme('MimiPastelTheme', {
    'base': Blockly.Themes.Classic,
    'blockStyles': {
        "motion": {
          "colourPrimary": "#77b7f9",
          "colourSecondary": "#679fd6",
          "colourTertiary": "#5684b3"
        },
        "looks": {
          "colourPrimary": "#b6a8f9",
          "colourSecondary": "#9b90d6",
          "colourTertiary": "#8078b3"
        },
        "sounds": {
          "colourPrimary": "#e597ed",
          "colourSecondary": "#c07fc7",
          "colourTertiary": "#936299"
        },
        "control": {
          "colourPrimary": "#f8ad40",
          "colourSecondary": "#cc9035",
          "colourTertiary": "#a6752b"
        },
        "event": {
          "colourPrimary": "#fac03f",
          "colourSecondary": "#cc9c33",
          "colourTertiary": "#a67e29"
        },
        "sensing": {
          "colourPrimary": "#87cde2",
          "colourSecondary": "#71abbd",
          "colourTertiary": "#5c8b99"
        },
        "pen": {
          "colourPrimary": "#5ed8a6",
          "colourSecondary": "#4fb389",
          "colourTertiary": "#3e8c6c"
        },
        "operators": {
          "colourPrimary": "#7dcd74",
          "colourSecondary": "#66a65e",
          "colourTertiary": "#4f8049"
        },
        "data": {
          "colourPrimary": "#f7a668",
          "colourSecondary": "#cc8956",
          "colourTertiary": "#a66f46"
          // text color #2a1c47
        },
        // This is not a new category, but rather for differentiation
        // between lists and scalar variables.
        "data_lists": {
          "colourPrimary": "#f58968",
          "colourSecondary": "#cc7156",
          "colourTertiary": "#a65c46"
        },
        "more": {
          "colourPrimary": "#f58da5",
          "colourSecondary": "#cc768a",
          "colourTertiary": "#a66070"
      },
      "text": {
        "colourPrimary": "#454b5a",
        "colourSecondary": "#454b5a",
        "colourTertiary": "#454b5a"
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
