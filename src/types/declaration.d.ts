declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png' {
  export default '' as string;
}
declare module '*.svg' {
  export default '' as string;
}
declare module '*.jpeg' {
  export default '' as string;
}
declare module '*.jpg' {
  export default '' as string;
}
