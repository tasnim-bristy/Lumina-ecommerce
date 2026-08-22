// node_modules/@ui5/webcomponents-base/dist/types/DataType.js
var DataType = class {
  /**
   * Checks if the value is valid for its data type.
   * @public
   */
  // eslint-disable-next-line
  static isValid(value) {
    return false;
  }
  static attributeToProperty(attributeValue) {
    return attributeValue;
  }
  static propertyToAttribute(propertyValue) {
    return propertyValue === null ? null : String(propertyValue);
  }
  static valuesAreEqual(value1, value2) {
    return value1 === value2;
  }
  static generateTypeAccessors(types) {
    Object.keys(types).forEach((type) => {
      Object.defineProperty(this, type, {
        get() {
          return types[type];
        }
      });
    });
  }
  static get isDataTypeClass() {
    return true;
  }
};
var DataType_default = DataType;

// node_modules/@ui5/webcomponents-base/dist/types/Integer.js
var Integer = class extends DataType_default {
  static isValid(value) {
    return Number.isInteger(value);
  }
  static attributeToProperty(attributeValue) {
    return parseInt(attributeValue);
  }
};
var Integer_default = Integer;

export {
  DataType_default,
  Integer_default
};
//# sourceMappingURL=chunk-YJ42QTVF.js.map
