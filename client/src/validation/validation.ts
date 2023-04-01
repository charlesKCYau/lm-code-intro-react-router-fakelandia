export const validateAllInputField = () => {
    // alert((document.getElementById('dropdown') as HTMLInputElement).value)
    if ((document.getElementById('input') as HTMLInputElement).value === "true"
        && (document.getElementById('textarea') as HTMLInputElement).value === "true"
        && (document.getElementById('dropdown') as HTMLInputElement).value === "true"
    ) {
        (document.getElementById('button') as HTMLInputElement).disabled = false;
    } else {
        (document.getElementById('button') as HTMLInputElement).disabled = true;
    }
}