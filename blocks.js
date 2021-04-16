Blockly.Blocks['bluetooth'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.set_classicBT);
    this.appendValueInput("NAME")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['data_available'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.data_available);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['recieve_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.recieve_data);
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['send_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.send_data);
    this.appendValueInput("data")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.on_BT);
   this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};