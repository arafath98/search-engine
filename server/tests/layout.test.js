
/*
  @jest-environment jsdom
*/

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../../client/index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('form',() =>{
        let form;
        let textInput; 

        beforeEach(() => {
            form = document.querySelector('form')
            textInput = form.querySelector('[type="text"]')
        })

        test('it exists', () => {
            expect(form).toBeTruthy();
        });

        describe('text input', () => {
            test('it has autofocus', () => {
                expect(textInput.hasAttribute('autofocus')).toBeTruthy();
            })
        })
        
    })

})