import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './QuizList.module.scss';
import axios from '../../axios/axios-quiz';
import Loader from '../../components/UI/Loader/Loader';

export default class QuizList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizes: [],
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/quizes.json');
      let { data } = response;

      if (!data) {
        data = [];
      }

      const quizes = Object.keys(data).map((id, index) => ({
        id,
        name: `Тест № ${index + 1}`,
      }));
      this.setState({
        quizes,
        loading: false,
      });
    } catch (e) {
      console.log(e);
    }
  }

  renderQuizes() {
    const { state } = this;

    if (state.quizes.length) {
      return state.quizes.map(({ id, name }) => (
        <li key={id}>
          <NavLink to={`/quiz/${id}`}>
            {name}
          </NavLink>
        </li>
      ));
    }

    return <li className={classes.empty}>Тесты не созданы</li>;
  }

  render() {
    const { state } = this;

    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>
          {state.loading
            ? <Loader />
            : (
              <ul>
                { this.renderQuizes() }
              </ul>
            )}
        </div>
      </div>
    );
  }
}
