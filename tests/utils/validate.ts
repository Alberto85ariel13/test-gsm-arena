
import * as joi from 'joi';
import * as R from 'ramda';
const isEmptyOrNil = R.either(R.isEmpty, R.isNil);
const isPropEmptyOrNil = R.curryN(2, R.compose(isEmptyOrNil, R.prop));
const resolveProp = R.curryN(2, R.compose(R.bind(Promise.resolve, Promise), R.prop));
const rejectProp = R.curryN(2, R.compose(R.bind(Promise.reject, Promise), R.prop));

const ifValid = R.ifElse(isPropEmptyOrNil('error'));
export const validateP = R.curryN(2, R.compose(ifValid(resolveProp('value'), rejectProp('error')), R.flip(joi.validate)));
