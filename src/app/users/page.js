import { getUser } from "@/actions/userActions";
import Button from "@/components/button";
import DisplayUser from "@/components/displayUser";

export default async function User() {
    
    const users = await getUser();
    
    return(
        <main className="flex flex-col justify-center items-center bg-blue-950 w-96 py-10 rounded-xl space-y-4 mx-auto mt-20">
            {users.map(usuario => DisplayUser(usuario))}
                <Button href={ "/" } text={ "home" }/>
        </main>
    );
}