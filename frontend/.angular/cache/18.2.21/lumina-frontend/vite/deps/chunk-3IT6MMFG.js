import {
  slot_default
} from "./chunk-SRQLSZPJ.js";
import {
  UI5Element_default,
  customElement_default,
  property_default
} from "./chunk-45WMDHUI.js";

// node_modules/@ui5/webcomponents/dist/Option.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Option = class Option2 extends UI5Element_default {
  get stableDomRef() {
    return this.getAttribute("stable-dom-ref") || `${this._id}-stable-dom-ref`;
  }
};
__decorate([property_default({
  type: Boolean
})], Option.prototype, "selected", void 0);
__decorate([property_default({
  type: Boolean
})], Option.prototype, "disabled", void 0);
__decorate([property_default()], Option.prototype, "title", void 0);
__decorate([property_default({
  defaultValue: null
})], Option.prototype, "icon", void 0);
__decorate([property_default()], Option.prototype, "value", void 0);
__decorate([property_default()], Option.prototype, "additionalText", void 0);
__decorate([property_default({
  type: Boolean
})], Option.prototype, "focused", void 0);
__decorate([slot_default({
  type: Node,
  "default": true,
  invalidateOnChildChange: true
})], Option.prototype, "text", void 0);
Option = __decorate([customElement_default("ui5-option")], Option);
Option.define();
var Option_default = Option;

export {
  Option_default
};
//# sourceMappingURL=chunk-3IT6MMFG.js.map
