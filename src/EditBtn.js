const EditBtn=(props)=>{
    const {editfunc,cancelfunc}= props;
    return(
        <>
                    <button className="edit-buton" onClick={editfunc}>Done</button>
                    <button className="del-buton" onClick={cancelfunc}>Cancel</button> 
        </>
    )
}
export default EditBtn;