import * as Blockly from 'blockly';
// I haven't figured out how to import this file properly so the themes are here.
// TODO: move them back into separate files.
//import Theme from './src/default_theme';

// TODO Fix up all the other blocks files. They need:
//     * to have their style set correclty.
//     * to figure out how to reach into the media directory correclty to put images on blocks.
//     * lists and procedures will need more stuff, but I'm not sure what yet.
import './blocks/control.js';
import './blocks/colour.js';
//import './blocks/data.js';
import './blocks/procedures.js';
import * as ToolboxStuff from './blocks/default_toolbox.js';
import './blocks/event.js';
import './blocks/extensions.js';
import './blocks/looks.js';
import './blocks/math.js';
import './blocks/matrix.js';
import './blocks/motion.js';
import './blocks/note.js';
import './blocks/operators.js';
import './blocks/sensing.js';
import './blocks/sound.js';
import './blocks/text.js';

import './msg/messages.js';
import './blocks/vertical_extensions.js';
import {toolboxCategories, createPlayground} from '@blockly/dev-tools';
import {ContinuousToolbox, ContinuousFlyout, ContinuousMetrics} from '@blockly/continuous-toolbox';


import defaultScratchTheme from './themes/DefaultScratch_theme.js';
import wackadoodleTheme from './themes/wackadoodle_theme.js';
import highContrastTheme from './themes/highContrast_theme.js';
import darkTheme from './themes/dark_theme.js';
import openDyslexicTheme from './themes/openDyslexic_theme.js';
import chrisGTheme from './themes/ChrisG_theme.js';
import zoeTheme from './themes/Zoe_theme.js';
import karishmaTheme from './themes/Karishma_theme.js';
import bryceLightTheme from './themes/BryceLight_theme.js';
import bryceDarkTheme from './themes/BryceDark_theme.js';
import sarahTheme from './themes/Sarah_theme.js';
import mimiTheme from './themes/Mimi_theme.js';
import mimiPastelTheme from './themes/MimiPastel_theme.js';
import ericRTheme from './themes/EricR_theme.js';


import toolboxXmlObject from './toolbox.js';
const toolboxXml = toolboxXmlObject.toolbox;

/**
 * Create a workspace.
 * @param {HTMLElement} blocklyDiv The blockly container div.
 * @param {!Blockly.BlocklyOptions} options The Blockly options.
 * @return {!Blockly.WorkspaceSvg} The created workspace.
 */

let workspace = null;
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("wackadoodleTheme").addEventListener("click", function() {
        workspace.setTheme(wackadoodleTheme);
    });
    document.getElementById("defaultTheme").addEventListener("click", function() {
        workspace.setTheme(defaultScratchTheme);
    });
    document.getElementById("highContrastTheme").addEventListener("click", function() {
        workspace.setTheme(highContrastTheme);
    });
    document.getElementById("darkTheme").addEventListener("click", function() {
        workspace.setTheme(darkTheme);
    });
    document.getElementById("openDyslexic").addEventListener("click", function() {
        workspace.setTheme(openDyslexicTheme);
    });
    document.getElementById("chrisGTheme").addEventListener("click", function() {
        workspace.setTheme(chrisGTheme);
    });
    document.getElementById("zoeTheme").addEventListener("click", function() {
        workspace.setTheme(zoeTheme);
    });
    document.getElementById("karishmaTheme").addEventListener("click", function() {
        workspace.setTheme(karishmaTheme);
    });
    document.getElementById("bryceLightTheme").addEventListener("click", function() {
        workspace.setTheme(bryceLightTheme);
    });
    document.getElementById("bryceDarkTheme").addEventListener("click", function() {
        workspace.setTheme(bryceDarkTheme);
    });
    document.getElementById("sarahTheme").addEventListener("click", function() {
        workspace.setTheme(sarahTheme);
    });
    document.getElementById("mimiTheme").addEventListener("click", function() {
        workspace.setTheme(mimiTheme);
    });
    document.getElementById("mimiPastelTheme").addEventListener("click", function() {
        workspace.setTheme(mimiPastelTheme);
    });
    document.getElementById("ericRTheme").addEventListener("click", function() {
        workspace.setTheme(ericRTheme);
    });

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
    toolbox: toolboxXml,
    plugins: {
      'toolbox': ContinuousToolbox,
      'flyoutsVerticalToolbox': ContinuousFlyout,
      'metricsManager': ContinuousMetrics,
    },
    theme: defaultScratchTheme,
    renderer: 'zelos',
    media: 'https://unpkg.com/scratch-blocks@0.1.0-prerelease.1578322100/media/'
  };
  // Create workspace and import the XML
  workspace = Blockly.inject('root',
      defaultOptions);
  //createPlayground(document.getElementById('root'), createWorkspace,  defaultOptions);
});
