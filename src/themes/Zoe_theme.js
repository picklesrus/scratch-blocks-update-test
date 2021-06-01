import * as Blockly from 'blockly';

export default Blockly.Theme.defineTheme('ZoeTheme', {
    'base': Blockly.Themes.Classic,
    'blockStyles': {
        "motion": {
          "colourPrimary": "#3373cc",
          "colourSecondary": "#3373cc",
          "colourTertiary": "#3373cc"
        },
        "looks": {
          "colourPrimary": "#774dcb",
          "colourSecondary": "#774dcb",
          "colourTertiary": "#774dcb"
        },
        "sounds": {
          "colourPrimary": "#b23bb2",
          "colourSecondary": "#b23bb2",
          "colourTertiary": "#b23bb2"
        },
        "control": {
          "colourPrimary": "#91461f",
          "colourSecondary": "#91461f",
          "colourTertiary": "#91461f"
        },
        "event": {
          "colourPrimary": "#a96623",
          "colourSecondary": "#a96623",
          "colourTertiary": "#a96623"
        },
        "sensing": {
          "colourPrimary": "#24799e",
          "colourSecondary": "#24799e",
          "colourTertiary": "#24799e"
        },
        "pen": {
          "colourPrimary": "#097d68",
          "colourSecondary": "#097d68",
          "colourTertiary": "#097d68"
        },
        "operators": {
          "colourPrimary": "#2d872e",
          "colourSecondary": "#2d872e",
          "colourTertiary": "#2d872e"
        },
        "data": {
          "colourPrimary": "#be4905",
          "colourSecondary": "#be4905",
          "colourTertiary": "#be4905"
        },
        // This is not a new category, but rather for differentiation
        // between lists and scalar variables.
        "data_lists": {
          "colourPrimary": "#e61414",
          "colourSecondary": "#e61414",
          "colourTertiary": "#e61414"
        },
        "more": {
          "colourPrimary": "#ae0d38",
          "colourSecondary": "#ae0d38",
          "colourTertiary": "#ae0d38"
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
