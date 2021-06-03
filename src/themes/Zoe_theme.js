import * as Blockly from 'blockly';

export default Blockly.Theme.defineTheme('ZoeTheme', {
    'base': Blockly.Themes.Classic,
    'blockStyles': {
        "motion": {
          "colourPrimary": "#3373cc",
          "colourSecondary": "#295da6",
          "colourTertiary": "#204880"
        },
        "looks": {
          "colourPrimary": "#774dcb",
          "colourSecondary": "#613fa6",
          "colourTertiary": "#4b3080"
        },
        "sounds": {
          "colourPrimary": "#b23bb2",
          "colourSecondary": "#8c2e8c",
          "colourTertiary": "#662266"
        },
        "control": {
          "colourPrimary": "#91461f",
          "colourSecondary": "#663115",
          "colourTertiary": "#401f0d"
        },
        "event": {
          "colourPrimary": "#a96623",
          "colourSecondary": "#804d1b",
          "colourTertiary": "#593613"
        },
        "sensing": {
          "colourPrimary": "#24799e",
          "colourSecondary": "#1c5e7a",
          "colourTertiary": "#123b4d"
        },
        "pen": {
          "colourPrimary": "#097d68",
          "colourSecondary": "#065244",
          "colourTertiary": "#033028"
        },
        "operators": {
          "colourPrimary": "#2d872e",
          "colourSecondary": "#216322",
          "colourTertiary": "#133b14"
        },
        "data": {
          "colourPrimary": "#d64000",
          "colourSecondary": "#b33600",
          "colourTertiary": "#a63200"
        },
        // This is not a new category, but rather for differentiation
        // between lists and scalar variables.
        "data_lists": {
          "colourPrimary": "#be1603",
          "colourSecondary": "#991203",
          "colourTertiary": "#730e02"
        },
        "more": {
          "colourPrimary": "#a21059",
          "colourSecondary": "#800d46",
          "colourTertiary": "#590931"
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
