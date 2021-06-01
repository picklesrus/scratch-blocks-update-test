import * as Blockly from 'blockly';

export default Blockly.Theme.defineTheme('MimiPastelTheme', {
    'base': Blockly.Themes.Classic,
    'blockStyles': {
        "motion": {
          "colourPrimary": "#77b7f9",
          "colourSecondary": "#77b7f9",
          "colourTertiary": "#77b7f9"
        },
        "looks": {
          "colourPrimary": "#b6a8f9",
          "colourSecondary": "#b6a8f9",
          "colourTertiary": "#b6a8f9"
        },
        "sounds": {
          "colourPrimary": "#e597ed",
          "colourSecondary": "#e597ed",
          "colourTertiary": "#e597ed"
        },
        "control": {
          "colourPrimary": "#f8ad40",
          "colourSecondary": "#f8ad40",
          "colourTertiary": "#f8ad40"
        },
        "event": {
          "colourPrimary": "#fac03f",
          "colourSecondary": "#fac03f",
          "colourTertiary": "#fac03f"
        },
        "sensing": {
          "colourPrimary": "#87cde2",
          "colourSecondary": "#87cde2",
          "colourTertiary": "#87cde2"
        },
        "pen": {
          "colourPrimary": "#5ed8a6",
          "colourSecondary": "#5ed8a6",
          "colourTertiary": "#5ed8a6"
        },
        "operators": {
          "colourPrimary": "#7dcd74",
          "colourSecondary": "#7dcd74",
          "colourTertiary": "#7dcd74"
        },
        "data": {
          "colourPrimary": "#f7a668",
          "colourSecondary": "#f7a668",
          "colourTertiary": "#f7a668"
          // text color #2a1c47
        },
        // This is not a new category, but rather for differentiation
        // between lists and scalar variables.
        "data_lists": {
          "colourPrimary": "#f58968",
          "colourSecondary": "#f58968",
          "colourTertiary": "#f58968"
        },
        "more": {
          "colourPrimary": "#f58da5",
          "colourSecondary": "#f58da5",
          "colourTertiary": "#f58da5"
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
