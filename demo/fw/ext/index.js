import appRouter from './appRouter';
import appHighlight from './appHighlight';
import appExpandBall from './appExpandBall';

export default function() {
    appHighlight();
    appExpandBall();
    return {
        router: appRouter()
    };
}
