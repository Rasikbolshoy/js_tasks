/******** 1 *******/

var images = document.getElementsByTagName('img');


for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {

        var description = this.getAttribute('alt');

        alert(description);
    });
}


/******** 2 ********/
const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        alert(link.href);
    });
});





