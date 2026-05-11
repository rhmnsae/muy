import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, BadgeCheck, Bot, Clock3, MessageSquareText, ShieldCheck, Sparkles, Target, Zap, CheckCircle2, AlertTriangle, Workflow, Headphones, BarChart3, Globe2, Mail, Gamepad2 } from 'lucide-react'
import './styles.css'

const waNumber = '628977279290'
const waText = encodeURIComponent('Halo, saya tertarik membuat asisten chat online untuk bisnis saya. Bisa konsultasi?')
const waLink = `https://wa.me/${waNumber}?text=${waText}`

const features = [
  {
    icon: MessageSquareText,
    title: 'Balas Chat Lebih Cepat',
    desc: 'Asisten membantu merespons pertanyaan awal calon pembeli, supaya chat penting tidak menumpuk dan tidak terlewat.'
  },
  {
    icon: Target,
    title: 'Jawaban Sesuai Produk',
    desc: 'Isi jawaban disusun dari informasi bisnis Anda: layanan, harga, FAQ, alur order, syarat, dan batasan.'
  },
  {
    icon: Workflow,
    title: 'Alur Closing Lebih Rapi',
    desc: 'Calon pembeli diarahkan dari tanya-tanya, pilih paket, kirim kebutuhan, sampai siap ditangani admin/manusia.'
  },
  {
    icon: ShieldCheck,
    title: 'Tetap Ada Kontrol Owner',
    desc: 'Untuk hal sensitif seperti diskon, komplain berat, pembayaran, atau pesan keluar, asisten bisa dibuat minta konfirmasi dulu.'
  }
]

const packages = [
  {
    name: 'Starter',
    tag: 'Untuk mulai otomatisasi',
    price: 'Mulai dari konsultasi',
    items: ['Analisis kebutuhan bisnis', 'Template jawaban dasar', 'FAQ produk/jasa', 'Arahan alur chat sederhana', 'Setup awal sesuai channel']
  },
  {
    name: 'Business',
    tag: 'Paling cocok untuk jualan aktif',
    price: 'Custom sesuai kebutuhan',
    featured: true,
    items: ['Persona asisten brand', 'Knowledge produk lengkap', 'Alur closing & follow-up', 'Batasan jawaban aman', 'Testing skenario client', 'Panduan operasional admin']
  },
  {
    name: 'Custom System',
    tag: 'Untuk kebutuhan khusus',
    price: 'By request',
    items: ['Integrasi workflow khusus', 'Multi-produk atau multi-brand', 'Routing ke admin/manusia', 'Optimasi prompt & knowledge', 'Maintenance dan pengembangan']
  }
]

const steps = [
  ['01', 'Konsultasi Bisnis', 'Kami pelajari produk, target market, gaya bahasa, dan masalah chat yang sering terjadi.'],
  ['02', 'Susun Knowledge', 'Informasi produk, FAQ, harga, aturan, dan alur order dirapikan agar asisten tidak asal jawab.'],
  ['03', 'Bangun Asisten', 'Asisten dibuat dengan persona, batasan, dan instruksi yang sesuai kebutuhan bisnis Anda.'],
  ['04', 'Testing & Revisi', 'Kami uji dengan skenario chat nyata sampai jawaban terasa rapi, aman, dan siap dipakai.']
]

const faqs = [
  ['Apakah asisten ini menggantikan admin sepenuhnya?', 'Tidak harus. Idealnya asisten membantu pertanyaan awal dan hal berulang, lalu admin tetap menangani keputusan penting seperti pembayaran, komplain berat, atau negosiasi khusus.'],
  ['Apakah bisa dibuat sesuai gaya bahasa brand?', 'Bisa. Gaya bahasa bisa dibuat formal, santai, ramah, islami, premium, teknis, atau sesuai karakter bisnis Anda.'],
  ['Apakah aman untuk client baru?', 'Bisa dibuat dengan batasan: tidak memberi janji berlebihan, tidak membocorkan data, tidak mengirim pesan keluar tanpa izin, dan mengarahkan ke admin saat ragu.'],
  ['Apa saja yang perlu disiapkan?', 'Minimal informasi produk/jasa, harga atau paket, FAQ, kontak, alur order, batas diskon, dan contoh chat client yang sering masuk.']
]

function Button({ children, dark = false, href = waLink }) {
  return (
    <a href={href} className={`btn ${dark ? 'btn-dark' : 'btn-light'}`}>
      {children} <ArrowRight size={18} />
    </a>
  )
}

function SectionLabel({ children }) {
  return <div className="section-label">{children}</div>
}

function App() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#top" className="brand pixel-text" aria-label="Asisten Chat Pro">
            <span className="brand-mark pixel-icon"><Bot size={22} /></span>
            <span>ASISTEN CHAT PRO</span>
          </a>
          <div className="nav-links">
            <a href="#fitur">Fitur</a>
            <a href="#proses">Proses</a>
            <a href="#paket">Paket</a>
            <a href="#faq">FAQ</a>
          </div>
          <Button dark>Konsultasi</Button>
        </nav>
      </header>

      <section id="top" className="hero container">
        <div className="hero-copy">
          <div className="pill"><Sparkles size={16} /> Jasa Asisten Chat Online untuk Bisnis</div>
          <h1>Client jangan sampai batal beli cuma karena chat telat dibalas.</h1>
          <p className="lead">
            Kami bantu buat asisten chat online yang bisa menjawab pertanyaan calon pembeli dengan cepat, rapi, dan sesuai informasi bisnis Anda — supaya admin tidak kewalahan dan peluang closing tidak hilang.
          </p>
          <div className="hero-actions">
            <Button dark>Mulai Konsultasi</Button>
            <a className="btn btn-ghost" href="#fitur">Lihat Detail</a>
          </div>
          <div className="hero-points">
            <span><CheckCircle2 size={18} /> Respons lebih cepat</span>
            <span><CheckCircle2 size={18} /> Jawaban konsisten</span>
            <span><CheckCircle2 size={18} /> Tetap bisa dikontrol owner</span>
          </div>
        </div>

        <div className="hero-card" aria-label="Preview chat asisten">
          <div className="window-bar"><span></span><span></span><span></span><b>LIVE CHAT</b></div>
          <div className="chat-list">
            <div className="bubble client">Kak, landing page buat produk skincare bisa?</div>
            <div className="bubble bot">Bisa kak. Untuk skincare biasanya cocok pakai landing page yang fokus ke manfaat produk, testimoni, komposisi, CTA WhatsApp, dan promo.</div>
            <div className="bubble client">Harganya berapa dan berapa lama?</div>
            <div className="bubble bot">Estimasi tergantung jumlah section dan fitur. Kalau pakai template bisa lebih cepat. Boleh kirim contoh referensi desain dulu kak?</div>
          </div>
          <div className="status-row">
            <span><Clock3 size={16}/> Fast response</span>
            <span><BadgeCheck size={16}/> Brand-safe</span>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <div className="container problem-grid">
          <div>
            <SectionLabel>[ MASALAH UTAMA ]</SectionLabel>
            <h2>Chat client yang dibiarkan terlalu lama bisa berubah jadi kehilangan penjualan.</h2>
          </div>
          <div className="problem-cards">
            {['Admin sibuk dan lupa membalas chat penting.', 'Pertanyaan yang sama dijawab berulang setiap hari.', 'Client sudah tertarik, tapi pindah ke kompetitor karena respon lambat.', 'Jawaban tidak konsisten karena tidak ada panduan yang rapi.'].map((item) => (
              <article className="mini-card" key={item}><AlertTriangle size={20} /> {item}</article>
            ))}
          </div>
        </div>
      </section>

      <section id="fitur" className="section container">
        <SectionLabel>[ SOLUSI ]</SectionLabel>
        <div className="section-head">
          <h2>Asisten dibuat bukan sekadar bisa ngobrol, tapi siap bantu jualan.</h2>
          <p>Fokusnya bukan gimmick AI. Fokusnya adalah jawaban yang jelas, aman, relevan, dan membantu calon pembeli mengambil keputusan.</p>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, desc }) => (
            <article className="feature-card" key={title}>
              <div className="icon-box pixel-icon"><Icon size={26} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proses" className="section dark-section">
        <div className="container">
          <SectionLabel>[ ALUR KERJA ]</SectionLabel>
          <div className="section-head invert">
            <h2>Dibangun bertahap supaya hasilnya rapi, bukan asal aktif.</h2>
            <p>Setiap bisnis punya cara jualan berbeda. Karena itu asisten perlu dipelajari, disusun, diuji, lalu diperbaiki.</p>
          </div>
          <div className="steps-grid">
            {steps.map(([num, title, desc]) => (
              <article className="step-card" key={num}>
                <strong>{num}</strong>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="paket" className="section container">
        <SectionLabel>[ PILIHAN LAYANAN ]</SectionLabel>
        <div className="section-head">
          <h2>Pilih sesuai kebutuhan bisnis Anda.</h2>
          <p>Harga final mengikuti kompleksitas produk, jumlah knowledge, channel, dan kebutuhan integrasi.</p>
        </div>
        <div className="pricing-grid">
          {packages.map((pkg) => (
            <article className={`price-card ${pkg.featured ? 'featured' : ''}`} key={pkg.name}>
              {pkg.featured && <div className="ribbon">REKOMENDASI</div>}
              <h3>{pkg.name}</h3>
              <p>{pkg.tag}</p>
              <div className="price">{pkg.price}</div>
              <ul>
                {pkg.items.map((item) => <li key={item}><CheckCircle2 size={18}/>{item}</li>)}
              </ul>
              <Button dark={pkg.featured}>Tanya Paket</Button>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="trust-box">
          <div>
            <SectionLabel>[ KENAPA PERLU SEKARANG ]</SectionLabel>
            <h2>Calon pembeli butuh jawaban cepat. Bisnis Anda butuh sistem yang tidak gampang lupa.</h2>
          </div>
          <div className="trust-stats">
            <div><Zap size={26}/><b>24/7</b><span>Bisa bantu respons awal kapan saja*</span></div>
            <div><Headphones size={26}/><b>Human Handoff</b><span>Dialihkan ke admin saat perlu keputusan manusia</span></div>
            <div><BarChart3 size={26}/><b>Lebih Rapi</b><span>FAQ, alur order, dan batasan jawaban terdokumentasi</span></div>
          </div>
        </div>
      </section>

      <section id="faq" className="section container">
        <SectionLabel>[ FAQ ]</SectionLabel>
        <div className="faq-grid">
          {faqs.map(([q, a]) => (
            <article className="faq-card" key={q}>
              <h3>{q}</h3>
              <p>{a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta container">
        <div>
          <SectionLabel>[ MULAI SEKARANG ]</SectionLabel>
          <h2>Siapkan bisnis Anda punya asisten chat yang cepat, sopan, dan siap bantu closing.</h2>
          <p>Konsultasikan kebutuhan Anda. Kami bantu susun dari informasi produk sampai alur jawaban yang aman dipakai.</p>
        </div>
        <Button dark>Konsultasi via WhatsApp</Button>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="brand-mark pixel-icon"><Gamepad2 size={22} /></div>
            <div>
              <b className="pixel-text">ASISTEN CHAT PRO</b>
              <p>Jasa pembuatan asisten chat online untuk bisnis — bagian dari ekosistem MUTATIT.</p>
            </div>
          </div>
          <div className="footer-links" aria-label="Link penting">
            <a href="https://mutatit.com" target="_blank" rel="noreferrer"><Globe2 size={17} /> mutatit.com</a>
            <a href={waLink}><MessageSquareText size={17} /> WhatsApp Konsultasi</a>
            <span><Mail size={17} /> Respons cepat & brand-safe</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Asisten Chat Pro.</span>
          <span>Powered by MUTATIT — solusi digital untuk bisnis yang ingin lebih rapi.</span>
        </div>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
