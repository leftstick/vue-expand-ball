<template>
    <div class="expand-ball" data-open="-" data-close="+" @click="toggle">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'expand-ball',
    data() {
        return {
            expanded: false
        };
    },
    props: {
        open: {
            type: String,
            default: '-'
        },
        close: {
            type: String,
            default: '+'
        }
    },
    methods: {
        toggle() {
            this.expanded = !this.expanded;
            const nodes = [].slice.apply(this.$el.childNodes).filter(node => node.nodeType === 1);
            if (this.expanded) {
                nodes
                .forEach((node, index) => {
                    node.style['transitionDelay'] = (100 * index) + 'ms';
                    node.style['webkitTransitionDelay'] = (100 * index) + 'ms';
                    node.style['left'] = (60 * Math.cos(2 * Math.PI / 360 * (360 / 5 * index))) + 'px';
                    node.style['top'] = (-60 * Math.sin(2 * Math.PI / 360 * (360 / 5 * index))) + 'px';
                });
            } else {
                nodes
                .forEach((node, index) => {
                    node.removeAttribute('style');
                });
            }
            
        }
    }
};

</script>

<style scoped>
    .expand-ball {
        position: fixed;
        left: 150px;
        bottom: 150px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        list-style-type: none;
        margin: 0;
        padding: 0;
        text-align: center;
        color: #fff;
        cursor: pointer;
    }

    .expand-ball > *,
    .expand-ball:after {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #e74c3c;
    }

    .expand-ball > * {
        transition: all .6s;
    }

    .expand-ball:after {
        content: attr(data-close);
        z-index: 1;
        border-radius: 50%;
    }

    .expand-ball.active:after {
        content: attr(data-open);
    }
</style>