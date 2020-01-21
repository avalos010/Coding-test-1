const element = document.querySelectorAll('.details__tile')
if (element) {
    element.forEach(function(el) {
        el.addEventListener('click', function() {
            console.log(this.style)
            if (this.querySelector('.details__info').style.height == '200px') {
                this.querySelector('.details__info').style.height = '0px';
                this.querySelector('.details__info').style.opacity = '0';
                this.style.marginBottom = '40px';

            } else {
                this.querySelector('.details__info').style.height = '200px';
                this.querySelector('.details__info').style.opacity = '1';
            }

        });
    });
}