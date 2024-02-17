export default function DisplayUser(usuario) {
    return(
        <div>
            <p>Name: {usuario.firstName}   Email: {usuario.email}</p>
        </div>
    )
}