import {retrieveMenuNodes} from '../helper/dom';

export default {
    bind(el, bindings, vnode) {
        toggle(bindings, el);
    },
    update(el, bindings, vnode) {
        toggle(bindings, el);
    }
};


function toggle(bindings, el) {
    const nodes = retrieveMenuNodes(el);
    const {expanded, radius, ballSize, menuSize} = bindings.value;
    if (expanded) {
        return nodes
            .forEach((node, index) => {
                node.style.transitionDelay = (100 * index) + 'ms';
                node.style.webkitTransitionDelay = (100 * index) + 'ms';
                node.style.left = parseInt(node.style.left) + (radius * Math.cos(2 * Math.PI / 360 * (360 / nodes.length * index))) + 'px';
                node.style.top = parseInt(node.style.top) + (-radius * Math.sin(2 * Math.PI / 360 * (360 / nodes.length * index))) + 'px';
            });
    }
    nodes
        .forEach((node, index) => {
            node.style.top = (ballSize - menuSize) / 2 + 'px';
            node.style.left = (ballSize - menuSize) / 2 + 'px';
        });
}
