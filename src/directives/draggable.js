import {isDescendant, isTouchable, screenSize, toggleScrollable} from '../helper/dom';
import {stop} from '../helper/event';

const listeners = {};

export default {
    bind(el, bindings, vnode) {

        const {startEvent, moveEvent, endEvent} = geAvailableEvents();

        el.dataset.listenerId = 'listener_' + new Date().getTime();

        listeners[el.dataset.listenerId] = [{
            name: startEvent,
            listener: startDrag
        }, {
            name: endEvent,
            listener: stopDrag
        }];

        let timer = null,
            coordinates = null;

        function mouseMoveHandler(e) {
            const evt = e || window.e;
            const coords = getCoords(evt);
            stop(e);
            const offsetX = parseFloat(coordinates.x);
            const offsetY = parseFloat(coordinates.y);
            if (coords.x !== offsetX || coords.y !== offsetY) {
                moveElement(el, coords.x - offsetX, coords.y - offsetY);
                coordinates = coords;
            }
            return false;
        }

        function startDrag(e) {
            if (!isDescendant(el, e.target)) {
                return false;
            }

            isTouchable && toggleScrollable(false);

            timer = setTimeout(() => {
                el.dataset.dragging = 'true';
                const evt = e || window.e;
                if (evt.preventDefault) {
                    evt.preventDefault();
                }

                coordinates = getCoords(evt);

                document.body.addEventListener(moveEvent, mouseMoveHandler, {
                    passive: false,
                    cancelable: true
                });
            }, 100);
            return false;
        }

        function stopDrag(e) {
            if (timer) {
                adjustBall(el);
            }
            clearTimeout(timer);
            timer = null;

            document.body.removeEventListener(moveEvent, mouseMoveHandler);

            setTimeout(() => {
                el.dataset.dragging = '';
                isTouchable && toggleScrollable(true);
            }, 50);
            return false;
        }

        window.addEventListener(startEvent, startDrag, {
            passive: false,
            cancelable: true
        });
        window.addEventListener(endEvent, stopDrag, false);
    },

    unbind(el) {
        if (listeners[el.dataset.listenerId] && listeners[el.dataset.listenerId].length) {
            listeners[el.dataset.listenerId].forEach(listener => {
                window.removeEventListener(listener.name, listener.listener);
            });
            delete listeners[el.dataset.listenerId];
        }
    }
};

function adjustBall(ball) {
    const {top, left, right, bottom, width, height} = ball.getBoundingClientRect();

    if (top < 0) {
        ball.style.top = '1px';
    }
    if (left < 0) {
        ball.style.left = '1px';
    }
    if (bottom > screenSize.clientHeight) {
        ball.style.top = screenSize.clientHeight - height - 1 + 'px';
    }
    if (right > screenSize.clientWidth) {
        ball.style.left = screenSize.clientWidth - width - 1 + 'px';
    }
}

function getCoords(event) {
    // touch move and touch end have different touch data
    const touches = event.touches,
        data = touches && touches.length ? touches : event.changedTouches;

    return {
        x: isTouchable ? data[0].clientX : event.pageX,
        y: isTouchable ? data[0].clientY : event.pageY
    };
}

function geAvailableEvents() {
    return {
        startEvent: isTouchable ? 'touchstart' : 'mousedown',
        moveEvent: isTouchable ? 'touchmove' : 'mousemove',
        endEvent: isTouchable ? 'touchend' : 'mouseup'
    };
}

function moveElement(el, x, y) {
    let left = parseFloat(window.getComputedStyle(el).left);
    if (!left) {
        left = screenSize.clientWidth - parseFloat(window.getComputedStyle(el).right);
    }

    let top = parseFloat(window.getComputedStyle(el).top);
    if (!top) {
        top = screenSize.clientHeight - parseFloat(window.getComputedStyle(el).bottom);
    }
    el.style.left = (left + x) + 'px';
    el.style.top = (top + y) + 'px';
}
