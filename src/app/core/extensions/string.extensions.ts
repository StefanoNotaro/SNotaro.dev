export { };

declare global {
  interface String {
    copyToClipboard(this: string): boolean;
  }

  interface StringConstructor {
    isNullOrEmpty(value: string): boolean;
  }
}

String.prototype.copyToClipboard = function (this: string): boolean {
  navigator.clipboard.writeText(this);
  return true;
};

String.isNullOrEmpty = function (value: string): boolean {
  // !value checks for null and undefined, because of being falsy condition
  return !value || value === '';
}
