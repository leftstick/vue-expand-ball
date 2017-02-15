
export function stop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
    }
    if (e.preventDefault) {
        e.preventDefault();
    }
}
