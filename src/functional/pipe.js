const pipe = (...fns) => value => fns.reduce((acc, next) => next(acc), value);

export default pipe;
