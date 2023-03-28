let showFormButton = document.querySelector('#add-book');
let form = document.querySelector('form');
let library = document.querySelector('.library');

showFormButton.addEventListener('click', (e) => {
    if(form.style.display === 'none'){
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
})
// "imgs/800px-To_Kill_a_Mockingbird_(first_edition_cover).jpeg"
class Book {
    constructor(img, title, author, pages, read) {
        this.img = img;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    } 
}
    let changeRead = (e, i) => {
        console.log(e.target, i, this);
    let readState;
       if(e.target.innerText === 'yes'){
            readState = false;
       } else {
            readState = true;
       }
    myLibrary[i].read = readState;
    populateLibrary();
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let {cover, title, author, pages, read} = e.currentTarget
    let newBook = new Book(cover.value, title.value, author.value, pages.value, read.checked)
    myLibrary.push(newBook);
    populateLibrary();
})


let myLibrary = [{
    img: 'https://cdn8.openculture.com/wp-content/uploads/2013/02/The-Fellowship-Of-The-Ring-Book-Cover-by-JRR-Tolkien_1-480.jpg',
    title: 'Lord of the rings',
    author: 'JRR Tolkien',
    pages: 654,
    read: true
}, 
{
    img: 'imgs/800px-To_Kill_a_Mockingbird_(first_edition_cover).jpeg',
    title: 'To kill a mocking bird',
    author: 'Harvey Lee',
    pages: 435,
    read: true
},
{
    img: 'https://i.etsystatic.com/25126483/r/il/826fdb/2932014615/il_794xN.2932014615_7vba.jpg',
    title: '1984',
    author: 'George Orwell',
    pages: 635,
    read: false
},
{
    img: 'https://almabooks.com/wp-content/uploads/2016/10/9781847493699.jpg',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    pages: 805,
    read: false
},
{
    img: 'https://m.media-amazon.com/images/I/51MjPyuVqRL._SX323_BO1,204,203,200_.jpg',
    title: 'Harry Potter and the Philosophers Stone',
    author: 'JK Rowling',
    pages: 356,
    read: true
}
];





function populateLibrary(){
    while(library.firstChild){
        library.removeChild(library.firstChild);
    }
    myLibrary.forEach((book, i) => {
        book.index = i;
        let card = document.createElement('div');
        card.className = 'card';
        let image = document.createElement('img');
        image.src = book.img;
        let container = document.createElement('div');
        container.className = 'container';
        let title = document.createElement('h4');
        title.textContent = book.title;
        let author = document.createElement('h5');
        author.textContent = book.author;
        let pages = document.createElement('p');
        pages.textContent = 'Pages:  '
        let pageSpan = document.createElement('span');
        pageSpan.textContent = book.pages;
        let read = document.createElement('p');
        read.textContent = '(click to change*)  Read:  '
        let readSpan = document.createElement('span');
        readSpan.textContent = book.read ? 'yes' : 'no'
        let del = document.createElement('button');
        del.textContent = 'delete';
        del.addEventListener('click', (e) => {
            deleteBook(e, i);
        });
        readSpan.addEventListener('click', (e) => {
            changeRead(e, i);
        });
    
        library.append(card);
        card.append(image, container);
        pages.append(pageSpan);
        read.append(readSpan);
        container.append(title, author, pages, read, del);
        
    })
}

function deleteBook(e, i){
    let bookToDelete = myLibrary.indexOf(i);
    if (i > -1) {
        myLibrary.splice(i, 1);
    }

    populateLibrary();
}

populateLibrary();

// Modified branch