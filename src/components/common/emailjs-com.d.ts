declare module 'emailjs-com' {
    export function send(
        serviceID: string,
        templateID: string,
        templateParams: object,
        userID: string
    ): Promise<any>;

    export function sendForm(
        serviceID: string,
        templateID: string,
        form: string | HTMLFormElement,
        userID: string
    ): Promise<any>;
}
