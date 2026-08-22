import {
  DataType_default
} from "./chunk-YJ42QTVF.js";

// node_modules/@ui5/webcomponents-base/dist/types/Float.js
var Float = class extends DataType_default {
  static isValid(value) {
    return Number(value) === value;
  }
  static attributeToProperty(attributeValue) {
    return parseFloat(attributeValue);
  }
};
var Float_default = Float;

export {
  Float_default
};
//# sourceMappingURL=chunk-CALLVILA.js.map
