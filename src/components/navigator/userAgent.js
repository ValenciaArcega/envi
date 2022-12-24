'use strict';

// Old code using navigator.userAgent
if (navigator.userAgent.indexOf("Chrome") > -1) {
  // Do something specific for Chrome
} else if (navigator.userAgent.indexOf("Firefox") > -1) {
  // Do something specific for Firefox
}

// New code using feature detection
if (window.chrome) {
  // Do something specific for Chrome
} else if (typeof InstallTrigger !== 'undefined') {
  // Do something specific for Firefox
}