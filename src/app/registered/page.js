import Button from "@/components/button";

export default function Registered() {
    return(
        <main className="flex flex-col justify-center items-center bg-blue-950 w-96 py-10 rounded-xl space-y-4 mx-auto mt-20">
            <p>User registered successfully!</p>
            <p>Thank you for responding to our form</p>
            <div className="space-x-2">
                <Button href={ "/" } text={ "home" }/>
                <Button href={ "/users" } text={"users"}/>
            </div>
        </main>
    );
}