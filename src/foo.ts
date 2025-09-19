export function defaultRenderer(message: string) {
    return "Default: " + message;
}

const helpers = {
    defaultRenderer,
} as const;

export const foo = (message: string) => {
    return helpers.defaultRenderer(message);
}