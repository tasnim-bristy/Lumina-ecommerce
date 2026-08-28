import "./chunk-HFFNPAU7.js";
import "./chunk-OQHTKXE6.js";
import {
  Icon_default,
  event_default
} from "./chunk-U3UACDRZ.js";
import {
  willShowContent_default
} from "./chunk-KZFZS4LL.js";
import {
  WrappingType_default
} from "./chunk-GL7BVVNJ.js";
import {
  BADGE_DESCRIPTION_BADGE,
  BADGE_DESCRIPTION_TAG,
  BADGE_ERROR,
  BADGE_INFORMATION,
  BADGE_ROLE_DESCRIPTION,
  BADGE_SUCCESS,
  BADGE_WARNING
} from "./chunk-MKUK4J7G.js";
import {
  LitRenderer_default,
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
import {
  registerIcon
} from "./chunk-3YXAI4SY.js";
import {
  getI18nBundle
} from "./chunk-CQWP6VSU.js";
import {
  isLegacyThemeFamily,
  registerThemePropertiesLoader
} from "./chunk-JASJJZVS.js";
import "./chunk-XQ36JZLT.js";
import {
  __async
} from "./chunk-5K356HEJ.js";

// node_modules/@ui5/webcomponents-icons/dist/v4/sys-help-2.js
var name = "sys-help-2";
var pathData = "M256 0q53 0 99.5 20T437 74.5t55 81.5 20 100-20 99.5-55 81.5-81.5 55-99.5 20-100-20-81.5-55T20 355.5 0 256t20-100 54.5-81.5T156 20 256 0zm-5 425q15 0 26-11t11-26-11-25.5-26-10.5-25.5 10.5T215 388t10.5 26 25.5 11zm101-239q0-32-27-57t-77-25q-46 0-72.5 24T146 187h52q5-24 17.5-32.5T251 146t35 12.5 12 27.5q0 10-2.5 14T282 215l-20 17q-15 12-23 21t-11.5 18.5-4.5 21-1 27.5h50q0-12 .5-19t3-12.5T283 278t15-13l27-25 16-18 9-16z";
var ltr = true;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, {
  pathData,
  ltr,
  collection,
  packageName
});

// node_modules/@ui5/webcomponents-icons/dist/v5/sys-help-2.js
var name2 = "sys-help-2";
var pathData2 = "M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm32 289q31-10 50.5-36.5T358 192q0-43-29.5-72.5T256 90q-21 0-39.5 8T184 118.5 162 148t-8 35q0 20 9 30.5t23 10.5q13 0 22.5-9t9.5-23q0-16 11-27t27-11 27 11 11 27-11 27-27 11q-14 0-23 9.5t-9 22.5v26q0 14 9 23t23 9q13 0 22-9t10-22zm-32 127q14 0 23-9t9-23-9-23-23-9-23 9-9 23 9 23 23 9z";
var ltr2 = true;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, {
  pathData: pathData2,
  ltr: ltr2,
  collection: collection2,
  packageName: packageName2
});

// node_modules/@ui5/webcomponents-icons/dist/sys-help-2.js
var pathData3 = isLegacyThemeFamily() ? pathData : pathData2;

// node_modules/@ui5/webcomponents/dist/types/BadgeDesign.js
var BadgeDesign;
(function(BadgeDesign2) {
  BadgeDesign2["Set1"] = "Set1";
  BadgeDesign2["Set2"] = "Set2";
  BadgeDesign2["Set3"] = "Set3";
  BadgeDesign2["Neutral"] = "Neutral";
  BadgeDesign2["Information"] = "Information";
  BadgeDesign2["Positive"] = "Positive";
  BadgeDesign2["Negative"] = "Negative";
  BadgeDesign2["Critical"] = "Critical";
})(BadgeDesign || (BadgeDesign = {}));
var BadgeDesign_default = BadgeDesign;

// node_modules/@ui5/webcomponents/dist/generated/templates/BadgeTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`${this.interactive ? block1.call(this, context, tags, suffix) : block4.call(this, context, tags, suffix)} `;
}
function block1(context, tags, suffix) {
  return effectiveHtml`<button class="ui5-badge-root" title="${ifDefined(this._title)}" aria-roledescription="${ifDefined(this._roleDescription)}" aria-description="${ifDefined(this._valueState)}" @onclick=${this._onclick}><slot name="icon"></slot>${this._semanticIconName ? block2.call(this, context, tags, suffix) : void 0}<span class="ui5-hidden-text">${ifDefined(this.badgeDescription)}</span>${this.hasText ? block3.call(this, context, tags, suffix) : void 0}</button>`;
}
function block2(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-badge-semantic-icon" name="${ifDefined(this._semanticIconName)}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-badge-semantic-icon" name="${ifDefined(this._semanticIconName)}"></ui5-icon>`;
}
function block3(context, tags, suffix) {
  return effectiveHtml`<span class="ui5-badge-text"><bdi><slot></slot></bdi></span>`;
}
function block4(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-badge-root" title="${ifDefined(this._title)}"><slot name="icon"></slot>${this._semanticIconName ? block5.call(this, context, tags, suffix) : void 0}<span class="ui5-hidden-text">${ifDefined(this.badgeDescription)}</span>${this.hasText ? block6.call(this, context, tags, suffix) : void 0}</div>`;
}
function block5(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-badge-semantic-icon" name="${ifDefined(this._semanticIconName)}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-badge-semantic-icon" name="${ifDefined(this._semanticIconName)}"></ui5-icon>`;
}
function block6(context, tags, suffix) {
  return effectiveHtml`<span class="ui5-badge-text"><bdi><slot></slot></bdi></span>`;
}
var BadgeTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/Badge.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/Badge.css.ts",
  content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block}:host{font-size:var(--_ui5-v1-24-29-badge-font-size);font-family:var(--_ui5-v1-24-29-badge-font);font-weight:var(--_ui5-v1-24-29-badge-font-weight);letter-spacing:var(--_ui5-v1-24-29-badge-letter-spacing)}:host([_is-tag-design]){font-family:var(--sapFontBoldFamily);font-size:var(--sapFontSmallSize)}.ui5-badge-root{display:flex;align-items:center;justify-content:center;width:100%;min-width:1.125em;max-width:100%;min-height:var(--_ui5-v1-24-29-badge-height);height:var(--_ui5-v1-24-29-badge-height);box-sizing:border-box;padding:0 var(--_ui5-v1-24-29-badge-padding-inline);border:var(--_ui5-v1-24-29-badge-border);border-radius:var(--_ui5-v1-24-29-badge-border-radius);white-space:nowrap;font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit;letter-spacing:inherit}:host([_is-tag-design]) .ui5-badge-root{padding:0 .25rem;border:.0625rem solid;border-radius:var(--sapButton_BorderCornerRadius)}:host([_is-tag-design][interactive]) .ui5-badge-root:active{text-shadow:var(--ui5-v1-24-29-badge-text-shadow)}:host([interactive]) .ui5-badge-root{cursor:pointer}:host([interactive]) .ui5-badge-root:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:1px}:host([wrapping-type="Normal"]) .ui5-badge-root{white-space:normal;height:auto}:host([_icon-only]) .ui5-badge-root{padding-inline:var(--_ui5-v1-24-29-badge-padding-inline-icon-only)}.ui5-badge-text{text-transform:var(--_ui5-v1-24-29-badge-text-transform);text-align:start;pointer-events:none;overflow:hidden;text-overflow:ellipsis}:host([_has-icon]) .ui5-badge-text{padding-inline-start:var(--_ui5-v1-24-29-badge-icon-gap)}[ui5-icon],::slotted([ui5-icon]){width:var(--_ui5-v1-24-29-badge-icon-width);min-width:var(--_ui5-v1-24-29-badge-icon-width);height:var(--_ui5-v1-24-29-badge-height);min-height:var(--_ui5-v1-24-29-badge-height);color:inherit;pointer-events:none}:host([wrapping-type="Normal"]) [ui5-icon],:host([wrapping-type="Normal"]) ::slotted([ui5-icon]){align-self:flex-start}.ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-color-scheme-1-background);border-color:var(--ui5-v1-24-29-badge-color-scheme-1-border);color:var(--ui5-v1-24-29-badge-color-scheme-1-color)}:host([color-scheme="2"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-color-scheme-2-background);border-color:var(--ui5-v1-24-29-badge-color-scheme-2-border);color:var(--ui5-v1-24-29-badge-color-scheme-2-color)}:host([color-scheme="3"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-color-scheme-3-background);border-color:var(--ui5-v1-24-29-badge-color-scheme-3-border);color:var(--ui5-v1-24-29-badge-color-scheme-3-color)}:host([color-scheme="4"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-color-scheme-4-background);border-color:var(--ui5-v1-24-29-badge-color-scheme-4-border);color:var(--ui5-v1-24-29-badge-color-scheme-4-color)}:host([color-scheme="5"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-color-scheme-5-background);border-color:var(--ui5-v1-24-29-badge-color-scheme-5-border);color:var(--ui5-v1-24-29-badge-color-scheme-5-color)}:host([color-scheme="6"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-color-scheme-6-background);border-color:var(--ui5-v1-24-29-badge-color-scheme-6-border);color:var(--ui5-v1-24-29-badge-color-scheme-6-color)}:host([color-scheme="7"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-color-scheme-7-background);border-color:var(--ui5-v1-24-29-badge-color-scheme-7-border);color:var(--ui5-v1-24-29-badge-color-scheme-7-color)}:host([color-scheme="8"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-color-scheme-8-background);border-color:var(--ui5-v1-24-29-badge-color-scheme-8-border);color:var(--ui5-v1-24-29-badge-color-scheme-8-color)}:host([color-scheme="9"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-color-scheme-9-background);border-color:var(--ui5-v1-24-29-badge-color-scheme-9-border);color:var(--ui5-v1-24-29-badge-color-scheme-9-color)}:host([color-scheme="10"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-color-scheme-10-background);border-color:var(--ui5-v1-24-29-badge-color-scheme-10-border);color:var(--ui5-v1-24-29-badge-color-scheme-10-color)}:host([design="Neutral"]) .ui5-badge-root{background-color:var(--sapNeutralBackground);border-color:var(--sapNeutralBorderColor);color:var(--sapTextColor);text-shadow:var(--ui5-v1-24-29-badge-text-shadow)}:host([interactive][design="Neutral"]) .ui5-badge-root:hover{background-color:var(--sapButton_Neutral_Hover_Background);border-color:var(--sapButton_Neutral_Hover_BorderColor);color:var(--sapButton_Neutral_Hover_TextColor)}:host([interactive][design="Neutral"]) .ui5-badge-root:active{background-color:var(--sapButton_Neutral_Active_Background);border-color:var(--sapButton_Neutral_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([design="Positive"]) .ui5-badge-root{background-color:var(--sapButton_Success_Background);border-color:var(--sapButton_Success_BorderColor);color:var(--sapButton_Success_TextColor);text-shadow:var(--ui5-v1-24-29-badge-contrast-text-shadow)}:host([interactive][design="Positive"]) .ui5-badge-root:hover{background-color:var(--sapButton_Success_Hover_Background);border-color:var(--sapButton_Success_Hover_BorderColor);color:var(--sapButton_Success_Hover_TextColor)}:host([interactive][design="Positive"]) .ui5-badge-root:active{background-color:var(--sapButton_Success_Active_Background);border-color:var(--sapButton_Success_Active_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design="Negative"]) .ui5-badge-root{background-color:var(--sapButton_Negative_Background);border-color:var(--sapButton_Negative_BorderColor);color:var(--sapButton_Negative_TextColor);text-shadow:var(--ui5-v1-24-29-badge-contrast-text-shadow)}:host([interactive][design="Negative"]) .ui5-badge-root:hover{background-color:var(--sapButton_Negative_Hover_Background);border-color:var(--sapButton_Negative_Hover_BorderColor);color:var(--sapButton_Negative_Hover_TextColor)}:host([interactive][design="Negative"]) .ui5-badge-root:active{background-color:var(--sapButton_Negative_Active_Background);border-color:var(--sapButton_Negative_Active_BorderColor);color:var(--sapButton_Reject_Selected_TextColor)}:host([design="Critical"]) .ui5-badge-root{background-color:var(--sapButton_Critical_Background);border-color:var(--sapButton_Critical_BorderColor);color:var(--sapButton_Critical_TextColor);text-shadow:var(--ui5-v1-24-29-badge-contrast-text-shadow)}:host([interactive][design="Critical"]) .ui5-badge-root:hover{background-color:var(--sapButton_Critical_Hover_Background);border-color:var(--sapButton_Critical_Hover_BorderColor);color:var(--sapButton_Critical_Hover_TextColor)}:host([interactive][design="Critical"]) .ui5-badge-root:active{background-color:var(--sapButton_Critical_Active_Background);border-color:var(--sapButton_Critical_Active_BorderColor);color:var(--sapButton_Attention_Selected_TextColor)}:host([design="Information"]) .ui5-badge-root{background-color:var(--sapButton_Information_Background);border-color:var(--sapButton_Information_BorderColor);color:var(--sapButton_Information_TextColor);text-shadow:var(--ui5-v1-24-29-badge-text-shadow)}:host([interactive][design="Information"]) .ui5-badge-root:hover{background-color:var(--sapButton_Information_Hover_Background);border-color:var(--sapButton_Information_Hover_BorderColor);color:var(--sapButton_Information_Hover_TextColor)}:host([interactive][design="Information"]) .ui5-badge-root:active{background-color:var(--sapButton_Information_Active_Background);border-color:var(--sapButton_Information_Active_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([design="Set1"]) .ui5-badge-root{text-shadow:var(--ui5-v1-24-29-badge-contrast-text-shadow)}:host([design="Set1"]) .ui5-badge-root{background-color:var(--sapIndicationColor_1_Background);border-color:var(--sapIndicationColor_1_BorderColor);color:var(--sapIndicationColor_1_TextColor)}:host([interactive][design="Set1"]) .ui5-badge-root:hover{background-color:var(--sapIndicationColor_1_Hover_Background)}:host([interactive][design="Set1"]) .ui5-badge-root:active{background-color:var(--sapIndicationColor_1_Active_Background);border-color:var(--sapIndicationColor_1_Active_BorderColor);color:var(--sapIndicationColor_1_Active_TextColor)}:host([design="Set1"][color-scheme="2"]) .ui5-badge-root{background-color:var(--sapIndicationColor_2_Background);border-color:var(--sapIndicationColor_2_BorderColor);color:var(--sapIndicationColor_2_TextColor)}:host([interactive][design="Set1"][color-scheme="2"]) .ui5-badge-root:hover{background-color:var(--sapIndicationColor_2_Hover_Background)}:host([interactive][design="Set1"][color-scheme="2"]) .ui5-badge-root:active{background-color:var(--sapIndicationColor_2_Active_Background);border-color:var(--sapIndicationColor_2_Active_BorderColor);color:var(--sapIndicationColor_2_Active_TextColor)}:host([design="Set1"][color-scheme="3"]) .ui5-badge-root{background-color:var(--sapIndicationColor_3_Background);border-color:var(--sapIndicationColor_3_BorderColor);color:var(--sapIndicationColor_3_TextColor)}:host([interactive][design="Set1"][color-scheme="3"]) .ui5-badge-root:hover{background-color:var(--sapIndicationColor_3_Hover_Background)}:host([interactive][design="Set1"][color-scheme="3"]) .ui5-badge-root:active{background-color:var(--sapIndicationColor_3_Active_Background);border-color:var(--sapIndicationColor_3_Active_BorderColor);color:var(--sapIndicationColor_3_Active_TextColor)}:host([design="Set1"][color-scheme="4"]) .ui5-badge-root{background-color:var(--sapIndicationColor_4_Background);border-color:var(--sapIndicationColor_4_BorderColor);color:var(--sapIndicationColor_4_TextColor)}:host([interactive][design="Set1"][color-scheme="4"]) .ui5-badge-root:hover{background-color:var(--sapIndicationColor_4_Hover_Background)}:host([interactive][design="Set1"][color-scheme="4"]) .ui5-badge-root:active{background-color:var(--sapIndicationColor_4_Active_Background);border-color:var(--sapIndicationColor_4_Active_BorderColor);color:var(--sapIndicationColor_4_Active_TextColor)}:host([design="Set1"][color-scheme="5"]) .ui5-badge-root{background-color:var(--sapIndicationColor_5_Background);border-color:var(--sapIndicationColor_5_BorderColor);color:var(--sapIndicationColor_5_TextColor)}:host([interactive][design="Set1"][color-scheme="5"]) .ui5-badge-root:hover{background-color:var(--sapIndicationColor_5_Hover_Background)}:host([interactive][design="Set1"][color-scheme="5"]) .ui5-badge-root:active{background-color:var(--sapIndicationColor_5_Active_Background);border-color:var(--sapIndicationColor_5_Active_BorderColor);color:var(--sapIndicationColor_5_Active_TextColor)}:host([design="Set1"][color-scheme="6"]) .ui5-badge-root{background-color:var(--sapIndicationColor_6_Background);border-color:var(--sapIndicationColor_6_BorderColor);color:var(--sapIndicationColor_6_TextColor)}:host([interactive][design="Set1"][color-scheme="6"]) .ui5-badge-root:hover{background-color:var(--sapIndicationColor_6_Hover_Background)}:host([interactive][design="Set1"][color-scheme="6"]) .ui5-badge-root:active{background-color:var(--sapIndicationColor_6_Active_Background);border-color:var(--sapIndicationColor_6_Active_BorderColor);color:var(--sapIndicationColor_6_Active_TextColor)}:host([design="Set1"][color-scheme="7"]) .ui5-badge-root{background-color:var(--sapIndicationColor_7_Background);border-color:var(--sapIndicationColor_7_BorderColor);color:var(--sapIndicationColor_7_TextColor)}:host([interactive][design="Set1"][color-scheme="7"]) .ui5-badge-root:hover{background-color:var(--sapIndicationColor_7_Hover_Background)}:host([interactive][design="Set1"][color-scheme="7"]) .ui5-badge-root:active{background-color:var(--sapIndicationColor_7_Active_Background);border-color:var(--sapIndicationColor_7_Active_BorderColor);color:var(--sapIndicationColor_7_Active_TextColor)}:host([design="Set1"][color-scheme="8"]) .ui5-badge-root{background-color:var(--sapIndicationColor_8_Background);border-color:var(--sapIndicationColor_8_BorderColor);color:var(--sapIndicationColor_8_TextColor)}:host([interactive][design="Set1"][color-scheme="8"]) .ui5-badge-root:hover{background-color:var(--sapIndicationColor_8_Hover_Background)}:host([interactive][design="Set1"][color-scheme="8"]) .ui5-badge-root:active{background-color:var(--sapIndicationColor_8_Active_Background);border-color:var(--sapIndicationColor_8_Active_BorderColor);color:var(--sapIndicationColor_8_Active_TextColor)}:host([design="Set1"][color-scheme="9"]) .ui5-badge-root{background-color:var(--sapIndicationColor_9_Background);border-color:var(--sapIndicationColor_9_BorderColor);color:var(--sapIndicationColor_9_TextColor)}:host([interactive][design="Set1"][color-scheme="9"]) .ui5-badge-root:hover{background-color:var(--sapIndicationColor_9_Hover_Background)}:host([interactive][design="Set1"][color-scheme="9"]) .ui5-badge-root:active{background-color:var(--sapIndicationColor_9_Active_Background);border-color:var(--sapIndicationColor_9_Active_BorderColor);color:var(--sapIndicationColor_9_Active_TextColor)}:host([design="Set1"][color-scheme="10"]) .ui5-badge-root{background-color:var(--sapIndicationColor_10_Background);border-color:var(--sapIndicationColor_10_BorderColor);color:var(--sapIndicationColor_10_TextColor)}:host([interactive][design="Set1"][color-scheme="10"]) .ui5-badge-root:hover{background-color:var(--sapIndicationColor_10_Hover_Background)}:host([interactive][design="Set1"][color-scheme="10"]) .ui5-badge-root:active{background-color:var(--sapIndicationColor_10_Active_Background);border-color:var(--sapIndicationColor_10_Active_BorderColor);color:var(--sapIndicationColor_10_Active_TextColor)}:host([design="Set2"]) .ui5-badge-root{text-shadow:var(--ui5-v1-24-29-badge-text-shadow)}:host([design="Set2"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-1-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-1-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-1-color)}:host([interactive][design="Set2"]) .ui5-badge-root:hover{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-1-hover-background)}:host([interactive][design="Set2"]) .ui5-badge-root:active{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-1-active-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-1-active-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-1-active-color)}:host([design="Set2"][color-scheme="2"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-2-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-2-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-2-color)}:host([design="Set2"][color-scheme="3"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-3-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-3-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-3-color)}:host([interactive][design="Set2"][color-scheme="3"]) .ui5-badge-root:hover{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-3-hover-background)}:host([interactive][design="Set2"][color-scheme="3"]) .ui5-badge-root:active{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-3-active-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-3-active-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-3-active-color)}:host([design="Set2"][color-scheme="4"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-4-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-4-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-4-color)}:host([interactive][design="Set2"][color-scheme="4"]) .ui5-badge-root:hover{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-4-hover-background)}:host([interactive][design="Set2"][color-scheme="4"]) .ui5-badge-root:active{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-4-active-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-4-active-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-4-active-color)}:host([design="Set2"][color-scheme="5"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-5-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-5-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-5-color)}:host([interactive][design="Set2"][color-scheme="5"]) .ui5-badge-root:hover{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-5-hover-background)}:host([interactive][design="Set2"][color-scheme="5"]) .ui5-badge-root:active{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-5-active-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-5-active-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-5-active-color)}:host([design="Set2"][color-scheme="6"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-6-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-6-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-6-color)}:host([interactive][design="Set2"][color-scheme="6"]) .ui5-badge-root:hover{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-6-hover-background)}:host([interactive][design="Set2"][color-scheme="6"]) .ui5-badge-root:active{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-6-active-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-6-active-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-6-active-color)}:host([design="Set2"][color-scheme="7"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-7-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-7-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-7-color)}:host([interactive][design="Set2"][color-scheme="7"]) .ui5-badge-root:hover{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-7-hover-background)}:host([interactive][design="Set2"][color-scheme="7"]) .ui5-badge-root:active{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-7-active-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-7-active-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-7-active-color)}:host([design="Set2"][color-scheme="8"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-8-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-8-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-8-color)}:host([interactive][design="Set2"][color-scheme="8"]) .ui5-badge-root:hover{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-8-hover-background)}:host([interactive][design="Set2"][color-scheme="8"]) .ui5-badge-root:active{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-8-active-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-8-active-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-8-active-color)}:host([design="Set2"][color-scheme="9"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-9-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-9-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-9-color)}:host([interactive][design="Set2"][color-scheme="10"]) .ui5-badge-root:hover{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-10-hover-background)}:host([interactive][design="Set2"][color-scheme="10"]) .ui5-badge-root:active{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-10-active-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-10-active-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-10-active-color)}:host([design="Set2"][color-scheme="10"]) .ui5-badge-root{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-10-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-10-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-10-color)}:host([interactive][design="Set2"][color-scheme="2"]) .ui5-badge-root:hover{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-2-hover-background)}:host([interactive][design="Set2"][color-scheme="2"]) .ui5-badge-root:active{background-color:var(--ui5-v1-24-29-badge-set2-color-scheme-2-active-background);border-color:var(--ui5-v1-24-29-badge-set2-color-scheme-2-active-border);color:var(--ui5-v1-24-29-badge-set2-color-scheme-2-active-color)}
`
};
var Badge_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/Badge.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Badge_1;
var Badge = Badge_1 = class Badge2 extends UI5Element_default {
  static onDefine() {
    return __async(this, null, function* () {
      Badge_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  onBeforeRendering() {
    this._hasIcon = this.hasIcon || !!this._semanticIconName;
    this._iconOnly = this.iconOnly;
    this._isTagDesign = this.design !== BadgeDesign_default.Set3;
  }
  get _roleDescription() {
    return Badge_1.i18nBundle.getText(BADGE_ROLE_DESCRIPTION);
  }
  get _valueState() {
    switch (this.design) {
      case BadgeDesign_default.Positive:
        return Badge_1.i18nBundle.getText(BADGE_SUCCESS);
      case BadgeDesign_default.Negative:
        return Badge_1.i18nBundle.getText(BADGE_ERROR);
      case BadgeDesign_default.Critical:
        return Badge_1.i18nBundle.getText(BADGE_WARNING);
      case BadgeDesign_default.Information:
        return Badge_1.i18nBundle.getText(BADGE_INFORMATION);
    }
    return void 0;
  }
  get hasText() {
    return willShowContent_default(this.text);
  }
  get hasIcon() {
    return !!this.icon.length;
  }
  get iconOnly() {
    return this.hasIcon && !this.hasText;
  }
  get _title() {
    return this.title || void 0;
  }
  get badgeDescription() {
    if (this.interactive) {
      return void 0;
    }
    if (this.design === BadgeDesign_default.Set3) {
      return Badge_1.i18nBundle.getText(BADGE_DESCRIPTION_BADGE);
    }
    const valueState = this._valueState;
    let description = Badge_1.i18nBundle.getText(BADGE_DESCRIPTION_TAG);
    if (valueState) {
      description = `${description} ${valueState}`;
    }
    return description;
  }
  get _semanticIconName() {
    if (this.hideStateIcon || this.hasIcon) {
      return null;
    }
    switch (this.design) {
      case BadgeDesign_default.Neutral:
        return "sys-help-2";
      case BadgeDesign_default.Positive:
        return "sys-enter-2";
      case BadgeDesign_default.Negative:
        return "error";
      case BadgeDesign_default.Critical:
        return "alert";
      case BadgeDesign_default.Information:
        return "information";
      default:
        return null;
    }
  }
  _onclick() {
    this.fireEvent("click");
  }
};
__decorate([property_default({
  defaultValue: BadgeDesign_default.Set3
})], Badge.prototype, "design", void 0);
__decorate([property_default({
  defaultValue: "1"
})], Badge.prototype, "colorScheme", void 0);
__decorate([property_default({
  type: Boolean
})], Badge.prototype, "hideStateIcon", void 0);
__decorate([property_default({
  type: Boolean
})], Badge.prototype, "interactive", void 0);
__decorate([property_default({
  type: WrappingType_default,
  defaultValue: WrappingType_default.None
})], Badge.prototype, "wrappingType", void 0);
__decorate([property_default({
  type: Boolean
})], Badge.prototype, "_hasIcon", void 0);
__decorate([property_default({
  type: Boolean
})], Badge.prototype, "_iconOnly", void 0);
__decorate([property_default({
  type: Boolean
})], Badge.prototype, "_isTagDesign", void 0);
__decorate([slot_default({
  type: Node,
  "default": true
})], Badge.prototype, "text", void 0);
__decorate([slot_default()], Badge.prototype, "icon", void 0);
Badge = Badge_1 = __decorate([
  customElement_default({
    tag: "ui5-badge",
    languageAware: true,
    renderer: LitRenderer_default,
    template: BadgeTemplate_lit_default,
    styles: Badge_css_default,
    dependencies: [Icon_default]
  }),
  event_default("click")
], Badge);
Badge.define();
var Badge_default = Badge;
export {
  Badge_default as default
};
//# sourceMappingURL=@ui5_webcomponents_dist_Badge__js.js.map
