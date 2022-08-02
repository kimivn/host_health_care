import React from 'react';
import UserStore from './user.store';

class RootStore {
  userStore: UserStore;
  constructor() {
    this.userStore = new UserStore(this);
  }
}

const StoresContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(StoresContext);
