import {
  Float_default
} from "./chunk-CALLVILA.js";
import {
  ResizeHandler_default
} from "./chunk-UQ5I4VPN.js";
import {
  Icon_default,
  event_default
} from "./chunk-U3UACDRZ.js";
import {
  Integer_default
} from "./chunk-YJ42QTVF.js";
import {
  RANGE_SLIDER_ARIA_DESCRIPTION,
  RANGE_SLIDER_END_HANDLE_DESCRIPTION,
  RANGE_SLIDER_START_HANDLE_DESCRIPTION
} from "./chunk-MKUK4J7G.js";
import {
  LitRenderer_default,
  classMap,
  effectiveHtml,
  ifDefined,
  isDown,
  isDownCtrl,
  isEnd,
  isEscape,
  isHome,
  isLeft,
  isLeftCtrl,
  isMinus,
  isPageDown,
  isPageUp,
  isPlus,
  isRight,
  isRightCtrl,
  isUp,
  isUpCtrl,
  parameters_bundle_css_default,
  parameters_bundle_css_default2,
  repeat,
  scopeTag,
  styleMap
} from "./chunk-BK2PCNJ4.js";
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
  isPhone,
  registerThemePropertiesLoader,
  supportsTouch
} from "./chunk-JASJJZVS.js";
import "./chunk-XQ36JZLT.js";
import {
  __async
} from "./chunk-5K356HEJ.js";

// node_modules/@ui5/webcomponents-icons/dist/v4/direction-arrows.js
var name = "direction-arrows";
var pathData = "M507 244q5 5 5 12 0 6-5 11L394 379q-5 5-12 5-6 0-11-5t-5-11V144q0-12 10-15 2-1 6-1 8 0 12 4zM135 129q10 3 10 15v224q0 6-4.5 11t-11.5 5q-6 0-11-5L5 267q-5-5-5-11 0-7 5-12l113-112q4-4 11-4 4 0 6 1z";
var ltr = false;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, {
  pathData,
  ltr,
  collection,
  packageName
});

// node_modules/@ui5/webcomponents-icons/dist/v5/direction-arrows.js
var name2 = "direction-arrows";
var pathData2 = "M135 128q11 0 18 7.5t7 18.5v204q0 11-8 18.5t-18 7.5-17-7L8 275q-8-8-8-19t8-19l109-102q7-7 18-7zm369 109q8 8 8 19t-8 19L395 377q-7 7-17 7t-18-7.5-8-18.5V154q0-12 8-19t19-7q9 0 16 7z";
var ltr2 = false;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, {
  pathData: pathData2,
  ltr: ltr2,
  collection: collection2,
  packageName: packageName2
});

// node_modules/@ui5/webcomponents-icons/dist/direction-arrows.js
var pathData3 = isLegacyThemeFamily() ? pathData : pathData2;

// node_modules/@ui5/webcomponents/dist/generated/themes/SliderBase.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/SliderBase.css.ts",
  content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host([disabled]){opacity:var(--_ui5-v1-24-29_slider_disabled_opacity);cursor:default;pointer-events:none}:host{box-sizing:border-box;cursor:pointer;vertical-align:top;width:100%}:host(:not([hidden])){display:inline-block}.ui5-slider-root{box-sizing:border-box;height:3.3125rem;outline:none;padding:var(--_ui5-v1-24-29_slider_padding);touch-action:none}.ui5-slider-inner{background-repeat:no-repeat;position:relative;min-width:var(--_ui5-v1-24-29_slider_inner_min_width);height:100%}.ui5-slider-progress-container{width:100%;background:var(--_ui5-v1-24-29_slider_progress_container_background);border:var(--_ui5-v1-24-29_slider_progress_border);border-radius:var(--_ui5-v1-24-29_slider_progress_border_radius);height:var(--_ui5-v1-24-29_slider_inner_height);position:relative;box-sizing:var(--_ui5-v1-24-29_slider_progress_box_sizing);top:var(--_ui5-v1-24-29_slider_progress_container_top)}.ui5-slider-progress-container:before,.ui5-slider-progress-container:after{display:var(--_ui5-v1-24-29_slider_progress_container_dot_display);content:"";position:absolute;border-radius:50%;width:var(--_ui5-v1-24-29_slider_start_end_point_size);height:var(--_ui5-v1-24-29_slider_start_end_point_size);top:var(--_ui5-v1-24-29_slider_start_end_point_top)}.ui5-slider-progress-container:before{inset-inline-start:var(--_ui5-v1-24-29_slider_start_end_point_left);background-color:var(--_ui5-v1-24-29_slider_progress_before_background);border:var(--_ui5-v1-24-29_slider_progress_before_border)}.ui5-slider-progress-container:after{inset-inline-end:var(--_ui5-v1-24-29_slider_start_end_point_left);background-color:var(--_ui5-v1-24-29_slider_progress_after_background);border:var(--_ui5-v1-24-29_slider_progress_after_border)}.ui5-slider-progress{background:var(--_ui5-v1-24-29_slider_progress_background);border-radius:var(--_ui5-v1-24-29_slider_progress_border_radius);height:var(--_ui5-v1-24-29_slider_progress_height);position:relative;outline:none;box-sizing:border-box;border:var(--_ui5-v1-24-29_slider_active_progress_border);left:var(--_ui5-v1-24-29_slider_active_progress_left);top:var(--_ui5-v1-24-29_slider_active_progress_top)}.ui5-slider-tickmarks{list-style:none;padding:0;margin:0;top:var(--_ui5-v1-24-29_slider_tickmark_top);display:flex;box-sizing:border-box;width:100%;justify-content:space-between;position:absolute;z-index:1}.ui5-slider-tickmarks li{height:var(--_ui5-v1-24-29_slider_tickmark_height);border-inline-start:1px solid var(--_ui5-v1-24-29_slider_tickmark_bg)}.ui5-slider-handle{background:var(--_ui5-v1-24-29_slider_handle_background);border:var(--_ui5-v1-24-29_slider_handle_border);border-radius:var(--_ui5-v1-24-29_slider_handle_border_radius);margin-inline-start:calc(-1 * var(--_ui5-v1-24-29_slider_handle_width) / 2);top:var(--_ui5-v1-24-29_slider_handle_top);position:absolute;outline:none;height:var(--_ui5-v1-24-29_slider_handle_height);width:var(--_ui5-v1-24-29_slider_handle_width);box-sizing:var(--_ui5-v1-24-29_slider_handle_box_sizing);display:flex;justify-content:center;align-items:center;z-index:2}[slider-icon]{display:var(--_ui5-v1-24-29_slider_handle_icon_display);color:var(--sapContent_Selected_ForegroundColor);width:var(--_ui5-v1-24-29_slider_handle_icon_size);height:var(--_ui5-v1-24-29_slider_handle_icon_size)}.ui5-slider-root .ui5-slider-handle:focus [slider-icon]{display:var(--_ui5-v1-24-29_range_slider_active_handle_icon_display)}.ui5-slider-progress-container:hover~.ui5-slider-handle:not(:focus),.ui5-slider-handle:hover{background:var(--_ui5-v1-24-29_slider_handle_hover_background);border:var(--_ui5-v1-24-29_slider_handle_hover_border)}.ui5-slider-root:focus .ui5-slider-inner .ui5-slider-handle,.ui5-slider-handle:focus{outline:var(--_ui5-v1-24-29_slider_handle_outline);outline-offset:var(--_ui5-v1-24-29_slider_handle_outline_offset);border:var(--_ui5-v1-24-29_slider_handle_focus_border);background:var(--_ui5-v1-24-29_slider_handle_background_focus)}.ui5-slider-handle.ui5-slider-handle--start:focus,.ui5-slider-handle--end:focus{border:var(--_ui5-v1-24-29_slider_handle_focus_border)}.ui5-slider-root:focus:hover .ui5-slider-handle,.ui5-slider-handle:focus:hover{border:var(--_ui5-v1-24-29_slider_handle_focus_border)}.ui5-slider-tooltip{display:flex;justify-content:center;align-items:center;visibility:hidden;pointer-events:none;line-height:1rem;position:absolute;left:50%;transform:translate(-50%);bottom:var(--_ui5-v1-24-29_slider_tooltip_bottom);background:var(--_ui5-v1-24-29_slider_tooltip_background);border:var(--_ui5-v1-24-29_slider_tooltip_border);border-radius:var(--_ui5-v1-24-29_slider_tooltip_border_radius);box-shadow:var(--_ui5-v1-24-29_slider_tooltip_box_shadow);font-size:var(--_ui5-v1-24-29_slider_tooltip_fontsize);color:var(--_ui5-v1-24-29_slider_tooltip_color);height:var(--_ui5-v1-24-29_slider_tooltip_height);min-width:var(--_ui5-v1-24-29_slider_tooltip_min_width);padding:var(--_ui5-v1-24-29_slider_tooltip_padding);box-sizing:var(--_ui5-v1-24-29_slider_tooltip_border_box)}.ui5-slider-tooltip-value{position:relative;display:flex;justify-content:center;align-items:center}.ui5-slider-labels{position:absolute;top:1.25rem;margin:0;padding:0;white-space:nowrap}.ui5-slider-labels li{position:relative;list-style:none;padding-top:.3125rem;height:1rem;margin:0;text-align:center;display:inline-block;color:var(--_ui5-v1-24-29_slider_label_color);font-size:var(--_ui5-v1-24-29_slider_label_fontsize);padding-top:0;box-sizing:border-box;display:inline-flex;justify-content:center;align-items:center;vertical-align:top}.ui5-slider-hidden-labels li:not(:first-child):not(:last-child){visibility:hidden}.ui5-slider-handle:focus .ui5-slider-tooltip{bottom:var(--_ui5-v1-24-29_slider_handle_focused_tooltip_distance)}.ui5-slider-tickmarks li.ui5-slider-tickmark-in-range{border-inline-start:1px solid var(--_ui5-v1-24-29_slider_tickmark_in_range_bg)}:host([show-tickmarks]) .ui5-slider-progress{height:var(--_ui5-v1-24-29_slider_no_tickmarks_progress_height);border:var(--_ui5-v1-24-29_slider_no_tickmarks_active_progress_border);left:var(--_ui5-v1-24-29_slider_no_tickmarks_active_progress_left);top:var(--_ui5-v1-24-29_slider_no_tickmarks_active_progress_top)}:host([show-tickmarks]) .ui5-slider-progress-container{top:var(--_ui5-v1-24-29_slider_no_tickmarks_progress_container_top)}.ui5-slider-handle:focus:after{content:"";display:var(--_ui5-v1-24-29_slider_handle_focus_visibility);width:calc(100% + (var(--sapContent_FocusWidth) * 2) + 2px);height:calc(100% + (var(--sapContent_FocusWidth) * 2) + 2px);border:var(--sapContent_FocusWidth) dotted var(--sapContent_FocusColor);position:absolute;border-radius:var(--_ui5-v1-24-29_slider_handle_border_radius);pointer-events:none}
`
};
var SliderBase_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/SliderBase.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SliderBase_1;
var SliderBase = SliderBase_1 = /**
 * @class
 *
 * ### Overview
 * @constructor
 * @extends UI5Element
 * @public
 */
class SliderBase2 extends UI5Element_default {
  constructor() {
    super();
    this.notResized = false;
    this._isUserInteraction = false;
    this._isInnerElementFocusing = false;
    this._labelWidth = 0;
    this._resizeHandler = this._handleResize.bind(this);
    this._moveHandler = this._handleMove.bind(this);
    this._upHandler = this._handleUp.bind(this);
    this._stateStorage = {
      step: void 0,
      min: void 0,
      max: void 0,
      labelInterval: void 0
    };
    const handleTouchStartEvent = (e) => {
      this._onmousedown(e);
    };
    this._ontouchstart = {
      handleEvent: handleTouchStartEvent,
      passive: true
    };
  }
  _handleMove(e) {
  }
  // eslint-disable-line
  _handleUp() {
  }
  _onmousedown(e) {
  }
  // eslint-disable-line
  _handleActionKeyPress(e) {
  }
  // eslint-disable-line
  static get ACTION_KEYS() {
    return [isLeft, isRight, isUp, isDown, isLeftCtrl, isRightCtrl, isUpCtrl, isDownCtrl, isPlus, isMinus, isHome, isEnd, isPageUp, isPageDown, isEscape];
  }
  static get MIN_SPACE_BETWEEN_TICKMARKS() {
    return 8;
  }
  static get TOOLTIP_VISIBILITY() {
    return {
      VISIBLE: "visible",
      HIDDEN: "hidden"
    };
  }
  static get render() {
    return LitRenderer_default;
  }
  static get styles() {
    return SliderBase_css_default;
  }
  get classes() {
    return {
      root: {
        "ui5-slider-root-phone": isPhone()
      },
      labelContainer: {
        "ui5-slider-hidden-labels": this._labelsOverlapping
      }
    };
  }
  onEnterDOM() {
    ResizeHandler_default.register(this, this._resizeHandler);
  }
  onExitDOM() {
    ResizeHandler_default.deregister(this, this._resizeHandler);
  }
  onAfterRendering() {
    if (this.notResized) {
      this._resizeHandler();
    }
  }
  /** Shows the tooltip(s) if the `showTooltip` property is set to true
   * @private
   */
  _onmouseover() {
    if (this.showTooltip) {
      this._tooltipVisibility = SliderBase_1.TOOLTIP_VISIBILITY.VISIBLE;
    }
  }
  /**
   * Hides the tooltip(s) if the `showTooltip` property is set to true
   * @private
   */
  _onmouseout() {
    if (this.showTooltip && !this.shadowRoot.activeElement) {
      this._tooltipVisibility = SliderBase_1.TOOLTIP_VISIBILITY.HIDDEN;
    }
  }
  _onkeydown(e) {
    if (this.disabled || this._effectiveStep === 0) {
      return;
    }
    if (SliderBase_1._isActionKey(e)) {
      e.preventDefault();
      this._isUserInteraction = true;
      this._handleActionKeyPress(e);
    }
  }
  _onkeyup() {
    if (this.disabled) {
      return;
    }
    this._isUserInteraction = false;
  }
  /**
   * Flags if an inner element is currently being focused
   * @private
   */
  _preserveFocus(isFocusing) {
    this._isInnerElementFocusing = isFocusing;
  }
  /**
   * Return if an inside element within the component is currently being focused
   * @private
   */
  _isFocusing() {
    return this._isInnerElementFocusing;
  }
  /**
   * Prevent focus out when inner element within the component is currently being in process of focusing in.
   * @private
   */
  _preventFocusOut() {
    this.focusInnerElement();
  }
  /**
   * Manages the focus between the component's inner elements
   * @protected
   */
  focusInnerElement() {
    this.focus();
  }
  /**
   * Handle the responsiveness of the Slider's UI elements when resizing
   * @private
   */
  _handleResize() {
    if (!this.showTickmarks) {
      return;
    }
    this.notResized = false;
    const spaceBetweenTickmarks = this._spaceBetweenTickmarks();
    if (spaceBetweenTickmarks < SliderBase_1.MIN_SPACE_BETWEEN_TICKMARKS) {
      this._hiddenTickmarks = true;
      this._labelsOverlapping = true;
    } else {
      this._hiddenTickmarks = false;
    }
    if (this.labelInterval <= 0 || this._hiddenTickmarks) {
      return;
    }
    const labelItems = this.shadowRoot.querySelectorAll(".ui5-slider-labels li");
    this._labelsOverlapping = [...labelItems].some((label) => label.scrollWidth > label.clientWidth);
  }
  /**
   * Called when the user starts interacting with the slider.
   * After a down event on the slider root, listen for move events on window, so the slider value
   * is updated even if the user drags the pointer outside the slider root.
   * @protected
   */
  handleDownBase(e) {
    const min = this._effectiveMin;
    const max = this._effectiveMax;
    const domRect = this.getBoundingClientRect();
    const directionStart = this.directionStart;
    const step = this._effectiveStep;
    const newValue = SliderBase_1.getValueFromInteraction(e, step, min, max, domRect, directionStart);
    this._isUserInteraction = true;
    window.addEventListener("mouseup", this._upHandler);
    window.addEventListener("touchend", this._upHandler);
    if (supportsTouch() && e instanceof TouchEvent) {
      window.addEventListener("touchmove", this._moveHandler);
    } else {
      window.addEventListener("mousemove", this._moveHandler);
    }
    this._handleFocusOnMouseDown(e);
    return newValue;
  }
  /**
   * Forward the focus to an inner inner part within the component on press
   * @private
   */
  _handleFocusOnMouseDown(e) {
    const focusedElement = this.shadowRoot.activeElement;
    if (!focusedElement || focusedElement !== e.target) {
      this._preserveFocus(true);
      this.focusInnerElement();
    }
  }
  /**
   * Called when the user finish interacting with the slider
   * Fires an `change` event indicating a final value change, after user interaction is finished.
   * @protected
   */
  handleUpBase() {
    window.removeEventListener("mouseup", this._upHandler);
    window.removeEventListener("touchend", this._upHandler);
    window.removeEventListener("mousemove", this._moveHandler);
    window.removeEventListener("touchmove", this._moveHandler);
    this._isUserInteraction = false;
    this._preserveFocus(false);
  }
  /**
   * Updates state storage for the value-related property
   * Fires an `input` event indicating a value change via interaction that is not yet finished.
   * @protected
   */
  updateStateStorageAndFireInputEvent(valueType) {
    this.storePropertyState(valueType);
    if (this._isUserInteraction) {
      this.fireEvent("input");
    }
  }
  /**
   * Goes through the key shortcuts available for the component and returns 'true' if the event is triggered by one.
   * @private
   */
  static _isActionKey(e) {
    return this.ACTION_KEYS.some((actionKey) => actionKey(e));
  }
  /**
   * Locks the given value between min and max boundaries based on slider properties
   * @protected
   */
  static clipValue(value, min, max) {
    value = Math.min(Math.max(value, min), max);
    return value;
  }
  /**
   * Sets the slider value from an event
   * @protected
   */
  static getValueFromInteraction(e, stepSize, min, max, boundingClientRect, directionStart) {
    const pageX = this.getPageXValueFromEvent(e);
    const value = this.computedValueFromPageX(pageX, min, max, boundingClientRect, directionStart);
    const steppedValue = this.getSteppedValue(value, stepSize, min);
    return this.clipValue(steppedValue, min, max);
  }
  /**
   * "Stepify" the raw value - calculate the new value depending on the specified step property
   * @protected
   */
  static getSteppedValue(value, stepSize, min) {
    const stepModuloValue = Math.abs((value - min) % stepSize);
    if (stepSize === 0 || stepModuloValue === 0) {
      return value;
    }
    value = stepModuloValue * 2 >= stepSize ? value + stepSize - stepModuloValue : value - stepModuloValue;
    const stepPrecision = SliderBase_1._getDecimalPrecisionOfNumber(stepSize);
    return Number(value.toFixed(stepPrecision));
  }
  /**
   * Gets pageX value from event on user interaction with the Slider
   * @protected
   */
  static getPageXValueFromEvent(e) {
    if (supportsTouch() && e instanceof TouchEvent) {
      if (e.targetTouches && e.targetTouches.length > 0) {
        return e.targetTouches[0].pageX;
      }
      return 0;
    }
    return e.pageX;
  }
  /**
   * Computes the new value (in %) from the pageX position of the cursor.
   * Returns the value rounded to a precision of at most 2 digits after decimal point.
   * @protected
   */
  static computedValueFromPageX(pageX, min, max, boundingClientRect, directionStart) {
    const xRelativePosition = directionStart === "left" ? pageX - boundingClientRect[directionStart] : boundingClientRect[directionStart] - pageX;
    const percentageComplete = xRelativePosition / boundingClientRect.width;
    return min + percentageComplete * (max - min);
  }
  /**
   * Calculates the precision (decimal places) of a number, returns 0 if integer
   * Handles scientific notation cases.
   * @private
   */
  static _getDecimalPrecisionOfNumber(value) {
    if (Number.isInteger(value)) {
      return 0;
    }
    const match = String(value).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match || match.length < 2) {
      return 0;
    }
    return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? Number(match[2]) : 0));
  }
  /**
   * In order to always keep the visual UI representation and the internal
   * state in sync, the component has a 'state storage' that is updated when the
   * current state is changed due to a user action.
   *
   * Check if the previously saved state is outdated. That would mean
   * a property has been changed programmatically because the previous state
   * is always updated in the interaction handlers.
   *
   * Will return true if any of the properties is not equal to its previously
   * stored value.
   * @protected
   */
  isCurrentStateOutdated() {
    return Object.entries(this._stateStorage).some(([propName, propValue]) => this[propName] !== propValue);
  }
  /**
   * Returns the last stored value of a property
   * @protected
   */
  getStoredPropertyState(prop) {
    return this._stateStorage[prop];
  }
  /**
   * Check if one or more properties have been updated compared to their last
   * saved values in the state storage.
   * @protected
   */
  isPropertyUpdated(...props) {
    return props.some((prop) => this.getStoredPropertyState(prop) !== this[prop]);
  }
  /**
   * Updates the previously saved in the _stateStorage values of one or more properties.
   * @protected
   */
  storePropertyState(...props) {
    props.forEach((prop) => {
      this._stateStorage[prop] = this[prop];
    });
  }
  /**
   * Returns the start side of a direction - left for LTR, right for RTL
   */
  get directionStart() {
    return this.effectiveDir === "rtl" ? "right" : "left";
  }
  /**
   * Calculates the labels amount, width and text and creates them
   * @private
   */
  _createLabels() {
    if (!this.labelInterval || !this.showTickmarks) {
      return;
    }
    const labelInterval = this.labelInterval;
    const step = this._effectiveStep;
    const newNumberOfLabels = (this._effectiveMax - this._effectiveMin) / (step * labelInterval);
    if (newNumberOfLabels === this._oldNumberOfLabels && this._oldMin === this._effectiveMin && this._oldMax === this._effectiveMax) {
      return;
    }
    this._oldMin = this._effectiveMin;
    this._oldMax = this._effectiveMax;
    this._oldNumberOfLabels = newNumberOfLabels;
    this._labelWidth = 100 / newNumberOfLabels;
    this._labelValues = [];
    const stepPrecision = SliderBase_1._getDecimalPrecisionOfNumber(step);
    for (let i = 0; i <= newNumberOfLabels; i++) {
      const labelItemNumber = (i * step * labelInterval + this._effectiveMin).toFixed(stepPrecision);
      this._labelValues.push(labelItemNumber);
    }
  }
  _handleActionKeyPressBase(e, affectedPropName) {
    const isUpAction = SliderBase_1._isIncreaseValueAction(e, this.directionStart);
    const isBigStep = SliderBase_1._isBigStepAction(e);
    const currentValue = this[affectedPropName];
    const min = this._effectiveMin;
    const max = this._effectiveMax;
    let step = this._effectiveStep;
    step = isBigStep && (max - min) / step > 10 ? (max - min) / 10 : step;
    if (isEnd(e)) {
      return max - currentValue;
    }
    if (isHome(e)) {
      return (currentValue - min) * -1;
    }
    return isUpAction ? step : step * -1;
  }
  static _isIncreaseValueAction(e, directionStart) {
    if (directionStart === "right") {
      return isUp(e) || isUpCtrl(e) || isLeft(e) || isLeftCtrl(e) || isPlus(e) || isPageUp(e);
    }
    return isUp(e) || isUpCtrl(e) || isRight(e) || isRightCtrl(e) || isPlus(e) || isPageUp(e);
  }
  static _isBigStepAction(e) {
    return isDownCtrl(e) || isUpCtrl(e) || isLeftCtrl(e) || isRightCtrl(e) || isPageUp(e) || isPageDown(e);
  }
  get _tickmarksCount() {
    return (this._effectiveMax - this._effectiveMin) / this._effectiveStep;
  }
  /**
   * Calculates space between tickmarks
   * @private
   */
  _spaceBetweenTickmarks() {
    return this.getBoundingClientRect().width / this._tickmarksCount;
  }
  /**
   * Notify in case of a invalid step value type
   * @private
   */
  _validateStep(step) {
    if (step === 0) {
      console.warn("The 'step' property must be a positive float number");
    }
    if (step < 0) {
      console.warn("The 'step' property must be a positive float number. The provided negative number has been converted to its positve equivalent");
    }
    if (Number.isNaN(step)) {
      console.warn("The 'step' property must be a positive float number. It has been set to its default value of 1");
    }
  }
  get _labels() {
    return this._labelValues || [];
  }
  /**
   * Normalizes a new `step` property value.
   * If tickmarks are enabled recreates them according to it.
   * @private
   */
  get _effectiveStep() {
    let step = this.step;
    if (step < 0) {
      step = Math.abs(step);
    }
    if (Number.isNaN(step)) {
      step = 1;
    }
    return step;
  }
  get _effectiveMin() {
    return Math.min(this.min, this.max);
  }
  get _effectiveMax() {
    return Math.max(this.min, this.max);
  }
  get _tabIndex() {
    return this.disabled ? "-1" : "0";
  }
  get _ariaLabelledByHandleRefs() {
    return [`${this._id}-accName`, `${this._id}-sliderDesc`].join(" ").trim();
  }
};
__decorate([property_default({
  validator: Float_default,
  defaultValue: 0
})], SliderBase.prototype, "min", void 0);
__decorate([property_default({
  validator: Float_default,
  defaultValue: 100
})], SliderBase.prototype, "max", void 0);
__decorate([property_default({
  validator: Float_default,
  defaultValue: 1
})], SliderBase.prototype, "step", void 0);
__decorate([property_default({
  validator: Integer_default,
  defaultValue: 0
})], SliderBase.prototype, "labelInterval", void 0);
__decorate([property_default({
  type: Boolean
})], SliderBase.prototype, "showTickmarks", void 0);
__decorate([property_default({
  type: Boolean
})], SliderBase.prototype, "showTooltip", void 0);
__decorate([property_default({
  type: Boolean
})], SliderBase.prototype, "disabled", void 0);
__decorate([property_default()], SliderBase.prototype, "accessibleName", void 0);
__decorate([property_default({
  defaultValue: "hidden"
})], SliderBase.prototype, "_tooltipVisibility", void 0);
__decorate([property_default({
  type: Boolean
})], SliderBase.prototype, "_labelsOverlapping", void 0);
__decorate([property_default({
  type: Boolean
})], SliderBase.prototype, "_hiddenTickmarks", void 0);
SliderBase = SliderBase_1 = __decorate([
  event_default("change"),
  event_default("input")
  /**
   * @class
   *
   * ### Overview
   * @constructor
   * @extends UI5Element
   * @public
   */
], SliderBase);
var SliderBase_default = SliderBase;

// node_modules/@ui5/webcomponents/dist/generated/templates/RangeSliderTemplate.lit.js
function block0(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="ui5-slider-root ${classMap(this.classes.root)}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @mouseover="${this._onmouseover}" @mouseout="${this._onmouseout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" part="root-container"><span id="${ifDefined(this._id)}-startHandleDesc" class="ui5-hidden-text">${ifDefined(this._ariaHandlesText.startHandleText)}</span><span id="${ifDefined(this._id)}-endHandleDesc" class="ui5-hidden-text">${ifDefined(this._ariaHandlesText.endHandleText)}</span><div class="ui5-slider-inner">${this.step ? block1.call(this, context, tags, suffix) : void 0}<div class="ui5-slider-progress-container" part="progress-container"><div class="ui5-slider-progress" part="progress-bar" style="${styleMap(this.styles.progress)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" role="slider" tabindex="${ifDefined(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${ifDefined(this.min)}" aria-valuemax="${ifDefined(this.max)}" aria-valuenow="${ifDefined(this._ariaValueNow)}" aria-valuetext="From ${ifDefined(this.startValue)} to ${ifDefined(this.endValue)}" aria-labelledby="${ifDefined(this._ariaLabelledByProgressBarRefs)}" aria-disabled="${ifDefined(this._ariaDisabled)}"></div></div><div class="ui5-slider-handle ui5-slider-handle--start" part="handle" style="${styleMap(this.styles.startHandle)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" role="slider" tabindex="${ifDefined(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${ifDefined(this.min)}" aria-valuemax="${ifDefined(this.max)}" aria-valuenow="${ifDefined(this.startValue)}" aria-labelledby="${ifDefined(this._ariaLabelledByStartHandleRefs)}" aria-disabled="${ifDefined(this._ariaDisabled)}"><${scopeTag("ui5-icon", tags, suffix)} name="direction-arrows" slider-icon></${scopeTag("ui5-icon", tags, suffix)}>${this.showTooltip ? block8.call(this, context, tags, suffix) : void 0}</div><div class="ui5-slider-handle ui5-slider-handle--end" part="handle" style="${styleMap(this.styles.endHandle)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" role="slider" tabindex="${ifDefined(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${ifDefined(this.min)}" aria-valuemax="${ifDefined(this.max)}" aria-valuenow="${ifDefined(this.endValue)}" aria-labelledby="${ifDefined(this._ariaLabelledByEndHandleRefs)}" aria-disabled="${ifDefined(this._ariaDisabled)}"><${scopeTag("ui5-icon", tags, suffix)} name="direction-arrows" slider-icon></${scopeTag("ui5-icon", tags, suffix)}>${this.showTooltip ? block9.call(this, context, tags, suffix) : void 0}</div></div><span id="${ifDefined(this._id)}-accName" class="ui5-hidden-text">${ifDefined(this.accessibleName)}</span><span id="${ifDefined(this._id)}-sliderDesc" class="ui5-hidden-text">${ifDefined(this._ariaLabelledByText)}</span></div> ` : effectiveHtml`<div class="ui5-slider-root ${classMap(this.classes.root)}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @mouseover="${this._onmouseover}" @mouseout="${this._onmouseout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" part="root-container"><span id="${ifDefined(this._id)}-startHandleDesc" class="ui5-hidden-text">${ifDefined(this._ariaHandlesText.startHandleText)}</span><span id="${ifDefined(this._id)}-endHandleDesc" class="ui5-hidden-text">${ifDefined(this._ariaHandlesText.endHandleText)}</span><div class="ui5-slider-inner">${this.step ? block1.call(this, context, tags, suffix) : void 0}<div class="ui5-slider-progress-container" part="progress-container"><div class="ui5-slider-progress" part="progress-bar" style="${styleMap(this.styles.progress)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" role="slider" tabindex="${ifDefined(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${ifDefined(this.min)}" aria-valuemax="${ifDefined(this.max)}" aria-valuenow="${ifDefined(this._ariaValueNow)}" aria-valuetext="From ${ifDefined(this.startValue)} to ${ifDefined(this.endValue)}" aria-labelledby="${ifDefined(this._ariaLabelledByProgressBarRefs)}" aria-disabled="${ifDefined(this._ariaDisabled)}"></div></div><div class="ui5-slider-handle ui5-slider-handle--start" part="handle" style="${styleMap(this.styles.startHandle)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" role="slider" tabindex="${ifDefined(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${ifDefined(this.min)}" aria-valuemax="${ifDefined(this.max)}" aria-valuenow="${ifDefined(this.startValue)}" aria-labelledby="${ifDefined(this._ariaLabelledByStartHandleRefs)}" aria-disabled="${ifDefined(this._ariaDisabled)}"><ui5-icon name="direction-arrows" slider-icon></ui5-icon>${this.showTooltip ? block8.call(this, context, tags, suffix) : void 0}</div><div class="ui5-slider-handle ui5-slider-handle--end" part="handle" style="${styleMap(this.styles.endHandle)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" role="slider" tabindex="${ifDefined(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${ifDefined(this.min)}" aria-valuemax="${ifDefined(this.max)}" aria-valuenow="${ifDefined(this.endValue)}" aria-labelledby="${ifDefined(this._ariaLabelledByEndHandleRefs)}" aria-disabled="${ifDefined(this._ariaDisabled)}"><ui5-icon name="direction-arrows" slider-icon></ui5-icon>${this.showTooltip ? block9.call(this, context, tags, suffix) : void 0}</div></div><span id="${ifDefined(this._id)}-accName" class="ui5-hidden-text">${ifDefined(this.accessibleName)}</span><span id="${ifDefined(this._id)}-sliderDesc" class="ui5-hidden-text">${ifDefined(this._ariaLabelledByText)}</span></div> `;
}
function block1(context, tags, suffix) {
  return effectiveHtml`${this.showTickmarks ? block2.call(this, context, tags, suffix) : void 0}`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`<ul class="ui5-slider-tickmarks">${repeat(this.tickmarksObject, (item, index) => item._id || index, (item, index) => block3.call(this, context, tags, suffix, item, index))}</ul>${this.labelInterval ? block6.call(this, context, tags, suffix) : void 0}`;
}
function block3(context, tags, suffix, item, index) {
  return effectiveHtml`${item ? block4.call(this, context, tags, suffix, item, index) : block5.call(this, context, tags, suffix, item, index)}`;
}
function block4(context, tags, suffix, item, index) {
  return effectiveHtml`<li class="ui5-slider-tickmark ui5-slider-tickmark-in-range"></li>`;
}
function block5(context, tags, suffix, item, index) {
  return effectiveHtml`<li class="ui5-slider-tickmark"></li>`;
}
function block6(context, tags, suffix) {
  return effectiveHtml`<ul class="ui5-slider-labels ${classMap(this.classes.labelContainer)}" style="${styleMap(this.styles.labelContainer)}">${repeat(this._labels, (item, index) => item._id || index, (item, index) => block7.call(this, context, tags, suffix, item, index))}</ul>`;
}
function block7(context, tags, suffix, item, index) {
  return effectiveHtml`<li style="${styleMap(this.styles.label)}">${ifDefined(item)}</li>`;
}
function block8(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-slider-tooltip ui5-slider-tooltip--start" style="${styleMap(this.styles.tooltip)}"><span class="ui5-slider-tooltip-value">${ifDefined(this.tooltipStartValue)}</span></div>`;
}
function block9(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-slider-tooltip ui5-slider-tooltip--end" style="${styleMap(this.styles.tooltip)}"><span class="ui5-slider-tooltip-value">${ifDefined(this.tooltipEndValue)}</span></div>`;
}
var RangeSliderTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/RangeSlider.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData2 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/RangeSlider.css.ts",
  content: `:host([ui5-range-slider]) .ui5-slider-progress-container:before{background-color:var(--_ui5-v1-24-29_slider_progress_container_dot_background)}.ui5-slider-root:hover:active .ui5-slider-handle:not(:focus){background:var(--sapSlider_RangeHandleBackground)}:host([range-pressed]) .ui5-slider-root:active .ui5-slider-handle:not(:focus){background:var(--_ui5-v1-24-29_range_slider_handle_active_background);border:var(--_ui5-v1-24-29_slider_handle_focus_border);box-shadow:none}:host([range-pressed]) .ui5-slider-handle [slider-icon]{display:var(--_ui5-v1-24-29_range_slider_active_handle_icon_display)}.ui5-slider-root:not(.ui5-slider-root-phone):focus .ui5-slider-inner .ui5-slider-handle,.ui5-slider-root:not(.ui5-slider-root-phone) .ui5-slider-inner .ui5-slider-handle:focus{background:var(--_ui5-v1-24-29_range_slider_handle_background_focus)}.ui5-slider-root:not(.ui5-slider-root-phone) .ui5-slider-inner .ui5-slider-handle:focus [slider-icon]{display:none}.ui5-slider-root:not(.ui5-slider-root-phone) .ui5-slider-progress:focus:before{display:var(--_ui5-v1-24-29_range_slider_legacy_progress_focus_display);content:"";position:absolute;width:var(--_ui5-v1-24-29_range_slider_focus_outline_width);border:var(--_ui5-v1-24-29_slider_progress_outline);border-radius:var(--_ui5-v1-24-29_range_slider_focus_outline_radius);top:var(--_ui5-v1-24-29_slider_progress_outline_offset);height:var(--_ui5-v1-24-29_slider_outer_height);box-sizing:border-box;left:var(--_ui5-v1-24-29_slider_progress_outline_offset_left)}.ui5-slider-progress{position:relative}.ui5-slider-progress:focus:after{border:.125rem solid var(--sapContent_FocusColor);border-radius:.5rem;content:"";display:var(--_ui5-v1-24-29_range_slider_progress_focus_display);position:absolute;top:var(--_ui5-v1-24-29_range_slider_progress_focus_top);left:var(--_ui5-v1-24-29_range_slider_progress_focus_left);padding:var(--_ui5-v1-24-29_range_slider_progress_focus_padding);width:var(--_ui5-v1-24-29_range_slider_progress_focus_width);height:var(--_ui5-v1-24-29_range_slider_progress_focus_height);box-sizing:border-box}.ui5-slider-handle{background:var(--_ui5-v1-24-29_range_slider_handle_background)}.ui5-slider-progress-container:hover~.ui5-slider-handle:not(:focus),.ui5-slider-handle:hover{background:var(--_ui5-v1-24-29_range_slider_root_hover_handle_bg)}.ui5-slider-root:hover .ui5-slider-handle:not(:focus) [slider-icon]{display:var(--_ui5-v1-24-29_range_slider_root_hover_handle_icon_display)}:host([range-pressed]) .ui5-slider-root:active .ui5-slider-handle:not(:focus) [slider-icon]{display:var(--_ui5-v1-24-29_range_slider_root_active_handle_icon_display)}
`
};
var RangeSlider_css_default = styleData2;

// node_modules/@ui5/webcomponents/dist/RangeSlider.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RangeSlider_1;
var RangeSlider = RangeSlider_1 = class RangeSlider2 extends SliderBase_default {
  constructor() {
    super();
    this._isPressInCurrentRange = false;
    this._handeIsPressed = false;
    this._reversedValues = false;
    this._stateStorage.startValue = void 0;
    this._stateStorage.endValue = void 0;
  }
  get tooltipStartValue() {
    const ctor = this.constructor;
    const stepPrecision = ctor._getDecimalPrecisionOfNumber(this._effectiveStep);
    return this.startValue.toFixed(stepPrecision);
  }
  get tooltipEndValue() {
    const ctor = this.constructor;
    const stepPrecision = ctor._getDecimalPrecisionOfNumber(this._effectiveStep);
    return this.endValue.toFixed(stepPrecision);
  }
  get _ariaDisabled() {
    return this.disabled || void 0;
  }
  get _ariaLabelledByText() {
    return RangeSlider_1.i18nBundle.getText(RANGE_SLIDER_ARIA_DESCRIPTION);
  }
  get _ariaHandlesText() {
    const isRTL = this.effectiveDir === "rtl";
    const isReversed = this._areValuesReversed();
    const ariaHandlesText = {};
    if (isRTL && !isReversed || !isRTL && isReversed) {
      ariaHandlesText.startHandleText = RangeSlider_1.i18nBundle.getText(RANGE_SLIDER_END_HANDLE_DESCRIPTION);
      ariaHandlesText.endHandleText = RangeSlider_1.i18nBundle.getText(RANGE_SLIDER_START_HANDLE_DESCRIPTION);
    } else {
      ariaHandlesText.startHandleText = RangeSlider_1.i18nBundle.getText(RANGE_SLIDER_START_HANDLE_DESCRIPTION);
      ariaHandlesText.endHandleText = RangeSlider_1.i18nBundle.getText(RANGE_SLIDER_END_HANDLE_DESCRIPTION);
    }
    return ariaHandlesText;
  }
  get _ariaValueNow() {
    return Math.abs(this.endValue - this.startValue);
  }
  /**
   * Check if the previously saved state is outdated. That would mean
   * either it is the initial rendering or that a property has been changed
   * programmatically - because the previous state is always updated in
   * the interaction handlers.
   *
   * Normalize current properties, update the previously stored state.
   * Update the visual UI representation of the Slider.
   *
   */
  onBeforeRendering() {
    if (this.startValue > this.endValue) {
      const affectedValue = this._valueAffected === "startValue" ? "endValue" : "startValue";
      this._swapValues();
      this._setAffectedValue(affectedValue);
      this.update(affectedValue, this.startValue, this.endValue);
    }
    if (!this.isCurrentStateOutdated()) {
      return;
    }
    this.notResized = true;
    this.syncUIAndState();
    this._updateHandlesAndRange(0);
  }
  syncUIAndState() {
    if (this.isPropertyUpdated("step")) {
      this._validateStep(this.step);
      this.storePropertyState("step");
    }
    if (this.isPropertyUpdated("min", "max", "startValue", "endValue")) {
      this.storePropertyState("min", "max");
      const normalizedStartValue = SliderBase_default.clipValue(this.startValue, this._effectiveMin, this._effectiveMax);
      this.startValue = normalizedStartValue;
      this.updateStateStorageAndFireInputEvent("startValue");
      this.storePropertyState("startValue");
      const normalizedEndValue = SliderBase_default.clipValue(this.endValue, this._effectiveMin, this._effectiveMax);
      this.endValue = normalizedEndValue;
      this.updateStateStorageAndFireInputEvent("endValue");
      this.storePropertyState("endValue");
    }
    if (this.labelInterval && this.showTickmarks) {
      this._createLabels();
    }
    if (this.isPropertyUpdated("labelInterval")) {
      this.storePropertyState("labelInterval");
    }
  }
  _onfocusin() {
    if (!this._endValueInitial) {
      this._startValueInitial = this.startValue;
      this._endValueInitial = this.endValue;
    }
    if (this.showTooltip) {
      this._tooltipVisibility = SliderBase_default.TOOLTIP_VISIBILITY.VISIBLE;
    }
  }
  /**
   * Handles focus out event of the focusable components inner elements.
   * Prevent focusout when the focus is getting initially set within the slider before the
   * slider customElement itself is finished focusing.
   *
   * Prevents the focus from leaving the Range Slider when the focus is managed between
   * its inner elements in result of user interactions.
   *
   * Resets the stored Range Slider's initial values saved when it was first focused
   * @private
   */
  _onfocusout() {
    if (this._isFocusing()) {
      this._preventFocusOut();
      return;
    }
    this._setAffectedValue(void 0);
    this._startValueInitial = void 0;
    this._endValueInitial = void 0;
    if (this.showTooltip) {
      this._tooltipVisibility = SliderBase_default.TOOLTIP_VISIBILITY.HIDDEN;
    }
  }
  /**
  * Handles keyup logic. If one of the handles came across the other
  * swap the start and end values. Reset the affected value by the finished
  * user interaction.
  * @private
  */
  _onkeyup() {
    super._onkeyup();
    this._setAffectedValue(void 0);
    if (this.startValue !== this._startValueAtBeginningOfAction || this.endValue !== this._endValueAtBeginningOfAction) {
      this.fireEvent("change");
    }
    this._startValueAtBeginningOfAction = void 0;
    this._endValueAtBeginningOfAction = void 0;
  }
  _handleActionKeyPress(e) {
    this._startValueAtBeginningOfAction = this.startValue;
    this._endValueAtBeginningOfAction = this.endValue;
    if (isEscape(e)) {
      this.update(void 0, this._startValueInitial, this._endValueInitial);
      return;
    }
    this._setAffectedValueByFocusedElement();
    const min = this._effectiveMin;
    const max = this._effectiveMax;
    const affectedValue = this._valueAffected;
    if ((isEnd(e) || isHome(e)) && !affectedValue) {
      this._homeEndForSelectedRange(e, isHome(e) ? "startValue" : "endValue", min, max);
      return;
    }
    const newValueOffset = this._handleActionKeyPressBase(e, affectedValue);
    if (!newValueOffset) {
      return;
    }
    const ctor = this.constructor;
    if (affectedValue && !this._isPressInCurrentRange) {
      const propValue = this[affectedValue];
      const newValue = ctor.clipValue(newValueOffset + propValue, min, max);
      this.update(affectedValue, newValue, void 0);
    } else if (newValueOffset < 0 && this.startValue > min || newValueOffset > 0 && this.endValue < max) {
      const newStartValue = ctor.clipValue(newValueOffset + this.startValue, min, max);
      const newEndValue = ctor.clipValue(newValueOffset + this.endValue, min, max);
      this.update(affectedValue, newStartValue, newEndValue);
    }
  }
  /**
   * Determines affected value (start/end) depending on the currently
   * active inner element within the Range Slider - used in the keyboard handling.
   * @private
   */
  _setAffectedValueByFocusedElement() {
    if (this.shadowRoot.activeElement === this._startHandle) {
      this._setAffectedValue("startValue");
    }
    if (this.shadowRoot.activeElement === this._endHandle) {
      this._setAffectedValue("endValue");
    }
    if (this.shadowRoot.activeElement === this._progressBar) {
      this._setAffectedValue(void 0);
    }
    this._setIsPressInCurrentRange(!this._valueAffected);
  }
  /**
   * Calculates the start and end values when the 'Home" or 'End' keys
   * are pressed on the selected range bar.
   * @private
   */
  _homeEndForSelectedRange(e, affectedValue, min, max) {
    const newValueOffset = this._handleActionKeyPressBase(e, affectedValue);
    const ctor = this.constructor;
    const newStartValue = ctor.clipValue(newValueOffset + this.startValue, min, max);
    const newEndValue = ctor.clipValue(newValueOffset + this.endValue, min, max);
    this.update(void 0, newStartValue, newEndValue);
  }
  /**
   * Update values, stored inner state and the visual UI representation of the component.
   * If no specific type of value property is passed - the range is selected - update both handles,
   * otherwise update the handle corresponding to the affected by the user interacton value prop.
   * @private
   */
  update(affectedValue, startValue, endValue) {
    if (!affectedValue) {
      this.startValue = startValue;
      this.updateStateStorageAndFireInputEvent("startValue");
      this.endValue = endValue;
      this.updateStateStorageAndFireInputEvent("endValue");
      this._updateHandlesAndRange(0);
    } else {
      const newValue = endValue && affectedValue === "endValue" ? endValue : startValue;
      this._updateHandlesAndRange(newValue || 0);
      if (affectedValue === "startValue") {
        this.startValue = newValue;
        this.updateStateStorageAndFireInputEvent("startValue");
      }
      if (affectedValue === "endValue") {
        this.endValue = newValue;
        this.updateStateStorageAndFireInputEvent("endValue");
      }
    }
  }
  /**
   * Called when the user starts interacting with the slider
   * @private
   */
  _onmousedown(e) {
    if (this.disabled || this._effectiveStep === 0) {
      return;
    }
    const newValue = this.handleDownBase(e);
    this._saveInteractionStartData(e, newValue);
    this.rangePressed = this._isPressInCurrentRange;
    if (this._isPressInCurrentRange || this._handeIsPressed) {
      this._handeIsPressed = false;
      return;
    }
    this.update(this._valueAffected, newValue, void 0);
  }
  /**
   * Determines and saves needed values from the start of the interaction:
   *
   * Is the value calculated is within the currently selected range;
   * Initial pageX position of the start handle affected by the interaction;
   * Initial pageX value of the pressed postion;
   * Affected value property by the action;
   * @private
   */
  _saveInteractionStartData(e, newValue) {
    const progressBarDom = this.shadowRoot.querySelector(".ui5-slider-progress").getBoundingClientRect();
    this._startValueAtBeginningOfAction = this.startValue;
    this._endValueAtBeginningOfAction = this.endValue;
    const ctor = this.constructor;
    this._initialPageXPosition = ctor.getPageXValueFromEvent(e);
    this._pressTargetAndAffectedValue(this._initialPageXPosition, newValue);
    this._initialStartHandlePageX = this.directionStart === "left" ? progressBarDom.left : progressBarDom.right;
  }
  /**
   * Called when the user moves the slider
   * @private
   */
  _handleMove(e) {
    e.preventDefault();
    if (this.disabled || this._effectiveStep === 0) {
      return;
    }
    if (!this._isPressInCurrentRange) {
      this._updateValueOnHandleDrag(e);
      return;
    }
    this._updateValueOnRangeDrag(e);
  }
  /**
   * Updates UI and state when dragging a single Range Slider handle
   * @private
   */
  _updateValueOnHandleDrag(event) {
    const ctor = this.constructor;
    const newValue = ctor.getValueFromInteraction(event, this._effectiveStep, this._effectiveMin, this._effectiveMax, this.getBoundingClientRect(), this.directionStart);
    this.update(this._valueAffected, newValue, void 0);
  }
  /**
   * Updates UI and state when dragging of the whole selected range
   * @private
   */
  _updateValueOnRangeDrag(event) {
    const ctor = this.constructor;
    const currentPageXPos = ctor.getPageXValueFromEvent(event);
    const newValues = this._calculateRangeOffset(currentPageXPos, this._initialStartHandlePageX);
    this._setAffectedValue(void 0);
    this.update(void 0, newValues[0], newValues[1]);
  }
  _handleUp() {
    this._setAffectedValueByFocusedElement();
    this._setAffectedValue(void 0);
    if (this.startValue !== this._startValueAtBeginningOfAction || this.endValue !== this._endValueAtBeginningOfAction) {
      this.fireEvent("change");
    }
    this._setIsPressInCurrentRange(false);
    this.handleUpBase();
    this.rangePressed = false;
    this._startValueAtBeginningOfAction = void 0;
    this._endValueAtBeginningOfAction = void 0;
  }
  /**
   * Determines where the press occured and which values of the Range Slider
   * handles should be updated on further interaction.
   *
   * If the press is not in the selected range or over one of the Range Slider handles
   * determines which one from the value/endValue properties has to be updated
   * after the user action (based on closest handle).
   *
   * Set flags if the press is over a handle or in the selected range,
   * in such cases no values are changed on interaction start, but could be
   * updated later when dragging.
   * @private
   */
  _pressTargetAndAffectedValue(clientX, value) {
    const startHandle = this.shadowRoot.querySelector(".ui5-slider-handle--start");
    const endHandle = this.shadowRoot.querySelector(".ui5-slider-handle--end");
    const handleStartDomRect = startHandle.getBoundingClientRect();
    const handleEndDomRect = endHandle.getBoundingClientRect();
    const inHandleStartDom = clientX >= handleStartDomRect.left && clientX <= handleStartDomRect.right;
    const inHandleEndDom = clientX >= handleEndDomRect.left && clientX <= handleEndDomRect.right;
    if (inHandleEndDom || inHandleStartDom) {
      this._handeIsPressed = true;
    }
    if (inHandleEndDom || value > this.endValue) {
      this._setAffectedValue("endValue");
    }
    if (inHandleStartDom || value < this.startValue) {
      this._setAffectedValue("startValue");
    }
    const isNewValueInCurrentRange = this._startValueAtBeginningOfAction !== void 0 && this._endValueAtBeginningOfAction !== void 0 && value >= this._startValueAtBeginningOfAction && value <= this._endValueAtBeginningOfAction;
    this._setIsPressInCurrentRange(!(this._valueAffected || this._handeIsPressed) ? isNewValueInCurrentRange : false);
  }
  /**
   * Sets the value property (start/end) that will get updated
   * by a user action depending on that user action's characteristics
   * - mouse press position - cursor coordinates relative to the start/end handles
   * - selected inner element via a keyboard navigation
   * @param affectedValue The value that will get modified by the interaction
   * @private
   */
  _setAffectedValue(affectedValue) {
    this._valueAffected = affectedValue;
    if (this._areValuesReversed()) {
      this._setValuesAreReversed();
    }
  }
  /**
   * Flag if press action is made on the currently selected range of values
   * @param isPressInCurrentRange Did the current press action occur in the current range (between the two handles)
   * @private
   */
  _setIsPressInCurrentRange(isPressInCurrentRange) {
    this._isPressInCurrentRange = isPressInCurrentRange;
  }
  /**
   * Manage the focus between the focusable inner elements within the component.
   *
   * On initial focusin or if the whole range is affected by the user interaction
   * set the focus on the progress selection, otherwise on one of the Range Slider
   * handles based on the determined affected value by the user action.
   *
   * If one of the handles came across the other one in result of a user action
   * switch the focus between them to keep it visually consistent.
   *
   * Note:
   * In some cases this function is going to get called twice on one user action.
   *
   * 1. When the focus is initially set to an inner element it is done in the very beginning,
   * of an interaction - on 'mousedown' and 'keydown' events. The focus of the host custom element
   * is still not being received, causining an immediate focusout that we prevent by
   * calling this function once again.
   *
   * 2. When the focused is manually switched from one inner element to another.
   * The focusout handler is one and the same for all focusable parts within the
   * Range Slider and when is called it checks if it should keep the focus within
   * the component and which part of it should get focused if that is the case.
   * @protected
   */
  focusInnerElement() {
    const isReversed = this._areValuesReversed();
    const affectedValue = this._valueAffected;
    if (this._isPressInCurrentRange || !affectedValue) {
      this._progressBar.focus();
    }
    if (affectedValue === "startValue" && !isReversed || affectedValue === "endValue" && isReversed) {
      this._startHandle.focus();
    }
    if (affectedValue === "endValue" && !isReversed || affectedValue === "startValue" && isReversed) {
      this._endHandle.focus();
    }
  }
  /**
   * Calculates startValue/endValue properties when the whole range is moved.
   *
   * Uses the change of the position of the start handle and adds the initially
   * selected range to it, to determine the whole range offset.
   * @param currentPageXPos The current horizontal position of the cursor/touch
   * @param initialStartHandlePageXPos The initial horizontal position of the start handle
   * @private
   */
  _calculateRangeOffset(currentPageXPos, initialStartHandlePageXPos) {
    if (this._initialPageXPosition === currentPageXPos) {
      return [this.startValue, this.endValue];
    }
    const min = this._effectiveMin;
    const max = this._effectiveMax;
    const selectedRange = this.endValue - this.startValue;
    let startValue = this._calculateStartValueByOffset(currentPageXPos, initialStartHandlePageXPos);
    const ctor = this.constructor;
    startValue = ctor.clipValue(startValue, min, max - selectedRange);
    return [startValue, startValue + selectedRange];
  }
  /**
   * Computes the new value based on the difference of the current cursor location from the
   * start of the interaction.
   * @param currentPageXPos The current horizontal position of the cursor/touch
   * @param initialStartHandlePageXPos The initial horizontal position of the start handle
   * @private
   */
  _calculateStartValueByOffset(currentPageXPos, initialStartHandlePageXPos) {
    const min = this._effectiveMin;
    const max = this._effectiveMax;
    const step = this._effectiveStep;
    const dom = this.getBoundingClientRect();
    let startValue;
    let startValuePageX;
    let positionOffset;
    const ctor = this.constructor;
    if (currentPageXPos > this._initialPageXPosition) {
      positionOffset = currentPageXPos - this._initialPageXPosition;
      startValuePageX = initialStartHandlePageXPos + positionOffset;
      startValue = ctor.computedValueFromPageX(startValuePageX, min, max, dom, this.directionStart);
      startValue = ctor.getSteppedValue(startValue, step, min);
    } else {
      positionOffset = this._initialPageXPosition - currentPageXPos;
      startValuePageX = initialStartHandlePageXPos - positionOffset;
      startValue = ctor.computedValueFromPageX(startValuePageX, min, max, dom, this.directionStart);
      startValue = ctor.getSteppedValue(startValue, step, min);
    }
    return startValue;
  }
  /**
   * Updates the visual representation of the component by calculating
   * the styles of the handles and the range selection based on the new state.
   * @private
   */
  _updateHandlesAndRange(newValue) {
    const max = this._effectiveMax;
    const min = this._effectiveMin;
    const prevStartValue = this.getStoredPropertyState("startValue") || 0;
    const prevEndValue = this.getStoredPropertyState("endValue") || 0;
    const affectedValue = this._valueAffected;
    if (affectedValue === "startValue") {
      this._selectedRange = (prevEndValue - newValue) / (max - min);
      this._firstHandlePositionFromStart = (newValue - min) / (max - min) * 100;
    } else if (affectedValue === "endValue") {
      this._selectedRange = (newValue - prevStartValue) / (max - min);
      this._secondHandlePositionFromStart = (newValue - min) / (max - min) * 100;
    } else {
      this._selectedRange = (this.endValue - this.startValue) / (max - min);
      this._firstHandlePositionFromStart = (this.startValue - min) / (max - min) * 100;
      this._secondHandlePositionFromStart = (this.endValue - min) / (max - min) * 100;
    }
  }
  /**
   * Swaps the start and end values of the handles if one came accros the other:
   * - If the start value is greater than the endValue swap them and their handles
   * - If the endValue become less than the start value swap them and their handles
   *
   * Switches the focus to the opposite of the currently focused handle.
   *
   * Note: Only the property values are reversed, the DOM elements of the handles
   * corresponding to them are never switched.
   * @private
   */
  _swapValues() {
    const affectedValue = this._valueAffected;
    if (!affectedValue) {
      return;
    }
    if (affectedValue === "startValue" && this.startValue > this.endValue) {
      const prevEndValue = this.endValue;
      this.endValue = this.startValue;
      this.startValue = prevEndValue;
    }
    if (affectedValue === "endValue" && this.endValue < this.startValue) {
      const prevStartValue = this.startValue;
      this.startValue = this.endValue;
      this.endValue = prevStartValue;
    }
    this._setValuesAreReversed();
    this._updateHandlesAndRange(this[affectedValue]);
    this.focusInnerElement();
    this.syncUIAndState();
  }
  /**
   * Flag that we have swapped the values of the 'start' and 'end' properties,
   * to correctly switch the focus within the component from one handle to another
   * when the swapping is finished. As we only swap property values and not
   * the handle elements themselves, we must also swap their focus.
   * @private
   */
  _setValuesAreReversed() {
    this._reversedValues = !this._reversedValues;
  }
  _areValuesReversed() {
    return this._reversedValues;
  }
  get tickmarksObject() {
    const count = this._tickmarksCount;
    const arr = [];
    if (this._hiddenTickmarks) {
      return [false, false];
    }
    for (let i = 0; i <= count; i++) {
      const isBiggerThanStartValue = this._effectiveMin + i * this.step >= this.startValue;
      const isBiggerThanEndValue = this._effectiveMin + i * this.step <= this.endValue;
      arr.push(isBiggerThanStartValue && isBiggerThanEndValue);
    }
    return arr;
  }
  get _startHandle() {
    return this.shadowRoot.querySelector(".ui5-slider-handle--start");
  }
  get _endHandle() {
    return this.shadowRoot.querySelector(".ui5-slider-handle--end");
  }
  get _progressBar() {
    return this.shadowRoot.querySelector(".ui5-slider-progress");
  }
  get _ariaLabelledByStartHandleRefs() {
    return [`${this._id}-accName`, `${this._id}-startHandleDesc`].join(" ").trim();
  }
  get _ariaLabelledByEndHandleRefs() {
    return [`${this._id}-accName`, `${this._id}-endHandleDesc`].join(" ").trim();
  }
  get _ariaLabelledByProgressBarRefs() {
    return [`${this._id}-accName`, `${this._id}-sliderDesc`].join(" ").trim();
  }
  get styles() {
    return {
      progress: {
        "width": `${this._selectedRange * 100}%`,
        "transform-origin": `${this.directionStart} top`,
        [this.directionStart]: `${this._firstHandlePositionFromStart}%`
      },
      startHandle: {
        [this.directionStart]: `${this._firstHandlePositionFromStart}%`
      },
      endHandle: {
        [this.directionStart]: `${this._secondHandlePositionFromStart}%`
      },
      label: {
        "width": `${this._labelWidth}%`
      },
      labelContainer: {
        "width": `100%`,
        [this.directionStart]: `-${this._labelWidth / 2}%`
      },
      tooltip: {
        "visibility": `${this._tooltipVisibility}`
      }
    };
  }
  static onDefine() {
    return __async(this, null, function* () {
      RangeSlider_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
};
__decorate2([property_default({
  validator: Float_default,
  defaultValue: 0
})], RangeSlider.prototype, "startValue", void 0);
__decorate2([property_default({
  validator: Float_default,
  defaultValue: 100
})], RangeSlider.prototype, "endValue", void 0);
__decorate2([property_default({
  type: Boolean
})], RangeSlider.prototype, "rangePressed", void 0);
RangeSlider = RangeSlider_1 = __decorate2([customElement_default({
  tag: "ui5-range-slider",
  languageAware: true,
  template: RangeSliderTemplate_lit_default,
  dependencies: [Icon_default],
  styles: [SliderBase_default.styles, RangeSlider_css_default]
})], RangeSlider);
RangeSlider.define();
var RangeSlider_default = RangeSlider;
export {
  RangeSlider_default as default
};
//# sourceMappingURL=@ui5_webcomponents_dist_RangeSlider__js.js.map
