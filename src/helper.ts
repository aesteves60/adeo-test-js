export function addChildCountToName(name: string, child: unknown[]): string {
    return `${name} [${child.length}]`;
}