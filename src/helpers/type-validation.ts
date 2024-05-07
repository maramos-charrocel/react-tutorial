export {};
/**
 * Estas validaciones utilizan un tipo de retorno boolean para
 * saber si el parametro proporcionado es del tipo que indica
 * la funcion o no lo es
 */

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}
export function isArray(value: unknown): value is Array<unknown> {
  return Array.isArray(value);
}
export function isNull(value: unknown): value is number {
  return value === null;
}
export function isObject(value: unknown): value is object {
  return (
    typeof value === 'object' &&
    value !== null &&
    Object.prototype.toString.call(value) === '[object Object]'
  );
}
export function isFunction(value: unknown): value is CallableFunction {
  return typeof value === 'function';
}