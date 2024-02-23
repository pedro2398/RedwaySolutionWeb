import Button from "@/components/button";
import DisplayUser from "@/components/displayUser";

export default async function User() {
    
    return(
        <main className="flex flex-col justify-center items-center bg-blue-950 w-96 py-10 rounded-xl space-y-4 mx-auto mt-20">
            { DisplayUser() }
                <Button href={ "/" } text={ "home" }/>
        </main>
    );
}