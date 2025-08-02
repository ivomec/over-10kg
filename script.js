/*
  [v7.0 최종 업데이트 내역]
  - 요청사항 반영: 건강검진(10~20kg) 탭에 '흥분/공격성'이 강한 아이들을 위한 추가 설명란 추가.
  - 요청사항 반영: 스케일링 탭 비용 안내에서 10kg 미만 항목 제거 및 10kg 이상 항목만 표시되도록 수정.
  - 데이터 보강: 스케일링 탭에 예시 비용 데이터를 추가하여 필터링 로직이 정상 작동하도록 구현.
  - 코드 개선: 콘텐츠 동적 생성 로직(populateContent)을 수정된 데이터 구조에 맞게 업데이트.
*/
document.addEventListener('DOMContentLoaded', () => {
    const hospitalData = {
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
      "procedure": [
          { "step": "1", "title": "마취 전 검사", "content": "안전한 마취를 위해 혈액검사, 흉부 엑스레이 등 필수적인 건강검진을 진행합니다." },
          { "step": "2", "title": "안전한 호흡 마취", "content": "최신 호흡마취기와 환자 감시장치를 이용하여 아이의 상태를 실시간으로 확인하며 안전하게 마취를 유지합니다." },
          { "step": "3", "title": "치과 방사선 촬영", "content": "눈에 보이지 않는 치아 뿌리와 잇몸뼈의 상태를 확인하기 위해 치과 전용 디지털 엑스레이를 촬영합니다." },
          { "step": "4", "title": "정밀 구강 검사 (Probing)", "content": "치과 탐침(Probe)을 사용하여 각 치아의 치주 포켓 깊이를 측정하고, 숨겨진 질환을 꼼꼼하게 찾아냅니다." },
          { "step": "5", "title": "스케일링 & 폴리싱", "content": "초음파 스케일러로 치석을 제거하고, 폴리싱으로 치아 표면을 매끄럽게 다듬어 치석이 다시 끼는 것을 방지합니다." },
          { "step": "6", "title": "필요 시 추가 치료", "content": "검사 결과에 따라 발치, 신경치료, 잇몸치료 등 아이에게 필요한 치료를 보호자님과 상의 하에 진행합니다." },
          { "step": "7", "title": "회복 및 퇴원", "content": "아이가 마취에서 안전하게 깨어날 때까지 집중적으로 돌본 후, 당일 퇴원을 원칙으로 합니다." }
      ],
      "healthCheckSmall": {
        "headerTitle": "마취 전 필수 건강검진 (10kg ~ 20kg)",
        "headerSubtitle": "우리 아이의 안전한 치과 치료를 위한 첫걸음입니다.",
        // --- ▼▼▼ JS 수정: 흥분/공격성 강한 아이를 위한 안내 문구 추가 ▼▼▼ ---
        "agitatedDogContent": "<p>간혹 아이가 너무 긴장하거나 흥분해서 엑스레이 테이블 위에서 안전한 촬영 자세를 잡기 어려운 경우가 있습니다. 아이의 스트레스를 줄이고 안전한 검사를 진행하는 것이 최우선이므로, 이런 경우에는 보호자님과 상의 하에 부득이하게 엑스레이 검사를 제외한 <strong>'20kg 이상 건강검진' 항목으로 검사를 진행할 수 있습니다.</strong> 이는 아이의 안전을 위한 조치이오니, 보호자님의 너른 양해 부탁드립니다. 🙏</p>",
        "explanation": {
            "title": "💡 건강검진, 왜 중요할까요?",
            "content": "안전한 마취를 위해서는 현재 아이의 건강 상태를 정확히 아는 것이 매우 중요합니다. 특히 간과 신장은 마취제 대사에 중요한 역할을 하므로, 기능 이상이 있는지 반드시 확인해야 합니다. 심장과 폐의 상태 역시 마취 위험도에 큰 영향을 미칩니다."
        }
      },
      // --- ▲▲▲ JS 수정 완료 ▲▲▲ ---
      "healthCheckLarge": {
        "headerTitle": "마취 전 필수 건강검진 (20kg 이상)",
        "headerSubtitle": "우리 아이의 안전한 치과 치료를 위한 첫걸음입니다.",
        "explanation": {
            "title": "💡 꼭 확인해주세요! 추가 검사 안내 💡",
            "content": "안전한 마취를 위해서는 현재 아이의 건강 상태를 정확히 아는 것이 매우 중요합니다. 특히 간과 신장은 마취제 대사에 중요한 역할을 하므로, 기능 이상이 있는지 반드시 확인해야 합니다. 심장과 폐의 상태 역시 마취 위험도에 큰 영향을 미칩니다."
        },
        "largeDogContent": "우리 듬직한 댕댕이들을 위한 플랜은 왜 따로 있냐구요~? 😚<br>몸집이 아주 큰 아이들은 일반 엑스레이 테이블에 올라가기가 어려워서, 부득이하게 엑스레이 검사를 제외한 맞춤 플랜으로 구성했답니다. 아이의 안전을 위한 결정이니 보호자님의 너른 양해 부탁드려요! 🙏"
      },
      "scaling": {
        "headerTitle": "스케일링 비용 안내 (10kg 이상)",
        "headerSubtitle": "치석 제거만으로도 아이의 구강 건강을 지킬 수 있습니다.",
        // --- ▼▼▼ JS 수정: 10kg 이상 데이터만 남도록 예시 데이터 추가 및 필터링 예정 ▼▼▼ ---
        "packages": [
            { "category": "🐶 5kg 미만 🐶", "name": "기본 스케일링", "price": 150000, "items": ["스케일링", "폴리싱", "기본 구강검사"] },
            { "category": "🐕 5kg ~ 10kg 미만 🐕", "name": "기본 스케일링", "price": 180000, "items": ["스케일링", "폴리싱", "기본 구강검사"] },
            { "category": "🐩 10kg 이상 🐩", "name": "기본 스케일링", "price": 220000, "items": ["스케일링", "폴리싱", "정밀 구강검사", "치과 엑스레이(2장)"] },
            { "category": "🐩 10kg 이상 🐩", "name": "프리미엄 스케일링", "price": 300000, "items": ["스케일링", "폴리싱", "정밀 구강검사", "치과 엑스레이(Full-mouth)", "불소도포"] }
        ],
        // --- ▲▲▲ JS 수정 완료 ▲▲▲ ---
        "explanation": {
            "title": "💡 스케일링, 꼭 해야 할까요?",
            "content": "치석은 단순한 치아의 때가 아니라, 수많은 세균 덩어리입니다. 방치할 경우 잇몸 염증을 일으키고, 심하면 치아를 지지하는 뼈를 녹여 발치로 이어질 수 있습니다. 또한, 치석 세균이 혈관을 타고 전신으로 퍼져 심장, 신장 등에 심각한 질병을 유발할 수도 있습니다. 정기적인 스케일링은 이러한 위험을 예방하는 가장 효과적인 방법입니다."
        }
      },
      "extraction": {
        "headerTitle": "치아 발치 수술비용 (10kg 이상)",
        "headerSubtitle": "정확한 진단 후 꼭 필요한 경우에만 발치를 진행합니다.",
        "costs": [
            { "name": "유치 발치", "price": "30,000" },
            { "name": "단순 발치 (앞니)", "price": "50,000" },
            { "name": "복합 발치 (어금니)", "price": "150,000" }
        ],
        "explanation": {
            "title": "💡 발치는 어떤 경우에 하나요?",
            "content": "치아를 살릴 수 없을 정도로 치주염이 심각하게 진행되었거나, 치아 뿌리에 염증(농양)이 생긴 경우, 혹은 치아가 부러져 신경이 노출되고 감염된 경우에 발치를 고려합니다. 발치는 아이의 고통을 덜어주고, 주변의 건강한 치아와 잇몸을 보호하기 위한 최후의 치료 방법입니다."
        }
      },
      "addons": {
        "headerTitle": "추가 처치 비용 (10kg 이상)",
        "headerSubtitle": "아이의 상태에 따라 필요한 추가적인 처치 항목입니다.",
        "costs": [
            { "name": "치주염 주사", "price": "30,000" },
            { "name": "회복 촉진 레이저", "price": "40,000" },
            { "name": "수술 후 내복약 (3일)", "price": "25,000" }
        ],
        "explanation": {
            "title": "💡 추가 처치는 무엇인가요?",
            "content": "치과 치료 과정에서 기본적인 스케일링, 발치 외에 추가적으로 필요한 의료 처치를 의미합니다. 예를 들어, 심한 염증을 가라앉히기 위한 약물 처치, 수술 부위의 빠른 회복을 돕는 레이저 치료 등이 포함될 수 있습니다. 모든 추가 처치는 보호자님께 충분히 설명하고 동의를 얻은 후에 진행됩니다."
        }
      },
      "nerve": {
        "headerTitle": "신경 및 보존 치료",
        "headerSubtitle": "소중한 자연치아를 최대한 살리는 것을 목표로 합니다.",
        "costs": [
            { "name": "신경 치료 (전치부)", "price": "300,000" },
            { "name": "신경 치료 (구치부)", "price": "500,000" },
            { "name": "레진", "price": "100,000" }
        ],
        "explanation": {
            "title": "💡 치아를 살리는 치료가 가능한가요?",
            "content": "네, 가능합니다. 치아가 부러지거나 충치가 깊어 신경이 노출되거나 감염되었더라도, 상태에 따라 신경치료를 통해 발치하지 않고 치아를 보존할 수 있습니다. 이는 아이가 자신의 치아로 음식을 씹는 즐거움을 계속 누릴 수 있도록 돕는 매우 중요한 치료입니다."
        }
      }
    };

    try {
        populateContent(hospitalData);
    } catch (error) {
        console.error('데이터 처리 중 오류 발생:', error);
        alert('콘텐츠를 처리하는 데 실패했습니다. 코드에 문제가 없는지 확인해주세요.');
    }
    setupPageNavigation();
    setupSwipeHint();
});

const formatPrice = (price) => {
    if (typeof price === 'number') {
        return `${price.toLocaleString()}원`;
    }
    return `${price}원`;
};

function populateContent(data) {
    // --- 1. 메인 페이지 ---
    if (data.main) {
        const main = data.main;
        document.getElementById('main-header-title').innerHTML = main.headerTitle;
        document.getElementById('main-header-subtitle').innerHTML = main.headerSubtitle;

        const infoGrid = document.querySelector('#content-main .info-grid');
        infoGrid.innerHTML = `
            <div class="info-card" style="border-top-color: #4dabf7;">
                <h3>${main.hours.title}</h3>
                <ul>${main.hours.times.map(item => `<li class="price-item" style="${item.highlight ? 'color:#c92a2a;font-weight:bold;' : ''}"><span class="price-label">${item.day}</span> <span class="price-value">${item.time}</span></li>`).join('')}</ul>
                <p style="font-size: 0.9em; text-align: center; margin-top: 15px; color: #555;">${main.hours.surgeryNotice}</p>
            </div>
            <div class="info-card" style="border-top-color: #69db7c;">
                <h3>${main.parking.title}</h3>
                <ul>${main.parking.content.map(item => `<li class="price-item" style="${item.highlight ? 'color:#1971c2;font-weight:bold;' : ''}"><span class="price-label">${item.label}</span> <span class="price-value">${item.desc}</span></li>`).join('')}</ul>
            </div>
        `;
        
        const prideSection = document.getElementById('main-pride');
        prideSection.innerHTML = `<h2>${main.pride.title}</h2>` + main.pride.points.map(point => `
            <div class="explanation-box" style="background:#fff; border-left-color:#84fab0; margin-bottom:15px;">
                <h3 style="color:#00796b; font-size: 1.3em;">${point.title}</h3>
                <ul class="sub-list" style="list-style-type: '✔️ ';">${point.items.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
        `).join('');

        document.getElementById('main-notice-title').innerHTML = main.notice.title;
        const noticeList = document.getElementById('main-notice-list');
        noticeList.innerHTML = main.notice.items.map(item => {
            if (item.type === 'sublist') {
                return `<li>${item.main}<ul class="sub-list">${item.sublist.map(sub => `<li>${sub}</li>`).join('')}</ul></li>`;
            }
            return `<li>${item.content}</li>`;
        }).join('');

        const footer = document.getElementById('main-footer');
        footer.innerHTML = `
            <h2>${main.footer.title}</h2>
            <a href="${main.footer.kakaoLink}" target="_blank" class="action-button kakao-btn">카카오톡으로 문의하기</a>
            <a href="${main.footer.telLink}" class="action-button tel-btn">전화로 문의하기 (${main.contact.phone})</a>
        `;
    }
    
    // --- 2. 수술 과정 ---
    if (data.procedure) {
        const timeline = document.querySelector('#content-procedure .procedure-timeline');
        timeline.innerHTML = data.procedure.map(item => `
            <div class="timeline-item" data-step="${item.step}">
                <h3>${item.title}</h3>
                <div class="timeline-content">${item.content}</div>
            </div>
        `).join('');
    }

    // --- 3. 건강검진 (10kg ~ 20kg) ---
    if (data.healthCheckSmall) {
        const hc = data.healthCheckSmall;
        document.getElementById('healthcheck-header-title-small').textContent = hc.headerTitle;
        document.getElementById('healthcheck-header-subtitle-small').textContent = hc.headerSubtitle;

        // ▼▼▼ JS 수정: 추가된 설명 섹션 내용 채우기 ▼▼▼
        const agitatedDogBox = document.getElementById('small-dog-agitated-explanation');
        if (agitatedDogBox && hc.agitatedDogContent) {
            agitatedDogBox.innerHTML = `<h2 style="color: #fb8c00;">😥 흥분이 심하거나 사나워서 검사가 힘든 경우</h2>${hc.agitatedDogContent}`;
        }
        
        const expBox = document.getElementById('healthcheck-explanation-box-small');
        if (expBox && hc.explanation) {
            expBox.innerHTML = `<h2>${hc.explanation.title}</h2><p>${hc.explanation.content}</p>`;
        }
        // ▲▲▲ JS 수정 완료 ▲▲▲
    }
    
    // --- 4. 건강검진 (20kg 이상) ---
    if (data.healthCheckLarge) {
        const hc = data.healthCheckLarge;
        document.getElementById('healthcheck-header-title-large').textContent = hc.headerTitle;
        document.getElementById('healthcheck-header-subtitle-large').textContent = hc.headerSubtitle;
        document.getElementById('large-dog-explanation-content').innerHTML = `<p>${hc.largeDogContent}</p>`;
        const expBox = document.getElementById('healthcheck-explanation-box-large');
        expBox.innerHTML = `<h2>${hc.explanation.title}</h2><p>${hc.explanation.content}</p>`;
    }

    // --- 5. 스케일링 ---
    if(data.scaling) {
        const sc = data.scaling;
        document.getElementById('scaling-header-title').textContent = sc.headerTitle;
        document.getElementById('scaling-header-subtitle').textContent = sc.headerSubtitle;
        document.getElementById('scaling-explanation-title').textContent = sc.explanation.title;
        document.getElementById('scaling-explanation-content').innerHTML = `<p>${sc.explanation.content}</p>`;
        
        // ▼▼▼ JS 수정: 10kg 이상 패키지만 필터링하여 표시 ▼▼▼
        const scalingPackagesGrid = document.getElementById('scaling-packages');
        const relevantPackages = sc.packages.filter(pkg => pkg.category.includes('10kg 이상'));

        if (relevantPackages.length > 0) {
            scalingPackagesGrid.innerHTML = relevantPackages.map(pkg => `
                <div class="package-card" style="border-top-color: #a1c4fd;">
                    <h3>${pkg.name}</h3>
                    <ul>
                        ${pkg.items.map(item => `<li class="price-item"><span class="price-label" style="justify-content:center;">- ${item}</span></li>`).join('')}
                    </ul>
                    <div class="price-wrapper">
                        <span class="discount-price heartbeat">${formatPrice(pkg.price)}~</span>
                    </div>
                </div>
            `).join('');
        } else {
            scalingPackagesGrid.innerHTML = `<p style="text-align:center; grid-column: 1 / -1;">10kg 이상 강아지를 위한 스케일링 비용 정보가 곧 업데이트될 예정입니다. 병원으로 문의해주세요.</p>`;
        }
        // ▲▲▲ JS 수정 완료 ▲▲▲
    }
    
    // --- 6. 발치 ---
    if(data.extraction) {
        const ex = data.extraction;
        document.getElementById('extraction-header-title-large').textContent = ex.headerTitle;
        document.getElementById('extraction-header-subtitle-large').textContent = ex.headerSubtitle;
        document.getElementById('extraction-explanation-title-large').textContent = ex.explanation.title;
        document.getElementById('extraction-explanation-content-large').innerHTML = `<p>${ex.explanation.content}</p>`;
        const costsGrid = document.getElementById('extraction-costs-large');
        costsGrid.innerHTML = ex.costs.map(item => `
            <div class="cost-card" style="border-top-color: #ff87c2;">
                <h3>${item.name}</h3>
                <div class="price-wrapper">
                     <span class="discount-price pulse">${formatPrice(item.price)}</span>
                </div>
            </div>`).join('');
    }
    
    // --- 7. 추가처치 ---
    if(data.addons) {
        const ad = data.addons;
        document.getElementById('addons-header-title-large').textContent = ad.headerTitle;
        document.getElementById('addons-header-subtitle-large').textContent = ad.headerSubtitle;
        document.getElementById('addons-explanation-title-large').textContent = ad.explanation.title;
        document.getElementById('addons-explanation-content-large').innerHTML = `<p>${ad.explanation.content}</p>`;
        const costsGrid = document.getElementById('addons-costs-large');
        costsGrid.innerHTML = ad.costs.map(item => `
            <div class="cost-card" style="border-top-color: #b39ddb;">
                 <h3>${item.name}</h3>
                 <div class="price-wrapper">
                      <span class="discount-price" style="font-size:2em;color:#8e44ad;">${formatPrice(item.price)}</span>
                 </div>
            </div>`).join('');
    }

    // --- 8. 신경치료 ---
    if(data.nerve) {
        const nv = data.nerve;
        document.getElementById('nerve-header-title').textContent = nv.headerTitle;
        document.getElementById('nerve-header-subtitle').textContent = nv.headerSubtitle;
        document.getElementById('nerve-explanation-title').textContent = nv.explanation.title;
        document.getElementById('nerve-explanation-content').innerHTML = `<p>${nv.explanation.content}</p>`;
        const costsGrid = document.getElementById('nerve-costs');
        costsGrid.innerHTML = nv.costs.map(item => `
            <div class="cost-card" style="border-top-color: #ff7043;">
                <h3>${item.name}</h3>
                <div class="price-wrapper">
                    <span class="discount-price" style="font-size:2em;color:#d84315;">${formatPrice(item.price)}</span>
                </div>
            </div>`).join('');
    }
}

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

    // 초기 페이지 로드
    showContent('content-main');
}

function setupSwipeHint() {
    const nav = document.querySelector('.dashboard-nav');
    const hint = document.getElementById('swipe-hint');
    
    if (!nav || !hint) return;

    const checkOverflow = () => {
        setTimeout(() => {
            const isOverflowing = nav.scrollWidth > nav.clientWidth;

            if (isOverflowing) {
                hint.classList.add('show-hint');
                nav.addEventListener('scroll', () => {
                    hint.classList.remove('show-hint');
                }, { once: true });
            } else {
                hint.classList.remove('show-hint');
            }
        }, 100); 
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
}
