import { useEffect } from "react";

export default function Profile() {
  useEffect(function () {
    document.title = 'profile'
  }, []);

    return (
        <section className="section">
          <h1 className="section-title">Profile</h1>
          <p className="section-description">Halo namaku fikri, aku adalah seorang Frontend Developer yg sedang belajar di pondok IT Yogjakarta!</p>
        </section>
   ); 
}