import * as Blockly from 'blockly';
// I haven't figured out how to import this file properly so the themes are here.
// TODO: move them back into separate files.
//import Theme from './src/default_theme';

// TODO Fix up all the other blocks files. They need:
//     * to have the colour extensions removed.
//     * to have their style set correclty.
//     * to figure out how to reach into the media directory correclty to put images on blocks.
//     * lists and procedures will need more stuff, but I'm not sure what yet.
//import './blocks/control.js';
// import './blocks/colour.js';
// // import './blocks/data.js';
// //import './blocks/procedures.js';
// import './blocks/default_toolbox.js';
// import './blocks/event.js';
// import './blocks/extensions.js';
// import './blocks/looks.js';
import './blocks/math.js';
// import './blocks/matrix.js';
import './blocks/motion.js';
// import './blocks/note.js';
// import './blocks/operators.js';
// import './blocks/sensing.js';
// import './blocks/sound.js';
// import './blocks/text.js';

import './msg/messages.js';
import './blocks/vertical_extensions.js';
import {toolboxCategories, createPlayground} from '@blockly/dev-tools';
import {ContinuousToolbox, ContinuousFlyout, ContinuousMetrics} from '@blockly/continuous-toolbox';

const ScratchTheme =Blockly.Theme.defineTheme('ScratchTheme', {
  'base': Blockly.Themes.Classic,
  'blockStyles': {
      "motion": {
        "colourPrimary": "#4C97FF",
        "colourSecondary": "#4280D7",
        "colourTertiary": "#3373CC"
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
          'colour': '#4C97FF',
      },
  },
  'componentStyles': {},
  'fontStyle': {},
  'startHats': null,
});
const WackadoodleTheme =Blockly.Theme.defineTheme('WackadoodleTheme', {
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
/**
 * Create a workspace.
 * @param {HTMLElement} blocklyDiv The blockly container div.
 * @param {!Blockly.BlocklyOptions} options The Blockly options.
 * @return {!Blockly.WorkspaceSvg} The created workspace.
 */

document.addEventListener('DOMContentLoaded', function() {
  const toolbox = document.getElementById('toolbox-categories');
  const defaultOptions = {
    move: {
      scrollbars: true,
      drag: true,
      wheel: false,
  },
  zoom: {
      wheel: true,
  },
  rendererOverrides: {
    'FIELD_TEXT_FONTFAMILY': 'Helvetica Neue',
    'FIELD_TEXT_FONTWEIGHT': '500',
    'FIELD_TEXT_FONTSIZE': 12,
    'FIELD_BORDER_RECT_X_PADDING': 2.75 * 4,
    'ADD_START_HATS': true
  },
    toolbox: toolbox,
    plugins: {
      'toolbox': ContinuousToolbox,
      'flyoutsVerticalToolbox': ContinuousFlyout,
      'metricsManager': ContinuousMetrics,
    },
    theme: ScratchTheme,
    renderer: 'zelos',
    media: 'https://unpkg.com/scratch-blocks@0.1.0-prerelease.1578322100/media/'
  };

  // Create workspace and import the XML
  const workspace = Blockly.inject('root',
      defaultOptions);
  //createPlayground(document.getElementById('root'), createWorkspace,  defaultOptions);
});
