import {retrieveMenuNodes} from '../helper/dom';

export default {
    bind(el, bindings, vnode) {
        const {ballSize, menuSize, ballColor, menuColor} = bindings.value;
        const ballEl = el.querySelector('.center-ball');

        ballEl.style.width = ballSize + 'px';
        ballEl.style.height = ballSize + 'px';
        ballEl.style.lineHeight = ballSize + 'px';
        ballEl.style.backgroundColor = ballColor;

        retrieveMenuNodes(el)
            .forEach(node => {
                node.style.backgroundColor = menuColor;
                node.style.width = menuSize + 'px';
                node.style.height = menuSize + 'px';
                node.style.lineHeight = menuSize + 'px';
                node.style.top = (ballSize - menuSize) / 2 + 'px';
                node.style.left = (ballSize - menuSize) / 2 + 'px';
            });
    }
};
