// ===================================
// DADOS DE CIDADES E PROJETOS
// ===================================

// Dados das cidades com COORDENADAS GEOGRÁFICAS (NECESSÁRIAS para Leaflet Marker)
const cityLocations = [
    // SUDESTE
    { name: 'São Paulo', id: 'saopaulosp', lat: -23.5505, lng: -46.6333 },
    { name: 'Rio de Janeiro', id: 'riodejaneirorj', lat: -22.9068, lng: -43.1729 },
    { name: 'Vitória', id: 'vitoriaes', lat: -20.3150, lng: -40.3128 },
    { name: 'Belo Horizonte', id: 'belohorizontemg', lat: -19.9167, lng: -43.9345 },
    // SUL
    { name: 'Curitiba', id: 'curitibapr', lat: -25.4284, lng: -49.2733 },
    { name: 'Florianópolis', id: 'florianopolissc', lat: -27.5935, lng: -48.5585 },
    { name: 'Porto Alegre', id: 'portoalegrers', lat: -30.0346, lng: -51.2177 },
    // CENTRO-OESTE
    { name: 'Brasília', id: 'brasiliadf', lat: -15.7801, lng: -47.9292 },
    { name: 'Campo Grande', id: 'campograndems', lat: -20.4428, lng: -54.6468 },
    { name: 'Cuiabá', id: 'cuiabamt', lat: -15.6014, lng: -56.0979 },
    { name: 'Goiânia', id: 'goianiago', lat: -16.6869, lng: -49.2643 },
    // NORDESTE
    { name: 'Recife', id: 'recifepe', lat: -8.0578, lng: -34.8820 },
    { name: 'Salvador', id: 'salvadorba', lat: -12.9714, lng: -38.5014 },
    { name: 'Maceió', id: 'maceioal', lat: -9.6659, lng: -35.7356 },
    { name: 'Teresina', id: 'teresinapi', lat: -5.0919, lng: -42.8038 },
    { name: 'Fortaleza', id: 'fortalezace', lat: -3.7319, lng: -38.5267 },
    { name: 'João Pessoa', id: 'joaopessoapb', lat: -7.1195, lng: -34.8645 },
    { name: 'Natal', id: 'natalrn', lat: -5.7945, lng: -35.2110 },
    { name: 'Aracaju', id: 'aracajuse', lat: -10.9472, lng: -37.0731 },
    { name: 'São Luís', id: 'saoluisma', lat: -2.5303, lng: -44.3068 },
    // NORTE
    { name: 'Porto Velho', id: 'portovelhoro', lat: -8.7619, lng: -63.8315 },
    { name: 'Rio Branco', id: 'riobrancoac', lat: -9.9754, lng: -67.8105 },
    { name: 'Manaus', id: 'manausam', lat: -3.1190, lng: -60.0217 },
    { name: 'Boa Vista', id: 'boavistarr', lat: 2.8197, lng: -60.0217 },
    { name: 'Macapá', id: 'macapaap', lat: 0.0386, lng: -51.0667 },
    { name: 'Belém', id: 'belempar', lat: -1.4558, lng: -48.5039 },
    { name: 'Palmas', id: 'palmasto', lat: -10.2125, lng: -48.3391 }
];

// Array smartProjects (Inalterado)
const smartProjects = [
    // SUDESTE
    ["São Paulo (SP)", "Centros de Operações Integradas"],
    ["Rio de Janeiro (RJ)", "Centro de Operações Rio (COR)"],
    ["Vitória (ES)", "Big Data e Ciências de Dados"],
    ["Belo Horizonte (MG)", "BH Cidade Inteligente"],
    // SUL
    ["Curitiba (PR)", "Biarticulados Elétricos"],
    ["Florianópolis (SC)", "Governança Digital e Participação"],
    ["Porto Alegre (RS)", "Inovação e Resiliência Climática"],
    // CENTRO-OESTE
    ["Brasília (DF)", "Iluminação Pública Inteligente"],
    ["Campo Grande (MS)", "Planejamento Urbano e Zonas"],
    ["Cuiabá (MT)", "Monitoramento em Tecnologia e Inovação"],
    ["Goiânia (GO)", "Centro de Inteligência Tecnológica"],
    // NORDESTE
    ["Recife (PE)", "Porto Digital e Inovação"],
    ["Salvador (BA)", "Conectividade e Living Lab"],
    ["Maceió (AL)", "Maceió Inteligente"],
    ["Teresina (PI)", "Teresina 2030"],
    ["Fortaleza (CE)", "Fortaleza 2040 e Smart City"],
    ["João Pessoa (PB)", "Lei de Cidades Inteligentes"],
    ["Natal (RN)", "Natal Cidade Digital"],
    ["Aracaju (SE)", "MapAju (Plataforma Multifinalitária)"],
    ["São Luís (MA)", "Maranhão Inteligente"],
    // NORTE
    ["Porto Velho (RO)", "Inclusão e Sustentabilidade"],
    ["Rio Branco (AC)", "Infraestrutura e Urbanismo"],
    ["Manaus (AM)", "Mobilidade Sustentável"],
    ["Boa Vista (RR)", "Planejamento e Zonas Urbanas"],
    ["Macapá (AP)", "Macapá Rumo aos 300 anos"],
    ["Belém (PA)", "Inovação Tecnológica e IoT"],
    ["Palmas (TO)", "Cidade Compacta e Sustentável"]
];

// Objeto cidadesData (Inalterado, mas verifique se todas as 27 cidades têm dados aqui)
const cidadesData = {
    // SUDESTE (Existentes)
    saopaulosp: {
        nome: "São Paulo",
        projetos: [
            "🌞 Painéis solares em 200 escolas municipais",
            "🚌 Frota de 1.000 ônibus elétricos",
            "📱 App SP156 para serviços urbanos",
            "♻️ Coleta seletiva inteligente com sensores"
        ],
        dados: "Redução de 25% nas emissões de CO₂ do transporte público"
    },
    riodejaneirorj: {
        nome: "Rio de Janeiro",
        projetos: [
            "🌊 Usina solar flutuante na Lagoa Rodrigo de Freitas",
            "🚴 Sistema de bikes elétricas compartilhadas",
            "📡 Centro de Operações Rio com IA",
            "🏢 Retrofit energético em prédios públicos"
        ],
        dados: "30% de economia energética em edifícios públicos"
    },
    vitoriaes: {
        nome: "Vitória",
        projetos: [
            "📊 Uso de Big Data para políticas públicas em saúde, educação e segurança",
            "💧 Monitoramento inteligente de recursos hídricos",
            "🛣️ Sistema de semáforos inteligentes"
        ],
        dados: "Aumento de 15% na eficiência dos serviços públicos monitorados"
    },
    belohorizontemg: {
        nome: "Belo Horizonte",
        projetos: [
            "🌐 Eixos de atuação em Governança Digital e Inclusão Digital",
            "🚌 Monitoramento de transporte público em tempo real",
            "💡 Iluminação pública com telegestão"
        ],
        dados: "50% de BH coberta por iluminação LED inteligente"
    },
    // SUL (Existentes)
    curitibapr: {
        nome: "Curitiba",
        projetos: [
            "🌳 Parques urbanos com energia solar",
            "🚌 Biarticulados Elétricos na frota de transporte",
            "🏠 Programa de casas sustentáveis"
        ],
        dados: "Referência mundial em transporte sustentável"
    },
    florianopolissc: {
        nome: "Florianópolis",
        projetos: [ // Alterado 'proje' para 'projetos'
            "💻 Alta pontuação em serviços públicos digitais (e-Gov)",
            "👥 Plataformas de participação cidadã online",
            "🌱 Incubação de startups de tecnologia verde"
        ],
        dados: "Mais de 70% dos serviços públicos disponíveis online"
    },
    portoalegrers: {
        nome: "Porto Alegre",
        projetos: [
            "🌧️ Plano de Adaptação Climática (PLAc)",
            "💡 Iluminação pública com eficiência energética",
            "🚨 Sistemas de segurança e monitoramento de áreas de risco"
        ],
        dados: "10% de redução no consumo energético municipal"
    },
    // CENTRO-OESTE (Existente)
    brasiliadf: {
        nome: "Brasília",
        projetos: [
            "💡 Troca de lâmpadas convencionais por LED com telegestão",
            "🚗 Corredores exclusivos para veículos elétricos",
            "📊 Dashboard de sustentabilidade em tempo real"
        ],
        dados: "40% da energia pública vem de fontes renováveis"
    },
    // NORDESTE (Existentes + Fortaleza)
    recifepe: {
        nome: "Recife",
        projetos: [
            "💻 Porto Digital: ecossistema de tecnologia e startups",
            "🚲 Projetos de mobilidade ativa (ciclofaixas e ciclovias)",
            "📱 Aplicativos de mobilidade urbana"
        ],
        dados: "Crescimento de 15% no ecossistema de startups anualmente"
    },
    salvadorba: {
        nome: "Salvador",
        projetos: [
            "🌐 Cidade certificada como inteligente (Smarter City)",
            "📡 Investimento em fibra óptica para Wi-Fi gratuito",
            "🧪 Living Lab para testes de soluções urbanas"
        ],
        dados: "Mais de 50 pontos de Wi-Fi gratuito em espaços públicos"
    },
    fortalezace: {
        nome: "Fortaleza",
        projetos: [
            "🏙️ Plano Fortaleza 2040 e Smart City",
            "🚴 Mobilidade urbana sustentável e integrada",
            "📈 Índice de Governança Municipal em destaque"
        ],
        dados: "Grande planejamento estratégico com foco no desenvolvimento de novos bairros e cidades inteligentes."
    },
    // NORTE (Existentes + Manaus)
    manausam: {
        nome: "Manaus",
        projetos: [
            "🚌 Renovação da frota de transporte público",
            "🌱 Plano de Arborização e sustentabilidade",
            "🛣️ Sistema de monitoramento de trânsito e fluidez"
        ],
        dados: "Foco em soluções smart e sustentáveis para a região metropolitana."
    },
    // Entradas para as outras cidades devem ser adicionadas aqui para evitar 'Cidade Desconhecida'.
    // Exemplo:
    teresinapi: { nome: "Teresina", projetos: ["Projeto Teresina 2030"], dados: "Em andamento" },
    maceioal: { nome: "Maceió", projetos: ["Maceió Inteligente"], dados: "Em andamento" },
    joaopessoapb: { nome: "João Pessoa", projetos: ["Lei de Cidades Inteligentes"], dados: "Em andamento" },
    natalrn: { nome: "Natal", projetos: ["Natal Cidade Digital"], dados: "Em andamento" },
    aracajuse: { nome: "Aracaju", projetos: ["MapAju"], dados: "Em andamento" },
    saoluisma: { nome: "São Luís", projetos: ["Maranhão Inteligente"], dados: "Em andamento" },
    campograndems: { nome: "Campo Grande", projetos: ["Planejamento Urbano e Zonas"], dados: "Em andamento" },
    cuiabamt: { nome: "Cuiabá", projetos: ["Monitoramento em Tecnologia e Inovação"], dados: "Em andamento" },
    goianiago: { nome: "Goiânia", projetos: ["Centro de Inteligência Tecnológica"], dados: "Em andamento" },
    portovelhoro: { nome: "Porto Velho", projetos: ["Inclusão e Sustentabilidade"], dados: "Em andamento" },
    riobrancoac: { nome: "Rio Branco", projetos: ["Infraestrutura e Urbanismo"], dados: "Em andamento" },
    boavistarr: { nome: "Boa Vista", projetos: ["Planejamento e Zonas Urbanas"], dados: "Em andamento" },
    macapaap: { nome: "Macapá", projetos: ["Macapá Rumo aos 300 anos"], dados: "Em andamento" },
    belempar: { nome: "Belém", projetos: ["Inovação Tecnológica e IoT"], dados: "Em andamento" },
    palmasto: { nome: "Palmas", projetos: ["Cidade Compacta e Sustentável"], dados: "Em andamento" }
    // Assegure-se de que todas as 27 cidades em 'cityLocations' tenham uma entrada aqui!
};

// Dados conteudosEducativos (Inalterado)
const conteudosEducativos = {
    iot: { /* ... (Seu conteúdo IoT) ... */ },
    energia: { /* ... (Seu conteúdo Energia) ... */ },
    mobilidade: { /* ... (Seu conteúdo Mobilidade) ... */ },
    reciclagem: { /* ... (Seu conteúdo Reciclagem) ... */ }
};

// Dados do Quiz (Inalterado)
let perguntaAtual = 0;
const perguntas = [
    {
        pergunta: "Qual tecnologia é mais eficiente para reduzir o consumo de energia em edifícios?",
        opcoes: ["A) Sensores de presença e iluminação LED", "B) Ar condicionado mais potente", "C) Mais janelas nos edifícios"],
        correta: 'a',
        explicacao: "Sensores de presença e LED podem reduzir até 60% do consumo energético."
    },
    {
        pergunta: "Qual é o principal benefício dos ônibus elétricos nas cidades?",
        opcoes: ["A) São mais baratos de comprar", "B) Reduzem poluição do ar e ruído", "C) Andam mais rápido"],
        correta: 'b',
        explicacao: "Ônibus elétricos eliminam emissões locais e reduzem significativamente a poluição sonora."
    },
    {
        pergunta: "O que são cidades inteligentes?",
        opcoes: ["A) Cidades com mais computadores", "B) Cidades que usam tecnologia para melhorar a qualidade de vida", "C) Cidades com internet mais rápida"],
        correta: 'b',
        explicacao: "Cidades inteligentes integram tecnologia, dados e inovação para criar ambientes urbanos mais eficientes e sustentáveis."
    }
];

// ===================================
// FUNÇÕES DE MAPA (Leaflet)
// ===================================

let map; // Variável global para o mapa Leaflet

/**
 * Inicializa o mapa Leaflet no container "map-container".
 */
function initMap() {
    // Verifica se o Leaflet (L) está carregado
    if (typeof L === 'undefined') {
        console.error("Leaflet não foi carregado. Certifique-se de que o CSS e o JS do Leaflet estão no HTML.");
        return;
    }
    
    // 1. Inicializa o mapa e centraliza no Brasil
    map = L.map('map-container', {
        minZoom: 4 // Limita o zoom mínimo
    }).setView([-14.235, -51.9253], 4); // [Lat, Lng], Zoom

    // 2. Adiciona o Tile Layer (Camada de Mapa) do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18
    }).addTo(map);

    // 3. Adiciona os Marcadores
    addCityMarkers();
}

/**
 * Cria e adiciona os marcadores (Markers) ao mapa Leaflet.
 */
function addCityMarkers() {
    // Ícone customizado L.divIcon para permitir animação CSS no marcador
    const customIcon = L.divIcon({
        className: 'city-pulse-icon', // Classe usada no CSS para estilização e pulso
        html: '<div class="city-dot-inner"></div>', // O elemento que será animado
        iconSize: [12, 12], // Tamanho base do ponto
        iconAnchor: [6, 6]  // Ponto de ancoragem (centro)
    });

    cityLocations.forEach((city) => {
        // Cria um marcador para cada cidade
        const marker = L.marker([city.lat, city.lng], {
            icon: customIcon, // Aplica o ícone customizado
            title: city.name
        }).addTo(map);

        // Adiciona o evento de clique para mostrar o modal
        marker.on('click', function() {
            showCityInfo(city.id);
        });
    });
}


// ===================================
// FUNÇÕES DE NAVEGAÇÃO
// ===================================

function showPage(pageId) {
    // Esconder todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('hidden');
    });
    
    // Mostrar página selecionada
    document.getElementById(pageId).classList.remove('hidden');

    // Se for a página do mapa, inicializa o Leaflet (se ainda não estiver)
    // Usamos um pequeno timeout para garantir que a div esteja visível e dimensionada antes de initMap
    if (pageId === 'mapa' && map === undefined) {
        setTimeout(() => {
             initMap();
        }, 50);
    }
}

// ===================================
// FUNÇÕES DO MODAL E CIDADES
// ===================================

function showCityInfo(cityKey) {
    const cidade = cidadesData[cityKey] || {
        nome: "Cidade Desconhecida",
        projetos: ["Nenhum projeto detalhado encontrado."],
        dados: "Nenhum impacto medido disponível."
    };
    
    document.getElementById('city-title').textContent = cidade.nome;
    
    let content = `
        <div class="space-y-4">
            <h4 class="font-bold text-purple-600 text-lg">Projetos Sustentáveis:</h4>
            <ul class="space-y-2">
                ${cidade.projetos.map(projeto => `<li class="flex items-start space-x-2"><span class="text-green-500">✓</span><span>${projeto}</span></li>`).join('')}
            </ul>
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                <h5 class="font-bold text-gray-800">Impacto Medido:</h5>
                <p class="text-gray-700">${cidade.dados}</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg">
                <p class="text-sm text-gray-600">📹 <strong>Vídeo disponível:</strong> Documentário sobre as inovações de ${cidade.nome} (Demo)</p>
            </div>
        </div>
    `;
    
    document.getElementById('city-content').innerHTML = content;
    document.getElementById('city-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('city-modal').classList.remove('active');
}

// ===================================
// FUNÇÕES DA CALCULADORA
// ===================================

function calcularPegada() {
    const transporte = parseFloat(document.getElementById('transporte').value) || 0;
    const energia = parseFloat(document.getElementById('energia').value) || 0;
    const residuos = parseFloat(document.getElementById('residuos').value) || 0;
    
    // Cálculo simplificado (kg CO2/ano)
    const pegadaTransporte = transporte * 365 * 0.2; // 0.2 kg CO2 por km
    const pegadaEnergia = energia * 12 * 0.5; // 0.5 kg CO2 por kWh
    const pegadaResiduos = residuos * 52 * 0.3; // 0.3 kg CO2 por kg de resíduo
    
    const pegadaTotal = pegadaTransporte + pegadaEnergia + pegadaResiduos;
    
    document.getElementById('pegada-resultado').textContent = `${pegadaTotal.toFixed(0)} kg CO₂/ano`;
    
    // Gerar dicas personalizadas
    let dicas = [];
    if (transporte > 15) {
        dicas.push("🚲 Use transporte público ou bicicleta para trajetos curtos");
        dicas.push("🚗 Considere um veículo elétrico ou híbrido");
    }
    if (energia > 120) {
        dicas.push("💡 Troque lâmpadas por LED e use sensores de presença");
        dicas.push("❄️ Ajuste o ar condicionado para 24°C");
    }
    if (residuos > 4) {
        dicas.push("♻️ Separe o lixo e composte resíduos orgânicos");
        dicas.push("📱 Use apps para descarte correto de eletrônicos");
    }
    
    if (dicas.length === 0) {
        dicas.push("🌟 Parabéns! Sua pegada está baixa. Continue assim!");
    }
    
    document.getElementById('dicas-personalizadas').innerHTML = dicas.map(dica => 
        `<div class="bg-green-50 border-l-4 border-green-400 p-3 rounded">${dica}</div>`
    ).join('');
    
    document.getElementById('resultado-calculadora').classList.remove('hidden');
}

// ===================================
// FUNÇÕES CIDADÃO ATIVO
// ===================================

function compartilharIdeia() {
    const titulo = document.getElementById('titulo-ideia').value;
    const descricao = document.getElementById('descricao-ideia').value;
    const categoria = document.getElementById('categoria-ideia').value;
    
    if (!titulo || !descricao || !categoria) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    const categoriaLabels = {
        energia: 'Energia Limpa',
        transporte: 'Mobilidade',
        residuos: 'Gestão de Resíduos',
        tecnologia: 'Tecnologia Urbana'
    };
    
    const novaIdeia = `
        <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-bold text-purple-600">${titulo}</h4>
            <p class="text-gray-600 text-sm mt-1">${descricao}</p>
            <div class="flex items-center justify-between mt-2">
                <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">${categoriaLabels[categoria]}</span>
                <div class="flex items-center space-x-2">
                    <button class="text-purple-600 hover:text-purple-800">👍 0</button>
                    <button class="text-gray-500 hover:text-gray-700">💬 0</button>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('lista-ideias').insertAdjacentHTML('afterbegin', novaIdeia);
    
    // Limpar formulário
    document.getElementById('titulo-ideia').value = '';
    document.getElementById('descricao-ideia').value = '';
    document.getElementById('categoria-ideia').value = '';
    
    // Feedback visual
    const feedback = document.createElement('div');
    feedback.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-4';
    feedback.textContent = 'Ideia compartilhada com sucesso! 🎉';
    document.querySelector('#cidadao .space-y-4').appendChild(feedback);
    
    setTimeout(() => feedback.remove(), 3000);
}

// ===================================
// FUNÇÕES DO QUIZ
// ===================================

function responderQuiz(resposta) {
    const pergunta = perguntas[perguntaAtual];
    const resultadoDiv = document.getElementById('resultado-quiz');
    
    if (resposta === pergunta.correta) {
        resultadoDiv.innerHTML = `
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                <strong>Correto!</strong> ${pergunta.explicacao}
            </div>
            <button onclick="proximaPergunta()" class="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                Próxima Pergunta
            </button>
        `;
    } else {
        resultadoDiv.innerHTML = `
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                <strong>Incorreto.</strong> ${pergunta.explicacao}
            </div>
            <button onclick="proximaPergunta()" class="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                Próxima Pergunta
            </button>
        `;
    }
    
    document.getElementById('pergunta-quiz').classList.add('hidden');
    resultadoDiv.classList.remove('hidden');
}

function proximaPergunta() {
    perguntaAtual = (perguntaAtual + 1) % perguntas.length;
    const pergunta = perguntas[perguntaAtual];
    
    document.getElementById('pergunta-quiz').innerHTML = `
        <h4 class="font-bold text-lg mb-3">${pergunta.pergunta}</h4>
        <div class="space-y-2">
            ${pergunta.opcoes.map((opcao, index) => 
                `<button onclick="responderQuiz('${String.fromCharCode(97 + index)}')" class="quiz-option w-full text-left p-3 border border-gray-300 rounded-lg hover:bg-blue-50">
                    ${opcao}
                </button>`
            ).join('')}
        </div>
    `;
    
    document.getElementById('pergunta-quiz').classList.remove('hidden');
    document.getElementById('resultado-quiz').classList.add('hidden');
}

// ===================================
// FUNÇÕES DE CONTEÚDO EDUCATIVO
// ===================================

function abrirConteudo(tipo) {
    const conteudo = conteudosEducativos[tipo];
    document.getElementById('content-title').textContent = conteudo.titulo;
    document.getElementById('content-body').innerHTML = conteudo.conteudo;
    document.getElementById('content-modal').classList.add('active');
}

function closeContentModal() {
    document.getElementById('content-modal').classList.remove('active');
}

// ===================================
// INICIALIZAÇÃO
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializa na página Home
    showPage('home');
});