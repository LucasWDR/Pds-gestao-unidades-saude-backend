import {
  IsolationLevel,
  Propagation,
  Transactional as HookedTransactional,
} from 'typeorm-transactional-cls-hooked';

export const Transactional = (options?: {
  connectionName?: string | (() => string | undefined);
  propagation?: Propagation;
  isolationLevel?: IsolationLevel;
}): MethodDecorator => {
  if (process.env.DISABLE_TRANSACTIONS === 'true') {
    return () => {
      // linter fix
    };
  }
  return HookedTransactional(options);
};
