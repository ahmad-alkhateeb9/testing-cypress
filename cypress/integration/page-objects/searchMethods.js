import { amazon } from '../../src/amzonData'

export class Searcher {
    navigate(){
        cy.visit(amazon.url)
    }
    mobileNavigate(){
        cy.visit(amazon.url,{
            headers: {
              'user-agent':
                'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1',
            },
        })
    }
    typeInSearch(input){
        cy.get(amazon.serachLable).type(input)
    }
    goSearch(){
        cy.get(amazon.searchButton).click()
    }
    clickOnFirstProduct(){
        cy.contains(amazon.firstPrductData).click();
    }
    clickOnSecondProduct(){
        cy.contains(amazon.secondPrductData).click();
    }
    clearSearch(){
        cy.get(amazon.serachLable).clear()
    }
    
}

export const test = new Searcher;