import { render, screen } from '@testing-library/react'
import  Greet from './Greet'
describe('greet', () =>{

    test('renders correctly', () => {
        render (<Greet/>)
        const textelement= screen.getByText(/Hello/)
        expect(textelement).toBeInTheDocument()
    })
 
})