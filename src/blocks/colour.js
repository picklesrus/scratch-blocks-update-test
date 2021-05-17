
import * as Blockly from 'blockly';
/**
 * Pick a random colour.
 * @return {string} #RRGGBB for random colour.
 */
function randomColour() {
  var num = Math.floor(Math.random() * Math.pow(2, 24));
  return '#' + ('00000' + num.toString(16)).substr(-6);
}

Blockly.Blocks['colour_picker'] = {
  /**
   * Block for colour picker.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_colour_slider",
          "name": "COLOUR",
          "colour": randomColour()
        }
      ],
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "output": "Colour"
    });
  }
};
