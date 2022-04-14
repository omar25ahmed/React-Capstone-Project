import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import CompanyPage from '../Pages/CompanyPage/CompanyPage';

describe('testing Home Company Page', () => {
  it('snapshot for the Company Page ', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <CompanyPage />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('testing CompanyPage component renders correctly', () => {
    render(
      <Provider store={store}>
        <CompanyPage />
      </Provider>,
    );
    expect(screen.getByTestId('company')).toBeInTheDocument();
  });
});
