
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import LayoutComponent from '../LayoutComponent';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

test('renders Reset Layout button', () => {
    const store = mockStore({});
    render(
        <Provider store={store}>
            <LayoutComponent />
        </Provider>
    );

    const buttonElement = screen.getByText(/reset layout/i);
    expect(buttonElement).toBeInTheDocument();
});
