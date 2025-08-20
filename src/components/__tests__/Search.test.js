import {render} from "@testing-library/react"
import Body from "../Body"

jest.mock("react-router-dom", () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  MemoryRouter: ({ children }) => <div>{children}</div>,
}));
test('should render the body component with serach btn', () => { 
    render(<Body/>)
 })