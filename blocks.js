Blockly.Blocks['esp32_bluetooth'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.set_BT_Type)
        .appendField(new Blockly.FieldDropdown([["Classic BT","Classic BT"], ["BLE","BLE"]]), "BT_type")
        .appendField(Blockly.Msg.BT_name);
    this.appendValueInput("NAME")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("digitalWrite(pin, value)");
    this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/digital-io/digitalwrite/");
  }
};

Blockly.Blocks['esp32_data_available'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.data_available);
    this.setOutput(true, null);
    this.setColour(230);
  }
};

Blockly.Blocks['esp32_recieve_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.recieve_data);
    this.setOutput(true, null);
    this.setColour(230);
  }
};

Blockly.Blocks['esp32_send_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.send_data);
    this.appendValueInput("data")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.on_bluetooth);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
  }
};
*/