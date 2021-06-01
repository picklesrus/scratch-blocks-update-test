import * as Blockly from 'blockly';

export default Blockly.Theme.defineTheme('ChrisGTheme', {
    'base': Blockly.Themes.Classic,
    'blockStyles': {
        "motion": {
          "colourPrimary": "#3074d5",
          "colourSecondary": "#3074d5",
          "colourTertiary": "#3074d5"
        },
        "looks": {
          "colourPrimary": "#6c41c3",
          "colourSecondary": "#6c41c3",
          "colourTertiary": "#6c41c3"
        },
        "sounds": {
          "colourPrimary": "#c51bc5",
          "colourSecondary": "#c51bc5",
          "colourTertiary": "#c51bc5"
        },
        "control": {
          "colourPrimary": "#c65001",
          "colourSecondary": "#c65001",
          "colourTertiary": "#c65001"
        },
        "event": {
          "colourPrimary": "#4b830c",
          "colourSecondary": "#4b830c",
          "colourTertiary": "#4b830c"
        },
        "sensing": {
          "colourPrimary": "#347a98",
          "colourSecondary": "#347a98",
          "colourTertiary": "#347a98"
        },
        "pen": {
          "colourPrimary": "#1b8366",
          "colourSecondary": "#1b8366",
          "colourTertiary": "#1b8366"
        },
        "operators": {
          "colourPrimary": "#59C059",
          "colourSecondary": "#46B946",
          "colourTertiary": "#389438"
        },
        "data": {
          "colourPrimary": "#aa5e13",
          "colourSecondary": "#aa5e13",
          "colourTertiary": "#aa5e13"
        },
        // This is not a new category, but rather for differentiation
        // between lists and scalar variables.
        "data_lists": {
          "colourPrimary": "#FF661A",
          "colourSecondary": "#FF5500",
          "colourTertiary": "#E64D00"
        },
        "more": {
          "colourPrimary": "#db244b",
          "colourSecondary": "#db244b",
          "colourTertiary": "#db244b"
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
