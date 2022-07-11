(function () {
    'use strict';
    setRemUnit();
    window.onresize = setRemUnit
    function setRemUnit() {
        let docuEl = document.documentElement;
        let viewWidth = docuEl.clientWidth || window.innerWidth;
        docuEl.style.fontSize = viewWidth / 375 * 20 + 'px';
    }
})();