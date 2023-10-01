
const booksY3 = {
    currentBooks : undefined ,

    getBooks: async function(){
        const currentBooksData = BOOKS_3;
        this.currentBooks = currentBooksData ;
        this.displayBooks();
    },

    displayBooks:function(){
        const list = document.getElementById("list_y3");
        for(let i = 0 ; i < this.currentBooks.length ; i++){
            const {title,path,explain} = this.currentBooks[i];
            const newElement = createBook(title,path,explain);
            list.innerHTML += newElement;
        }
    }
}



