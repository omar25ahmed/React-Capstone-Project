import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/Store';
import SingleCompany from '../Pages/Home/SingleCompany';

describe('testing Home component', () => {
  it('snapshot for the Single Company Component ', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <SingleCompany />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('testing Single Company component renders correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <SingleCompany />
        </Router>
      </Provider>,
    );
    expect(screen.getByTestId('company')).toBeInTheDocument();
  });
  it('should GET data', async () => {
    render(
      <Provider store={store}>
        <Router>
          <SingleCompany />
        </Router>
      </Provider>,
    );

    const listItemElements = await screen.findAllByTestId('company');
    expect(listItemElements).not.toHaveLength(0);
  });
});
