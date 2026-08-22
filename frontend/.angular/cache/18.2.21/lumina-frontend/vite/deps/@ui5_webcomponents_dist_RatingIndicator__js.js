import {
  Float_default
} from "./chunk-CALLVILA.js";
import {
  Integer_default
} from "./chunk-YJ42QTVF.js";
import {
  getEnableDefaultTooltips
} from "./chunk-BFT4H3DB.js";
import {
  getEffectiveAriaLabelText
} from "./chunk-BY3NBTSA.js";
import {
  RATING_INDICATOR_ARIA_DESCRIPTION,
  RATING_INDICATOR_TEXT,
  RATING_INDICATOR_TOOLTIP_TEXT
} from "./chunk-MKUK4J7G.js";
import {
  Icon_default,
  event_default
} from "./chunk-4CCMOZQP.js";
import {
  LitRenderer_default,
  effectiveHtml,
  ifDefined,
  isDown,
  isEnd,
  isEnter,
  isHome,
  isLeft,
  isRight,
  isSpace,
  isUp,
  parameters_bundle_css_default,
  parameters_bundle_css_default2,
  repeat,
  scopeTag
} from "./chunk-S2KYTLGV.js";
import {
  UI5Element_default,
  customElement_default,
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
  isLegacyThemeFamily,
  registerThemePropertiesLoader
} from "./chunk-KIL2GIL2.js";
import {
  __async
} from "./chunk-5K356HEJ.js";

// node_modules/@ui5/webcomponents/dist/generated/templates/RatingIndicatorTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-rating-indicator-root" role="slider" aria-roledescription="${ifDefined(this._ariaRoleDescription)}" aria-valuemin="0" aria-valuenow="${ifDefined(this.value)}" aria-valuemax="${ifDefined(this.max)}" aria-valuetext="${ifDefined(this.value)} of ${ifDefined(this.max)}" aria-orientation="horizontal" aria-disabled="${ifDefined(this._ariaDisabled)}" aria-readonly="${ifDefined(this.ariaReadonly)}" aria-description="${ifDefined(this._ariaDescription)}" tabindex="${ifDefined(this.effectiveTabIndex)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @click="${this._onclick}" @keydown="${this._onkeydown}" title="${ifDefined(this.ratingTooltip)}" aria-label="${ifDefined(this._ariaLabel)}"><ul class="ui5-rating-indicator-list" aria-hidden="true">${repeat(this._stars, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}</ul></div>`;
}
function block1(context, tags, suffix, item, index) {
  return effectiveHtml`${item.selected ? block2.call(this, context, tags, suffix, item, index) : block3.call(this, context, tags, suffix, item, index)}`;
}
function block2(context, tags, suffix, item, index) {
  return suffix ? effectiveHtml`<li data-ui5-value="${ifDefined(item.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-sel"><${scopeTag("ui5-icon", tags, suffix)} data-ui5-value="${ifDefined(item.index)}" name="favorite"></${scopeTag("ui5-icon", tags, suffix)}></li>` : effectiveHtml`<li data-ui5-value="${ifDefined(item.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-sel"><ui5-icon data-ui5-value="${ifDefined(item.index)}" name="favorite"></ui5-icon></li>`;
}
function block3(context, tags, suffix, item, index) {
  return effectiveHtml`${item.halfStar ? block4.call(this, context, tags, suffix, item, index) : block5.call(this, context, tags, suffix, item, index)}`;
}
function block4(context, tags, suffix, item, index) {
  return suffix ? effectiveHtml`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-half"><${scopeTag("ui5-icon", tags, suffix)} data-ui5-value="${ifDefined(item.index)}" name="unfavorite"></${scopeTag("ui5-icon", tags, suffix)}><div class="ui5-rating-indicator-half-icon-wrapper"><${scopeTag("ui5-icon", tags, suffix)} data-ui5-value="${ifDefined(item.index)}" name="favorite" class="ui5-rating-indicator-half-icon"></${scopeTag("ui5-icon", tags, suffix)}></div></li>` : effectiveHtml`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-half"><ui5-icon data-ui5-value="${ifDefined(item.index)}" name="unfavorite"></ui5-icon><div class="ui5-rating-indicator-half-icon-wrapper"><ui5-icon data-ui5-value="${ifDefined(item.index)}" name="favorite" class="ui5-rating-indicator-half-icon"></ui5-icon></div></li>`;
}
function block5(context, tags, suffix, item, index) {
  return effectiveHtml`${this.readonly ? block6.call(this, context, tags, suffix, item, index) : block7.call(this, context, tags, suffix, item, index)}`;
}
function block6(context, tags, suffix, item, index) {
  return suffix ? effectiveHtml`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><${scopeTag("ui5-icon", tags, suffix)} data-ui5-value="${ifDefined(item.index)}" name="favorite"></${scopeTag("ui5-icon", tags, suffix)}></li>` : effectiveHtml`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><ui5-icon data-ui5-value="${ifDefined(item.index)}" name="favorite"></ui5-icon></li>`;
}
function block7(context, tags, suffix, item, index) {
  return effectiveHtml`${this.disabled ? block8.call(this, context, tags, suffix, item, index) : block9.call(this, context, tags, suffix, item, index)}`;
}
function block8(context, tags, suffix, item, index) {
  return suffix ? effectiveHtml`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><${scopeTag("ui5-icon", tags, suffix)} data-ui5-value="${ifDefined(item.index)}" name="favorite"></${scopeTag("ui5-icon", tags, suffix)}></li>` : effectiveHtml`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><ui5-icon data-ui5-value="${ifDefined(item.index)}" name="favorite"></ui5-icon></li>`;
}
function block9(context, tags, suffix, item, index) {
  return suffix ? effectiveHtml`<li data-ui5-value="${ifDefined(item.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><${scopeTag("ui5-icon", tags, suffix)} data-ui5-value="${ifDefined(item.index)}" name="unfavorite"></${scopeTag("ui5-icon", tags, suffix)}></li>` : effectiveHtml`<li data-ui5-value="${ifDefined(item.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><ui5-icon data-ui5-value="${ifDefined(item.index)}" name="unfavorite"></ui5-icon></li>`;
}
var RatingIndicatorTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents-icons/dist/v4/favorite.js
var name = "favorite";
var pathData = "M378.36 297.834q-5.996 3.998-2.998 8.995l71.96 193.892q1.999 4.997-2.499 8.995t-9.494.999l-174.903-123.93q-4.997-3-8.995 0L76.53 510.714q-4.997 2.998-9.495-1t-2.499-8.994l71.96-193.892q2-5.997-2.998-8.995L3.569 205.885q-4.997-2.998-2.998-8.495t6.996-5.497h165.908q4.997 0 7.995-4.997L248.433 4.997Q250.432 0 255.929 0t7.495 4.997l66.963 181.899q1.999 4.997 7.996 4.997H503.29q5.996 0 7.995 5.497t-2.998 8.495z";
var ltr = false;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, {
  pathData,
  ltr,
  collection,
  packageName
});

// node_modules/@ui5/webcomponents-icons/dist/v5/favorite.js
var name2 = "favorite";
var pathData2 = "M0 198q0-9 6.5-16t15.5-9l148-21 63-137q7-15 23-15t23 15l64 137 147 21q10 2 16 9t6 16q0 11-7 18L399 328l26 154q1 2 1 5 0 10-7.5 17.5T400 512q-6 0-12-3l-132-74-132 74q-4 3-12 3-11 0-18.5-7.5T86 487q0-2 .5-2.5t.5-2.5l26-154L7 216q-7-7-7-18z";
var ltr2 = false;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, {
  pathData: pathData2,
  ltr: ltr2,
  collection: collection2,
  packageName: packageName2
});

// node_modules/@ui5/webcomponents-icons/dist/favorite.js
var pathData3 = isLegacyThemeFamily() ? pathData : pathData2;

// node_modules/@ui5/webcomponents-icons/dist/v4/unfavorite.js
var name3 = "unfavorite";
var pathData4 = "M8.569 191.946h164.954q5.998 0 7.998-4.998l66.981-181.95Q250.502 0 256.5 0q4.998 0 6.998 4.999l66.981 181.949q2 4.998 7.998 4.998h165.954q4.998 0 6.998 5.499t-3 8.498l-129.963 91.974q-4 2.999-3 8.997l71.98 193.946q2 4.999-1 7.998t-6.997 3q-3 0-4-1L260.5 386.891q-1-1-4-1-3.998 0-4.998 1L76.551 510.857q-1 1-4 1-3.999 0-6.998-2.999t-1-7.998l71.98-193.946q2-5.998-2.999-8.997L3.57 205.943q-4.998-3-2.999-8.498t7.998-5.499zm143.96 79.978q10.997 7.998 14.996 20.494t-1 25.493l-44.987 121.966L233.506 360.9q9.997-6.998 22.994-6.998 11.996 0 21.994 5.999l111.968 79.977-44.987-121.966q-4.999-12.996-1-25.493t14.996-20.494l68.98-47.986h-89.974q-26.992 0-37.99-25.993L256.5 76.979l-44.988 120.966q-10.997 25.993-37.989 25.993H84.548z";
var ltr3 = false;
var collection3 = "SAP-icons-v4";
var packageName3 = "@ui5/webcomponents-icons";
registerIcon(name3, {
  pathData: pathData4,
  ltr: ltr3,
  collection: collection3,
  packageName: packageName3
});

// node_modules/@ui5/webcomponents-icons/dist/v5/unfavorite.js
var name4 = "unfavorite";
var pathData5 = "M400 510q-7 0-12-3l-132-74-131 74q-6 3-13 3-11 0-18.5-7T86 485q0-2 .5-2.5t.5-1.5l26-155L7 214q-7-7-7-17t6.5-17 15.5-9l148-21 63-137q7-15 23-15t23 15l64 137 147 21q10 2 16 9t6 17q0 11-7 17L399 326l26 155q1 1 1 4 0 11-7.5 18t-18.5 7zM256 379q7 0 13 3l97 54-20-114q0-7 1-12t6-10l81-85-112-16q-13-1-20-15l-46-99-46 99q-5 13-19 15L78 215l81 85q5 5 6 10t1 12l-20 114 98-54q5-3 12-3z";
var ltr4 = false;
var collection4 = "SAP-icons-v5";
var packageName4 = "@ui5/webcomponents-icons";
registerIcon(name4, {
  pathData: pathData5,
  ltr: ltr4,
  collection: collection4,
  packageName: packageName4
});

// node_modules/@ui5/webcomponents-icons/dist/unfavorite.js
var pathData6 = isLegacyThemeFamily() ? pathData4 : pathData5;

// node_modules/@ui5/webcomponents/dist/generated/themes/RatingIndicator.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/RatingIndicator.css.ts",
  content: `:host(:not([hidden])){display:inline-block;font-size:24px;margin:var(--_ui5-v1-24-29_rating_indicator_component_spacing);cursor:pointer}:host([disabled]){opacity:.4;cursor:initial;outline:none}:host([readonly]){cursor:initial}:host([disabled]) .ui5-rating-indicator-item-unsel,:host([readonly]) .ui5-rating-indicator-item-unsel{padding-inline:var(--_ui5-v1-24-29_rating_indicator_readonly_item_spacing);width:var(--_ui5-v1-24-29_rating_indicator_readonly_item_width);height:var(--_ui5-v1-24-29_rating_indicator_readonly_item_height)}:host(:not([readonly]):not([disabled])) .ui5-rating-indicator-root:hover{opacity:.9}:host([_focused]){outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:var(--_ui5-v1-24-29_rating_indicator_outline_offset);border-radius:var(--_ui5-v1-24-29_rating_indicator_border_radius)}[ui5-icon]{display:flex;text-shadow:var(--sapContent_TextShadow)}.ui5-rating-indicator-root{outline:none;position:relative}.ui5-rating-indicator-list{list-style-type:none;display:flex;align-items:center;margin:0;padding:0}.ui5-rating-indicator-item{position:relative;width:var(--_ui5-v1-24-29_rating_indicator_item_width);height:var(--_ui5-v1-24-29_rating_indicator_item_height)}.ui5-rating-indicator-item:not(:last-child){margin-inline-end:.1875rem}.ui5-rating-indicator-item [ui5-icon]{width:100%;height:100%;color:inherit;user-select:none}.ui5-rating-indicator-item.ui5-rating-indicator-item-sel{color:var(--sapContent_RatedColor)}.ui5-rating-indicator-item.ui5-rating-indicator-item-unsel,.ui5-rating-indicator-item.ui5-rating-indicator-item-half{color:var(--sapContent_UnratedColor)}.ui5-rating-indicator-item [ui5-icon].ui5-rating-indicator-half-icon{position:absolute;inset-inline-start:50%;color:var(--sapContent_RatedColor)}.ui5-rating-indicator-half-icon-wrapper{width:100%;height:100%;position:absolute;inset-inline-start:-50%;top:0;z-index:32;overflow:hidden}
`
};
var RatingIndicator_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/RatingIndicator.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RatingIndicator_1;
var RatingIndicator = RatingIndicator_1 = class RatingIndicator2 extends UI5Element_default {
  static onDefine() {
    return __async(this, null, function* () {
      RatingIndicator_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  constructor() {
    super();
  }
  onBeforeRendering() {
    this.calcState();
  }
  calcState() {
    this._stars = [];
    for (let i = 1; i < this.max + 1; i++) {
      const remainder = Math.round((this.value - Math.floor(this.value)) * 10);
      let halfStar = false, tempValue = this.value;
      if (Math.floor(this.value) + 1 === i && remainder > 2 && remainder < 8) {
        halfStar = true;
      } else if (remainder <= 2) {
        tempValue = Math.floor(this.value);
      } else if (remainder >= 8) {
        tempValue = Math.ceil(this.value);
      }
      this._stars.push({
        selected: i <= tempValue,
        index: i,
        halfStar
      });
    }
  }
  _onclick(e) {
    const target = e.target;
    if (!(target instanceof HTMLElement) || this.disabled || this.readonly) {
      return;
    }
    const targetValue = target.getAttribute("data-ui5-value");
    if (targetValue !== null) {
      this.value = parseInt(targetValue);
      if (this.value === 1 && this._liveValue === 1) {
        this.value = 0;
      }
      if (this._liveValue !== this.value) {
        this.fireEvent("change");
        this._liveValue = this.value;
      }
    }
  }
  _onkeydown(e) {
    if (this.disabled || this.readonly) {
      return;
    }
    const isDecrease = isDown(e) || isLeft(e);
    const isIncrease = isRight(e) || isUp(e);
    const isIncreaseWithReset = isSpace(e) || isEnter(e);
    const isMin = isHome(e);
    const isMax = isEnd(e);
    const isNumber = e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105;
    if (isDecrease || isIncrease || isIncreaseWithReset || isMin || isMax || isNumber) {
      e.preventDefault();
      if (isDecrease && this.value > 0) {
        this.value = Math.round(this.value - 1);
      } else if (isIncrease && this.value < this.max) {
        this.value = Math.round(this.value + 1);
      } else if (isIncreaseWithReset) {
        const proposedValue = Math.round(this.value + 1);
        this.value = proposedValue > this.max ? 0 : proposedValue;
      } else if (isMin) {
        this.value = 0;
      } else if (isMax) {
        this.value = this.max;
      } else if (isNumber) {
        const pressedNumber = parseInt(e.key);
        this.value = pressedNumber > this.max ? this.max : pressedNumber;
      }
      this.fireEvent("change");
    }
  }
  _onfocusin() {
    if (this.disabled) {
      return;
    }
    this._focused = true;
    this._liveValue = this.value;
  }
  _onfocusout() {
    this._focused = false;
  }
  get effectiveTabIndex() {
    const tabindex = this.getAttribute("tabindex");
    return this.disabled ? "-1" : tabindex || "0";
  }
  get ratingTooltip() {
    if (this.tooltip) {
      return this.tooltip;
    }
    return getEnableDefaultTooltips() ? this.defaultTooltip : void 0;
  }
  get defaultTooltip() {
    return RatingIndicator_1.i18nBundle.getText(RATING_INDICATOR_TOOLTIP_TEXT);
  }
  get _ariaRoleDescription() {
    return RatingIndicator_1.i18nBundle.getText(RATING_INDICATOR_TEXT);
  }
  get _ariaDisabled() {
    return this.disabled || void 0;
  }
  get _ariaLabel() {
    return getEffectiveAriaLabelText(this);
  }
  get _ariaDescription() {
    return this.required ? RatingIndicator_1.i18nBundle.getText(RATING_INDICATOR_ARIA_DESCRIPTION) : void 0;
  }
  get ariaReadonly() {
    return this.readonly ? "true" : void 0;
  }
};
__decorate([property_default({
  validator: Float_default,
  defaultValue: 0
})], RatingIndicator.prototype, "value", void 0);
__decorate([property_default({
  validator: Integer_default,
  defaultValue: 5
})], RatingIndicator.prototype, "max", void 0);
__decorate([property_default({
  type: Boolean
})], RatingIndicator.prototype, "disabled", void 0);
__decorate([property_default({
  type: Boolean
})], RatingIndicator.prototype, "readonly", void 0);
__decorate([property_default()], RatingIndicator.prototype, "accessibleName", void 0);
__decorate([property_default({
  defaultValue: ""
})], RatingIndicator.prototype, "accessibleNameRef", void 0);
__decorate([property_default({
  type: Boolean
})], RatingIndicator.prototype, "required", void 0);
__decorate([property_default()], RatingIndicator.prototype, "tooltip", void 0);
__decorate([property_default({
  type: Object,
  multiple: true
})], RatingIndicator.prototype, "_stars", void 0);
__decorate([property_default({
  type: Boolean
})], RatingIndicator.prototype, "_focused", void 0);
RatingIndicator = RatingIndicator_1 = __decorate([
  customElement_default({
    tag: "ui5-rating-indicator",
    languageAware: true,
    renderer: LitRenderer_default,
    styles: RatingIndicator_css_default,
    template: RatingIndicatorTemplate_lit_default,
    dependencies: [Icon_default]
  }),
  event_default("change")
], RatingIndicator);
RatingIndicator.define();
var RatingIndicator_default = RatingIndicator;
export {
  RatingIndicator_default as default
};
//# sourceMappingURL=@ui5_webcomponents_dist_RatingIndicator__js.js.map
