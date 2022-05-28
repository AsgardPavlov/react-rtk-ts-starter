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

    const bemBlock = (modifiers = null) => _applyModifiers(namespace, modifiers);
    const bemElement = (elementName: string, modifiers = null) => _applyModifiers(namespace + '__' + elementName, modifiers);

    return {
        bemBlock,
        bemElement,
    };
}
