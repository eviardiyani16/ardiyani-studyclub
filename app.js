const logo = "logo-ardiyani-studyclub.png"

const state = {
  page: "home",
  role: "student"
}

const roleNames = {
  student: "Siswa",
  parent: "Orang Tua",
  admin: "Admin & Guru"
}

function setPage(page) {
  state.page = page
  window.scrollTo(0, 0)
  render()
}

function toast(message) {
  const el = document.createElement("div")
  el.className = "toast"
  el.textContent = message
  document.body.appendChild(el)
  setTimeout(() => el.remove(), 2200)
}

function publicHome() {
  return `
    <div class="shell">
      <header class="topbar">
        <div class="container nav">
          <img class="logo" src="${logo}" alt="Ardiyani StudyClub">
          <nav class="navlinks"><a href="#program">Program</a><a href="#cara">Cara Belajar</a><a href="#jadwal">Jadwal</a><a href="#kontak">Kontak</a></nav>
          <div class="nav-actions"><button class="btn outline" onclick="setPage('login')">Masuk</button><button class="btn" onclick="toast('Formulir pendaftaran akan dibuka')">Daftar Sekarang</button><button class="menu-btn">☰</button></div>
        </div>
      </header>
      <main>
        <section class="hero">
          <div class="container hero-grid">
            <div><span class="eyebrow">Bimbingan Matematika SD, SMP & SMA</span><h1>Matematika Lebih Mudah, Belajar Lebih Terarah</h1><p class="lead">Pendampingan belajar Matematika melalui kelas privat maupun kelompok, secara tatap muka dan online, dengan perkembangan yang dapat dipantau orang tua.</p><div class="hero-actions"><button class="btn" onclick="toast('Formulir pendaftaran akan dibuka')">Daftar Sekarang</button><a class="btn outline" href="#program">Lihat Program</a></div></div>
            <div class="hero-photo"><img src="hero-kelas.png" alt="Siswa Ardiyani StudyClub sedang belajar Matematika"></div>
          </div>
        </section>
        <section class="section" id="program"><div class="container"><div class="section-head"><h2>Program Belajar</h2><p>Materi disesuaikan dengan jenjang dan kebutuhan setiap siswa.</p></div><div class="grid-3">${["SD","SMP","SMA"].map((x,i)=>`<article class="card"><div class="program-icon">${["✏","📘","🎓"][i]}</div><h3>Matematika ${x}</h3><p>${["Membangun konsep dasar Matematika dengan cara yang mudah dipahami.","Memperkuat pemahaman konsep dan keterampilan menyelesaikan soal.","Pendalaman materi, strategi ujian, dan persiapan pendidikan lanjutan."][i]}</p></article>`).join("")}</div></div></section>
        <section class="section white" id="cara"><div class="container"><div class="section-head"><h2>Belajar dalam 5 Langkah</h2><p>Alur sederhana dari pendaftaran sampai laporan perkembangan.</p></div><div class="steps">${["Daftar program","Dihubungi admin","Dapatkan jadwal","Belajar & latihan","Pantau progres"].map((x,i)=>`<div class="step"><div class="step-num">${i+1}</div><strong>${x}</strong></div>`).join("")}</div></div></section>
        <section class="section" id="jadwal"><div class="container"><div class="section-head"><h2>Jadwal Kelas</h2><p>Contoh jadwal yang tersedia minggu ini.</p></div><div class="grid-3"><div class="card"><h3>Matematika SD</h3><p>Senin & Rabu · 16.00<br>Kelas kelompok · Tatap muka</p></div><div class="card"><h3>Matematika SMP</h3><p>Selasa & Kamis · 16.00<br>Kelas kelompok · Online</p></div><div class="card"><h3>Matematika SMA</h3><p>Sabtu · 09.00<br>Kelas privat · Online</p></div></div></div></section>
        <section class="section white" id="kontak"><div class="container"><div class="cta"><div><h2>Mulai Belajar Bersama Kami</h2><p>Bimbingan Matematika terarah untuk masa depan anak.</p></div><button class="btn" onclick="toast('WhatsApp admin akan dibuka')">Hubungi via WhatsApp</button></div></div></section>
      </main>
      <footer class="footer"><div class="container footer-row"><strong>Ardiyani StudyClub</strong><span>Matematika lebih mudah, belajar lebih terarah.</span><span>© 2026</span></div></footer>
    </div>`
}

function loginPage() {
  return `<div class="login-page"><section class="login-brand"><img class="logo" src="${logo}" alt="Ardiyani StudyClub"><h1>Belajar, bertumbuh, dan terpantau dalam satu tempat.</h1><p class="lead">Versi uji coba untuk melihat portal siswa, orang tua, dan admin/guru.</p></section><section class="login-box"><button class="back" onclick="setPage('home')">← Kembali ke beranda</button><h2>Masuk</h2><p class="lead">Pilih peran untuk mencoba dashboard.</p><div class="role-picks">${Object.entries(roleNames).map(([k,v])=>`<button class="role ${state.role===k?'active':''}" onclick="state.role='${k}';render()">${v}</button>`).join("")}</div><div class="form-group"><label>${state.role==='student'?'Nama pengguna':'Nomor WhatsApp'}</label><input class="input" value="${state.role==='student'?'alya08':'081234567890'}"></div><div class="form-group"><label>Kata sandi</label><input class="input" type="password" value="12345678"></div><button class="btn full" onclick="setPage('dashboard')">Masuk sebagai ${roleNames[state.role]}</button></section></div>`
}

const metric = (label,value) => `<div class="metric"><span>${label}</span><strong>${value}</strong></div>`
const row = (icon,title,sub,status,kind="") => `<div class="list-row"><div class="list-main"><div class="icon">${icon}</div><div><h3>${title}</h3><p>${sub}</p></div></div>${status?`<span class="status ${kind}">${status}</span>`:""}</div>`

function dashHeader(name, subtitle, tag) {
  return `<header class="dashbar"><div class="container dashnav"><img class="logo" src="${logo}" alt="Ardiyani StudyClub"><div class="dash-actions"><button class="role" onclick="toast('Ada 3 notifikasi baru')">🔔</button><div class="avatar">${name[0]}</div></div></div></header><main class="container dashmain"><div class="greeting"><div><h1>Selamat pagi, ${name}!</h1><p>${subtitle}</p></div><span class="role-tag">${tag}</span></div>`
}

function studentDashboard() {
  return `${dashHeader("Alya","Siap belajar Matematika hari ini?","Kelas 8 SMP")}
    <section class="panel">${row("📅","Kelas Berikutnya","Matematika SMP · Hari ini, 16.00 · Online","Masuk Kelas")}</section>
    <div class="dash-grid"><section><div class="panel"><h2>Tugas Aktif</h2><div class="list">${row("📝","Persamaan Linear","Latihan · Hari ini, 20.00","6/10")}${row("📋","Sistem Persamaan","PR · Besok, 18.00","Mulai","warn")}${row("⚠","Pythagoras","Terlambat 1 hari","Kerjakan","danger")}</div></div><div class="panel" style="margin-top:20px"><h2>Perkembangan Nilai</h2><div class="chart">${[60,68,74,86].map((h,i)=>`<div class="bar" style="height:${h}%" data-label="M${i+1}"></div>`).join("")}</div></div></section><aside><div class="panel"><h2>Progres Bulan Ini</h2><div class="list">${row("✓","Kehadiran","92%","Konsisten")}${row("★","Rata-rata Nilai","86","Naik")}${row("🏆","Peringkat","#3","Bulan ini")}</div></div><div class="panel" style="margin-top:20px"><h2>Motivasi Hari Ini</h2><p>“Sedikit kemajuan setiap hari akan membawa hasil besar.”</p><strong>Target: 3 latihan</strong><div class="progress"><i style="width:67%"></i></div></div></aside></div></main>${bottomNav("student")}`
}

function parentDashboard() {
  return `${dashHeader("Ibu Rina","Pantau perkembangan belajar Bima hari ini.","Orang Tua")}
    <section class="panel">${row("👦","Bima Pratama","Kelas 8 SMP · Anak yang dipantau","Ganti Anak")}</section>
    <div class="metrics" style="margin-top:20px">${metric("Kehadiran","92%")}${metric("Latihan Selesai","8/10")}${metric("Rata-rata Nilai","86")}${metric("Tugas Tertunda","1")}</div>
    <div class="dash-grid"><section><div class="panel"><h2>Kegiatan Terbaru</h2>${row("💻","Persamaan Linear","Senin, 13 Juli 2026 · Online · Nilai 88","Hadir")}</div><div class="panel" style="margin-top:20px"><h2>Perkembangan Bima</h2><div class="chart">${[66,72,78,86].map((h,i)=>`<div class="bar" style="height:${h}%" data-label="M${i+1}"></div>`).join("")}</div></div></section><aside><div class="panel"><h2>Jadwal Mendatang</h2>${row("📅","Matematika SMP","Rabu, 15 Juli · 16.00 · Online","Lihat")}</div><div class="panel" style="margin-top:20px"><h2>Konsultasi Guru</h2>${row("💬","Kak Ardiyani","Bima menunjukkan peningkatan yang baik...","Balas")}</div></aside></div></main>${bottomNav("parent")}`
}

function adminDashboard() {
  return `${dashHeader("Kak Ardiyani","Berikut kegiatan yang perlu ditangani hari ini.","Admin & Guru")}
    <div class="metrics">${metric("Kelas Hari Ini","3")}${metric("Siswa Terjadwal","12")}${metric("Absensi Diverifikasi","5")}${metric("Tugas Diperiksa","7")}</div>
    <div class="dash-grid"><section><div class="panel"><h2>Perlu Ditangani</h2><div class="list">${row("⏱","5 absensi menunggu verifikasi","Kelas hari ini","Verifikasi","warn")}${row("📝","7 jawaban perlu diperiksa","Esai dan unggahan","Periksa","warn")}${row("💬","3 konsultasi belum dibalas","Siswa dan orang tua","Balas","danger")}</div></div><div class="panel" style="margin-top:20px"><h2>Jadwal Hari Ini</h2><div class="list">${row("16","Matematika SMP","16.00–17.30 · Kelompok · Online","Mulai")}${row("18","Matematika SD","18.00–19.00 · Privat · Tatap Muka","Detail")}${row("19","Matematika SMA","19.30–21.00 · Kelompok · Online","Detail")}</div><button class="btn full" style="margin-top:12px" onclick="toast('Form buat pertemuan akan dibuka')">+ Buat Pertemuan</button></div></section><aside><div class="panel"><h2>Akses Cepat</h2><div class="quick">${[["＋","Tambah Siswa"],["▤","Buat Materi"],["✎","Buat Latihan"],["✓","Kehadiran"],["★","Nilai Siswa"],["➤","Kirim Laporan"]].map(x=>`<button onclick="toast('${x[1]} akan dibuka')"><span>${x[0]}</span>${x[1]}</button>`).join("")}</div></div><div class="panel" style="margin-top:20px"><h2>Pendaftaran Baru</h2>${row("☎","2 calon siswa","Menunggu dihubungi","Buka")}</div></aside></div></main>${bottomNav("admin")}`
}

function bottomNav(role) {
  const items = role === "student" ? [["⌂","Beranda"],["▤","Belajar"],["▦","Jadwal"],["◯","Diskusi"],["♙","Profil"]] : role === "parent" ? [["⌂","Beranda"],["▦","Jadwal"],["▥","Progres"],["◯","Konsultasi"],["♙","Profil"]] : [["⌂","Beranda"],["▦","Jadwal"],["♙","Siswa"],["▤","Belajar"],["☰","Menu"]]
  return `<nav class="bottom-nav">${items.map((x,i)=>`<button class="${i===0?'active':''}" onclick="${i===0?"":"toast('Menu ${x[1]} akan dibuka')"}"><span>${x[0]}</span>${x[1]}</button>`).join("")}</nav>`
}

function dashboard() {
  const content = state.role === "student" ? studentDashboard() : state.role === "parent" ? parentDashboard() : adminDashboard()
  return `<div class="dash">${content}<button class="toast" style="bottom:84px" onclick="setPage('login')">Ganti Peran</button></div>`
}

function render() {
  document.getElementById("app").innerHTML = state.page === "home" ? publicHome() : state.page === "login" ? loginPage() : dashboard()
}

render()
