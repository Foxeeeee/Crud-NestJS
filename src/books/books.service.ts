import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';

@Injectable()
export class BooksService {
    private books: any[] = [];

    getBooks(filterBookDto: FilterBookDto): any[]{
        const {title, author, category, min_year, max_year} = filterBookDto;
        const books = this.books.filter((book) => {
            let isMatch = true;
            if (title && book.title != title) {
                isMatch = false;
            }
            if (author && book.author != author) {
                isMatch = false;
            }
            if (category && book.category != category) {
                isMatch = false;
            }
            if (min_year && book.year < min_year){
                isMatch = false;
            }
            if (max_year && book.year > max_year){
                isMatch = false;
            }
            return isMatch;
        });
        return books;
    }


    getBookId(id: string){
        const bookIdx = this.findBook(id);
        return this.books[bookIdx];
    }

    createBook(createBookDTO: CreateBookDto){
        const {title, author, category, year} = createBookDTO;
        this.books.push({
            id: uuidv4(),
            title,
            author,
            category,
            year,
    });
    }

    updateBooks(id: string,updateBookDto: UpdateBookDto){
        const {title, author, category, year} = updateBookDto;
        const bookIdx = this.findBook(id);
        this.books[bookIdx].title = title;
        this.books[bookIdx].author = author;
        this.books[bookIdx].category = category;
        this.books[bookIdx].year = year;
    }

    findBook(id:string){
        const bookIdx = this.books.findIndex((book) => book.id === id);
        if(bookIdx === -1){
            throw new NotFoundError(`Book with id ${id} not found`);
        }
        return bookIdx;
    }

    deleteBook(id: string){
        const bookIdx = this.findBook(id);
        this.books.splice(bookIdx, 1);
        throw new NotFoundError(`Book with id ${id} not found`)
    }
}
