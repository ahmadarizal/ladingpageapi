import { useEffect } from "react"

export default function Home() {
  useEffect(function () {
    document.title = 'Home';
}, []);
   return (
        <section className="section">
             <h1 className="section-title">Selamat datang di website qu</h1> 
             <p className="section-description">Halo semua, ini website baru aku. Kamu bisa mendapatkan informasi seputar profileku di sini, salam kenal ya. Met siang</p>
        </section>    
  )
}