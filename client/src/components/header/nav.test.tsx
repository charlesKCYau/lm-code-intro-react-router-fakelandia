// app.test.js
import {render, screen} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import Nav from './nav'
import { BrowserRouter } from 'react-router-dom'

it('routes to a new route', async () => {
  
    render(<Nav />, {wrapper: BrowserRouter});
        
    let messageContent = screen.getByText(
        /Home/i
    );
    expect(messageContent).toBeInTheDocument();
        
    messageContent = screen.getByText(
        /Misdemeanours/i
    );
    expect(messageContent).toBeInTheDocument();
        
     messageContent = screen.getByText(
        /Confession To Us/i
    );
    expect(messageContent).toBeInTheDocument();
});
