import { logRoles, render, screen } from '@testing-library/react'
import {Skills} from './Skills'

describe('Skills', () => {
    const skills=['html','css','javascript']

    test('render corectly',() => {
        render(<Skills skills={skills}/>)
        const listelement=screen.getByRole("list")
        expect(listelement).toBeInTheDocument()
    });

    test('render all', () =>{
        render(<Skills  skills={skills}/>)
        const listelement2=screen.getAllByRole('listitem')
        expect(listelement2).toHaveLength(skills.length)
    })
    test('show the button after sometime', async() =>{
       const view= render(<Skills  skills={skills}/>)

       logRoles(view.container)

        const renderelement=await screen.findByRole("button",{
            name:"Start learning",
        
        },{
            timeout:3000,
        });
        expect(renderelement).toBeInTheDocument()
    })
  
})
