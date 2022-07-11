(function () {
    'use strict';
    let docuEl = document.documentElement;
    let viewportEl = document.querySelector('meta[name="viewport"]');
    let dpr = window.devicePixelRatio || 1;
    let maxWidth = 540;
    let minWidth = 320;
    docuEl.setAttribute('data-dpr', dpr);
    docuEl.setAttribute('max-width', maxWidth);
    docuEl.setAttribute('min-width', minWidth);
    dpr = dpr >= 3 ? 3 : (dpr >= 2 ? 2 : 1);
    let scale = 1 / dpr;
    let content = 'width=device-width, initial-scale=' + scale + ',minimum-scale=' + scale + ',maximum-scale=' + scale + ',user-scalable=no';
    if (viewportEl) {
        viewportEl.setAttribute('content', content);
    } else {
        viewportEl = document.createElement('meta');
        viewportEl.setAttribute('name', 'viewport');
        viewportEl.setAttribute('content', content);
        docuEl.head.appendChild(viewportEl);
    }
    setRemUnit();
    window.onresize = setRemUnit
    function setRemUnit() {
        let viewWidth = docuEl.clientWidth || window.innerWidth;
        if (maxWidth && viewWidth / dpr > maxWidth) {
            viewWidth = maxWidth * dpr;
        } else if (minWidth && viewWidth / dpr < minWidth) {
            viewWidth = minWidth * dpr;
        }
        docuEl.style.fontSize = viewWidth / 375 * 20 + 'px';
    }
})();