"use client"

import { useRouter } from "next/navigation";
import InputText from "../components/inputText";
import { saveUser } from "@/actions/userActions";
import toast from "react-hot-toast";

export default function Home() {

  const { push } = useRouter();

  async function Submit(formData) {
    const response = await saveUser(formData);

    if(response?.error) {
      toast.error(response.error)
      return
    }

    push("/registered")
  }

  return (
    <main className="flex flex-col justify-center items-center bg-blue-950 w-96 py-10 rounded-xl space-y-4 mx-auto mt-20">
      <p className="text-2xl">Welcome!</p>
      <p>Fill the form below</p>
      <form action={ Submit } className=" flex flex-col justify-center items-center space-y-4">
        <InputText name="firstName" type={ "text" } text={ "first name" }/>
        <InputText name="lastName" type={ "text" } text={ "last name" }/>
        <InputText name="email" type={ "email" } text={ "email" }/>
        <button type="submit" className="bg-cyan-600 h-8 w-20 rounded-xl text-white px-5 py-1">send</button>
      </form>
    </main>
  );
}