"use strict";var detectMobile={isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},_getHeight=function(e){return parseFloat(getComputedStyle(e,null).height.replace("px",""))},_getWidth=function(e){return parseFloat(getComputedStyle(e,null).width.replace("px",""))},trigger=function(e,t){"string"==typeof t&&"function"==typeof e[t]?e[t]():(t="string"==typeof t?new Event(t,{bubbles:!0}):t,e.dispatchEvent(t))};
//# sourceMappingURL=helper.js.map
