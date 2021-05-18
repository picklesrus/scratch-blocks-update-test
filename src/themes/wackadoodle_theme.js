import * as Blockly from 'blockly';

export default Blockly.Theme.defineTheme('WackadoodleTheme', {
  'base': Blockly.Themes.Classic,
  'blockStyles': {
      "motion": {
        "colourPrimary": "#3af218",
        "colourSecondary": "#5b59ef",
        "colourTertiary": "#91f493"
      },
      "looks": {
        "colourPrimary": "#9966FF",
        "colourSecondary": "#855CD6",
        "colourTertiary": "#774DCB"
      },
      "sounds": {
        "colourPrimary": "#CF63CF",
        "colourSecondary": "#C94FC9",
        "colourTertiary": "#BD42BD"
      },
      "control": {
        "colourPrimary": "#FFAB19",
        "colourSecondary": "#EC9C13",
        "colourTertiary": "#CF8B17"
      },
      "event": {
        "colourPrimary": "#FFBF00",
        "colourSecondary": "#E6AC00",
        "colourTertiary": "#CC9900"
      },
      "sensing": {
        "colourPrimary": "#5CB1D6",
        "colourSecondary": "#47A8D1",
        "colourTertiary": "#2E8EB8"
      },
      "pen": {
        "colourPrimary": "#0fBD8C",
        "colourSecondary": "#0DA57A",
        "colourTertiary": "#0B8E69"
      },
      "operators": {
        "colourPrimary": "#59C059",
        "colourSecondary": "#46B946",
        "colourTertiary": "#389438"
      },
      "data": {
        "colourPrimary": "#FF8C1A",
        "colourSecondary": "#FF8000",
        "colourTertiary": "#DB6E00"
      },
      // This is not a new category, but rather for differentiation
      // between lists and scalar variables.
      "data_lists": {
        "colourPrimary": "#FF661A",
        "colourSecondary": "#FF5500",
        "colourTertiary": "#E64D00"
      },
      "more": {
        "colourPrimary": "#FF6680",
        "colourSecondary": "#FF4D6A",
        "colourTertiary": "#FF3355"
      },
  },
  'categoryStyles': {
      'motion_category': {
          'colour': '#54ab9c',
      },
      // TODO: fill in the rest of the categories.
      // Note the toolbox for the rest of the categories needs to be built out too.
  },
  'componentStyles': {},
  'fontStyle': {},
  'startHats': null,
  // There are other styles we can set too. See Blockly's themes documentations and examples.
});
