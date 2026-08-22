import {
  Popover_default,
  ValueStateMessage_css_default,
  getEffectiveScrollbarStyle_default
} from "./chunk-LXXNVKH3.js";
import {
  Integer_default
} from "./chunk-YJ42QTVF.js";
import {
  ValueState_default
} from "./chunk-3GUSYCCY.js";
import "./chunk-VO2NJHAL.js";
import {
  getAssociatedLabelForTexts,
  getEffectiveAriaLabelText
} from "./chunk-BY3NBTSA.js";
import {
  ResizeHandler_default
} from "./chunk-FMNTYMAV.js";
import "./chunk-P63L4E64.js";
import {
  TEXTAREA_CHARACTERS_EXCEEDED,
  TEXTAREA_CHARACTERS_LEFT,
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
  Icon_default,
  event_default
} from "./chunk-4CCMOZQP.js";
import {
  LitRenderer_default,
  classMap,
  effectiveHtml,
  ifDefined,
  isEscape,
  parameters_bundle_css_default,
  parameters_bundle_css_default2,
  repeat,
  scopeTag,
  styleMap
} from "./chunk-S2KYTLGV.js";
import {
  slot_default
} from "./chunk-SRQLSZPJ.js";
import {
  UI5Element_default,
  customElement_default,
  property_default
} from "./chunk-45WMDHUI.js";
import "./chunk-XQ36JZLT.js";
import "./chunk-45EM4FL4.js";
import {
  getI18nBundle
} from "./chunk-5RZ2QJVB.js";
import {
  getFeature,
  registerThemePropertiesLoader
} from "./chunk-KIL2GIL2.js";
import {
  __async
} from "./chunk-5K356HEJ.js";

// node_modules/@ui5/webcomponents/dist/generated/templates/TextAreaTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<div class="${classMap(this.classes.root)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}"><div class="ui5-textarea-wrapper">${this.growing ? block1.call(this, context, tags, suffix) : void 0}<textarea id="${ifDefined(this._id)}-inner" class="ui5-textarea-inner" placeholder="${ifDefined(this.placeholder)}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" aria-label="${ifDefined(this.ariaLabelText)}" aria-describedby="${ifDefined(this.ariaDescribedBy)}" aria-invalid="${ifDefined(this.ariaInvalid)}" aria-required="${ifDefined(this.required)}" maxlength="${ifDefined(this._exceededTextProps.calcedMaxLength)}" .value="${ifDefined(this.value)}" @input="${this._oninput}" @change="${this._onchange}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @select="${this._onselect}" @scroll="${this._onscroll}" data-sap-focus-ref part="textarea"></textarea></div>${this.showExceededText ? block3.call(this, context, tags, suffix) : void 0}${this.hasValueState ? block4.call(this, context, tags, suffix) : void 0}<slot name="formSupport"></slot></div> `;
}
function block1(context, tags, suffix) {
  return effectiveHtml`<div id="${ifDefined(this._id)}-mirror" class="ui5-textarea-mirror" aria-hidden="true">${repeat(this._mirrorText, (item, index) => item._id || index, (item, index) => block2.call(this, context, tags, suffix, item, index))}</div>`;
}
function block2(context, tags, suffix, item, index) {
  return effectiveHtml`${ifDefined(item.text)}<br />`;
}
function block3(context, tags, suffix) {
  return effectiveHtml`<span class="ui5-textarea-exceeded-text">${ifDefined(this._exceededTextProps.exceededText)}</span>`;
}
function block4(context, tags, suffix) {
  return effectiveHtml`<span id="${ifDefined(this._id)}-valueStateDesc" class="ui5-hidden-text">${ifDefined(this.ariaValueStateHiddenText)}</span>`;
}
var TextAreaTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/templates/TextAreaPopoverTemplate.lit.js
function block02(context, tags, suffix) {
  return effectiveHtml`${this.displayValueStateMessagePopover ? block12.call(this, context, tags, suffix) : void 0}`;
}
function block12(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-popover", tags, suffix)} skip-registry-update prevent-focus-restore hide-arrow _disable-initial-focus class="ui5-valuestatemessage-popover" style="${styleMap(this.styles.valueStateMsgPopover)}" placement-type="Bottom" horizontal-align="${ifDefined(this._valueStatePopoverHorizontalAlign)}"><div slot="header" class="ui5-valuestatemessage-root ${classMap(this.classes.valueStateMsg)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.hasCustomValueState ? block22.call(this, context, tags, suffix) : block42.call(this, context, tags, suffix)}</div></${scopeTag("ui5-popover", tags, suffix)}>` : effectiveHtml`<ui5-popover skip-registry-update prevent-focus-restore hide-arrow _disable-initial-focus class="ui5-valuestatemessage-popover" style="${styleMap(this.styles.valueStateMsgPopover)}" placement-type="Bottom" horizontal-align="${ifDefined(this._valueStatePopoverHorizontalAlign)}"><div slot="header" class="ui5-valuestatemessage-root ${classMap(this.classes.valueStateMsg)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></ui5-icon>${this.hasCustomValueState ? block22.call(this, context, tags, suffix) : block42.call(this, context, tags, suffix)}</div></ui5-popover>`;
}
function block22(context, tags, suffix) {
  return effectiveHtml`${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block32.call(this, context, tags, suffix, item, index))}`;
}
function block32(context, tags, suffix, item, index) {
  return effectiveHtml`${ifDefined(item)}`;
}
function block42(context, tags, suffix) {
  return effectiveHtml`${ifDefined(this.valueStateDefaultText)}`;
}
var TextAreaPopoverTemplate_lit_default = block02;

// node_modules/@ui5/webcomponents/dist/generated/themes/TextArea.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/TextArea.css.ts",
  content: `:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block}:host{width:100%;min-width:6rem;color:var(--sapField_TextColor);min-height:var(--_ui5-v1-24-29_textarea_min_height);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);font-style:normal;box-sizing:border-box;line-height:var(--_ui5-v1-24-29_textarea_line_height);margin:var(--_ui5-v1-24-29_textarea_margin)}:host([value-state][disabled]) .ui5-textarea-wrapper,:host(:not([value-state]):not([readonly]):not([focused])) .ui5-textarea-wrapper,:host([readonly][disabled]) .ui5-textarea-wrapper,:host([value-state="None"]:not([readonly]):not([disabled]):not([focused])) .ui5-textarea-wrapper{background:var(--sapField_BackgroundStyle);background-color:var(--sapField_Background)}:host(:not([value-state]):not([readonly]):not([disabled]):hover) .ui5-textarea-wrapper,:host([value-state="None"]:not([readonly]):not([disabled]):hover) .ui5-textarea-wrapper{background:var(--sapField_Hover_BackgroundStyle);background-color:var(--sapField_Hover_Background);border:var(--_ui5-v1-24-29_textarea_hover_border)}:host(:not([value-state]):not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper,:host([value-state="None"]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper{box-shadow:var(--sapField_Hover_Shadow)}.ui5-textarea-root{width:100%;height:inherit;min-height:var(--_ui5-v1-24-29_textarea_min_height);display:inline-flex;vertical-align:top;box-sizing:border-box;border-radius:inherit;border-color:inherit;position:relative;outline:none}.ui5-textarea-wrapper{position:relative;box-sizing:border-box;width:100%;border-bottom:none;display:flex;height:100%;background-color:var(--sapField_Background);border-color:var(--sapField_BorderColor);border-radius:var(--sapField_BorderCornerRadius);border-width:var(--sapField_BorderWidth);border-style:var(--sapField_BorderStyle);padding:var(--_ui5-v1-24-29_textarea_wrapper_padding);outline:none}:host([disabled]) .ui5-textarea-wrapper{opacity:var(--_ui5-v1-24-29_textarea_disabled_opacity);cursor:default;pointer-events:none}:host(:not([readonly])) .ui5-textarea-wrapper,:host([readonly][disabled]) .ui5-textarea-wrapper{box-shadow:var(--sapField_Shadow)}:host([value-state]) .ui5-textarea-wrapper{border-color:inherit}:host([focused]) .ui5-textarea-wrapper{background-color:var(--sapField_Focus_Background);background-image:none;box-shadow:none}:host([focused]) .ui5-textarea-wrapper:after{content:var(--_ui5-v1-24-29_textarea_focus_pseudo_element_content);position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5-v1-24-29_textarea_focus_outline_color);border-radius:var(--_ui5-v1-24-29_textarea_focus_border_radius);top:var(--_ui5-v1-24-29_textarea_focus_offset);bottom:var(--_ui5-v1-24-29_textarea_focus_offset);left:var(--_ui5-v1-24-29_textarea_focus_offset);right:var(--_ui5-v1-24-29_textarea_focus_offset)}:host([focused][readonly]) .ui5-textarea-wrapper:after{top:var(--_ui5-v1-24-29_textarea_readonly_focus_offset);bottom:var(--_ui5-v1-24-29_textarea_readonly_focus_offset);left:var(--_ui5-v1-24-29_textarea_readonly_focus_offset);right:var(--_ui5-v1-24-29_textarea_readonly_focus_offset)}:host([focused][value-state="Error"]:not([disabled])) .ui5-textarea-wrapper:after,:host([focused][value-state="Warning"]:not([disabled])) .ui5-textarea-wrapper:after,:host([focused][value-state="Information"]:not([disabled])) .ui5-textarea-wrapper:after{top:var(--_ui5-v1-24-29_textarea_value_state_focus_offset);bottom:var(--_ui5-v1-24-29_textarea_value_state_focus_offset);left:var(--_ui5-v1-24-29_textarea_value_state_focus_offset);right:var(--_ui5-v1-24-29_textarea_value_state_focus_offset)}.ui5-textarea-inner{border:none;box-sizing:border-box;width:100%;margin:0;padding:var(--_ui5-v1-24-29_textarea_padding_top) var(--_ui5-v1-24-29_textarea_padding_right_and_left) var(--_ui5-v1-24-29_textarea_padding_bottom);color:inherit;font-size:inherit;font-family:inherit;font-style:inherit;-webkit-appearance:none;-moz-appearance:textfield;overflow:auto;resize:none;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;background:transparent;outline:none}:host([growing]) .ui5-textarea-inner{box-sizing:border-box;height:100%;position:absolute;top:0;left:0}.ui5-textarea-mirror{box-sizing:border-box;line-height:var(--_ui5-v1-24-29_textarea_line_height);visibility:hidden;width:100%;max-height:94vh;min-height:calc((var(--_textarea_rows) * var(--_ui5-v1-24-29_textarea_line_height)) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top) + var(--_ui5-v1-24-29_textarea_padding_bottom));word-break:break-all;padding-top:var(--_ui5-v1-24-29_textarea_padding_top);padding-bottom:var(--_ui5-v1-24-29_textarea_padding_bottom);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);white-space:pre-wrap;overflow-y:auto}:host([style*="height"]) .ui5-textarea-root,:host([growing][style*="height"]) .ui5-textarea-wrapper{height:inherit;min-height:var(--_ui5-v1-24-29_textarea_min_height)}:host([rows]) .ui5-textarea-inner,:host([rows]) .ui5-textarea-mirror{min-height:calc((var(--_textarea_rows) * var(--_ui5-v1-24-29_textarea_line_height)) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top) + var(--_ui5-v1-24-29_textarea_padding_bottom))}:host:not([rows]) .ui5-textarea-inner{min-height:calc(2 * var(--_ui5-v1-24-29_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top) + var(--_ui5-v1-24-29_textarea_padding_bottom))}:host([growing]):not([growing-max-lines]) .ui5-textarea-inner{max-height:100%}:host([growing-max-lines]) .ui5-textarea-mirror{max-height:calc((var(--_textarea_growing_max_lines) * var(--_ui5-v1-24-29_textarea_line_height)) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top) + var(--_ui5-v1-24-29_textarea_padding_bottom))}:host([rows="1"]) .ui5-textarea-inner{min-height:calc(var(--_ui5-v1-24-29_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top) + var(--_ui5-v1-24-29_textarea_padding_bottom))}:host([growing-max-lines="1"]) .ui5-textarea-inner,:host([growing-max-lines="1"]) .ui5-textarea-mirror{max-height:calc(var(--_ui5-v1-24-29_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top) + var(--_ui5-v1-24-29_textarea_padding_bottom));min-height:calc(var(--_ui5-v1-24-29_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top) + var(--_ui5-v1-24-29_textarea_padding_bottom))}:host([rows="1"][growing-max-lines]) .ui5-textarea-inner,:host([rows="1"][growing-max-lines]) .ui5-textarea-mirror{min-height:calc(var(--_ui5-v1-24-29_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top) + var(--_ui5-v1-24-29_textarea_padding_bottom));max-height:calc((var(--_textarea_growing_max_lines) * var(--_ui5-v1-24-29_textarea_line_height)) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top) + var(--_ui5-v1-24-29_textarea_padding_bottom))}:host([rows="1"][value-state="Error"]:not([readonly]):not([disabled])) .ui5-textarea-inner,:host([rows="1"][value-state="Warning"]:not([readonly]):not([disabled])) .ui5-textarea-inner{height:calc(var(--_ui5-v1-24-29_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top_error_warning) + var(--_ui5-v1-24-29_textarea_padding_bottom_error_warning));min-height:calc(var(--_ui5-v1-24-29_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top_error_warning) + var(--_ui5-v1-24-29_textarea_padding_bottom_error_warning))}:host([value-state="Error"]) .ui5-textarea-mirror,:host([value-state="Warning"]) .ui5-textarea-mirror{padding-top:var(--_ui5-v1-24-29_textarea_padding_top_error_warning);padding-bottom:var(--_ui5-v1-24-29_textarea_padding_bottom_error_warning);min-height:calc(var(--_textarea_rows) * var(--_ui5-v1-24-29_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top_error_warning) + var(--_ui5-v1-24-29_textarea_padding_bottom_error_warning))}:host([growing-max-lines="1"][value-state="Error"]) .ui5-textarea-inner,:host([growing-max-lines="1"][value-state="Error"]) .ui5-textarea-mirror :host([growing-max-lines="1"][value-state="Warning"]) .ui5-textarea-inner,:host([growing-max-lines="1"][value-state="Warning"]) .ui5-textarea-mirror{max-height:var(--_ui5-v1-24-29_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top_error_warning) + var(--_ui5-v1-24-29_textarea_padding_bottom_error_warning);min-height:var(--_ui5-v1-24-29_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top_error_warning) + var(--_ui5-v1-24-29_textarea_padding_bottom_error_warning)}:host([value-state="Information"]) .ui5-textarea-mirror{padding-top:var(--_ui5-v1-24-29_textarea_padding_top_information);padding-bottom:var(--_ui5-v1-24-29_textarea_padding_bottom_information);min-height:calc(var(--_textarea_rows) * var(--_ui5-v1-24-29_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top_information) + var(--_ui5-v1-24-29_textarea_padding_bottom_information))}:host([rows="1"][value-state="Information"]:not([readonly]):not([disabled])) .ui5-textarea-inner{height:calc(var(--_ui5-v1-24-29_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top_information) + var(--_ui5-v1-24-29_textarea_padding_bottom_information));min-height:calc(var(--_ui5-v1-24-29_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top_information) + var(--_ui5-v1-24-29_textarea_padding_bottom_information))}:host([growing-max-lines="1"][value-state="Information"]) .ui5-textarea-inner,:host([growing-max-lines="1"][value-state="Information"]) .ui5-textarea-mirror{max-height:var(--_ui5-v1-24-29_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top__ui5_textarea_padding_top_information) + var(--_ui5-v1-24-29_textarea_padding_bottom__ui5_textarea_padding_top_information);min-height:var(--_ui5-v1-24-29_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-24-29_textarea_padding_top_error_warning) + var(--_ui5-v1-24-29_textarea_padding_bottom_information)}:host([readonly]:not([disabled])){border-color:var(--sapField_ReadOnly_BorderColor)}:host([readonly]:not([disabled])) .ui5-textarea-inner{padding:var(--_ui5-v1-24-29_textarea_padding_top_readonly) var(--_ui5-v1-24-29_textarea_padding_right_and_left_readonly) var(--_ui5-v1-24-29_textarea_padding_bottom_readonly)}:host([readonly]:not([disabled])) .ui5-textarea-root .ui5-textarea-wrapper{background-color:var(--sapField_ReadOnly_Background);border-color:var(--sapField_ReadOnly_BorderColor);border-style:var(--_ui5-v1-24-29_textarea_readonly_border_style)}:host([show-exceeded-text]) .ui5-textarea-root{flex-direction:column}.ui5-textarea-inner::-webkit-input-placeholder{font-weight:400;font-style:var(--_ui5-v1-24-29_textarea_placeholder_font_style);color:var(--sapField_PlaceholderTextColor)}.ui5-textarea-inner::-moz-placeholder{font-weight:400;font-style:var(--_ui5-v1-24-29_textarea_placeholder_font_style);color:var(--sapField_PlaceholderTextColor)}.ui5-textarea-inner:-moz-placeholder{font-weight:400;font-style:var(--_ui5-v1-24-29_textarea_placeholder_font_style);color:var(--sapField_PlaceholderTextColor)}:host([value-state="Error"]) .ui5-textarea-inner::-webkit-input-placeholder{font-weight:var(--_ui5-v1-24-29_textarea_value_state_error_warning_placeholder_font_weight);font-style:var(--_ui5-v1-24-29_textarea_error_placeholder_font_style);color:var(--_ui5-v1-24-29_textarea_error_placeholder_color)}:host([value-state="Error"]) .ui5-textarea-inner::-moz-placeholder{font-weight:var(--_ui5-v1-24-29_textarea_value_state_error_warning_placeholder_font_weight);font-style:var(--_ui5-v1-24-29_textarea_error_placeholder_font_style);color:var(--_ui5-v1-24-29_textarea_error_placeholder_color)}:host([value-state="Warning"]) .ui5-textarea-inner::-moz-placeholder{font-weight:var(--_ui5-v1-24-29_textarea_value_state_error_warning_placeholder_font_weight);font-style:var(--_ui5-v1-24-29_textarea_error_placeholder_font_style);color:var(--sapField_PlaceholderTextColor)}:host([value-state="Warning"]) .ui5-textarea-inner::-webkit-input-placeholder{font-weight:var(--_ui5-v1-24-29_textarea_value_state_error_warning_placeholder_font_weight);font-style:var(--_ui5-v1-24-29_textarea_error_placeholder_font_style);color:var(--sapField_PlaceholderTextColor)}:host([value-state="Error"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--sapField_InvalidColor);box-shadow:var(--sapField_InvalidShadow)}:host([value-state="Error"][focused]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background-color:var(--_ui5-v1-24-29_textarea_focused_value_state_error_background);border-color:var(--sapField_InvalidColor)}:host([value-state="Error"][focused]:not([readonly]):not([disabled])) .ui5-textarea-wrapper:after{border-color:var(--_ui5-v1-24-29_textarea_focused_value_state_error_focus_outline_color)}:host([value-state="Error"]:not([readonly]):not([focused]):not([disabled]):hover) .ui5-textarea-wrapper{background-color:var(--_ui5-v1-24-29_textarea_error_hover_background_color);box-shadow:var(--sapField_Hover_InvalidShadow)}:host([value-state="Error"]:not([readonly]):not([disabled])) .ui5-textarea-inner,:host([value-state="Warning"]:not([readonly]):not([disabled])) .ui5-textarea-inner{font-style:var(--_ui5-v1-24-29_textarea_error_warning_font_style);font-weight:var(--_ui5-v1-24-29_textarea_error_warning_font_weight);padding:var(--_ui5-v1-24-29_textarea_padding_top_error_warning) var(--_ui5-v1-24-29_textarea_padding_right_and_left_error_warning) var(--_ui5-v1-24-29_textarea_padding_bottom_error_warning)}:host([value-state="Error"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper,:host([value-state="Warning"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{border-style:var(--_ui5-v1-24-29_textarea_error_warning_border_style);border-width:var(--_ui5-v1-24-29_textarea_state_border_width);padding:var(--_ui5-v1-24-29_textarea_warning_error_wrapper_padding)}:host([value-state="Error"]:not([readonly]):not([disabled])) .ui5-textarea-inner,:host([value-state="Warning"]:not([readonly]):not([disabled])) .ui5-textarea-inner,:host([value-state="Information"]:not([readonly]):not([disabled])) .ui5-textarea-inner{border-style:none}:host([value-state="Warning"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--sapField_WarningColor);box-shadow:var(--sapField_WarningShadow)}:host([value-state="Warning"][focused]:not([readonly])) .ui5-textarea-wrapper{background-color:var(--_ui5-v1-24-29_textarea_focused_value_state_warning_background);border-color:var(--sapField_WarningColor)}:host([value-state="Warning"][focused]:not([readonly])) .ui5-textarea-wrapper:after{border-color:var(--_ui5-v1-24-29_textarea_focused_value_state_warning_focus_outline_color)}:host([value-state="Warning"]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_WarningShadow)}:host([value-state="Success"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--sapField_SuccessColor);border-width:var(--sapField_BorderWidth);box-shadow:var(--sapField_SuccessShadow);padding:var(--_ui5-v1-24-29_textarea_success_wrapper_padding)}:host([value-state="Success"][focused]:not([readonly])) .ui5-textarea-wrapper{background-color:var(--_ui5-v1-24-29_textarea_focused_value_state_success_background);border-color:var(--sapField_SuccessColor)}:host([value-state="Success"][focused]:not([readonly])) .ui5-textarea-wrapper:after{border-color:var(--_ui5-v1-24-29_textarea_focused_value_state_success_focus_outline_color)}:host([value-state="Success"]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_SuccessShadow)}:host([value-state][value-state="Success"]) .ui5-textarea-inner{border-radius:var(--sapField_BorderCornerRadius)}:host([value-state="Information"]:not([readonly]):not([disabled])) .ui5-textarea-inner{padding:var(--_ui5-v1-24-29_textarea_padding_top_information) var(--_ui5-v1-24-29_textarea_padding_right_and_left_information) var(--_ui5-v1-24-29_textarea_padding_bottom_information)}:host([value-state="Information"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--sapField_InformationColor);box-shadow:var(--sapField_InformationShadow);padding:var(--_ui5-v1-24-29_textarea_information_wrapper_padding)}:host([value-state="Information"][focused]:not([readonly])) .ui5-textarea-wrapper{background-color:var(--_ui5-v1-24-29_textarea_focused_value_state_information_background);border-color:var(--sapField_InformationColor)}:host([value-state="Information"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{border-width:var(--_ui5-v1-24-29_textarea_information_border_width);border-style:var(--_ui5-v1-24-29_textarea_error_warning_border_style)}:host([value-state="Information"]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_InformationShadow)}.ui5-textarea-exceeded-text{align-self:flex-end;padding:.125rem .125rem .5rem;color:var(--sapContent_LabelColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSmallSize)}:host([readonly]) .ui5-textarea-exceeded-text,:host([disabled]) .ui5-textarea-exceeded-text{display:none}:host .ui5-content-custom-scrollbars ::-webkit-scrollbar{border-top-right-radius:var(--sapField_BorderCornerRadius);border-bottom-right-radius:var(--sapField_BorderCornerRadius)}:host([value-state="Error"]) .ui5-content-custom-scrollbars ::-webkit-scrollbar{background-color:var(--sapScrollBar_TrackColor)}:host([value-state="Warning"]) .ui5-content-custom-scrollbars ::-webkit-scrollbar{background-color:var(--sapScrollBar_TrackColor)}:host([value-state="Information"]) .ui5-content-custom-scrollbars ::-webkit-scrollbar{background-color:var(--sapScrollBar_TrackColor)}:host([value-state="Success"]) .ui5-content-custom-scrollbars ::-webkit-scrollbar{background-color:var(--sapScrollBar_TrackColor)}:host([focused]) .ui5-content-custom-scrollbars ::-webkit-scrollbar{background-image:none}
`
};
var TextArea_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/TextArea.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TextArea_1;
var TextArea = TextArea_1 = class TextArea2 extends UI5Element_default {
  static onDefine() {
    return __async(this, null, function* () {
      TextArea_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  constructor() {
    super();
    this._firstRendering = true;
    this._openValueStateMsgPopover = false;
    this._fnOnResize = this._onResize.bind(this);
    this.previousValue = "";
  }
  onEnterDOM() {
    ResizeHandler_default.register(this, this._fnOnResize);
  }
  onExitDOM() {
    ResizeHandler_default.deregister(this, this._fnOnResize);
  }
  onBeforeRendering() {
    if (!this.value) {
      this.value = "";
    }
    this._exceededTextProps = this._calcExceededText();
    this._mirrorText = this._tokenizeText(this.value);
    this.exceeding = !!this._exceededTextProps.leftCharactersCount && this._exceededTextProps.leftCharactersCount < 0;
    this._setCSSParams();
    const FormSupport = getFeature("FormSupport");
    if (FormSupport) {
      FormSupport.syncNativeHiddenTextArea(this);
    } else if (this.name) {
      console.warn(`In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`);
    }
  }
  onAfterRendering() {
    const nativeTextArea = this.getInputDomRef();
    if (this.rows === 1) {
      nativeTextArea.setAttribute("rows", "1");
    } else {
      nativeTextArea.removeAttribute("rows");
    }
    this.toggleValueStateMessage(this.openValueStateMsgPopover);
    this._firstRendering = false;
  }
  getInputDomRef() {
    return this.getDomRef().querySelector("textarea");
  }
  _onkeydown(e) {
    this._keyDown = true;
    if (isEscape(e)) {
      const nativeTextArea = this.getInputDomRef();
      this.value = this.previousValue;
      nativeTextArea.value = this.value;
      this.fireEvent("input");
    }
  }
  _onkeyup() {
    this._keyDown = false;
  }
  _onfocusin() {
    this.focused = true;
    this._openValueStateMsgPopover = true;
    this.previousValue = this.getInputDomRef().value;
  }
  _onfocusout(e) {
    const eTarget = e.relatedTarget;
    const focusedOutToValueStateMessage = eTarget?.shadowRoot?.querySelector(".ui5-valuestatemessage-root");
    this.focused = false;
    if (!focusedOutToValueStateMessage) {
      this._openValueStateMsgPopover = false;
    }
  }
  _onchange() {
    this.fireEvent("change", {});
  }
  _onselect() {
    this.fireEvent("select", {});
  }
  _onscroll() {
    this.fireEvent("scroll", {});
  }
  _oninput(e) {
    const nativeTextArea = this.getInputDomRef();
    if (e.target === nativeTextArea) {
      e.stopImmediatePropagation();
    }
    this.value = nativeTextArea.value;
    const valueLength = this.value.length;
    if (e.inputType === "insertFromPaste" && this.maxlength && valueLength > this.maxlength) {
      nativeTextArea.setSelectionRange(this.maxlength, valueLength);
    }
    this.fireEvent("input", {});
    this.fireEvent("value-changed");
  }
  _onResize() {
    if (this.displayValueStateMessagePopover) {
      this._width = this.offsetWidth;
    }
  }
  _setCSSParams() {
    this.style.setProperty("--_textarea_rows", this.rows ? String(this.rows) : "2");
    this.style.setProperty("--_textarea_growing_max_lines", String(this.growingMaxLines));
  }
  toggleValueStateMessage(toggle) {
    if (toggle) {
      this.openPopover();
    } else {
      this.closePopover();
    }
  }
  openPopover() {
    return __async(this, null, function* () {
      this.valueStatePopover = yield this._getPopover();
      this.valueStatePopover && (yield this.valueStatePopover.showAt(this.shadowRoot.querySelector(".ui5-textarea-root .ui5-textarea-wrapper")));
    });
  }
  closePopover() {
    return __async(this, null, function* () {
      this.valueStatePopover = yield this._getPopover();
      this.valueStatePopover && this.valueStatePopover.close();
    });
  }
  _getPopover() {
    return __async(this, null, function* () {
      const staticAreaItem = yield this.getStaticAreaItemDomRef();
      return staticAreaItem.querySelector("[ui5-popover]");
    });
  }
  _tokenizeText(value) {
    const tokenizedText = value.replace(/&/gm, "&amp;").replace(/"/gm, "&quot;").replace(/'/gm, "&apos;").replace(/</gm, "<").replace(/>/gm, ">").split("\n");
    if (tokenizedText.length < this.rows) {
      return this._mapTokenizedTextToObject([...tokenizedText, ...Array(this.rows - tokenizedText.length).fill("")]);
    }
    return this._mapTokenizedTextToObject(tokenizedText);
  }
  _mapTokenizedTextToObject(tokenizedText) {
    return tokenizedText.map((token, index) => {
      return {
        text: token,
        last: index === tokenizedText.length - 1
      };
    });
  }
  _calcExceededText() {
    let calcedMaxLength, exceededText, leftCharactersCount;
    if (this.showExceededText) {
      const maxLength = this.maxlength;
      if (maxLength !== null && maxLength !== void 0) {
        leftCharactersCount = maxLength - this.value.length;
        if (leftCharactersCount >= 0) {
          exceededText = TextArea_1.i18nBundle.getText(TEXTAREA_CHARACTERS_LEFT, leftCharactersCount);
        } else {
          exceededText = TextArea_1.i18nBundle.getText(TEXTAREA_CHARACTERS_EXCEEDED, Math.abs(leftCharactersCount));
        }
      }
    } else {
      calcedMaxLength = this.maxlength;
    }
    return {
      exceededText,
      leftCharactersCount,
      calcedMaxLength
    };
  }
  get classes() {
    return {
      root: {
        "ui5-textarea-root": true,
        "ui5-content-custom-scrollbars": !!getEffectiveScrollbarStyle_default()
      },
      valueStateMsg: {
        "ui5-valuestatemessage-header": true,
        "ui5-valuestatemessage--error": this.valueState === ValueState_default.Error,
        "ui5-valuestatemessage--warning": this.valueState === ValueState_default.Warning,
        "ui5-valuestatemessage--information": this.valueState === ValueState_default.Information
      }
    };
  }
  get styles() {
    return {
      valueStateMsgPopover: {
        "max-width": `${this._width}px`
      }
    };
  }
  get tabIndex() {
    return this.disabled ? -1 : 0;
  }
  get ariaLabelText() {
    const effectiveAriaLabelText = getEffectiveAriaLabelText(this) || getAssociatedLabelForTexts(this);
    if (this.showExceededText) {
      if (effectiveAriaLabelText) {
        return effectiveAriaLabelText.concat(" ", this._exceededTextProps.exceededText);
      }
      return this._exceededTextProps.exceededText;
    }
    return effectiveAriaLabelText;
  }
  get ariaDescribedBy() {
    return this.hasValueState ? `${this._id}-valueStateDesc` : void 0;
  }
  get ariaValueStateHiddenText() {
    if (!this.hasValueState) {
      return;
    }
    if (this.valueState === ValueState_default.None) {
      return;
    }
    if (this.hasCustomValueState) {
      return `${this.valueStateTypeMappings[this.valueState]}`.concat(" ", this.valueStateMessageText.map((el) => el.textContent).join(" "));
    }
    return `${this.valueStateTypeMappings[this.valueState]} ${this.valueStateDefaultText}`;
  }
  get valueStateDefaultText() {
    if (this.valueState !== ValueState_default.None) {
      return this.valueStateTextMappings[this.valueState];
    }
    return "";
  }
  get ariaInvalid() {
    return this.valueState === "Error" ? "true" : null;
  }
  get openValueStateMsgPopover() {
    return !this._firstRendering && this._openValueStateMsgPopover && this.displayValueStateMessagePopover;
  }
  get displayValueStateMessagePopover() {
    return !this.readonly && (this.hasCustomValueState || this.hasValueState);
  }
  get hasCustomValueState() {
    return !!this.valueStateMessage.length && this.hasValueState;
  }
  get hasValueState() {
    return this.valueState === ValueState_default.Error || this.valueState === ValueState_default.Warning || this.valueState === ValueState_default.Information;
  }
  get valueStateMessageText() {
    return this.valueStateMessage.map((x) => x.cloneNode(true));
  }
  get _valueStatePopoverHorizontalAlign() {
    return this.effectiveDir !== "rtl" ? "Left" : "Right";
  }
  /**
   * This method is relevant for sap_horizon theme only
   */
  get _valueStateMessageIcon() {
    const iconPerValueState = {
      Error: "error",
      Warning: "alert",
      Success: "sys-enter-2",
      Information: "information"
    };
    return this.valueState !== ValueState_default.None ? iconPerValueState[this.valueState] : "";
  }
  get valueStateTextMappings() {
    return {
      "Success": TextArea_1.i18nBundle.getText(VALUE_STATE_SUCCESS),
      "Information": TextArea_1.i18nBundle.getText(VALUE_STATE_INFORMATION),
      "Error": TextArea_1.i18nBundle.getText(VALUE_STATE_ERROR),
      "Warning": TextArea_1.i18nBundle.getText(VALUE_STATE_WARNING)
    };
  }
  get valueStateTypeMappings() {
    return {
      "Success": TextArea_1.i18nBundle.getText(VALUE_STATE_TYPE_SUCCESS),
      "Information": TextArea_1.i18nBundle.getText(VALUE_STATE_TYPE_INFORMATION),
      "Error": TextArea_1.i18nBundle.getText(VALUE_STATE_TYPE_ERROR),
      "Warning": TextArea_1.i18nBundle.getText(VALUE_STATE_TYPE_WARNING)
    };
  }
};
__decorate([property_default()], TextArea.prototype, "value", void 0);
__decorate([property_default({
  type: Boolean
})], TextArea.prototype, "disabled", void 0);
__decorate([property_default({
  type: Boolean
})], TextArea.prototype, "readonly", void 0);
__decorate([property_default({
  type: Boolean
})], TextArea.prototype, "required", void 0);
__decorate([property_default()], TextArea.prototype, "placeholder", void 0);
__decorate([property_default({
  type: ValueState_default,
  defaultValue: ValueState_default.None
})], TextArea.prototype, "valueState", void 0);
__decorate([property_default({
  validator: Integer_default,
  defaultValue: 0
})], TextArea.prototype, "rows", void 0);
__decorate([property_default({
  validator: Integer_default
})], TextArea.prototype, "maxlength", void 0);
__decorate([property_default({
  type: Boolean
})], TextArea.prototype, "showExceededText", void 0);
__decorate([property_default({
  type: Boolean
})], TextArea.prototype, "growing", void 0);
__decorate([property_default({
  validator: Integer_default,
  defaultValue: 0
})], TextArea.prototype, "growingMaxLines", void 0);
__decorate([property_default()], TextArea.prototype, "name", void 0);
__decorate([property_default()], TextArea.prototype, "accessibleName", void 0);
__decorate([property_default()], TextArea.prototype, "accessibleNameRef", void 0);
__decorate([property_default({
  type: Boolean
})], TextArea.prototype, "focused", void 0);
__decorate([property_default({
  type: Boolean
})], TextArea.prototype, "exceeding", void 0);
__decorate([property_default({
  type: Object,
  multiple: true
})], TextArea.prototype, "_mirrorText", void 0);
__decorate([property_default({
  noAttribute: true
})], TextArea.prototype, "_maxHeight", void 0);
__decorate([property_default({
  validator: Integer_default
})], TextArea.prototype, "_width", void 0);
__decorate([slot_default()], TextArea.prototype, "valueStateMessage", void 0);
__decorate([slot_default()], TextArea.prototype, "formSupport", void 0);
TextArea = TextArea_1 = __decorate([
  customElement_default({
    tag: "ui5-textarea",
    languageAware: true,
    styles: [getEffectiveScrollbarStyle_default(), TextArea_css_default],
    renderer: LitRenderer_default,
    template: TextAreaTemplate_lit_default,
    staticAreaTemplate: TextAreaPopoverTemplate_lit_default,
    staticAreaStyles: ValueStateMessage_css_default,
    dependencies: [Popover_default, Icon_default]
  }),
  event_default("change"),
  event_default("input"),
  event_default("select"),
  event_default("scroll")
], TextArea);
TextArea.define();
var TextArea_default = TextArea;
export {
  TextArea_default as default
};
//# sourceMappingURL=@ui5_webcomponents_dist_TextArea__js.js.map
