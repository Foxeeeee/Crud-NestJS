import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';
export declare class BooksService {
    private books;
    getBooks(filterBookDto: FilterBookDto): any[];
    getBookId(id: string): any;
    createBook(createBookDTO: CreateBookDto): void;
    updateBooks(id: string, updateBookDto: UpdateBookDto): void;
    findBook(id: string): number;
    deleteBook(id: string): void;
}
