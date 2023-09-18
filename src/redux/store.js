// файл створення стор Redux
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';
import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
