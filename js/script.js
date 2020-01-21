const element = document.querySelectorAll('.details__tile')
if (element) {
    element.forEach(function(el) {
        el.addEventListener('click', function() {
            if (this.querySelector('.details__info').style.height == '200px') {
                this.querySelector('.details__info').style.height = '0px';
                this.querySelector('.details__info').style.opacity = '0';

            } else {
                this.querySelector('.details__info').style.height = '200px';
                this.querySelector('.details__info').style.opacity = '1';
            }

        });
    });
}