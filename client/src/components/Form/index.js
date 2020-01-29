import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
    return(
        <Form>
            <div className="form-group">
                <label htmlFor="Query">
                    <strong>Book</strong>
                </label>
                <input className="form-control" 
                    id="Title" 
                    type="text" 
                    value={q} 
                    placeholder="Ready For you" 
                    name="q" 
                    onChange={handleInputChange}
                    required 
                />
            </div>
            <div classNAme="pull-right">
                <button
                    onClick={handleFormSubmit}
                    type="submit"
                    className="btn btn-lg btn-danger float-right">Search</button>
            </div>
        </Form>
    );
}

export default Form;