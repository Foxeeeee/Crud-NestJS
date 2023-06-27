import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    getBooks(filter: FilterBookDto): any[];
    getByID(id: string): any;
    createBook(payload: CreateBookDto): void;
    updateBook(id: string, payload: UpdateBookDto): void;
    deleteBooks(id: string): void;
}
