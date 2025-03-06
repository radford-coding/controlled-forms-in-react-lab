import { useState } from 'react';

const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newbook, setNewBook] = useState([
        { title: '', author: '' },
        { title: '', author: '' },
    ]);

    const handleInputChange = (event) => {
        setNewBook({ ...newbook, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };


    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={newbook.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="author">author</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={newbook.author}
                            onChange={handleInputChange}
                        />
                    </div>
                </form>
            </div>
            <div className="bookCardsDiv">{/* Book cards will display here */}</div>
        </div>

    );
};