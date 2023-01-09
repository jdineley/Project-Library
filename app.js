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

function Book(title, author, pages, read) {
    this.img = "imgs/800px-To_Kill_a_Mockingbird_(first_edition_cover).jpeg";
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let changeRead = (e, i) => {
    console.log(e.target, i);
    let readState;
       if(e.target.innerText === 'yes'){
            readState = false;
       } else {
            readState = true;
       }
    myLibrary[i].read = readState;
    populateLibrary();
}

Book.prototype.changeRead = changeRead;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let {title, author, pages, read} = e.currentTarget
    if(read.value === 'on'){
        read = true;
    } else {
        read = false;
    }
    let newBook = new Book(title.value, author.value, pages.value, read)
    myLibrary.push(newBook);
    populateLibrary();
})


let myLibrary = [{
    img: 'imgs/800px-To_Kill_a_Mockingbird_(first_edition_cover).jpeg',
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
    img: 'imgs/800px-To_Kill_a_Mockingbird_(first_edition_cover).jpeg',
    title: '1984',
    author: 'George Orwell',
    pages: 635,
    read: false
},
{
    img: 'imgs/800px-To_Kill_a_Mockingbird_(first_edition_cover).jpeg',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    pages: 805,
    read: false
},
{
    img: 'imgs/800px-To_Kill_a_Mockingbird_(first_edition_cover).jpeg',
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
        read.textContent = 'Read:  '
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