import { words } from "./words";

export function getRandonWord(){
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex];
}