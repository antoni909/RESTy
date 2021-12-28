import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './app' 

describe('add input',()=>{
  // want to target the input element
  it('should render input element', async ()=>{
    render(<App />)
    const inputElement = screen.getByPlaceholderText(/enter url here .../i)
    const buttonElement = screen.getByRole('button', {name: 'GO'})
    // const pElement = screen.getByText(/awaiting input/i)
    // const preformattedElement = await screen.findByTestId('json-headers')

    fireEvent.change(inputElement, {target: {value: 'some url ...'}})
    fireEvent.click(buttonElement)
    // expect(preformattedElement).toBeInTheDocument()
  })
})
