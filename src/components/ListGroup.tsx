
function ListGroup(){
    const items = [ "Ed Sheeran" ,"Conan Gray", "Shawn Mendes", "Aidan Bisset", "Taylor Swift"];
    
    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
    
}

export default ListGroup;