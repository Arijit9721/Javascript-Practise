// filter is similar to foreach, but it returns a value (in an array)
const array = [1,2,3,4,5]
const call =array.filter((item) => {
    return item>=3
})
console.log(call);

// ** Challenge --> create a filter for books on Amazon
const books = [
    {title:'book1',genre:'Fiction',publishingDate: 1985},
    {title:'book2',genre:'Fantasy',publishingDate: 1992},
    {title:'book3',genre:'History',publishingDate: 2013},
    {title:'book4',genre:'Fiction',publishingDate: 1967},
    {title:'book5',genre:'Non-Fiction',publishingDate: 1999},
]
const userFilter = books.filter((book)=> (book.genre === 'Fiction' && book.publishingDate>1960));

console.log(userFilter);
