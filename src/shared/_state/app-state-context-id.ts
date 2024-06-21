
import { createContextId } from '@builder.io/qwik';
import type { AppState } from './app-state.type';

export const APP_STATE_CONTEXT_ID = createContextId<AppState>('app-state-context-id');
