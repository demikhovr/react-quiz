import React, { Component } from 'react';
import axios from 'axios';
import classes from './Auth.module.scss';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import { validate, validateForm } from '../../form/formFramework';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false,
      formControls: {
        email: {
          value: '',
          type: 'email',
          label: 'Email',
          spellCheck: false,
          errorMessage: 'Введите корректный email',
          valid: false,
          touched: false,
          validation: {
            required: true,
            email: true,
          },
        },
        password: {
          value: '',
          type: 'password',
          label: 'Пароль',
          spellCheck: false,
          errorMessage: 'Введите корректный пароль',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLength: 6,
          },
        },
      },
    };
    this.loginHandler = this.loginHandler.bind(this);
    this.registerHandler = this.registerHandler.bind(this);
  }

  onChangeHandler(value, controlName) {
    const { state } = this;
    const formControls = { ...state.formControls };
    const control = { ...formControls[controlName] };

    control.value = value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    this.setState({
      isFormValid: validateForm(formControls),
      formControls,
    });
  }

  async loginHandler() {
    const { state } = this;
    const authData = {
      email: state.formControls.email.value,
      password: state.formControls.password.value,
      returnSecureToken: true,
    };

    try {
      const response = await axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDRNnBkkGKcuqdQ7rPj-fNaHakX1pvDxgk', authData);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  async registerHandler() {
    const { state } = this;
    const authData = {
      email: state.formControls.email.value,
      password: state.formControls.password.value,
      returnSecureToken: true,
    };

    try {
      const response = await axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDRNnBkkGKcuqdQ7rPj-fNaHakX1pvDxgk', authData);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  submitHandler(evt) {
    console.log(this);
    evt.preventDefault();
  }

  renderInputs() {
    const { state } = this;
    return Object.keys(state.formControls).map((controlName, index) => {
      const control = state.formControls[controlName];
      const key = controlName + index;
      return (
        <Input
          key={key}
          {...control}
          shouldValidate={!!control.validation}
          onChange={({ target }) => this.onChangeHandler(target.value, controlName)}
        />
      );
    });
  }

  render() {
    const { state } = this;

    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>
          <form className={classes.AuthForm} onSubmit={this.submitHandler}>
            {this.renderInputs()}
            <Button
              type="success"
              onClick={this.loginHandler}
              disabled={!state.isFormValid}
            >
              Войти
            </Button>
            <Button
              type="primary"
              onClick={this.registerHandler}
              disabled={!state.isFormValid}
            >
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
