import { render, screen } from '@testing-library/react'
import  Greet  from '../Components/Greet/Greet'
describe('greet', () =>{

    it('renders correctly', () => {
        render (<Greet/>)
        const textelement= screen.getByText('Hello')
        expect(textelement).toBeInTheDocument()
    })
    it( 'render a name', () => {
        render(<Greet name='vishwas'/>)
        const textElement= screen.getByText('Hello vishwas')
        expect(textElement).toBeInTheDocument()
        
    })
})




