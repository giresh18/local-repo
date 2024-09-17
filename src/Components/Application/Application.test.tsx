import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { Application } from "./Application";

describe ('Application', () => {
    test('renderscorrectly' ,() => {
        render(<Application />);

        const applicationelement =screen.getByRole("heading",{
            name:"Job application form"
        })
        expect(applicationelement).toBeInTheDocument()

        const paragraphelement =screen.getByText("all fields are mandatory",{exact:false})
        expect(paragraphelement).toBeInTheDocument()

        const altelement=screen.getByAltText("a person with a laptop")
        expect(altelement).toBeInTheDocument()

        const textname = screen.getByRole('textbox',{
            name:"Name",
        })
        expect(textname).toBeInTheDocument()

        const textelememt= screen.getByLabelText("Name");
        expect(textelememt).toBeInTheDocument()

        const bioelement=screen.getByRole('textbox',{
            name:"Bio"  
        })
        expect (bioelement).toBeInTheDocument()

        const nameelement3=screen.getByPlaceholderText('Fullname');
        expect(nameelement3).toBeInTheDocument()
        

        const joblocationelement = screen.getByRole('combobox')
        expect(joblocationelement).toBeInTheDocument()

        const textelememt1= screen.getByLabelText("Name");
        expect(textelememt1).toBeInTheDocument()

        const termselemnt =screen.getByRole('checkbox')
        expect(termselemnt).toBeInTheDocument()

        const submitbuttonelement = screen.getByRole('button')
        expect(submitbuttonelement).toBeInTheDocument()
    })
})