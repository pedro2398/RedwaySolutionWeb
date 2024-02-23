"use server"

import { revalidatePath } from "next/cache";
const url = `${process.env.NEXT_PUBLIC_URL}/user`;

export async function saveUser(data) {
    
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: {
            "Content-Type": "application/json"
        }

    };

    const response = await fetch(url, options);

    if (response.status !== 201) return { error : "error when registering"};

    revalidatePath("/user")
}

export async function getUser() {
    try {
        const response = await fetch(url,{next: {revalidate: 0}});

        if(response.status != 200) {
            return {error: "error when find users"}
        }

        return await response.json();
    } catch (error) {
         console.log(error);
         return []
     }
}