import { render,screen } from "@testing-library/react"
import RestaruantCard from "../RestaruantCard"
import "@testing-library/jest-dom";

import MOCK_DATA from "../mocks/resCardMock.json"

test('should render Resurant component with props Data', () => { 
    render(<RestaruantCard resData={MOCK_DATA}  />)
   const name= screen.getByText('Namaste')
    expect(name).toBeInTheDocument();
 })