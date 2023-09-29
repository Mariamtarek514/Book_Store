import { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext(null);
const URL = "https://openlibrary.org/search.json?title=";
function SearchProvider({ children }) {
    const [searchQuery, setSearchQuery] = useState("the lost world");
    const [isLoading, setIsLoading] = useState(false);
    const [book, setbook] = useState([]);
    const [resultMessage, setResultMessage] = useState();
    useEffect(() => {
        const controller = new AbortController();

        async function getBooks() {
            try {
                setIsLoading(true);
                const response = await fetch(`${URL}=${searchQuery}`, {
                    signal: controller.signal,
                });
                const data = await response.json();
                const { docs } = data;

                if (docs) {
                    const newBook = docs.slice(0, 20).map((singleBook) => {
                        const {
                            key,
                            author_name,
                            cover_i,
                            edition_count,
                            first_publish_year,
                            title,
                        } = singleBook;
                        return {
                            id: key,
                            author: author_name,
                            cover_id: cover_i,
                            edition_count: edition_count,
                            first_publish_year: first_publish_year,
                            title: title,
                        };
                    });
                    setbook(newBook);
                    if (newBook.length > 1) {
                        setResultMessage("Your Search Result");
                    } else {
                        setResultMessage("No Search Result Found!");
                    }
                } else {
                    setbook([]);
                    setResultMessage("No Search Result Found!");
                }
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        }
        getBooks();
        return () => controller.abort();
    }, [searchQuery]);
    return (
        <SearchContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                isLoading,
                book,
                resultMessage,
                setResultMessage,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}
function useSearch() {
    const context = useContext(SearchContext);
    if (context === undefined)
        throw new Error("UseSearch use Outside SearchProvider");
    return context;
}
export { SearchProvider, useSearch };
