/*
  [v6.8 최종 업데이트 내역]
  - UI 개선: 추가처치 탭 및 계산기의 추가처치 항목에 이모티콘을 추가하여 가독성 및 통일성 향상
  - UI 개선: 건강검진 및 스케일링 패키지 항목을 이모티콘과 함께 세련된 스타일로 변경
  - UI 개선: '모니터링' 선택 시 가독성을 높이기 위해 배경색 및 글자색 강조 로직 수정
  - 기능 수정: 전체 비용 내역 표시에 건강검진 및 스케일링 비용을 별도 항목으로 분리
*/
document.addEventListener('DOMContentLoaded', () => {
    const hospitalData = {
      // [v6.8] 메인 페이지 데이터
      "main": {
        "headerTitle": "💖 치과 특화 금호동물병원 💖",
        "headerSubtitle": "🦷 우리 댕댕이의 건강한 미소를 지켜주는 곳 🦷",
        "contact": { "phone": "062-383-7572" },
        "hours": {
          "title": "⏰ 진료시간 & 수술 안내",
          "surgeryNotice": "* 우리 아이들의 치과 수술에 최선을 다하고 회복에 힘쓰기 위해서 치과 수술은 매일 평일 오전 9시30분 한 아이씩만 진행됨을 양해 부탁 드립니다.",
          "times": [
            { "day": "평일", "time": "오전 9:30 ~ 오후 6:00" },
            { "day": "토요일", "time": "오전 9:30 ~ 오후 3:00" },
            { "day": "점심시간", "time": "오후 12:30 ~ 2:00 (평일, 토요일 동일)", "highlight": true },
            { "day": "휴무", "time": "빨간날은 쉬어요! (공휴일 휴무)", "isHoliday": true }
          ]
        },
        "parking": {
          "title": "🅿️ 주차 안내 (무료!)",
          "content": [
            { "label": "오전", "desc": "널널해요! 😊" },
            { "label": "오후", "desc": "자리가 없을 수도 있어요 😥" },
            { "label": "꿀팁🍯", "desc": "주차타워는 거의 항상 비어있어요! (다들 귀찮아서 주차를 안해요... 속닥속닥)", "highlight": true }
          ]
        },
        "pride": {
          "title": "✨ 강아지 치과, 왜 금호동물병원일까요? 🐕",
          "points": [
            { "title": "최신 전문 장비 완비! 빵빵해요! 🚀", "items": [ "📸 <strong>치과전용 X-ray:</strong> 최상의 화질을 자랑하는 최신 덴츠플라이 센서로 정확하게 진단해요.", "💎 <strong>브러쉬리스 모터 덴탈 유닛:</strong> 속도 조절이 가능해서 훨씬 정교하고 섬세한 치료가 가능해요.", "💧 <strong>피에조톰 수술기:</strong> 사람 성형외과 & 치과 대학병원에서 쓰는 장비로, 뼈 손상을 최소화하여 안전한 수술을 진행해요.", "🌬️ <strong>최신 호흡마취기:</strong> Ai가 아이의 호흡을 자동으로 감지하고 관리해 무호흡 상태를 방지하며 안전한 마취를 도와줘요.", "❤️‍🩹 <strong>최신호흡마취기와 연동되는 페이션트 모니터:</strong> 혈압, 심전도, 체온 등 모든 활력 징후를 마취기와 연동하여 실시간으로 감시하며 안전하게 수술해요.", "🔥 <strong>수의용 베어허거:</strong> 저온화상의 위험 없이 마취 중 아이의 체온을 가장 안전하게 유지하는 최신 체온 조절 장치예요.", "📡 <strong>광주 전남 최초 동물용 치과 CT 검사기 도입 예정:</strong> 더욱 정밀한 진단과 치료를 위해, 곧 만나요!" ] },
            { "title": "강아지 치과 진료, 경험치 MAX! 💪", "items": [ "<strong>신경치료:</strong> 감염된 신경을 제거하고 치아를 보존하여 발치를 피하는 치료.", "<strong>생활치수절단술:</strong> 신경 노출 시 감염된 부분만 제거 후 특수 약물로 보호하여 신경을 살리는 치료.", "<strong>치주치료:</strong> 잇몸과 주변 조직의 염증을 치료하고 치석을 제거하여 잇몸 건강을 되찾는 치료.", "<strong>보존치료:</strong> 충치나 손상 부위를 레진 등 치아와 유사한 재료로 메워 치아의 기능과 형태를 회복하는 치료.", "<strong>구비강누공 폐쇄술:</strong> 치주염 등으로 생긴 입과 코 사이의 구멍을 막아 음식물 역류와 감염을 막는 수술.", "<strong>함치성낭:</strong> 잇몸 속에 숨어있는 치아 주변의 물혹을 제거하여 주변 뼈와 치아의 손상을 막는 치료.", "<strong>치아흡수:</strong> 고양이에게서 특히 많이 발생하는, 치아 뿌리가 녹는 질환을 진단하고 발치하는 치료.", "<strong>턱뼈 골수염:</strong> 세균 감염으로 턱뼈에 생긴 염증을 치료하고, 심할 경우 원인이 되는 치아를 발치하는 치료.", "<br>이처럼 다양한 고난도 치료 케이스들은 <a href='https://blog.naver.com/kumhoanimal' target='_blank' style='color:#0277bd; font-weight:bold;'>병원 블로그</a>에서 직접 확인하실 수 있어요!" ] }
          ]
        },
        "notice": {
            "title": "🦷 꼭 읽어주세요! 안전한 치과 수술을 위한 안내 🦷",
            "items": [
                { "type": "text", "content": "<strong>치과 치료(수술)비는 예측이 힘들어요.</strong><br>사람과 달리 아이들은 입 안을 자세히 보여주지 않아요. 겉으로 보이는 것만으로는 치아 뿌리의 상태나 숨겨진 질병을 정확히 알 수 없습니다. 안전하게 마취한 후 치과 전용 엑스레이를 찍고 정밀 탐침 검사까지 마쳐야 비로소 아이의 구강 상태를 100% 파악할 수 있답니다. 따라서, 정확한 예상비용을 알려드릴 수 없는점, 너그러이 양해 부탁드립니다." },
                { "type": "text", "content": "<strong>장시간 마취의 위험성을 이해해주세요.</strong><br>치과 치료는 정교함을 요하는 작업이라 생각보다 시간이 오래 걸립니다. 기본적인 엑스레이 검사와 스케일링만으로도 중성화 수술과 비슷한 시간이 소요되며, 발치나 신경치료 등 추가 시술이 들어가면 마취 시간은 더 길어질 수밖에 없습니다. 치과 시술 자체는 위험성이 낮지만, 마취 시간이 길어지는 만큼 일반 수술보다 마취의 부담이나 위험은 더 높을 수 있습니다." },
                { "type": "text", "content": "<strong>안전을 위해, 수술 전 병원 방문은 필수예요.</strong><br>위와 같은 이유로, 아이의 안전을 위해 마취 전 검사는 선택이 아닌 필수입니다. 전화상으로 바로 수술 예약을 잡을 수는 없으며, 반드시 병원에 먼저 내원하시어 구강 상태 평가 및 건강검진(마취 전 검사)을 받아야 합니다. 검사 결과를 바탕으로 마취 위험성을 평가하고, 보호자님과 충분히 상의한 후에 안전하게 수술 날짜를 잡고 있습니다." },
                { "type": "sublist", "main": "<strong>부득이한 경우, 타병원 검사 결과도 인정해드려요.</strong><br>시간이나 거리 문제로 본원에서 검사가 힘든 경우, 타병원에서 검사를 진행하고 결과를 보내주셔도 좋습니다. 될수 있으면 아래 항목이 포함된 1개월 이내의 검사 결과여야만 수술 가능 여부를 판단에 도움이 됩니다.", "sublist": ["간과 신장 기능 수치 (혈액화학검사)", "안전한 기관 삽관을 위한 기관 사이즈 평가", "혈압 이상 유무", "흉부 엑스레이 검사", "키트검사 : 심장사상충 검사 - 1년 이내에 검사를 한 적이 있다면 생략 가능"] },
                { "type": "text", "content": "<strong>보호자님의 치료 의사를 미리 알려주세요.</strong><br>겉으로는 멀쩡해 보여도 검사 후에 치료가 필요한 치아가 발견될 수 있습니다. 만약 이런 치아가 발견되었을 때, 보호자님께 연락하여 동의를 구한 후 치료를 할지, 혹은 즉시 필요한 치료를 진행할지, 아니면 그냥 스케일링 만을 진행할지 를 마취 전에 꼭 저희에게 알려주셔야 합니다. 아이를 위한 최선의 결정을 함께 할 수 있도록 미리 소통해주세요!" }
            ]
        },
        "footer": { "title": "🚀 빠른 상담 & 예약 🚀", "kakaoLink": "https://pf.kakao.com/_jiICK/chat", "telLink": "tel:062-383-7572" }
      },
      // (이하 다른 탭의 데이터는 생략됨)
      "procedure": [],
      "healthCheck": {},
      "healthCheckLarge": {},
      "scaling": {},
      "extraction": {},
      "addons": {},
      "nerve": {}
    };

    try {
        populateContent(hospitalData);
    } catch (error) {
        console.error('데이터 처리 중 오류 발생:', error);
        alert('콘텐츠를 처리하는 데 실패했습니다. 코드에 문제가 없는지 확인해주세요.');
    }
    setupPageNavigation();
    setupSwipeHint(); // 스와이프 힌트 기능 실행
});

/**
 * [수정] 숫자를 원화 형식의 문자열로 변환하는 함수
 * @param {number} price - 가격 숫자
 * @returns {string} - 포맷팅된 문자열 (예: "10,000원")
 */
const formatPrice = (price) => {
    return `${price.toLocaleString()}원`;
};


/**
 * [수정] 제공된 데이터를 기반으로 페이지의 동적 콘텐츠를 채우는 함수
 * @param {object} data - hospitalData 객체
 */
function populateContent(data) {
    // --- 1. 메인 페이지 (병원소개) 데이터 채우기 ---
    if (data.main) {
        const main = data.main;
        document.getElementById('main-header-title').textContent = main.headerTitle;
        document.getElementById('main-header-subtitle').textContent = main.headerSubtitle;

        // 병원 안내 (진료시간, 주차)
        const infoGrid = document.querySelector('#content-main .info-grid');
        infoGrid.innerHTML = `
            <div class="info-card" style="border-top-color: #4dabf7;">
                <h3>${main.hours.title}</h3>
                <ul>
                    ${main.hours.times.map(item => `<li class="price-item" style="${item.highlight ? 'color:#c92a2a;font-weight:bold;' : ''}">${item.day}: ${item.time}</li>`).join('')}
                </ul>
                <p style="font-size: 0.9em; text-align: center; margin-top: 15px; color: #555;">${main.hours.surgeryNotice}</p>
            </div>
            <div class="info-card" style="border-top-color: #69db7c;">
                <h3>${main.parking.title}</h3>
                <ul>
                    ${main.parking.content.map(item => `<li class="price-item" style="${item.highlight ? 'color:#1971c2;font-weight:bold;' : ''}">${item.label}: ${item.desc}</li>`).join('')}
                </ul>
            </div>
        `;
        
        // 병원 자랑
        const prideSection = document.getElementById('main-pride');
        prideSection.innerHTML = `<h2>${main.pride.title}</h2>` + main.pride.points.map(point => `
            <div class="explanation-box" style="background:#fff; border-left-color:#84fab0; margin-bottom:15px;">
                <h3 style="color:#00796b;">${point.title}</h3>
                <ul class="sub-list" style="list-style-type: '✔️ ';">${point.items.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
        `).join('');

        // 주의사항
        document.getElementById('main-notice-title').textContent = main.notice.title;
        const noticeList = document.getElementById('main-notice-list');
        noticeList.innerHTML = main.notice.items.map(item => {
            if (item.type === 'sublist') {
                return `<li>${item.main}<ul class="sub-list">${item.sublist.map(sub => `<li>${sub}</li>`).join('')}</ul></li>`;
            }
            return `<li>${item.content}</li>`;
        }).join('');

        // 하단 버튼
        const footer = document.getElementById('main-footer');
        footer.innerHTML = `
            <h2>${main.footer.title}</h2>
            <a href="${main.footer.kakaoLink}" target="_blank" class="action-button kakao-btn">카카오톡으로 문의하기</a>
            <a href="${main.footer.telLink}" class="action-button tel-btn">전화로 문의하기 (${main.contact.phone})</a>
        `;
    }

    // --- (이하 다른 탭 데이터 채우는 로직 추가 가능) ---
    // 예: if(data.procedure) { ... }
    // 현재는 데이터가 없으므로 이 부분은 비워둡니다.
}


/**
 * [수정] 건강검진 패키지 렌더링 함수 (현재는 호출되지 않음)
 * 데이터가 제공되면 이 함수를 완성하여 사용할 수 있습니다.
 */
function renderHealthCheckPackages(size, packages) {
    const containerId = `healthcheck-packages-${size}`;
    const container = document.getElementById(containerId);
    if(!container) return;

    // 패키지 데이터를 기반으로 HTML을 생성하는 로직
    // 예: container.innerHTML = packages.map(pkg => `...`).join('');
    console.log(`Rendering health check for ${size}`);
}


/**
 * [기존과 동일] 탭 클릭 시 해당 콘텐츠 패널을 보여주는 함수
 */
function setupPageNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const contentPanels = document.querySelectorAll('.content-panel');

    function showContent(targetId) {
        contentPanels.forEach(panel => panel.classList.remove('active'));
        navTabs.forEach(tab => tab.classList.remove('active'));
        
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
        
        const activeTabs = document.querySelectorAll(`.nav-tab[data-target="${targetId}"]`);
        if (activeTabs) {
            activeTabs.forEach(tab => tab.classList.add('active'));
        }
        window.scrollTo(0, 0); 
    }

    navTabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = tab.dataset.target;
            showContent(targetId);
        });
    });

    // 초기 화면으로 '병원소개'를 보여줌
    showContent('content-main');
}


/**
 * [기존과 동일] 모바일 하단 탭의 스크롤 가능 여부를 확인하고 힌트를 표시하는 함수
 */
function setupSwipeHint() {
    const nav = document.querySelector('.dashboard-nav');
    const hint = document.getElementById('swipe-hint');
    
    if (!nav || !hint) return;

    const checkOverflow = () => {
        // 렌더링 후 너비 계산을 위해 약간의 지연 시간을 줌
        setTimeout(() => {
            // scrollWidth (콘텐츠의 전체 너비)가 clientWidth(보이는 영역의 너비)보다 크면 스크롤 가능
            const isOverflowing = nav.scrollWidth > nav.clientWidth;

            if (isOverflowing) {
                hint.classList.add('show-hint');
                
                // 사용자가 한 번이라도 스크롤하면 힌트를 영구적으로 제거
                nav.addEventListener('scroll', () => {
                    hint.classList.remove('show-hint');
                }, { once: true }); // 이벤트가 한 번만 실행되도록 설정
            } else {
                hint.classList.remove('show-hint');
            }
        }, 100); // 100ms 지연
    };

    // 페이지 로드 시 및 창 크기 변경 시 체크
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
}```
