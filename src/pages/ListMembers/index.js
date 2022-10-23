import useGet from "../../api/hooks/get";

function ListMembers() {
    const { data, loading, error } = useGet("users");
    if (loading) {
        return <div>loading...</div>
    }

    return (
        <div>
            <h1>רשימת חברים</h1>
            {/* {loading && <p>טוען...</p>}
            {error && <p>שגיאה</p>}
            {data && data.members && data.members.map(member => <p>{member.name}</p>)} */}
        </div>
    )
}
export default ListMembers;