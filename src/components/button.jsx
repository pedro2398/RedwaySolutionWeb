import Link from "next/link";

export default function Button({ text, type, ...props }) {
    return(
        <Link href="#"{ ...props } type={ type } className="bg-cyan-600 h-8 w-20 rounded-xl text-white px-5 py-1">{ text }</Link>
    );
}