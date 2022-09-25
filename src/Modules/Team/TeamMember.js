export const TeamMember = ({name, tid, onRemove}) => {


    return (

        <div className="teamMember">
            <h3>{name}</h3>
            <button onClick={ () => { onRemove(tid)} }>delete</button>
        </div>
    )
}