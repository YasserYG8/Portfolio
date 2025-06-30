
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";
export const MailchimpForme = ()=> {

    const postUrl = `${import.meta.env.VITE_MAILCHIMP_URL}?u=${import.meta.env.VITE_MAILCHIMP_U}&id=${import.meta.env.VITE_MAILCHIMP_ID}`;
    return(
        <>
            <MailchimpSubscribe url={postUrl} render={({Subscribe,status,message}) => (
                <Newsletter 
                status={status} 
                message={message} 
                onValidated={FormData => Subscribe(FormData)} 
                />
            )}
            />
        </>

    );   


}