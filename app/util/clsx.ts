export const clsx = (className: string | Array<string | null | undefined>) => {
  if (Array.isArray(className)) {
    return className.filter(Boolean).join(" ");
  }
  return `${className} `;
};
