export const removeLastInput = (expression: string): string => expression.length
    ? expression.substring(0, expression.length - 1)
    : expression