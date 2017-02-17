
export function retrieveMenuNodes(el) {
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

export const isTouchable = 'ontouchstart' in window;

export const screenSize = document.documentElement;

let original = {};

export function toggleScrollable(bool) {
    if (!bool) {
        original.height = document.body.style.height;
        original.position = document.body.style.position;

        document.body.style.touchAction = 'none';
        document.body.style.msTouchAction = 'none';
        document.body.style.height = '100%';
        document.body.style.position = 'fixed';
        return;
    }

    document.body.style.touchAction = '';
    document.body.style.msTouchAction = '';
    document.body.style.height = original.height;
    document.body.style.position = original.position;
}
