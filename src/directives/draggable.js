import {isDescendant} from '../helper/dom';
import {stop} from '../helper/event';

const listeners = {};

export default {
    bind(el, bindings, vnode) {

        el.dataset.listenerId = 'listener_' + new Date().getTime();
        listeners[el.dataset.listenerId] = [{
            name: 'mousedown',
            listener: startDrag
        }, {
            name: 'mouseup',
            listener: stopDrag
        }, {
            name: 'touchstart',
            listener: startDrag
        }, {
            name: 'touchend',
            listener: stopDrag
        }];

        let timer = null;

        function move(x, y) {
            el.style.left = (parseInt(window.getComputedStyle(el).left) + x) + 'px';
            el.style.top = (parseInt(window.getComputedStyle(el).top) + y) + 'px';
        }

        function mouseMoveHandler(e) {
            const evt = e || window.event;
            const x = mouseX(evt);
            const y = mouseY(evt);
            stop(e);
            const offsetX = el.dataset.coodx;
            const offsetY = el.dataset.coody;
            if (x !== offsetX || y !== offsetY) {
                move(x - offsetX, y - offsetY);
                el.dataset.coodx = x;
                el.dataset.coody = y;
            }
            return false;
        }

        function startDrag(e) {
            if (!isDescendant(el, e.target)) {
                return false;
            }
            document.body.style.touchAction = 'none';
            document.body.style.msTouchAction = 'none';
            timer = setTimeout(() => {
                el.dataset.dragging = 'true';
                const evt = e || window.event;
                if (evt.preventDefault) {
                    evt.preventDefault();
                }

                el.dataset.coodx = mouseX(evt);
                el.dataset.coody = mouseY(evt);

                document.body.addEventListener('mousemove', mouseMoveHandler, false);
                document.body.addEventListener('touchmove', mouseMoveHandler, {
                    passive: false,
                    cancelable: true
                });
            }, 100);
            return false;
        }

        function stopDrag(e) {
            clearTimeout(timer);

            document.body.removeEventListener('mousemove', mouseMoveHandler);
            document.body.removeEventListener('touchmove', mouseMoveHandler);

            adjustBall(el);

            setTimeout(() => {
                el.dataset.dragging = '';
                document.body.style.touchAction = '';
                document.body.style.msTouchAction = '';
            });
            return false;
        }

        window.addEventListener('mousedown', startDrag, false);
        window.addEventListener('mouseup', stopDrag, false);
        window.addEventListener('touchstart', startDrag, {
            passive: false
        });
        window.addEventListener('touchend', stopDrag, false);
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
    const {clientWidth, clientHeight} = document.documentElement;
    if (top < 0) {
        ball.style.top = '1px';
    }
    if (left < 0) {
        ball.style.left = '1px';
    }
    if (bottom > clientHeight) {
        ball.style.top = clientHeight - height - 1 + 'px';
    }
    if (right > clientWidth) {
        ball.style.left = clientWidth - width - 1 + 'px';
    }
}

function mouseX(e) {
    if (e.changedTouches && e.changedTouches.length) {
        return e.changedTouches[0].clientX;
    }
    if (e.pageX) {
        return e.pageX;
    }
    if (e.clientX) {
        return e.clientX + (document.documentElement.scrollLeft ?
                document.documentElement.scrollLeft :
                document.body.scrollLeft);
    }
    return null;
}

function mouseY(e) {
    if (e.changedTouches && e.changedTouches.length) {
        return e.changedTouches[0].clientY;
    }
    if (e.pageY) {
        return e.pageY;
    }
    if (e.clientY) {
        return e.clientY + (document.documentElement.scrollTop ?
                document.documentElement.scrollTop :
                document.body.scrollTop);
    }
    return null;
}
