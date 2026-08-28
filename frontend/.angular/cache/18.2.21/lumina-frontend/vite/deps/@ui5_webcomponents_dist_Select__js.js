import {
  List_default,
  ResponsivePopoverCommon_css_default,
  ResponsivePopover_default,
  StandardListItem_default
} from "./chunk-YDGTSUXY.js";
import "./chunk-KLO5MOPM.js";
import {
  DOMReference_default,
  Popover_default,
  ValueStateMessage_css_default
} from "./chunk-CC5QWB52.js";
import "./chunk-6IE2SFHB.js";
import "./chunk-UQ5I4VPN.js";
import {
  Button_default
} from "./chunk-PIZGL5NL.js";
import "./chunk-FVP26IXQ.js";
import "./chunk-HFFNPAU7.js";
import "./chunk-OQHTKXE6.js";
import "./chunk-IQXNQNRQ.js";
import {
  ValueState_default
} from "./chunk-3GUSYCCY.js";
import {
  getEffectiveAriaLabelText
} from "./chunk-BY3NBTSA.js";
import {
  Icon_default,
  event_default
} from "./chunk-U3UACDRZ.js";
import "./chunk-XDEYVX2X.js";
import {
  Integer_default
} from "./chunk-YJ42QTVF.js";
import "./chunk-KZFZS4LL.js";
import {
  Label_default
} from "./chunk-FR3SEBRA.js";
import "./chunk-GL7BVVNJ.js";
import {
  INPUT_SUGGESTIONS_TITLE,
  LIST_ITEM_POSITION,
  SELECT_ROLE_DESCRIPTION,
  VALUE_STATE_ERROR,
  VALUE_STATE_INFORMATION,
  VALUE_STATE_SUCCESS,
  VALUE_STATE_TYPE_ERROR,
  VALUE_STATE_TYPE_INFORMATION,
  VALUE_STATE_TYPE_SUCCESS,
  VALUE_STATE_TYPE_WARNING,
  VALUE_STATE_WARNING
} from "./chunk-MKUK4J7G.js";
import {
  LitRenderer_default,
  classMap,
  effectiveHtml,
  ifDefined,
  isDown,
  isEnd,
  isEnter,
  isEscape,
  isHome,
  isShow,
  isSpace,
  isTabNext,
  isTabPrevious,
  isUp,
  parameters_bundle_css_default,
  parameters_bundle_css_default2,
  repeat,
  scopeTag,
  styleMap
} from "./chunk-BK2PCNJ4.js";
import {
  Option_default
} from "./chunk-U2HKVQIR.js";
import {
  slot_default
} from "./chunk-SRQLSZPJ.js";
import {
  UI5Element_default,
  customElement_default,
  getScopedVarName,
  property_default
} from "./chunk-2MNVO72Z.js";
import {
  registerIcon
} from "./chunk-3YXAI4SY.js";
import {
  getI18nBundle
} from "./chunk-CQWP6VSU.js";
import {
  attachBoot,
  getFeature,
  getSingletonElementInstance_default,
  isLegacyThemeFamily,
  isPhone,
  registerThemePropertiesLoader,
  renderDeferred
} from "./chunk-JASJJZVS.js";
import "./chunk-XQ36JZLT.js";
import {
  __async
} from "./chunk-5K356HEJ.js";

// node_modules/@ui5/webcomponents-base/dist/connectToComponent.js
var MISSING_ELEMENT_POLL_TIMEOUT = 500;
var connections = /* @__PURE__ */ new Map();
var intervals = /* @__PURE__ */ new Map();
var connectToComponent = (options) => {
  const host = options.host;
  const propName = options.propName;
  const friend = host[propName];
  let connectedTo;
  if (friend === void 0 || friend === "") {
    connectedTo = void 0;
  } else if (friend instanceof HTMLElement) {
    connectedTo = friend;
  } else {
    const rootNode = host.getRootNode();
    connectedTo = rootNode.getElementById && rootNode.getElementById(friend) || void 0;
  }
  const key = `${host._id}-${propName}`;
  const prevConnectedTo = connections.get(key);
  if (!connectedTo) {
    if (prevConnectedTo) {
      options.onDisconnect && options.onDisconnect(prevConnectedTo);
      connections.delete(key);
    }
    if (typeof friend === "string" && friend && !intervals.has(key)) {
      const interval = setInterval(() => {
        const rootNode = host.getRootNode();
        const found = rootNode.getElementById && rootNode.getElementById(friend);
        if (found) {
          clearInterval(intervals.get(key));
          intervals.delete(key);
          renderDeferred(host);
        }
      }, MISSING_ELEMENT_POLL_TIMEOUT);
      intervals.set(key, interval);
    }
    return;
  }
  if (intervals.has(key)) {
    clearInterval(intervals.get(key));
    intervals.delete(key);
  }
  if (prevConnectedTo !== connectedTo) {
    if (prevConnectedTo) {
      options.onDisconnect && options.onDisconnect(prevConnectedTo);
    }
    options.onConnect && options.onConnect(connectedTo);
    connections.set(key, connectedTo);
  }
  return connections.get(key);
};
var connectToComponent_default = connectToComponent;

// node_modules/@ui5/webcomponents-base/dist/types/InvisibleMessageMode.js
var InvisibleMessageMode = {
  /**
   * Indicates that updates to the region should be presented at the next graceful opportunity,
   * such as at the end of reading the current sentence, or when the user pauses typing.
   * @public
   */
  Polite: "Polite",
  /**
   * Indicates that updates to the region have the highest priority and should be presented to the user immediately.
   * @public
   */
  Assertive: "Assertive"
};
var InvisibleMessageMode_default = InvisibleMessageMode;

// node_modules/@ui5/webcomponents-base/dist/util/InvisibleMessage.js
var politeSpan;
var assertiveSpan;
var setOutOfViewportStyles = (el) => {
  el.style.position = "absolute";
  el.style.clip = "rect(1px,1px,1px,1px)";
  el.style.userSelect = "none";
  el.style.left = "-1000px";
  el.style.top = "-1000px";
  el.style.pointerEvents = "none";
};
attachBoot(() => {
  if (politeSpan && assertiveSpan) {
    return;
  }
  politeSpan = document.createElement("span");
  assertiveSpan = document.createElement("span");
  politeSpan.classList.add("ui5-invisiblemessage-polite");
  assertiveSpan.classList.add("ui5-invisiblemessage-assertive");
  politeSpan.setAttribute("aria-live", "polite");
  assertiveSpan.setAttribute("aria-live", "assertive");
  politeSpan.setAttribute("role", "alert");
  assertiveSpan.setAttribute("role", "alert");
  setOutOfViewportStyles(politeSpan);
  setOutOfViewportStyles(assertiveSpan);
  getSingletonElementInstance_default("ui5-static-area").appendChild(politeSpan);
  getSingletonElementInstance_default("ui5-static-area").appendChild(assertiveSpan);
});
var announce = (message, mode) => {
  const span = mode === InvisibleMessageMode_default.Assertive ? assertiveSpan : politeSpan;
  span.textContent = "";
  span.textContent = message;
  if (mode !== InvisibleMessageMode_default.Assertive && mode !== InvisibleMessageMode_default.Polite) {
    console.warn(`You have entered an invalid mode. Valid values are: "Polite" and "Assertive". The framework will automatically set the mode to "Polite".`);
  }
  setTimeout(() => {
    if (span.textContent === message) {
      span.textContent = "";
    }
  }, 3e3);
};
var InvisibleMessage_default = announce;

// node_modules/@ui5/webcomponents-icons/dist/v4/slim-arrow-down.js
var name = "slim-arrow-down";
var pathData = "M420.5 187q11-12 23 0 5 5 5 11t-5 11l-165 165q-10 9-23 9t-22-9l-166-165q-5-5-5-11.5t5-11.5 11.5-5 11.5 5l160 160q5 6 11 0z";
var ltr = false;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, {
  pathData,
  ltr,
  collection,
  packageName
});

// node_modules/@ui5/webcomponents-icons/dist/v5/slim-arrow-down.js
var name2 = "slim-arrow-down";
var pathData2 = "M96 186q0-11 7.5-18.5T122 160q10 0 18 8l116 121 116-121q8-8 18-8 11 0 18.5 7.5T416 186q0 10-7 17L275 344q-8 8-19 8-12 0-18-8L103 203q-7-7-7-17z";
var ltr2 = false;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, {
  pathData: pathData2,
  ltr: ltr2,
  collection: collection2,
  packageName: packageName2
});

// node_modules/@ui5/webcomponents-icons/dist/slim-arrow-down.js
var pathData3 = isLegacyThemeFamily() ? pathData : pathData2;

// node_modules/@ui5/webcomponents/dist/generated/templates/SelectTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-select-root ui5-input-focusable-element" id="${ifDefined(this._id)}-select" @click="${this._onclick}">${this.selectedOptionIcon ? block1.call(this, context, tags, suffix) : void 0}<div class="ui5-select-label-root" data-sap-focus-ref tabindex="${ifDefined(this._effectiveTabIndex)}" role="combobox" aria-haspopup="listbox" aria-label="${ifDefined(this.ariaLabelText)}" aria-describedby="${ifDefined(this.valueStateTextId)}" aria-disabled="${ifDefined(this.isDisabled)}" aria-required="${ifDefined(this.required)}" aria-readonly="${ifDefined(this.readonly)}" aria-expanded="${ifDefined(this._isPickerOpen)}" aria-roledescription="${ifDefined(this._ariaRoleDescription)}" @keydown="${this._onkeydown}" @keypress="${this._handleKeyboardNavigation}" @keyup="${this._onkeyup}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}">${this.hasCustomLabel ? block2.call(this, context, tags, suffix) : block3.call(this, context, tags, suffix)}</div>${!this.readonly ? block4.call(this, context, tags, suffix) : void 0}${this.hasValueState ? block5.call(this, context, tags, suffix) : void 0}<slot name="formSupport"></slot></div>`;
}
function block1(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} aria-hidden="true" class="ui5-select-option-icon" name="${ifDefined(this.selectedOptionIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon aria-hidden="true" class="ui5-select-option-icon" name="${ifDefined(this.selectedOptionIcon)}"></ui5-icon>`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`<slot name="label"></slot>`;
}
function block3(context, tags, suffix) {
  return effectiveHtml`${ifDefined(this._text)}`;
}
function block4(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} name="slim-arrow-down" input-icon ?pressed="${this._iconPressed}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon name="slim-arrow-down" input-icon ?pressed="${this._iconPressed}"></ui5-icon>`;
}
function block5(context, tags, suffix) {
  return effectiveHtml`<span id="${ifDefined(this._id)}-valueStateDesc" class="ui5-hidden-text">${ifDefined(this.valueStateText)}</span>`;
}
var SelectTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/templates/SelectPopoverTemplate.lit.js
function block02(context, tags, suffix) {
  return effectiveHtml`${this.options ? block12.call(this, context, tags, suffix) : void 0}${this.shouldOpenValueStateMessagePopover ? block13.call(this, context, tags, suffix) : void 0}`;
}
function block12(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-responsive-popover", tags, suffix)} hide-arrow _disable-initial-focus placement-type="Bottom" class="ui5-select-popover ${classMap(this.classes.popover)}" horizontal-align="Left" @ui5-after-open="${ifDefined(this._afterOpen)}" @ui5-before-open="${ifDefined(this._beforeOpen)}" @ui5-after-close="${ifDefined(this._afterClose)}" @keydown="${this._onkeydown}" style=${styleMap(this.styles.responsivePopover)}>${this._isPhone ? block22.call(this, context, tags, suffix) : void 0}${!this._isPhone ? block7.call(this, context, tags, suffix) : void 0}<${scopeTag("ui5-list", tags, suffix)} mode="SingleSelectAuto" separators="None" @mousedown="${this._itemMousedown}" @ui5-item-click="${ifDefined(this._handleItemPress)}">${repeat(this._syncedOptions, (item, index) => item._id || index, (item, index) => block122.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-list", tags, suffix)}></${scopeTag("ui5-responsive-popover", tags, suffix)}>` : effectiveHtml`<ui5-responsive-popover hide-arrow _disable-initial-focus placement-type="Bottom" class="ui5-select-popover ${classMap(this.classes.popover)}" horizontal-align="Left" @ui5-after-open="${ifDefined(this._afterOpen)}" @ui5-before-open="${ifDefined(this._beforeOpen)}" @ui5-after-close="${ifDefined(this._afterClose)}" @keydown="${this._onkeydown}" style=${styleMap(this.styles.responsivePopover)}>${this._isPhone ? block22.call(this, context, tags, suffix) : void 0}${!this._isPhone ? block7.call(this, context, tags, suffix) : void 0}<ui5-list mode="SingleSelectAuto" separators="None" @mousedown="${this._itemMousedown}" @ui5-item-click="${ifDefined(this._handleItemPress)}">${repeat(this._syncedOptions, (item, index) => item._id || index, (item, index) => block122.call(this, context, tags, suffix, item, index))}</ui5-list></ui5-responsive-popover>`;
}
function block22(context, tags, suffix) {
  return suffix ? effectiveHtml`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><${scopeTag("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._toggleRespPopover}"></${scopeTag("ui5-button", tags, suffix)}></div>${this.hasValueStateText ? block32.call(this, context, tags, suffix) : void 0}</div>` : effectiveHtml`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._toggleRespPopover}"></ui5-button></div>${this.hasValueStateText ? block32.call(this, context, tags, suffix) : void 0}</div>`;
}
function block32(context, tags, suffix) {
  return effectiveHtml`<div class="${classMap(this.classes.popoverValueState)} row ui5-select-value-state-dialog-header">${this.shouldDisplayDefaultValueStateMessage ? block42.call(this, context, tags, suffix) : block52.call(this, context, tags, suffix)}</div>`;
}
function block42(context, tags, suffix) {
  return effectiveHtml`${ifDefined(this.valueStateText)}`;
}
function block52(context, tags, suffix) {
  return effectiveHtml`${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block6.call(this, context, tags, suffix, item, index))}`;
}
function block6(context, tags, suffix, item, index) {
  return effectiveHtml`${ifDefined(item)}`;
}
function block7(context, tags, suffix) {
  return effectiveHtml`${this.hasValueStateText ? block8.call(this, context, tags, suffix) : void 0}`;
}
function block8(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.responsivePopoverHeader)}><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.shouldDisplayDefaultValueStateMessage ? block9.call(this, context, tags, suffix) : block10.call(this, context, tags, suffix)}</div>` : effectiveHtml`<div class="${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.responsivePopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage ? block9.call(this, context, tags, suffix) : block10.call(this, context, tags, suffix)}</div>`;
}
function block9(context, tags, suffix) {
  return effectiveHtml`${ifDefined(this.valueStateText)}`;
}
function block10(context, tags, suffix) {
  return effectiveHtml`${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block11.call(this, context, tags, suffix, item, index))}`;
}
function block11(context, tags, suffix, item, index) {
  return effectiveHtml`${ifDefined(item)}`;
}
function block122(context, tags, suffix, item, index) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-li", tags, suffix)} id="${ifDefined(item.id)}-li" icon="${ifDefined(item.icon)}" ?selected="${item.selected}" ?focused="${item.focused}" title="${ifDefined(item.title)}" additional-text="${ifDefined(item.additionalText)}" ?aria-selected="${item.selected}" data-ui5-stable="${ifDefined(item.stableDomRef)}">${ifDefined(item.textContent)}</${scopeTag("ui5-li", tags, suffix)}>` : effectiveHtml`<ui5-li id="${ifDefined(item.id)}-li" icon="${ifDefined(item.icon)}" ?selected="${item.selected}" ?focused="${item.focused}" title="${ifDefined(item.title)}" additional-text="${ifDefined(item.additionalText)}" ?aria-selected="${item.selected}" data-ui5-stable="${ifDefined(item.stableDomRef)}">${ifDefined(item.textContent)}</ui5-li>`;
}
function block13(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-popover", tags, suffix)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.shouldDisplayDefaultValueStateMessage ? block14.call(this, context, tags, suffix) : block15.call(this, context, tags, suffix)}</div></${scopeTag("ui5-popover", tags, suffix)}>` : effectiveHtml`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage ? block14.call(this, context, tags, suffix) : block15.call(this, context, tags, suffix)}</div></ui5-popover>`;
}
function block14(context, tags, suffix) {
  return effectiveHtml`${ifDefined(this.valueStateText)}`;
}
function block15(context, tags, suffix) {
  return effectiveHtml`${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block16.call(this, context, tags, suffix, item, index))}`;
}
function block16(context, tags, suffix, item, index) {
  return effectiveHtml`${ifDefined(item)}`;
}
var SelectPopoverTemplate_lit_default = block02;

// node_modules/@ui5/webcomponents/dist/generated/themes/Select.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/Select.css.ts",
  content: `:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}[input-icon]{color:var(--_ui5-v1-24-29_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v1-24-29_input_icon_padding);border-inline-start:var(--_ui5-v1-24-29_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v1-24-29_input_icon_border_radius)}[input-icon][pressed]{background:var(--_ui5-v1-24-29_input_icon_pressed_bg);box-shadow:var(--_ui5-v1-24-29_input_icon_box_shadow);border-inline-start:var(--_ui5-v1-24-29_select_hover_icon_left_border);color:var(--_ui5-v1-24-29_input_icon_pressed_color)}[input-icon]:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v1-24-29_input_icon_box_shadow);border-inline-start:var(--_ui5-v1-24-29_select_hover_icon_left_border);color:var(--_ui5-v1-24-29_input_icon_pressed_color)}[input-icon]:not([pressed]):not(:active):hover{background:var(--_ui5-v1-24-29_input_icon_hover_bg);box-shadow:var(--_ui5-v1-24-29_input_icon_box_shadow)}[input-icon]:hover{border-inline-start:var(--_ui5-v1-24-29_select_hover_icon_left_border);box-shadow:var(--_ui5-v1-24-29_input_icon_box_shadow)}:host(:not([hidden])){display:inline-block}:host{width:var(--_ui5-v1-24-29_input_width);min-width:calc(var(--_ui5-v1-24-29_input_min_width) + (var(--_ui5-v1-24-29-input-icons-count)*var(--_ui5-v1-24-29_input_icon_width)));margin:var(--_ui5-v1-24-29_input_margin_top_bottom) 0;height:var(--_ui5-v1-24-29_input_height);color:var(--sapField_TextColor);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);font-style:normal;border:var(--_ui5-v1-24-29-input-border);border-radius:var(--_ui5-v1-24-29_input_border_radius);box-sizing:border-box;text-align:start;transition:var(--_ui5-v1-24-29_input_transition);background:var(--sapField_BackgroundStyle);background-color:var(--_ui5-v1-24-29_input_background_color)}:host(:not([readonly])),:host([readonly][disabled]){box-shadow:var(--sapField_Shadow)}:host([focused]:not([opened])){border-color:var(--_ui5-v1-24-29_input_focused_border_color);background-color:var(--sapField_Focus_Background)}.ui5-input-focusable-element{position:relative}:host([focused]:not([opened])) .ui5-input-focusable-element:after{content:var(--ui5-v1-24-29_input_focus_pseudo_element_content);position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5-v1-24-29_input_focus_outline_color);border-radius:var(--_ui5-v1-24-29_input_focus_border_radius);top:var(--_ui5-v1-24-29_input_focus_offset);bottom:var(--_ui5-v1-24-29_input_focus_offset);left:var(--_ui5-v1-24-29_input_focus_offset);right:var(--_ui5-v1-24-29_input_focus_offset)}:host([focused][readonly]:not([opened])) .ui5-input-focusable-element:after{top:var(--_ui5-v1-24-29_input_readonly_focus_offset);bottom:var(--_ui5-v1-24-29_input_readonly_focus_offset);left:var(--_ui5-v1-24-29_input_readonly_focus_offset);right:var(--_ui5-v1-24-29_input_readonly_focus_offset);border-radius:var(--_ui5-v1-24-29_input_readonly_focus_border_radius)}.ui5-input-root:before{content:"";position:absolute;width:calc(100% - 2px);left:1px;bottom:-2px;border-bottom-left-radius:8px;border-bottom-right-radius:8px;height:var(--_ui5-v1-24-29_input_bottom_border_height);transition:var(--_ui5-v1-24-29_input_transition);background-color:var(--_ui5-v1-24-29_input_bottom_border_color)}.ui5-input-root{width:100%;height:100%;position:relative;background:transparent;display:inline-block;outline:none;box-sizing:border-box;color:inherit;transition:border-color .2s ease-in-out;border-radius:var(--_ui5-v1-24-29_input_border_radius);overflow:hidden}:host([disabled]){opacity:var(--_ui5-v1-24-29_input_disabled_opacity);cursor:default;pointer-events:none;background-color:var(--_ui5-v1-24-29-input_disabled_background);border-color:var(--_ui5-v1-24-29_input_disabled_border_color)}:host([disabled]) .ui5-input-root:before,:host([readonly]) .ui5-input-root:before{content:none}[inner-input]{background:transparent;color:inherit;border:none;font-style:inherit;-webkit-appearance:none;-moz-appearance:textfield;padding:var(--_ui5-v1-24-29_input_inner_padding);box-sizing:border-box;min-width:var(--_ui5-v1-24-29_input_min_width);width:100%;text-overflow:ellipsis;flex:1;outline:none;font-size:inherit;font-family:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;text-align:inherit}[inner-input][inner-input-with-icon]{padding:var(--_ui5-v1-24-29_input_inner_padding_with_icon)}.ui5-input-value-state-icon{height:100%;display:var(--_ui5-v1-24-29-input-value-state-icon-display);align-items:center}.ui5-input-value-state-icon>svg{margin-right:8px}[inner-input]::selection{background:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}:host([disabled]) [inner-input]::-webkit-input-placeholder{visibility:hidden}:host([readonly]) [inner-input]::-webkit-input-placeholder{visibility:hidden}:host([disabled]) [inner-input]::-moz-placeholder{visibility:hidden}:host([readonly]) [inner-input]::-moz-placeholder{visibility:hidden}[inner-input]::-webkit-input-placeholder{font-weight:400;font-style:var(--_ui5-v1-24-29_input_placeholder_style);color:var(--_ui5-v1-24-29_input_placeholder_color);padding-right:.125rem}[inner-input]::-moz-placeholder{font-weight:400;font-style:var(--_ui5-v1-24-29_input_placeholder_style);color:var(--_ui5-v1-24-29_input_placeholder_color);padding-right:.125rem}:host([value-state="Error"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v1-24-29-input_error_placeholder_color);font-weight:var(--_ui5-v1-24-29_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Error"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v1-24-29-input_error_placeholder_color);font-weight:var(--_ui5-v1-24-29_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Warning"]) [inner-input]::-webkit-input-placeholder{font-weight:var(--_ui5-v1-24-29_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Warning"]) [inner-input]::-moz-placeholder{font-weight:var(--_ui5-v1-24-29_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Success"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v1-24-29_input_placeholder_color)}:host([value-state="Success"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v1-24-29_input_placeholder_color)}:host([value-state="Information"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v1-24-29_input_placeholder_color)}:host([value-state="Information"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v1-24-29_input_placeholder_color)}.ui5-input-content{height:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:flex-end;overflow:hidden;outline:none;background:transparent;color:inherit;border-radius:var(--_ui5-v1-24-29_input_border_radius)}:host([readonly]:not([disabled])){border-color:var(--_ui5-v1-24-29_input_readonly_border_color);background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--_ui5-v1-24-29_input_readonly_background)}:host([value-state="None"]:not([readonly]):hover),:host(:not([value-state]):not([readonly]):hover){border:var(--_ui5-v1-24-29_input_hover_border);border-color:var(--_ui5-v1-24-29_input_focused_border_color);box-shadow:var(--sapField_Hover_Shadow);background:var(--sapField_Hover_BackgroundStyle);background-color:var(--sapField_Hover_Background)}:host(:not([value-state]):not([readonly])[focused]:not([opened]):hover),:host([value-state="None"]:not([readonly])[focused]:not([opened]):hover){box-shadow:none}:host([focused]):not([opened]) .ui5-input-root:before{content:none}:host(:not([readonly]):not([disabled])[value-state]:not([value-state="None"])){border-width:var(--_ui5-v1-24-29_input_state_border_width)}:host([value-state="Error"]) [inner-input],:host([value-state="Warning"]) [inner-input]{font-style:var(--_ui5-v1-24-29_input_error_warning_font_style);text-indent:var(--_ui5-v1-24-29_input_error_warning_text_indent)}:host([value-state="Error"]) [inner-input]{font-weight:var(--_ui5-v1-24-29_input_error_font_weight)}:host([value-state="Warning"]) [inner-input]{font-weight:var(--_ui5-v1-24-29_input_warning_font_weight)}:host([value-state="Error"]:not([readonly]):not([disabled])){background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--_ui5-v1-24-29_input_value_state_error_border_color);box-shadow:var(--sapField_InvalidShadow)}:host([value-state="Error"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v1-24-29_input_focused_value_state_error_background);border-color:var(--_ui5-v1-24-29_input_focused_value_state_error_border_color)}:host([value-state="Error"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v1-24-29_input_focused_value_state_error_focus_outline_color)}:host([value-state="Error"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v1-24-29-input-value-state-error-border-botom-color)}:host([value-state="Error"]:not([readonly]):not([focused]):hover),:host([value-state="Error"]:not([readonly])[focused][opened]:hover){background-color:var(--_ui5-v1-24-29_input_value_state_error_hover_background);box-shadow:var(--sapField_Hover_InvalidShadow)}:host([value-state="Error"]:not([readonly]):not([disabled])),:host([value-state="Warning"]:not([readonly]):not([disabled])),:host([value-state="Information"]:not([readonly]):not([disabled])){border-style:var(--_ui5-v1-24-29_input_error_warning_border_style)}:host([value-state="Warning"]:not([readonly]):not([disabled])){background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--_ui5-v1-24-29_input_value_state_warning_border_color);box-shadow:var(--sapField_WarningShadow)}:host([value-state="Warning"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v1-24-29_input_focused_value_state_warning_background);border-color:var(--_ui5-v1-24-29_input_focused_value_state_warning_border_color)}:host([value-state="Warning"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v1-24-29_input_focused_value_state_warning_focus_outline_color)}:host([value-state="Warning"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v1-24-29_input_value_state_warning_border_botom_color)}:host([value-state="Warning"]:not([readonly]):not([focused]):hover),:host([value-state="Warning"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_WarningShadow)}:host([value-state="Success"]:not([readonly]):not([disabled])){background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--_ui5-v1-24-29_input_value_state_success_border_color);border-width:var(--_ui5-v1-24-29_input_value_state_success_border_width);box-shadow:var(--sapField_SuccessShadow)}:host([value-state="Success"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v1-24-29_input_focused_value_state_success_background);border-color:var(--_ui5-v1-24-29_input_focused_value_state_success_border_color)}:host([value-state="Success"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v1-24-29_input_focused_value_state_success_focus_outline_color)}:host([value-state="Success"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v1-24-29_input_value_state_success_border_botom_color)}:host([value-state="Success"]:not([readonly]):not([focused]):hover),:host([value-state="Success"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_SuccessShadow)}:host([value-state="Information"]:not([readonly]):not([disabled])){background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--_ui5-v1-24-29_input_value_state_information_border_color);border-width:var(--_ui5-v1-24-29_input_information_border_width);box-shadow:var(--sapField_InformationShadow)}:host([value-state="Information"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v1-24-29_input_focused_value_state_information_background);border-color:var(--_ui5-v1-24-29_input_focused_value_state_information_border_color)}:host([value-state="Information"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v1-24-29_input_value_success_information_border_botom_color)}:host([value-state="Information"]:not([readonly]):not([focused]):hover),:host([value-state="Information"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_InformationShadow)}.ui5-input-icon-root{min-width:var(--_ui5-v1-24-29_input_icon_min_width);height:100%;display:flex;justify-content:center;align-items:center}::slotted([ui5-icon][slot="icon"]){align-self:start;padding:var(--_ui5-v1-24-29_input_custom_icon_padding);box-sizing:content-box!important}:host([value-state="Error"]) [input-icon],:host([value-state="Warning"]) [input-icon]{padding:var(--_ui5-v1-24-29_input_error_warning_icon_padding)}:host([value-state="Error"][focused]) [input-icon],:host([value-state="Warning"][focused]) [input-icon]{padding:var(--_ui5-v1-24-29_input_error_warning_focused_icon_padding)}:host([value-state="Information"]) [input-icon]{padding:var(--_ui5-v1-24-29_input_information_icon_padding)}:host([value-state="Information"][focused]) [input-icon]{padding:var(--_ui5-v1-24-29_input_information_focused_icon_padding)}:host([value-state="Error"]) ::slotted([input-icon][ui5-icon]),:host([value-state="Error"]) ::slotted([ui5-icon][slot="icon"]),:host([value-state="Warning"]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v1-24-29_input_error_warning_custom_icon_padding)}:host([value-state="Error"][focused]) ::slotted([input-icon][ui5-icon]),:host([value-state="Error"][focused]) ::slotted([ui5-icon][slot="icon"]),:host([value-state="Warning"][focused]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v1-24-29_input_error_warning_custom_focused_icon_padding)}:host([value-state="Information"]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v1-24-29_input_information_custom_icon_padding)}:host([value-state="Information"][focused]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v1-24-29_input_information_custom_focused_icon_padding)}:host([value-state="Error"]) [input-icon]:active,:host([value-state="Error"]) [input-icon][pressed]{box-shadow:var(--_ui5-v1-24-29_input_error_icon_box_shadow);color:var(--_ui5-v1-24-29_input_icon_error_pressed_color)}:host([value-state="Error"]) [input-icon]:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v1-24-29_input_error_icon_box_shadow)}:host([value-state="Warning"]) [input-icon]:active,:host([value-state="Warning"]) [input-icon][pressed]{box-shadow:var(--_ui5-v1-24-29_input_warning_icon_box_shadow);color:var(--_ui5-v1-24-29_input_icon_warning_pressed_color)}:host([value-state="Warning"]) [input-icon]:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v1-24-29_input_warning_icon_box_shadow)}:host([value-state="Information"]) [input-icon]:active,:host([value-state="Information"]) [input-icon][pressed]{box-shadow:var(--_ui5-v1-24-29_input_information_icon_box_shadow);color:var(--_ui5-v1-24-29_input_icon_information_pressed_color)}:host([value-state="Information"]) [input-icon]:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v1-24-29_input_information_icon_box_shadow)}:host([value-state="Success"]) [input-icon]:active,:host([value-state="Success"]) [input-icon][pressed]{box-shadow:var(--_ui5-v1-24-29_input_success_icon_box_shadow);color:var(--_ui5-v1-24-29_input_icon_success_pressed_color)}:host([value-state="Success"]) [input-icon]:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v1-24-29_input_success_icon_box_shadow)}.ui5-input-clear-icon-wrapper{height:var(--_ui5-v1-24-29_input_icon_wrapper_height);padding:0;width:var(--_ui5-v1-24-29_input_icon_width);min-width:var(--_ui5-v1-24-29_input_icon_width);display:flex;justify-content:center;align-items:center;box-sizing:border-box}:host([value-state]:not([value-state="None"]):not([value-state="Success"])) .ui5-input-clear-icon-wrapper{height:var(--_ui5-v1-24-29_input_icon_wrapper_state_height);vertical-align:top}:host([value-state="Success"]) .ui5-input-clear-icon-wrapper{height:var(--_ui5-v1-24-29_input_icon_wrapper_success_state_height)}[ui5-icon].ui5-input-clear-icon{padding:0;color:inherit}[inner-input]::-webkit-outer-spin-button,[inner-input]::-webkit-inner-spin-button{-webkit-appearance:inherit;margin:inherit}.ui5-select-root{min-width:calc(var(--_ui5-v1-24-29_input_min_width) + (var(--_ui5-v1-24-29-input-icons-count)*var(--_ui5-v1-24-29_input_icon_width)));width:100%;height:100%;display:flex;outline:none;cursor:pointer;overflow:hidden;border-radius:var(--_ui5-v1-24-29_input_border_radius)}.ui5-select-label-root{flex-shrink:1;flex-grow:1;align-self:center;min-width:1rem;padding-inline-start:.5rem;cursor:pointer;outline:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--_ui5-v1-24-29_select_label_color);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400}.ui5-select-option-icon{padding-inline-start:.5rem;color:var(--sapField_TextColor);align-self:center}:host(:not([disabled])){cursor:pointer}
`
};
var Select_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/generated/themes/SelectPopover.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData2 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/SelectPopover.css.ts",
  content: `.ui5-select-popover::part(content),.ui5-select-popover::part(header){padding:0}.ui5-select-popover [ui5-li]{height:var(--_ui5-v1-24-29_list_item_dropdown_base_height)}.ui5-select-popover [ui5-li]::part(icon){color:var(--sapList_TextColor)}
`
};
var SelectPopover_css_default = styleData2;

// node_modules/@ui5/webcomponents/dist/Select.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Select_1;
var Select = Select_1 = class Select2 extends UI5Element_default {
  constructor() {
    super();
    this._syncedOptions = [];
    this._selectedIndexBeforeOpen = -1;
    this._escapePressed = false;
    this._lastSelectedOption = null;
    this._typedChars = "";
    this._onMenuClick = this.onMenuClick.bind(this);
    this._onMenuClose = this.onMenuClose.bind(this);
    this._onMenuOpen = this.onMenuOpen.bind(this);
    this._onMenuBeforeOpen = this.onMenuBeforeOpen.bind(this);
    this._onMenuChange = this.onMenuChange.bind(this);
    this._attachMenuListeners = this.attachMenuListeners.bind(this);
    this._detachMenuListeners = this.detachMenuListeners.bind(this);
    this._upgradeProperty("value");
  }
  onBeforeRendering() {
    const menu = this._getSelectMenu();
    if (menu) {
      menu.value = this.value;
      menu.selectId = this.__id;
    } else {
      this._syncSelection();
    }
    this._enableFormSupport();
    this.style.setProperty(getScopedVarName("--_ui5-input-icons-count"), `${this.iconsCount}`);
  }
  onAfterRendering() {
    this.toggleValueStatePopover(this.shouldOpenValueStateMessagePopover);
    if (this._isPickerOpen) {
      if (!this._listWidth) {
        this._listWidth = this.responsivePopover.offsetWidth;
      }
    }
    this._attachRealDomRefs();
  }
  _onfocusin() {
    this.focused = true;
  }
  _onfocusout() {
    this.focused = false;
  }
  get _isPickerOpen() {
    const menu = this._getSelectMenu();
    if (menu) {
      return menu.open;
    }
    return !!this.responsivePopover && this.responsivePopover.opened;
  }
  _respPopover() {
    return __async(this, null, function* () {
      const staticAreaItem = yield this.getStaticAreaItemDomRef();
      return staticAreaItem.querySelector("[ui5-responsive-popover]");
    });
  }
  /**
   * Defines the value of the component:
   *
   * - when get - returns the value of the component, e.g. the `value` property of the selected option or its text content.
   *
   * - when set - selects the option with matching `value` property or text content.
   *
   * **Note:** If the given value does not match any existing option,
   * the first option will get selected.
   * @public
   * @default ""
   * @since 1.20.0
   * @formProperty
   * @formEvents change liveChange
   */
  set value(newValue) {
    const menu = this._getSelectMenu();
    const selectOptions = Array.from(menu ? menu.children : this.children).filter((option) => !option.getAttribute("disabled"));
    selectOptions.forEach((option) => {
      option.selected = !!((option.getAttribute("value") || option.textContent) === newValue);
    });
  }
  get value() {
    return this.selectedOption?.value || this.selectedOption?.textContent || "";
  }
  /**
   * Currently selected `ui5-option` element.
   * @public
   * @default undefined
   */
  get selectedOption() {
    return this.selectOptions.find((option) => option.selected);
  }
  onMenuClick(e) {
    const optionIndex = e.detail.optionIndex;
    this._handleSelectionChange(optionIndex);
  }
  onMenuBeforeOpen() {
    this._beforeOpen();
  }
  onMenuOpen() {
    this._afterOpen();
  }
  onMenuClose() {
    this._afterClose();
  }
  onMenuChange(e) {
    this._text = e.detail.text;
    this._selectedIndex = e.detail.selectedIndex;
  }
  _toggleSelectMenu() {
    const menu = this._getSelectMenu();
    if (!menu) {
      return;
    }
    if (menu.open) {
      menu.close();
    } else {
      menu.showAt(this, this.offsetWidth);
    }
  }
  onExitDOM() {
    const menu = this._getSelectMenu();
    if (menu) {
      this._detachMenuListeners(menu);
    }
  }
  _toggleRespPopover() {
    return __async(this, null, function* () {
      if (this.disabled || this.readonly) {
        return;
      }
      this._iconPressed = true;
      const menu = this._getSelectMenu();
      if (menu) {
        this._toggleSelectMenu();
        return;
      }
      this.responsivePopover = yield this._respPopover();
      if (this._isPickerOpen) {
        this.responsivePopover.close();
      } else {
        this.responsivePopover.showAt(this);
      }
    });
  }
  _attachRealDomRefs() {
    return __async(this, null, function* () {
      this.responsivePopover = yield this._respPopover();
      this.options.forEach((option) => {
        option._getRealDomRef = () => this.responsivePopover.querySelector(`*[data-ui5-stable=${option.stableDomRef}]`);
      });
    });
  }
  _syncSelection() {
    let lastSelectedOptionIndex = -1, firstEnabledOptionIndex = -1;
    const options = this._filteredItems;
    const syncOpts = options.map((opt, index) => {
      if (opt.selected) {
        lastSelectedOptionIndex = index;
      }
      if (firstEnabledOptionIndex === -1) {
        firstEnabledOptionIndex = index;
      }
      opt.selected = false;
      opt.focused = false;
      return {
        selected: false,
        focused: false,
        icon: opt.icon,
        value: opt.value,
        textContent: opt.textContent,
        title: opt.title,
        additionalText: opt.additionalText,
        id: opt._id,
        stableDomRef: opt.stableDomRef
      };
    });
    if (lastSelectedOptionIndex > -1) {
      syncOpts[lastSelectedOptionIndex].selected = true;
      syncOpts[lastSelectedOptionIndex].focused = true;
      options[lastSelectedOptionIndex].selected = true;
      options[lastSelectedOptionIndex].focused = true;
      this._text = syncOpts[lastSelectedOptionIndex].textContent;
      this._selectedIndex = lastSelectedOptionIndex;
    } else {
      this._text = "";
      this._selectedIndex = -1;
      if (syncOpts[firstEnabledOptionIndex]) {
        syncOpts[firstEnabledOptionIndex].selected = true;
        syncOpts[firstEnabledOptionIndex].focused = true;
        options[firstEnabledOptionIndex].selected = true;
        options[firstEnabledOptionIndex].focused = true;
        this._selectedIndex = firstEnabledOptionIndex;
        this._text = options[firstEnabledOptionIndex].textContent;
      }
    }
    this._syncedOptions = syncOpts;
  }
  _getSelectMenu() {
    return connectToComponent_default({
      host: this,
      propName: "menu",
      onConnect: this._attachMenuListeners,
      onDisconnect: this._detachMenuListeners
    });
  }
  attachMenuListeners(menu) {
    menu.addEventListener("ui5-after-close", this._onMenuClose);
    menu.addEventListener("ui5-after-open", this._onMenuOpen);
    menu.addEventListener("ui5-before-open", this._onMenuBeforeOpen);
    menu.addEventListener("ui5-option-click", this._onMenuClick);
    menu.addEventListener("ui5-menu-change", this._onMenuChange);
  }
  detachMenuListeners(menu) {
    menu.removeEventListener("ui5-after-close", this._onMenuClose);
    menu.removeEventListener("ui5-after-open", this._onMenuOpen);
    menu.removeEventListener("ui5-before-open", this._onMenuBeforeOpen);
    menu.removeEventListener("ui5-option-click", this._onMenuClick);
    menu.removeEventListener("ui5-menu-change", this._onMenuChange);
  }
  _enableFormSupport() {
    const formSupport = getFeature("FormSupport");
    if (formSupport) {
      formSupport.syncNativeHiddenInput(this, (element, nativeInput) => {
        const selectElement = element;
        nativeInput.disabled = !!element.disabled;
        nativeInput.value = selectElement.value;
      });
    } else if (this.name) {
      console.warn(`In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`);
    }
  }
  _onkeydown(e) {
    const isTab = isTabNext(e) || isTabPrevious(e);
    if (isTab && this._isPickerOpen) {
      const menu = this._getSelectMenu();
      if (menu) {
        menu.close(
          false,
          false,
          true
          /* preventFocusRestore */
        );
      } else {
        this.responsivePopover.close();
      }
    } else if (isShow(e)) {
      e.preventDefault();
      this._toggleRespPopover();
    } else if (isSpace(e)) {
      e.preventDefault();
    } else if (isEscape(e) && this._isPickerOpen) {
      this._escapePressed = true;
    } else if (isHome(e)) {
      this._handleHomeKey(e);
    } else if (isEnd(e)) {
      this._handleEndKey(e);
    } else if (isEnter(e)) {
      this._handleSelectionChange();
    } else if (isUp(e) || isDown(e)) {
      this._handleArrowNavigation(e);
    }
  }
  _handleKeyboardNavigation(e) {
    if (isEnter(e) || this.readonly) {
      return;
    }
    const typedCharacter = e.key.toLowerCase();
    this._typedChars += typedCharacter;
    const text = /^(.)\1+$/i.test(this._typedChars) ? typedCharacter : this._typedChars;
    clearTimeout(this._typingTimeoutID);
    this._typingTimeoutID = setTimeout(() => {
      this._typedChars = "";
      this._typingTimeoutID = -1;
    }, 1e3);
    this._selectTypedItem(text);
  }
  _selectTypedItem(text) {
    const currentIndex = this._selectedIndex;
    const itemToSelect = this._searchNextItemByText(text);
    if (itemToSelect) {
      const nextIndex = this.selectOptions.indexOf(itemToSelect);
      this._changeSelectedItem(this._selectedIndex, nextIndex);
      if (currentIndex !== this._selectedIndex) {
        this.itemSelectionAnnounce();
        this._scrollSelectedItem();
      }
    }
  }
  _searchNextItemByText(text) {
    let orderedOptions = this.selectOptions.slice(0);
    const optionsAfterSelected = orderedOptions.splice(this._selectedIndex + 1, orderedOptions.length - this._selectedIndex);
    const optionsBeforeSelected = orderedOptions.splice(0, orderedOptions.length - 1);
    orderedOptions = optionsAfterSelected.concat(optionsBeforeSelected);
    return orderedOptions.find((option) => (option.displayText || option.textContent || "").toLowerCase().startsWith(text));
  }
  _handleHomeKey(e) {
    e.preventDefault();
    if (this.readonly) {
      return;
    }
    this._changeSelectedItem(this._selectedIndex, 0);
  }
  _handleEndKey(e) {
    e.preventDefault();
    if (this.readonly) {
      return;
    }
    const lastIndex = this.selectOptions.length - 1;
    this._changeSelectedItem(this._selectedIndex, lastIndex);
  }
  _onkeyup(e) {
    if (isSpace(e)) {
      if (this._isPickerOpen) {
        this._handleSelectionChange();
      } else {
        this._toggleRespPopover();
      }
    }
  }
  _getSelectedItemIndex(item) {
    return this.selectOptions.findIndex((option) => `${option._id}-li` === item.id);
  }
  _select(index) {
    this.selectOptions[this._selectedIndex].selected = false;
    if (this._selectedIndex !== index) {
      this.fireEvent("live-change", {
        selectedOption: this.selectOptions[index]
      });
    }
    this._selectedIndex = index;
    this.selectOptions[index].selected = true;
  }
  /**
   * The user clicked on an item from the list
   * @private
   */
  _handleItemPress(e) {
    const item = e.detail.item;
    const selectedItemIndex = this._getSelectedItemIndex(item);
    this._handleSelectionChange(selectedItemIndex);
  }
  _itemMousedown(e) {
    e.preventDefault();
  }
  _onclick() {
    this.getFocusDomRef().focus();
    this._toggleRespPopover();
  }
  /**
   * The user selected an item with Enter or Space
   * @private
   */
  _handleSelectionChange(index = this._selectedIndex) {
    this._select(index);
    this._toggleRespPopover();
  }
  _scrollSelectedItem() {
    if (this._isPickerOpen) {
      const itemRef = this._currentlySelectedOption?.getDomRef();
      if (itemRef) {
        itemRef.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "nearest"
        });
      }
    }
  }
  _handleArrowNavigation(e) {
    e.preventDefault();
    if (this.readonly) {
      return;
    }
    let nextIndex = -1;
    const currentIndex = this._selectedIndex;
    const isDownKey = isDown(e);
    if (isDownKey) {
      nextIndex = this._getNextOptionIndex();
    } else {
      nextIndex = this._getPreviousOptionIndex();
    }
    this._changeSelectedItem(this._selectedIndex, nextIndex);
    if (currentIndex !== this._selectedIndex) {
      this.itemSelectionAnnounce();
      this._scrollSelectedItem();
    }
  }
  _changeSelectedItem(oldIndex, newIndex) {
    const options = this.selectOptions;
    const previousOption = options[oldIndex];
    const nextOption = options[newIndex];
    if (previousOption === nextOption) {
      return;
    }
    previousOption.selected = false;
    previousOption.focused = false;
    nextOption.selected = true;
    nextOption.focused = true;
    this._selectedIndex = newIndex;
    this.fireEvent("live-change", {
      selectedOption: nextOption
    });
    if (!this._isPickerOpen) {
      this._fireChangeEvent(nextOption);
    }
  }
  _getNextOptionIndex() {
    const menu = this._getSelectMenu();
    if (menu) {
      return this._selectedIndex === menu.options.length - 1 ? this._selectedIndex : this._selectedIndex + 1;
    }
    return this._selectedIndex === this.options.length - 1 ? this._selectedIndex : this._selectedIndex + 1;
  }
  _getPreviousOptionIndex() {
    return this._selectedIndex === 0 ? this._selectedIndex : this._selectedIndex - 1;
  }
  _beforeOpen() {
    this._selectedIndexBeforeOpen = this._selectedIndex;
    this._lastSelectedOption = this.selectOptions[this._selectedIndex];
  }
  _afterOpen() {
    this.opened = true;
    this.fireEvent("open");
    this.itemSelectionAnnounce();
    this._scrollSelectedItem();
  }
  _afterClose() {
    this.opened = false;
    this._iconPressed = false;
    this._listWidth = 0;
    if (this._escapePressed) {
      this._select(this._selectedIndexBeforeOpen);
      this._escapePressed = false;
    } else if (this._lastSelectedOption !== this.selectOptions[this._selectedIndex]) {
      this._fireChangeEvent(this.selectOptions[this._selectedIndex]);
      this._lastSelectedOption = this.selectOptions[this._selectedIndex];
    }
    this.fireEvent("close");
  }
  get selectOptions() {
    const menu = this._getSelectMenu();
    if (menu) {
      return Array.from(menu.children);
    }
    return this._filteredItems;
  }
  get hasCustomLabel() {
    return !!this.label.length;
  }
  _fireChangeEvent(selectedOption) {
    const changePrevented = !this.fireEvent("change", {
      selectedOption
    }, true);
    this.selectedItem = selectedOption.textContent;
    this.fireEvent("selected-item-changed");
    if (changePrevented) {
      this.selectedItem = this._lastSelectedOption.textContent;
      this._select(this._selectedIndexBeforeOpen);
    }
  }
  get valueStateTextMappings() {
    return {
      [ValueState_default.Success]: Select_1.i18nBundle.getText(VALUE_STATE_SUCCESS),
      [ValueState_default.Information]: Select_1.i18nBundle.getText(VALUE_STATE_INFORMATION),
      [ValueState_default.Error]: Select_1.i18nBundle.getText(VALUE_STATE_ERROR),
      [ValueState_default.Warning]: Select_1.i18nBundle.getText(VALUE_STATE_WARNING)
    };
  }
  get valueStateTypeMappings() {
    return {
      [ValueState_default.Success]: Select_1.i18nBundle.getText(VALUE_STATE_TYPE_SUCCESS),
      [ValueState_default.Information]: Select_1.i18nBundle.getText(VALUE_STATE_TYPE_INFORMATION),
      [ValueState_default.Error]: Select_1.i18nBundle.getText(VALUE_STATE_TYPE_ERROR),
      [ValueState_default.Warning]: Select_1.i18nBundle.getText(VALUE_STATE_TYPE_WARNING)
    };
  }
  get valueStateText() {
    let valueStateText;
    if (this.shouldDisplayDefaultValueStateMessage) {
      valueStateText = this.valueStateDefaultText;
    } else {
      valueStateText = this.valueStateMessageText.map((el) => el.textContent).join(" ");
    }
    return `${this.valueStateTypeText} ${valueStateText}`;
  }
  get valueStateDefaultText() {
    return this.valueState !== ValueState_default.None ? this.valueStateTextMappings[this.valueState] : "";
  }
  get valueStateTypeText() {
    return this.valueState !== ValueState_default.None ? this.valueStateTypeMappings[this.valueState] : "";
  }
  get hasValueState() {
    return this.valueState !== ValueState_default.None;
  }
  get valueStateTextId() {
    return this.hasValueState ? `${this._id}-valueStateDesc` : void 0;
  }
  get isDisabled() {
    return this.disabled || void 0;
  }
  get _headerTitleText() {
    return Select_1.i18nBundle.getText(INPUT_SUGGESTIONS_TITLE);
  }
  get _currentlySelectedOption() {
    return this.selectOptions[this._selectedIndex];
  }
  get _effectiveTabIndex() {
    return this.disabled || this.responsivePopover && this.responsivePopover.opened ? "-1" : "0";
  }
  /**
  * This method is relevant for sap_horizon theme only
  */
  get _valueStateMessageInputIcon() {
    const iconPerValueState = {
      Error: "error",
      Warning: "alert",
      Success: "sys-enter-2",
      Information: "information"
    };
    return this.valueState !== ValueState_default.None ? iconPerValueState[this.valueState] : "";
  }
  get iconsCount() {
    return this.selectedOptionIcon ? 2 : 1;
  }
  get classes() {
    return {
      popoverValueState: {
        "ui5-valuestatemessage-root": true,
        "ui5-valuestatemessage--success": this.valueState === ValueState_default.Success,
        "ui5-valuestatemessage--error": this.valueState === ValueState_default.Error,
        "ui5-valuestatemessage--warning": this.valueState === ValueState_default.Warning,
        "ui5-valuestatemessage--information": this.valueState === ValueState_default.Information
      },
      popover: {
        "ui5-select-popover-valuestate": this.hasValueState
      }
    };
  }
  get styles() {
    return {
      popoverHeader: {
        "max-width": `${this.offsetWidth}px`
      },
      responsivePopoverHeader: {
        "display": this._filteredItems.length && this._listWidth === 0 ? "none" : "inline-block",
        "width": `${this._filteredItems.length ? this._listWidth : this.offsetWidth}px`
      },
      responsivePopover: {
        "min-width": `${this.offsetWidth}px`
      }
    };
  }
  get ariaLabelText() {
    return getEffectiveAriaLabelText(this);
  }
  get valueStateMessageText() {
    return this.getSlottedNodes("valueStateMessage").map((el) => el.cloneNode(true));
  }
  get shouldDisplayDefaultValueStateMessage() {
    return !this.valueStateMessageText.length && this.hasValueStateText;
  }
  get hasValueStateText() {
    return this.hasValueState && this.valueState !== ValueState_default.Success;
  }
  get shouldOpenValueStateMessagePopover() {
    return this.focused && this.hasValueStateText && !this._iconPressed && !this._isPickerOpen && !this._isPhone;
  }
  get _ariaRoleDescription() {
    return Select_1.i18nBundle.getText(SELECT_ROLE_DESCRIPTION);
  }
  get _isPhone() {
    return isPhone();
  }
  get _filteredItems() {
    return this.options.filter((option) => !option.disabled);
  }
  itemSelectionAnnounce() {
    let text;
    const optionsCount = this.selectOptions.length;
    const itemPositionText = Select_1.i18nBundle.getText(LIST_ITEM_POSITION, this._selectedIndex + 1, optionsCount);
    if (this.focused && this._currentlySelectedOption) {
      const optionText = this._currentlySelectedOption.getAttribute("accessible-name") || this._currentlySelectedOption.textContent;
      text = `${optionText}${this._isPickerOpen ? `, ${itemPositionText}` : ""}`;
      InvisibleMessage_default(text, InvisibleMessageMode_default.Polite);
    }
  }
  openValueStatePopover() {
    return __async(this, null, function* () {
      this.valueStatePopover = yield this._getPopover();
      if (this.valueStatePopover) {
        this.valueStatePopover.showAt(this);
      }
    });
  }
  closeValueStatePopover() {
    this.valueStatePopover && this.valueStatePopover.close();
  }
  toggleValueStatePopover(open) {
    if (open) {
      this.openValueStatePopover();
    } else {
      this.closeValueStatePopover();
    }
  }
  get selectedOptionIcon() {
    return this.selectedOption && this.selectedOption.icon;
  }
  _getPopover() {
    return __async(this, null, function* () {
      const staticAreaItem = yield this.getStaticAreaItemDomRef();
      return staticAreaItem.querySelector("[ui5-popover]");
    });
  }
  static onDefine() {
    return __async(this, null, function* () {
      Select_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
};
__decorate([property_default({
  validator: DOMReference_default
})], Select.prototype, "menu", void 0);
__decorate([property_default({
  type: Boolean
})], Select.prototype, "disabled", void 0);
__decorate([property_default()], Select.prototype, "name", void 0);
__decorate([property_default({
  type: ValueState_default,
  defaultValue: ValueState_default.None
})], Select.prototype, "valueState", void 0);
__decorate([property_default({
  type: Boolean
})], Select.prototype, "required", void 0);
__decorate([property_default({
  type: Boolean
})], Select.prototype, "readonly", void 0);
__decorate([property_default()], Select.prototype, "accessibleName", void 0);
__decorate([property_default()], Select.prototype, "accessibleNameRef", void 0);
__decorate([property_default({
  type: String,
  noAttribute: true
})], Select.prototype, "_text", void 0);
__decorate([property_default({
  type: Boolean,
  noAttribute: true
})], Select.prototype, "_iconPressed", void 0);
__decorate([property_default({
  type: Boolean
})], Select.prototype, "opened", void 0);
__decorate([property_default({
  validator: Integer_default,
  defaultValue: 0,
  noAttribute: true
})], Select.prototype, "_listWidth", void 0);
__decorate([property_default({
  type: Boolean
})], Select.prototype, "focused", void 0);
__decorate([property_default({
  validator: Integer_default,
  defaultValue: -1,
  noAttribute: true
})], Select.prototype, "_selectedIndex", void 0);
__decorate([slot_default({
  "default": true,
  type: HTMLElement,
  invalidateOnChildChange: true
})], Select.prototype, "options", void 0);
__decorate([slot_default()], Select.prototype, "formSupport", void 0);
__decorate([slot_default()], Select.prototype, "valueStateMessage", void 0);
__decorate([slot_default()], Select.prototype, "label", void 0);
Select = Select_1 = __decorate([
  customElement_default({
    tag: "ui5-select",
    languageAware: true,
    renderer: LitRenderer_default,
    template: SelectTemplate_lit_default,
    staticAreaTemplate: SelectPopoverTemplate_lit_default,
    styles: Select_css_default,
    staticAreaStyles: [ResponsivePopoverCommon_css_default, ValueStateMessage_css_default, SelectPopover_css_default],
    dependencies: [Option_default, Label_default, ResponsivePopover_default, Popover_default, List_default, StandardListItem_default, Icon_default, Button_default]
  }),
  event_default("change", {
    detail: {
      /**
      * @public
      */
      selectedOption: {
        type: HTMLElement
      }
    }
  }),
  event_default("live-change", {
    detail: {
      /**
      * @public
      */
      selectedOption: {
        type: HTMLElement
      }
    }
  }),
  event_default("open"),
  event_default("close")
], Select);
Select.define();
var Select_default = Select;
export {
  Select_default as default
};
//# sourceMappingURL=@ui5_webcomponents_dist_Select__js.js.map
