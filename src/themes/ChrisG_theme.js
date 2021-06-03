import * as Blockly from 'blockly';

export default Blockly.Theme.defineTheme('ChrisGTheme', {
    'base': Blockly.Themes.Classic,
    'blockStyles': {
        "motion": {
          "colourPrimary": "#3074d5",
          "colourSecondary": "#2962b3",
          "colourTertiary": "#204d8c"
        },
        "looks": {
          "colourPrimary": "#6c41c3",
          "colourSecondary": "#553299",
          "colourTertiary": "#3f2673"
        },
        "sounds": {
          "colourPrimary": "#c51bc5",
          "colourSecondary": "#991599",
          "colourTertiary": "#731073"
        },
        "control": {
          "colourPrimary": "#c65001",
          "colourSecondary": "#993e02",
          "colourTertiary": "#732f01"
        },
        "event": {
          "colourPrimary": "#4b830c",
          "colourSecondary": "#325708",
          "colourTertiary": "#1d3305"
        },
        "sensing": {
          "colourPrimary": "#347a98",
          "colourSecondary": "#275c73",
          "colourTertiary": "#1a3d4d"
        },
        "pen": {
          "colourPrimary": "#1b8366",
          "colourSecondary": "#135945",
          "colourTertiary": "#0b3328"
        },
        "operators": {
          "colourPrimary": "#59C059",
          "colourSecondary": "#46B946",
          "colourTertiary": "#389438"
        },
        "data": {
          "colourPrimary": "#aa5e13",
          "colourSecondary": "#80470e",
          "colourTertiary": "#59320a"
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
          "colourSecondary": "#b31d3d",
          "colourTertiary": "#8c1630"
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
