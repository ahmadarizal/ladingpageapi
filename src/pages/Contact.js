import { useEffect } from "react";

export default function Contact() {
    useEffect(function () {
        document.title = 'contact'
    }, []);
    return (
        <section className="section">
            <h1 className="section-title">Contact pege</h1>
            <p className="section-description">Kamu dapat menghubungiku di bawah ini : </p>
            <ul>
                <li>Wa : 085730031260</li>
                <li>Email : fikri@gmail.com</li>
            </ul>
            <p>Kamu dapat menghubungiku di bawah ini :</p>
            <ul>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">fecebook</a></li>
                <li><a href="https://www.instagram.com//fikri_ahmad_99" target="_blank" rel="noopener noreferrer">IG</a></li>
               
            </ul>
        </section>
    );
}