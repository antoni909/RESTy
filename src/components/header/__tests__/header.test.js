import { render, screen } from '@testing-library/react'
import Header from '../index'

it('should render the header title',()=>{
  render(<Header />);
  const role = screen.getByRole('heading', {  name: /resty/i})
  console.log('role: ',role)
})
