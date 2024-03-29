/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
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

import * as Blockly from 'blockly';

Blockly.Blocks['extension_pen_down'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 pen down",
      "args0": [
        {
          "type": "field_image",
          "src": "https://scratch.mit.edu/static/blocks-media/extensions/pen-block-icon.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        }
      ],
      "style":"more",
      "extensions": ["shape_statement", "scratch_extension"]
    });
  }
};

Blockly.Blocks['extension_music_drum'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 play drum %3",
      "args0": [
        {
          "type": "field_image",
          "src": "https://scratch.mit.edu/static/blocks-media/extensions/music-block-icon.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "NUMBER"
        }
      ],
      "style":"more",
      "extensions": ["shape_statement", "scratch_extension"]
    });
  }
};

Blockly.Blocks['extension_wedo_motor'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 turn a motor %3",
      "args0": [
        {
          "type": "field_image",
          "src": "https://scratch.mit.edu/static/blocks-media/extensions/wedo2-block-icon.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "field_image",
          "src": "https://scratch.mit.edu/static/blocks-media/rotate-right.svg",
          "width": 24,
          "height": 24
        }
      ],
      "style":"more",
      "extensions": ["shape_statement", "scratch_extension"]
    });
  }
};

Blockly.Blocks['extension_wedo_hat'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 when I am wearing a hat",
      "args0": [
        {
          "type": "field_image",
          "src": "https://scratch.mit.edu/static/blocks-media/extensions/wedo2-block-icon.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        }
      ],
      "style":"more",
      "extensions": ["shape_hat", "scratch_extension"]
    });
  }
};

Blockly.Blocks['extension_wedo_boolean'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 O RLY?",
      "args0": [
        {
          "type": "field_image",
          "src": "https://scratch.mit.edu/static/blocks-media/extensions/wedo2-block-icon.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        }
      ],
      "style":"more",
      "extensions": ["output_boolean", "scratch_extension"]
    });
  }
};

Blockly.Blocks['extension_wedo_tilt_reporter'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 tilt angle %3",
      "args0": [
        {
          "type": "field_image",
          "src": "https://scratch.mit.edu/static/blocks-media/extensions/wedo2-block-icon.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "TILT"
        }
      ],
      "style":"more",
      "extensions": ["output_number", "scratch_extension"]
    });
  }
};

Blockly.Blocks['extension_wedo_tilt_menu'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "TILT",
          "options": [
            ['Any', 'Any'],
            ['Whirl', 'Whirl'],
            ['South', 'South'],
            ['Back in time', 'Back in time']
          ]
        }
      ],
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['extension_music_reporter'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 hey now, you're an all-star",
      "args0": [
        {
          "type": "field_image",
          "src": "https://scratch.mit.edu/static/blocks-media/extensions/music-block-icon.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        }
      ],
      "style":"more",
      "extensions": ["output_number", "scratch_extension"]
    });
  }
};

Blockly.Blocks['extension_microbit_display'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 display %3",
      "args0": [
        {
          "type": "field_image",
          "src": "https://scratch.mit.edu/static/blocks-media/extensions/microbit-block-icon.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "MATRIX"
        },
      ],
      "style": "pen",
      "extensions": ["shape_statement", "scratch_extension"]
    });
  }
};

Blockly.Blocks['extension_music_play_note'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 play note %3 for %4 beats",
      "args0": [
        {
          "type": "field_image",
          "src": "https://scratch.mit.edu/static/blocks-media/extensions/music-block-icon.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "NOTE"
        },
        {
          "type": "input_value",
          "name": "BEATS"
        }
      ],
      "style": "pen",
      "extensions": ["shape_statement", "scratch_extension"]
    });
  }
};
