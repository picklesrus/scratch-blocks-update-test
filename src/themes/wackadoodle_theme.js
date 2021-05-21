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
        "colourPrimary": "#7ab6cd",
        "colourSecondary": "#1a34fa",
        "colourTertiary": "#7015c3"
      },
      "sounds": {
        "colourPrimary": "#ff9097",
        "colourSecondary": "#6a1c66",
        "colourTertiary": "#15141a"
      },
      "control": {
        "colourPrimary": "#2723e8",
        "colourSecondary": "#e5237e",
        "colourTertiary": "#997602"
      },
      "event": {
        "colourPrimary": "#6eba60",
        "colourSecondary": "#477872",
        "colourTertiary": "#5c6866"
      },
      "sensing": {
        "colourPrimary": "#1b98f8",
        "colourSecondary": "#34d097",
        "colourTertiary": "#d4e6e8"
      },
      "pen": {
        "colourPrimary": "#2343f3",
        "colourSecondary": "#ee7d97",
        "colourTertiary": "#223986"
      },
      "operators": {
        "colourPrimary": "#26e406",
        "colourSecondary": "#6414cd",
        "colourTertiary": "#226baf"
      },
      "data": {
        "colourPrimary": "#d272ee",
        "colourSecondary": "#2b1e49",
        "colourTertiary": "#c21cdf"
      },
      // This is not a new category, but rather for differentiation
      // between lists and scalar variables.
      "data_lists": {
        "colourPrimary": "#8ef080",
        "colourSecondary": "#6cb7f3",
        "colourTertiary": "#a4740d"
      },
      "more": {
        "colourPrimary": "#63f14c",
        "colourSecondary": "#a64197",
        "colourTertiary": "#cd96c8"
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
