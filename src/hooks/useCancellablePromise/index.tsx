import { useRef, useEffect } from "react";

interface ICancellablePromise {
  promise: Promise<any>;
  cancel: () => void;
}

export const useCancellablePromise = () => {
  const promises = useRef<ICancellablePromise[]>([]);

  useEffect(() => {
    promises.current = promises.current || [];

    return () => {
      promises.current.forEach((aPromise: ICancellablePromise) =>
        aPromise.cancel()
      );
      promises.current = [];
    };
  }, []);

  const cancellablePromise = (aPromise: Promise<any>): Promise<any> => {
    const cancelablePromise = makeCancelable(aPromise);
    promises.current.push(cancelablePromise);
    return cancelablePromise.promise;
  };

  return { cancellablePromise };
};

const makeCancelable = (aPromise: Promise<any>): ICancellablePromise => {
  let isCanceled = false;

  const promise = new Promise((resolve, reject) => {
    aPromise
      .then((response) => {
        if (isCanceled) {
          return;
        }

        resolve(response);
      })
      .catch((error) => {
        if (isCanceled) {
          return;
        }

        reject(error);
      });
  });

  return {
    promise,
    cancel: () => {
      isCanceled = true;
    },
  };
};
