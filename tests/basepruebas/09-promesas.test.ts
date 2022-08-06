import { asyncGHBI } from "../../src/basepruebas/08-imp-exp"

const main = () => {

    test('test en heroeByIdAsync [then]',(done) => {
        asyncGHBI(1).then(hero => {
            console.log(hero);
            expect(hero).toEqual({id: 1,name: 'Batman',owner: 'DC'});
            done();
        })
    });

    test('test en heroeByIdAsync [catch]',(done) => {
        asyncGHBI(10)
        .then(hero => {
            expect(hero).toBeFalsy();
            done();
        })
        .catch((msg:string) => {
            console.log(msg);
            done();
        })
    })

}

describe('pruebas 09-promesas',main)