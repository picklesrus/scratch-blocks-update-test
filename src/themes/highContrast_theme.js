import * as Blockly from 'blockly';

export default Blockly.Theme.defineTheme('highContrastTheme', {
    'base': Blockly.Themes.Classic,
    'blockStyles': {
        "motion": {
          "colourPrimary": "#1c3a63",
          "colourSecondary": "#4280D7",
          "colourTertiary": "#3373CC"
        },
        "looks": {
          "colourPrimary": "#462e78",
          "colourSecondary": "#855CD6",
          "colourTertiary": "#774DCB"
        },
        "sounds": {
          "colourPrimary": "#633263",
          "colourSecondary": "#C94FC9",
          "colourTertiary": "#BD42BD"
        },
        "control": {
          "colourPrimary": "#82580e",
          "colourSecondary": "#EC9C13",
          "colourTertiary": "#CF8B17"
        },
        "event": {
          "colourPrimary": "#664d00",
          "colourSecondary": "#E6AC00",
          "colourTertiary": "#CC9900"
        },
        "sensing": {
          "colourPrimary": "#274c5c",
          "colourSecondary": "#47A8D1",
          "colourTertiary": "#2E8EB8"
        },
        "pen": {
          "colourPrimary": "#064f3a",
          "colourSecondary": "#0DA57A",
          "colourTertiary": "#0B8E69"
        },
        "operators": {
          "colourPrimary": "#2b592b",
          "colourSecondary": "#46B946",
          "colourTertiary": "#389438"
        },
        "data": {
          "colourPrimary": "#6e3c0a",
          "colourSecondary": "#FF8000",
          "colourTertiary": "#DB6E00"
        },
        // This is not a new category, but rather for differentiation
        // between lists and scalar variables.
        "data_lists": {
          "colourPrimary": "#66290b",
          "colourSecondary": "#FF5500",
          "colourTertiary": "#E64D00"
        },
        "more": {
          "colourPrimary": "#662b35",
          "colourSecondary": "#FF4D6A",
          "colourTertiary": "#FF3355"
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
    'componentStyles': {},
    'fontStyle': {},
    'startHats': null,
});
