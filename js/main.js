const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select Tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //Add Border To Current Tab
    this.classList.add('tab-border');
    //Grab Content Item From DOM
    console.log(this.id);
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add Show Class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}


//Listen For Tab Click 
tabItems.forEach(item => item.addEventListener('click', selectItem));
