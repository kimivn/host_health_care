import {makeAutoObservable} from 'mobx';
import {loginState, signUpState} from '../interfaces';

const initUserState = {
  token: '',
  info: {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  },
  signup: [],
};

class userStore {
  user = initUserState;

  constructor() {
    makeAutoObservable(this);
  }

  onSignUp = (newUser: signUpState) => {
    // const nData =
    this.user.signup.push(newUser);
    this.user.info = newUser;
    this.user.token = Math.random().toString(36).substr(2); // random toke
  };

  onLogin = (dataLogin: loginState) => {
    if (this.user.signup?.length > 0) {
      this.user.signup.forEach((value: signUpState, index, arr) => {
        if (
          dataLogin.email == value.email &&
          dataLogin.password === value.password
        ) {
          this.user.info = value;
          this.user.token = Math.random().toString(36).substr(2); // random toke
        }
      });
    }
  };

  onLogout = () => {
    const resetState = {...initUserState, signup: this.user.signup};
    this.user = resetState;
  };
}

export default userStore;
