import {
  ListItemBase_default,
  ListItemType_default,
  List_default,
  ResponsivePopoverCommon_css_default,
  ResponsivePopover_default,
  StandardListItem_default
} from "./chunk-RUXVCBSH.js";
import {
  Popover_default,
  ValueStateMessage_css_default,
  getActiveElement_default
} from "./chunk-LXXNVKH3.js";
import "./chunk-RCZNXPIT.js";
import {
  Integer_default
} from "./chunk-YJ42QTVF.js";
import "./chunk-JVUWA325.js";
import {
  ValueState_default
} from "./chunk-3GUSYCCY.js";
import "./chunk-3RWPAGCA.js";
import "./chunk-GL7BVVNJ.js";
import "./chunk-IV4B6FMY.js";
import "./chunk-VO2NJHAL.js";
import {
  Button_default
} from "./chunk-FDVN5BN6.js";
import "./chunk-BFT4H3DB.js";
import "./chunk-KZFZS4LL.js";
import {
  deregisterUI5Element,
  getAllAccessibleNameRefTexts,
  getAssociatedLabelForTexts,
  registerUI5Element
} from "./chunk-BY3NBTSA.js";
import "./chunk-FASRCGJ2.js";
import {
  ResizeHandler_default
} from "./chunk-FMNTYMAV.js";
import "./chunk-P63L4E64.js";
import {
  GROUP_HEADER_TEXT,
  INPUT_AVALIABLE_VALUES,
  INPUT_CLEAR_ICON_ACC_NAME,
  INPUT_SUGGESTIONS,
  INPUT_SUGGESTIONS_MORE_HITS,
  INPUT_SUGGESTIONS_NO_HIT,
  INPUT_SUGGESTIONS_ONE_HIT,
  INPUT_SUGGESTIONS_TITLE,
  LIST_ITEM_GROUP_HEADER,
  LIST_ITEM_POSITION,
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
  isBackSpace,
  isDelete,
  isDown,
  isEnd,
  isEnter,
  isEscape,
  isHome,
  isPageDown,
  isPageUp,
  isSpace,
  isTabNext,
  isUp,
  parameters_bundle_css_default,
  parameters_bundle_css_default2,
  repeat,
  scopeTag,
  styleMap,
  unsafeHTML
} from "./chunk-S2KYTLGV.js";
import {
  slot_default
} from "./chunk-SRQLSZPJ.js";
import {
  UI5Element_default,
  customElement_default,
  getScopedVarName,
  property_default
} from "./chunk-45WMDHUI.js";
import "./chunk-XQ36JZLT.js";
import {
  registerIcon
} from "./chunk-45EM4FL4.js";
import {
  getI18nBundle
} from "./chunk-5RZ2QJVB.js";
import {
  getFeature,
  isAndroid,
  isLegacyThemeFamily,
  isPhone,
  registerFeature,
  registerThemePropertiesLoader
} from "./chunk-KIL2GIL2.js";
import {
  __async
} from "./chunk-5K356HEJ.js";

// node_modules/@ui5/webcomponents-base/dist/util/Caret.js
var getCaretPosition = (field) => {
  let caretPos = 0;
  if (field.selectionStart || field.selectionStart === 0) {
    caretPos = field.selectionDirection === "backward" ? field.selectionStart : field.selectionEnd;
  }
  return caretPos;
};
var setCaretPosition = (field, caretPos) => {
  if (field.selectionStart) {
    field.focus();
    field.setSelectionRange(caretPos, caretPos);
  } else {
    field.focus();
  }
};

// node_modules/@ui5/webcomponents-icons/dist/v4/not-editable.js
var name = "not-editable";
var pathData = "M443 104q5 7 5 12 0 6-5 11L118 453q-4 4-8 4L0 480l22-110q0-5 4-9L352 36q4-4 11-4t11 4zm-121 99l-46-45L52 381l46 46zm87-88l-46-44-64 64 45 45zm71 204l-63 64-65-64-33 32 66 63-66 66 33 32 65-66 63 66 32-32-66-66 66-63z";
var ltr = false;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, {
  pathData,
  ltr,
  collection,
  packageName
});

// node_modules/@ui5/webcomponents-icons/dist/v5/not-editable.js
var name2 = "not-editable";
var pathData2 = "M504 94q7 7 7 18t-7 18L130 505q-9 7-18 7H26q-11 0-18.5-7.5T0 486v-86q0-10 8-18L381 7q9-7 18-7 11 0 18 7zm-55 18l-50-50-50 50 50 50zm-86 86l-50-50L62 400l50 50zm142 270q7 7 7 18t-7.5 18.5T486 512t-18-7l-37-38-38 38q-7 7-18 7t-18.5-7.5T349 486q0-10 8-18l38-37-38-38q-8-8-8-18 0-11 7.5-18.5T375 349q10 0 18 8l38 37 37-37q8-8 18-8 11 0 18.5 7.5T512 375t-7 18l-38 38z";
var ltr2 = false;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, {
  pathData: pathData2,
  ltr: ltr2,
  collection: collection2,
  packageName: packageName2
});

// node_modules/@ui5/webcomponents-icons/dist/not-editable.js
var pathData3 = isLegacyThemeFamily() ? pathData : pathData2;

// node_modules/@ui5/webcomponents-base/dist/sap/base/strings/toHex.js
var fnToHex = function(iChar, iLength) {
  var sHex = iChar.toString(16);
  if (iLength) {
    sHex = sHex.padStart(iLength, "0");
  }
  return sHex;
};
var toHex_default = fnToHex;

// node_modules/@ui5/webcomponents-base/dist/sap/base/security/encodeXML.js
var rHtml = /[\x00-\x2b\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g;
var rHtmlReplace = /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]/;
var mHtmlLookup = {
  "<": "&lt;",
  ">": "&gt;",
  "&": "&amp;",
  '"': "&quot;"
};
var fnHtml = function(sChar) {
  var sEncoded = mHtmlLookup[sChar];
  if (!sEncoded) {
    if (rHtmlReplace.test(sChar)) {
      sEncoded = "&#xfffd;";
    } else {
      sEncoded = "&#x" + toHex_default(sChar.charCodeAt(0)) + ";";
    }
    mHtmlLookup[sChar] = sEncoded;
  }
  return sEncoded;
};
var fnEncodeXML = function(sString) {
  return sString.replace(rHtml, fnHtml);
};
var encodeXML_default = fnEncodeXML;

// node_modules/@ui5/webcomponents-base/dist/util/escapeRegex.js
var escapeRegex = (text) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
var escapeRegex_default = escapeRegex;

// node_modules/@ui5/webcomponents-base/dist/util/generateHighlightedMarkup.js
function replaceAll(text, find, replace, caseInsensitive) {
  return text.replaceAll(new RegExp(escapeRegex_default(find), `${caseInsensitive ? "i" : ""}g`), replace);
}
function generateHighlightedMarkup(text, textToHighlight) {
  if (!text || !textToHighlight) {
    return text;
  }
  const makeToken = (t) => {
    const [s, e] = t.split("");
    while (text.indexOf(t) >= 0 || textToHighlight.indexOf(t) >= 0) {
      t = `${s}${t}${e}`;
    }
    return t;
  };
  const openToken = makeToken("12");
  const closeToken = makeToken("34");
  let result = encodeXML_default(replaceAll(text, textToHighlight, (match) => `${openToken}${match}${closeToken}`, true));
  [[openToken, "<b>"], [closeToken, "</b>"]].forEach(([find, replace]) => {
    result = replaceAll(result, find, replace, false);
  });
  return result;
}
var generateHighlightedMarkup_default = generateHighlightedMarkup;

// node_modules/@ui5/webcomponents/dist/generated/templates/SuggestionListItemTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<li part="native-li" data-sap-focus-ref tabindex="${ifDefined(this._effectiveTabIndex)}" class="${classMap(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @mouseup="${this._onmouseup}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" @click="${this._onclick}" draggable="${ifDefined(this.movable)}" @dragstart="${this._ondragstart}" @dragend="${this._ondragend}" role="${ifDefined(this._accInfo.role)}" aria-expanded="${ifDefined(this._accInfo.ariaExpanded)}" title="${ifDefined(this._accInfo.tooltip)}" aria-level="${ifDefined(this._accInfo.ariaLevel)}" aria-haspopup="${ifDefined(this._accInfo.ariaHaspopup)}" aria-posinset="${ifDefined(this._accInfo.posinset)}" aria-roledescription="${ifDefined(this.accessibleRoleDescription)}" aria-setsize="${ifDefined(this._accInfo.setsize)}" aria-describedby="${ifDefined(this._id)}-invisibleText-describedby" aria-labelledby="${ifDefined(this._accessibleNameRef)}" aria-disabled="${ifDefined(this._ariaDisabled)}" aria-selected="${ifDefined(this._accInfo.ariaSelected)}" aria-checked="${ifDefined(this._accInfo.ariaChecked)}" aria-owns="${ifDefined(this._accInfo.ariaOwns)}">${this.placeSelectionElementBefore ? block1.call(this, context, tags, suffix) : void 0}${this._hasHighlightColor ? block7.call(this, context, tags, suffix) : void 0}<div part="content" id="${ifDefined(this._id)}-content" class="ui5-li-content">${this.hasImageContent ? block8.call(this, context, tags, suffix) : block9.call(this, context, tags, suffix)}${this.displayIconBegin ? block11.call(this, context, tags, suffix) : void 0}<div class="ui5-li-text-wrapper">${this.hasTitle ? block12.call(this, context, tags, suffix) : void 0}${this.hasDescription ? block13.call(this, context, tags, suffix) : void 0}${!this.typeActive ? block17.call(this, context, tags, suffix) : void 0}</div>${!this.hasDescription ? block18.call(this, context, tags, suffix) : void 0}</div>${this.displayIconEnd ? block20.call(this, context, tags, suffix) : void 0}${this.typeDetail ? block21.call(this, context, tags, suffix) : void 0}${this.typeNavigation ? block22.call(this, context, tags, suffix) : void 0}${this.navigated ? block23.call(this, context, tags, suffix) : void 0}${this.placeSelectionElementAfter ? block24.call(this, context, tags, suffix) : void 0}<span id="${ifDefined(this._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(this._accInfo.listItemAriaLabel)}${ifDefined(this.accessibleName)}</span><span id="${ifDefined(this._id)}-invisibleText-describedby" class="ui5-hidden-text">${ifDefined(this._accInfo.ariaSelectedText)}</span></li> `;
}
function block1(context, tags, suffix) {
  return effectiveHtml`${this.modeSingleSelect ? block2.call(this, context, tags, suffix) : void 0}${this.modeMultiSelect ? block3.call(this, context, tags, suffix) : void 0}${this.renderDeleteButton ? block4.call(this, context, tags, suffix) : void 0}`;
}
function block2(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-radio-button", tags, suffix)} part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${scopeTag("ui5-radio-button", tags, suffix)}>` : effectiveHtml`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`;
}
function block3(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-checkbox", tags, suffix)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${scopeTag("ui5-checkbox", tags, suffix)}>` : effectiveHtml`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`;
}
function block4(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot ? block5.call(this, context, tags, suffix) : block6.call(this, context, tags, suffix)}</div>`;
}
function block5(context, tags, suffix) {
  return effectiveHtml`<slot name="deleteButton"></slot>`;
}
function block6(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-button", tags, suffix)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></${scopeTag("ui5-button", tags, suffix)}>` : effectiveHtml`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></ui5-button>`;
}
function block7(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-highlight"></div>`;
}
function block8(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-imgContent"><slot name="imageContent"></slot></div>`;
}
function block9(context, tags, suffix) {
  return effectiveHtml`${this.displayImage ? block10.call(this, context, tags, suffix) : void 0}`;
}
function block10(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-avatar", tags, suffix)} shape="Square" class="ui5-li-img"><img src="${ifDefined(this.image)}" class="ui5-li-img-inner" /></${scopeTag("ui5-avatar", tags, suffix)}>` : effectiveHtml`<ui5-avatar shape="Square" class="ui5-li-img"><img src="${ifDefined(this.image)}" class="ui5-li-img-inner" /></ui5-avatar>`;
}
function block11(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} part="icon" name="${ifDefined(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon part="icon" name="${ifDefined(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`;
}
function block12(context, tags, suffix) {
  return effectiveHtml`<span part="title" class="ui5-li-title"><slot></slot></span>`;
}
function block13(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-description-info-wrapper"><span part="description" class="ui5-li-desc">${this.richDescription.length ? block14.call(this, context, tags, suffix) : block15.call(this, context, tags, suffix)}</span>${this.additionalText ? block16.call(this, context, tags, suffix) : void 0}</div>`;
}
function block14(context, tags, suffix) {
  return effectiveHtml`<slot name="richDescription"></slot>`;
}
function block15(context, tags, suffix) {
  return effectiveHtml`${ifDefined(this.description)}`;
}
function block16(context, tags, suffix) {
  return effectiveHtml`<span part="additional-text" class="ui5-li-additional-text">${ifDefined(this.additionalText)}</span>`;
}
function block17(context, tags, suffix) {
  return effectiveHtml`<span class="ui5-hidden-text">${ifDefined(this.type)}</span>`;
}
function block18(context, tags, suffix) {
  return effectiveHtml`${this.additionalText ? block19.call(this, context, tags, suffix) : void 0}`;
}
function block19(context, tags, suffix) {
  return effectiveHtml`<span part="additional-text" class="ui5-li-additional-text">${ifDefined(this.additionalText)}</span>`;
}
function block20(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} part="icon" name="${ifDefined(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon part="icon" name="${ifDefined(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`;
}
function block21(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="ui5-li-detailbtn"><${scopeTag("ui5-button", tags, suffix)} part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></${scopeTag("ui5-button", tags, suffix)}></div>` : effectiveHtml`<div class="ui5-li-detailbtn"><ui5-button part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></ui5-button></div>`;
}
function block22(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} name ="slim-arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon name ="slim-arrow-right"></ui5-icon>`;
}
function block23(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-navigated"></div>`;
}
function block24(context, tags, suffix) {
  return effectiveHtml`${this.modeSingleSelect ? block25.call(this, context, tags, suffix) : void 0}${this.modeMultiSelect ? block26.call(this, context, tags, suffix) : void 0}${this.renderDeleteButton ? block27.call(this, context, tags, suffix) : void 0}`;
}
function block25(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-radio-button", tags, suffix)} part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${scopeTag("ui5-radio-button", tags, suffix)}>` : effectiveHtml`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`;
}
function block26(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-checkbox", tags, suffix)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${scopeTag("ui5-checkbox", tags, suffix)}>` : effectiveHtml`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`;
}
function block27(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot ? block28.call(this, context, tags, suffix) : block29.call(this, context, tags, suffix)}</div>`;
}
function block28(context, tags, suffix) {
  return effectiveHtml`<slot name="deleteButton"></slot>`;
}
function block29(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-button", tags, suffix)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></${scopeTag("ui5-button", tags, suffix)}>` : effectiveHtml`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></ui5-button>`;
}
var SuggestionListItemTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/SuggestionListItem.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SuggestionListItem = class SuggestionListItem2 extends StandardListItem_default {
  onBeforeRendering() {
    super.onBeforeRendering();
    this.hasTitle = !!this.titleText.length;
    this.accessibleRole = "option";
  }
  get effectiveTitle() {
    return this.titleText.filter((node) => node.nodeType !== Node.COMMENT_NODE).map((el) => el.textContent).join("");
  }
  get hasDescription() {
    return this.richDescription.length || this.description;
  }
  get groupItem() {
    return false;
  }
  get _effectiveTabIndex() {
    return "-1";
  }
};
__decorate([slot_default({
  type: HTMLElement
})], SuggestionListItem.prototype, "richDescription", void 0);
__decorate([slot_default({
  type: Node,
  "default": true
})], SuggestionListItem.prototype, "titleText", void 0);
SuggestionListItem = __decorate([customElement_default({
  tag: "ui5-li-suggestion-item",
  template: SuggestionListItemTemplate_lit_default
})], SuggestionListItem);
SuggestionListItem.define();
var SuggestionListItem_default = SuggestionListItem;

// node_modules/@ui5/webcomponents/dist/SuggestionItem.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SuggestionItem = class SuggestionItem2 extends UI5Element_default {
  get groupItem() {
    return false;
  }
};
__decorate2([property_default()], SuggestionItem.prototype, "text", void 0);
__decorate2([property_default({
  type: ListItemType_default,
  defaultValue: ListItemType_default.Active
})], SuggestionItem.prototype, "type", void 0);
__decorate2([property_default()], SuggestionItem.prototype, "description", void 0);
__decorate2([property_default()], SuggestionItem.prototype, "icon", void 0);
__decorate2([property_default({
  type: Boolean
})], SuggestionItem.prototype, "iconEnd", void 0);
__decorate2([property_default()], SuggestionItem.prototype, "image", void 0);
__decorate2([property_default()], SuggestionItem.prototype, "additionalText", void 0);
__decorate2([property_default({
  type: ValueState_default,
  defaultValue: ValueState_default.None
})], SuggestionItem.prototype, "additionalTextState", void 0);
SuggestionItem = __decorate2([customElement_default({
  tag: "ui5-suggestion-item",
  dependencies: [SuggestionListItem_default]
})], SuggestionItem);
SuggestionItem.define();
var SuggestionItem_default = SuggestionItem;

// node_modules/@ui5/webcomponents/dist/generated/templates/GroupHeaderListItemTemplate.lit.js
function block02(context, tags, suffix) {
  return effectiveHtml`<ul part="native-li" tabindex="${ifDefined(this.forcedTabIndex)}" class="ui5-ghli-root ${classMap(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" aria-label="${ifDefined(this.ariaLabelText)}" aria-roledescription="${ifDefined(this.groupHeaderText)}" role="group"><div id="${ifDefined(this._id)}-content" class="ui5-li-content"><span class="ui5-ghli-title"><slot></slot></span></div></ul>`;
}
var GroupHeaderListItemTemplate_lit_default = block02;

// node_modules/@ui5/webcomponents/dist/generated/themes/GroupHeaderListItem.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/GroupHeaderListItem.css.ts",
  content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{height:var(--_ui5-v1-24-29_group_header_list_item_height);background:var(--ui5-v1-24-29-group-header-listitem-background-color);color:var(--sapList_TableGroupHeaderTextColor)}:host([has-border]){border-bottom:var(--sapList_BorderWidth) solid var(--sapList_GroupHeaderBorderColor)}.ui5-li-root.ui5-ghli-root{padding-top:.5rem;color:currentColor;font-size:var(--sapFontHeader6Size);font-weight:400;line-height:2rem;margin:0}.ui5-ghli-title{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700;font-family:var(--sapFontHeaderFamily)}
`
};
var GroupHeaderListItem_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/GroupHeaderListItem.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GroupHeaderListItem_1;
var GroupHeaderListItem = GroupHeaderListItem_1 = class GroupHeaderListItem2 extends ListItemBase_default {
  get groupItem() {
    return true;
  }
  get groupHeaderText() {
    return GroupHeaderListItem_1.i18nBundle.getText(GROUP_HEADER_TEXT);
  }
  get ariaLabelText() {
    return [this.textContent, this.accessibleName].filter(Boolean).join(" ");
  }
  static onDefine() {
    return __async(this, null, function* () {
      GroupHeaderListItem_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
};
__decorate3([property_default()], GroupHeaderListItem.prototype, "accessibleName", void 0);
GroupHeaderListItem = GroupHeaderListItem_1 = __decorate3([customElement_default({
  tag: "ui5-li-groupheader",
  languageAware: true,
  template: GroupHeaderListItemTemplate_lit_default,
  styles: [ListItemBase_default.styles, GroupHeaderListItem_css_default]
})], GroupHeaderListItem);
GroupHeaderListItem.define();
var GroupHeaderListItem_default = GroupHeaderListItem;

// node_modules/@ui5/webcomponents/dist/SuggestionGroupItem.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SuggestionGroupItem = class SuggestionGroupItem2 extends UI5Element_default {
  /**
   * Indicates the "grouping" nature of the component
   * to avoid tag name checks tag name to diferenciate from the standard suggestion item.
   * @protected
   */
  get groupItem() {
    return true;
  }
};
__decorate4([property_default()], SuggestionGroupItem.prototype, "text", void 0);
SuggestionGroupItem = __decorate4([customElement_default({
  tag: "ui5-suggestion-group-item",
  dependencies: [GroupHeaderListItem_default]
})], SuggestionGroupItem);
SuggestionGroupItem.define();
var SuggestionGroupItem_default = SuggestionGroupItem;

// node_modules/@ui5/webcomponents/dist/features/InputSuggestions.js
var Suggestions = class _Suggestions {
  constructor(component, slotName, highlight, handleFocus) {
    this.component = component;
    this.slotName = slotName;
    this.handleFocus = handleFocus;
    this.highlight = highlight;
    this.fnOnSuggestionItemPress = this.onItemPress.bind(this);
    this.fnOnSuggestionItemMouseOver = this.onItemMouseOver.bind(this);
    this.fnOnSuggestionItemMouseOut = this.onItemMouseOut.bind(this);
    this._getSuggestionPopover();
    this.selectedItemIndex = -1;
  }
  /* Public methods */
  defaultSlotProperties(hightlightValue) {
    const inputSuggestionItems = this._getComponent().suggestionItems;
    const highlight = this.highlight && !!hightlightValue;
    const suggestions = [];
    inputSuggestionItems.map((suggestion, idx) => {
      const text = highlight ? this.getHighlightedText(suggestion, hightlightValue) : this.getRowText(suggestion);
      const description = highlight ? this.getHighlightedDesc(suggestion, hightlightValue) : this.getRowDesc(suggestion);
      return suggestions.push({
        text,
        description,
        image: suggestion.image || void 0,
        icon: suggestion.icon || void 0,
        type: suggestion.type || void 0,
        additionalText: suggestion.additionalText || void 0,
        additionalTextState: suggestion.additionalTextState,
        groupItem: suggestion.groupItem,
        key: idx
      });
    });
    return suggestions;
  }
  onUp(e) {
    e.preventDefault();
    this._handleItemNavigation(
      false
      /* forward */
    );
    return true;
  }
  onDown(e) {
    e.preventDefault();
    this._handleItemNavigation(
      true
      /* forward */
    );
    return true;
  }
  onSpace(e) {
    if (this._isItemOnTarget()) {
      e.preventDefault();
      this.onItemSelected(
        null,
        true
        /* keyboardUsed */
      );
      return true;
    }
    return false;
  }
  onEnter(e) {
    if (this._isGroupOrInactiveItem) {
      e.preventDefault();
      return false;
    }
    if (this._isItemOnTarget()) {
      this.onItemSelected(
        null,
        true
        /* keyboardUsed */
      );
      return true;
    }
    return false;
  }
  onPageUp(e) {
    e.preventDefault();
    const isItemIndexValid = this.selectedItemIndex - 10 > -1;
    if (this._hasValueState && !isItemIndexValid) {
      this._focusValueState();
      return true;
    }
    this._moveItemSelection(this.selectedItemIndex, isItemIndexValid ? this.selectedItemIndex -= 10 : this.selectedItemIndex = 0);
    return true;
  }
  onPageDown(e) {
    e.preventDefault();
    const items = this._getItems();
    const lastItemIndex = items.length - 1;
    const isItemIndexValid = this.selectedItemIndex + 10 <= lastItemIndex;
    if (this._hasValueState && !items) {
      this._focusValueState();
      return true;
    }
    this._moveItemSelection(this.selectedItemIndex, isItemIndexValid ? this.selectedItemIndex += 10 : this.selectedItemIndex = lastItemIndex);
    return true;
  }
  onHome(e) {
    e.preventDefault();
    if (this._hasValueState) {
      this._focusValueState();
      return true;
    }
    this._moveItemSelection(this.selectedItemIndex, this.selectedItemIndex = 0);
    return true;
  }
  onEnd(e) {
    e.preventDefault();
    const lastItemIndex = this._getItems().length - 1;
    if (this._hasValueState && !lastItemIndex) {
      this._focusValueState();
      return true;
    }
    this._moveItemSelection(this.selectedItemIndex, this.selectedItemIndex = lastItemIndex);
    return true;
  }
  onTab() {
    if (this._isItemOnTarget()) {
      this.onItemSelected(null, true);
      return true;
    }
    return false;
  }
  toggle(bToggle, options) {
    const toggle = bToggle !== void 0 ? bToggle : !this.isOpened();
    if (toggle) {
      this.open();
    } else {
      this.close(options.preventFocusRestore);
    }
  }
  _isScrollable() {
    return __async(this, null, function* () {
      const sc = yield this._getScrollContainer();
      return sc.offsetHeight < sc.scrollHeight;
    });
  }
  open() {
    return __async(this, null, function* () {
      this._getComponent().open = true;
      this._beforeOpen();
      this.responsivePopover = yield this._getSuggestionPopover();
      this.responsivePopover.showAt(this._getComponent());
    });
  }
  close(preventFocusRestore = false) {
    return __async(this, null, function* () {
      const selectedItem = this._getItems() && this._getItems()[this.selectedItemIndex];
      this._getComponent().open = false;
      this.responsivePopover = yield this._getSuggestionPopover();
      this.responsivePopover?.close(false, false, preventFocusRestore);
      if (selectedItem && selectedItem.focused) {
        selectedItem.focused = false;
      }
    });
  }
  updateSelectedItemPosition(pos) {
    this.selectedItemIndex = pos;
  }
  /* Interface methods */
  onItemMouseOver(e) {
    this._getComponent().onItemMouseOver(e);
  }
  onItemMouseOut(e) {
    this._getComponent().onItemMouseOut(e);
  }
  onItemSelected(selectedItem, keyboardUsed) {
    const allItems = this._getItems();
    const item = selectedItem || allItems[this.selectedItemIndex];
    const nonGroupItems = this._getNonGroupItems();
    this.selectedItemIndex = allItems.indexOf(item);
    this.accInfo = {
      isGroup: item.groupItem,
      currentPos: nonGroupItems.indexOf(item) + 1,
      listSize: nonGroupItems.length,
      itemText: this._getRealItems()[this.selectedItemIndex].text,
      description: this._getRealItems()[this.selectedItemIndex].description,
      additionalText: this._getRealItems()[this.selectedItemIndex].additionalText
    };
    if (item.type === "Inactive" || item.groupItem) {
      return;
    }
    this._getComponent().onItemSelected(this._getRealItems()[this.selectedItemIndex], keyboardUsed);
    item.selected = false;
    item.focused = false;
    this._getComponent().open = false;
  }
  onItemPreviewed(item) {
    this._getComponent().onItemPreviewed(item);
  }
  /* Private methods */
  // Note: Split into two separate handlers
  onItemPress(e) {
    let pressedItem;
    const isPressEvent = e.type === "ui5-item-click";
    if (isPressEvent && !e.detail.item.selected || this._handledPress && !isPressEvent) {
      return;
    }
    if (isPressEvent && e.detail.item.selected) {
      pressedItem = e.detail.item;
      this._handledPress = true;
    } else {
      pressedItem = e.detail.selectedItems[0];
    }
    this.onItemSelected(
      pressedItem,
      false
      /* keyboardUsed */
    );
  }
  _beforeOpen() {
    this._attachItemsListeners();
    this._attachPopupListeners();
  }
  _attachItemsListeners() {
    return __async(this, null, function* () {
      const list = yield this._getList();
      list?.removeEventListener("ui5-item-click", this.fnOnSuggestionItemPress);
      list?.addEventListener("ui5-item-click", this.fnOnSuggestionItemPress);
      list?.removeEventListener("ui5-selection-change", this.fnOnSuggestionItemPress);
      list?.addEventListener("ui5-selection-change", this.fnOnSuggestionItemPress);
      list?.removeEventListener("mouseover", this.fnOnSuggestionItemMouseOver);
      list?.addEventListener("mouseover", this.fnOnSuggestionItemMouseOver);
      list?.removeEventListener("mouseout", this.fnOnSuggestionItemMouseOut);
      list?.addEventListener("mouseout", this.fnOnSuggestionItemMouseOut);
    });
  }
  _attachPopupListeners() {
    if (!this.handleFocus) {
      return;
    }
    if (!this.attachedAfterOpened) {
      this.responsivePopover.addEventListener("ui5-after-open", this._onOpen.bind(this));
      this.attachedAfterOpened = true;
    }
    if (!this.attachedAfterClose) {
      this.responsivePopover.addEventListener("ui5-after-close", this._onClose.bind(this));
      this.attachedAfterClose = true;
    }
  }
  _onOpen() {
    this._applyFocus();
  }
  _onClose() {
    this._handledPress = false;
  }
  _applyFocus() {
    if (this.selectedItemIndex) {
      this._getItems()[this.selectedItemIndex].focus();
    }
  }
  _isItemOnTarget() {
    return this.isOpened() && this.selectedItemIndex !== null && this.selectedItemIndex !== -1 && !this._isGroupOrInactiveItem;
  }
  get _isGroupOrInactiveItem() {
    const items = this._getItems();
    if (!items || !items[this.selectedItemIndex]) {
      return false;
    }
    return items[this.selectedItemIndex].groupItem || items[this.selectedItemIndex].type === "Inactive";
  }
  isOpened() {
    return !!(this.responsivePopover && this.responsivePopover.opened);
  }
  _handleItemNavigation(forward) {
    if (!this._getItems().length) {
      return;
    }
    if (forward) {
      this._selectNextItem();
    } else {
      this._selectPreviousItem();
    }
  }
  _selectNextItem() {
    const itemsCount = this._getItems().length;
    const previousSelectedIdx = this.selectedItemIndex;
    if (this._hasValueState && previousSelectedIdx === -1 && !this.component._isValueStateFocused) {
      this._focusValueState();
      return;
    }
    if (previousSelectedIdx === -1 && !this._hasValueState || this.component._isValueStateFocused) {
      this._clearValueStateFocus();
      this.selectedItemIndex = -1;
    }
    if (previousSelectedIdx !== -1 && previousSelectedIdx + 1 > itemsCount - 1) {
      return;
    }
    this._moveItemSelection(previousSelectedIdx, ++this.selectedItemIndex);
  }
  _selectPreviousItem() {
    const items = this._getItems();
    const previousSelectedIdx = this.selectedItemIndex;
    if (this._hasValueState && previousSelectedIdx === 0 && !this.component._isValueStateFocused) {
      this.component.hasSuggestionItemSelected = false;
      this.component._isValueStateFocused = true;
      this.selectedItemIndex = 0;
      items[0].focused = false;
      items[0].selected = false;
      return;
    }
    if (this.component._isValueStateFocused) {
      this.component.focused = true;
      this.component._isValueStateFocused = false;
      this.selectedItemIndex = 0;
      return;
    }
    if (previousSelectedIdx === -1 || previousSelectedIdx === null) {
      return;
    }
    if (previousSelectedIdx - 1 < 0) {
      items[previousSelectedIdx].selected = false;
      items[previousSelectedIdx].focused = false;
      this.component.focused = true;
      this.component.hasSuggestionItemSelected = false;
      this.selectedItemIndex -= 1;
      return;
    }
    this._moveItemSelection(previousSelectedIdx, --this.selectedItemIndex);
  }
  _moveItemSelection(previousIdx, nextIdx) {
    const items = this._getItems();
    const currentItem = items[nextIdx];
    const previousItem = items[previousIdx];
    const nonGroupItems = this._getNonGroupItems();
    if (!currentItem) {
      return;
    }
    this.component.focused = false;
    this._clearValueStateFocus();
    this.accInfo = {
      isGroup: currentItem.groupItem,
      currentPos: nonGroupItems.indexOf(currentItem) + 1,
      listSize: nonGroupItems.length,
      itemText: this._getRealItems()[this.selectedItemIndex].text,
      description: this._getRealItems()[items.indexOf(currentItem)].description,
      additionalText: this._getRealItems()[items.indexOf(currentItem)].additionalText
    };
    if (previousItem) {
      previousItem.selected = false;
      previousItem.focused = false;
    }
    if (currentItem) {
      currentItem.focused = true;
      if (currentItem.type === "Active") {
        currentItem.selected = true;
      }
      if (this.handleFocus) {
        currentItem.focus();
      }
    }
    this.component.hasSuggestionItemSelected = true;
    this.onItemPreviewed(currentItem);
    if (!this._isItemIntoView(currentItem)) {
      this._scrollItemIntoView(currentItem);
    }
  }
  _deselectItems() {
    const items = this._getItems();
    items.forEach((item) => {
      item.selected = false;
      item.focused = false;
    });
  }
  _clearItemFocus() {
    const focusedItem = this._getItems().find((item) => item.focused);
    if (focusedItem) {
      focusedItem.focused = false;
    }
  }
  _isItemIntoView(item) {
    const rectItem = item.getDomRef().getBoundingClientRect();
    const rectInput = this._getComponent().getDomRef().getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rectItem.top + _Suggestions.SCROLL_STEP <= windowHeight && rectItem.top >= rectInput.top;
  }
  _scrollItemIntoView(item) {
    return __async(this, null, function* () {
      const pos = item.getDomRef().offsetTop;
      const scrollContainer = yield this._getScrollContainer();
      scrollContainer.scrollTop = pos;
    });
  }
  _getScrollContainer() {
    return __async(this, null, function* () {
      if (!this._scrollContainer) {
        yield this._getSuggestionPopover();
        this._scrollContainer = this.responsivePopover.shadowRoot.querySelector(".ui5-popup-content");
      }
      return this._scrollContainer;
    });
  }
  _getItems() {
    return this.responsivePopover ? [...this.responsivePopover.querySelector("[ui5-list]").children] : [];
  }
  _getNonGroupItems() {
    return this._getItems().filter((item) => !item.groupItem);
  }
  _getComponent() {
    return this.component;
  }
  _getList() {
    return __async(this, null, function* () {
      this.responsivePopover = yield this._getSuggestionPopover();
      return this.responsivePopover?.querySelector("[ui5-list]");
    });
  }
  _getListWidth() {
    return __async(this, null, function* () {
      const list = yield this._getList();
      return list?.offsetWidth;
    });
  }
  _getRealItems() {
    return this._getComponent().getSlottedNodes(this.slotName);
  }
  _getSuggestionPopover() {
    return __async(this, null, function* () {
      const staticAreaItem = yield this._getComponent().getStaticAreaItemDomRef();
      this.responsivePopover = staticAreaItem.querySelector("[ui5-responsive-popover]");
      return this.responsivePopover;
    });
  }
  get itemSelectionAnnounce() {
    if (!this.accInfo) {
      return "";
    }
    const itemPositionText = _Suggestions.i18nBundle.getText(LIST_ITEM_POSITION, this.accInfo.currentPos, this.accInfo.listSize);
    const groupItemText = _Suggestions.i18nBundle.getText(LIST_ITEM_GROUP_HEADER);
    return this.accInfo.isGroup ? `${groupItemText} ${this.accInfo.itemText}` : `${this.accInfo.description} ${this.accInfo.additionalText} ${itemPositionText}`;
  }
  getRowText(suggestion) {
    return this.sanitizeText(suggestion.text || suggestion.textContent || "");
  }
  getRowDesc(suggestion) {
    return this.sanitizeText(suggestion.description || "");
  }
  getHighlightedText(suggestion, input) {
    const text = suggestion.text || suggestion.textContent || "";
    return this.hightlightInput(text, input);
  }
  getHighlightedDesc(suggestion, input) {
    const text = suggestion.description || "";
    return this.hightlightInput(text, input);
  }
  hightlightInput(text, input) {
    return generateHighlightedMarkup_default(text, input);
  }
  sanitizeText(text) {
    return encodeXML_default(text);
  }
  get _hasValueState() {
    return this.component.hasValueStateMessage;
  }
  _focusValueState() {
    this.component._isValueStateFocused = true;
    this.component.focused = false;
    this.component.hasSuggestionItemSelected = false;
    this.selectedItemIndex = 0;
    this.component.value = this.component.typedInValue;
    this._deselectItems();
  }
  _clearValueStateFocus() {
    this.component._isValueStateFocused = false;
  }
  _clearSelectedSuggestionAndAccInfo() {
    this.accInfo = void 0;
    this.selectedItemIndex = 0;
  }
  static get dependencies() {
    return [SuggestionItem_default, SuggestionGroupItem_default, ResponsivePopover_default, List_default, SuggestionListItem_default, GroupHeaderListItem_default, Button_default, Icon_default, Popover_default];
  }
  static init() {
    return __async(this, null, function* () {
      _Suggestions.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
};
Suggestions.SCROLL_STEP = 60;
registerFeature("InputSuggestions", Suggestions);

// node_modules/@ui5/webcomponents/dist/types/InputType.js
var InputType;
(function(InputType2) {
  InputType2["Text"] = "Text";
  InputType2["Email"] = "Email";
  InputType2["Number"] = "Number";
  InputType2["Password"] = "Password";
  InputType2["Tel"] = "Tel";
  InputType2["URL"] = "URL";
})(InputType || (InputType = {}));
var InputType_default = InputType;

// node_modules/@ui5/webcomponents/dist/generated/templates/InputTemplate.lit.js
function block03(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-input-root ui5-input-focusable-element" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}"><div class="ui5-input-content"><input id="${ifDefined(this._id)}-inner" class="ui5-input-inner" style="${styleMap(this.styles.innerInput)}" type="${ifDefined(this.inputType)}" inner-input ?inner-input-with-icon="${this.icon.length}" ?disabled="${this.disabled}" ?readonly="${this._readonly}" .value="${ifDefined(this._innerValue)}" placeholder="${ifDefined(this._placeholder)}" maxlength="${ifDefined(this.maxlength)}" role="${ifDefined(this.accInfo.input.role)}" aria-controls="${ifDefined(this.accInfo.input.ariaControls)}" aria-invalid="${ifDefined(this.accInfo.input.ariaInvalid)}" aria-haspopup="${ifDefined(this.accInfo.input.ariaHasPopup)}" aria-describedby="${ifDefined(this.accInfo.input.ariaDescribedBy)}" aria-roledescription="${ifDefined(this.accInfo.input.ariaRoledescription)}" aria-autocomplete="${ifDefined(this.accInfo.input.ariaAutoComplete)}" aria-expanded="${ifDefined(this.accInfo.input.ariaExpanded)}" aria-label="${ifDefined(this.accInfo.input.ariaLabel)}" aria-required="${ifDefined(this.required)}" autocomplete="off" @input="${this._handleInput}" @change="${this._handleChange}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click=${this._click} @focusin=${this.innerFocusIn} data-sap-focus-ref step="${ifDefined(this.nativeInputAttributes.step)}" min="${ifDefined(this.nativeInputAttributes.min)}" max="${ifDefined(this.nativeInputAttributes.max)}" />${this._effectiveShowClearIcon ? block110.call(this, context, tags, suffix) : void 0}${this.icon.length ? block210.call(this, context, tags, suffix) : void 0}<div class="ui5-input-value-state-icon">${unsafeHTML(this._valueStateInputIcon)}</div>${this.showSuggestions ? block32.call(this, context, tags, suffix) : void 0}${this.accInfo.input.ariaDescription ? block42.call(this, context, tags, suffix) : void 0}${this.hasValueState ? block52.call(this, context, tags, suffix) : void 0}</div><slot name="formSupport"></slot></div>`;
}
function block110(context, tags, suffix) {
  return suffix ? effectiveHtml`<div @click=${this._clear} @mousedown=${this._iconMouseDown} class="ui5-input-clear-icon-wrapper" input-icon tabindex="-1"><${scopeTag("ui5-icon", tags, suffix)} tabindex="-1" class="ui5-input-clear-icon" name="decline" accessible-name="${ifDefined(this.clearIconAccessibleName)}"></${scopeTag("ui5-icon", tags, suffix)}></div>` : effectiveHtml`<div @click=${this._clear} @mousedown=${this._iconMouseDown} class="ui5-input-clear-icon-wrapper" input-icon tabindex="-1"><ui5-icon tabindex="-1" class="ui5-input-clear-icon" name="decline" accessible-name="${ifDefined(this.clearIconAccessibleName)}"></ui5-icon></div>`;
}
function block210(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-input-icon-root"><slot name="icon"></slot></div>`;
}
function block32(context, tags, suffix) {
  return effectiveHtml`<span id="${ifDefined(this._id)}-suggestionsText" class="ui5-hidden-text">${ifDefined(this.suggestionsText)}</span><span id="${ifDefined(this._id)}-selectionText" class="ui5-hidden-text" aria-live="polite" role="status"></span><span id="${ifDefined(this._id)}-suggestionsCount" class="ui5-hidden-text" aria-live="polite">${ifDefined(this.availableSuggestionsCount)}</span>`;
}
function block42(context, tags, suffix) {
  return effectiveHtml`<span id="${ifDefined(this._id)}-descr" class="ui5-hidden-text">${ifDefined(this.accInfo.input.ariaDescription)}</span>`;
}
function block52(context, tags, suffix) {
  return effectiveHtml`<span id="${ifDefined(this._id)}-valueStateDesc" class="ui5-hidden-text">${ifDefined(this.ariaValueStateHiddenText)}</span>`;
}
var InputTemplate_lit_default = block03;

// node_modules/@ui5/webcomponents/dist/generated/templates/InputPopoverTemplate.lit.js
function block04(context, tags, suffix) {
  return effectiveHtml`${this.showSuggestions ? block111.call(this, context, tags, suffix) : void 0}${this.hasValueStateMessage ? block172.call(this, context, tags, suffix) : void 0} `;
}
function block111(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-responsive-popover", tags, suffix)} class="${classMap(this.classes.popover)}" hide-arrow _disable-initial-focus placement-type="Bottom" horizontal-align="Left" style="${styleMap(this.styles.suggestionsPopover)}" @ui5-after-open="${ifDefined(this._afterOpenPopover)}" @ui5-after-close="${ifDefined(this._afterClosePopover)}" @ui5-scroll="${ifDefined(this._scroll)}" accessible-name="${ifDefined(this._popupLabel)}">${this._isPhone ? block211.call(this, context, tags, suffix) : void 0}${!this._isPhone ? block72.call(this, context, tags, suffix) : void 0}<${scopeTag("ui5-list", tags, suffix)} separators="${ifDefined(this.suggestionSeparators)}" @mousedown="${this.onItemMouseDown}" mode="SingleSelect">${repeat(this.suggestionObjects, (item, index) => item._id || index, (item, index) => block122.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-list", tags, suffix)}>${this._isPhone ? block162.call(this, context, tags, suffix) : void 0}</${scopeTag("ui5-responsive-popover", tags, suffix)}>` : effectiveHtml`<ui5-responsive-popover class="${classMap(this.classes.popover)}" hide-arrow _disable-initial-focus placement-type="Bottom" horizontal-align="Left" style="${styleMap(this.styles.suggestionsPopover)}" @ui5-after-open="${ifDefined(this._afterOpenPopover)}" @ui5-after-close="${ifDefined(this._afterClosePopover)}" @ui5-scroll="${ifDefined(this._scroll)}" accessible-name="${ifDefined(this._popupLabel)}">${this._isPhone ? block211.call(this, context, tags, suffix) : void 0}${!this._isPhone ? block72.call(this, context, tags, suffix) : void 0}<ui5-list separators="${ifDefined(this.suggestionSeparators)}" @mousedown="${this.onItemMouseDown}" mode="SingleSelect">${repeat(this.suggestionObjects, (item, index) => item._id || index, (item, index) => block122.call(this, context, tags, suffix, item, index))}</ui5-list>${this._isPhone ? block162.call(this, context, tags, suffix) : void 0}</ui5-responsive-popover>`;
}
function block211(context, tags, suffix) {
  return suffix ? effectiveHtml`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><${scopeTag("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closeRespPopover}"></${scopeTag("ui5-button", tags, suffix)}></div><div class="row"><div class="input-root-phone native-input-wrapper"><${scopeTag("ui5-input", tags, suffix)} class="ui5-input-inner-phone" type="${ifDefined(this.inputType)}" .value="${ifDefined(this.value)}" ?show-clear-icon=${this.showClearIcon} placeholder="${ifDefined(this.placeholder)}" @ui5-input="${ifDefined(this._handleInput)}" @ui5-change="${ifDefined(this._handleChange)}"></${scopeTag("ui5-input", tags, suffix)}></div></div></div>${this.hasValueStateMessage ? block33.call(this, context, tags, suffix) : void 0}` : effectiveHtml`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closeRespPopover}"></ui5-button></div><div class="row"><div class="input-root-phone native-input-wrapper"><ui5-input class="ui5-input-inner-phone" type="${ifDefined(this.inputType)}" .value="${ifDefined(this.value)}" ?show-clear-icon=${this.showClearIcon} placeholder="${ifDefined(this.placeholder)}" @ui5-input="${ifDefined(this._handleInput)}" @ui5-change="${ifDefined(this._handleChange)}"></ui5-input></div></div></div>${this.hasValueStateMessage ? block33.call(this, context, tags, suffix) : void 0}`;
}
function block33(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.suggestionPopoverHeader)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.shouldDisplayDefaultValueStateMessage ? block43.call(this, context, tags, suffix) : block53.call(this, context, tags, suffix)}</div>` : effectiveHtml`<div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.suggestionPopoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage ? block43.call(this, context, tags, suffix) : block53.call(this, context, tags, suffix)}</div>`;
}
function block43(context, tags, suffix) {
  return effectiveHtml`${ifDefined(this.valueStateText)}`;
}
function block53(context, tags, suffix) {
  return effectiveHtml`${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block62.call(this, context, tags, suffix, item, index))}`;
}
function block62(context, tags, suffix, item, index) {
  return effectiveHtml`${ifDefined(item)}`;
}
function block72(context, tags, suffix) {
  return effectiveHtml`${this.hasValueStateMessage ? block82.call(this, context, tags, suffix) : void 0}`;
}
function block82(context, tags, suffix) {
  return suffix ? effectiveHtml`<div slot="header" ?focused=${this._isValueStateFocused} class="ui5-responsive-popover-header ${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.suggestionPopoverHeader)}><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.shouldDisplayDefaultValueStateMessage ? block92.call(this, context, tags, suffix) : block102.call(this, context, tags, suffix)}</div>` : effectiveHtml`<div slot="header" ?focused=${this._isValueStateFocused} class="ui5-responsive-popover-header ${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.suggestionPopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage ? block92.call(this, context, tags, suffix) : block102.call(this, context, tags, suffix)}</div>`;
}
function block92(context, tags, suffix) {
  return effectiveHtml`${ifDefined(this.valueStateText)}`;
}
function block102(context, tags, suffix) {
  return effectiveHtml`${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block112.call(this, context, tags, suffix, item, index))}`;
}
function block112(context, tags, suffix, item, index) {
  return effectiveHtml`${ifDefined(item)}`;
}
function block122(context, tags, suffix, item, index) {
  return effectiveHtml`${item.groupItem ? block132.call(this, context, tags, suffix, item, index) : block142.call(this, context, tags, suffix, item, index)}`;
}
function block132(context, tags, suffix, item, index) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-li-groupheader", tags, suffix)} data-ui5-key="${ifDefined(item.key)}">${unsafeHTML(item.text)}</${scopeTag("ui5-li-groupheader", tags, suffix)}>` : effectiveHtml`<ui5-li-groupheader data-ui5-key="${ifDefined(item.key)}">${unsafeHTML(item.text)}</ui5-li-groupheader>`;
}
function block142(context, tags, suffix, item, index) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-li-suggestion-item", tags, suffix)} wrapping-type="Normal" image="${ifDefined(item.image)}" icon="${ifDefined(item.icon)}" additional-text="${ifDefined(item.additionalText)}" type="${ifDefined(item.type)}" additional-text-state="${ifDefined(item.additionalTextState)}" data-ui5-key="${ifDefined(item.key)}">${unsafeHTML(item.text)}${item.description ? block152.call(this, context, tags, suffix, item, index) : void 0}</${scopeTag("ui5-li-suggestion-item", tags, suffix)}>` : effectiveHtml`<ui5-li-suggestion-item wrapping-type="Normal" image="${ifDefined(item.image)}" icon="${ifDefined(item.icon)}" additional-text="${ifDefined(item.additionalText)}" type="${ifDefined(item.type)}" additional-text-state="${ifDefined(item.additionalTextState)}" data-ui5-key="${ifDefined(item.key)}">${unsafeHTML(item.text)}${item.description ? block152.call(this, context, tags, suffix, item, index) : void 0}</ui5-li-suggestion-item>`;
}
function block152(context, tags, suffix, item, index) {
  return effectiveHtml`<span slot="richDescription">${unsafeHTML(item.description)}</span>`;
}
function block162(context, tags, suffix) {
  return suffix ? effectiveHtml`<div slot="footer" class="ui5-responsive-popover-footer"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${this._closeRespPopover}">OK</${scopeTag("ui5-button", tags, suffix)}></div>` : effectiveHtml`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closeRespPopover}">OK</ui5-button></div>`;
}
function block172(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-popover", tags, suffix)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="${ifDefined(this._valueStatePopoverHorizontalAlign)}"><div slot="header" class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.shouldDisplayDefaultValueStateMessage ? block182.call(this, context, tags, suffix) : block192.call(this, context, tags, suffix)}</div></${scopeTag("ui5-popover", tags, suffix)}>` : effectiveHtml`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="${ifDefined(this._valueStatePopoverHorizontalAlign)}"><div slot="header" class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage ? block182.call(this, context, tags, suffix) : block192.call(this, context, tags, suffix)}</div></ui5-popover>`;
}
function block182(context, tags, suffix) {
  return effectiveHtml`${ifDefined(this.valueStateText)}`;
}
function block192(context, tags, suffix) {
  return effectiveHtml`${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block202.call(this, context, tags, suffix, item, index))}`;
}
function block202(context, tags, suffix, item, index) {
  return effectiveHtml`${ifDefined(item)}`;
}
var InputPopoverTemplate_lit_default = block04;

// node_modules/@ui5/webcomponents/dist/Filters.js
var StartsWith = (value, items, propName) => items.filter((item) => item[propName].toLowerCase().startsWith(value.toLowerCase()));

// node_modules/@ui5/webcomponents/dist/generated/themes/Input.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData2 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/Input.css.ts",
  content: `:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}[input-icon]{color:var(--_ui5-v1-24-29_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v1-24-29_input_icon_padding);border-inline-start:var(--_ui5-v1-24-29_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v1-24-29_input_icon_border_radius)}[input-icon][pressed]{background:var(--_ui5-v1-24-29_input_icon_pressed_bg);box-shadow:var(--_ui5-v1-24-29_input_icon_box_shadow);border-inline-start:var(--_ui5-v1-24-29_select_hover_icon_left_border);color:var(--_ui5-v1-24-29_input_icon_pressed_color)}[input-icon]:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v1-24-29_input_icon_box_shadow);border-inline-start:var(--_ui5-v1-24-29_select_hover_icon_left_border);color:var(--_ui5-v1-24-29_input_icon_pressed_color)}[input-icon]:not([pressed]):not(:active):hover{background:var(--_ui5-v1-24-29_input_icon_hover_bg);box-shadow:var(--_ui5-v1-24-29_input_icon_box_shadow)}[input-icon]:hover{border-inline-start:var(--_ui5-v1-24-29_select_hover_icon_left_border);box-shadow:var(--_ui5-v1-24-29_input_icon_box_shadow)}:host(:not([hidden])){display:inline-block}:host{width:var(--_ui5-v1-24-29_input_width);min-width:calc(var(--_ui5-v1-24-29_input_min_width) + (var(--_ui5-v1-24-29-input-icons-count)*var(--_ui5-v1-24-29_input_icon_width)));margin:var(--_ui5-v1-24-29_input_margin_top_bottom) 0;height:var(--_ui5-v1-24-29_input_height);color:var(--sapField_TextColor);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);font-style:normal;border:var(--_ui5-v1-24-29-input-border);border-radius:var(--_ui5-v1-24-29_input_border_radius);box-sizing:border-box;text-align:start;transition:var(--_ui5-v1-24-29_input_transition);background:var(--sapField_BackgroundStyle);background-color:var(--_ui5-v1-24-29_input_background_color)}:host(:not([readonly])),:host([readonly][disabled]){box-shadow:var(--sapField_Shadow)}:host([focused]:not([opened])){border-color:var(--_ui5-v1-24-29_input_focused_border_color);background-color:var(--sapField_Focus_Background)}.ui5-input-focusable-element{position:relative}:host([focused]:not([opened])) .ui5-input-focusable-element:after{content:var(--ui5-v1-24-29_input_focus_pseudo_element_content);position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5-v1-24-29_input_focus_outline_color);border-radius:var(--_ui5-v1-24-29_input_focus_border_radius);top:var(--_ui5-v1-24-29_input_focus_offset);bottom:var(--_ui5-v1-24-29_input_focus_offset);left:var(--_ui5-v1-24-29_input_focus_offset);right:var(--_ui5-v1-24-29_input_focus_offset)}:host([focused][readonly]:not([opened])) .ui5-input-focusable-element:after{top:var(--_ui5-v1-24-29_input_readonly_focus_offset);bottom:var(--_ui5-v1-24-29_input_readonly_focus_offset);left:var(--_ui5-v1-24-29_input_readonly_focus_offset);right:var(--_ui5-v1-24-29_input_readonly_focus_offset);border-radius:var(--_ui5-v1-24-29_input_readonly_focus_border_radius)}.ui5-input-root:before{content:"";position:absolute;width:calc(100% - 2px);left:1px;bottom:-2px;border-bottom-left-radius:8px;border-bottom-right-radius:8px;height:var(--_ui5-v1-24-29_input_bottom_border_height);transition:var(--_ui5-v1-24-29_input_transition);background-color:var(--_ui5-v1-24-29_input_bottom_border_color)}.ui5-input-root{width:100%;height:100%;position:relative;background:transparent;display:inline-block;outline:none;box-sizing:border-box;color:inherit;transition:border-color .2s ease-in-out;border-radius:var(--_ui5-v1-24-29_input_border_radius);overflow:hidden}:host([disabled]){opacity:var(--_ui5-v1-24-29_input_disabled_opacity);cursor:default;pointer-events:none;background-color:var(--_ui5-v1-24-29-input_disabled_background);border-color:var(--_ui5-v1-24-29_input_disabled_border_color)}:host([disabled]) .ui5-input-root:before,:host([readonly]) .ui5-input-root:before{content:none}[inner-input]{background:transparent;color:inherit;border:none;font-style:inherit;-webkit-appearance:none;-moz-appearance:textfield;padding:var(--_ui5-v1-24-29_input_inner_padding);box-sizing:border-box;min-width:var(--_ui5-v1-24-29_input_min_width);width:100%;text-overflow:ellipsis;flex:1;outline:none;font-size:inherit;font-family:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;text-align:inherit}[inner-input][inner-input-with-icon]{padding:var(--_ui5-v1-24-29_input_inner_padding_with_icon)}.ui5-input-value-state-icon{height:100%;display:var(--_ui5-v1-24-29-input-value-state-icon-display);align-items:center}.ui5-input-value-state-icon>svg{margin-right:8px}[inner-input]::selection{background:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}:host([disabled]) [inner-input]::-webkit-input-placeholder{visibility:hidden}:host([readonly]) [inner-input]::-webkit-input-placeholder{visibility:hidden}:host([disabled]) [inner-input]::-moz-placeholder{visibility:hidden}:host([readonly]) [inner-input]::-moz-placeholder{visibility:hidden}[inner-input]::-webkit-input-placeholder{font-weight:400;font-style:var(--_ui5-v1-24-29_input_placeholder_style);color:var(--_ui5-v1-24-29_input_placeholder_color);padding-right:.125rem}[inner-input]::-moz-placeholder{font-weight:400;font-style:var(--_ui5-v1-24-29_input_placeholder_style);color:var(--_ui5-v1-24-29_input_placeholder_color);padding-right:.125rem}:host([value-state="Error"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v1-24-29-input_error_placeholder_color);font-weight:var(--_ui5-v1-24-29_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Error"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v1-24-29-input_error_placeholder_color);font-weight:var(--_ui5-v1-24-29_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Warning"]) [inner-input]::-webkit-input-placeholder{font-weight:var(--_ui5-v1-24-29_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Warning"]) [inner-input]::-moz-placeholder{font-weight:var(--_ui5-v1-24-29_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Success"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v1-24-29_input_placeholder_color)}:host([value-state="Success"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v1-24-29_input_placeholder_color)}:host([value-state="Information"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v1-24-29_input_placeholder_color)}:host([value-state="Information"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v1-24-29_input_placeholder_color)}.ui5-input-content{height:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:flex-end;overflow:hidden;outline:none;background:transparent;color:inherit;border-radius:var(--_ui5-v1-24-29_input_border_radius)}:host([readonly]:not([disabled])){border-color:var(--_ui5-v1-24-29_input_readonly_border_color);background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--_ui5-v1-24-29_input_readonly_background)}:host([value-state="None"]:not([readonly]):hover),:host(:not([value-state]):not([readonly]):hover){border:var(--_ui5-v1-24-29_input_hover_border);border-color:var(--_ui5-v1-24-29_input_focused_border_color);box-shadow:var(--sapField_Hover_Shadow);background:var(--sapField_Hover_BackgroundStyle);background-color:var(--sapField_Hover_Background)}:host(:not([value-state]):not([readonly])[focused]:not([opened]):hover),:host([value-state="None"]:not([readonly])[focused]:not([opened]):hover){box-shadow:none}:host([focused]):not([opened]) .ui5-input-root:before{content:none}:host(:not([readonly]):not([disabled])[value-state]:not([value-state="None"])){border-width:var(--_ui5-v1-24-29_input_state_border_width)}:host([value-state="Error"]) [inner-input],:host([value-state="Warning"]) [inner-input]{font-style:var(--_ui5-v1-24-29_input_error_warning_font_style);text-indent:var(--_ui5-v1-24-29_input_error_warning_text_indent)}:host([value-state="Error"]) [inner-input]{font-weight:var(--_ui5-v1-24-29_input_error_font_weight)}:host([value-state="Warning"]) [inner-input]{font-weight:var(--_ui5-v1-24-29_input_warning_font_weight)}:host([value-state="Error"]:not([readonly]):not([disabled])){background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--_ui5-v1-24-29_input_value_state_error_border_color);box-shadow:var(--sapField_InvalidShadow)}:host([value-state="Error"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v1-24-29_input_focused_value_state_error_background);border-color:var(--_ui5-v1-24-29_input_focused_value_state_error_border_color)}:host([value-state="Error"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v1-24-29_input_focused_value_state_error_focus_outline_color)}:host([value-state="Error"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v1-24-29-input-value-state-error-border-botom-color)}:host([value-state="Error"]:not([readonly]):not([focused]):hover),:host([value-state="Error"]:not([readonly])[focused][opened]:hover){background-color:var(--_ui5-v1-24-29_input_value_state_error_hover_background);box-shadow:var(--sapField_Hover_InvalidShadow)}:host([value-state="Error"]:not([readonly]):not([disabled])),:host([value-state="Warning"]:not([readonly]):not([disabled])),:host([value-state="Information"]:not([readonly]):not([disabled])){border-style:var(--_ui5-v1-24-29_input_error_warning_border_style)}:host([value-state="Warning"]:not([readonly]):not([disabled])){background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--_ui5-v1-24-29_input_value_state_warning_border_color);box-shadow:var(--sapField_WarningShadow)}:host([value-state="Warning"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v1-24-29_input_focused_value_state_warning_background);border-color:var(--_ui5-v1-24-29_input_focused_value_state_warning_border_color)}:host([value-state="Warning"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v1-24-29_input_focused_value_state_warning_focus_outline_color)}:host([value-state="Warning"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v1-24-29_input_value_state_warning_border_botom_color)}:host([value-state="Warning"]:not([readonly]):not([focused]):hover),:host([value-state="Warning"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_WarningShadow)}:host([value-state="Success"]:not([readonly]):not([disabled])){background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--_ui5-v1-24-29_input_value_state_success_border_color);border-width:var(--_ui5-v1-24-29_input_value_state_success_border_width);box-shadow:var(--sapField_SuccessShadow)}:host([value-state="Success"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v1-24-29_input_focused_value_state_success_background);border-color:var(--_ui5-v1-24-29_input_focused_value_state_success_border_color)}:host([value-state="Success"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v1-24-29_input_focused_value_state_success_focus_outline_color)}:host([value-state="Success"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v1-24-29_input_value_state_success_border_botom_color)}:host([value-state="Success"]:not([readonly]):not([focused]):hover),:host([value-state="Success"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_SuccessShadow)}:host([value-state="Information"]:not([readonly]):not([disabled])){background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--_ui5-v1-24-29_input_value_state_information_border_color);border-width:var(--_ui5-v1-24-29_input_information_border_width);box-shadow:var(--sapField_InformationShadow)}:host([value-state="Information"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v1-24-29_input_focused_value_state_information_background);border-color:var(--_ui5-v1-24-29_input_focused_value_state_information_border_color)}:host([value-state="Information"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v1-24-29_input_value_success_information_border_botom_color)}:host([value-state="Information"]:not([readonly]):not([focused]):hover),:host([value-state="Information"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_InformationShadow)}.ui5-input-icon-root{min-width:var(--_ui5-v1-24-29_input_icon_min_width);height:100%;display:flex;justify-content:center;align-items:center}::slotted([ui5-icon][slot="icon"]){align-self:start;padding:var(--_ui5-v1-24-29_input_custom_icon_padding);box-sizing:content-box!important}:host([value-state="Error"]) [input-icon],:host([value-state="Warning"]) [input-icon]{padding:var(--_ui5-v1-24-29_input_error_warning_icon_padding)}:host([value-state="Error"][focused]) [input-icon],:host([value-state="Warning"][focused]) [input-icon]{padding:var(--_ui5-v1-24-29_input_error_warning_focused_icon_padding)}:host([value-state="Information"]) [input-icon]{padding:var(--_ui5-v1-24-29_input_information_icon_padding)}:host([value-state="Information"][focused]) [input-icon]{padding:var(--_ui5-v1-24-29_input_information_focused_icon_padding)}:host([value-state="Error"]) ::slotted([input-icon][ui5-icon]),:host([value-state="Error"]) ::slotted([ui5-icon][slot="icon"]),:host([value-state="Warning"]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v1-24-29_input_error_warning_custom_icon_padding)}:host([value-state="Error"][focused]) ::slotted([input-icon][ui5-icon]),:host([value-state="Error"][focused]) ::slotted([ui5-icon][slot="icon"]),:host([value-state="Warning"][focused]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v1-24-29_input_error_warning_custom_focused_icon_padding)}:host([value-state="Information"]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v1-24-29_input_information_custom_icon_padding)}:host([value-state="Information"][focused]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v1-24-29_input_information_custom_focused_icon_padding)}:host([value-state="Error"]) [input-icon]:active,:host([value-state="Error"]) [input-icon][pressed]{box-shadow:var(--_ui5-v1-24-29_input_error_icon_box_shadow);color:var(--_ui5-v1-24-29_input_icon_error_pressed_color)}:host([value-state="Error"]) [input-icon]:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v1-24-29_input_error_icon_box_shadow)}:host([value-state="Warning"]) [input-icon]:active,:host([value-state="Warning"]) [input-icon][pressed]{box-shadow:var(--_ui5-v1-24-29_input_warning_icon_box_shadow);color:var(--_ui5-v1-24-29_input_icon_warning_pressed_color)}:host([value-state="Warning"]) [input-icon]:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v1-24-29_input_warning_icon_box_shadow)}:host([value-state="Information"]) [input-icon]:active,:host([value-state="Information"]) [input-icon][pressed]{box-shadow:var(--_ui5-v1-24-29_input_information_icon_box_shadow);color:var(--_ui5-v1-24-29_input_icon_information_pressed_color)}:host([value-state="Information"]) [input-icon]:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v1-24-29_input_information_icon_box_shadow)}:host([value-state="Success"]) [input-icon]:active,:host([value-state="Success"]) [input-icon][pressed]{box-shadow:var(--_ui5-v1-24-29_input_success_icon_box_shadow);color:var(--_ui5-v1-24-29_input_icon_success_pressed_color)}:host([value-state="Success"]) [input-icon]:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v1-24-29_input_success_icon_box_shadow)}.ui5-input-clear-icon-wrapper{height:var(--_ui5-v1-24-29_input_icon_wrapper_height);padding:0;width:var(--_ui5-v1-24-29_input_icon_width);min-width:var(--_ui5-v1-24-29_input_icon_width);display:flex;justify-content:center;align-items:center;box-sizing:border-box}:host([value-state]:not([value-state="None"]):not([value-state="Success"])) .ui5-input-clear-icon-wrapper{height:var(--_ui5-v1-24-29_input_icon_wrapper_state_height);vertical-align:top}:host([value-state="Success"]) .ui5-input-clear-icon-wrapper{height:var(--_ui5-v1-24-29_input_icon_wrapper_success_state_height)}[ui5-icon].ui5-input-clear-icon{padding:0;color:inherit}[inner-input]::-webkit-outer-spin-button,[inner-input]::-webkit-inner-spin-button{-webkit-appearance:inherit;margin:inherit}
`
};
var Input_css_default = styleData2;

// node_modules/@ui5/webcomponents/dist/generated/themes/Suggestions.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData3 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/Suggestions.css.ts",
  content: `.ui5-suggestions-popover{box-shadow:var(--sapContent_Shadow1)}.ui5-suggestions-popover::part(header),.ui5-suggestions-popover::part(content){padding:0}.ui5-suggestions-popover::part(footer){padding:0 1rem}.ui5-suggestions-popover [ui5-li]::part(icon),.ui5-suggestions-popover [ui5-li-suggestion-item]::part(icon){color:var(--sapList_TextColor)}.input-root-phone.native-input-wrapper{display:contents}.input-root-phone.native-input-wrapper:before{display:none}.native-input-wrapper .ui5-input-inner-phone{margin:0}
`
};
var Suggestions_css_default = styleData3;

// node_modules/@ui5/webcomponents/dist/Input.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Input_1;
var INPUT_EVENTS;
(function(INPUT_EVENTS2) {
  INPUT_EVENTS2["CHANGE"] = "change";
  INPUT_EVENTS2["INPUT"] = "input";
  INPUT_EVENTS2["SUGGESTION_ITEM_SELECT"] = "suggestion-item-select";
})(INPUT_EVENTS || (INPUT_EVENTS = {}));
var INPUT_ACTIONS;
(function(INPUT_ACTIONS2) {
  INPUT_ACTIONS2["ACTION_ENTER"] = "enter";
  INPUT_ACTIONS2["ACTION_USER_INPUT"] = "input";
})(INPUT_ACTIONS || (INPUT_ACTIONS = {}));
var Input = Input_1 = class Input2 extends UI5Element_default {
  constructor() {
    super();
    this.hasSuggestionItemSelected = false;
    this.valueBeforeItemSelection = "";
    this.valueBeforeItemPreview = "";
    this.suggestionSelectionCancelled = false;
    this.previousValue = "";
    this.firstRendering = true;
    this.typedInValue = "";
    this.lastConfirmedValue = "";
    this.isTyping = false;
    this.suggestionObjects = [];
    this._handleResizeBound = this._handleResize.bind(this);
    this._keepInnerValue = false;
    this._focusedAfterClear = false;
  }
  onEnterDOM() {
    ResizeHandler_default.register(this, this._handleResizeBound);
    registerUI5Element(this, this._updateAssociatedLabelsTexts.bind(this));
  }
  onExitDOM() {
    ResizeHandler_default.deregister(this, this._handleResizeBound);
    deregisterUI5Element(this);
  }
  onBeforeRendering() {
    if (!this._keepInnerValue) {
      this._innerValue = this.value;
    }
    if (this.showSuggestions) {
      this.enableSuggestions();
      this.suggestionObjects = this.Suggestions.defaultSlotProperties(this.typedInValue);
    }
    this._effectiveShowClearIcon = this.showClearIcon && !!this.value && !this.readonly && !this.disabled;
    this.style.setProperty(getScopedVarName("--_ui5-input-icons-count"), `${this.iconsCount}`);
    this.FormSupport = getFeature("FormSupport");
    const hasItems = !!this.suggestionItems.length;
    const hasValue = !!this.value;
    const isFocused = this.shadowRoot.querySelector("input") === getActiveElement_default();
    if (this._isPhone) {
      this.open = this.openOnMobile;
    } else if (this._forceOpen) {
      this.open = true;
    } else {
      this.open = hasValue && hasItems && isFocused && this.isTyping;
    }
    if (this.FormSupport) {
      this.FormSupport.syncNativeHiddenInput(this);
    } else if (this.name) {
      console.warn(`In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`);
    }
    const value = this.value;
    const innerInput = this.getInputDOMRefSync();
    if (!innerInput || !value) {
      return;
    }
    const autoCompletedChars = innerInput.selectionEnd - innerInput.selectionStart;
    if (this._shouldAutocomplete && !isAndroid() && !autoCompletedChars && !this._isKeyNavigation) {
      const item = this._getFirstMatchingItem(value);
      if (item) {
        this._handleTypeAhead(item);
      }
    }
  }
  onAfterRendering() {
    return __async(this, null, function* () {
      const innerInput = this.getInputDOMRefSync();
      if (this.Suggestions && this.showSuggestions) {
        this.Suggestions.toggle(this.open, {
          preventFocusRestore: true
        });
        this._listWidth = yield this.Suggestions._getListWidth();
        const list = yield this.Suggestions._getList();
        list?._itemNavigation._getItems().forEach((item) => {
          item.forcedTabIndex = "-1";
        });
      }
      if (this.shouldDisplayOnlyValueStateMessage) {
        this.openPopover();
      } else {
        this.closePopover();
      }
      if (this._performTextSelection) {
        if (innerInput.value !== this._innerValue) {
          innerInput.value = this._innerValue;
        }
        if (this.typedInValue.length && this.value.length) {
          innerInput.setSelectionRange(this.typedInValue.length, this.value.length);
        }
      }
      this._performTextSelection = false;
    });
  }
  _onkeydown(e) {
    this._isKeyNavigation = true;
    this._shouldAutocomplete = !this.noTypeahead && !(isBackSpace(e) || isDelete(e) || isEscape(e));
    if (isUp(e)) {
      return this._handleUp(e);
    }
    if (isDown(e)) {
      return this._handleDown(e);
    }
    if (isSpace(e)) {
      return this._handleSpace(e);
    }
    if (isTabNext(e)) {
      return this._handleTab();
    }
    if (isEnter(e)) {
      return this._handleEnter(e);
    }
    if (isPageUp(e)) {
      return this._handlePageUp(e);
    }
    if (isPageDown(e)) {
      return this._handlePageDown(e);
    }
    if (isHome(e)) {
      return this._handleHome(e);
    }
    if (isEnd(e)) {
      return this._handleEnd(e);
    }
    if (isEscape(e)) {
      return this._handleEscape();
    }
    if (this.showSuggestions) {
      this._clearPopoverFocusAndSelection();
    }
    this._keyDown = true;
    this._isKeyNavigation = false;
  }
  _onkeyup(e) {
    if (isDelete(e)) {
      this.value = e.target.value;
    }
    this._keyDown = false;
  }
  _handleUp(e) {
    if (this.Suggestions && this.Suggestions.isOpened()) {
      this.Suggestions.onUp(e);
    }
  }
  _handleDown(e) {
    if (this.Suggestions && this.Suggestions.isOpened()) {
      this.Suggestions.onDown(e);
    }
  }
  _handleSpace(e) {
    if (this.Suggestions) {
      this.Suggestions.onSpace(e);
    }
  }
  _handleTab() {
    if (this.Suggestions && this.previousValue !== this.value) {
      this.Suggestions.onTab();
    }
  }
  _handleEnter(e) {
    const suggestionItemPressed = !!(this.Suggestions && this.Suggestions.onEnter(e));
    const innerInput = this.getInputDOMRefSync();
    const matchingItem = this.suggestionItems.find((item) => {
      return item.text && item.text === this.value || item.textContent === this.value;
    });
    if (matchingItem) {
      const itemText = matchingItem.text ? matchingItem.text : matchingItem.textContent || "";
      innerInput.setSelectionRange(itemText.length, itemText.length);
      if (!suggestionItemPressed) {
        this.selectSuggestion(matchingItem, true);
        this.open = false;
      }
    }
    if (this._isPhone && !this.suggestionItems.length && !this.isTypeNumber) {
      innerInput.setSelectionRange(this.value.length, this.value.length);
    }
    if (!suggestionItemPressed) {
      this.lastConfirmedValue = this.value;
      if (this.FormSupport) {
        this.FormSupport.triggerFormSubmit(this);
      }
      return;
    }
    this.focused = true;
  }
  _handlePageUp(e) {
    if (this._isSuggestionsFocused) {
      this.Suggestions.onPageUp(e);
    } else {
      e.preventDefault();
    }
  }
  _handlePageDown(e) {
    if (this._isSuggestionsFocused) {
      this.Suggestions.onPageDown(e);
    } else {
      e.preventDefault();
    }
  }
  _handleHome(e) {
    if (this._isSuggestionsFocused) {
      this.Suggestions.onHome(e);
    }
  }
  _handleEnd(e) {
    if (this._isSuggestionsFocused) {
      this.Suggestions.onEnd(e);
    }
  }
  _handleEscape() {
    const hasSuggestions = this.showSuggestions && !!this.Suggestions;
    const isOpen = hasSuggestions && this.open;
    const innerInput = this.getInputDOMRefSync();
    const isAutoCompleted = innerInput.selectionEnd - innerInput.selectionStart > 0;
    this.isTyping = false;
    if (!isOpen) {
      this.value = this.lastConfirmedValue ? this.lastConfirmedValue : this.previousValue;
      return;
    }
    if (isOpen && this.Suggestions._isItemOnTarget()) {
      this.value = this.typedInValue || this.valueBeforeItemPreview;
      this.suggestionSelectionCancelled = true;
      this.focused = true;
      return;
    }
    if (isAutoCompleted) {
      this.value = this.typedInValue;
    }
    if (this._isValueStateFocused) {
      this._isValueStateFocused = false;
      this.focused = true;
    }
  }
  _onfocusin(e) {
    return __async(this, null, function* () {
      yield this.getInputDOMRef();
      this.focused = true;
      if (!this._focusedAfterClear) {
        this.previousValue = this.value;
      }
      this.valueBeforeItemPreview = this.value;
      this._inputIconFocused = !!e.target && e.target === this.querySelector("[ui5-icon]");
      this._focusedAfterClear = false;
    });
  }
  /**
   * Called on "focusin" of the native input HTML Element.
   * **Note:** implemented in MultiInput, but used in the Input template.
   */
  innerFocusIn() {
  }
  _onfocusout(e) {
    const toBeFocused = e.relatedTarget;
    const focusedOutToSuggestions = this.Suggestions && toBeFocused && toBeFocused.shadowRoot && toBeFocused.shadowRoot.contains(this.Suggestions.responsivePopover);
    const focusedOutToValueStateMessage = toBeFocused && toBeFocused.shadowRoot && toBeFocused.shadowRoot.querySelector(".ui5-valuestatemessage-root");
    this._keepInnerValue = false;
    if (this.showClearIcon && !this._effectiveShowClearIcon) {
      this._clearIconClicked = false;
      this._handleChange();
    }
    if (focusedOutToSuggestions || focusedOutToValueStateMessage) {
      e.stopImmediatePropagation();
      return;
    }
    if (toBeFocused && toBeFocused.classList.contains(this._id)) {
      return;
    }
    this.open = false;
    this._clearPopoverFocusAndSelection();
    if (!this._clearIconClicked) {
      this.previousValue = "";
    }
    this.lastConfirmedValue = "";
    this.focused = false;
    this.isTyping = false;
    this._forceOpen = false;
  }
  _clearPopoverFocusAndSelection() {
    if (!this.showSuggestions || !this.Suggestions) {
      return;
    }
    this._isValueStateFocused = false;
    this.hasSuggestionItemSelected = false;
    this.Suggestions._deselectItems();
    this.Suggestions._clearItemFocus();
  }
  _click() {
    if (isPhone() && !this.readonly && this.Suggestions) {
      this.blur();
      this.openOnMobile = true;
    }
  }
  _handleChange() {
    if (this._clearIconClicked) {
      this._clearIconClicked = false;
      return;
    }
    if (this.previousValue !== this.getInputDOMRefSync().value) {
      this.fireEvent(INPUT_EVENTS.CHANGE);
      this.previousValue = this.value;
      this.typedInValue = this.value;
    }
  }
  _clear() {
    const valueBeforeClear = this.value;
    this.value = "";
    const prevented = !this.fireEvent(INPUT_EVENTS.INPUT, {
      inputType: ""
    }, true);
    if (prevented) {
      this.value = valueBeforeClear;
      return;
    }
    if (!this._isPhone) {
      this.focus();
      this._focusedAfterClear = true;
    }
  }
  _iconMouseDown() {
    this._clearIconClicked = true;
  }
  _scroll(e) {
    this.fireEvent("suggestion-scroll", {
      scrollTop: e.detail.scrollTop,
      scrollContainer: e.detail.targetRef
    });
  }
  _handleInput(e) {
    const inputDomRef = this.getInputDOMRefSync();
    const emptyValueFiredOnNumberInput = this.value && this.isTypeNumber && !inputDomRef.value;
    const eventType = e.inputType || e.detail && e.detail.inputType || "";
    this._keepInnerValue = false;
    const allowedEventTypes = ["deleteWordBackward", "deleteWordForward", "deleteSoftLineBackward", "deleteSoftLineForward", "deleteEntireSoftLine", "deleteHardLineBackward", "deleteHardLineForward", "deleteByDrag", "deleteByCut", "deleteContent", "deleteContentBackward", "deleteContentForward", "historyUndo"];
    this._shouldAutocomplete = !allowedEventTypes.includes(eventType) && !this.noTypeahead;
    this.suggestionSelectionCancelled = false;
    if (e instanceof InputEvent) {
      const delimiterCase = this.isTypeNumber && (e.inputType === "deleteContentForward" || e.inputType === "deleteContentBackward") && !e.target.value.includes(".") && this.value.includes(".");
      const eNotationCase = emptyValueFiredOnNumberInput && e.data === "e";
      const minusRemovalCase = emptyValueFiredOnNumberInput && this.value.startsWith("-") && this.value.length === 2 && (e.inputType === "deleteContentForward" || e.inputType === "deleteContentBackward");
      if (delimiterCase || eNotationCase || minusRemovalCase) {
        this.value = e.target.value;
        this._keepInnerValue = true;
      }
    }
    if (e.target === inputDomRef) {
      this.focused = true;
      e.stopImmediatePropagation();
    }
    this.fireEventByAction(INPUT_ACTIONS.ACTION_ENTER, e);
    this.hasSuggestionItemSelected = false;
    this._isValueStateFocused = false;
    if (this.Suggestions) {
      this.Suggestions.updateSelectedItemPosition(-1);
    }
    this.isTyping = true;
  }
  _startsWithMatchingItems(str) {
    const textProp = this.suggestionItems[0].text ? "text" : "textContent";
    return StartsWith(str, this.suggestionItems, textProp);
  }
  _getFirstMatchingItem(current) {
    if (!this.suggestionItems.length) {
      return;
    }
    const matchingItems = this._startsWithMatchingItems(current).filter((item) => !item.groupItem);
    if (matchingItems.length) {
      return matchingItems[0];
    }
  }
  _handleTypeAhead(item) {
    const value = item.text ? item.text : item.textContent || "";
    this._innerValue = value;
    this.value = value;
    this._performTextSelection = true;
    this._shouldAutocomplete = false;
  }
  _handleResize() {
    this._inputWidth = this.offsetWidth;
  }
  _updateAssociatedLabelsTexts() {
    this._associatedLabelsTexts = getAssociatedLabelForTexts(this);
    this._accessibleLabelsRefTexts = getAllAccessibleNameRefTexts(this);
  }
  _closeRespPopover() {
    this.Suggestions.close(true);
  }
  _afterOpenPopover() {
    return __async(this, null, function* () {
      if (isPhone()) {
        (yield this.getInputDOMRef()).focus();
      }
    });
  }
  _afterClosePopover() {
    this.announceSelectedItem();
    if (isPhone()) {
      this.blur();
      this.focused = false;
    }
    this.openOnMobile = false;
    this.open = false;
    this._forceOpen = false;
    if (this.hasSuggestionItemSelected) {
      this.focus();
    }
  }
  /**
   * Checks if the value state popover is open.
   */
  isValueStateOpened() {
    return !!this._isPopoverOpen;
  }
  openPopover() {
    return __async(this, null, function* () {
      const popover = yield this._getPopover();
      if (popover) {
        this._isPopoverOpen = true;
        popover.showAt(this);
      }
    });
  }
  closePopover() {
    return __async(this, null, function* () {
      const popover = yield this._getPopover();
      popover && popover.close();
    });
  }
  _getPopover() {
    return __async(this, null, function* () {
      const staticAreaItem = yield this.getStaticAreaItemDomRef();
      return staticAreaItem.querySelector("[ui5-popover]");
    });
  }
  /**
   * Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open.
   * @public
   * @since 1.3.0
   */
  openPicker() {
    if (!this.suggestionItems.length || this.disabled || this.readonly) {
      return;
    }
    this._forceOpen = true;
  }
  enableSuggestions() {
    if (this.Suggestions) {
      return;
    }
    const Suggestions2 = getFeature("InputSuggestions");
    if (Suggestions2) {
      this.Suggestions = new Suggestions2(this, "suggestionItems", true, false);
    } else {
      throw new Error(`You have to import "@ui5/webcomponents/dist/features/InputSuggestions.js" module to use ui5-input suggestions`);
    }
  }
  selectSuggestion(item, keyboardUsed) {
    if (item.groupItem) {
      return;
    }
    const value = this.typedInValue || this.value;
    const itemText = item.text || item.textContent || "";
    const fireInput = keyboardUsed ? this.valueBeforeItemSelection !== itemText : value !== itemText;
    this.hasSuggestionItemSelected = true;
    const valueOriginal = this.value;
    const valueBeforeItemSelectionOriginal = this.valueBeforeItemSelection;
    const lastConfirmedValueOriginal = this.lastConfirmedValue;
    const performTextSelectionOriginal = this._performTextSelection;
    const typedInValueOriginal = this.typedInValue;
    const previousValueOriginal = this.previousValue;
    if (fireInput) {
      this.value = itemText;
      this.valueBeforeItemSelection = itemText;
      this.lastConfirmedValue = itemText;
      this._performTextSelection = true;
      this.fireEvent(INPUT_EVENTS.CHANGE);
      if (isPhone()) {
        this.fireEvent(INPUT_EVENTS.INPUT);
      }
      this.typedInValue = this.value;
      this.previousValue = this.value;
    }
    this.valueBeforeItemPreview = "";
    this.suggestionSelectionCancelled = false;
    const isCancelledByUser = !this.fireEvent(INPUT_EVENTS.SUGGESTION_ITEM_SELECT, {
      item
    }, true);
    if (isCancelledByUser) {
      this.Suggestions?._clearSelectedSuggestionAndAccInfo();
      this.hasSuggestionItemSelected = false;
      this.suggestionSelectionCancelled = true;
      if (fireInput) {
        if (itemText === this.value) {
          this.value = valueOriginal;
        }
        this.valueBeforeItemSelection = valueBeforeItemSelectionOriginal;
        this.lastConfirmedValue = lastConfirmedValueOriginal;
        this._performTextSelection = performTextSelectionOriginal;
        this.typedInValue = typedInValueOriginal;
        this.previousValue = previousValueOriginal;
      }
    }
    this.isTyping = false;
    this.openOnMobile = false;
    this._forceOpen = false;
  }
  previewSuggestion(item) {
    this.valueBeforeItemSelection = this.value;
    this.updateValueOnPreview(item);
    this.announceSelectedItem();
    this._previewItem = item;
  }
  /**
   * Updates the input value on item preview.
   * @param item The item that is on preview
   */
  updateValueOnPreview(item) {
    const noPreview = item.type === "Inactive" || item.groupItem;
    const itemValue = noPreview ? this.valueBeforeItemPreview : item.effectiveTitle || item.textContent || "";
    this.value = itemValue;
    this._performTextSelection = true;
  }
  /**
   * The suggestion item on preview.
   * @default null
   * @public
   */
  get previewItem() {
    if (!this._previewItem) {
      return null;
    }
    return this.getSuggestionByListItem(this._previewItem);
  }
  fireEventByAction(action, e) {
    return __async(this, null, function* () {
      const valueBeforeInput = this.value;
      const inputRef = this.getInputDOMRefSync();
      if (this.disabled || this.readonly) {
        return;
      }
      const inputValue = yield this.getInputValue();
      const isUserInput = action === INPUT_ACTIONS.ACTION_ENTER;
      this.value = inputValue;
      this.typedInValue = inputValue;
      this.valueBeforeItemPreview = inputValue;
      if (isUserInput) {
        const inputType = e.inputType || "";
        const prevented = !this.fireEvent(INPUT_EVENTS.INPUT, {
          inputType
        }, true);
        if (prevented) {
          this.value = valueBeforeInput;
          inputRef && (inputRef.value = valueBeforeInput);
        }
        this.fireEvent("value-changed");
      }
    });
  }
  getInputValue() {
    return __async(this, null, function* () {
      const domRef = this.getDomRef();
      if (domRef) {
        return (yield this.getInputDOMRef()).value;
      }
      return "";
    });
  }
  getInputDOMRef() {
    return __async(this, null, function* () {
      if (isPhone() && this.Suggestions) {
        yield this.Suggestions._getSuggestionPopover();
        return this.Suggestions.responsivePopover.querySelector(".ui5-input-inner-phone");
      }
      return this.nativeInput;
    });
  }
  getInputDOMRefSync() {
    if (isPhone() && this.Suggestions && this.Suggestions.responsivePopover) {
      return this.Suggestions.responsivePopover.querySelector(".ui5-input-inner-phone").shadowRoot.querySelector("input");
    }
    return this.nativeInput;
  }
  /**
   * Returns a reference to the native input element
   * @protected
   */
  get nativeInput() {
    const domRef = this.getDomRef();
    return domRef ? domRef.querySelector(`input`) : null;
  }
  get nativeInputWidth() {
    return this.nativeInput ? this.nativeInput.offsetWidth : 0;
  }
  getLabelableElementId() {
    return this.getInputId();
  }
  getSuggestionByListItem(item) {
    const key = parseInt(item.getAttribute("data-ui5-key"));
    return this.suggestionItems[key];
  }
  /**
   * Returns if the suggestions popover is scrollable.
   * The method returns `Promise` that resolves to true,
   * if the popup is scrollable and false otherwise.
   */
  isSuggestionsScrollable() {
    if (!this.Suggestions) {
      return Promise.resolve(false);
    }
    return this.Suggestions._isScrollable();
  }
  getInputId() {
    return `${this._id}-inner`;
  }
  /* Suggestions interface  */
  onItemMouseOver(e) {
    const item = e.target;
    const suggestion = this.getSuggestionByListItem(item);
    suggestion && suggestion.fireEvent("mouseover", {
      item: suggestion,
      targetRef: item
    });
  }
  onItemMouseOut(e) {
    const item = e.target;
    const suggestion = this.getSuggestionByListItem(item);
    suggestion && suggestion.fireEvent("mouseout", {
      item: suggestion,
      targetRef: item
    });
  }
  onItemMouseDown(e) {
    e.preventDefault();
  }
  onItemSelected(item, keyboardUsed) {
    this.selectSuggestion(item, keyboardUsed);
  }
  onItemPreviewed(item) {
    this.previewSuggestion(item);
    this.fireEvent("suggestion-item-preview", {
      item: this.getSuggestionByListItem(item),
      targetRef: item
    });
  }
  get valueStateTypeMappings() {
    return {
      "Success": Input_1.i18nBundle.getText(VALUE_STATE_TYPE_SUCCESS),
      "Information": Input_1.i18nBundle.getText(VALUE_STATE_TYPE_INFORMATION),
      "Error": Input_1.i18nBundle.getText(VALUE_STATE_TYPE_ERROR),
      "Warning": Input_1.i18nBundle.getText(VALUE_STATE_TYPE_WARNING)
    };
  }
  valueStateTextMappings() {
    return {
      "Success": Input_1.i18nBundle.getText(VALUE_STATE_SUCCESS),
      "Information": Input_1.i18nBundle.getText(VALUE_STATE_INFORMATION),
      "Error": Input_1.i18nBundle.getText(VALUE_STATE_ERROR),
      "Warning": Input_1.i18nBundle.getText(VALUE_STATE_WARNING)
    };
  }
  announceSelectedItem() {
    const invisibleText = this.shadowRoot.querySelector(`[id="${this._id}-selectionText"]`);
    invisibleText.textContent = this.itemSelectionAnnounce;
  }
  get _readonly() {
    return this.readonly && !this.disabled;
  }
  get _headerTitleText() {
    return Input_1.i18nBundle.getText(INPUT_SUGGESTIONS_TITLE);
  }
  get _popupLabel() {
    return Input_1.i18nBundle.getText(INPUT_AVALIABLE_VALUES);
  }
  get clearIconAccessibleName() {
    return Input_1.i18nBundle.getText(INPUT_CLEAR_ICON_ACC_NAME);
  }
  get inputType() {
    return this.type.toLowerCase();
  }
  get isTypeNumber() {
    return this.type === InputType_default.Number;
  }
  get suggestionsTextId() {
    return this.showSuggestions ? `${this._id}-suggestionsText` : "";
  }
  get valueStateTextId() {
    return this.hasValueState ? `${this._id}-valueStateDesc` : "";
  }
  get accInfo() {
    const ariaHasPopupDefault = this.showSuggestions ? "true" : void 0;
    const ariaAutoCompleteDefault = this.showSuggestions ? "list" : void 0;
    const ariaDescribedBy = this._inputAccInfo.ariaDescribedBy ? `${this.suggestionsTextId} ${this.valueStateTextId} ${this._inputAccInfo.ariaDescribedBy}`.trim() : `${this.suggestionsTextId} ${this.valueStateTextId}`.trim();
    const info = {
      "input": {
        "ariaRoledescription": this._inputAccInfo && (this._inputAccInfo.ariaRoledescription || void 0),
        "ariaDescribedBy": ariaDescribedBy || void 0,
        "ariaInvalid": this.valueState === ValueState_default.Error ? "true" : void 0,
        "ariaHasPopup": this._inputAccInfo.ariaHasPopup ? this._inputAccInfo.ariaHasPopup : ariaHasPopupDefault,
        "ariaAutoComplete": this._inputAccInfo.ariaAutoComplete ? this._inputAccInfo.ariaAutoComplete : ariaAutoCompleteDefault,
        "role": this._inputAccInfo && this._inputAccInfo.role,
        "ariaControls": this._inputAccInfo && this._inputAccInfo.ariaControls,
        "ariaExpanded": this._inputAccInfo && this._inputAccInfo.ariaExpanded,
        "ariaDescription": this._inputAccInfo && this._inputAccInfo.ariaDescription,
        "ariaLabel": this._inputAccInfo && this._inputAccInfo.ariaLabel || this._accessibleLabelsRefTexts || this.accessibleName || this._associatedLabelsTexts || void 0
      }
    };
    return info;
  }
  get nativeInputAttributes() {
    return {
      "min": this.isTypeNumber ? this._nativeInputAttributes.min : void 0,
      "max": this.isTypeNumber ? this._nativeInputAttributes.max : void 0,
      "step": this.isTypeNumber ? this._nativeInputAttributes.step || "any" : void 0
    };
  }
  get ariaValueStateHiddenText() {
    if (!this.hasValueState) {
      return;
    }
    const valueState = this.valueState !== ValueState_default.None ? this.valueStateTypeMappings[this.valueState] : "";
    if (this.shouldDisplayDefaultValueStateMessage) {
      return this.valueStateText ? `${valueState} ${this.valueStateText}` : valueState;
    }
    return `${valueState}`.concat(" ", this.valueStateMessageText.map((el) => el.textContent).join(" "));
  }
  get itemSelectionAnnounce() {
    return this.Suggestions ? this.Suggestions.itemSelectionAnnounce : "";
  }
  get iconsCount() {
    const slottedIconsCount = this.icon ? this.icon.length : 0;
    const clearIconCount = Number(this._effectiveShowClearIcon) ?? 0;
    return slottedIconsCount + clearIconCount;
  }
  get classes() {
    return {
      popover: {
        "ui5-suggestions-popover": this.showSuggestions,
        "ui5-popover-with-value-state-header-phone": this._isPhone && this.showSuggestions && this.hasValueStateMessage,
        "ui5-popover-with-value-state-header": !this._isPhone && this.showSuggestions && this.hasValueStateMessage
      },
      popoverValueState: {
        "ui5-valuestatemessage-root": true,
        "ui5-valuestatemessage-header": true,
        "ui5-valuestatemessage--success": this.valueState === ValueState_default.Success,
        "ui5-valuestatemessage--error": this.valueState === ValueState_default.Error,
        "ui5-valuestatemessage--warning": this.valueState === ValueState_default.Warning,
        "ui5-valuestatemessage--information": this.valueState === ValueState_default.Information
      }
    };
  }
  get styles() {
    const remSizeIxPx = parseInt(getComputedStyle(document.documentElement).fontSize);
    const stylesObject = {
      popoverHeader: {
        "max-width": this._inputWidth ? `${this._inputWidth}px` : ""
      },
      suggestionPopoverHeader: {
        "display": this._listWidth === 0 ? "none" : "inline-block",
        "width": this._listWidth ? `${this._listWidth}px` : ""
      },
      suggestionsPopover: {
        "min-width": this._inputWidth ? `${this._inputWidth}px` : "",
        "max-width": this._inputWidth && this._inputWidth / remSizeIxPx > 40 ? `${this._inputWidth}px` : "40rem"
      },
      innerInput: {
        "padding": ""
      }
    };
    return stylesObject;
  }
  get suggestionSeparators() {
    return "None";
  }
  get valueStateMessageText() {
    return this.getSlottedNodes("valueStateMessage").map((el) => el.cloneNode(true));
  }
  get shouldDisplayOnlyValueStateMessage() {
    return this.hasValueStateMessage && !this.readonly && !this.open && this.focused;
  }
  get shouldDisplayDefaultValueStateMessage() {
    return !this.valueStateMessage.length && this.hasValueStateMessage;
  }
  get hasValueState() {
    return this.valueState !== ValueState_default.None;
  }
  get hasValueStateMessage() {
    return this.hasValueState && this.valueState !== ValueState_default.Success && (!this._inputIconFocused || !!(this._isPhone && this.Suggestions));
  }
  get valueStateText() {
    return this.valueState !== ValueState_default.None ? this.valueStateTextMappings()[this.valueState] : void 0;
  }
  get suggestionsText() {
    return Input_1.i18nBundle.getText(INPUT_SUGGESTIONS);
  }
  get availableSuggestionsCount() {
    if (this.showSuggestions && (this.value || this.Suggestions.isOpened())) {
      const nonGroupItems = this.suggestionObjects.filter((item) => !item.groupItem);
      switch (nonGroupItems.length) {
        case 0:
          return Input_1.i18nBundle.getText(INPUT_SUGGESTIONS_NO_HIT);
        case 1:
          return Input_1.i18nBundle.getText(INPUT_SUGGESTIONS_ONE_HIT);
        default:
          return Input_1.i18nBundle.getText(INPUT_SUGGESTIONS_MORE_HITS, nonGroupItems.length);
      }
    }
    return void 0;
  }
  get step() {
    return this.isTypeNumber ? "any" : void 0;
  }
  get _isPhone() {
    return isPhone();
  }
  get _isSuggestionsFocused() {
    return !this.focused && this.Suggestions && this.Suggestions.isOpened();
  }
  /**
   * Returns the placeholder value.
   * @protected
   */
  get _placeholder() {
    return this.placeholder;
  }
  /**
   * This method is relevant for sap_horizon theme only
   */
  get _valueStateInputIcon() {
    const iconPerValueState = {
      Error: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071C5.90237 13.3166 5.90237 12.6834 6.29289 12.2929L8.58579 10L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L10 8.58579L12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711L11.4142 10L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L10 11.4142L7.70711 13.7071Z" fill="#EE3939"/>`,
      Warning: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M11.8619 0.49298C11.6823 0.187541 11.3544 0 11 0C10.6456 0 10.3177 0.187541 10.1381 0.49298L0.138066 17.493C-0.0438112 17.8022 -0.0461447 18.1851 0.13195 18.4965C0.310046 18.8079 0.641283 19 1 19H21C21.3587 19 21.69 18.8079 21.868 18.4965C22.0461 18.1851 22.0438 17.8022 21.8619 17.493L11.8619 0.49298ZM11 6C11.5523 6 12 6.44772 12 7V10C12 10.5523 11.5523 11 11 11C10.4477 11 10 10.5523 10 10V7C10 6.44772 10.4477 6 11 6ZM11 16C11.8284 16 12.5 15.3284 12.5 14.5C12.5 13.6716 11.8284 13 11 13C10.1716 13 9.5 13.6716 9.5 14.5C9.5 15.3284 10.1716 16 11 16Z" fill="#F58B00"/>`,
      Success: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10ZM14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289L8 11.5858L6.70711 10.2929C6.31658 9.90237 5.68342 9.90237 5.29289 10.2929C4.90237 10.6834 4.90237 11.3166 5.29289 11.7071L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071L14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289Z" fill="#36A41D"/>`,
      Information: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V15C0 16.6569 1.34315 18 3 18H15C16.6569 18 18 16.6569 18 15V3C18 1.34315 16.6569 0 15 0H3ZM9 6.5C9.82843 6.5 10.5 5.82843 10.5 5C10.5 4.17157 9.82843 3.5 9 3.5C8.17157 3.5 7.5 4.17157 7.5 5C7.5 5.82843 8.17157 6.5 9 6.5ZM9 8.5C9.55228 8.5 10 8.94772 10 9.5V13.5C10 14.0523 9.55228 14.5 9 14.5C8.44771 14.5 8 14.0523 8 13.5V9.5C8 8.94772 8.44771 8.5 9 8.5Z" fill="#1B90FF"/>`
    };
    if (this.valueState !== ValueState_default.None) {
      return `
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 20 20" fill="none">
				${iconPerValueState[this.valueState]};
			</svg>
			`;
    }
    return "";
  }
  get _valueStatePopoverHorizontalAlign() {
    return this.effectiveDir !== "rtl" ? "Left" : "Right";
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
  /**
   * Returns the caret position inside the native input
   * @protected
   */
  getCaretPosition() {
    return getCaretPosition(this.nativeInput);
  }
  /**
   * Sets the caret to a certain position inside the native input
   * @protected
   */
  setCaretPosition(pos) {
    setCaretPosition(this.nativeInput, pos);
  }
  /**
   * Removes the fractional part of floating-point number.
   * @param value the numeric value of Input of type "Number"
   */
  removeFractionalPart(value) {
    if (value.includes(".")) {
      return value.slice(0, value.indexOf("."));
    }
    if (value.includes(",")) {
      return value.slice(0, value.indexOf(","));
    }
    return value;
  }
  static onDefine() {
    return __async(this, null, function* () {
      const Suggestions2 = getFeature("InputSuggestions");
      [Input_1.i18nBundle] = yield Promise.all([getI18nBundle("@ui5/webcomponents"), Suggestions2 ? Suggestions2.init() : Promise.resolve()]);
    });
  }
};
__decorate5([property_default({
  type: Boolean
})], Input.prototype, "disabled", void 0);
__decorate5([property_default({
  type: Boolean
})], Input.prototype, "highlight", void 0);
__decorate5([property_default()], Input.prototype, "placeholder", void 0);
__decorate5([property_default({
  type: Boolean
})], Input.prototype, "readonly", void 0);
__decorate5([property_default({
  type: Boolean
})], Input.prototype, "required", void 0);
__decorate5([property_default({
  type: Boolean
})], Input.prototype, "noTypeahead", void 0);
__decorate5([property_default({
  type: InputType_default,
  defaultValue: InputType_default.Text
})], Input.prototype, "type", void 0);
__decorate5([property_default()], Input.prototype, "value", void 0);
__decorate5([property_default({
  noAttribute: true
})], Input.prototype, "_innerValue", void 0);
__decorate5([property_default({
  type: ValueState_default,
  defaultValue: ValueState_default.None
})], Input.prototype, "valueState", void 0);
__decorate5([property_default()], Input.prototype, "name", void 0);
__decorate5([property_default({
  type: Boolean
})], Input.prototype, "showSuggestions", void 0);
__decorate5([property_default({
  validator: Integer_default
})], Input.prototype, "maxlength", void 0);
__decorate5([property_default()], Input.prototype, "accessibleName", void 0);
__decorate5([property_default({
  defaultValue: ""
})], Input.prototype, "accessibleNameRef", void 0);
__decorate5([property_default({
  type: Boolean
})], Input.prototype, "showClearIcon", void 0);
__decorate5([property_default({
  type: Boolean
})], Input.prototype, "_effectiveShowClearIcon", void 0);
__decorate5([property_default({
  type: Boolean
})], Input.prototype, "focused", void 0);
__decorate5([property_default({
  type: Boolean
})], Input.prototype, "openOnMobile", void 0);
__decorate5([property_default({
  type: Boolean
})], Input.prototype, "open", void 0);
__decorate5([property_default({
  type: Boolean
})], Input.prototype, "_forceOpen", void 0);
__decorate5([property_default({
  type: Boolean
})], Input.prototype, "_isValueStateFocused", void 0);
__decorate5([property_default({
  type: Object,
  noAttribute: true
})], Input.prototype, "_inputAccInfo", void 0);
__decorate5([property_default({
  type: Object,
  noAttribute: true
})], Input.prototype, "_nativeInputAttributes", void 0);
__decorate5([property_default({
  validator: Integer_default
})], Input.prototype, "_inputWidth", void 0);
__decorate5([property_default({
  validator: Integer_default
})], Input.prototype, "_listWidth", void 0);
__decorate5([property_default({
  type: Boolean,
  noAttribute: true
})], Input.prototype, "_isPopoverOpen", void 0);
__decorate5([property_default({
  type: Boolean,
  noAttribute: true
})], Input.prototype, "_inputIconFocused", void 0);
__decorate5([property_default({
  type: String,
  noAttribute: true,
  defaultValue: void 0
})], Input.prototype, "_associatedLabelsTexts", void 0);
__decorate5([property_default({
  type: String,
  noAttribute: true,
  defaultValue: void 0
})], Input.prototype, "_accessibleLabelsRefTexts", void 0);
__decorate5([slot_default({
  type: HTMLElement,
  "default": true
})], Input.prototype, "suggestionItems", void 0);
__decorate5([slot_default()], Input.prototype, "icon", void 0);
__decorate5([slot_default()], Input.prototype, "formSupport", void 0);
__decorate5([slot_default({
  type: HTMLElement,
  invalidateOnChildChange: true,
  cloned: true
})], Input.prototype, "valueStateMessage", void 0);
Input = Input_1 = __decorate5([
  customElement_default({
    tag: "ui5-input",
    languageAware: true,
    renderer: LitRenderer_default,
    template: InputTemplate_lit_default,
    staticAreaTemplate: InputPopoverTemplate_lit_default,
    styles: Input_css_default,
    staticAreaStyles: [ResponsivePopoverCommon_css_default, ValueStateMessage_css_default, Suggestions_css_default],
    get dependencies() {
      const Suggestions2 = getFeature("InputSuggestions");
      return [Popover_default, Icon_default].concat(Suggestions2 ? Suggestions2.dependencies : []);
    }
  }),
  event_default("change"),
  event_default("input"),
  event_default("suggestion-item-select", {
    detail: {
      /**
      * @public
      */
      item: {
        type: HTMLElement
      }
    }
  }),
  event_default("suggestion-item-preview", {
    detail: {
      /**
      * @public
      */
      item: {
        type: HTMLElement
      },
      /**
      * @public
      */
      targetRef: {
        type: HTMLElement
      }
    }
  }),
  event_default("suggestion-scroll", {
    detail: {
      /**
      * @public
      */
      scrollTop: {
        type: Integer_default
      },
      /**
      * @public
      */
      scrollContainer: {
        type: HTMLElement
      }
    }
  })
], Input);
Input.define();
var Input_default = Input;
export {
  Input_default as default
};
/*! Bundled license information:

@ui5/webcomponents-base/dist/sap/base/strings/toHex.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-base/dist/sap/base/security/encodeXML.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)
*/
//# sourceMappingURL=@ui5_webcomponents_dist_Input__js.js.map
