/**
 * Sizing plugin
 * Gets dimensions of immediate elements and appends it
 */
let Sizing = function(selector) {
    (function(win, doc, sel) {
        let els = doc.querySelectorAll(sel),
            tag;

        els.forEach(function(el, i) {
            tag = doc.createElement('mark');
            tag.classList.add('sizing-dimension');
            tag.textContent = el.clientWidth + 'x' + el.clientHeight;
            el.prepend(tag);
        });
    })(window, document, selector);
}

// A default initialisation
if(document.querySelector('.sizing'))
    Sizing('.sizing > *');
