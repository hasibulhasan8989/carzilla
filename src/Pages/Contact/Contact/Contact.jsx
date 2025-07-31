import CustomerSupport from "../../../Shared/CustomerSupport/CustomerSupport";
import SectionBanner from "../../../Shared/SectionBanner/SectionBanner";
import ContactForm from "../ContactForm/ContactForm";


const Contact = () => {
    return (
        <div>
            <SectionBanner text={'Contact'}></SectionBanner>
            <ContactForm></ContactForm>
            <CustomerSupport></CustomerSupport>
        </div>
    );
};

export default Contact;