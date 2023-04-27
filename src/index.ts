import { DatadogProps } from 'datadog-cdk-constructs-v2';

export interface Foo extends DatadogProps {
  bar: string;
}

export class Hello {
  public sayHello(foo: Foo) {
    return `${foo.bar}`;
  }
}
