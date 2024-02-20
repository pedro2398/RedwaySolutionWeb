"use server"

import { revalidatePath } from "next/cache";
const url = "http://localhost:8080/user";

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

    revalidatePath("/")
}

export async function getUser() {
    const response = await fetch(url,{next: {revalidate: 0}});

    if(response.status != 200) {
        return {error: "error when find emails"}
    }

    return await response.json();
}