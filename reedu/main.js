const jobs = [
  {
    title: '데이터 분석가',
    keywords: ['데이터', '분석', 'SQL', '엑셀', '파이썬', '시각화'],
    description: '데이터 분석가는 데이터를 수집, 정리, 해석하여 비즈니스 의사결정을 돕습니다.',
    skills: ['파이썬', 'SQL', '엑셀', '통계', 'Power BI', 'Tableau'],
    howTo: '기초 통계와 SQL을 익히고, 데이터셋을 분석하는 프로젝트를 만들어 보세요. 연습으로 실무 보고서를 작성하세요.',
    resources: [
      { label: '인프런 데이터 분석 강의', url: 'https://www.inflearn.com/courses/it-programming/data-analysis' },
      { label: '패스트캠퍼스 데이터 분석 실무', url: 'https://fastcampus.co.kr/dev_online_data' },
      { label: 'Kaggle 기본 과정', url: 'https://www.kaggle.com/learn/overview' }
    ]
  },
  {
    title: '인공지능 엔지니어',
    keywords: ['인공지능', 'AI', '머신러닝', '딥러닝', 'TensorFlow', 'PyTorch'],
    description: '인공지능 엔지니어는 AI 모델을 설계, 학습, 검증하고 실제 서비스에 적용합니다.',
    skills: ['Python', '머신러닝', '딥러닝', '데이터 전처리', '모델 배포'],
    howTo: '파이썬과 선형대수 기초를 확인한 다음, 간단한 모델을 만들어 데이터 기반 문제를 해결해보세요.',
    resources: [
      { label: 'TensorFlow 한국 튜토리얼', url: 'https://www.tensorflow.org/learn?hl=ko' },
      { label: 'FastCampus AI 코스', url: 'https://fastcampus.co.kr/dev_online_ai' },
      { label: 'Coursera 머신러닝 강의', url: 'https://www.coursera.org/learn/machine-learning' }
    ]
  },
  {
    title: '로봇 자동화 엔지니어',
    keywords: ['로봇', '자동화', 'RPA', 'PLC', '제어'],
    description: '로봇 자동화 엔지니어는 산업 및 사무 환경에서 자동화 시스템을 설계하고 관리합니다.',
    skills: ['RPA 도구', '제어공학', 'PLC', '파이썬 자동화', '시스템 설계'],
    howTo: '자동화 도구를 배우고 반복 업무를 자동화하는 작은 프로그램을 만들어 보세요. RPA 실습을 통해 업무 흐름을 정리하세요.',
    resources: [
      { label: 'UiPath RPA 입문', url: 'https://www.uipath.com/ko/learning' },
      { label: 'Automation Anywhere 학습 리소스', url: 'https://www.automationanywhere.com/ko/resources' },
      { label: 'Python 자동화 프로젝트', url: 'https://realpython.com/python-automation/' }
    ]
  },
  {
    title: '사이버 보안 전문가',
    keywords: ['사이버', '보안', 'network', '해킹', '취약점', '보안'],
    description: '사이버 보안 전문가는 시스템과 네트워크를 보호하며 위협을 탐지하고 대응합니다.',
    skills: ['네트워크 보안', '암호화', '취약점 분석', '모의 해킹', '보안 정책'],
    howTo: '네트워크와 운영체제 기초를 학습한 뒤, 모의 해킹과 보안 진단 실습을 반복하세요.',
    resources: [
      { label: 'KISA 보안 교육', url: 'https://www.kisa.or.kr' },
      { label: 'CTF 문제 풀이', url: 'https://ctftime.org' },
      { label: 'edwith 사이버 보안 기초', url: 'https://www.edwith.org' }
    ]
  },
  {
    title: 'UX/UI 디자이너',
    keywords: ['UX', 'UI', '디자인', '프로토타입', '사용자 경험', 'Figma'],
    description: 'UX/UI 디자이너는 사용자 중심의 인터페이스를 만들고 제품 경험을 개선합니다.',
    skills: ['디자인 원리', '와이어프레임', '프로토타입', '사용자 조사', 'Figma'],
    howTo: '사용자 조사와 화면 설계를 반복하며 실제 앱이나 웹사이트의 UI를 제작해 보세요.',
    resources: [
      { label: 'Figma 튜토리얼', url: 'https://www.figma.com/resources/learn-design/' },
      { label: 'UX 디자인 입문 강의', url: 'https://www.inflearn.com/course/ux-design' },
      { label: '디자인 포트폴리오 만들기', url: 'https://www.behance.net' }
    ]
  },
  {
    title: '프리랜서/크리에이터',
    keywords: ['프리랜서', '크리에이터', '콘텐츠', '온라인', '자유계약'],
    description: '프리랜서와 크리에이터는 개인의 전문성으로 프로젝트를 수행하거나 콘텐츠를 만들어 수익을 냅니다.',
    skills: ['기획', '콘텐츠 제작', '마케팅', '브랜딩', '커뮤니케이션'],
    howTo: '작은 프로젝트부터 시작해 포트폴리오를 쌓고, 온라인 플랫폼에서 활동을 확장하세요.',
    resources: [
      { label: '클래스101 콘텐츠 제작', url: 'https://class101.net' },
      { label: '브런치 글쓰기', url: 'https://brunch.co.kr' },
      { label: '프리랜서 마켓 활용법', url: 'https://www.freelancer.com' }
    ]
  }
];

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResult = document.getElementById('searchResult');

function renderJob(job) {
  const resourcesHtml = job.resources
    .map((resource) => `<li><a href="${resource.url}" target="_blank" rel="noreferrer">${resource.label}</a></li>`)
    .join('');

  return `
    <div class="result-card">
      <h3>${job.title}</h3>
      <p>${job.description}</p>
      <div class="result-block">
        <strong>필요 기술</strong>
        <p>${job.skills.join(', ')}</p>
      </div>
      <div class="result-block">
        <strong>학습 방법</strong>
        <p>${job.howTo}</p>
      </div>
      <div class="result-block">
        <strong>추천 코스</strong>
        <ul class="resource-list">${resourcesHtml}</ul>
      </div>
    </div>
  `;
}

function renderResults(results, query) {
  if (!results.length) {
    searchResult.innerHTML = `
      <div class="result-card empty">
        <h3>검색 결과 없음</h3>
        <p>"${query}"에 대한 결과를 찾을 수 없습니다. 다른 키워드로 검색해 보세요.</p>
      </div>
    `;
    return;
  }

  searchResult.innerHTML = results.map(renderJob).join('');
}

function getResourceText(job) {
  return job.resources
    .map((resource) => (typeof resource === 'string' ? resource : resource.label))
    .join(' ');
}

function searchJobs(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return jobs;

  return jobs.filter((job) => {
    const resourceText = getResourceText(job);
    const text = `${job.title} ${job.description} ${job.keywords.join(' ')} ${job.skills.join(' ')} ${resourceText}`.toLowerCase();
    return normalized.split(' ').every((term) => text.includes(term));
  });
}

function handleSearch() {
  const query = searchInput.value;
  const results = searchJobs(query);
  renderResults(results, query);
}

searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleSearch();
  }
});

renderResults(jobs, '추천 직업 정보');
