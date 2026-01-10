import { useCallback, useEffect, useState } from 'react';
import { STORAGE_KEY } from '../data/parts';
import { PartState } from '../types';

function loadStateFromStorage(): PartState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return {};
    const loadedState: PartState = {};
    Object.keys(parsed).forEach(id => {
      loadedState[id] = Number(parsed[id]) || 0;
    });
    return loadedState;
  } catch (error) {
    console.warn('Could not load saved car parts state', error);
    return {};
  }
}

export function usePartsState() {
  // Initialize state from localStorage synchronously to prevent race condition
  const [partState, setPartState] = useState<PartState>(loadStateFromStorage);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(partState));
    } catch (error) {
      console.warn('Could not save car parts state', error);
    }
  }, [partState]);

  const setPartQuantity = useCallback((partId: string, quantity: number) => {
    setPartState(prev => ({
      ...prev,
      [partId]: Math.max(0, quantity),
    }));
  }, []);

  const resetAllParts = useCallback(() => {
    setPartState({});
  }, []);

  const getPartState = useCallback(
    (partId: string): number => {
      return partState[partId] || 0;
    },
    [partState]
  );

  return {
    partState,
    setPartQuantity,
    resetAllParts,
    getPartState,
  };
}
