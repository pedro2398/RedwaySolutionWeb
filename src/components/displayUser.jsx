import { getUser } from "@/actions/userActions"

export default async function DisplayUser() {
   const users = await getUser(); 

    return users.map(user => {
        return (
            <div className="flex justify-start px-2 w-[100%]" key={ user.id } >
                    <p className="mr-2">
                        <span className="text-cyan-300">Name: </span> {user.firstName} |
                    </p>
                    <p>
                        <span className="text-cyan-300">Email:</span> {user.email}
                    </p>
            </div>
        )
      }
    )
}