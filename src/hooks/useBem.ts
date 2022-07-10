/**
 bemBlock('IndexPage') => 'IndexPage'
 bemBlock('IndexPage', {overflowed: true}) => 'IndexPage_overflowed'

 bemElement('container') => 'IndexPage__container'
 bemElement('container', {hidden: true}) => 'IndexPage__container_hidden'

 bem(bemBlock('IndexPage'), 'black-background') => 'IndexPage black-background'
 bem(bemElement('container'), 'card') => 'IndexPage__container card'
 **/

export default function useBem(namespace: string) {
    const _applyModifiers = (entity: string, modifiers: string | any) => {
        let result = [];
        result.push(entity);

        if (typeof modifiers === 'string') {
            result.push(entity + (modifiers ? '_' + modifiers : ''));
        } else if (modifiers) {
            Object.keys(modifiers).forEach(key => {
                const value = modifiers[key];
                if (!value) {
                    // Skip
                } else if (value === true) {
                    result.push(entity + '_' + key);
                } else {
                    result.push(entity + '_' + key + '_' + value);
                }
            });
        }

        result = result.map(cl => cl);
        return result.join(' ');
    };

    const bemBlock = (modifiers: boolean | null = null) => _applyModifiers(namespace, modifiers);
    const bemElement = (elementName: string, modifiers?: {[container: string]: boolean }) => _applyModifiers(
        namespace + '__' + elementName, modifiers,
    );
    const bem = (...names: string[]) => Array.prototype.slice
        .call(names)
        .filter(v => v)
        .join(' ');

    return {
        bem,
        bemBlock,
        bemElement,
    };
}
