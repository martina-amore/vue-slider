arrayImg = [
    "img/image1.jpg", "img/image2.jpg", "img/image3.jpg","img/image4.jpg"
];

const root = new Vue({
    el: "#root",
    data: {
        images: arrayImg,
        imagesIndex: 0
    },
    methods: {
        prevImage: function (){
            if (this.imagesIndex === 0) {
                this.imagesIndex = arrayImg.length-1;
            }
            else {
                this.imagesIndex--;
            }
        },
        nextImage: function (){
            if (this.imagesIndex === arrayImg.length-1) {
                this.imagesIndex = 0;
            }
            else {
                this.imagesIndex++;
            }
        }
    }
})
