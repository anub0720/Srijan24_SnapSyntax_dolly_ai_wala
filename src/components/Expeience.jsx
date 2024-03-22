import "./Experience.css"
export default function({year_of_exp, company, designation, desc}){
    return (<div>
    <div className="same name">{company}</div>
    <div className="same">{designation}</div>
    <div className="same">{desc}</div>
    <div className="same">{year_of_exp}</div>
    </div>)
}