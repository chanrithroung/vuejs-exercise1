
Vue.createApp({
    data() {
        return {
            title: "Book Store",
            author: 'Roung chanrith',
            age: 22,
            isShow: true,
            countFav: 0,
            message: "When you want something just take a action you will get it!",
            x: 0,
            y: 0,
            books: [
                {
                    id: 1,
                    title: 'To Kill a Mockingbird',
                    imageUrl: 'https://i.harperapps.com/hcanz/covers/9780007378845/y648.jpg',
                    author: 'Harper Lee',
                    isFav: true,
                },
                {
                    id: 2,
                    title: '1984',
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1567862213l/50917171.jpg',
                    author: 'George Orwell',
                    isFav: false,
                },
                { 
                    id: 3,
                    title: 'Pride and Prejudice',
                    imageUrl: 'https://m.media-amazon.com/images/I/61mMNVWOlbS._AC_UF1000,1000_QL80_.jpg',
                    author: 'Jane Austen',
                    isFav: false,
                },
                {
                    id: 4,
                    title: 'The Great Gatsby',
                    imageUrl: 'https://m.media-amazon.com/images/I/61TJvrYj+ZL._AC_UF1000,1000_QL80_.jpg',
                    author: 'F. Scott Fitzgerald',
                    isFav: false,
                },
                {
                    id: 5,
                    title: 'Moby Dick',
                    imageUrl: 'https://notionpress.com/coveruploads/463505311resize_cover_443440.png',
                    author: 'Herman Melville',
                    isFav: false,
                },
                {
                    id: 6,
                    title: 'War and Peace',
                    imageUrl: 'https://www.iuemag.com/y21/ap/images/inspiration-unlimited-iu-e-magazine-books-on-writing-writing-community-books-reading-writing-guide-writer-authors-paradize-on-writing-4.jpg',
                    author: 'Leo Tolstoy',
                    isFav: false,
                },
                {
                    id: 7,
                    title: 'Crime and Punishment',
                    imageUrl: 'https://m.media-amazon.com/images/I/91SxJs0S1PL._UF1000,1000_QL80_.jpg',
                    author: 'Fyodor Dostoevsky',
                    isFav: false,
                },
                {
                    id: 8,
                    title: 'The Catcher in the Rye',
                    imageUrl: 'https://www.iuemag.com/y21/ap/images/inspiration-unlimited-iu-e-magazine-books-on-writing-writing-community-books-reading-writing-guide-writer-authors-paradize-on-writing-4.jpg',
                    author: 'J.D. Salinger',
                    isFav: false,
                },
                {
                    id: 9,
                    title: 'Brave New World',
                    imageUrl: 'https://static.periplus.com/lay3uOI8R7pu06l3GdCAEM8mliu45DiFwc4mNsZ044to.I0IVKNmiKksOqEhqW6Xw--',
                    author: 'Aldous Huxley',
                    isFav: false,
                },
                {
                    id: 10,
                    title: 'The Hobbit',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VHcmZVCz8t-vA2NRtyemF_n5BcA47SVLJA&s',
                    author: 'J.R.R. Tolkien',
                    isFav: true,
                }
            ]
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = "Hey this is new title from vue App"
            this.title = title
        },

        setFav(id) {
            let count = 0;
            this.books.forEach( e => {
                if (e.id == id) e.isFav = !e.isFav;
            })
            this.countFav = this.books.filter(e=>e.isFav).length;
        },
        toggleMessage() {
            this.isShow = !this.isShow 
        },
        handleEvent(event, data) {
            console.log(event, event.type)
            
            if (data) {
                console.log(data);
            }
        },

        handleMouseMove(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
        
    },
    mounted() {
        this.countFav = this.books.filter(e=>e.isFav).length;
    }
}).mount('#app')