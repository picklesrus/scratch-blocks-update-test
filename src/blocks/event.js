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

Blockly.Blocks['event_whentouchingobject'] = {
  /**
   * Block for when a sprite is touching an object.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.EVENT_WHENTOUCHINGOBJECT,
      "args0": [
        {
          "type": "input_value",
          "name": "TOUCHINGOBJECTMENU"
        }
      ],
      "style": "event",
      "extensions": ["shape_hat"]
    });
  }
};

Blockly.Blocks['event_touchingobjectmenu'] = {
  /**
   * "Touching [Object]" Block Menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "TOUCHINGOBJECTMENU",
          "options": [
            [Blockly.Msg.SENSING_TOUCHINGOBJECT_POINTER, '_mouse_'],
            [Blockly.Msg.SENSING_TOUCHINGOBJECT_EDGE, '_edge_']
          ]
        }
      ],
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['event_whenflagclicked'] = {
  /**
   * Block for when flag clicked.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "event_whenflagclicked",
      "message0": Blockly.Msg.EVENT_WHENFLAGCLICKED,
      "args0": [
        {
          "type": "field_image",
          "src": "https://scratch.mit.edu/static/blocks-media/green-flag.svg",
          "width": 24,
          "height": 24,
          "alt": "flag"
        }
      ],
      "style": "event",
      "extensions": ["shape_hat"]
    });
  }
};

Blockly.Blocks['event_whenthisspriteclicked'] = {
  /**
   * Block for when this sprite clicked.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.EVENT_WHENTHISSPRITECLICKED,
      "style": "event",
      "extensions": ["shape_hat"]
    });
  }

};

Blockly.Blocks['event_whenstageclicked'] = {
  /**
   * Block for when the stage is clicked.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.EVENT_WHENSTAGECLICKED,
      "style": "event",
      "extensions": ["shape_hat"]
    });
  }
};

Blockly.Blocks['event_whenbroadcastreceived'] = {
  /**
   * Block for when broadcast received.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "event_whenbroadcastreceived",
      "message0": Blockly.Msg.EVENT_WHENBROADCASTRECEIVED,
      "args0": [
        {
          "type": "field_variable",
          "name": "BROADCAST_OPTION", // TODO: add types
          "variable": Blockly.Msg.DEFAULT_BROADCAST_MESSAGE_NAME
        }
      ],
      "style": "event",
      "extensions": ["shape_hat"]
    });
  }
};

Blockly.Blocks['event_whenbackdropswitchesto'] = {
  /**
   * Block for when the current backdrop switched to a selected backdrop.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.EVENT_WHENBACKDROPSWITCHESTO,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BACKDROP",
          "options": [
            ['backdrop1', 'BACKDROP1']
          ]
        }
      ],
      "style": "event",
      "extensions": ["shape_hat"]
    });
  }
};

Blockly.Blocks['event_whengreaterthan'] = {
  /**
   * Block for when loudness/timer/video motion is greater than the value.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.EVENT_WHENGREATERTHAN,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "WHENGREATERTHANMENU",
          "options": [
            [Blockly.Msg.EVENT_WHENGREATERTHAN_LOUDNESS, 'LOUDNESS'],
            [Blockly.Msg.EVENT_WHENGREATERTHAN_TIMER, 'TIMER']
          ]
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "style": "event",
      "extensions": ["shape_hat"]
    });
  }
};

Blockly.Blocks['event_broadcast_menu'] = {
  /**
   * Broadcast drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_variable",
          "name": "BROADCAST_OPTION",
          // TODO: add back types
          "variable": Blockly.Msg.DEFAULT_BROADCAST_MESSAGE_NAME
        }
      ],
      "style": "event",
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['event_broadcast'] = {
  /**
   * Block to send a broadcast.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "event_broadcast",
      "message0": Blockly.Msg.EVENT_BROADCAST,
      "args0": [
        {
          "type": "input_value",
          "name": "BROADCAST_INPUT"
        }
      ],
      "style": "event",
      "extensions": ["shape_statement"]
    });
  }
};

Blockly.Blocks['event_broadcastandwait'] = {
  /**
   * Block to send a broadcast.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.EVENT_BROADCASTANDWAIT,
      "args0": [
        {
          "type":"input_value",
          "name":"BROADCAST_INPUT"
        }
      ],
      "style": "event",
      "extensions": ["shape_statement"]
    });
  }
};

Blockly.Blocks['event_whenkeypressed'] = {
  /**
   * Block to send a broadcast.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "event_whenkeypressed",
      "message0": Blockly.Msg.EVENT_WHENKEYPRESSED,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "KEY_OPTION",
          "options": [
            [Blockly.Msg.EVENT_WHENKEYPRESSED_SPACE, 'space'],
            [Blockly.Msg.EVENT_WHENKEYPRESSED_UP, 'up arrow'],
            [Blockly.Msg.EVENT_WHENKEYPRESSED_DOWN, 'down arrow'],
            [Blockly.Msg.EVENT_WHENKEYPRESSED_RIGHT, 'right arrow'],
            [Blockly.Msg.EVENT_WHENKEYPRESSED_LEFT, 'left arrow'],
            [Blockly.Msg.EVENT_WHENKEYPRESSED_ANY, 'any'],
            ['a', 'a'],
            ['b', 'b'],
            ['c', 'c'],
            ['d', 'd'],
            ['e', 'e'],
            ['f', 'f'],
            ['g', 'g'],
            ['h', 'h'],
            ['i', 'i'],
            ['j', 'j'],
            ['k', 'k'],
            ['l', 'l'],
            ['m', 'm'],
            ['n', 'n'],
            ['o', 'o'],
            ['p', 'p'],
            ['q', 'q'],
            ['r', 'r'],
            ['s', 's'],
            ['t', 't'],
            ['u', 'u'],
            ['v', 'v'],
            ['w', 'w'],
            ['x', 'x'],
            ['y', 'y'],
            ['z', 'z'],
            ['0', '0'],
            ['1', '1'],
            ['2', '2'],
            ['3', '3'],
            ['4', '4'],
            ['5', '5'],
            ['6', '6'],
            ['7', '7'],
            ['8', '8'],
            ['9', '9']
          ]
        }
      ],
      "style": "event",
      "extensions": ["shape_hat"]
    });
  }
};
