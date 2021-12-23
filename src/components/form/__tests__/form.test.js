import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../../../app'
// import Form from '../index'

xit('', ()=>{
  render(<App />)
  const input = screen.getByRole('textbox', {name: /url go/i})
  const submit = screen.getByRole('button', {name: /go/i})
  // const urlHeader = screen.getByText(/url:/i)
  fireEvent
    .change(input,{target:{value: 'url'}})
  // fireEvent.click(submit)
  // console.log('header url: ', urlHeader)

  // console.log('INPUT: ',input)
    expect(input.value).toBe('url')
    // expect().toBe('url')
})

