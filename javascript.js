Blockly.Arduino['bluetooth'] = function(block) {
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['classicBT'] = '#include <BluetoothSerial.h>\n'+
                                              '\n'+
                                              'BluetoothSerial esp32BT;\n';
  // TODO: Assemble Arduino into code variable.
  var code = '  esp32BT.begin(' + value_name + ');\n';
  return code;
};

Blockly.Arduino['data_available'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = 'esp32BT.available()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['recieve_data'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  // TODO: Change ORDER_NONE to the correct strength.
  return ['esp32BT.read()', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['send_data'] = function(block) {
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = 'esp32BT.write(' + value_data + ');\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};