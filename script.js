function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('ativo');
}

function mostrarSecao(secao) {
    const homeSection = document.getElementById('home-section');
    const campsSection = document.getElementById('camps-section');
    const f1Section = document.getElementById('f1-section');
    const fmSection = document.getElementById('fm-section');
    const sidebar = document.getElementById('sidebar');
    
    // Elemento do título principal no topo da página
    const tituloPrincipal = document.getElementById('titulo-principal');

    // Oculta todas as seções
    homeSection.classList.remove('ativa');
    campsSection.classList.remove('ativa');
    f1Section.classList.remove('ativa');
    fmSection.classList.remove('ativa');

    homeSection.classList.add('oculta');
    campsSection.classList.add('oculta');
    f1Section.classList.add('oculta');
    fmSection.classList.add('oculta');

    // Mostra a seção escolhida e atualiza o título do topo
    if (secao === 'home') {
        homeSection.classList.remove('oculta');
        homeSection.classList.add('ativa');
        tituloPrincipal.innerText = 'BEM-VINDO A VRA';
    } else if (secao === 'camps') {
        campsSection.classList.remove('oculta');
        campsSection.classList.add('ativa');
        tituloPrincipal.innerText = 'CAMPS VRA';
    } else if (secao === 'f1') {
        f1Section.classList.remove('oculta');
        f1Section.classList.add('ativa');
        tituloPrincipal.innerText = 'FORMÚLA 1 2025';
    } else if (secao === 'fm') {
        fmSection.classList.remove('oculta');
        fmSection.classList.add('ativa');
        tituloPrincipal.innerText = 'FORZA MOTORSPORT (2023)';
    }

    // Fecha o menu lateral
    sidebar.classList.remove('ativo');
}