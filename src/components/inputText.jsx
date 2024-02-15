export default function InputText({ text, type, name }){
    return(
        <input type={ type } name={ name } className="h-8 w-64 rounded-xl pl-3 text-white bg-black" placeholder={ text } required/>
    );
}