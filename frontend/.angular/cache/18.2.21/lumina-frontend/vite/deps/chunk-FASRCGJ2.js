import {
  ResizeHandler_default
} from "./chunk-FMNTYMAV.js";
import {
  AVATAR_TOOLTIP
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
  registerIcon
} from "./chunk-45EM4FL4.js";
import {
  getI18nBundle
} from "./chunk-5RZ2QJVB.js";
import {
  isDesktop,
  isLegacyThemeFamily,
  registerThemePropertiesLoader,
  renderFinished
} from "./chunk-KIL2GIL2.js";
import {
  __async
} from "./chunk-5K356HEJ.js";

// node_modules/@ui5/webcomponents/dist/generated/templates/AvatarTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-avatar-root" tabindex="${ifDefined(this.tabindex)}" data-sap-focus-ref @keyup=${this._onkeyup} @keydown=${this._onkeydown} @click=${this._onclick} role="${ifDefined(this._role)}" aria-haspopup="${ifDefined(this._ariaHasPopup)}" aria-label="${ifDefined(this.accessibleNameText)}" fallback-icon="${ifDefined(this._fallbackIcon)}">${this.hasImage ? block1.call(this, context, tags, suffix) : block2.call(this, context, tags, suffix)}<slot name="badge"></slot></div>`;
}
function block1(context, tags, suffix) {
  return effectiveHtml`<slot></slot>`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`${this.icon ? block3.call(this, context, tags, suffix) : void 0}${this.initials ? block4.call(this, context, tags, suffix) : void 0}`;
}
function block3(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-avatar-icon" name="${ifDefined(this.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-avatar-icon" name="${ifDefined(this.icon)}"></ui5-icon>`;
}
function block4(context, tags, suffix) {
  return suffix ? effectiveHtml`<span class="ui5-avatar-initials ui5-avatar-initials-hidden">${ifDefined(this.validInitials)}</span><${scopeTag("ui5-icon", tags, suffix)} class="ui5-avatar-icon ui5-avatar-icon-fallback ui5-avatar-fallback-icon-hidden" name="${ifDefined(this.fallbackIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<span class="ui5-avatar-initials ui5-avatar-initials-hidden">${ifDefined(this.validInitials)}</span><ui5-icon class="ui5-avatar-icon ui5-avatar-icon-fallback ui5-avatar-fallback-icon-hidden" name="${ifDefined(this.fallbackIcon)}"></ui5-icon>`;
}
var AvatarTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/Avatar.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/Avatar.css.ts",
  content: `:host(:not([hidden])){display:inline-block;box-sizing:border-box;position:relative;font-family:"72override",var(--sapFontFamily)}:host(:not([hidden]).ui5_hovered){opacity:.7}:host([interactive]:not([disabled])){cursor:pointer}:host([interactive]:not([hidden]):active){background-color:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([interactive]:not([hidden]):not([disabled]):not(:active):hover){box-shadow:var(--ui5-v1-24-29-avatar-hover-box-shadow-offset)}:host([interactive][desktop]:not([hidden])) .ui5-avatar-root:focus-within,:host([interactive]:not([hidden])) .ui5-avatar-root:focus-visible{outline:var(--_ui5-v1-24-29_avatar_outline);outline-offset:var(--_ui5-v1-24-29_avatar_focus_offset)}:host([disabled]){opacity:var(--sapContent_DisabledOpacity)}:host{height:3rem;width:3rem;border-radius:50%;border:var(--ui5-v1-24-29-avatar-initials-border);outline:none;color:var(--ui5-v1-24-29-avatar-initials-color)}.ui5-avatar-root{display:flex;align-items:center;justify-content:center;outline:none;height:100%;width:100%;border-radius:inherit}:host([_size="XS"]),:host([size="XS"]){height:2rem;width:2rem;min-height:2rem;min-width:2rem;font-size:var(--_ui5-v1-24-29_avatar_fontsize_XS)}:host(:not([size])),:host([_size="S"]),:host([size="S"]){min-height:3rem;min-width:3rem;font-size:var(--_ui5-v1-24-29_avatar_fontsize_S)}:host([_size="M"]),:host([size="M"]){min-height:4rem;min-width:4rem;font-size:var(--_ui5-v1-24-29_avatar_fontsize_M)}:host([_size="L"]),:host([size="L"]){min-height:5rem;min-width:5rem;font-size:var(--_ui5-v1-24-29_avatar_fontsize_L)}:host([_size="XL"]),:host([size="XL"]){min-height:7rem;min-width:7rem;font-size:var(--_ui5-v1-24-29_avatar_fontsize_XL)}:host .ui5-avatar-icon{height:var(--_ui5-v1-24-29_avatar_fontsize_S);width:var(--_ui5-v1-24-29_avatar_fontsize_S);color:inherit}:host([_size="XS"]) .ui5-avatar-icon,:host([size="XS"]) .ui5-avatar-icon{height:var(--_ui5-v1-24-29_avatar_icon_XS);width:var(--_ui5-v1-24-29_avatar_icon_XS)}:host([_size="S"]) .ui5-avatar-icon,:host([size="S"]) .ui5-avatar-icon{height:var(--_ui5-v1-24-29_avatar_icon_S);width:var(--_ui5-v1-24-29_avatar_icon_S)}:host([_size="M"]) .ui5-avatar-icon,:host([size="M"]) .ui5-avatar-icon{height:var(--_ui5-v1-24-29_avatar_icon_M);width:var(--_ui5-v1-24-29_avatar_icon_M)}:host([_size="L"]) .ui5-avatar-icon,:host([size="L"]) .ui5-avatar-icon{height:var(--_ui5-v1-24-29_avatar_icon_L);width:var(--_ui5-v1-24-29_avatar_icon_L)}:host([_size="XL"]) .ui5-avatar-icon,:host([size="XL"]) .ui5-avatar-icon{height:var(--_ui5-v1-24-29_avatar_icon_XL);width:var(--_ui5-v1-24-29_avatar_icon_XL)}::slotted(*){border-radius:50%;width:100%;height:100%;pointer-events:none}:host([shape="Square"]){border-radius:var(--ui5-v1-24-29-avatar-border-radius)}:host([shape="Square"]) ::slotted(*){border-radius:calc(var(--ui5-v1-24-29-avatar-border-radius) - var(--ui5-v1-24-29-avatar-border-radius-img-deduction))}:host(:not([color-scheme])),:host(:not([_has-image])),:host([_color-scheme="Accent6"]),:host([ui5-avatar][color-scheme="Accent6"]){background-color:var(--ui5-v1-24-29-avatar-accent6);color:var(--ui5-v1-24-29-avatar-accent6-color);border-color:var(--ui5-v1-24-29-avatar-accent6-border-color)}:host([_color-scheme="Accent1"]),:host([ui5-avatar][color-scheme="Accent1"]){background-color:var(--ui5-v1-24-29-avatar-accent1);color:var(--ui5-v1-24-29-avatar-accent1-color);border-color:var(--ui5-v1-24-29-avatar-accent1-border-color)}:host([_color-scheme="Accent2"]),:host([ui5-avatar][color-scheme="Accent2"]){background-color:var(--ui5-v1-24-29-avatar-accent2);color:var(--ui5-v1-24-29-avatar-accent2-color);border-color:var(--ui5-v1-24-29-avatar-accent2-border-color)}:host([_color-scheme="Accent3"]),:host([ui5-avatar][color-scheme="Accent3"]){background-color:var(--ui5-v1-24-29-avatar-accent3);color:var(--ui5-v1-24-29-avatar-accent3-color);border-color:var(--ui5-v1-24-29-avatar-accent3-border-color)}:host([_color-scheme="Accent4"]),:host([ui5-avatar][color-scheme="Accent4"]){background-color:var(--ui5-v1-24-29-avatar-accent4);color:var(--ui5-v1-24-29-avatar-accent4-color);border-color:var(--ui5-v1-24-29-avatar-accent4-border-color)}:host([_color-scheme="Accent5"]),:host([ui5-avatar][color-scheme="Accent5"]){background-color:var(--ui5-v1-24-29-avatar-accent5);color:var(--ui5-v1-24-29-avatar-accent5-color);border-color:var(--ui5-v1-24-29-avatar-accent5-border-color)}:host([_color-scheme="Accent7"]),:host([ui5-avatar][color-scheme="Accent7"]){background-color:var(--ui5-v1-24-29-avatar-accent7);color:var(--ui5-v1-24-29-avatar-accent7-color);border-color:var(--ui5-v1-24-29-avatar-accent7-border-color)}:host([_color-scheme="Accent8"]),:host([ui5-avatar][color-scheme="Accent8"]){background-color:var(--ui5-v1-24-29-avatar-accent8);color:var(--ui5-v1-24-29-avatar-accent8-color);border-color:var(--ui5-v1-24-29-avatar-accent8-border-color)}:host([_color-scheme="Accent9"]),:host([ui5-avatar][color-scheme="Accent9"]){background-color:var(--ui5-v1-24-29-avatar-accent9);color:var(--ui5-v1-24-29-avatar-accent9-color);border-color:var(--ui5-v1-24-29-avatar-accent9-border-color)}:host([_color-scheme="Accent10"]),:host([ui5-avatar][color-scheme="Accent10"]){background-color:var(--ui5-v1-24-29-avatar-accent10);color:var(--ui5-v1-24-29-avatar-accent10-color);border-color:var(--ui5-v1-24-29-avatar-accent10-border-color)}:host([_color-scheme="Placeholder"]),:host([ui5-avatar][color-scheme="Placeholder"]){background-color:var(--ui5-v1-24-29-avatar-placeholder);color:var(--ui5-v1-24-29-avatar-placeholder-color);border-color:var(--ui5-v1-24-29-avatar-placeholder-border-color)}:host([_has-image]){color:var(--ui5-v1-24-29-avatar-accent10-color);background-color:transparent;vertical-align:middle}.ui5-avatar-initials{color:inherit}.ui5-avatar-icon~.ui5-avatar-initials,.ui5-avatar-icon~.ui5-avatar-icon-fallback{display:none}.ui5-avatar-fallback-icon-hidden{display:none}.ui5-avatar-initials-hidden{position:absolute;visibility:hidden;z-index:0;pointer-events:none}::slotted([slot="badge"]){position:absolute;bottom:0;right:0;width:1.125rem;height:1.125rem;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSmallSize);color:var(--sapBackgroundColor);--_ui5-v1-24-29-badge-height: 1.125rem;--_ui5-v1-24-29-badge-border-radius: 50%;--ui5-v1-24-29-badge-color-scheme-1-background: var(--sapButton_Emphasized_Background);--ui5-v1-24-29-badge-color-scheme-1-color: var(--sapButton_Emphasized_TextColor);--ui5-v1-24-29-badge-color-scheme-1-border: var(--sapButton_Emphasized_BorderColor)}:host([_size="L"]) ::slotted([slot="badge"]),:host([size="L"]) ::slotted([slot="badge"]){width:1.25rem;height:1.25rem;--_ui5-v1-24-29-badge-height: 1.25rem;--_ui5-v1-24-29-badge-icon-width: .875rem}:host([_size="XL"]) ::slotted([slot="badge"]),:host([size="XL"]) ::slotted([slot="badge"]){width:1.75rem;height:1.75rem;--_ui5-v1-24-29-badge-height: 1.75rem;--_ui5-v1-24-29-badge-icon-width: 1rem}:host([shape="Square"]) ::slotted([slot="badge"]){bottom:-.125rem;right:-.125rem}:host([_size="L"][shape="Square"]) ::slotted([slot="badge"]),:host([size="L"][shape="Square"]) ::slotted([slot="badge"]){bottom:-.1875rem;right:-.1875rem}:host([_size="XL"][shape="Square"]) ::slotted([slot="badge"]),:host([size="XL"][shape="Square"]) ::slotted([slot="badge"]){bottom:-.25rem;right:-.25rem}
`
};
var Avatar_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/types/AvatarSize.js
var AvatarSize;
(function(AvatarSize2) {
  AvatarSize2["XS"] = "XS";
  AvatarSize2["S"] = "S";
  AvatarSize2["M"] = "M";
  AvatarSize2["L"] = "L";
  AvatarSize2["XL"] = "XL";
})(AvatarSize || (AvatarSize = {}));
var AvatarSize_default = AvatarSize;

// node_modules/@ui5/webcomponents/dist/types/AvatarShape.js
var AvatarShape;
(function(AvatarShape2) {
  AvatarShape2["Circle"] = "Circle";
  AvatarShape2["Square"] = "Square";
})(AvatarShape || (AvatarShape = {}));
var AvatarShape_default = AvatarShape;

// node_modules/@ui5/webcomponents/dist/types/AvatarColorScheme.js
var AvatarColorScheme;
(function(AvatarColorScheme2) {
  AvatarColorScheme2["Accent1"] = "Accent1";
  AvatarColorScheme2["Accent2"] = "Accent2";
  AvatarColorScheme2["Accent3"] = "Accent3";
  AvatarColorScheme2["Accent4"] = "Accent4";
  AvatarColorScheme2["Accent5"] = "Accent5";
  AvatarColorScheme2["Accent6"] = "Accent6";
  AvatarColorScheme2["Accent7"] = "Accent7";
  AvatarColorScheme2["Accent8"] = "Accent8";
  AvatarColorScheme2["Accent9"] = "Accent9";
  AvatarColorScheme2["Accent10"] = "Accent10";
  AvatarColorScheme2["Placeholder"] = "Placeholder";
})(AvatarColorScheme || (AvatarColorScheme = {}));
var AvatarColorScheme_default = AvatarColorScheme;

// node_modules/@ui5/webcomponents-icons/dist/v4/employee.js
var name = "employee";
var pathData = "M448 512H64V384q0-26 10-49.5t27.5-41T142 266t50-10h64q-27 0-50-10t-40.5-27.5T138 178t-10-50q0-26 10-49.5t27.5-41T206 10t50-10q26 0 49.5 10t41 27.5 27.5 41 10 49.5q0 27-10 50t-27.5 40.5-41 27.5-49.5 10h64q26 0 49.5 10t41 27.5 27.5 41 10 49.5v128zM96 384v96h320v-96q0-40-28-68t-68-28H192q-40 0-68 28t-28 68zm160-160q40 0 68-28t28-68-28-68-68-28-68 28-28 68 28 68 68 28zm32 192v-32h96v32h-96z";
var ltr = false;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, {
  pathData,
  ltr,
  collection,
  packageName
});

// node_modules/@ui5/webcomponents-icons/dist/v5/employee.js
var name2 = "employee";
var pathData2 = "M342 255q48 23 77 67.5t29 99.5v32q0 11-7.5 18.5T422 480H90q-11 0-18.5-7.5T64 454v-32q0-55 29-99.5t77-67.5l-4-5q-19-17-28.5-40.5T128 160q0-27 10-50t27.5-40.5 41-27.5T256 32t49.5 10.5 41 28T374 111t10 49q0 27-11 52t-31 43zm-163-95q0 32 22.5 54.5T256 237t54.5-22.5T333 160t-22.5-54.5T256 83t-54.5 22.5T179 160zm51 181l-25-15q-13-7-13-19v-6q-34 17-55.5 49T115 422v7h115v-88zm167 81q0-40-21-72t-56-49v6q0 12-13 19l-26 15v88h116v-7zm-71-70q11 0 18.5 7.5T352 378t-7.5 18-18.5 7h-12q-11 0-18.5-7t-7.5-18 7.5-18.5T314 352h12z";
var ltr2 = false;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, {
  pathData: pathData2,
  ltr: ltr2,
  collection: collection2,
  packageName: packageName2
});

// node_modules/@ui5/webcomponents-icons/dist/employee.js
var pathData3 = isLegacyThemeFamily() ? pathData : pathData2;

// node_modules/@ui5/webcomponents/dist/Avatar.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Avatar_1;
var Avatar = Avatar_1 = class Avatar2 extends UI5Element_default {
  constructor() {
    super();
    this._handleResizeBound = this.handleResize.bind(this);
  }
  static onDefine() {
    return __async(this, null, function* () {
      Avatar_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  get tabindex() {
    return this.forcedTabIndex || (this._interactive ? "0" : "-1");
  }
  /**
   * Returns the effective avatar size.
   * @default "S"
   * @private
   */
  get effectiveSize() {
    return this.getAttribute("size") || this._size;
  }
  /**
   * Returns the effective background color.
   * @default "Accent6"
   * @private
   */
  get еffectiveBackgroundColor() {
    return this.getAttribute("color-scheme") || this._colorScheme;
  }
  get _role() {
    return this._interactive ? "button" : "img";
  }
  get _ariaHasPopup() {
    return this._getAriaHasPopup();
  }
  get _fallbackIcon() {
    if (this.fallbackIcon === "") {
      this.fallbackIcon = "employee";
    }
    return this.fallbackIcon;
  }
  get _interactive() {
    return this.interactive && !this.disabled;
  }
  get validInitials() {
    const validInitials = /^[a-zA-Zà-üÀ-Ü]{1,3}$/, areInitialsValid = this.initials && validInitials.test(this.initials);
    if (areInitialsValid) {
      return this.initials;
    }
    return null;
  }
  get accessibleNameText() {
    if (this.accessibleName) {
      return this.accessibleName;
    }
    const defaultLabel = Avatar_1.i18nBundle.getText(AVATAR_TOOLTIP);
    return this.initials ? `${defaultLabel} ${this.initials}`.trim() : defaultLabel;
  }
  get hasImage() {
    this._hasImage = !!this.image.length;
    return this._hasImage;
  }
  get initialsContainer() {
    return this.getDomRef().querySelector(".ui5-avatar-initials");
  }
  get fallBackIconDomRef() {
    return this.getDomRef().querySelector(".ui5-avatar-icon-fallback");
  }
  onBeforeRendering() {
    this._onclick = this._interactive ? this._onClickHandler.bind(this) : void 0;
  }
  onAfterRendering() {
    return __async(this, null, function* () {
      yield renderFinished();
      if (this.initials && !this.icon) {
        this._checkInitials();
      }
    });
  }
  onEnterDOM() {
    if (isDesktop()) {
      this.setAttribute("desktop", "");
    }
    this.initialsContainer && ResizeHandler_default.register(this.initialsContainer, this._handleResizeBound);
  }
  onExitDOM() {
    this.initialsContainer && ResizeHandler_default.deregister(this.initialsContainer, this._handleResizeBound);
  }
  handleResize() {
    if (this.initials && !this.icon) {
      this._checkInitials();
    }
  }
  _checkInitials() {
    const avatar = this.getDomRef();
    const avatarInitials = avatar.querySelector(".ui5-avatar-initials");
    const validInitials = this.validInitials && avatarInitials && avatarInitials.scrollWidth <= avatar.scrollWidth;
    if (validInitials) {
      this.showInitials();
      return;
    }
    this.showFallbackIcon();
  }
  showFallbackIcon() {
    this.initialsContainer?.classList.add("ui5-avatar-initials-hidden");
    this.fallBackIconDomRef?.classList.remove("ui5-avatar-fallback-icon-hidden");
  }
  showInitials() {
    this.initialsContainer?.classList.remove("ui5-avatar-initials-hidden");
    this.fallBackIconDomRef?.classList.add("ui5-avatar-fallback-icon-hidden");
  }
  _onClickHandler(e) {
    e.stopPropagation();
    this._fireClick();
  }
  _onkeydown(e) {
    if (!this._interactive) {
      return;
    }
    if (isEnter(e)) {
      this._fireClick();
    }
    if (isSpace(e)) {
      e.preventDefault();
    }
  }
  _onkeyup(e) {
    if (this._interactive && !e.shiftKey && isSpace(e)) {
      this._fireClick();
    }
  }
  _fireClick() {
    this.fireEvent("click");
  }
  _getAriaHasPopup() {
    if (!this._interactive || this.ariaHaspopup === "") {
      return;
    }
    return this.ariaHaspopup;
  }
};
__decorate([property_default({
  type: Boolean
})], Avatar.prototype, "disabled", void 0);
__decorate([property_default({
  type: Boolean
})], Avatar.prototype, "interactive", void 0);
__decorate([property_default()], Avatar.prototype, "icon", void 0);
__decorate([property_default()], Avatar.prototype, "fallbackIcon", void 0);
__decorate([property_default()], Avatar.prototype, "initials", void 0);
__decorate([property_default({
  type: AvatarShape_default,
  defaultValue: AvatarShape_default.Circle
})], Avatar.prototype, "shape", void 0);
__decorate([property_default({
  type: AvatarSize_default,
  defaultValue: AvatarSize_default.S
})], Avatar.prototype, "size", void 0);
__decorate([property_default({
  type: AvatarSize_default,
  defaultValue: AvatarSize_default.S
})], Avatar.prototype, "_size", void 0);
__decorate([property_default({
  type: AvatarColorScheme_default,
  defaultValue: AvatarColorScheme_default.Accent6
})], Avatar.prototype, "colorScheme", void 0);
__decorate([property_default({
  type: AvatarColorScheme_default,
  defaultValue: AvatarColorScheme_default.Accent6
})], Avatar.prototype, "_colorScheme", void 0);
__decorate([property_default()], Avatar.prototype, "accessibleName", void 0);
__decorate([property_default()], Avatar.prototype, "ariaHaspopup", void 0);
__decorate([property_default({
  noAttribute: true
})], Avatar.prototype, "forcedTabIndex", void 0);
__decorate([property_default({
  type: Boolean
})], Avatar.prototype, "_hasImage", void 0);
__decorate([slot_default({
  type: HTMLElement,
  "default": true
})], Avatar.prototype, "image", void 0);
__decorate([slot_default()], Avatar.prototype, "badge", void 0);
Avatar = Avatar_1 = __decorate([
  customElement_default({
    tag: "ui5-avatar",
    languageAware: true,
    renderer: LitRenderer_default,
    styles: Avatar_css_default,
    template: AvatarTemplate_lit_default,
    dependencies: [Icon_default]
  }),
  event_default("click")
], Avatar);
Avatar.define();
var Avatar_default = Avatar;

export {
  Avatar_default
};
//# sourceMappingURL=chunk-FASRCGJ2.js.map
