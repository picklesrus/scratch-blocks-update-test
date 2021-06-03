import * as Blockly from 'blockly';

export default Blockly.Theme.defineTheme('EricRTheme', {
    'base': Blockly.Themes.Classic,
    'blockStyles': {
        "motion": {
          "colourPrimary": "#235c23",
          "colourSecondary": "#235c23",
          "colourTertiary": "#235c23"
        },
        "looks": {
          "colourPrimary": "#235c23",
          "colourSecondary": "#235c23",
          "colourTertiary": "#235c23"
        },
        "sounds": {
          "colourPrimary": "#235c23",
          "colourSecondary": "#235c23",
          "colourTertiary": "#235c23"
        },
        "control": {
          "colourPrimary": "#664100",
          "colourSecondary": "#664100",
          "colourTertiary": "#664100"
        },
        "event": {
          "colourPrimary": "#997300",
          "colourSecondary": "#997300",
          "colourTertiary": "#997300"
        },
        "sensing": {
          "colourPrimary": "#235c23",
          "colourSecondary": "#235c23",
          "colourTertiary": "#235c23"
        },
        "pen": {
          "colourPrimary": "#0fBD8C",
          "colourSecondary": "#0DA57A",
          "colourTertiary": "#0B8E69"
        },
        "operators": {
          "colourPrimary": "#235c23",
          "colourSecondary": "#235c23",
          "colourTertiary": "#235c23"
        },
        "data": {
          "colourPrimary": "#235c23",
          "colourSecondary": "#235c23",
          "colourTertiary": "#235c23"
        },
        // This is not a new category, but rather for differentiation
        // between lists and scalar variables.
        "data_lists": {
          "colourPrimary": "#235c23",
          "colourSecondary": "#235c23",
          "colourTertiary": "#235c23"
        },
        "more": {
          "colourPrimary": "#235c23",
          "colourSecondary": "#235c23",
          "colourTertiary": "#235c23"
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
