import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Cols, Row, Container }  from "../components/Grid";
import { List }  from "../components/List";

class Home extends Component{
    state = {
	books: [],
	q: "",
	message: "Search for a book to begin!"
	};
	handleInputChange = event =>{
	    const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};
	getBooks = () => {
		API.getBooks(this.state.q)
            .then(res =>
                this.setState({
                    books: res.data
				})
            )
            .catch(() =>
			this.setState({
				books: [],
				message: "No more new books founds, try a different search."
				})
            );
	};
	handleFormSubmit = event =>{
		event.preventDefault();
		this.getBooks();
	};
	handleBookSave = id => {
		const book = this.state.books.find(book => bookid === id);
		API.saveBook({
			googleId: book.id,
			title: bookvolumeInfo.title,
			subtitle: book.volumeInfo.subtitle,
			link: book.volumeInfo.infoLink,
			authors: bookvolumeInfo.authors,
			description: book.volumeInfo.description,
			image: bookvolumeInfo.imagelinks.thumbnail
		}).then(() => this.getBooks());
    };
	render(){
	    return(
			<Container> 
			    <Row>
				    <Cols size="md-12">
						<Jumbotron>
						<h1 className="text-center">
						    <strong>(React) Google Books Search</strong>
						</h1>
						<h2 className="text-center">Search for and Save Books of Internet</h2>
						</Jumbotron>
					</Cols>
					<Cols size="md-12">
					    <Card title='Book search' icon="far fa-book">
						<Form									    handleInputChange={this.handleInputChange}
						 handleFormSubmit={thishandleFormSubmit}
						 q={this.state.q}
						/>
						</Card>
                    </Cols>
                </Row>
                <Row>
                    <Cols size="md-12">
                        <Card title="Results">
                            {this.state.books.length ? (
                                <List>
                                    {this.state.books.map(book => (
                                        <Book
                                            key={book.id}
                                            title={book.volumeInfo.title}
                                            subtitle={book.volumeInfo.subtitle}
                                            link={book.volumeInfo.infoLink}
                                            authors={book.volumeInfo.authors.join(",")}
                                            description={book.volumeInfo.description}
                                            image={book.volumeInfo.imagelinks.thumbnail}
                                            Button={() => (
                                                <button
                                                    onClick={() => this.handleBookSave(book.id)}
                                                    className="btn btn-primary ml-2"
                                                    >Save</button>
                                            )}
                                        />
                                    ))}
                                </List>
                            ):(
                                <h2 className="text-center">{this.state.message}</h2>
                            )}
                        </Card>
                    </Cols>
                </Row>
                <Footer />
            </Container>
        );
    }
}
export default Home;