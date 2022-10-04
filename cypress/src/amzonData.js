export class Amazon {
    url = 'https:\/\/www.amazon.com\/ref=nav_logo'
    serachLable = '.nav-fill input[type="text"]'
    searchButton = '[aria-label="Go"]'
    firstPrductData = 'Amazon Basics Dissolvable Odor Eliminator Kit with 3 Refill Pacs'
    secondPrductData = 'Amazon Basics Clean Plus Toothbrushes'
}

export const amazon = new Amazon;
// cypress run --env firstProductName = Amazon Basics Dissolvable ,secondProductName = toothbrush
//class="nav-search-field "
//class="nav-input nav-progressive-attribute"

//<input type="text" class="nav-input nav-progressive-attribute" placeholder="Search Amazon" 
//data-aria-clear-label="Clear search keywords" name="k" autocomplete="off" autocorrect="off" 
//autocapitalize="off" dir="auto" value="" id="nav-search-keywords">

//<input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" 
//placeholder="" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search">

//class="nav-fill"