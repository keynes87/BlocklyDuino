Blockly.Arduino.esp32_bluetooth = function(block) {
  var dropdown_bt_type = block.getFieldValue('BT_type');
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  if (dropdown_bt_type == 'Classic BT') {
	  Blockly.Arduino.definitions_['define_BT_type'] = '#include <BluetoothSerial.h>\n'+
                                                       '\n'+
                                                       'BluetoothSerial esp32BT;\n';
      var code = 'esp32BT.begin("'+NAME+'");\n';
  } else if (dropdown_bt_type == 'BLE') {
	  Blockly.Arduino.definitions_['define_BT_type'] = '#include <esp32BLEUtilities.h>\n'+
                                                       '\n'+
                                                       'BluetoothSerial esp32BT;\n';
      var code = 'esp32BLE.begin("'+NAME+'");\n';
  } else
	  var code = '';
  return code;
};

Blockly.Arduino.esp32_data_available = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.esp32_recieve_data = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.esp32_send_data = function(block) {
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};