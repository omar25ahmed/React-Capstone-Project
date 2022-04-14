import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import Home from '../Pages/Home/Home';

describe('testing Home component', () => {
  it('snapshot for the Home ', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('testing Home component renders correctly', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(screen.getByTestId('companies')).toBeInTheDocument();
  });
});
