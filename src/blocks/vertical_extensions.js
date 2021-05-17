/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2017 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Extensions for vertical blocks in scratch-blocks.
 * The following extensions can be used to describe a block in Scratch terms.
 * For instance, a block in the operators colour scheme with a number output
 * would have the "colours_operators" and "output_number" extensions.
 * @author fenichel@google.com (Rachel Fenichel)
 */
 import * as Blockly from 'blockly';


/**
 * Helper function that generates an extension based on a category name.
 * The generated function will set primary, secondary, and tertiary colours
 * based on the category name.
 * @param {String} category The name of the category to set colours for.
 * @return {function} An extension function that sets colours based on the given
 *     category.
 */
var VerticalExtensions = function(){};

VerticalExtensions.Colours = {
    // SVG colours: these must be specificed in #RRGGBB style
    // To add an opacity, this must be specified as a separate property (for SVG fill-opacity)
    "motion": {
      "primary": "#4C97FF",
      "secondary": "#4280D7",
      "tertiary": "#3373CC"
    },
    "looks": {
      "primary": "#9966FF",
      "secondary": "#855CD6",
      "tertiary": "#774DCB"
    },
    "sounds": {
      "primary": "#CF63CF",
      "secondary": "#C94FC9",
      "tertiary": "#BD42BD"
    },
    "control": {
      "primary": "#FFAB19",
      "secondary": "#EC9C13",
      "tertiary": "#CF8B17"
    },
    "event": {
      "primary": "#FFBF00",
      "secondary": "#E6AC00",
      "tertiary": "#CC9900"
    },
    "sensing": {
      "primary": "#5CB1D6",
      "secondary": "#47A8D1",
      "tertiary": "#2E8EB8"
    },
    "pen": {
      "primary": "#0fBD8C",
      "secondary": "#0DA57A",
      "tertiary": "#0B8E69"
    },
    "operators": {
      "primary": "#59C059",
      "secondary": "#46B946",
      "tertiary": "#389438"
    },
    "data": {
      "primary": "#FF8C1A",
      "secondary": "#FF8000",
      "tertiary": "#DB6E00"
    },
    // This is not a new category, but rather for differentiation
    // between lists and scalar variables.
    "data_lists": {
      "primary": "#FF661A",
      "secondary": "#FF5500",
      "tertiary": "#E64D00"
    },
    "more": {
      "primary": "#FF6680",
      "secondary": "#FF4D6A",
      "tertiary": "#FF3355"
    },
    "text": "#575E75",
    "workspace": "#F9F9F9",
    "toolboxHover": "#4C97FF",
    "toolboxSelected": "#e9eef2",
    "toolboxText": "#575E75",
    "toolbox": "#FFFFFF",
    "flyout": "#F9F9F9",
    "scrollbar": "#CECDCE",
    "scrollbarHover": '#CECDCE',
    "textField": "#FFFFFF",
    "insertionMarker": "#000000",
    "insertionMarkerOpacity": 0.2,
    "dragShadowOpacity": 0.3,
    "stackGlow": "#FFF200",
    "stackGlowSize": 4,
    "stackGlowOpacity": 1,
    "replacementGlow": "#FFFFFF",
    "replacementGlowSize": 2,
    "replacementGlowOpacity": 1,
    "colourPickerStroke": "#FFFFFF",
    // CSS colours: support RGBA
    "fieldShadow": "rgba(0,0,0,0.1)",
    "dropDownShadow": "rgba(0, 0, 0, .3)",
    "numPadBackground": "#547AB2",
    "numPadBorder": "#435F91",
    "numPadActiveBackground": "#435F91",
    "numPadText": "white", // Do not use hex here, it cannot be inlined with data-uri SVG
    "valueReportBackground": "#FFFFFF",
    "valueReportBorder": "#AAAAAA"
  };

VerticalExtensions.colourHelper = function(category) {
  var colours = VerticalExtensions.Colours[category];
  if (!(colours && colours.primary && colours.secondary && colours.tertiary)) {
    throw new Error('Could not find colours for category "' + category + '"');
  }
  /**
   * Set the primary, secondary, and tertiary colours on this block for the
   * given category.
   * @this {Blockly.Block}
   */
  return function() {
    this.setColourFromRawValues_(colours.primary, colours.secondary,
        colours.tertiary);
  };
};

/**
 * Extension to set the colours of a text field, which are all the same.
 */
VerticalExtensions.COLOUR_TEXTFIELD = function() {
   this.setColourFromRawValues_(Blockly.Colours.textField,
       Blockly.Colours.textField, Blockly.Colours.textField);
};

/**
 * Extension to make a block fit into a stack of statements, regardless of its
 * inputs.  That means the block should have a previous connection and a next
 * connection and have inline inputs.
 * @this {Blockly.Block}
 * @readonly
 */
VerticalExtensions.SHAPE_STATEMENT = function() {
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
};

/**
 * Extension to make a block be shaped as a hat block, regardless of its
 * inputs.  That means the block should have a next connection and have inline
 * inputs, but have no previous connection.
 * @this {Blockly.Block}
 * @readonly
 */
VerticalExtensions.SHAPE_HAT = function() {
  this.setInputsInline(true);
  this.setNextStatement(true, null);
};

/**
 * Extension to make a block be shaped as an end block, regardless of its
 * inputs.  That means the block should have a previous connection and have
 * inline inputs, but have no next connection.
 * @this {Blockly.Block}
 * @readonly
 */
VerticalExtensions.SHAPE_END = function() {
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
};

/**
 * Extension to make represent a number reporter in Scratch-Blocks.
 * That means the block has inline inputs, a round output shape, and a 'Number'
 * output type.
 * @this {Blockly.Block}
 * @readonly
 */
VerticalExtensions.OUTPUT_NUMBER = function() {
  this.setInputsInline(true);
  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  this.setOutput(true, 'Number');
};

/**
 * Extension to make represent a string reporter in Scratch-Blocks.
 * That means the block has inline inputs, a round output shape, and a 'String'
 * output type.
 * @this {Blockly.Block}
 * @readonly
 */
VerticalExtensions.OUTPUT_STRING = function() {
  this.setInputsInline(true);
  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  this.setOutput(true, 'String');
};

/**
 * Extension to make represent a boolean reporter in Scratch-Blocks.
 * That means the block has inline inputs, a round output shape, and a 'Boolean'
 * output type.
 * @this {Blockly.Block}
 * @readonly
 */
VerticalExtensions.OUTPUT_BOOLEAN = function() {
  this.setInputsInline(true);
  this.setOutputShape(Blockly.OUTPUT_SHAPE_HEXAGONAL);
  this.setOutput(true, 'Boolean');
};

/**
 * Mixin to add a context menu for a procedure definition block.
 * It adds the "edit" option and removes the "duplicate" option.
 * @mixin
 * @augments Blockly.Block
 * @package
 * @readonly
 */
VerticalExtensions.PROCEDURE_DEF_CONTEXTMENU = {
  /**
   * Add the "edit" option and removes the "duplicate" option from the context
   * menu.
   * @param {!Array.<!Object>} menuOptions List of menu options to edit.
   * @this Blockly.Block
   */
  customContextMenu: function(menuOptions) {
    // Add the edit option at the end.
    menuOptions.push(Blockly.Procedures.makeEditOption(this));

    // Find the delete option and update its callback to be specific to
    // functions.
    for (var i = 0, option; option = menuOptions[i]; i++) {
      if (option.text == Blockly.Msg.DELETE_BLOCK) {
        var input = this.getInput('custom_block');
        // this is the root block, not the shadow block.
        if (input && input.connection && input.connection.targetBlock()) {
          var procCode = input.connection.targetBlock().getProcCode();
        } else {
          return;
        }
        var rootBlock = this;
        option.callback = function() {
          var didDelete = Blockly.Procedures.deleteProcedureDefCallback(
              procCode, rootBlock);
          if (!didDelete) {
            // TODO:(#1151)
            alert('To delete a block definition, first remove all uses of the block');
          }
        };
      }
    }
    // Find and remove the duplicate option
    for (var i = 0, option; option = menuOptions[i]; i++) {
      if (option.text == Blockly.Msg.DUPLICATE) {
        menuOptions.splice(i, 1);
        break;
      }
    }
  }
};

/**
 * Mixin to add a context menu for a procedure call block.
 * It adds the "edit" option and the "define" option.
 * @mixin
 * @augments Blockly.Block
 * @package
 * @readonly
 */
VerticalExtensions.PROCEDURE_CALL_CONTEXTMENU = {
  /**
   * Add the "edit" option to the context menu.
   * @todo Add "go to definition" option once implemented.
   * @param {!Array.<!Object>} menuOptions List of menu options to edit.
   * @this Blockly.Block
   */
  customContextMenu: function(menuOptions) {
    menuOptions.push(Blockly.Procedures.makeEditOption(this));
  }
};


VerticalExtensions.SCRATCH_EXTENSION = function() {
  this.isScratchExtension = true;
};
/**
 * Register all extensions for scratch-blocks.
 * @package
 */
VerticalExtensions.registerAll = function() {
  var categoryNames =
      ['control', 'data', 'data_lists', 'sounds', 'motion', 'looks', 'event',
        'sensing', 'pen', 'operators', 'more'];
  // Register functions for all category colours.
  for (var i = 0; i < categoryNames.length; i++) {
    var name = categoryNames[i];
    Blockly.Extensions.register('colours_' + name,
        VerticalExtensions.colourHelper(name));
  }

  // Text fields transcend categories.
  Blockly.Extensions.register('colours_textfield',
      VerticalExtensions.COLOUR_TEXTFIELD);

  // Register extensions for common block shapes.
  Blockly.Extensions.register('shape_statement',
      VerticalExtensions.SHAPE_STATEMENT);
  Blockly.Extensions.register('shape_hat',
      VerticalExtensions.SHAPE_HAT);
  Blockly.Extensions.register('shape_end',
      VerticalExtensions.SHAPE_END);

  // Output shapes and types are related.
  Blockly.Extensions.register('output_number',
      VerticalExtensions.OUTPUT_NUMBER);
  Blockly.Extensions.register('output_string',
      VerticalExtensions.OUTPUT_STRING);
  Blockly.Extensions.register('output_boolean',
      VerticalExtensions.OUTPUT_BOOLEAN);

  // Custom procedures have interesting context menus.
  Blockly.Extensions.registerMixin('procedure_def_contextmenu',
      VerticalExtensions.PROCEDURE_DEF_CONTEXTMENU);
  Blockly.Extensions.registerMixin('procedure_call_contextmenu',
      VerticalExtensions.PROCEDURE_CALL_CONTEXTMENU);

  // Extension blocks have slightly different block rendering.
  Blockly.Extensions.register('scratch_extension',
      VerticalExtensions.SCRATCH_EXTENSION);
};

VerticalExtensions.registerAll();
