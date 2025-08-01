/*
  [v6.8 최종 업데이트 내역]
  - UI 개선: 추가처치 탭 및 계산기의 추가처치 항목에 이모티콘을 추가하여 가독성 및 통일성 향상
  - UI 개선: 건강검진 및 스케일링 패키지 항목을 이모티콘과 함께 세련된 스타일로 변경
  - UI 개선: '모니터링' 선택 시 가독성을 높이기 위해 배경색 및 글자색 강조 로직 수정
  - 기능 수정: 전체 비용 내역 표시에 건강검진 및 스케일링 비용을 별도 항목으로 분리
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
          { "step": "1", "title": "사전 검사 및 예약", "content": "<strong>✅ 필수! 마취 전 검사</strong><br>안전한 수술을 위해 마취 전 검사(건강검진)는 선택이 아닌 필수입니다. 검사 결과를 통해 아이의 컨디션을 꼼꼼히 확인하고, 보호자님과 충분한 상담 후 수술을 예약합니다.<br><br><strong>🚫 8~10시간 금식 & 2시간 금수</strong><br>수술 전 8~10시간 금식, 2시간 금수는 마취 중 구토로 인한 기도 폐색 등 응급상황을 예방하기 위한 매우 중요한 약속입니다." },
          { "step": "2", "title": "내원 및 수술 준비", "content": "<strong>📝 수술 동의서 작성</strong><br>예약 시간에 맞춰 내원하여 수술 및 마취 과정에 대한 설명을 들으신 후 동의서를 작성합니다.<br><br><strong>💧 수액 처치 및 안정화</strong><br>아이는 바로 수술에 들어가지 않아요! 수액을 맞으며 몸의 수분과 전해질 균형을 맞추고, 산소방에서 편안하게 산소를 공급받으며 최상의 컨디션으로 수술을 준비합니다." },
          { "step": "3", "title": "안전 마취 및 치과 검사", "content": "<strong>😴 안전한 호흡마취</strong><br>아이의 상태에 맞는 마취 프로토콜을 적용하여 안전하게 마취를 유도하고, 가장 안정적인 호흡마취로 전환합니다. 수술 내내 최신 모니터링 장비로 모든 활력 징후를 1:1로 집중 감시합니다.<br><br><strong>📸 전체 치과 방사선 검사</strong><br>눈으로 보이지 않는 치아 뿌리, 잇몸뼈(치조골)의 숨겨진 질병까지 정확히 진단하기 위해 모든 치아에 대한 방사선 촬영을 진행합니다." },
          { "step": "4", "title": "정밀 구강 검사 및 치료", "content": "<strong>🔎 치주 탐침 검사 (프로빙)</strong><br>방사선 사진을 바탕으로 치아 하나하나의 치주낭 깊이, 출혈, 흔들림 등을 정밀하게 검사하여 치료 계획을 최종 확정합니다.<br><br><strong>🦷 맞춤형 치과 치료</strong><br>스케일링과 폴리싱을 기본으로, 검사 결과에 따라 발치, 신경치료, 잇몸치료 등 보호자님과 상의된 맞춤 치료를 진행합니다." },
          { "step": "5", "title": "회복 및 퇴원", "content": "<strong>💖 세심한 회복 케어</strong><br>모든 치료가 끝나면, 전담 스텝이 아이가 완전히 의식을 회복하고 안정될 때까지 곁에서 세심하게 돌봅니다.<br><br><strong>🏡 귀가 및 홈케어 안내</strong><br>아이가 충분히 회복되면 보호자님께 연락을 드립니다. 퇴원 시 수술 후 주의사항과 홈케어 방법을 자세히 안내해 드립니다." },
          { "step": "6", "title": "수술 후 검진 (리체크)", "content": "<strong>👩‍⚕️ 예후 확인</strong><br>발치나 잇몸 수술을 한 경우, 보통 1~2주 뒤에 내원하여 수술 부위가 잘 아물고 있는지 확인하는 검진(리체크)을 받게 됩니다. 건강한 구강 상태를 오래 유지하기 위한 마지막 단계입니다." }
      ],
      "healthCheck": {
        "headerTitle": "🩺✨ 우리 댕댕이 맞춤! 안심 건강검진 ✨🩺",
        "headerSubtitle": "💖 안전한 마취를 위한 첫걸음! 🌈 10kg-20kg 아이들을 위한 플랜입니다! 💖",
        "packagesWith4Dx": [
          { "borderColor": "#ffd54f", "title": "💪 7세 미만 성견 안심 플랜", "items": ["👩‍⚕️ 신체검사", "🩸 재채혈", "🔬 혈구검사 (CBC)", "🧪 혈액화학검사 (12종)", "⚡ 전해질검사", "🩻 엑스레이 (5컷)", "🩺 혈압 측정", "🔥 염증수치검사 (CRP)", "❤️ 심전도 검사 (ECG)", "🚽 소변검사", "🦠 4Dx 키트검사"], "originalPrice": 433800, "discountPrice": 299000 },
          { "borderColor": "#ff8a65", "title": "👑 7세 이상 성견 안심 플랜", "items": ["👩‍⚕️ 신체검사", "🩸 재채혈", "🔬 혈구검사 (CBC)", "🧪 혈액화학검사 (12종)", "⚡ 전해질검사", "🩻 엑스레이 (5컷)", "🩺 혈압 측정", "🔥 염증수치검사 (CRP)", "❤️ 심전도 검사 (ECG)", "🚽 소변검사", "🩺 복부 정밀초음파", "🦋 갑상선 호르몬 검사 (T4)", "콩팥 기능 검사 (SDMA)", "🦠 4Dx 키트검사"], "originalPrice": 599800, "discountPrice": 439000 },
          { "borderColor": "#ba68c8", "title": "💎 7세 이상 성견 VIP 안심 플랜", "items": ["👩‍⚕️ 신체검사", "🩸 재채혈", "🔬 혈구검사 (CBC)", "🧪 혈액화학검사 (12종)", "⚡ 전해질검사", "🩻 엑스레이 (5컷)", "🩺 혈압 측정", "🔥 염증수치검사 (CRP)", "❤️ 심전도 검사 (ECG)", "🚽 소변검사", "🩺 복부 정밀초음파", "🦋 갑상선 호르몬 검사 (T4)", "콩팥 기능 검사 (SDMA)", "👁️ 안과 종합검진", "🦠 4Dx 키트검사"], "originalPrice": 694800, "discountPrice": 489000 }
        ],
        "packagesWithout4Dx": [
          { "borderColor": "#ffd54f", "title": "💪 7세 미만 성견 플랜", "items": ["👩‍⚕️ 신체검사", "🩸 재채혈", "🔬 혈구검사 (CBC)", "🧪 혈액화학검사 (12종)", "⚡ 전해질검사", "🩻 엑스레이 (5컷)", "🩺 혈압 측정", "🔥 염증수치검사 (CRP)", "❤️ 심전도 검사 (ECG)", "🚽 소변검사"], "originalPrice": 388800, "discountPrice": 260000 },
          { "borderColor": "#ff8a65", "title": "👑 7세 이상 성견 플랜", "items": ["👩‍⚕️ 신체검사", "🩸 재채혈", "🔬 혈구검사 (CBC)", "🧪 혈액화학검사 (12종)", "⚡ 전해질검사", "🩻 엑스레이 (5컷)", "🩺 혈압 측정", "🔥 염증수치검사 (CRP)", "❤️ 심전도 검사 (ECG)", "🚽 소변검사", "🩺 복부 정밀초음파", "🦋 갑상선 호르몬 검사 (T4)", "콩팥 기능 검사 (SDMA)"], "originalPrice": 554800, "discountPrice": 399000 },
          { "borderColor": "#ba68c8", "title": "💎 7세 이상 성견 VIP 플랜", "items": ["👩‍⚕️ 신체검사", "🩸 재채혈", "🔬 혈구검사 (CBC)", "🧪 혈액화학검사 (12종)", "⚡ 전해질검사", "🩻 엑스레이 (5컷)", "🩺 혈압 측정", "🔥 염증수치검사 (CRP)", "❤️ 심전도 검사 (ECG)", "🚽 소변검사", "🩺 복부 정밀초음파", "🦋 갑상선 호르몬 검사 (T4)", "콩팥 기능 검사 (SDMA)", "👁️ 안과 종합검진"], "originalPrice": 649800, "discountPrice": 449000 }
        ],
        "explanation": { 
            "title": "💡 꼭 확인해주세요! 추가 검사 안내 💡", 
            "content": [ 
                "전신 마취는 마치 <strong>'비행기 여행 ✈️'</strong>과 같아요. 여행 전에 <strong>날씨를 꼭! 체크 🌤️</strong>하는 것처럼, 마취 전 건강검진은 우리 아이의 몸 상태를 미리 확인해서 가장 안전한 여행(마취) 계획을 세우는 과정이랍니다.",
                "겉으로는 보이지 않는 장기의 이상이나 숨겨진 질병을 미리 발견해서, 마취 중 발생할 수 있는 위험을 최소화하고 <strong>우리 댕댕이에게 가장 안전한 방법을 찾기 위한 💖사랑의 과정💖</strong>이에요.",
                "<br><strong>❤️ 심장병이 의심될 경우 (심잡음, 심장 크기 확장 등)</strong><br>안전한 마취를 위해 심장 기능 정밀 평가를 위한 <strong>NT-ProBNP 검사(비용: 55,000원)</strong>가 추가적으로 필요할 수 있습니다. 아이의 안전을 위한 것이니 너른 양해 부탁드립니다.",
                "<strong>🦋 7세 이상 노령견의 경우</strong><br>마취 중 발생할 수 있는 갑상선 기능 저하로 인한 서맥(느린맥박) 등의 위험을 방지하기 위해 <strong>갑상선 호르몬(T4) 검사(비용: 50,000원)</strong>가 의무적으로 추가됩니다."
            ]
        }
      },
      "healthCheckLarge": {
        "headerTitle": "🩺✨ 우리 댕댕이 맞춤! 안심 건강검진 ✨🩺",
        "headerSubtitle": "💖 안전한 마취를 위한 첫걸음! 🌈 20kg 이상 아이들을 위한 플랜입니다! 💖",
        "largeDogExplanation": "<p>우리 듬직한 댕댕이들을 위한 플랜은 왜 따로 있냐구요~? 😚<br>몸집이 아주 큰 아이들은 일반 엑스레이 테이블에 올라가기가 어려워서, 부득이하게 엑스레이 검사를 제외한 맞춤 플랜으로 구성했답니다.<br>아이의 안전을 위한 결정이니 보호자님의 너른 양해 부탁드려요! 🙏</p>",
        "packagesWith4Dx": [
          { "borderColor": "#228B22", "title": "🌳 큰 아이 안심 맞춤설계 (7세미만)", "items": ["👩‍⚕️ 신체검사", "🩸 재채혈", "🩺 혈압 측정", "🔬 혈구검사 (CBC)", "🧪 혈액화학검사 (12종)", "⚡ 전해질검사", "💩 분변 검사", "❤️ 심장 기능 검사 (ProBNP)", "🔥 염증수치검사 (CRP)", "🦋 갑상선 호르몬 검사 (T4)", "🦠 4Dx 키트검사"], "originalPrice": 390800, "discountPrice": 294000 },
          { "borderColor": "#FF8C00", "title": "🍂 큰 아이 안심 맞춤설계 (7세이상)", "items": ["👩‍⚕️ 신체검사", "🩸 재채혈", "🩺 혈압 측정", "🔬 혈구검사 (CBC)", "🧪 혈액화학검사 (12종)", "⚡ 전해질검사", "💩 분변 검사", "❤️ 심장 기능 검사 (ProBNP)", "🔥 염증수치검사 (CRP)", "🦋 갑상선 호르몬 검사 (T4)", "🦠 4Dx 키트검사"], "originalPrice": 390800, "discountPrice": 344000 },
          { "borderColor": "#B22222", "title": "🍁 큰 아이 안심 맞춤설계 (7세이상 심화)", "items": ["👩‍⚕️ 신체검사", "🩸 재채혈", "🩺 혈압 측정", "🔬 혈구검사 (CBC)", "🧪 혈액화학검사 (12종)", "⚡ 전해질검사", "💩 분변 검사", "❤️ 심장 기능 검사 (ProBNP)", "🔥 염증수치검사 (CRP)", "🦋 갑상선 호르몬 검사 (T4)", "콩팥 기능 검사 (SDMA)", "🤢 췌장염 키트검사 (cPL)", "🦠 4Dx 키트검사"], "originalPrice": 495800, "discountPrice": 394000 }
        ],
        "packagesWithout4Dx": [
          { "borderColor": "#228B22", "title": "🌳 큰 아이 맞춤설계 (7세미만)", "items": ["👩‍⚕️ 신체검사", "🩸 재채혈", "🩺 혈압 측정", "🔬 혈구검사 (CBC)", "🧪 혈액화학검사 (12종)", "⚡ 전해질검사", "💩 분변 검사", "❤️ 심장 기능 검사 (ProBNP)", "🔥 염증수치검사 (CRP)"], "originalPrice": 295800, "discountPrice": 249000 },
          { "borderColor": "#FF8C00", "title": "🍂 큰 아이 맞춤설계 (7세이상)", "items": ["👩‍⚕️ 신체검사", "🩸 재채혈", "🩺 혈압 측정", "🔬 혈구검사 (CBC)", "🧪 혈액화학검사 (12종)", "⚡ 전해질검사", "💩 분변 검사", "❤️ 심장 기능 검사 (ProBNP)", "🔥 염증수치검사 (CRP)", "🦋 갑상선 호르몬 검사 (T4)"], "originalPrice": 345800, "discountPrice": 299000 },
          { "borderColor": "#B22222", "title": "🍁 큰 아이 안심 맞춤설계 (7세이상 심화)", "items": ["👩‍⚕️ 신체검사", "🩸 재채혈", "🩺 혈압 측정", "🔬 혈구검사 (CBC)", "🧪 혈액화학검사 (12종)", "⚡ 전해질검사", "💩 분변 검사", "❤️ 심장 기능 검사 (ProBNP)", "🔥 염증수치검사 (CRP)", "🦋 갑상선 호르몬 검사 (T4)", "콩팥 기능 검사 (SDMA)", "🤢 췌장염 키트검사 (cPL)"], "originalPrice": 450800, "discountPrice": 349000 }
        ],
        "explanation": { 
            "title": "💡 꼭 확인해주세요! 추가 검사 안내 💡", 
            "content": [ 
                "전신 마취는 마치 <strong>'비행기 여행 ✈️'</strong>과 같아요. 여행 전에 <strong>날씨를 꼭! 체크 🌤️</strong>하는 것처럼, 마취 전 건강검진은 우리 아이의 몸 상태를 미리 확인해서 가장 안전한 여행(마취) 계획을 세우는 과정이랍니다.",
                "겉으로는 보이지 않는 장기의 이상이나 숨겨진 질병을 미리 발견해서, 마취 중 발생할 수 있는 위험을 최소화하고 <strong>우리 댕댕이에게 가장 안전한 방법을 찾기 위한 💖사랑의 과정💖</strong>이에요.",
                "<br><strong>❤️ 심장병이 의심될 경우 (심잡음, 심장 크기 확장 등)</strong><br>안전한 마취를 위해 심장 기능 정밀 평가를 위한 <strong>NT-ProBNP 검사(비용: 55,000원)</strong>가 추가적으로 필요할 수 있습니다. 아이의 안전을 위한 것이니 너른 양해 부탁드립니다.",
                "<strong>🦋 7세 이상 노령견의 경우</strong><br>마취 중 발생할 수 있는 갑상선 기능 저하로 인한 서맥(느린맥박) 등의 위험을 방지하기 위해 <strong>갑상선 호르몬(T4) 검사(비용: 50,000원)</strong>가 의무적으로 추가됩니다."
            ]
        }
      },
      "scaling": {
        "headerTitle": "🦷✨ 우리 댕댕이 반짝반짝 스케일링 ✨🦷",
        "headerSubtitle": "💖 사랑과 정성을 담아! 🌈 체중별 합리적인 혜택가로 안내합니다! 💖",
        "packages": [
          { "borderColor": "#20c997", "title": "🐕‍🦺 10kg ~ 15kg 미만 🐕‍🦺", "items": ["💧 술 전 산소 처치", "💧 술 전 수액 처치", "💉 도입 마취(프로포폴)", "😴 호흡 마취 Isoflurane (마무리까지)", "📸 전체 치과 X-ray (10장 이상 꼼꼼 촬영!)", "🧼 스케일링", "💎 폴리싱 – Airflow 시술 (반짝반짝 광택 마무리!)"], "originalPrice": 704000, "discountPrice": 388000 },
          { "borderColor": "#4dabf7", "title": "🐾 15kg ~ 20kg 미만 🐾", "items": ["💧 술 전 산소 처치", "💧 술 전 수액 처치", "💉 도입 마취(프로포폴)", "😴 호흡 마취 Isoflurane (마무리까지)", "📸 전체 치과 X-ray (10장 이상 꼼꼼 촬영!)", "🧼 스케일링", "💎 폴리싱 – Airflow 시술 (반짝반짝 광택 마무리!)"], "originalPrice": 795000, "discountPrice": 438000 },
          { "borderColor": "#845ef7", "title": "듬직한 20kg 이상", "items": ["💧 술 전 산소 처치", "💧 술 전 수액 처치", "💉 도입 마취(프로포폴)", "😴 호흡 마취 Isoflurane (마무리까지)", "📸 전체 치과 X-ray (10장 이상 꼼꼼 촬영!)", "🧼 스케일링", "💎 폴리싱 – Airflow 시술 (반짝반짝 광택 마무리!)"], "originalPrice": 936000, "discountPrice": 488000 }
        ],
        "explanation": { "title": "💡 필독! 혜택 적용 비용 안내 💡", "content": [ "저희 금호동물병원에서는 아이의 <strong>안전을 💖최우선💖</strong>으로 생각해요. 그래서 최근 <strong>✅ 저희 병원에서 직접 마취 전 혈액검사</strong>를 진행해서, 아이의 건강 상태를 저희 의료진이 완벽하게 파악하고 있는 경우! 감사의 마음을 담아 <strong>👑혜택가👑</strong>를 적용해 드리고 있답니다.", "다른 병원에서 검사를 받으셨거나 사정상 검사를 못 하셨어도 괜찮아요! 물론 안전한 치과 치료가 가능합니다. 다만, 이 경우 <strong>10만원이 추가</strong>되는 점, 보호자님의 너른 양해를 부탁드려요. 🙏", "<strong>🚨 잠깐!</strong> 안내된 비용은 스케일링과 기본 처치 비용이에요. 아이의 구강 상태에 따라 발치, 신경치료, 약 처방 등 추가 치료가 필요할 수 있어요. 이 경우, 꼭! <strong>보호자님과 충분히 상의 후 진행</strong>하니 걱정 마세요! 😉" ] }
      },
      "extraction": {
        "headerTitle": "🦷😿 우리 댕댕이 아픈 치아 수술비용 😿🦷",
        "costsLarge": {
            "headerSubtitle": "❤️ 아이의 고통을 덜어주는 수술 비용을 투명하게 안내해요 (10kg≥) ❤️",
            "items": [
                { "title": "🦷 기본 발치", "prices": [{ "label": "뿌리 1개", "value": 33000 }, { "label": "뿌리 2개", "value": 77000 }, { "label": "뿌리 3개, 대구치", "value": 110000 }, {"label": "열육치(PM4)", "value": 110000}] },
                { "title": "🔪 수술 발치", "prices": [{ "label": "뿌리 1개", "value": 66000 }, { "label": "뿌리 2개", "value": 140000 }, { "label": "뿌리 3개/대구치", "value": 320000 }, {"label": "열육치(PM4)", "value": 320000}] },
                { "title": "💪 송곳니 수술 발치", "prices": [{ "label": "상악 (위턱)", "value": 320000 }, { "label": "하악 (아래턱)", "value": 370000 }, {"label": "강아지 대구치", "value": 370000}] },
                { "title": "🍼 유치 발치", "prices": [{ "label": "일반 유치", "value": 33000 }, { "label": "유치 송곳니(X-ray 없이)", "value": 33000 }, { "label": "유치 송곳니(X-ray 포함)", "value": 44000 }, { "label": "유치 송곳니(수술 발치)", "value": 66000 }] },
                { "title": "⚡ 특수 발치 및 처치", "prices": [{ "label": "치아흡수 - 뿌리 1개", "value": 55000 }, { "label": "치아흡수 - 뿌리 2개", "value": 99000 }, { "label": "치아흡수 - 뿌리 3개", "value": 160000 }, { "label": "함치성낭 제거술", "value": 270000 }] },
                { "title": "🦷 잔존치근 제거", "prices": [{ "label": "뿌리 1개", "value": 77000 }, { "label": "뿌리 2개", "value": 120000 }, { "label": "구개측(어금니)", "value": 160000 }, { "label": "상악 송곳니", "value": 350000 }, { "label": "하악 송곳니", "value": 400000 }] },
                { "title": "🍑 잇몸 종양", "prices": [{ "label": "1cm 이하", "value": 110000 }, { "label": "1cm 이상", "value": 220000 }, {"label": "조직검사(1 site)", "value": 170000}]},
                { "title": "🔬 기타 수술", "prices": [{ "label": "항생제 감수성 검사(1 site)", "value": 143000 }, { "label": "함치성 치낭 제거술", "value": 280000 }] }
            ]
        },
        "explanation": { "title": "💡 '일반 발치' vs '수술 발치' 꼭! 확인해주세요!", "content": [ "<strong>일반 발치</strong><br>잇몸병으로 치아가 이미 많이 흔들릴 때, 잇몸 절개 없이 비교적 간단하게 발치하는 경우입니다.", "<strong>수술 발치</strong><br>치아 뿌리가 아직 잇몸뼈에 단단히 박혀있을 때, 잇몸을 열고(절개) 치아를 안전하게 조각내어 제거한 뒤, 꼼꼼하게 봉합까지 하는 전문적인 과정입니다. 더 많은 시간과 기술, 재료가 필요합니다." ] }
      },
      "addons": {
        "costsLarge": {
          "headerTitle": "💊 우리 댕댕이 회복을 돕는 케어 비용 💊",
          "headerSubtitle": "💖 10kg 이상 아이들을 위한 맞춤 케어 비용 안내 💖",
           "items": [
              { "borderColor": "#f06292", "title": "🪄 통증 관리", "prices": [
                  { "label": "⏰ 마취시간 연장 (30분당)", "value": "55,000원 ~" }, 
                  { "label": "📍 국소마취 (1~4 site)", "value": "12,000 ~ 23,000원" }, 
                  { "label": "❤️‍🩹 마약성 진통 혈관주사", "value": "26,000 ~ 28,000원" },
                  { "label": "🕒 24시간 지속 진통 주사", "value": "25,000 ~ 30,000원" },
                  { "label": "😊 무통 주사 (시린지펌프)", "value": "50,000 ~ 60,000원"}, 
                  { "label": "🩹 마약성 진통패치 (노스판)", "value": "50,000원 ~" }
                ]},
              { "borderColor": "#4dd0e1", "title": "🚀 회복/재생 촉진", "prices": [
                  { "label": "💉 항생/소염 주사 (일반)", "value": "13,000원 ~" }, 
                  { "label": "💉 1주 지속 항생/소염 주사", "value": "20,000 ~ 30,000원" }, 
                  { "label": "⚡️ 레이저 치료 (국소/전체)", "value": "26,000 ~ 37,000원" }, 
                  { "label": "✨ 불소 도포", "value": "44,000 ~ 50,000원" }
                ]},
              { "borderColor": "#9575cd", "title": "🏡 홈케어 처방", "prices": [
                  { "label": "💊 내복약 (1일/2회/1일분)", "value": "4,400 ~ 5,500원" }, 
                  { "label": "💧 액상 진통제 (1ml 당)", "value": "별도 문의" }, 
                  { "label": "🧴 구강항생연고 (페리덱스)", "value": "15,000원" },
                  { "label": "🛡️ 구강점막코팅 (뮤코딘)", "value": "33,000원" },
                  { "label": "🌿 치주질환연고 (파로돈겔)", "value": "25,000원" },
                  { "label": "👑 넥카라", "value": "12,000원 ~" }
                ]},
              { "borderColor": "#fff176", "title": "💉 기타 처치", "prices": [
                  { "label": "💉 도입마취 변경(알팍산)", "value": "55,000원 ~" },
                  { "label": "💧 수액첨가제(헤파멜즈)", "value": "15,000원" }
                ]}
          ],
          "explanation": { "title": "💡 추가 처치는 왜 필요할까요? 🤔", "content": ["우리 댕댕이들은 <strong>\"나 아파요😿\" 라고 말을 못하고 꾹~ 참는 습성</strong>이 있어요. 그래서 미리 통증을 관리해주는 건 아이의 고통을 덜어주는 <strong>가장 큰 사랑이자 배려</strong>랍니다.💖", "또, 항생제나 레이저, 소독 용품들은 수술 후 생길 수 있는 <strong>나쁜 균들을 막아주고 🦠 회복 속도를 높여서⚡️</strong> 아이가 빨리 우다다! 할 수 있게 도와줘요!", "저희 병원은 아이의 상태를 꼼꼼히 살펴, <strong>정말 꼭! 필요한 처치만 골라서 보호자님과 상의</strong>드릴 것을 약속해요.🤙"] }
        }
      },
      "nerve": {
        "headerTitle": "❤️‍🩹 신경 및 보존 치료 ❤️‍🩹",
        "headerSubtitle": "무조건 뽑지 않아요! 💪 소중한 치아를 지켜주는 치료 비용 안내",
        "costs": [
          { "borderColor": "#ffc078", "title": "✨ 살아있는 신경 살리기! (VPT)", "prices": [ 
              { "label": "송곳니 / 뿌리 1개,2개,3개(1홈)", "value": 450000 },
              { "label": "뿌리 2개 (2홈)", "value": 550000 }, 
              { "label": "뿌리 2개, 3개 (3홈)", "value": 660000 }, 
              { "label": "뿌리 3개 (4홈)", "value": 770000 } 
            ]},
          { "borderColor": "#ff87c2", "title": "💔 아픈 신경 치료하기 (신경치료)", "prices": [ 
              { "label": "앞이빨", "value": 550000 }, 
              { "label": "뿌리 2개 치아", "value": 660000 }, 
              { "label": "송곳니", "value": 770000 }, 
              { "label": "대구치", "value": 880000 },
              { "label": "열육치(PM4)", "value": 880000 }
            ]},
          { "borderColor": "#4dabf7", "title": "🎨 예쁘게 때워주기 (레진 치료)", "prices": [ 
              { "label": "3mm 이하", "value": 55000 }, 
              { "label": "어금니", "value": 130000 },
              { "label": "송곳니", "value": 110000 }
            ]},
          { "borderColor": "#26a69a", "title": "🛠️ 잇몸튼튼 치주치료", "prices": [ 
              { "label": "치근활택술", "value": 45000 }, 
              { "label": "개방 치근활택술(봉합)", "value": 220000 },
              { "label": "미노클린", "value": 22000 },
              { "label": "엠도게인", "value": 99000 },
              { "label": "차폐막", "value": 100000 },
              { "label": "인공뼈 이식", "value": 200000 },
              { "label": "잇몸 성형", "value": 50000 },
              { "label": "잇몸 봉합", "value": 33000 }
            ]}
        ],
        "explanation": { "title": "💡 '신경치료'와 '치주치료' 무엇이 다른가요? 🧐", "content": [ "많은 보호자님께서 헷갈려하시는 두 치료의 차이점을 알기 쉽게 설명해 드릴게요!", "<strong>❤️‍🩹 신경치료 (치아 속 치료)</strong><br>치아가 부러지거나 깊은 충치가 생겨 <strong>치아 속 신경(치수)이 감염</strong>되었을 때 필요해요. 감염된 신경을 제거하고 소독한 뒤, 특수 재료로 채워 넣어 <strong>치아를 빼지 않고 보존</strong>하는 치료입니다. 주로 치아 '내부'의 문제를 해결해요.", "<strong>🌿 치주치료 (잇몸 치료)</strong><br>치석과 세균 때문에 <strong>치아 주변 잇몸과 잇몸뼈에 염증</strong>이 생겼을 때 필요해요. 스케일링보다 깊은 곳의 치석(치은연하치석)을 제거하고, 염증 조직을 긁어내어 <strong>잇몸을 건강하게</strong> 되돌리는 치료입니다. 주로 치아 '외부' 환경을 개선해요.", "<strong>결론적으로, 신경치료는 '치아 자체'를 살리는 치료, 치주치료는 '치아를 지지하는 잇몸과 뼈'를 살리는 치료랍니다! 우리 아이에게 어떤 치료가 필요한지는 정밀 검사 후 자세히 안내해 드리고 있어요.</strong>" ] }
      }
    };

    try {
        populateContent(hospitalData);
    } catch (error) {
        console.error('데이터 처리 중 오류 발생:', error);
        alert('콘텐츠를 처리하는 데 실패했습니다. 코드에 문제가 없는지 확인해주세요.');
    }
    setupPageNavigation();
});

const formatPrice = (price) => {
    if (price === undefined || price === null) return '별도 문의';
    if (typeof price === 'number') {
        return `💸 ${price.toLocaleString('ko-KR')}원`;
    }
    if (typeof price === 'string' && !price.includes('원')) {
         const num = Number(price);
         if (!isNaN(num)) {
            return `💸 ${num.toLocaleString('ko-KR')}원`;
         }
    }
    return price;
};

function populateContent(data) {
    if (!data) return;
    if (data.main) {
        document.getElementById('main-header-title').innerHTML = data.main.headerTitle;
        document.getElementById('main-header-subtitle').innerHTML = data.main.headerSubtitle;
        const mainContainer = document.querySelector('#content-main .container > main');
        if (mainContainer) {
            const infoGrid = mainContainer.querySelector('.info-grid');
            infoGrid.innerHTML = `
                <div class="info-card" style="grid-column:1/-1; border-top:none;">
                    <h3>${data.main.hours.title}</h3>
                    <p style="color:#d81b60; font-weight:bold; text-align:center;">${data.main.hours.surgeryNotice}</p>
                    <ul>${data.main.hours.times.map(h => {
                        let style = '';
                        if (h.highlight) style = 'color:#d81b60;font-weight:bold';
                        if (h.isHoliday) style = 'color:red';
                        return `<li><strong style="${style}">${h.day}:</strong> ${h.time}</li>`;
                    }).join('')}</ul>
                </div>
            `;
            
            document.getElementById('main-pride').innerHTML = `<h2 style="color:#0277bd">${data.main.pride.title}</h2>` +
            data.main.pride.points.map(p => `
                <div style="margin-bottom: 20px;">
                    <strong style="font-size: 1.2em; color: #0277bd;">${p.title}</strong>
                    <ul style="list-style-type: '✔️ '; padding-left: 20px; margin-top: 10px;">${p.items.map(i => `<li style="margin-bottom: 8px;">${i}</li>`).join('')}</ul>
                </div>`).join('');
            document.getElementById('main-notice-title').innerHTML = data.main.notice.title;
            document.getElementById('main-notice-list').innerHTML = data.main.notice.items.map(item => {
                if(item.type === 'text') return `<li>${item.content}</li>`;
                if(item.type === 'sublist') return `<li>${item.main}<ul class="sub-list">${item.sublist.map(s => `<li>${s}</li>`).join('')}</ul></li>`;
                return '';
            }).join('');
            
            const parkingAndMapViewHTML = `
                <section class="info-section" style="margin-top: 30px;">
                    <div class="info-grid">
                         <div class="info-card" style="grid-column:1/-1; border-top:none;">
                            <h3>${data.main.parking.title}</h3>
                            <ul>${data.main.parking.content.map(p => `<li><strong ${p.highlight ? 'style="color:#d81b60;font-weight:bold"' : ''}>${p.label}:</strong> ${p.desc}</li>`).join('')}</ul>
                            <img src="https://raw.githubusercontent.com/ivomec/image/main/parking.png?raw=true" alt="주차장 안내" style="width: 100%; max-width: 800px; margin: 15px auto 0; display: block; border-radius: 10px;">
                        </div>
                    </div>
                </section>
                <section class="info-section" style="margin-top: 30px;">
                    <div class="info-grid">
                        <div class="info-card" style="grid-column:1/-1; border-top:none; padding: 10px;">
                            <h3>🗺️ 병원 오시는 길 🗺️</h3>
                            <img src="https://raw.githubusercontent.com/ivomec/image/main/map.jpg?raw=true" alt="병원 지도" style="width: 100%; border-radius: 15px;">
                        </div>
                    </div>
                </section>
            `;
            mainContainer.insertAdjacentHTML('beforeend', parkingAndMapViewHTML);
            document.getElementById('main-footer').innerHTML = `<h2>${data.main.footer.title}</h2>
                <a href="${data.main.footer.kakaoLink}" target="_blank" class="action-button kakao-btn">💬 카카오톡 채널로 상담하기</a>
                <a href="${data.main.footer.telLink}" class="action-button tel-btn">📞 ${data.main.contact.phone}</a>`;
        }
    }
    if (data.procedure) {
        document.querySelector('#content-procedure .procedure-timeline').innerHTML = data.procedure.map(item => `
            <div class="timeline-item" data-step="${item.step}">
                <h3>${item.title}</h3>
                <div class="timeline-content">${item.content}</div>
            </div>
        `).join('');
    }

    if (data.healthCheck) {
        const with4dxBtn = document.getElementById('btn-healthcheck-with-4dx-small');
        const without4dxBtn = document.getElementById('btn-healthcheck-without-4dx-small');
        
        document.getElementById('healthcheck-header-title-small').innerHTML = data.healthCheck.headerTitle;
        document.getElementById('healthcheck-header-subtitle-small').innerHTML = data.healthCheck.headerSubtitle;
        const explanationBoxSmall = document.getElementById('healthcheck-explanation-box-small');
        explanationBoxSmall.innerHTML = `
            <h2>${data.healthCheck.explanation.title}</h2>
            <div>${(data.healthCheck.explanation.content || []).map(p => `<p>${p}</p>`).join('')}</div>
        `;

        renderHealthCheckPackages('small', data.healthCheck.packagesWith4Dx.filter(pkg => !pkg.title.includes('1세 미만')));
        
        with4dxBtn.addEventListener('click', () => {
            renderHealthCheckPackages('small', data.healthCheck.packagesWith4Dx.filter(pkg => !pkg.title.includes('1세 미만')));
            with4dxBtn.classList.add('active');
            without4dxBtn.classList.remove('active');
        });
        without4dxBtn.addEventListener('click', () => {
            renderHealthCheckPackages('small', data.healthCheck.packagesWithout4Dx.filter(pkg => !pkg.title.includes('1세 미만')));
            without4dxBtn.classList.add('active');
            with4dxBtn.classList.remove('active');
        });
    }

    if (data.healthCheckLarge) {
        const with4dxBtnLg = document.getElementById('btn-healthcheck-with-4dx-large');
        const without4dxBtnLg = document.getElementById('btn-healthcheck-without-4dx-large');
        
        document.getElementById('healthcheck-header-title-large').innerHTML = data.healthCheckLarge.headerTitle;
        document.getElementById('healthcheck-header-subtitle-large').innerHTML = data.healthCheckLarge.headerSubtitle;
        document.getElementById('large-dog-explanation-content').innerHTML = data.healthCheckLarge.largeDogExplanation;
        const explanationBoxLarge = document.getElementById('healthcheck-explanation-box-large');
        explanationBoxLarge.innerHTML = `
            <h2>${data.healthCheckLarge.explanation.title}</h2>
            <div>${(data.healthCheckLarge.explanation.content || []).map(p => `<p>${p}</p>`).join('')}</div>
        `;
        
        renderHealthCheckPackages('large', data.healthCheckLarge.packagesWith4Dx);
        
        with4dxBtnLg.addEventListener('click', () => {
            renderHealthCheckPackages('large', data.healthCheckLarge.packagesWith4Dx);
            with4dxBtnLg.classList.add('active');
            without4dxBtnLg.classList.remove('active');
        });
        without4dxBtnLg.addEventListener('click', () => {
            renderHealthCheckPackages('large', data.healthCheckLarge.packagesWithout4Dx);
            without4dxBtnLg.classList.add('active');
            with4dxBtnLg.classList.remove('active');
        });
    }

    if (data.scaling) {
        document.getElementById('scaling-header-title').innerHTML = data.scaling.headerTitle;
        document.getElementById('scaling-header-subtitle').innerHTML = data.scaling.headerSubtitle;
        document.getElementById('scaling-packages').innerHTML = data.scaling.packages.map(pkg => `
            <div class="package-card" style="border-top-color:${pkg.borderColor}">
                <h3 style="color:${pkg.borderColor}">${pkg.title}</h3>
                <ul style="list-style: none; padding-left: 0;">${(pkg.items || []).map(item => `<li style="margin-bottom: 10px; font-size: 1.1em;">${item}</li>`).join('')}</ul>
                <div class="price-wrapper">
                    <span class="original-price">${formatPrice(pkg.originalPrice)}</span>
                    <span class="discount-price pulse">👑 ${pkg.discountPrice.toLocaleString('ko-KR')}원</span>
                </div>
            </div>
        `).join('');
        document.getElementById('scaling-explanation-title').innerHTML = data.scaling.explanation.title;
        document.getElementById('scaling-explanation-content').innerHTML = (data.scaling.explanation.content || []).map(p => `<p>${p}</p>`).join('');
    }

    if(data.extraction) {
        const setupExtractionTab = (size, costData) => {
            document.getElementById(`extraction-header-title-${size}`).innerHTML = data.extraction.headerTitle;
            document.getElementById(`extraction-header-subtitle-${size}`).innerHTML = costData.headerSubtitle;
            document.getElementById(`extraction-costs-${size}`).innerHTML = costData.items.map(cost => {
                const priceInfo = (cost.prices || []).map(p => `<div class="price-item"><span class="price-label">${p.label}</span> <span class="price-value">${formatPrice(p.value)}</span></div>`).join('');
                return `<div class="cost-card"><h3>${cost.title}</h3><div class="price-wrapper" style="border-top:none;padding-top:0;">${priceInfo}</div></div>`;
            }).join('');
            document.getElementById(`extraction-explanation-title-${size}`).innerHTML = data.extraction.explanation.title;
            document.getElementById(`extraction-explanation-content-${size}`).innerHTML = (data.extraction.explanation.content || []).map(p => `<p>${p}</p>`).join('');
        };
        setupExtractionTab('large', data.extraction.costsLarge);
    }
  
    if(data.addons) {
        const setupAddonsTab = (size, costData) => {
            document.getElementById(`addons-header-title-${size}`).innerHTML = costData.headerTitle;
            document.getElementById(`addons-header-subtitle-${size}`).innerHTML = costData.headerSubtitle;
            document.getElementById(`addons-costs-${size}`).innerHTML = costData.items.map(cost => `
                <div class="cost-card" style="border-top-color:${cost.borderColor}">
                    <h3 style="color:${cost.borderColor}">${cost.title}</h3>
                    <div class="price-wrapper" style="text-align: right; border-top: none; padding-top: 0;">
                        ${(cost.prices || []).map(p => `<div class="price-item"><span class="price-label">${p.label}</span> <span class="price-value">${p.value}</span></div>`).join('')}
                    </div>
                </div>
            `).join('');
            document.getElementById(`addons-explanation-title-${size}`).innerHTML = costData.explanation.title;
            document.getElementById(`addons-explanation-content-${size}`).innerHTML = (costData.explanation.content || []).map(p => `<p>${p}</p>`).join('');
        };
        setupAddonsTab('large', data.addons.costsLarge);
    }
  
    if(data.nerve) {
        document.getElementById('nerve-header-title').innerHTML = data.nerve.headerTitle;
        document.getElementById('nerve-header-subtitle').innerHTML = data.nerve.headerSubtitle;
        document.getElementById('nerve-costs').innerHTML = data.nerve.costs.map(cost => `
            <div class="cost-card" style="border-top-color:${cost.borderColor}">
                <h3 style="color:${cost.borderColor}">${cost.title}</h3>
                <div class="price-wrapper" style="border-top:none; padding-top:0;">
                    ${(cost.prices || []).map(p => `<div class="price-item"><span class="price-label">${p.label}</span> <span class="price-value" style="color:#fa5252;font-size:1.3em">${formatPrice(p.value)}</span></div>`).join('')}
                </div>
            </div>
        `).join('');
        document.getElementById('nerve-explanation-title').innerHTML = data.nerve.explanation.title;
        document.getElementById('nerve-explanation-content').innerHTML = (data.nerve.explanation.content || []).map(p => `<p>${p}</p>`).join('');
    }
}

function renderHealthCheckPackages(size, packages) {
    const containerId = `healthcheck-packages-${size}`;
    const healthPackagesContainer = document.getElementById(containerId);
    if (!healthPackagesContainer) return;
    healthPackagesContainer.innerHTML = packages.map(pkg => `
        <div class="package-card" style="border-top-color:${pkg.borderColor}">
            <h3 style="color:${pkg.borderColor}">${pkg.title}</h3>
            <ul style="list-style: none; padding-left: 0;">${(pkg.items || []).map(item => `<li style="margin-bottom: 10px; font-size: 1.1em;">${item}</li>`).join('')}</ul>
            <div class="price-wrapper">
                <span class="original-price">${formatPrice(pkg.originalPrice)}</span>
                <span class="discount-price heartbeat">❤️ ${pkg.discountPrice.toLocaleString('ko-KR')}원</span>
            </div>
        </div>
    `).join('');
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
        
        const activeTab = document.querySelector(`.nav-tab[data-target="${targetId}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
    }

    navTabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = tab.dataset.target;
            showContent(targetId);
        });
    });

    showContent('content-main'); // 초기 페이지 설정
}
