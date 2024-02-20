export default function DisplayUser(user) {
    return(
        <div className="flex justify-start px-2 w-[100%]">
            <p className="mr-2">
                <span className="text-cyan-300">Name: </span> {user.firstName}
            </p>
            <p>
                <span className="text-cyan-300">Email:</span> {user.email}
            </p>
        </div>
    )
}