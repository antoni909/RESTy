import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import App from '../../../app' 
import Form from '../index'

describe('add input',()=>{
  // want to target the input element
  it('should render input element', ()=>{
    const mockedCallApi = jest.fn()
    render(<Form 
            handleApiCall={mockedCallApi}
          />)
    const inputElement = screen.getByRole('textbox', {  name: /url go/i})
    expect(inputElement).toBeInTheDocument()
  })
  // want to trigger an input event
  it('should be able to type into input', ()=>{
    const mockedCallApi = jest.fn()
    render(<Form 
            handleApiCall={mockedCallApi}
          />)
    const inputElement = screen.getByRole('textbox', {  name: /url go/i})
    fireEvent.change(inputElement,{target: { value: 'entered a url'}})
    expect(inputElement.value).toBe('entered a url')
  })
  //https://stackoverflow.com/questions/54895883/reset-to-initial-state-with-react-hooks
  xit('should be show an empty input field when GO button is clicked', ()=>{
    const mockedCallApi = jest.fn()
    render(<Form 
            handleApiCall={mockedCallApi}
          />)
    const inputElement = screen.getByRole('textbox', {  name: /url go/i})
    const buttonGo = screen.getByRole('button', {name: /go/i})
    
    fireEvent.change(inputElement,{target: { value: 'entered a url'}})
    fireEvent.click(buttonGo)
    expect(inputElement.value).toBe('')
  })
})

// it('', ()=>{
//   render(<App />)
//   const input = screen.getByRole('textbox', {name: /url go/i})
//   const submit = screen.getByRole('button', {name: /go/i})
//   // const urlHeader = screen.getByText(/url:/i)
//   fireEvent
//     .change(input,{target:{value: 'url'}})
//   // fireEvent.click(submit)
//     expect(input.value).toBe('url')
//     // expect().toBe('url')
// })

