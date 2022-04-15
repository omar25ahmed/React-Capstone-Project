import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import CompanyInfo from '../Pages/CompanyPage/CompanyInfo';

describe('testing Home component', () => {
  it('snapshot for the Company Info ', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <CompanyInfo />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('testing Company Info component renders correctly', () => {
    render(
      <Provider store={store}>
        <CompanyInfo />
      </Provider>,
    );
    expect(screen.getByTestId('company info')).toBeInTheDocument();
  });

  it('should GET data', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ symbol: '', companyName: '' }],
    });
    render(
      <Provider store={store}>
        <CompanyInfo />
      </Provider>,
    );
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
