window.addEventListener("DOMContentLoaded", function() {
    var filteredList = document.querySelectorAll('a.md-content__button.md-icon');

    for(const element of filteredList){
        const ref = element.href;
        if(ref){
            const newRef = ref.replace('.md','');
            element.href = newRef
        }
    }
}, false);
