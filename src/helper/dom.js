
export function retrieveNodes(el) {
    return [].slice.apply(el.querySelector('.rounded-menus').childNodes).filter(node => node.nodeType === 1);
}


export function isDescendant(parent, child) {
    let node = child.parentNode;
    while (node !== null) {
        if (node === parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
