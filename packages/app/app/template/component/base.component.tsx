import React from 'react';

export function BaseComponent<T>(defaultProps: Partial<T>) {
  abstract class _BaseComponent<T> extends React.PureComponent<T> {
    static getDerivedStateFromError(error: Error) {
      return { error };
    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
      console.log(error);
    }

    public static defaultProps = defaultProps;

    abstract baseElement: React.FunctionComponent<this['props']>;

    constructor(props: T) {
      super(props);
    }

    public render() {
      return React.createElement(this.baseElement);
    }
  }
  return _BaseComponent;
}
