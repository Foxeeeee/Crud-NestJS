"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const uuid_1 = require("uuid");
let BooksService = exports.BooksService = class BooksService {
    constructor() {
        this.books = [];
    }
    getBooks(filterBookDto) {
        const { title, author, category, min_year, max_year } = filterBookDto;
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
            if (min_year && book.year < min_year) {
                isMatch = false;
            }
            if (max_year && book.year > max_year) {
                isMatch = false;
            }
            return isMatch;
        });
        return books;
    }
    getBookId(id) {
        const bookIdx = this.findBook(id);
        return this.books[bookIdx];
    }
    createBook(createBookDTO) {
        const { title, author, category, year } = createBookDTO;
        this.books.push({
            id: (0, uuid_1.v4)(),
            title,
            author,
            category,
            year,
        });
    }
    updateBooks(id, updateBookDto) {
        const { title, author, category, year } = updateBookDto;
        const bookIdx = this.findBook(id);
        this.books[bookIdx].title = title;
        this.books[bookIdx].author = author;
        this.books[bookIdx].category = category;
        this.books[bookIdx].year = year;
    }
    findBook(id) {
        const bookIdx = this.books.findIndex((book) => book.id === id);
        if (bookIdx === -1) {
            throw new rxjs_1.NotFoundError(`Book with id ${id} not found`);
        }
        return bookIdx;
    }
    deleteBook(id) {
        const bookIdx = this.findBook(id);
        this.books.splice(bookIdx, 1);
        throw new rxjs_1.NotFoundError(`Book with id ${id} not found`);
    }
};
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)()
], BooksService);
//# sourceMappingURL=books.service.js.map