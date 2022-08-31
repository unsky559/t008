import { useState } from 'react';

export default function useFetch(callback: () => void):
  [() => Promise<void>, boolean, string] {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (er) {
      setError(er);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
}
