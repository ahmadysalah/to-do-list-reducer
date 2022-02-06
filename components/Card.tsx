import React from "react";
import { ITodo } from "../reducers";

const Card: React.FC<ITodo> = ({ completed, date, id, text, handleClickDelete, handleEditTodo }) => {
    const [isEditing, setIsEditing] = React.useState(false);
    return (
        <div className="card">
            <div className="card-body">
                {
                    isEditing ? (
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            setIsEditing(false);
                            handleEditTodo(id, (e.target as any).elements[0].value);
                        }}>
                            <input type="text" name="text" defaultValue={text} className="form-control" />
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    ) : <h5 className="card-title">{text}</h5>

                }
                <p className="card-text">{date}</p>
                <p className="card-text">{completed}</p>
            </div >
            <button className="btn_delete" onClick={() => handleClickDelete(id)}>Delete</button>
            <button className="btn_delete" onClick={() => setIsEditing(!isEditing)}>edit</button>
        </div >
    );
}

export default Card;