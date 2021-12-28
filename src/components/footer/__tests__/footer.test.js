import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Footer from '../index'

//getBy...
it('should render the Footer copyright text',()=>{
  render(<Footer />)
  const footerElement = screen.getByRole('contentinfo')
  expect(footerElement).toBeInTheDocument()
})
