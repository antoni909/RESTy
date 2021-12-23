import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
// https://githubmemory.com/repo/testing-library/jest-dom/issues/282
import Header from '../index'
//getBy...
it('should render the value passed from title prop',()=>{
  render(<Header title="RESTy"/>);
  const headingElement = screen.getByText(/RESTy/i)
  expect(headingElement).toBeInTheDocument()
})
it('should read the h1 element',()=>{
  render(<Header title="RESTy"/>);
  const headingElement = screen.getByTestId('header-1')
  expect(headingElement).toBeInTheDocument()
})
it('should read the subtitle in the h2 element',()=>{
  render(<Header title="RESTy"/>);
  const headingElement = screen.getByTitle('subtitle')
  expect(headingElement).toBeInTheDocument()
})
//findBy...
it('should render the value passed from title prop',async()=>{
  render(<Header title="RESTy"/>);
  const headingElement = await screen.findByText(/RESTy/i)
  expect(headingElement).toBeInTheDocument()
})
//queryBy...
it('should render the value passed from title prop',async()=>{
  render(<Header title="RESTy"/>);
  const headingElement = await screen.queryByText(/i dont exist/i)
  expect(headingElement).not.toBeInTheDocument()
})
//getAllBy...
it('should render the value passed from title prop',async()=>{
  render(<Header title="RESTy"/>);
  const headingElements = screen.getAllByRole('heading')
  expect(headingElements.length).toBe(2)
})

