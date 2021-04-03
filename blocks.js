Blockly.Blocks['bluetooth'] = {
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
 this.setTooltip("設定藍牙模式及名稱");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['data_available'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("從藍牙接收到資料?");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['recieve_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("讀取藍牙設備資料(數值)");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sand_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("傳送資料");
    this.appendValueInput("data")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("到藍牙裝置");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};