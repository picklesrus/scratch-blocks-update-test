import * as Blockly from 'blockly';
// I haven't figured out how to import this file properly so the themes are here.
// TODO: move them back into separate files.
//import Theme from './src/default_theme';

// TODO Fix up all the other blocks files. They need:
//     * to have the colour extensions removed.
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

// TODO: figure out how to read this from default_toolbox.js instead.
const toolboxXml = '<xml id="toolbox-categories" style="display: none">' +
  '<category name="%{BKY_CATEGORY_MOTION}" id="motion" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="motion_movesteps" id="motion_movesteps">' +
      '<value name="STEPS">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_turnright" id="motion_turnright">' +
      '<value name="DEGREES">' +
        '<shadow type="math_number">' +
          '<field name="NUM">15</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_turnleft" id="motion_turnleft">' +
      '<value name="DEGREES">' +
        '<shadow type="math_number">' +
          '<field name="NUM">15</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_pointindirection" id="motion_pointindirection">' +
      '<value name="DIRECTION">' +
        '<shadow type="math_angle">' +
          '<field name="NUM">90</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_pointtowards" id="motion_pointtowards">' +
      '<value name="TOWARDS">' +
        '<shadow type="motion_pointtowards_menu">' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_gotoxy" id="motion_gotoxy">' +
      '<value name="X">' +
        '<shadow id="movex" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="Y">' +
        '<shadow id="movey" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_goto" id="motion_goto">' +
      '<value name="TO">' +
        '<shadow type="motion_goto_menu">' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_glidesecstoxy" id="motion_glidesecstoxy">' +
      '<value name="SECS">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="X">' +
        '<shadow id="glidex" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="Y">' +
        '<shadow id="glidey" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_glideto" id="motion_glideto">' +
      '<value name="SECS">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="TO">' +
        '<shadow type="motion_glideto_menu">' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_changexby" id="motion_changexby">' +
      '<value name="DX">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_setx" id="motion_setx">' +
      '<value name="X">' +
        '<shadow id="setx" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_changeyby" id="motion_changeyby">' +
      '<value name="DY">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_sety" id="motion_sety">' +
      '<value name="Y">' +
        '<shadow id="sety" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_ifonedgebounce" id="motion_ifonedgebounce"></block>' +
    '<block type="motion_setrotationstyle" id="motion_setrotationstyle"></block>' +
    '<block type="motion_xposition" id="motion_xposition"></block>' +
    '<block type="motion_yposition" id="motion_yposition"></block>' +
    '<block type="motion_direction" id="motion_direction"></block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_LOOKS}" id="looks" colour="#9966FF" secondaryColour="#774DCB">' +
    '<block type="looks_show" id="looks_show"></block>' +
    '<block type="looks_hide" id="looks_hide"></block>' +
    '<block type="looks_switchcostumeto" id="looks_switchcostumeto">' +
      '<value name="COSTUME">' +
        '<shadow type="looks_costume"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_nextcostume" id="looks_nextcostume"></block>' +
    '<block type="looks_nextbackdrop" id="looks_nextbackdrop"></block>' +
    '<block type="looks_switchbackdropto" id="looks_switchbackdropto">' +
      '<value name="BACKDROP">' +
        '<shadow type="looks_backdrops"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_switchbackdroptoandwait" id="looks_switchbackdroptoandwait">' +
      '<value name="BACKDROP">' +
        '<shadow type="looks_backdrops"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_changeeffectby" id="looks_changeeffectby">' +
      '<value name="CHANGE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_seteffectto" id="looks_seteffectto">' +
      '<value name="VALUE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_cleargraphiceffects" id="looks_cleargraphiceffects"></block>' +
    '<block type="looks_changesizeby" id="looks_changesizeby">' +
      '<value name="CHANGE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_setsizeto" id="looks_setsizeto">' +
      '<value name="SIZE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">100</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_gotofrontback" id="looks_gotofrontback"></block>' +
    '<block type="looks_goforwardbackwardlayers" id="looks_goforwardbackwardlayers">' +
      '<value name="NUM">' +
        '<shadow type="math_integer">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_costumenumbername" id="looks_costumenumbername"></block>' +
    '<block type="looks_backdropnumbername" id="looks_backdropnumbername"></block>' +
    '<block type="looks_size" id="looks_size"></block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_SOUND}" id="sound" colour="#D65CD6" secondaryColour="#BD42BD">' +
    '<block type="sound_play" id="sound_play">' +
      '<value name="SOUND_MENU">' +
        '<shadow type="sound_sounds_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sound_playuntildone" id="sound_playuntildone">' +
      '<value name="SOUND_MENU">' +
        '<shadow type="sound_sounds_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sound_stopallsounds" id="sound_stopallsounds"></block>' +
    '<block type="sound_changeeffectby" id="sound_changeeffectby">' +
      '<value name="VALUE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sound_seteffectto" id="sound_seteffectto">' +
      '<value name="VALUE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">100</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sound_cleareffects" id="sound_cleareffects"></block>' +
    '<block type="sound_changevolumeby" id="sound_changevolumeby">' +
      '<value name="VOLUME">' +
        '<shadow type="math_number">' +
          '<field name="NUM">-10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sound_setvolumeto" id="sound_setvolumeto">' +
      '<value name="VOLUME">' +
        '<shadow type="math_number">' +
          '<field name="NUM">100</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sound_volume" id="sound_volume"></block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_EVENTS}" id="events" colour="#FFD500" secondaryColour="#CC9900">' +
    '<block type="event_whenflagclicked" id="event_whenflagclicked"></block>' +
    '<block type="event_whenkeypressed" id="event_whenkeypressed">' +
    '</block>' +
    '<block type="event_whenthisspriteclicked" id="event_whenthisspriteclicked"></block>' +
    '<block type="event_whenbackdropswitchesto" id="event_whenbackdropswitchesto">' +
    '</block>' +
    '<block type="event_whengreaterthan" id="event_whengreaterthan">' +
      '<value name="VALUE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="event_whenbroadcastreceived" id="event_whenbroadcastreceived">' +
    '</block>' +
    '<block type="event_broadcast" id="event_broadcast">' +
      '<value name="BROADCAST_INPUT">' +
        '<shadow type="event_broadcast_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="event_broadcastandwait" id="event_broadcastandwait">' +
      '<value name="BROADCAST_INPUT">' +
        '<shadow type="event_broadcast_menu"></shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_CONTROL}" id="control" colour="#FFAB19" secondaryColour="#CF8B17">' +
    '<block type="control_wait" id="control_wait">' +
      '<value name="DURATION">' +
        '<shadow type="math_positive_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="control_repeat" id="control_repeat">' +
      '<value name="TIMES">' +
        '<shadow type="math_whole_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="control_forever" id="control_forever"></block>' +
    '<block type="control_if" id="control_if"></block>' +
    '<block type="control_if_else" id="control_if_else"></block>' +
    '<block type="control_wait_until" id="control_wait_until"></block>' +
    '<block type="control_repeat_until" id="control_repeat_until"></block>' +
    '<block type="control_stop" id="control_stop"></block>' +
    '<block type="control_start_as_clone" id="control_start_as_clone"></block>' +
    '<block type="control_create_clone_of" id="control_create_clone_of">' +
      '<value name="CLONE_OPTION">' +
        '<shadow type="control_create_clone_of_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="control_delete_this_clone" id="control_delete_this_clone"></block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_SENSING}" id="sensing" colour="#4CBFE6" secondaryColour="#2E8EB8">' +
    '<block type="sensing_touchingobject" id="sensing_touchingobject">' +
      '<value name="TOUCHINGOBJECTMENU">' +
        '<shadow type="sensing_touchingobjectmenu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_touchingcolor" id="sensing_touchingcolor">' +
      '<value name="COLOR">' +
        '<shadow type="colour_picker"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_coloristouchingcolor" id="sensing_coloristouchingcolor">' +
      '<value name="COLOR">' +
        '<shadow type="colour_picker"></shadow>' +
      '</value>' +
      '<value name="COLOR2">' +
        '<shadow type="colour_picker"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_distanceto" id="sensing_distanceto">' +
      '<value name="DISTANCETOMENU">' +
        '<shadow type="sensing_distancetomenu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_keypressed" id="sensing_keypressed">' +
        '<value name="KEY_OPTION">' +
          '<shadow type="sensing_keyoptions"></shadow>' +
        '</value>' +
    '</block>' +
    '<block type="sensing_mousedown" id="sensing_mousedown"></block>' +
    '<block type="sensing_mousex" id="sensing_mousex"></block>' +
    '<block type="sensing_mousey" id="sensing_mousey"></block>' +
    '<block type="sensing_setdragmode" id="sensing_setdragmode"></block>' +
    '<block type="sensing_loudness" id="sensing_loudness"></block>' +
    '<block type="sensing_timer" id="sensing_timer"></block>' +
    '<block type="sensing_resettimer" id="sensing_resettimer"></block>' +
    '<block type="sensing_of" id="sensing_of">' +
      '<value name="OBJECT">' +
        '<shadow type="sensing_of_object_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_current" id="sensing_current"></block>' +
    '<block type="sensing_dayssince2000" id="sensing_dayssince2000"></block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_OPERATORS}" id="operators" colour="#40BF4A" secondaryColour="#389438">' +
    '<block type="operator_add" id="operator_add">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_subtract" id="operator_subtract">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_multiply" id="operator_multiply">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_divide" id="operator_divide">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_random" id="operator_random">' +
      '<value name="FROM">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="TO">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_lt" id="operator_lt">' +
      '<value name="OPERAND1">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OPERAND2">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_equals" id="operator_equals">' +
      '<value name="OPERAND1">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OPERAND2">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_gt" id="operator_gt">' +
      '<value name="OPERAND1">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OPERAND2">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_and" id="operator_and"></block>' +
    '<block type="operator_or" id="operator_or"></block>' +
    '<block type="operator_not" id="operator_not"></block>' +
    '<block type="operator_join" id="operator_join">' +
      '<value name="STRING1">' +
        '<shadow type="text">' +
          '<field name="TEXT">hello</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="STRING2">' +
        '<shadow type="text">' +
          '<field name="TEXT">world</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_letter_of" id="operator_letter_of">' +
      '<value name="LETTER">' +
        '<shadow type="math_whole_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="STRING">' +
        '<shadow type="text">' +
          '<field name="TEXT">world</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_length" id="operator_length">' +
      '<value name="STRING">' +
        '<shadow type="text">' +
          '<field name="TEXT">world</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_contains" id="operator_contains">' +
      '<value name="STRING1">' +
        '<shadow type="text">' +
          '<field name="TEXT">hello</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="STRING2">' +
        '<shadow type="text">' +
          '<field name="TEXT">world</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_mod" id="operator_mod">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_round" id="operator_round">' +
      '<value name="NUM">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_mathop" id="operator_mathop">' +
      '<value name="NUM">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_VARIABLES}" id="data" colour="#FF8C1A" secondaryColour="#DB6E00" custom="VARIABLE">' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_MYBLOCKS}" id="more" colour="#FF6680" secondaryColour="#FF4D6A" custom="PROCEDURE">' +
  '</category>' +
  '<category name="Extensions" id="extensions" colour="#FF6680" secondaryColour="#FF4D6A" ' +
    'iconURI="../media/extensions/wedo2-block-icon.svg" showStatusButton="true">' +
    '<block type="extension_pen_down" id="extension_pen_down"></block>' +
    '<block type="extension_music_drum" id="extension_music_drum">' +
      '<value name="NUMBER">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '</block>' +
    '<block type="extension_wedo_motor" id="extension_wedo_motor"></block>' +
    '<block type="extension_wedo_hat" id="extension_wedo_hat"></block>' +
    '<block type="extension_wedo_boolean" id="extension_wedo_boolean"></block>' +
    '<block type="extension_wedo_tilt_reporter" id="extension_wedo_reporter">' +
      '<value name="TILT">' +
        '<shadow type="extension_wedo_tilt_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="extension_music_reporter" id="extension_music_reporter"></block>' +
    '<block type="extension_microbit_display" id="extension_microbit_display">' +
      '<value name="MATRIX">' +
        '<shadow type="matrix">' +
          '<field name="MATRIX">0101010101100010101000100</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="extension_music_play_note" id="extension_music_play_note">' +
      '<value name="NOTE">' +
        '<shadow type="note">' +
          '<field name="NOTE">60</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="BEATS">' +
        '<shadow type="math_number">' +
          '<field name="NUM">0.25</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '</xml>';
/**
 * Create a workspace.
 * @param {HTMLElement} blocklyDiv The blockly container div.
 * @param {!Blockly.BlocklyOptions} options The Blockly options.
 * @return {!Blockly.WorkspaceSvg} The created workspace.
 */

document.addEventListener('DOMContentLoaded', function() {
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
    theme: ScratchTheme,
    renderer: 'zelos',
    media: 'https://unpkg.com/scratch-blocks@0.1.0-prerelease.1578322100/media/'
  };
  // Create workspace and import the XML
  const workspace = Blockly.inject('root',
      defaultOptions);
  //createPlayground(document.getElementById('root'), createWorkspace,  defaultOptions);
});
