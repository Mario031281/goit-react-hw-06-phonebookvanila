// файл створення стор Redux
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';
import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
const persistedRootReducer = persistReducer(
  { key: 'test', storage, whitelist: ['contacts'] },
  rootReducer
);
// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();

export const store = createStore(persistedRootReducer, enhancer);
export const persistor = persistStore(store);
