import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Auth.module.scss';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import { validate, validateForm } from '../../form/formFramework';
import { auth } from '../../store/actions/auth';

class Auth extends Component {
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

  loginHandler() {
    const { state, props } = this;
    console.log(props);
    props.auth(
      state.formControls.email.value,
      state.formControls.password.value,
      true,
    );
  }

  registerHandler() {
    const { state, props } = this;
    props.auth(
      state.formControls.email.value,
      state.formControls.password.value,
      false,
    );
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
          <form className={classes.AuthForm} onSubmit={evt => evt.preventDefault()}>
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

const mapDispatchToProps = dispatch => ({
  auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin)),
});

export default connect(null, mapDispatchToProps)(Auth);
