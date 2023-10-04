export abstract class BaseDTO<D> {
  constructor(data?: Partial<D>) {
    Object.assign(this, data);
  }
}
