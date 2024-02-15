export default function DisplayUser(usuario) {
    return(
        <div>
            <p>{usuario.firstName}: {usuario.email}</p>
        </div>
    )
}