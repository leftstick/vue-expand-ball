import {isDescendant} from '../helper/dom';

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
        }];

        let offsetX = 0,
            offsetY = 0,
            timer = null;

        let mousemoveTemp = null;

        function move(x, y) {
            el.style.left = (parseInt(window.getComputedStyle(el).left) + x) + 'px';
            el.style.top = (parseInt(window.getComputedStyle(el).top) + y) + 'px';
        }

        function mouseMoveHandler(e) {
            const evt = e || window.event;
            const x = mouseX(evt);
            const y = mouseY(evt);
            if (x !== offsetX || y !== offsetY) {
                move(x - offsetX, y - offsetY);
                offsetX = x;
                offsetY = y;
            }
            return false;
        }

        function startDrag(e) {
            if (!isDescendant(el, e.target)) {
                return false;
            }
            timer = setTimeout(() => {
                el.dataset.dragging = 'true';
                const evt = e || window.event;

                offsetX = mouseX(evt);
                offsetY = mouseY(evt);

                // save any previous mousemove event handler:
                if (document.body.onmousemove) {
                    mousemoveTemp = document.body.onmousemove;
                }
                document.body.onmousemove = mouseMoveHandler;
            }, 100);
            return false;
        }

        function stopDrag(e) {
            clearTimeout(timer);

            // restore previous mousemove event handler if necessary
            document.body.onmousemove = mousemoveTemp;
            mousemoveTemp = null;

            adjustBall(el);

            setTimeout(() => {
                el.dataset.dragging = '';
            }, 100);
            return false;
        }

        window.addEventListener('mousedown', startDrag, false);
        window.addEventListener('mouseup', stopDrag, false);
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
