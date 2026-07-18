// Shuffle array function
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const courses = [
  {
    id: 'data-analysis',
    topic: '데이터 분석',
    lessons: [
      {
        title: '데이터 분석 기초 이해',
        tag: '기초',
        description: '데이터 분석의 흐름, 주요 도구, 기초 개념을 학습합니다.',
        points: ['데이터 분석 단계 이해', '주요 도구 소개', '문제 정의'],
        quiz: {
          question: '데이터 분석의 첫 단계는 무엇인가요?',
          options: ['데이터 수집', '데이터 시각화', '문제 정의', '보고서 작성'],
          answer: 2
        }
      },
      {
        title: 'SQL 기본 문법',
        tag: '기초',
        description: 'SQL SELECT, WHERE, ORDER BY 등 기본 쿼리를 배웁니다.',
        points: ['SELECT 문법', 'WHERE 조건', 'ORDER BY 정렬'],
        quiz: {
          question: 'SQL에서 데이터를 선택하는 명령어는?',
          options: ['SELECT', 'UPDATE', 'DELETE', 'INSERT'],
          answer: 0
        }
      },
      {
        title: 'SQL JOIN과 GROUP BY',
        tag: '실습',
        description: '여러 테이블을 연결하고 데이터를 그룹화합니다.',
        points: ['INNER JOIN', 'LEFT JOIN', 'GROUP BY', 'HAVING'],
        quiz: {
          question: 'INNER JOIN의 역할은?',
          options: ['모든 데이터 포함', '교집합만 반환', '왼쪽 데이터 포함', '오른쪽 데이터 포함'],
          answer: 1
        }
      },
      {
        title: '엑셀 함수와 피벗 테이블',
        tag: '실습',
        description: 'VLOOKUP, SUMIF 등 함수와 피벗 테이블을 활용합니다.',
        points: ['VLOOKUP 함수', 'SUMIF 함수', '피벗 테이블 생성'],
        quiz: {
          question: 'VLOOKUP의 첫 번째 인자는 무엇인가요?',
          options: ['범위', '검색값', '반환 열', '근사값'],
          answer: 1
        }
      },
      {
        title: '파이썬 기본 문법',
        tag: '기초',
        description: '파이썬의 변수, 자료형, 제어문을 배웁니다.',
        points: ['변수와 자료형', 'if/for/while 문', '함수 정의'],
        quiz: {
          question: '파이썬에서 리스트를 생성하는 방법은?',
          options: ['list()', '[]', 'array()', '모두 가능'],
          answer: 3
        }
      },
      {
        title: 'Pandas 소개 및 기초',
        tag: '실습',
        description: '판다스 라이브러리로 데이터 읽기와 기본 조작을 배웁니다.',
        points: ['DataFrame 생성', 'CSV 불러오기', '기본 조회'],
        quiz: {
          question: '파이썬 pandas에서 데이터를 불러오기 위한 함수는?',
          options: ['read_csv()', 'read_data()', 'load_csv()', 'get_csv()'],
          answer: 0
        }
      },
      {
        title: '데이터 정제 및 결측치 처리',
        tag: '실습',
        description: '결측치 처리와 데이터 정제 기법을 배웁니다.',
        points: ['결측치 감지', '결측치 제거', '결측치 대체'],
        quiz: {
          question: '결측치를 감지하는 판다스 함수는?',
          options: ['is_null()', 'isnull()', 'null()', 'find_null()'],
          answer: 1
        }
      },
      {
        title: '데이터 타입 변환 및 정규화',
        tag: '실습',
        description: '데이터 타입을 변환하고 값을 정규화합니다.',
        points: ['astype() 사용법', '정규화 기법', 'One-Hot 인코딩'],
        quiz: {
          question: '데이터를 0과 1 사이로 정규화하는 방법은?',
          options: ['표준화', 'Min-Max 정규화', '로그 변환', '제곱근 변환'],
          answer: 1
        }
      },
      {
        title: '통계 기초 및 확률분포',
        tag: '기초',
        description: '평균, 표준편차, 확률분포 개념을 배웁니다.',
        points: ['평균과 중앙값', '표준편차', '정규분포'],
        quiz: {
          question: '표준편차는 무엇을 나타내나요?',
          options: ['평균값', '데이터 산포도', '최댓값', '최솟값'],
          answer: 1
        }
      },
      {
        title: 'Matplotlib으로 기본 시각화',
        tag: '실습',
        description: '선 그래프, 막대 그래프 등을 그립니다.',
        points: ['선 그래프', '막대 그래프', '제목과 라벨 설정'],
        quiz: {
          question: 'Matplotlib에서 그래프를 표시하는 함수는?',
          options: ['show()', 'print()', 'display()', 'render()'],
          answer: 0
        }
      },
      {
        title: 'Seaborn으로 고급 시각화',
        tag: '실습',
        description: '히스토그램, 박스플롯, 히트맵을 만듭니다.',
        points: ['히스토그램', '박스플롯', '히트맵'],
        quiz: {
          question: 'Seaborn은 어느 라이브러리의 확장판인가요?',
          options: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
          answer: 2
        }
      },
      {
        title: '상관관계와 회귀분석',
        tag: '실습',
        description: '변수 간의 상관관계를 분석하고 선형 회귀를 수행합니다.',
        points: ['상관계수 계산', '산점도 그리기', '회귀선 그리기'],
        quiz: {
          question: '상관계수의 범위는?',
          options: ['-1 ~ 1', '0 ~ 1', '-100 ~ 100', '모든 실수'],
          answer: 0
        }
      },
      {
        title: '가설 검정 기초',
        tag: '기초',
        description: 't-검정, 카이제곱 검정 등 기본 가설 검정을 배웁니다.',
        points: ['귀무가설과 대립가설', 'p-값 이해', 't-검정'],
        quiz: {
          question: 'p-값이 0.05보다 작으면?',
          options: ['귀무가설 채택', '귀무가설 기각', '결론 불가능', '추가 데이터 필요'],
          answer: 1
        }
      },
      {
        title: '데이터 분석 프로젝트 계획',
        tag: '프로젝트',
        description: '실제 프로젝트를 계획하는 방법을 배웁니다.',
        points: ['문제 정의', '데이터 수집 계획', '분석 방법 설계'],
        quiz: {
          question: '데이터 분석 프로젝트의 첫 단계는?',
          options: ['데이터 수집', '문제 정의', '시각화', '보고서 작성'],
          answer: 1
        }
      },
      {
        title: '공개 데이터셋 찾기',
        tag: '프로젝트',
        description: 'Kaggle, UCI 등에서 데이터셋을 찾습니다.',
        points: ['Kaggle 데이터셋', 'UCI Machine Learning', '정부 공개 데이터'],
        quiz: {
          question: 'Kaggle은 어떤 플랫폼인가요?',
          options: ['학습 커뮤니티', '데이터 경진대회', '클라우드 서비스', '모두 맞음'],
          answer: 3
        }
      },
      {
        title: '탐색적 데이터 분석(EDA)',
        tag: '프로젝트',
        description: '데이터의 기본 통계량과 분포를 파악합니다.',
        points: ['describe() 함수', '분포 확인', '이상치 탐지'],
        quiz: {
          question: 'EDA의 목표는?',
          options: ['모델 만들기', '데이터 이해', '결론 도출', '보고서 작성'],
          answer: 1
        }
      },
      {
        title: '데이터 시각화 심화',
        tag: '프로젝트',
        description: '복잡한 관계를 시각적으로 표현합니다.',
        points: ['대시보드 개념', '인터랙티브 시각화', '스토리텔링'],
        quiz: {
          question: '데이터 시각화의 목표는?',
          options: ['그래프 그리기', '정보 전달', '미학 추구', '모두 맞음'],
          answer: 3
        }
      },
      {
        title: '비즈니스 인사이트 도출',
        tag: '프로젝트',
        description: '데이터에서 유의미한 통찰을 찾습니다.',
        points: ['트렌드 발견', '패턴 분석', '의사결정 지원'],
        quiz: {
          question: '비즈니스 인사이트란?',
          options: ['데이터 정리', '유의미한 발견', '그래프 그리기', '코드 작성'],
          answer: 1
        }
      },
      {
        title: '보고서와 프레젠테이션',
        tag: '프로젝트',
        description: '분석 결과를 효과적으로 전달합니다.',
        points: ['보고서 작성법', 'PPT 구성', '핵심 요약'],
        quiz: {
          question: '좋은 보고서의 특징은?',
          options: ['길이가 길다', '명확하고 간결하다', '그래프가 많다', '기술 용어가 많다'],
          answer: 1
        }
      }
    ]
  },
  {
    id: 'ai-engineer',
    topic: 'AI 엔지니어',
    lessons: [
      {
        title: 'AI와 머신러닝 개요',
        tag: '기초',
        description: '인공지능과 머신러닝의 개념을 이해합니다.',
        points: ['AI의 정의', '머신러닝 vs 딥러닝', '학습 유형'],
        quiz: {
          question: '머신러닝의 학습 유형은 몇 가지인가요?',
          options: ['1가지', '2가지', '3가지', '5가지 이상'],
          answer: 2
        }
      },
      {
        title: '지도 학습의 이해',
        tag: '기초',
        description: '분류와 회귀 문제를 배웁니다.',
        points: ['분류 문제', '회귀 문제', '레이블 데이터'],
        quiz: {
          question: '이메일이 스팸인지 아닌지 판단하는 것은?',
          options: ['회귀', '분류', '군집화', '차원 축소'],
          answer: 1
        }
      },
      {
        title: '의사결정나무(Decision Tree)',
        tag: '실습',
        description: '의사결정나무 알고리즘을 배웁니다.',
        points: ['나무 구조', '엔트로피와 정보 이득', '과적합'],
        quiz: {
          question: '의사결정나무의 분할 기준은?',
          options: ['거리', '정보 이득', '시간', '확률'],
          answer: 1
        }
      },
      {
        title: '앙상블 학습 - 랜덤 포레스트',
        tag: '실습',
        description: '여러 의사결정나무를 조합합니다.',
        points: ['배깅', '랜덤 포레스트', '불순도 감소'],
        quiz: {
          question: '랜덤 포레스트는 어떤 방식을 사용하나요?',
          options: ['단일 모델', '앙상블', '계층화', '강화 학습'],
          answer: 1
        }
      },
      {
        title: '선형 회귀와 로지스틱 회귀',
        tag: '실습',
        description: '기본 회귀 알고리즘을 배웁니다.',
        points: ['선형 회귀', '로지스틱 회귀', '손실 함수'],
        quiz: {
          question: '로지스틱 회귀는 무엇을 푸나요?',
          options: ['연속값 예측', '분류 문제', '군집화', '시계열 분석'],
          answer: 1
        }
      },
      {
        title: 'SVM(Support Vector Machine)',
        tag: '실습',
        description: '서포트 벡터 머신을 배웁니다.',
        points: ['초평면', '마진 최대화', '커널 트릭'],
        quiz: {
          question: 'SVM의 목표는?',
          options: ['최소 오류', '최대 마진', '빠른 학습', '작은 모델'],
          answer: 1
        }
      },
      {
        title: 'K-Means 군집화',
        tag: '실습',
        description: '비지도 학습의 기본 알고리즘입니다.',
        points: ['군집 중심', 'K 결정', '수렴 조건'],
        quiz: {
          question: 'K-Means에서 K는 무엇인가요?',
          options: ['학습률', '군집 개수', '반복 횟수', '차원'],
          answer: 1
        }
      },
      {
        title: '신경망 기초',
        tag: '기초',
        description: '신경망의 구조와 원리를 배웁니다.',
        points: ['뉴런과 가중치', '활성화 함수', '역전파'],
        quiz: {
          question: '역전파는 무엇을 계산하나요?',
          options: ['순전파', '기울기', '예측값', '손실'],
          answer: 1
        }
      },
      {
        title: '활성화 함수와 손실 함수',
        tag: '기초',
        description: 'ReLU, Sigmoid, Cross-entropy 등을 배웁니다.',
        points: ['ReLU 함수', 'Sigmoid 함수', 'Cross-entropy'],
        quiz: {
          question: 'ReLU 함수의 출력은?',
          options: ['0~1', '-1~1', '0 이상의 입력값', '모두 가능'],
          answer: 2
        }
      },
      {
        title: 'TensorFlow 설치 및 기초',
        tag: '실습',
        description: '텐서플로우와 케라스를 배웁니다.',
        points: ['TensorFlow 설치', 'Keras 모델', '기본 구조'],
        quiz: {
          question: 'Keras는 무엇인가요?',
          options: ['라이브러리', 'TensorFlow 고수준 API', '프레임워크', '모두 맞음'],
          answer: 3
        }
      },
      {
        title: '모델 구축과 컴파일',
        tag: '실습',
        description: '신경망 모델을 정의하고 컴파일합니다.',
        points: ['Sequential 모델', '레이어 추가', '컴파일 설정'],
        quiz: {
          question: 'compile()의 역할은?',
          options: ['모델 실행', '학습 설정', '예측', '저장'],
          answer: 1
        }
      },
      {
        title: '모델 학습과 평가',
        tag: '실습',
        description: '데이터로 모델을 학습하고 평가합니다.',
        points: ['fit() 함수', 'epoch와 batch', '검증 데이터'],
        quiz: {
          question: '에포크는 무엇인가요?',
          options: ['배치 크기', '전체 데이터셋 학습 회수', '학습률', '레이어 개수'],
          answer: 1
        }
      },
      {
        title: '이미지 분류 - CNN 기초',
        tag: '실습',
        description: '합성곱 신경망으로 이미지를 분류합니다.',
        points: ['Convolution 레이어', 'Pooling 레이어', '필터와 특징맵'],
        quiz: {
          question: 'CNN의 강점은?',
          options: ['시계열 분석', '이미지 처리', '텍스트 분석', '회귀'],
          answer: 1
        }
      },
      {
        title: '사전학습 모델 활용',
        tag: '실습',
        description: 'VGG, ResNet 등 사전학습 모델을 사용합니다.',
        points: ['전이 학습', '사전학습 모델', '미세 조정'],
        quiz: {
          question: '전이 학습의 장점은?',
          options: ['빠른 학습', '데이터 절약', '성능 향상', '모두 맞음'],
          answer: 3
        }
      },
      {
        title: '자연어 처리 기초',
        tag: '기초',
        description: '텍스트 처리의 기본 개념을 배웁니다.',
        points: ['토큰화', '원-핫 인코딩', '단어 임베딩'],
        quiz: {
          question: '단어 임베딩은 무엇을 생성하나요?',
          options: ['텍스트', '벡터', '이미지', '숫자'],
          answer: 1
        }
      },
      {
        title: 'RNN과 LSTM',
        tag: '실습',
        description: '순환 신경망으로 시계열을 학습합니다.',
        points: ['순환 구조', '기울기 소실', 'LSTM 셀'],
        quiz: {
          question: 'LSTM이 해결하는 문제는?',
          options: ['과적합', '기울기 소실', '수렴 속도', '메모리'],
          answer: 1
        }
      },
      {
        title: '모델 최적화와 정규화',
        tag: '실습',
        description: '과적합을 방지하고 모델을 최적화합니다.',
        points: ['드롭아웃', 'L1/L2 정규화', '배치 정규화'],
        quiz: {
          question: '드롭아웃의 목표는?',
          options: ['학습 가속화', '과적합 방지', '정확도 향상', '계산 효율'],
          answer: 1
        }
      },
      {
        title: '모델 저장과 로드',
        tag: '실습',
        description: '학습한 모델을 저장하고 불러옵니다.',
        points: ['체크포인트', 'HDF5 형식', '직렬화'],
        quiz: {
          question: '모델 저장의 이유는?',
          options: ['학습 재개', '배포', '공유', '모두 맞음'],
          answer: 3
        }
      },
      {
        title: '하이퍼파라미터 튜닝',
        tag: '고급',
        description: '최적의 하이퍼파라미터를 찾습니다.',
        points: ['그리드 서치', '랜덤 서치', '베이지안 최적화'],
        quiz: {
          question: '하이퍼파라미터 튜닝의 목표는?',
          options: ['모델 단순화', '최적 성능', '학습 속도', '메모리 감소'],
          answer: 1
        }
      },
      {
        title: '모델 배포 기초',
        tag: '고급',
        description: 'Flask로 간단한 API를 만듭니다.',
        points: ['Flask 기초', 'JSON 요청', '예측 응답'],
        quiz: {
          question: 'Flask의 역할은?',
          options: ['데이터 분석', '웹 프레임워크', '머신러닝', 'UI 디자인'],
          answer: 1
        }
      }
    ]
  },
  {
    id: 'security',
    topic: '사이버 보안',
    lessons: [
      {
        title: '사이버 보안 개요',
        tag: '기초',
        description: '사이버 보안의 역할과 중요성을 배웁니다.',
        points: ['보안 위협 유형', '정보보호 원칙', '산업 표준'],
        quiz: {
          question: '정보보호의 3대 원칙은?',
          options: ['기밀성, 무결성, 가용성', '암호화, 서명, 검증', '방화벽, 안티바이러스, VPN', '사용자, 네트워크, 시스템'],
          answer: 0
        }
      },
      {
        title: '네트워크 기초',
        tag: '기초',
        description: 'OSI 모델과 네트워크 계층을 배웁니다.',
        points: ['OSI 7계층', 'TCP/IP 모델', '패킷 구조'],
        quiz: {
          question: 'OSI 모델의 계층 수는?',
          options: ['5개', '6개', '7개', '8개'],
          answer: 2
        }
      },
      {
        title: '암호화 기초',
        tag: '기초',
        description: '대칭키와 공개키 암호화를 배웁니다.',
        points: ['대칭키 암호', '공개키 암호', 'RSA'],
        quiz: {
          question: '공개키 암호의 장점은?',
          options: ['빠르다', '키 전송 안전', '간단하다', '보안성 낮음'],
          answer: 1
        }
      },
      {
        title: '해시 함수와 전자서명',
        tag: '기초',
        description: '데이터 무결성을 보장하는 기법을 배웁니다.',
        points: ['해시 함수 특성', '전자서명 원리', 'SHA-256'],
        quiz: {
          question: '해시 함수의 특성 중 가장 중요한 것은?',
          options: ['빠르다', '일방향성', '압축된다', '가역적이다'],
          answer: 1
        }
      },
      {
        title: 'SSL/TLS 프로토콜',
        tag: '실습',
        description: '안전한 통신 프로토콜을 배웁니다.',
        points: ['SSL/TLS 핸드셰이크', '인증서', 'HTTPS'],
        quiz: {
          question: 'HTTPS에서 S는 무엇을 의미하나요?',
          options: ['Standard', 'Secure', 'Server', 'Session'],
          answer: 1
        }
      },
      {
        title: '방화벽과 접근제어',
        tag: '실습',
        description: '네트워크 보안 장치와 정책을 배웁니다.',
        points: ['방화벽 종류', 'ACL 설정', '포트 필터링'],
        quiz: {
          question: '방화벽의 주된 역할은?',
          options: ['바이러스 제거', '네트워크 접근 제어', '데이터 복구', '사용자 관리'],
          answer: 1
        }
      },
      {
        title: '침입 탐지 및 방지',
        tag: '실습',
        description: 'IDS/IPS 시스템을 배웁니다.',
        points: ['IDS vs IPS', '시그니처 기반 탐지', '이상치 탐지'],
        quiz: {
          question: 'IPS와 IDS의 차이는?',
          options: ['속도', '정확도', '탐지 vs 차단', '비용'],
          answer: 2
        }
      },
      {
        title: '운영체제 보안',
        tag: '실습',
        description: 'Windows/Linux 보안을 배웁니다.',
        points: ['권한 관리', '패치 관리', '파일 시스템 보안'],
        quiz: {
          question: '최소 권한의 원칙이란?',
          options: ['권한 최소화', '최소한의 필요 권한만 부여', '권한 차단', '권한 공유'],
          answer: 1
        }
      },
      {
        title: '웹 애플리케이션 보안',
        tag: '실습',
        description: 'SQL injection, XSS 등을 배웁니다.',
        points: ['OWASP Top 10', 'SQL Injection', 'XSS 공격'],
        quiz: {
          question: 'SQL Injection의 목표는?',
          options: ['속도 향상', '데이터베이스 침입', '사용자 계정 생성', '트래픽 증가'],
          answer: 1
        }
      },
      {
        title: 'Cross-Site Scripting (XSS)',
        tag: '실습',
        description: 'XSS 공격의 유형과 방어법을 배웁니다.',
        points: ['Stored XSS', 'Reflected XSS', 'DOM XSS'],
        quiz: {
          question: 'XSS 공격을 방어하는 방법은?',
          options: ['입력 검증', 'HTML 인코딩', 'CSP 설정', '모두 맞음'],
          answer: 3
        }
      },
      {
        title: 'Cross-Site Request Forgery (CSRF)',
        tag: '실습',
        description: 'CSRF 공격의 원리와 방어법을 배웁니다.',
        points: ['공격 메커니즘', 'CSRF 토큰', 'SameSite 쿠키'],
        quiz: {
          question: 'CSRF 공격 방어의 주요 방법은?',
          options: ['HTTPS 사용', '토큰 검증', '방화벽 설정', '비밀번호 변경'],
          answer: 1
        }
      },
      {
        title: '취약점 스캐닝',
        tag: '고급',
        description: 'Nmap, Burp Suite 등의 도구를 배웁니다.',
        points: ['포트 스캐닝', '서비스 탐지', '취약점 식별'],
        quiz: {
          question: 'Nmap은 무엇을 하나요?',
          options: ['웹 스캐닝', '포트 스캐닝', '패킷 분석', '로그 분석'],
          answer: 1
        }
      },
      {
        title: '침투 테스트 기초',
        tag: '고급',
        description: '윤리적 해킹의 기본을 배웁니다.',
        points: ['침투 테스트 절차', '리포팅', '법적 측면'],
        quiz: {
          question: '침투 테스트와 해킹의 차이는?',
          options: ['기술', '도구', '승인', '결과'],
          answer: 2
        }
      },
      {
        title: '사회공학 공격',
        tag: '기초',
        description: '피싱, 스팸 등의 공격 방식을 배웁니다.',
        points: ['피싱 이메일', '스팸', '프리텍싱'],
        quiz: {
          question: '피싱의 목표는?',
          options: ['웹사이트 다운', '개인정보 탈취', '시스템 마비', '데이터 암호화'],
          answer: 1
        }
      },
      {
        title: '랜섬웨어 및 악성코드',
        tag: '기초',
        description: '악성코드의 유형과 영향을 배웁니다.',
        points: ['랜섬웨어', '트로이목마', '웜'],
        quiz: {
          question: '랜섬웨어의 특징은?',
          options: ['정보 유출', '시스템 성능 저하', '데이터 암호화', '권한 탈취'],
          answer: 2
        }
      },
      {
        title: '사이버 위협 분석',
        tag: '고급',
        description: 'APT, 제로데이 등의 위협을 배웁니다.',
        points: ['APT 공격', '제로데이 취약점', '위협 인텔리전스'],
        quiz: {
          question: 'APT는 무엇인가요?',
          options: ['알람 프로토콜', '고급 지속 위협', '공격 방지', '자동 패치'],
          answer: 1
        }
      },
      {
        title: '보안 정책과 컴플라이언스',
        tag: '기초',
        description: 'GDPR, ISO 27001 등을 배웁니다.',
        points: ['정보보호 정책', 'GDPR', 'ISO 27001'],
        quiz: {
          question: 'GDPR의 목표는?',
          options: ['시스템 성능', '개인정보 보호', '웹 성능', '클라우드 보안'],
          answer: 1
        }
      },
      {
        title: '사건 대응(Incident Response)',
        tag: '고급',
        description: '보안 사건에 대응하는 방법을 배웁니다.',
        points: ['사건 분류', '대응 절차', '포렌식'],
        quiz: {
          question: '사건 대응의 첫 단계는?',
          options: ['차단', '인식', '조사', '복구'],
          answer: 1
        }
      },
      {
        title: '로그 분석',
        tag: '고급',
        description: '시스템 로그에서 위협을 탐지합니다.',
        points: ['로그 수집', '로그 분석 도구', '이상 탐지'],
        quiz: {
          question: '로그 분석의 목표는?',
          options: ['성능 향상', '위협 탐지', '사용자 추적', '데이터 복구'],
          answer: 1
        }
      }
    ]
  },
  {
    id: 'uxui',
    topic: 'UX/UI 디자인',
    lessons: [
      {
        title: 'UX와 UI의 이해',
        tag: '기초',
        description: '사용자 경험과 인터페이스 디자인의 기본을 배웁니다.',
        points: ['UX의 정의', 'UI의 정의', 'UX와 UI의 관계'],
        quiz: {
          question: 'UX의 의미는?',
          options: ['사용자 인터페이스', '사용자 경험', '사용자 분석', '사용자 관리'],
          answer: 1
        }
      },
      {
        title: '디자인 사고(Design Thinking)',
        tag: '기초',
        description: '문제 해결 방법으로서의 디자인 사고를 배웁니다.',
        points: ['공감', '정의', '이상화', '프로토타입', '테스트'],
        quiz: {
          question: '디자인 사고의 첫 단계는?',
          options: ['정의', '공감', '프로토타입', '테스트'],
          answer: 1
        }
      },
      {
        title: '사용자 조사 방법',
        tag: '기초',
        description: '인터뷰, 설문, 관찰 등 조사 방법을 배웁니다.',
        points: ['심층 인터뷰', '설문조사', '관찰법'],
        quiz: {
          question: '정성적 조사 방법은?',
          options: ['설문조사', '통계 분석', '심층 인터뷰', '빅데이터'],
          answer: 2
        }
      },
      {
        title: '페르소나 만들기',
        tag: '실습',
        description: '대표 사용자 페르소나를 작성합니다.',
        points: ['데이터 수집', '패턴 분석', '페르소나 문서화'],
        quiz: {
          question: '페르소나 작성의 목적은?',
          options: ['마케팅', '사용자 대표화', '비용 절감', '기술 개발'],
          answer: 1
        }
      },
      {
        title: 'User Journey Map',
        tag: '실습',
        description: '사용자의 여정을 시각화합니다.',
        points: ['터치포인트', '감정곡선', '통찰점'],
        quiz: {
          question: 'User Journey Map의 목표는?',
          options: ['미학 추구', '사용자 흐름 이해', '비용 절감', '기술 선택'],
          answer: 1
        }
      },
      {
        title: '정보 설계(Information Architecture)',
        tag: '실습',
        description: '정보의 구조와 체계를 설계합니다.',
        points: ['사이트맵', '분류 체계', '네비게이션 설계'],
        quiz: {
          question: '정보 설계의 주요 목표는?',
          options: ['시각미', '정보 조직화', '속도', '비용'],
          answer: 1
        }
      },
      {
        title: '와이어프레임 기초',
        tag: '실습',
        description: '화면 레이아웃의 기본 구조를 그립니다.',
        points: ['레이아웃 그리드', 'UI 요소 배치', '상호작용 명시'],
        quiz: {
          question: '와이어프레임의 역할은?',
          options: ['최종 디자인', '구조 명시', '브랜드 표현', '마케팅'],
          answer: 1
        }
      },
      {
        title: '프로토타입 수준과 종류',
        tag: '기초',
        description: 'Low-fi에서 High-fi까지 프로토타입의 종류를 배웁니다.',
        points: ['Low-fidelity', 'Mid-fidelity', 'High-fidelity'],
        quiz: {
          question: 'High-fidelity 프로토타입의 특징은?',
          options: ['빠르게 만들기', '상세함', '종이로 만들기', '저비용'],
          answer: 1
        }
      },
      {
        title: 'Figma 기초',
        tag: '실습',
        description: 'Figma의 기본 기능을 배웁니다.',
        points: ['도형 그리기', '텍스트 추가', '레이어 관리'],
        quiz: {
          question: 'Figma는 어떤 도구인가요?',
          options: ['디자인 도구', '프로토타이핑 도구', '협업 플랫폼', '모두 맞음'],
          answer: 3
        }
      },
      {
        title: 'Figma 고급 기능',
        tag: '실습',
        description: '컴포넌트, 제약, 프로토타입 기능을 배웁니다.',
        points: ['컴포넌트 생성', '제약 설정', '프로토타입 링크'],
        quiz: {
          question: 'Figma 컴포넌트의 장점은?',
          options: ['일관성 유지', '효율성', '재사용성', '모두 맞음'],
          answer: 3
        }
      },
      {
        title: '색상 이론',
        tag: '기초',
        description: '색상 선택의 기본 원리를 배웁니다.',
        points: ['색상환', '대비', '조화'],
        quiz: {
          question: '색상의 심리적 효과는 중요한가?',
          options: ['아니다', '약간', '매우 중요하다', '상황에 따라'],
          answer: 2
        }
      },
      {
        title: '타이포그래피',
        tag: '기초',
        description: '폰트 선택과 텍스트 배치를 배웁니다.',
        points: ['폰트 선택', '계층 구조', '가독성'],
        quiz: {
          question: '좋은 타이포그래피의 특징은?',
          options: ['화려함', '가독성', '창의성', '크기'],
          answer: 1
        }
      },
      {
        title: '레이아웃과 그리드',
        tag: '실습',
        description: '12열 그리드 시스템과 반응형 레이아웃을 배웁니다.',
        points: ['그리드 시스템', '반응형 디자인', '정렬'],
        quiz: {
          question: '반응형 디자인의 목표는?',
          options: ['예쁨', '모든 화면에 적응', '빠름', '작음'],
          answer: 1
        }
      },
      {
        title: '아이콘 디자인',
        tag: '실습',
        description: '일관성 있는 아이콘을 만듭니다.',
        points: ['아이콘 스타일', '일관성', '명확성'],
        quiz: {
          question: '좋은 아이콘의 조건은?',
          options: ['크다', '복잡하다', '이해하기 쉽다', '화려하다'],
          answer: 2
        }
      },
      {
        title: '마이크로인터랙션',
        tag: '실습',
        description: '버튼 클릭, 로딩 애니메이션 등을 배웁니다.',
        points: ['피드백', '애니메이션', '사용성 개선'],
        quiz: {
          question: '마이크로인터랙션의 목표는?',
          options: ['시간 낭비', '사용자 피드백 제공', '화려함', '광고'],
          answer: 1
        }
      },
      {
        title: '접근성 디자인',
        tag: '기초',
        description: '모든 사용자를 위한 디자인을 배웁니다.',
        points: ['WCAG 표준', '색맹 고려', '키보드 네비게이션'],
        quiz: {
          question: '접근성 디자인의 의미는?',
          options: ['비용 절감', '모든 사람 배려', '시각미', '성능'],
          answer: 1
        }
      },
      {
        title: '사용성 테스트',
        tag: '고급',
        description: '사용자 테스트를 계획하고 실행합니다.',
        points: ['테스트 계획', '태스크 정의', '피드백 수집'],
        quiz: {
          question: '사용성 테스트의 목표는?',
          options: ['오류 찾기', '사용자 문제 발견', '성능 측정', '비용 계산'],
          answer: 1
        }
      },
      {
        title: '휴리스틱 평가',
        tag: '고급',
        description: '전문가 검토로 문제를 찾습니다.',
        points: ['닐센 10가지 휴리스틱', '문제 심각도', '개선 방안'],
        quiz: {
          question: '휴리스틱 평가의 특징은?',
          options: ['비용 많음', '빠르고 저렴', '완벽함', '사용자 참여'],
          answer: 1
        }
      },
      {
        title: 'A/B 테스트',
        tag: '고급',
        description: '두 가지 디자인을 비교합니다.',
        points: ['표본 크기', '통계적 유의성', '결과 해석'],
        quiz: {
          question: 'A/B 테스트의 목표는?',
          options: ['비용 절감', '더 나은 디자인 선택', '속도', '무관'],
          answer: 1
        }
      },
      {
        title: '디자인 시스템',
        tag: '고급',
        description: '일관성 있는 컴포넌트 라이브러리를 만듭니다.',
        points: ['컴포넌트 정의', '사용 가이드', '문서화'],
        quiz: {
          question: '디자인 시스템의 이점은?',
          options: ['일관성', '효율성', '확장성', '모두 맞음'],
          answer: 3
        }
      }
    ]
  }
];

const lessonNav = document.getElementById('lessonNav');
const lessonTopic = document.getElementById('lessonTopic');
const lessonTitle = document.getElementById('lessonTitle');
const lessonTag = document.getElementById('lessonTag');
const lessonDescription = document.getElementById('lessonDescription');
const lessonPoints = document.getElementById('lessonPoints');
const quizSection = document.getElementById('quizSection');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentCourseIndex = 0;
let currentLessonIndex = 0;
let currentLessons = [];

function renderLessonNav() {
  lessonNav.innerHTML = courses
    .map(
      (course, index) => {
        const activeClass = index === currentCourseIndex ? 'active' : '';
        return `<button class="lesson-link ${activeClass}" data-course="${index}">${course.topic}</button>`;
      }
    )
    .join('');

  const buttons = lessonNav.querySelectorAll('.lesson-link');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      currentCourseIndex = Number(button.dataset.course);
      currentLessonIndex = 0;
      currentLessons = shuffleArray(courses[currentCourseIndex].lessons);
      renderLesson();
    });
  });
}

function renderLesson() {
  renderLessonNav();
  const course = courses[currentCourseIndex];
  const totalLessons = currentLessons.length;
  const lesson = currentLessons[currentLessonIndex];

  lessonTopic.textContent = course.topic;
  lessonTitle.textContent = lesson.title;
  lessonTag.textContent = lesson.tag;
  lessonDescription.textContent = lesson.description;
  lessonPoints.innerHTML = lesson.points.map((point) => `<li>${point}</li>`).join('');

  quizSection.innerHTML = `
    <div class="quiz-card">
      <h3>퀴즈</h3>
      <p>${lesson.quiz.question}</p>
      <div class="quiz-options">
        ${lesson.quiz.options
          .map(
            (option, index) => `
            <button class="quiz-option" data-index="${index}">${option}</button>
          `
          )
          .join('')}
      </div>
      <p class="quiz-feedback" id="quizFeedback"></p>
    </div>
  `;

  const quizButtons = quizSection.querySelectorAll('.quiz-option');
  quizButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = Number(button.dataset.index);
      const feedback = document.getElementById('quizFeedback');
      if (selected === lesson.quiz.answer) {
        feedback.textContent = '정답입니다! 다음 단계로 넘어가 보세요.';
        feedback.className = 'quiz-feedback correct';
      } else {
        feedback.textContent = '틀렸습니다. 다시 생각해보세요.';
        feedback.className = 'quiz-feedback wrong';
      }
    });
  });

  progressText.textContent = `진행도: ${currentLessonIndex + 1}/${totalLessons}`;
  progressFill.style.width = `${((currentLessonIndex + 1) / totalLessons) * 100}%`;

  prevButton.disabled = currentLessonIndex === 0;
  nextButton.disabled = currentLessonIndex === totalLessons - 1;
}

prevButton.addEventListener('click', () => {
  if (currentLessonIndex > 0) {
    currentLessonIndex -= 1;
    renderLesson();
  }
});

nextButton.addEventListener('click', () => {
  if (currentLessonIndex < currentLessons.length - 1) {
    currentLessonIndex += 1;
    renderLesson();
  }
});

// Initialize with shuffled lessons
currentLessons = shuffleArray(courses[currentCourseIndex].lessons);
renderLessonNav();
renderLesson();
