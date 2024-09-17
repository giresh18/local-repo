import { render, screen } from '@testing-library/react'
import  Greet from './Greet'
test('greet renders correctly', () => {
    render (<Greet/>)
   const textelement= screen.getByText('Hello')
    expect(textelement).toBeInTheDocument()
})
test( 'greet render with a name', () => {
    render(<Greet name='vishwas'/>)
    const textElement= screen.getByText('Hello vishwas')
    expect(textElement).toBeInTheDocument()

})