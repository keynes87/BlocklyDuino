Blockly.Arduino.esp32_bluetooth = function(block) {
  var dropdown_bt_type = block.getFieldValue('BT_type');
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Arduino.esp32_data_available = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.esp32_recieve_data = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.esp32_send_data = function(block) {
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};