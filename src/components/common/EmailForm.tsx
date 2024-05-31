import React, {FC, useState} from "react";
import {Input, Textarea} from "@nextui-org/input";
import emailjs from "@emailjs/browser";
import {Button} from "@nextui-org/react";
interface EmailFormProps {
    className?: string;

}
const NAME_THRESHOLD = 3;
const EMAIL_BODY_THRESHOLD = 10;
const EmailForm: FC<EmailFormProps> = ({className}) => {
    const [name, setName] = useState('');
    const [emailBody, setEmailBody] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");

    const isBodyValid = emailBody.trim().length > 10;
    const isNameValid = name.trim().length > 3;
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const serviceId = "service_636i3tp";
        const templateId = "template_ni8k96w";
        setSuccessMessage("");
        setError("");
        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                from_name: name,
                message: emailBody
            });
            setSuccessMessage("Email successfully sent!");
        } catch (error) {
            // @ts-ignore
            setError(error.message)
        } finally {
            setLoading(false);
        }
    };

    return(
        <form className={`dark flex flex-col gap-10 w-1/2 sm:pr-20 ${className ? className : ""}`} onSubmit={handleSubmit}>
            <h1 className={"text-3xl text-bold"}>You can also send an email</h1>
            <label>Your name</label>
            <Input
                isInvalid={!isNameValid}
                value={name}
                label={"Your name"}
                onValueChange={setName}
                errorMessage={`Please type a longer name, ${NAME_THRESHOLD - name.trim().length + 1} character yet`}
            />
            <label>Your email body</label>
            <Textarea
                isInvalid={!isBodyValid}
                value={emailBody}
                label={"Your email body"}
                onValueChange={setEmailBody}
                errorMessage={`Please type a longer body, ${EMAIL_BODY_THRESHOLD - emailBody    .trim().length + 1} character yet`}
            />
            <Button isLoading={loading} className={"bg-goldenGlow text-black w-1/4 py-2 rounded-md"} type={"submit"}>Send</Button>
            {error && <p className={"text-red-500"}>{error}</p>}
            {successMessage && <p className="text-green-400">{successMessage}</p>}
        </form>
    )
}

export default EmailForm;