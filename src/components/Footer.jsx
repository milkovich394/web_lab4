import footerData from "../mockData/footerData";
import gpt3Svg from "../assets/img/GPT-3.svg";

export const CreateHeaderFooterTemplate = ({headerOfFooter}) => {
    const {header, button:{href, text}} = headerOfFooter;
   
    return (
        <>
        <div className="footer_header">
            <h1 className="footer_header__top">{header}</h1>
        </div>
        <div className="footer_middle">
            <button className="req_access" href="#">{text}</button>
        </div> 
    </>);
};

export const CreateTheEnd = () => {
    return (<>
    <p>© 2023 GPT-3. Все права защищены.</p>
    </>);
};

export const CreateInfo = ({infoGpt3}) => {
    const {img:{alt}, text} = infoGpt3;
    return (
    <>
        <div className="logo">
            <img className="GPT-3_logo" src={gpt3Svg} alt={alt}/>
            <p className="address">{text}</p>
        </div>
    </>);
};

export const LinksFooter = ({ item }) => {
    const {href, text } = item;
    return (
        <>
        <a className="footer__link" href={href}>{text}</a>
        </>
    );
};


export const CreateFooterLinks = ({footerLinks}) =>{
    const {title, type, items} = footerLinks;
    //const links = items.map((item) => LinksFooter(item)).join(" ");

    if (type === "links"){
        return(
            <>
            <div className="footer_links">
                <p className="bottom_links">{title}</p>
                <div className="footer_info__links">
                {
                    items.map((item, index) => (
                        <LinksFooter key={index} item = {item} />)
                    )
                }
                </div>
            </div>
            </>
        );
    }

    if (type === "company"){
        return (
            <>
            <div className="footer__company_info">
                <p className="bottom_links"> {title} </p>
                <div className="footer_company__links">
                {
                    items.map((item, index) => (
                        <LinksFooter key={index} item = {item} />)
                    )
                }
                </div>
            </div>
            </>
        );
    }

    if (type === "contact"){
        return (
            <>
            <div className="footer__contact_info">
                <p className="bottom_links"> {title} </p>
                <div className="footer__contact_content">
                {
                   items.map((item, index) => (
                        <LinksFooter key={index} item = {item} />)
                    )
                }
                </div>
            </div>
            </>
        );
    }
} 

export const Footer = () => {
    const {headerOfFooter, infoGpt3, footerLinks, companyLinks, contactLinks} = footerData;
    return (
        <>
        <CreateHeaderFooterTemplate headerOfFooter={headerOfFooter} />
        <div class="footer_btm">
            <CreateInfo infoGpt3={infoGpt3}/>
            <div class="footer_btm__right">
                <CreateFooterLinks footerLinks={footerLinks}/>
                <CreateFooterLinks footerLinks={companyLinks}/>
                <CreateFooterLinks footerLinks={contactLinks}/>
            </div>
        </div>
        </>
      );
};

export default Footer;