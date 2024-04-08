import { useState } from "react";

interface props {
    Items: string[];
    heading: string;

    onSelectItem: (item: string) => void;
}

function ListGroup({Items, heading, onSelectItem}: props){


    const [SelectedIndex, setSelectedIndex] = useState(-1)

    return (
    <>
        <h1>{heading}</h1>
        {Items.length === 0 && <p>no items found</p>}
        <ul className="list-group">
            {Items.map((item, index)=> 
            <li className={SelectedIndex === index ? 'list-group-item active':'list-group-item'} key={item} onClick={() => {setSelectedIndex(index); onSelectItem(item)}}>{item}</li>)}
        </ul>
    </>
    );
}

export default ListGroup;