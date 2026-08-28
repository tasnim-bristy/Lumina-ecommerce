import "./chunk-KLO5MOPM.js";
import {
  Button_default
} from "./chunk-PIZGL5NL.js";
import "./chunk-FVP26IXQ.js";
import "./chunk-HFFNPAU7.js";
import "./chunk-OQHTKXE6.js";
import "./chunk-BY3NBTSA.js";
import {
  Icon_default,
  event_default
} from "./chunk-U3UACDRZ.js";
import "./chunk-KZFZS4LL.js";
import {
  MESSAGE_STRIP_CLOSABLE,
  MESSAGE_STRIP_CLOSE_BUTTON,
  MESSAGE_STRIP_ERROR,
  MESSAGE_STRIP_INFORMATION,
  MESSAGE_STRIP_SUCCESS,
  MESSAGE_STRIP_WARNING
} from "./chunk-MKUK4J7G.js";
import {
  LitRenderer_default,
  classMap,
  effectiveHtml,
  ifDefined,
  parameters_bundle_css_default,
  parameters_bundle_css_default2,
  scopeTag
} from "./chunk-BK2PCNJ4.js";
import {
  slot_default
} from "./chunk-SRQLSZPJ.js";
import {
  UI5Element_default,
  customElement_default,
  property_default
} from "./chunk-2MNVO72Z.js";
import "./chunk-3YXAI4SY.js";
import {
  getI18nBundle
} from "./chunk-CQWP6VSU.js";
import {
  registerThemePropertiesLoader
} from "./chunk-JASJJZVS.js";
import "./chunk-XQ36JZLT.js";
import {
  __async
} from "./chunk-5K356HEJ.js";

// node_modules/@ui5/webcomponents/dist/types/MessageStripDesign.js
var MessageStripDesign;
(function(MessageStripDesign2) {
  MessageStripDesign2["Information"] = "Information";
  MessageStripDesign2["Positive"] = "Positive";
  MessageStripDesign2["Negative"] = "Negative";
  MessageStripDesign2["Warning"] = "Warning";
})(MessageStripDesign || (MessageStripDesign = {}));
var MessageStripDesign_default = MessageStripDesign;

// node_modules/@ui5/webcomponents/dist/generated/templates/MessageStripTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<div class="${classMap(this.classes.root)}" id="${ifDefined(this._id)}" role="note" aria-labelledby="${ifDefined(this._id)}">${!this.hideIcon ? block1.call(this, context, tags, suffix) : void 0}<span class="ui5-hidden-text">${ifDefined(this.hiddenText)}</span><span class="ui5-message-strip-text"><slot></slot></span>${!this.hideCloseButton ? block4.call(this, context, tags, suffix) : void 0}</div>`;
}
function block1(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-message-strip-icon-wrapper" aria-hidden="true">${this.iconProvided ? block2.call(this, context, tags, suffix) : block3.call(this, context, tags, suffix)}</div>`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`<slot name="icon"></slot>`;
}
function block3(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} name="${ifDefined(this.standardIconName)}" class="ui5-message-strip-icon"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon name="${ifDefined(this.standardIconName)}" class="ui5-message-strip-icon"></ui5-icon>`;
}
function block4(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-button", tags, suffix)} icon="decline" design="Transparent" class="ui5-message-strip-close-button" tooltip="${ifDefined(this._closeButtonText)}" @click=${this._closeClick}></${scopeTag("ui5-button", tags, suffix)}>` : effectiveHtml`<ui5-button icon="decline" design="Transparent" class="ui5-message-strip-close-button" tooltip="${ifDefined(this._closeButtonText)}" @click=${this._closeClick}></ui5-button>`;
}
var MessageStripTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/MessageStrip.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/MessageStrip.css.ts",
  content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block;width:100%}.ui5-message-strip-root{width:100%;height:100%;display:flex;border-radius:var(--sapPopover_BorderCornerRadius);padding:var(--_ui5-v1-24-29_message_strip_padding);border-width:var(--_ui5-v1-24-29_message_strip_border_width);border-style:solid;box-sizing:border-box;position:relative}.ui5-message-strip-root-hide-icon{padding-inline:var(--_ui5-v1-24-29_message_strip_padding_inline_no_icon);padding-block:var(--_ui5-v1-24-29_message_strip_padding_block_no_icon)}.ui5-message-strip-root-hide-close-button{padding-inline-end:1rem}.ui5-message-strip-root--info{background-color:var(--sapInformationBackground);border-color:var(--sapMessage_InformationBorderColor);color:var(--sapTextColor)}.ui5-message-strip-root--info .ui5-message-strip-icon{color:var(--sapInformativeElementColor)}.ui5-message-strip-root--positive{background-color:var(--sapSuccessBackground);border-color:var(--sapMessage_SuccessBorderColor)}.ui5-message-strip-root--positive .ui5-message-strip-icon{color:var(--sapPositiveElementColor)}.ui5-message-strip-root--negative{background-color:var(--sapErrorBackground);border-color:var(--sapMessage_ErrorBorderColor)}.ui5-message-strip-root--negative .ui5-message-strip-icon{color:var(--sapNegativeElementColor)}.ui5-message-strip-root--warning{background-color:var(--sapWarningBackground);border-color:var(--sapMessage_WarningBorderColor)}.ui5-message-strip-root--warning .ui5-message-strip-icon{color:var(--sapCriticalElementColor)}.ui5-message-strip-icon-wrapper{position:absolute;top:var(--_ui5-v1-24-29_message_strip_icon_top);inset-inline-start:.75rem;box-sizing:border-box}.ui5-message-strip-text{width:100%;color:var(--sapTextColor);line-height:1.2;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize)}.ui5-message-strip-close-button{height:1.625rem;min-height:1.625rem;position:absolute;top:var(--_ui5-v1-24-29_message_strip_close_button_top);inset-inline-end:var(--_ui5-v1-24-29_message_strip_close_button_right)}
`
};
var MessageStrip_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/MessageStrip.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MessageStrip_1;
var DesignClassesMapping;
(function(DesignClassesMapping2) {
  DesignClassesMapping2["Information"] = "ui5-message-strip-root--info";
  DesignClassesMapping2["Positive"] = "ui5-message-strip-root--positive";
  DesignClassesMapping2["Negative"] = "ui5-message-strip-root--negative";
  DesignClassesMapping2["Warning"] = "ui5-message-strip-root--warning";
})(DesignClassesMapping || (DesignClassesMapping = {}));
var IconMapping;
(function(IconMapping2) {
  IconMapping2["Information"] = "information";
  IconMapping2["Positive"] = "sys-enter-2";
  IconMapping2["Negative"] = "error";
  IconMapping2["Warning"] = "alert";
})(IconMapping || (IconMapping = {}));
var MessageStrip = MessageStrip_1 = class MessageStrip2 extends UI5Element_default {
  _closeClick() {
    this.fireEvent("close");
  }
  static onDefine() {
    return __async(this, null, function* () {
      MessageStrip_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  static designAnnouncementMappings() {
    const getTranslation = (text) => {
      return MessageStrip_1.i18nBundle.getText(text);
    };
    return {
      Information: getTranslation(MESSAGE_STRIP_INFORMATION),
      Positive: getTranslation(MESSAGE_STRIP_SUCCESS),
      Negative: getTranslation(MESSAGE_STRIP_ERROR),
      Warning: getTranslation(MESSAGE_STRIP_WARNING)
    };
  }
  get hiddenText() {
    return `${MessageStrip_1.designAnnouncementMappings()[this.design]} ${this.hideCloseButton ? "" : this._closableText}`;
  }
  get _closeButtonText() {
    return MessageStrip_1.i18nBundle.getText(MESSAGE_STRIP_CLOSE_BUTTON);
  }
  get _closableText() {
    return MessageStrip_1.i18nBundle.getText(MESSAGE_STRIP_CLOSABLE);
  }
  get classes() {
    return {
      root: {
        "ui5-message-strip-root": true,
        "ui5-message-strip-root-hide-icon": this.hideIcon,
        "ui5-message-strip-root-hide-close-button": this.hideCloseButton,
        [this.designClasses]: true
      }
    };
  }
  get iconProvided() {
    return this.icon.length > 0;
  }
  get standardIconName() {
    return IconMapping[this.design];
  }
  get designClasses() {
    return DesignClassesMapping[this.design];
  }
};
__decorate([property_default({
  type: MessageStripDesign_default,
  defaultValue: MessageStripDesign_default.Information
})], MessageStrip.prototype, "design", void 0);
__decorate([property_default({
  type: Boolean
})], MessageStrip.prototype, "hideIcon", void 0);
__decorate([property_default({
  type: Boolean
})], MessageStrip.prototype, "hideCloseButton", void 0);
__decorate([slot_default()], MessageStrip.prototype, "icon", void 0);
MessageStrip = MessageStrip_1 = __decorate([
  customElement_default({
    tag: "ui5-message-strip",
    languageAware: true,
    renderer: LitRenderer_default,
    template: MessageStripTemplate_lit_default,
    styles: MessageStrip_css_default,
    dependencies: [Icon_default, Button_default]
  }),
  event_default("close")
], MessageStrip);
MessageStrip.define();
var MessageStrip_default = MessageStrip;
export {
  MessageStrip_default as default
};
//# sourceMappingURL=@ui5_webcomponents_dist_MessageStrip__js.js.map
