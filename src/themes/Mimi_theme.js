import * as Blockly from 'blockly';

export default Blockly.Theme.defineTheme('MimiTheme', {
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
          "colourPrimary": "#a53da8",
          "colourSecondary": "#7d2e80",
          "colourTertiary": "#572059"
        },
        "control": {
          "colourPrimary": "#FFAB19",
          "colourSecondary": "#EC9C13",
          "colourTertiary": "#CF8B17"
          // text color #2a1c47
        },
        "event": {
          "colourPrimary": "#FFBF00",
          "colourSecondary": "#E6AC00",
          "colourTertiary": "#CC9900"
          // text color #2a1c47
        },
        "sensing": {
          "colourPrimary": "#197fa4",
          "colourSecondary": "#136380",
          "colourTertiary": "#0d4559"
        },
        "pen": {
          "colourPrimary": "#06845d",
          "colourSecondary": "#04593e",
          "colourTertiary": "#023323"
        },
        "operators": {
          "colourPrimary": "#298529",
          "colourSecondary": "#1c591c",
          "colourTertiary": "#103310"
        },
        "data": {
          "colourPrimary": "#FF8C1A",
          "colourSecondary": "#FF8000",
          "colourTertiary": "#DB6E00"
          // text color #2a1c47
        },
        // This is not a new category, but rather for differentiation
        // between lists and scalar variables.
        "data_lists": {
          "colourPrimary": "#ff661a",
          "colourSecondary": "#d95716",
          "colourTertiary": "#993d0f"
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
