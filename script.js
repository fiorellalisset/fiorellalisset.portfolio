// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav__links');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Works grid =====
// Portadas tomadas de tu sitio Wix actual (fiorellaportfolio.wixsite.com/fldesign).
// RECOMENDADO: descarga estas imágenes y guárdalas en /assets/works/ para que el
// sitio no dependa de los servidores de Wix. Ver README.md para instrucciones.
// `img: null` = proyecto sin imagen de portada disponible (se muestra solo el título).
const works = [
  { title: "Alicorp", tag: "#NuestroMotorEsMamá", img: "https://static.wixstatic.com/media/3d9b4c_88772dfb2a4f4258a063454dcb667c2c~mv2.jpg/v1/fill/w_2732,h_2048,al_c/3d9b4c_88772dfb2a4f4258a063454dcb667c2c~mv2.jpg" },
  { title: "Pawit", tag: "Pawit.pe", img: "https://static.wixstatic.com/media/3d9b4c_d18e879d01b74d08847771445be3101d~mv2.jpg/v1/fill/w_5757,h_3512,al_c/3d9b4c_d18e879d01b74d08847771445be3101d~mv2.jpg" },
  { title: "Directo App", tag: "18 Aniversario Vibra Directo", img: "https://static.wixstatic.com/media/3d9b4c_b8cac9c21f94416183d52031cd528631~mv2.jpg/v1/fill/w_2325,h_1453,al_c/3d9b4c_b8cac9c21f94416183d52031cd528631~mv2.jpg" },
  { title: "Premier Touch Academy", tag: "Chicago, USA", img: "https://static.wixstatic.com/media/3d9b4c_7b6a82bde21b4ea296c442a03e0f26b1~mv2.jpg/v1/fill/w_2481,h_1418,al_c/3d9b4c_7b6a82bde21b4ea296c442a03e0f26b1~mv2.jpg" },
  { title: "Beldom | Yanbal", tag: "Packaging · Arte final", img: "https://static.wixstatic.com/media/3d9b4c_0d201e36e13242b6b191cf03559316be~mv2.jpg/v1/fill/w_1554,h_1584,al_c/3d9b4c_0d201e36e13242b6b191cf03559316be~mv2.jpg" },
  { title: "Cafeina", tag: "Packaging · Social Media", img: "https://static.wixstatic.com/media/3d9b4c_4ced4e56b60947db956cba29948e5b4d~mv2.jpg/v1/fill/w_5464,h_8192,al_c/3d9b4c_4ced4e56b60947db956cba29948e5b4d~mv2.jpg" },
  { title: "314 Soccer Club", tag: "Branding · Web · Social", img: "https://static.wixstatic.com/media/3d9b4c_755c0b6a680042cfa61580c325927308~mv2.png/v1/fill/w_2363,h_2363,al_c/3d9b4c_755c0b6a680042cfa61580c325927308~mv2.png" },
  { title: "Electrolight", tag: "Merch", img: "https://static.wixstatic.com/media/3d9b4c_d29b53f65d3b42188563d7406604da97~mv2.jpg/v1/fill/w_6000,h_3375,al_c/3d9b4c_d29b53f65d3b42188563d7406604da97~mv2.jpg" },
  { title: "Café 770", tag: "Branding · Packaging · Merch", img: "https://static.wixstatic.com/media/2bf7a96d-bb76-4832-a963-931d5b3f3699/v1/fill/w_4500,h_4500,al_c/2bf7a96d-bb76-4832-a963-931d5b3f3699" },
  { title: "TGT", tag: "Publicidad · Flyer promocional", img: "https://static.wixstatic.com/media/3d9b4c_c0d2ff6b7c7f412fa811907f20a0a8e1~mv2.jpg/v1/fill/w_2640,h_1485,al_c/3d9b4c_c0d2ff6b7c7f412fa811907f20a0a8e1~mv2.jpg" },
  { title: "Yap!", tag: "Diseño de app · Branding", img: "https://static.wixstatic.com/media/03aca32b-96c8-48b9-8077-be645f15d516/v1/fill/w_2363,h_2363,al_c/03aca32b-96c8-48b9-8077-be645f15d516" },
  { title: "Diem", tag: "Branding", img: "https://static.wixstatic.com/media/f48e226f-4e04-4181-ab44-7d545af68459/v1/fill/w_1182,h_1182,al_c/f48e226f-4e04-4181-ab44-7d545af68459" },
  { title: "Museos", tag: "Diseño editorial", img: "https://static.wixstatic.com/media/3d9b4c_ed0500f791e84a619833828320ff67c5~mv2.png/v1/fill/w_3600,h_2025,al_c/3d9b4c_ed0500f791e84a619833828320ff67c5~mv2.png" },
  { title: "Lima Juega", tag: "Branding · Ilustración", img: "https://static.wixstatic.com/media/f809cd84-34a0-4e0e-b598-106fe467224b/v1/fill/w_2363,h_2363,al_c/f809cd84-34a0-4e0e-b598-106fe467224b" },
  { title: "Centro Histórico de Lima", tag: "Manual de señalética", img: "https://static.wixstatic.com/media/3d9b4c_0ea35e50074946e1b7cb285c1d209b8b~mv2.png/v1/fill/w_3000,h_2000,al_c/3d9b4c_0ea35e50074946e1b7cb285c1d209b8b~mv2.png" },
  { title: "Cartas de Toy Story", tag: "Ilustración · Diseño editorial", img: "https://static.wixstatic.com/media/3d9b4c_300a618a0e154b9781747c25303c5791~mv2.jpg/v1/fill/w_5448,h_3632,al_c/3d9b4c_300a618a0e154b9781747c25303c5791~mv2.jpg" },
  { title: "DLSP", tag: "Identidad visual", img: "https://static.wixstatic.com/media/3d9b4c_f0544431acf64250aa270372f1789600~mv2.png/v1/fill/w_4161,h_4159,al_c/3d9b4c_f0544431acf64250aa270372f1789600~mv2.png" },
  { title: "Fanzine \"Planta Vida\"", tag: "Diseño editorial", img: "https://static.wixstatic.com/media/3d9b4c_63200b197f924df8a289102215d6152d~mv2.png/v1/fill/w_3200,h_2400,al_c/3d9b4c_63200b197f924df8a289102215d6152d~mv2.png" },
  { title: "Afiche", tag: "Ilustración · MIMP", img: "https://static.wixstatic.com/media/3d9b4c_5b6f4c72ec1e4387a0189698b5539da9~mv2.png/v1/fill/w_5000,h_3337,al_c/3d9b4c_5b6f4c72ec1e4387a0189698b5539da9~mv2.png" },
  { title: "Ilustración editorial", tag: "Ilustración", img: null },
  { title: "El Jurídico a la Medida", tag: "Editorial", img: null },
  { title: "CADi 2021 | Memoria", tag: "Diseño editorial", img: "https://static.wixstatic.com/media/868f750e-a2e6-46c5-b414-3b824c871ee5/v1/fill/w_4500,h_3000,al_c/868f750e-a2e6-46c5-b414-3b824c871ee5" },
];

const grid = document.getElementById('worksGrid');

works.forEach((work, i) => {
  const item = document.createElement('div');
  item.className = 'grid__item';
  const num = String(i + 1).padStart(2, '0');

  if (work.img) {
    item.innerHTML = `
      <img src="${work.img}" alt="${work.title}" loading="lazy" />
      <div class="grid__overlay">
        <span class="grid__index">${num}</span>
        <span class="grid__title">${work.title}</span>
        <span class="grid__meta">${work.tag}</span>
      </div>
    `;
  } else {
    item.classList.add('grid__item--empty');
    item.innerHTML = `
      <div class="grid__overlay grid__overlay--static">
        <span class="grid__index">${num}</span>
        <span class="grid__title">${work.title}</span>
        <span class="grid__meta">${work.tag}</span>
      </div>
    `;
  }
  grid.appendChild(item);
});
