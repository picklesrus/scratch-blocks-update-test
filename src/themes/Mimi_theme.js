import * as Blockly from 'blockly';

export default Blockly.Theme.defineTheme('MimiTheme', {
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
          "colourPrimary": "#a53da8",
          "colourSecondary": "#a53da8",
          "colourTertiary": "#a53da8"
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
          "colourSecondary": "#197fa4",
          "colourTertiary": "#197fa4"
        },
        "pen": {
          "colourPrimary": "#06845d",
          "colourSecondary": "#06845d",
          "colourTertiary": "#06845d"
        },
        "operators": {
          "colourPrimary": "#298529",
          "colourSecondary": "#298529",
          "colourTertiary": "#298529"
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
          "colourSecondary": "#ff661a",
          "colourTertiary": "#ff661a"
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
