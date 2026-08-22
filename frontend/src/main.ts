import { bootstrapApplication } from '@angular/platform-browser';
import { ignoreCustomElements } from '@ui5/webcomponents-base/dist/IgnoreCustomElements.js';

// Registers every named icon (ui5-icon name="...", and icons used internally
// by ui5-button/ui5-shellbar/etc.) up front so any icon name used across the
// app resolves without per-icon import bookkeeping.
import '@ui5/webcomponents-icons/dist/AllIcons.js';

// Defines the custom elements themselves. We use @ui5/webcomponents directly
// (no @ui5/webcomponents-ngx wrapper), so every tag referenced from a
// template needs its module imported here once, up front.
import '@ui5/webcomponents/dist/Avatar.js';
import '@ui5/webcomponents/dist/Badge.js';
import '@ui5/webcomponents/dist/BusyIndicator.js';
import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents/dist/CheckBox.js';
import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents/dist/Input.js';
import '@ui5/webcomponents/dist/MessageStrip.js';
import '@ui5/webcomponents/dist/Option.js';
import '@ui5/webcomponents/dist/RangeSlider.js';
import '@ui5/webcomponents/dist/RatingIndicator.js';
import '@ui5/webcomponents/dist/Select.js';
import '@ui5/webcomponents/dist/TextArea.js';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// UI5 Web Components perf guidance: tell Angular's change detection to skip
// diffing into our own `app-*` custom-element-shaped component tags so it
// doesn't waste cycles trying to treat them as unknown web components.
ignoreCustomElements('app-');

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
