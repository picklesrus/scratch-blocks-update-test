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


Blockly.Blocks['sensing_touchingobject'] = {
  /**
   * Block to Report if its touching a Object.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_TOUCHINGOBJECT,
      "args0": [
        {
          "type": "input_value",
          "name": "TOUCHINGOBJECTMENU"
        }
      ],
      "style": "sensing",
      "extensions": ["output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_touchingobjectmenu'] = {
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
      "extensions": ["output_string"],
      "style": "sensing",
    });
  }
};

Blockly.Blocks['sensing_touchingcolor'] = {
  /**
   * Block to Report if its touching a certain Color.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_TOUCHINGCOLOR,
      "args0": [
        {
          "type": "input_value",
          "name": "COLOR"
        }
      ],
      "style": "sensing",
      "extensions": ["output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_coloristouchingcolor'] = {
  /**
   * Block to Report if a color is touching a certain Color.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_COLORISTOUCHINGCOLOR,
      "args0": [
        {
          "type": "input_value",
          "name": "COLOR"
        },
        {
          "type": "input_value",
          "name": "COLOR2"
        }
      ],
      "style": "sensing",
      "extensions": ["output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_distanceto'] = {
  /**
   * Block to Report distance to another Object.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_DISTANCETO,
      "args0": [
        {
          "type": "input_value",
          "name": "DISTANCETOMENU"
        }
      ],
      "style": "sensing",
      "extensions": ["output_number"]
    });
  }
};

Blockly.Blocks['sensing_distancetomenu'] = {
  /**
   * "Distance to [Object]" Block Menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DISTANCETOMENU",
          "options": [
            [Blockly.Msg.SENSING_DISTANCETO_POINTER, '_mouse_']
          ]
        }
      ],
      "extensions": ["output_string"],
      "style": "sensing",
    });
  }
};

Blockly.Blocks['sensing_askandwait'] = {
  /**
   * Block to ask a question and wait
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_ASKANDWAIT,
      "args0": [
        {
          "type": "input_value",
          "name": "QUESTION"
        }
      ],
      "style": "sensing",
      "extensions": ["shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_answer'] = {
  /**
   * Block to report answer
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_ANSWER,
      "style": "sensing",
      "checkboxInFlyout": true,
      "extensions": ["output_number"]
    });
  }
};

Blockly.Blocks['sensing_keypressed'] = {
  /**
   * Block to Report if a key is pressed.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_KEYPRESSED,
      "args0": [
        {
          "type": "input_value",
          "name": "KEY_OPTION"
        }
      ],
      "style": "sensing",
      "extensions": ["output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_keyoptions'] = {
  /**
   * Options for Keys
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
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
      "extensions": ["output_string"],
      "style": "sensing",
    });
  }
};

Blockly.Blocks['sensing_mousedown'] = {
  /**
   * Block to Report if the mouse is down.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_MOUSEDOWN,
      "style": "sensing",
      "extensions": ["output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_mousex'] = {
  /**
   * Block to report mouse's x position
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_MOUSEX,
      "style": "sensing",
      "extensions": ["output_number"]
    });
  }
};

Blockly.Blocks['sensing_mousey'] = {
  /**
   * Block to report mouse's y position
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_MOUSEY,
      "style": "sensing",
      "extensions": ["output_number"]
    });
  }
};

Blockly.Blocks['sensing_setdragmode'] = {
  /**
   * Block to set drag mode.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_SETDRAGMODE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DRAG_MODE",
          "options": [
            [Blockly.Msg.SENSING_SETDRAGMODE_DRAGGABLE, 'draggable'],
            [Blockly.Msg.SENSING_SETDRAGMODE_NOTDRAGGABLE, 'not draggable']
          ]
        }
      ],
      "style": "sensing",
      "extensions": ["shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_loudness'] = {
  /**
   * Block to report loudness
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_LOUDNESS,
      "style": "sensing",
      "checkboxInFlyout": true,
      "extensions": ["output_number"]
    });
  }
};

Blockly.Blocks['sensing_loud'] = {
  /**
   * Block to report if the loudness is "loud" (greater than 10). This is an
   * obsolete block that is implemented for compatibility with Scratch 2.0 and
   * 1.4 projects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_LOUD,
      "style": "sensing",
      "extensions": ["output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_timer'] = {
  /**
   * Block to report timer
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_TIMER,
      "style": "sensing",
      "checkboxInFlyout": true,
      "extensions": ["output_number"]
    });
  }
};

Blockly.Blocks['sensing_resettimer'] = {
  /**
   * Block to reset timer
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_RESETTIMER,
      "style": "sensing",
      "extensions": ["shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_of_object_menu'] = {
  /**
   * "* of _" object menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OBJECT",
          "options": [
            ['Sprite1', 'Sprite1'],
            ['Stage', '_stage_']
          ]
        }
      ],
      "style": "sensing",
      "extensions": ["output_string"]
    });
  }
};


Blockly.Blocks['sensing_of'] = {
  /**
   * Block to report properties of sprites.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_OF,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PROPERTY",
          "options": [
            [Blockly.Msg.SENSING_OF_XPOSITION, 'x position'],
            [Blockly.Msg.SENSING_OF_YPOSITION, 'y position'],
            [Blockly.Msg.SENSING_OF_DIRECTION, 'direction'],
            [Blockly.Msg.SENSING_OF_COSTUMENUMBER, 'costume #'],
            [Blockly.Msg.SENSING_OF_COSTUMENAME, 'costume name'],
            [Blockly.Msg.SENSING_OF_SIZE, 'size'],
            [Blockly.Msg.SENSING_OF_VOLUME, 'volume'],
            [Blockly.Msg.SENSING_OF_BACKDROPNUMBER, 'backdrop #'],
            [Blockly.Msg.SENSING_OF_BACKDROPNAME, 'backdrop name']
          ]
        },
        {
          "type": "input_value",
          "name": "OBJECT"
        }
      ],
      "output": true,
      "style": "sensing",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
    });
  }
};

Blockly.Blocks['sensing_current'] = {
  /**
   * Block to Report the current option.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_CURRENT,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CURRENTMENU",
          "options": [
            [Blockly.Msg.SENSING_CURRENT_YEAR, 'YEAR'],
            [Blockly.Msg.SENSING_CURRENT_MONTH, 'MONTH'],
            [Blockly.Msg.SENSING_CURRENT_DATE, 'DATE'],
            [Blockly.Msg.SENSING_CURRENT_DAYOFWEEK, 'DAYOFWEEK'],
            [Blockly.Msg.SENSING_CURRENT_HOUR, 'HOUR'],
            [Blockly.Msg.SENSING_CURRENT_MINUTE, 'MINUTE'],
            [Blockly.Msg.SENSING_CURRENT_SECOND, 'SECOND']
          ]
        }
      ],
      "style": "sensing",
      "checkboxInFlyout": true,
      "extensions": ["output_number"]
    });
  }
};

Blockly.Blocks['sensing_dayssince2000'] = {
  /**
   * Block to report days since 2000
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_DAYSSINCE2000,
      "style": "sensing",
      "extensions": ["output_number"]
    });
  }
};

Blockly.Blocks['sensing_username'] = {
  /**
   * Block to report user's username
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_USERNAME,
      "style": "sensing",
      "checkboxInFlyout": true,
      "extensions": ["output_number"]
    });
  }
};

Blockly.Blocks['sensing_userid'] = {
  /**
   * Block to report user's ID. Does not actually do anything. This is an
   * obsolete block that is implemented for compatibility with Scratch 2.0
   * projects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_USERID,
      "style": "sensing",
      "extensions": ["output_number"]
    });
  }
};
