export function boldText(text) {
   return <b>{text}</b>;
}

export function undelineText(text) {
   return <u>{text}</u>;
}

export function bold_underlineText(text) {
   return undelineText(boldText(text));
}
