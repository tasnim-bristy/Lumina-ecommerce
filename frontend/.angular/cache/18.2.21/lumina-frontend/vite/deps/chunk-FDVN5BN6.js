import {
  getEnableDefaultTooltips
} from "./chunk-BFT4H3DB.js";
import {
  willShowContent_default
} from "./chunk-KZFZS4LL.js";
import {
  deregisterUI5Element,
  getAllAccessibleNameRefTexts,
  registerUI5Element
} from "./chunk-BY3NBTSA.js";
import {
  BUTTON_ARIA_TYPE_ACCEPT,
  BUTTON_ARIA_TYPE_EMPHASIZED,
  BUTTON_ARIA_TYPE_REJECT
} from "./chunk-MKUK4J7G.js";
import {
  Icon_default,
  event_default
} from "./chunk-4CCMOZQP.js";
import {
  LitRenderer_default,
  effectiveHtml,
  ifDefined,
  isEnter,
  isEscape,
  isShift,
  isSpace,
  parameters_bundle_css_default,
  parameters_bundle_css_default2,
  scopeTag
} from "./chunk-S2KYTLGV.js";
import {
  slot_default
} from "./chunk-SRQLSZPJ.js";
import {
  UI5Element_default,
  customElement_default,
  property_default
} from "./chunk-45WMDHUI.js";
import {
  getIconAccessibleName
} from "./chunk-45EM4FL4.js";
import {
  getI18nBundle
} from "./chunk-5RZ2QJVB.js";
import {
  getFeature,
  isDesktop,
  isSafari,
  registerThemePropertiesLoader
} from "./chunk-KIL2GIL2.js";
import {
  __async
} from "./chunk-5K356HEJ.js";

// node_modules/@ui5/webcomponents-base/dist/MarkedEvents.js
var markedEvents = /* @__PURE__ */ new WeakMap();
var markEvent = (event, value) => {
  markedEvents.set(event, value);
};
var getEventMark = (event) => {
  return markedEvents.get(event);
};

// node_modules/@ui5/webcomponents/dist/types/ButtonDesign.js
var ButtonDesign;
(function(ButtonDesign2) {
  ButtonDesign2["Default"] = "Default";
  ButtonDesign2["Positive"] = "Positive";
  ButtonDesign2["Negative"] = "Negative";
  ButtonDesign2["Transparent"] = "Transparent";
  ButtonDesign2["Emphasized"] = "Emphasized";
  ButtonDesign2["Attention"] = "Attention";
})(ButtonDesign || (ButtonDesign = {}));
var ButtonDesign_default = ButtonDesign;

// node_modules/@ui5/webcomponents/dist/types/ButtonType.js
var ButtonType;
(function(ButtonType2) {
  ButtonType2["Button"] = "Button";
  ButtonType2["Submit"] = "Submit";
  ButtonType2["Reset"] = "Reset";
})(ButtonType || (ButtonType = {}));
var ButtonType_default = ButtonType;

// node_modules/@ui5/webcomponents/dist/types/ButtonAccessibleRole.js
var ButtonAccessibleRole;
(function(ButtonAccessibleRole2) {
  ButtonAccessibleRole2["Button"] = "Button";
  ButtonAccessibleRole2["Link"] = "Link";
})(ButtonAccessibleRole || (ButtonAccessibleRole = {}));
var ButtonAccessibleRole_default = ButtonAccessibleRole;

// node_modules/@ui5/webcomponents/dist/generated/templates/ButtonTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<button type="button" class="ui5-button-root" ?disabled="${this.disabled}" data-sap-focus-ref  @focusout=${this._onfocusout} @focusin=${this._onfocusin} @click=${this._onclick} @mousedown=${this._onmousedown} @mouseup=${this._onmouseup} @keydown=${this._onkeydown} @keyup=${this._onkeyup} @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" tabindex=${ifDefined(this.tabIndexValue)} aria-expanded="${ifDefined(this.accessibilityAttributes.expanded)}" aria-controls="${ifDefined(this.accessibilityAttributes.controls)}" aria-haspopup="${ifDefined(this._hasPopup)}" aria-label="${ifDefined(this.ariaLabelText)}" aria-describedby="${ifDefined(this.ariaDescribedbyText)}" title="${ifDefined(this.buttonTitle)}" part="button" role="${ifDefined(this.buttonAccessibleRole)}">${this.icon ? block1.call(this, context, tags, suffix) : void 0}<span id="${ifDefined(this._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span>${this.hasButtonType ? block2.call(this, context, tags, suffix) : void 0}</button> `;
}
function block1(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-button-icon" name="${ifDefined(this.icon)}" accessible-role="${ifDefined(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-button-icon" name="${ifDefined(this.icon)}" accessible-role="${ifDefined(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></ui5-icon>`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`<span id="ui5-button-hiddenText-type" aria-hidden="true" class="ui5-hidden-text">${ifDefined(this.buttonTypeText)}</span>`;
}
var ButtonTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/types/HasPopup.js
var HasPopup;
(function(HasPopup2) {
  HasPopup2["Dialog"] = "Dialog";
  HasPopup2["Grid"] = "Grid";
  HasPopup2["ListBox"] = "ListBox";
  HasPopup2["Menu"] = "Menu";
  HasPopup2["Tree"] = "Tree";
})(HasPopup || (HasPopup = {}));
var HasPopup_default = HasPopup;

// node_modules/@ui5/webcomponents/dist/generated/themes/Button.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/Button.css.ts",
  content: `:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block}:host{min-width:var(--_ui5-v1-24-29_button_base_min_width);height:var(--_ui5-v1-24-29_button_base_height);line-height:normal;font-family:var(--_ui5-v1-24-29_button_fontFamily);font-size:var(--sapFontSize);text-shadow:var(--_ui5-v1-24-29_button_text_shadow);border-radius:var(--_ui5-v1-24-29_button_border_radius);cursor:pointer;background-color:var(--sapButton_Background);border:var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);color:var(--sapButton_TextColor);box-sizing:border-box;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-tap-highlight-color:transparent}.ui5-button-root{min-width:inherit;cursor:inherit;height:100%;width:100%;box-sizing:border-box;display:flex;justify-content:center;align-items:center;outline:none;padding:0 var(--_ui5-v1-24-29_button_base_padding);position:relative;background:transparent;border:none;color:inherit;text-shadow:inherit;font:inherit;white-space:inherit;overflow:inherit;text-overflow:inherit;letter-spacing:inherit;word-spacing:inherit;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host(:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host(:not([hidden]):not([disabled]).ui5_hovered){background:var(--sapButton_Hover_Background);border:1px solid var(--sapButton_Hover_BorderColor);color:var(--sapButton_Hover_TextColor)}.ui5-button-icon{color:inherit;flex-shrink:0}:host([icon-end]) .ui5-button-root{flex-direction:row-reverse}:host([icon-end]) .ui5-button-icon{margin-inline-start:var(--_ui5-v1-24-29_button_base_icon_margin)}:host([icon-only]) .ui5-button-root{min-width:auto;padding:0}:host([icon-only]) .ui5-button-text{display:none}.ui5-button-text{outline:none;position:relative;white-space:inherit;overflow:inherit;text-overflow:inherit}:host([has-icon]:not([icon-end])) .ui5-button-text{margin-inline-start:var(--_ui5-v1-24-29_button_base_icon_margin)}:host([has-icon][icon-end]) .ui5-button-text{margin-inline-start:0}:host([disabled]){opacity:var(--sapContent_DisabledOpacity);pointer-events:unset;cursor:default}:host([has-icon]:not([icon-only])) .ui5-button-text{min-width:calc(var(--_ui5-v1-24-29_button_base_min_width) - var(--_ui5-v1-24-29_button_base_icon_margin) - 1rem)}:host([disabled]:active){pointer-events:none}:host([desktop]:not([active])) .ui5-button-root:focus-within:after,:host(:not([active])) .ui5-button-root:focus-visible:after,:host([desktop][active][design="Emphasized"]) .ui5-button-root:focus-within:after,:host([active][design="Emphasized"]) .ui5-button-root:focus-visible:after,:host([desktop][active]) .ui5-button-root:focus-within:before,:host([active]) .ui5-button-root:focus-visible:before{content:"";position:absolute;box-sizing:border-box;inset:.0625rem;border:var(--_ui5-v1-24-29_button_focused_border);border-radius:var(--_ui5-v1-24-29_button_focused_border_radius)}:host([desktop][active]) .ui5-button-root:focus-within:before,:host([active]) .ui5-button-root:focus-visible:before{border-color:var(--_ui5-v1-24-29_button_pressed_focused_border_color)}:host([design="Emphasized"][desktop]) .ui5-button-root:focus-within:after,:host([design="Emphasized"]) .ui5-button-root:focus-visible:after{border-color:var(--_ui5-v1-24-29_button_emphasized_focused_border_color)}:host([design="Emphasized"][desktop]) .ui5-button-root:focus-within:before,:host([design="Emphasized"]) .ui5-button-root:focus-visible:before{content:"";position:absolute;box-sizing:border-box;inset:.0625rem;border:var(--_ui5-v1-24-29_button_emphasized_focused_border_before);border-radius:var(--_ui5-v1-24-29_button_focused_border_radius)}.ui5-button-root::-moz-focus-inner{border:0}bdi{display:block;white-space:inherit;overflow:inherit;text-overflow:inherit}:host([ui5-button][active]:not([disabled]):not([non-interactive])){background-image:none;background-color:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([design="Positive"]){background-color:var(--sapButton_Accept_Background);border-color:var(--sapButton_Accept_BorderColor);color:var(--sapButton_Accept_TextColor)}:host([design="Positive"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host([design="Positive"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered){background-color:var(--sapButton_Accept_Hover_Background);border-color:var(--sapButton_Accept_Hover_BorderColor);color:var(--sapButton_Accept_Hover_TextColor)}:host([ui5-button][design="Positive"][active]:not([non-interactive])){background-color:var(--sapButton_Accept_Active_Background);border-color:var(--sapButton_Accept_Active_BorderColor);color:var(--sapButton_Accept_Active_TextColor)}:host([design="Negative"]){background-color:var(--sapButton_Reject_Background);border-color:var(--sapButton_Reject_BorderColor);color:var(--sapButton_Reject_TextColor)}:host([design="Negative"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host([design="Negative"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered){background-color:var(--sapButton_Reject_Hover_Background);border-color:var(--sapButton_Reject_Hover_BorderColor);color:var(--sapButton_Reject_Hover_TextColor)}:host([ui5-button][design="Negative"][active]:not([non-interactive])){background-color:var(--sapButton_Reject_Active_Background);border-color:var(--sapButton_Reject_Active_BorderColor);color:var(--sapButton_Reject_Active_TextColor)}:host([design="Attention"]){background-color:var(--sapButton_Attention_Background);border-color:var(--sapButton_Attention_BorderColor);color:var(--sapButton_Attention_TextColor)}:host([design="Attention"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host([design="Attention"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered){background-color:var(--sapButton_Attention_Hover_Background);border-color:var(--sapButton_Attention_Hover_BorderColor);color:var(--sapButton_Attention_Hover_TextColor)}:host([ui5-button][design="Attention"][active]:not([non-interactive])){background-color:var(--sapButton_Attention_Active_Background);border-color:var(--sapButton_Attention_Active_BorderColor);color:var(--sapButton_Attention_Active_TextColor)}:host([design="Emphasized"]){background-color:var(--sapButton_Emphasized_Background);border-color:var(--sapButton_Emphasized_BorderColor);border-width:var(--_ui5-v1-24-29_button_emphasized_border_width);color:var(--sapButton_Emphasized_TextColor);font-family:var(--sapFontBoldFamily )}:host([design="Emphasized"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host([design="Emphasized"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered){background-color:var(--sapButton_Emphasized_Hover_Background);border-color:var(--sapButton_Emphasized_Hover_BorderColor);border-width:var(--_ui5-v1-24-29_button_emphasized_border_width);color:var(--sapButton_Emphasized_Hover_TextColor)}:host([ui5-button][design="Empasized"][active]:not([non-interactive])){background-color:var(--sapButton_Emphasized_Active_Background);border-color:var(--sapButton_Emphasized_Active_BorderColor);color:var(--sapButton_Emphasized_Active_TextColor)}:host([design="Emphasized"][desktop]) .ui5-button-root:focus-within:after,:host([design="Emphasized"]) .ui5-button-root:focus-visible:after{border-color:var(--_ui5-v1-24-29_button_emphasized_focused_border_color);outline:none}:host([design="Emphasized"][desktop][active]:not([non-interactive])) .ui5-button-root:focus-within:after,:host([design="Emphasized"][active]:not([non-interactive])) .ui5-button-root:focus-visible:after{border-color:var(--_ui5-v1-24-29_button_emphasized_focused_active_border_color)}:host([design="Transparent"]){background-color:var(--sapButton_Lite_Background);color:var(--sapButton_Lite_TextColor);border-color:var(--sapButton_Lite_BorderColor)}:host([design="Transparent"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host([design="Transparent"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered){background-color:var(--sapButton_Lite_Hover_Background);border-color:var(--sapButton_Lite_Hover_BorderColor);color:var(--sapButton_Lite_Hover_TextColor)}:host([ui5-button][design="Transparent"][active]:not([non-interactive])){background-color:var(--sapButton_Lite_Active_Background);border-color:var(--sapButton_Lite_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([ui5-segmented-button-item][active][desktop]) .ui5-button-root:focus-within:after,:host([ui5-segmented-button-item][active]) .ui5-button-root:focus-visible:after,:host([pressed][desktop]) .ui5-button-root:focus-within:after,:host([pressed]) .ui5-button-root:focus-visible:after{border-color:var(--_ui5-v1-24-29_button_pressed_focused_border_color);outline:none}:host([ui5-segmented-button-item][desktop]:not(:last-child)) .ui5-button-root:focus-within:after,:host([ui5-segmented-button-item]:not(:last-child)) .ui5-button-root:focus-visible:after{border-top-right-radius:var(--_ui5-v1-24-29_button_focused_inner_border_radius);border-bottom-right-radius:var(--_ui5-v1-24-29_button_focused_inner_border_radius)}:host([ui5-segmented-button-item][desktop]:not(:first-child)) .ui5-button-root:focus-within:after,:host([ui5-segmented-button-item]:not(:first-child)) .ui5-button-root:focus-visible:after{border-top-left-radius:var(--_ui5-v1-24-29_button_focused_inner_border_radius);border-bottom-left-radius:var(--_ui5-v1-24-29_button_focused_inner_border_radius)}
`
};
var Button_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/Button.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Button_1;
var isGlobalHandlerAttached = false;
var activeButton = null;
var Button = Button_1 = class Button2 extends UI5Element_default {
  constructor() {
    super();
    this._deactivate = () => {
      if (activeButton) {
        activeButton._setActiveState(false);
      }
    };
    if (!isGlobalHandlerAttached) {
      document.addEventListener("mouseup", this._deactivate);
      isGlobalHandlerAttached = true;
    }
    const handleTouchStartEvent = (e) => {
      markEvent(e, "button");
      if (this.nonInteractive) {
        return;
      }
      this._setActiveState(true);
    };
    this._ontouchstart = {
      handleEvent: handleTouchStartEvent,
      passive: true
    };
  }
  onEnterDOM() {
    if (isDesktop()) {
      this.setAttribute("desktop", "");
    }
    registerUI5Element(this, this._updateAccessibleNameRefTexts.bind(this));
  }
  _updateAccessibleNameRefTexts() {
    this._accessibleNameRefTexts = getAllAccessibleNameRefTexts(this);
  }
  onExitDOM() {
    deregisterUI5Element(this);
  }
  onBeforeRendering() {
    return __async(this, null, function* () {
      const formSupport = getFeature("FormSupport");
      if (this.type !== ButtonType_default.Button && !formSupport) {
        console.warn(`In order for the "type" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`);
      }
      if (this.submits && !formSupport) {
        console.warn(`In order for the "submits" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`);
      }
      this.iconOnly = this.isIconOnly;
      this.hasIcon = !!this.icon;
      this.buttonTitle = this.tooltip || (yield this.getDefaultTooltip());
    });
  }
  _onclick(e) {
    if (this.nonInteractive) {
      return;
    }
    markEvent(e, "button");
    const formSupport = getFeature("FormSupport");
    if (formSupport && this._isSubmit) {
      formSupport.triggerFormSubmit(this);
    }
    if (formSupport && this._isReset) {
      formSupport.triggerFormReset(this);
    }
    if (isSafari()) {
      this.getDomRef()?.focus();
    }
  }
  _onmousedown(e) {
    if (this.nonInteractive) {
      return;
    }
    markEvent(e, "button");
    this._setActiveState(true);
    activeButton = this;
  }
  _ontouchend(e) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (this.active) {
      this._setActiveState(false);
    }
    if (activeButton) {
      activeButton._setActiveState(false);
    }
  }
  _onmouseup(e) {
    markEvent(e, "button");
  }
  _onkeydown(e) {
    this._cancelAction = isShift(e) || isEscape(e);
    markEvent(e, "button");
    if (isSpace(e) || isEnter(e)) {
      this._setActiveState(true);
    } else if (this._cancelAction) {
      this._setActiveState(false);
    }
  }
  _onkeyup(e) {
    if (this._cancelAction) {
      e.preventDefault();
    }
    if (isSpace(e) || isEnter(e)) {
      if (this.active) {
        this._setActiveState(false);
      }
    }
  }
  _onfocusout() {
    if (this.nonInteractive) {
      return;
    }
    if (this.active) {
      this._setActiveState(false);
    }
  }
  _onfocusin(e) {
    if (this.nonInteractive) {
      return;
    }
    markEvent(e, "button");
  }
  _setActiveState(active) {
    const eventPrevented = !this.fireEvent("_active-state-change", null, true);
    if (eventPrevented) {
      return;
    }
    this.active = active;
  }
  get _hasPopup() {
    return this.accessibilityAttributes.hasPopup?.toLowerCase();
  }
  get hasButtonType() {
    return this.design !== ButtonDesign_default.Default && this.design !== ButtonDesign_default.Transparent;
  }
  get iconRole() {
    if (!this.icon) {
      return "";
    }
    return "presentation";
  }
  get isIconOnly() {
    return !willShowContent_default(this.text);
  }
  static typeTextMappings() {
    return {
      "Positive": BUTTON_ARIA_TYPE_ACCEPT,
      "Negative": BUTTON_ARIA_TYPE_REJECT,
      "Emphasized": BUTTON_ARIA_TYPE_EMPHASIZED
    };
  }
  getDefaultTooltip() {
    if (!getEnableDefaultTooltips()) {
      return;
    }
    return getIconAccessibleName(this.icon);
  }
  get buttonTypeText() {
    return Button_1.i18nBundle.getText(Button_1.typeTextMappings()[this.design]);
  }
  get buttonAccessibleRole() {
    return this.accessibleRole.toLowerCase();
  }
  get tabIndexValue() {
    if (this.disabled) {
      return;
    }
    const tabindex = this.getAttribute("tabindex");
    if (tabindex) {
      return tabindex;
    }
    return this.nonInteractive ? "-1" : this.forcedTabIndex;
  }
  get showIconTooltip() {
    return getEnableDefaultTooltips() && this.iconOnly && !this.tooltip;
  }
  get ariaLabelText() {
    return this._accessibleNameRefTexts || this.accessibleName || void 0;
  }
  get ariaDescribedbyText() {
    return this.hasButtonType ? "ui5-button-hiddenText-type" : void 0;
  }
  get _isSubmit() {
    return this.type === ButtonType_default.Submit || this.submits;
  }
  get _isReset() {
    return this.type === ButtonType_default.Reset;
  }
  static onDefine() {
    return __async(this, null, function* () {
      Button_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
};
__decorate([property_default({
  type: ButtonDesign_default,
  defaultValue: ButtonDesign_default.Default
})], Button.prototype, "design", void 0);
__decorate([property_default({
  type: Boolean
})], Button.prototype, "disabled", void 0);
__decorate([property_default()], Button.prototype, "icon", void 0);
__decorate([property_default({
  type: Boolean
})], Button.prototype, "iconEnd", void 0);
__decorate([property_default({
  type: Boolean
})], Button.prototype, "submits", void 0);
__decorate([property_default()], Button.prototype, "tooltip", void 0);
__decorate([property_default({
  defaultValue: void 0
})], Button.prototype, "accessibleName", void 0);
__decorate([property_default({
  defaultValue: ""
})], Button.prototype, "accessibleNameRef", void 0);
__decorate([property_default({
  type: Object
})], Button.prototype, "accessibilityAttributes", void 0);
__decorate([property_default({
  type: ButtonType_default,
  defaultValue: ButtonType_default.Button
})], Button.prototype, "type", void 0);
__decorate([property_default({
  type: ButtonAccessibleRole_default,
  defaultValue: ButtonAccessibleRole_default.Button
})], Button.prototype, "accessibleRole", void 0);
__decorate([property_default({
  type: Boolean
})], Button.prototype, "active", void 0);
__decorate([property_default({
  type: Boolean
})], Button.prototype, "iconOnly", void 0);
__decorate([property_default({
  type: Boolean
})], Button.prototype, "hasIcon", void 0);
__decorate([property_default({
  type: Boolean
})], Button.prototype, "nonInteractive", void 0);
__decorate([property_default({
  noAttribute: true
})], Button.prototype, "buttonTitle", void 0);
__decorate([property_default({
  type: Object
})], Button.prototype, "_iconSettings", void 0);
__decorate([property_default({
  defaultValue: "0",
  noAttribute: true
})], Button.prototype, "forcedTabIndex", void 0);
__decorate([property_default({
  type: Boolean
})], Button.prototype, "_isTouch", void 0);
__decorate([property_default({
  type: Boolean,
  noAttribute: true
})], Button.prototype, "_cancelAction", void 0);
__decorate([property_default({
  noAttribute: true
})], Button.prototype, "_accessibleNameRefTexts", void 0);
__decorate([slot_default({
  type: Node,
  "default": true
})], Button.prototype, "text", void 0);
Button = Button_1 = __decorate([
  customElement_default({
    tag: "ui5-button",
    languageAware: true,
    renderer: LitRenderer_default,
    template: ButtonTemplate_lit_default,
    styles: Button_css_default,
    dependencies: [Icon_default]
  }),
  event_default("click"),
  event_default("_active-state-change")
], Button);
Button.define();
var Button_default = Button;

export {
  getEventMark,
  HasPopup_default,
  Button_default
};
//# sourceMappingURL=chunk-FDVN5BN6.js.map
