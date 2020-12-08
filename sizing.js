/**
 * Blocks Sizing
 * Appends a label to all elements matched by a CSS selector, defaults to immediate children of `.sizing`. Default label contains width and height.
 * Labels are floated to the right
 * @version 0.1a
 */

/**
 *
 * @param selector string CSS selector for the elements to append the size label
 * @param zIndex boolean `true` adds the z-index of the element if is declared
 * @constructor
 */
let Sizing = function(selector, zIndex) {

    (function(win, doc, sel) {
        let els = doc.querySelectorAll(sel),
            tag;

        function init() {
            // Cleanup if any
            doc.querySelectorAll('.sizing-dimension').forEach(function(el, key) {
                el.remove();
            });

            els.forEach(function(el, i) {
                tag = doc.createElement('mark');

                tag.classList.add('sizing-dimension');
                tag.textContent = el.clientWidth + 'x' + el.clientHeight;

                if(zIndex === true) {
                    tag.textContent += ' z:' + win.getComputedStyle(el).zIndex;
                }

                el.prepend(tag);
                el.classList.add('.sizing-element')

            });
        }

        win.addEventListener('load', init, false);
        win.addEventListener('resize', init, false);

    })(window, document, selector);
};

// A default initialisation
if(document.querySelectorAll('.sizing').length > 0)
    Sizing('.sizing > *');
