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
        "headerSubtitle": "💖 안전한 마취를 위한 첫걸음! 🌈 20kg 미만 아이들을 위한 플랜입니다! 💖",
        "packagesWith4Dx": [
          { "borderColor": "#4db6ac", "title": "🍼 1세 미만 퍼피 안심 플랜", "items": ["👩‍⚕️ 신체검사", "🩸 재채혈", "🔬 혈구검사 (CBC)", "🧪 혈액화학검사 (7종)", "⚡ 전해질검사", "🩻 흉부 엑스레이 (3컷)", "🩺 혈압 측정", "🦠 4Dx 키트검사"], "originalPrice": 283800, "discountPrice": 199000 },
          { "borderColor": "#ffd54f", "title": "💪 7세 미만 성견 안심 플랜", "items": ["👩‍⚕️ 신체검사", "🩸 재채혈", "🔬 혈구검사 (CBC)", "🧪 혈액화학검사 (12종)", "⚡ 전해질검사", "🩻 엑스레이 (5컷)", "🩺 혈압 측정", "🔥 염증수치검사 (CRP)", "❤️ 심전도 검사 (ECG)", "🚽 소변검사", "🦠 4Dx 키트검사"], "originalPrice": 433800, "discountPrice": 299000 },
          { "borderColor": "#ff8a65", "title": "👑 7세 이상 성견 안심 플랜", "items": ["👩‍⚕️ 신체검사", "🩸 재채혈", "🔬 혈구검사 (CBC)", "🧪 혈액화학검사 (12종)", "⚡ 전해질검사", "🩻 엑스레이 (5컷)", "🩺 혈압 측정", "🔥 염증수치검사 (CRP)", "❤️ 심전도 검사 (ECG)", "🚽 소변검사", "🩺 복부 정밀초음파", "🦋 갑상선 호르몬 검사 (T4)", "콩팥 기능 검사 (SDMA)", "🦠 4Dx 키트검사"], "originalPrice": 599800, "discountPrice": 439000 },
          { "borderColor": "#ba68c8", "title": "💎 7세 이상 성견 VIP 안심 플랜", "items": ["👩‍⚕️ 신체검사", "🩸 재채혈", "🔬 혈구검사 (CBC)", "🧪 혈액화학검사 (12종)", "⚡ 전해질검사", "🩻 엑스레이 (5컷)", "🩺 혈압 측정", "🔥 염증수치검사 (CRP)", "❤️ 심전도 검사 (ECG)", "🚽 소변검사", "🩺 복부 정밀초음파", "🦋 갑상선 호르몬 검사 (T4)", "콩팥 기능 검사 (SDMA)", "👁️ 안과 종합검진", "🦠 4Dx 키트검사"], "originalPrice": 694800, "discountPrice": 489000 }
        ],
        "packagesWithout4Dx": [
          { "borderColor": "#4db6ac", "title": "🍼 1세 미만 퍼피 플랜", "items": ["👩‍⚕️ 신체검사", "🩸 재채혈", "🔬 혈구검사 (CBC)", "🧪 혈액화학검사 (7종)", "⚡ 전해질검사", "🩻 흉부 엑스레이 (3컷)", "🩺 혈압 측정"], "originalPrice": 244800, "discountPrice": 160000 },
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
          { "borderColor": "#ff7eb9", "title": "🐶 5kg 미만 🐶", "items": ["💧 술 전 산소 처치", "💧 술 전 수액 처치", "💉 도입 마취(프로포폴)", "😴 호흡 마취 Isoflurane (마무리까지)", "📸 전체 치과 X-ray (10장 이상 꼼꼼 촬영!)", "🧼 스케일링", "💎 폴리싱 – Airflow 시술 (반짝반짝 광택 마무리!)"], "originalPrice": 512000, "discountPrice": 239000 },
          { "borderColor": "#ffc107", "title": "🐕 5kg ~ 10kg 미만 🐕", "items": ["💧 술 전 산소 처치", "💧 술 전 수액 처치", "💉 도입 마취(프로포폴)", "😴 호흡 마취 Isoflurane (마무리까지)", "📸 전체 치과 X-ray (10장 이상 꼼꼼 촬영!)", "🧼 스케일링", "💎 폴리싱 – Airflow 시술 (반짝반짝 광택 마무리!)"], "originalPrice": 603000, "discountPrice": 299000 },
          { "borderColor": "#20c997", "title": "🐕‍🦺 10kg ~ 15kg 미만 🐕‍🦺", "items": ["💧 술 전 산소 처치", "💧 술 전 수액 처치", "💉 도입 마취(프로포폴)", "😴 호흡 마취 Isoflurane (마무리까지)", "📸 전체 치과 X-ray (10장 이상 꼼꼼 촬영!)", "🧼 스케일링", "💎 폴리싱 – Airflow 시술 (반짝반짝 광택 마무리!)"], "originalPrice": 704000, "discountPrice": 388000 },
          { "borderColor": "#4dabf7", "title": "🐾 15kg ~ 20kg 미만 🐾", "items": ["💧 술 전 산소 처치", "💧 술 전 수액 처치", "💉 도입 마취(프로포폴)", "😴 호흡 마취 Isoflurane (마무리까지)", "📸 전체 치과 X-ray (10장 이상 꼼꼼 촬영!)", "🧼 스케일링", "💎 폴리싱 – Airflow 시술 (반짝반짝 광택 마무리!)"], "originalPrice": 795000, "discountPrice": 438000 },
          { "borderColor": "#845ef7", "title": "듬직한 20kg 이상", "items": ["💧 술 전 산소 처치", "💧 술 전 수액 처치", "💉 도입 마취(프로포폴)", "😴 호흡 마취 Isoflurane (마무리까지)", "📸 전체 치과 X-ray (10장 이상 꼼꼼 촬영!)", "🧼 스케일링", "💎 폴리싱 – Airflow 시술 (반짝반짝 광택 마무리!)"], "originalPrice": 936000, "discountPrice": 488000 }
        ],
        "explanation": { "title": "💡 필독! 혜택 적용 비용 안내 💡", "content": [ "저희 금호동물병원에서는 아이의 <strong>안전을 💖최우선💖</strong>으로 생각해요. 그래서 최근 <strong>✅ 저희 병원에서 직접 마취 전 혈액검사</strong>를 진행해서, 아이의 건강 상태를 저희 의료진이 완벽하게 파악하고 있는 경우! 감사의 마음을 담아 <strong>👑혜택가👑</strong>를 적용해 드리고 있답니다.", "다른 병원에서 검사를 받으셨거나 사정상 검사를 못 하셨어도 괜찮아요! 물론 안전한 치과 치료가 가능합니다. 다만, 이 경우 <strong>10만원이 추가</strong>되는 점, 보호자님의 너른 양해를 부탁드려요. 🙏", "<strong>🚨 잠깐!</strong> 안내된 비용은 스케일링과 기본 처치 비용이에요. 아이의 구강 상태에 따라 발치, 신경치료, 약 처방 등 추가 치료가 필요할 수 있어요. 이 경우, 꼭! <strong>보호자님과 충분히 상의 후 진행</strong>하니 걱정 마세요! 😉" ] }
      },
      "extraction": {
        "headerTitle": "🦷😿 우리 댕댕이 아픈 치아 수술비용 😿🦷",
        "costsSmall": {
            "headerSubtitle": "❤️ 아이의 고통을 덜어주는 수술 비용을 투명하게 안내해요 (<10kg) ❤️",
            "items": [
                { "title": "🦷 기본 발치", "prices": [{ "label": "뿌리 1개", "value": 22000 }, { "label": "뿌리 2개(작은 어금니)", "value": 66000 }, { "label": "뿌리 3개, 대구치", "value": 88000 }, {"label": "열육치(PM4)", "value": 88000}] },
                { "title": "🔪 수술 발치", "prices": [{ "label": "뿌리 1개", "value": 44000 }, { "label": "뿌리 2개", "value": 120000 }, { "label": "뿌리 3개/대구치", "value": 220000 }, {"label": "열육치(PM4)", "value": 220000}] },
                { "title": "💪 송곳니 수술 발치", "prices": [{ "label": "상악 (위턱)", "value": 220000 }, { "label": "하악 (아래턱)", "value": 270000 }, {"label": "강아지 대구치", "value": 220000}] },
                { "title": "🍼 유치 발치", "prices": [{ "label": "일반 유치", "value": 22000 }, { "label": "유치 송곳니(X-ray 없이)", "value": 22000 }, { "label": "유치 송곳니(X-ray 포함)", "value": 33000 }, { "label": "유치 송곳니(수술 발치)", "value": 66000 }] },
                { "title": "⚡ 특수 발치 및 처치", "prices": [{ "label": "치아흡수 - 뿌리 1개", "value": 44000 }, { "label": "치아흡수 - 뿌리 2개", "value": 88000 }, { "label": "치아흡수 - 뿌리 3개", "value": 140000 }, { "label": "함치성낭 제거술", "value": 220000 }] },
                { "title": "🦷 잔존치근 제거", "prices": [{ "label": "뿌리 1개", "value": 55000 }, { "label": "뿌리 2개", "value": 120000 }, { "label": "구개측(어금니)", "value": 160000 }, { "label": "상악 송곳니", "value": 250000 }, { "label": "하악 송곳니", "value": 300000 }] },
                { "title": "🍑 잇몸 종양", "prices": [{ "label": "1cm 이하", "value": 110000 }, { "label": "1cm 이상", "value": 220000 }, {"label": "조직검사(1 site)", "value": 170000}]},
                { "title": "🔬 기타 수술", "prices": [{ "label": "항생제 감수성 검사(1 site)", "value": 143000 }, { "label": "함치성 치낭 제거술", "value": 220000 }] }
            ]
        },
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
        "costsSmall": {
          "headerTitle": "💊 우리 댕댕이 회복을 돕는 케어 비용 💊",
          "headerSubtitle": "💖 10kg 미만 아이들을 위한 맞춤 케어 비용 안내 💖",
          "items": [
              { "borderColor": "#f06292", "title": "🪄 통증 관리", "prices": [
                  { "label": "⏰ 마취시간 연장 (30분당)", "value": "45,000 ~ 50,000원" }, 
                  { "label": "📍 국소마취 (1~4 site)", "value": "10,000 ~ 20,000원" }, 
                  { "label": "❤️‍🩹 마약성 진통 혈관주사", "value": "20,000 ~ 25,000원" },
                  { "label": "🕒 24시간 지속 진통 주사", "value": "20,000 ~ 25,000원" },
                  { "label": "😊 무통 주사 (시린지펌프)", "value": "40,000 ~ 45,000원"}, 
                  { "label": "🩹 마약성 진통패치 (노스판)", "value": "40,000원 ~" }
                ]},
              { "borderColor": "#4dd0e1", "title": "🚀 회복/재생 촉진", "prices": [
                  { "label": "💉 항생/소염 주사 (일반)", "value": "11,000원" }, 
                  { "label": "💉 1주 지속 항생/소염 주사", "value": "15,000 ~ 18,000원" }, 
                  { "label": "⚡️ 레이저 치료 (국소/전체)", "value": "20,000 ~ 28,000원" }, 
                  { "label": "✨ 불소 도포", "value": "35,000 ~ 40,000원" }
                ]},
              { "borderColor": "#9575cd", "title": "🏡 홈케어 처방", "prices": [
                  { "label": "💊 내복약 (1일/1회/1일분)", "value": "1,900 ~ 2,700원" },
                  { "label": "💊 내복약 (1일/2회/1일분)", "value": "3,300 ~ 3,800원" }, 
                  { "label": "💧 액상 진통제 (1ml 당)", "value": "8,000원 ~" }, 
                  { "label": "🧴 구강항생연고 (페리덱스)", "value": "15,000원" },
                  { "label": "🛡️ 구강점막코팅 (뮤코딘)", "value": "33,000원" },
                  { "label": "🌿 치주질환연고 (파로돈겔)", "value": "25,000원" },
                  { "label": "👑 넥카라", "value": "8,000원 ~" }
                ]},
              { "borderColor": "#fff176", "title": "💉 기타 처치", "prices": [
                  { "label": "💉 도입마취 변경(알팍산)", "value": "33,000 ~ 44,000원" },
                  { "label": "💧 수액첨가제(헤파멜즈)", "value": "15,000원" }
                ]}
          ],
          "explanation": { "title": "💡 추가 처치는 왜 필요할까요? 🤔", "content": ["우리 댕댕이들은 <strong>\"나 아파요😿\" 라고 말을 못하고 꾹~ 참는 습성</strong>이 있어요. 그래서 미리 통증을 관리해주는 건 아이의 고통을 덜어주는 <strong>가장 큰 사랑이자 배려</strong>랍니다.💖", "또, 항생제나 레이저, 소독 용품들은 수술 후 생길 수 있는 <strong>나쁜 균들을 막아주고 🦠 회복 속도를 높여서⚡️</strong> 아이가 빨리 우다다! 할 수 있게 도와줘요!", "저희 병원은 아이의 상태를 꼼꼼히 살펴, <strong>정말 꼭! 필요한 처치만 골라서 보호자님과 상의</strong>드릴 것을 약속해요.🤙"] }
        },
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
        initCalculator(hospitalData);
    } catch (error) {
        console.error('데이터 처리 중 오류 발생:', error);
        alert('콘텐츠를 처리하는 데 실패했습니다. 코드에 문제가 없는지 확인해주세요.');
    }
    setupPageNavigation();
    addExportListeners('#Calculator-Page', '치과차트');
    addExportListeners('#Estimate-Page', '예상비용');
    addExportListeners('#GuardianReport-Page', '보호자용_치료내역');
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

        renderHealthCheckPackages('small', data.healthCheck.packagesWith4Dx);
        
        with4dxBtn.addEventListener('click', () => {
            renderHealthCheckPackages('small', data.healthCheck.packagesWith4Dx);
            with4dxBtn.classList.add('active');
            without4dxBtn.classList.remove('active');
        });
        without4dxBtn.addEventListener('click', () => {
            renderHealthCheckPackages('small', data.healthCheck.packagesWithout4Dx);
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
        setupExtractionTab('small', data.extraction.costsSmall);
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
        setupAddonsTab('small', data.addons.costsSmall);
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
        // 모든 컨텐츠 패널을 숨깁니다.
        contentPanels.forEach(panel => {
            panel.classList.remove('active');
        });

        // 모든 탭의 활성 상태를 제거합니다.
        navTabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // 목표 컨텐츠 패널을 찾아 활성화합니다.
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add('active');
        }

        // 목표 컨텐츠를 가리키는 탭을 찾아 활성화합니다.
        const activeTab = document.querySelector(`.nav-tab[data-target="${targetId}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
        
        // --- 💡 수정된 부분 시작 💡 ---
        // 페이지 상단으로 스크롤하여 사용자가 콘텐츠 변경을 즉시 인지하게 합니다.
        window.scrollTo(0, 0);
        // --- 💡 수정된 부분 끝 💡 ---
    }

    navTabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = tab.dataset.target;
            if (targetId === 'content-estimate' || targetId === 'content-guardian-report') {
                copyCalculatorDataTo(targetId);
            }
            showContent(targetId);
        });
    });
    // 초기 페이지 로드
    showContent('content-main');
}


function initCalculator(data) {
    const page = document.querySelector('#Calculator-Page');
    if (!page) return;
    const CURRENT_VERSION = "6.8-dog";
    let isChartDirty = false;

    const toothData = {
        'table-upper-right': [ { id: '101', type: '앞이빨', group: 3 }, { id: '102', type: '' }, { id: '103', type: '' }, { id: '104', type: '송곳니', group: 1 }, { id: '105', type: '작은<br>어금니', group: 4 }, { id: '106', type: '' }, { id: '107', type: '' }, { id: '108', type: '열육치' }, { id: '109', type: '큰<br>어금니', group: 2 }, { id: '110', type: '' } ],
        'table-lower-right': [ { id: '401', type: '앞이빨', group: 3 }, { id: '402', type: '' }, { id: '403', type: '' }, { id: '404', type: '송곳니', group: 1 }, { id: '405', type: '작은<br>어금니', group: 4 }, { id: '406', type: '' }, { id: '407', type: '' }, { id: '408', type: '' }, { id: '409', type: '대구치', group: 3 }, { id: '410', type: '' }, { id: '411', type: '' } ],
        'table-upper-left':  [ { id: '201', type: '앞이빨', group: 3 }, { id: '202', type: '' }, { id: '203', type: '' }, { id: '204', type: '송곳니', group: 1 }, { id: '205', type: '작은<br>어금니', group: 4 }, { id: '206', type: '' }, { id: '207', type: '' }, { id: '208', type: '열육치' }, { id: '209', type: '큰<br>어금니', group: 2 }, { id: '210', type: '' } ],
        'table-lower-left':  [ { id: '301', type: '앞이빨', group: 3 }, { id: '302', type: '' }, { id: '303', type: '' }, { id: '304', type: '송곳니', group: 1 }, { id: '305', type: '작은<br>어금니', group: 4 }, { id: '306', type: '' }, { id: '307', type: '' }, { id: '308', type: '' }, { id: '309', type: '대구치', group: 3 }, { id: '310', type: '' }, { id: '311', type: '' } ]
    };
    const rootMapping = { '101':1,'102':1,'103':1,'104':1,'105':1,'106':2,'107':2,'108':3,'109':2,'110':2, '201':1,'202':1,'203':1,'204':1,'205':1,'206':2,'207':2,'208':3,'209':2,'210':2, '301':1,'302':1,'303':1,'304':1,'305':1,'306':2,'307':2,'308':2,'309':2,'310':2,'311':2, '401':1,'402':1,'403':1,'404':1,'405':1,'406':2,'407':2,'408':2,'409':2,'410':2,'411':2 };

    const procedureList = {
        '발치': { cat: '발치/제거', items: [ 
            {l:'일반-뿌리1', s:22000, lrg:33000, r:[1]}, 
            {l:'일반-뿌리2', s:66000, lrg:77000, r:[2]}, 
            {l:'일반-뿌리3/대구치', s:88000, lrg:110000, r:[3], t:['409']}, 
            {l:'일반-열육치(PM4)', s:88000, lrg:110000, t:['108','208']},
            {l:'수술-뿌리1', s:44000, lrg:66000, r:[1]}, 
            {l:'수술-뿌리2', s:120000, lrg:140000, r:[2]}, 
            {l:'수술-뿌리3/대구치', s:220000, lrg:320000, r:[3], t:['409']}, 
            {l:'수술-열육치(PM4)', s:220000, lrg:320000, t:['108','208']},
            {l:'수술-송곳니(상)', s:220000, lrg:320000, t:['104','204']}, 
            {l:'수술-송곳니(하)', s:270000, lrg:370000, t:['304','404']},
            {l:'유치-일반', s:22000, lrg:33000, tag:'deciduous'}, 
            {l:'유치-송곳니(x-rayX)', s:22000, lrg:33000, t:['104','204','304','404'], tag:'deciduous'},
            {l:'유치-송곳니(x-rayO)', s:33000, lrg:44000, t:['104','204','304','404'], tag:'deciduous'},
            {l:'유치-송곳니(수술)', s:66000, lrg:66000, t:['104','204','304','404'], tag:'deciduous'},
            {l:'특수-치아흡수-뿌리1', s:44000, lrg:55000, r:[1]},
            {l:'특수-치아흡수-뿌리2', s:88000, lrg:99000, r:[2]},
            {l:'특수-치아흡수-뿌리3', s:140000, lrg:160000, r:[3]}
        ]},
        '치주 수술': { cat: '치주 치료', items: [
            {l:'치근활택술', v:45000}, 
            {l:'개방 치근활택술', v:220000}, 
            {l:'미노클린', v:22000}, 
            {l:'엠도게인', v:99000}
        ]},
        '신경치료': { cat: '신경/보존 치료', items: [
            {l:'신경치료-앞이빨', v:550000, r:[1], not:['104','204','304','404']},
            {l:'신경치료-뿌리2', v:660000, r:[2]},
            {l:'신경치료-송곳니', v:770000, t:['104','204','304','404']},
            {l:'신경치료-대구치', v:880000, r:[3]},
            {l:'신경치료-열육치(PM4)', v:880000, t:['108','208']}
        ]},
        '레진': { cat: '신경/보존 치료', items: [
            {l:'레진-3mm이하', v:55000},
            {l:'레진-송곳니', v:110000, t:['104','204','304','404']},
            {l:'레진-어금니', v:130000, r:[2,3]}
        ]},
        '기타 처치': { cat: '기타', items: [
            {l:'함치성 치낭 제거', s:220000, lrg:280000},
            {l:'잔존치근제거-뿌리1', s:55000, lrg:77000, r:[1]},
            {l:'잔존치근제거-뿌리2', s:120000, lrg:120000, r:[2]},
            {l:'잇몸종양-1cm이하', s:110000, lrg:110000},
            {l:'잇몸종양-1cm이상', s:220000, lrg:220000},
            {l:'항생제 감수성 검사', v:143000},
            {l:'잇몸성형', v:50000},
            {l:'잇몸봉합', v:33000}
        ]},
        '모니터링': { cat: '모니터링', items: [ {l:'모니터링', v:0} ]}
    };

    function addOption(select, text, value, category = '', tag = '') {
        const opt = new Option(text, value);
        if (value === 'disabled') opt.disabled = true;
        else {
            opt.dataset.category = category;
            if(tag) opt.dataset.tag = tag;
        }
        select.add(opt);
    }
    
    function populateProcedureSelect(select, toothId, weight) {
        select.innerHTML = '';
        const roots = rootMapping[toothId] || 1;
        const isSmallDog = weight < 10;
    
        addOption(select, '시술을 선택하세요', '0');
    
        for (const [title, data] of Object.entries(procedureList)) {
            addOption(select, `▼ ${title}`, 'disabled');
            data.items.forEach(item => {
                let price = 0;
                if (item.v !== undefined) price = item.v;
                else price = isSmallDog ? item.s : item.lrg;
    
                if (price === undefined) return;
    
                const rootMatch = !item.r || item.r.includes(roots);
                const toothMatch = !item.t || item.t.includes(toothId);
                const notToothMatch = !item.not || !item.not.includes(toothId);
    
                if (rootMatch && toothMatch && notToothMatch) {
                    addOption(select, item.l, price, data.cat, item.tag || '');
                }
            });
        }

        // Custom VPT logic
        addOption(select, `▼ VPT (생활치수절단술)`, 'disabled');
        const vptCategory = '신경/보존 치료';
        if (isSmallDog) { // < 10kg
            if (roots === 1) {
                addOption(select, 'VPT', 450000, vptCategory);
            } else if (roots === 2) {
                addOption(select, 'VPT-1홀', 450000, vptCategory);
                addOption(select, 'VPT-2홀', 660000, vptCategory);
            } else if (roots === 3) {
                addOption(select, 'VPT-1홀', 450000, vptCategory);
                addOption(select, 'VPT-3홀', 660000, vptCategory);
            }
        } else { // >= 10kg
            if (roots === 1) {
                addOption(select, 'VPT', 550000, vptCategory);
            } else if (roots === 2) {
                addOption(select, 'VPT-1홀', 550000, vptCategory);
                addOption(select, 'VPT-2홀', 770000, vptCategory);
            } else if (roots === 3) {
                addOption(select, 'VPT-1홀', 550000, vptCategory);
                addOption(select, 'VPT-3홀', 880000, vptCategory);
            }
        }
    }
    
    function createMainRow(tooth, notes = '', procedures = []) {
        const row = document.createElement('tr');
        row.dataset.permanentId = tooth.id;
        let typeCell = (tooth.group) ? `<td rowspan="${tooth.group}" class="tooth-type">${tooth.type}</td>` : '';
        row.innerHTML = `${typeCell}<td class="tooth-id-cell">${tooth.id}</td><td><input type="text" class="notes" placeholder="특이사항 입력" value="${notes}"></td><td><select class="procedure-select"></select></td><td class="cost" data-cost="0">₩0</td><td><button class="add-btn">+</button></td>`;
        
        const mainSelect = row.querySelector('.procedure-select');
        const weight = parseFloat(page.querySelector('#patient-weight-calc').value) || 5;
        populateProcedureSelect(mainSelect, tooth.id, weight);
        mainSelect.value = procedures.length > 0 ? (procedures[0] || '0') : '0';
        return row;
    }
    
    function createSubRow(mainRowId, value = '0') {
        const newRow = document.createElement('tr');
        newRow.className = 'procedure-sub-row';
        newRow.dataset.permanentId = mainRowId;
        newRow.innerHTML = `<td class="tooth-id-cell"></td><td><input type="text" class="notes" placeholder="특이사항 입력"></td><td><select class="procedure-select"></select></td><td class="cost" data-cost="0">₩0</td><td><button class="remove-btn">-</button></td>`;
        
        const subSelect = newRow.querySelector('.procedure-select');
        const weight = parseFloat(page.querySelector('#patient-weight-calc').value) || 5;
        populateProcedureSelect(subSelect, mainRowId, weight);
        subSelect.value = value || '0';
        return newRow;
    }
    
    function updateRowHighlight(row) {
        if (!row) return;
        const notes = row.querySelector('.notes');
        const select = row.querySelector('select');
        const selectedOption = select ? select.options[select.selectedIndex] : null;
        let isHighlighted = (notes && notes.value.trim() !== '') || (select && select.value !== '0' && select.value !== 'disabled');
        
        row.classList.toggle('row-highlight', isHighlighted);
        
        const idCell = row.querySelector('.tooth-id-cell');
        if (idCell) {
            idCell.style.backgroundColor = '';
            idCell.style.color = '';
            idCell.style.fontWeight = '';
            if (isHighlighted && selectedOption) {
                const category = selectedOption.dataset.category;
                switch (category) {
                    case '발치/제거': idCell.style.backgroundColor = '#ffcdd2'; break;
                    case '치주 치료': idCell.style.backgroundColor = '#c5cae9'; break;
                    case '신경/보존 치료': idCell.style.backgroundColor = '#b2dfdb'; break;
                    case '기타': idCell.style.backgroundColor = '#fff9c4'; break;
                    case '모니터링': 
                        idCell.style.backgroundColor = '#faff00'; // 형광색으로 변경
                        break;
                }
            }
        }
        
        const typeCell = row.querySelector('td.tooth-type') || findGoverningTypeCell(row);
        if(typeCell && typeCell.parentElement && typeCell.parentElement.parentElement) {
             const rowsInGroup = Array.from(typeCell.parentElement.parentElement.children).filter(r => r.querySelector('.tooth-type') === typeCell || findGoverningTypeCell(r) === typeCell);
             let isAnyRowInGroupHighlighted = rowsInGroup.some(r => r.classList.contains('row-highlight'));
             typeCell.style.backgroundColor = isAnyRowInGroupHighlighted ? '#f0f0f0' : '';
        }
    }

    function handleSelectionChange(target) {
        const row = target.closest('tr');
        if (!row) return;
    
        let cost = 0;
        let selectedOption = null;

        if (target.matches('select')) {
            const value = target.value;
            cost = parseInt(value.split('|').pop(), 10) || 0;
            selectedOption = target.options[target.selectedIndex];

            // '모니터링' 선택 시 글자색 변경 로직
            Array.from(target.options).forEach(opt => {
                opt.style.color = '';
                opt.style.fontWeight = '';
            });
            if (selectedOption && selectedOption.dataset.category === '모니터링') {
                selectedOption.style.color = 'red';
                selectedOption.style.fontWeight = 'bold';
            }
        }

        if (row.classList.contains('additional-row')) {
            row.classList.toggle('selected-row', target.value !== '선택안함|0');
            const costCell = row.querySelector('.cost');
            if (costCell) {
                costCell.textContent = '₩' + cost.toLocaleString('ko-KR');
                costCell.dataset.cost = cost;
            }
        } else { 
            const costCell = row.querySelector('.cost');
            if(costCell) {
                costCell.textContent = '₩' + cost.toLocaleString('ko-KR');
                costCell.dataset.cost = cost;
            }
            const idCell = row.querySelector('.tooth-id-cell');
            if (idCell) {
                const permanentId = row.dataset.permanentId;
                if (selectedOption && selectedOption.dataset.tag === 'deciduous') {
                    const firstDigit = permanentId[0];
                    const newFirstDigit = {'1':'5', '2':'6', '3':'7', '4':'8'}[firstDigit];
                    idCell.textContent = newFirstDigit + permanentId.substring(1);
                } else {
                     if(!row.classList.contains('procedure-sub-row')) {
                        idCell.textContent = permanentId;
                     }
                }
            }
        }

        updateRowHighlight(row); 
        updateTotalCost();
        isChartDirty = true;
    }
    
    function findGoverningTypeCell(row) {
        let current = row;
        while(current) {
            const cell = current.querySelector('td.tooth-type');
            if (cell) return cell;
            current = current.previousElementSibling;
        }
        return null;
    }

    function updateAllProcedureSelects() {
        const weight = parseFloat(page.querySelector('#patient-weight-calc').value) || 5;
        page.querySelectorAll('.procedure-select').forEach(select => {
            const toothId = select.closest('tr').dataset.permanentId;
            const currentValue = select.value;
            populateProcedureSelect(select, toothId, weight);
            
            const optionExists = Array.from(select.options).some(opt => opt.value === currentValue);
            select.value = optionExists ? currentValue : '0';
            handleSelectionChange(select);
        });
    }

    function populateAdditionalTreatments() {
        const tbody1 = page.querySelector('.additional-tbody-1');
        const tbody2 = page.querySelector('.additional-tbody-2');
        tbody1.innerHTML = '';
        tbody2.innerHTML = '';

        const treatmentsByCategory = [
            { category: '🩺 기본/수액', items: [ { id: 'health-check', name: '🩺 건강검진' }, { id: 'scaling-package', name: '🦷 스케일링' }, { id: 'iv_additives', name: '💧 수액첨가제' } ]},
            { category: '💉 마취', items: [ { id: 'anesthesia_pre', name: '💉 도입마취 변경' }, { id: 'anesthesia_ext', name: '⏰ 마취 시간 연장' }, { id: 'local_anesthesia', name: '📍 국소마취' } ]},
            { category: '🩹 통증 관리', items: [ { id: 'pain_opioid_iv', name: '❤️‍🩹 마약성 진통 혈관주사' }, { id: 'pain_24hr_injection', name: '🕒 24시간 지속 진통 주사' }, { id: 'pain_cri', name: '😊 무통 주사' }, { id: 'pain_patch', name: '🩹 마약성 진통패치' } ]},
            { category: '🚀 회복 촉진', items: [ { id: 'recovery_injection', name: '💉 항생/소염 주사' }, { id: 'laser_therapy', name: '⚡️ 레이저 치료' }, { id: 'fluoride', name: '✨ 불소 도포' }]},
            { category: '🏡 홈케어', items: [ 
                { id: 'medication', name: '💊 내복약 (1일2회)' }, 
                { id: 'liquid_analgesic_nsaid', name: '💧 액상 진통제(NSID)'},
                { id: 'hexidine_spray', name: '칙- 헥시딘 스프레이'},
                { id: 'steroid_ointment', name: '🧴 구강항생 스테로이드연고'},
                { id: 'coating_spray', name: '🛡️ 구강점막코팅스프레이'},
                { id: 'paradont_gel', name: '🌿 파라돈 겔'},
                { id: 'probiotics', name: '🦠 구강 유산균'},
                { id: 'neck_collar', name: '👑 넥카라' } 
            ]}
        ];
        
        const col1Categories = [treatmentsByCategory[0], treatmentsByCategory[1], treatmentsByCategory[2]];
        const col2Categories = [treatmentsByCategory[3], treatmentsByCategory[4]];

        const renderCategory = (tbody, categoryData) => {
             const headerRow = tbody.insertRow();
             headerRow.className = 'category-header';
             headerRow.innerHTML = `<td colspan="3"><h3>${categoryData.category}</h3></td>`;
             categoryData.items.forEach(item => {
                const row = tbody.insertRow();
                row.className = 'additional-row';
                row.innerHTML = `<td>${item.name}</td><td><select data-item-id="${item.id}"></select></td><td class="cost" data-cost="0">₩0</td>`;
            });
        };
        
        col1Categories.forEach(cat => renderCategory(tbody1, cat));
        col2Categories.forEach(cat => renderCategory(tbody2, cat));
    }
    
    function updateAdditionalOptions() {
         const weight = parseFloat(page.querySelector('#patient-weight-calc').value) || 0;
         
         page.querySelectorAll('.additional-treatments-container select').forEach(control => {
            const itemId = control.dataset.itemId;
            const savedValue = control.value;
            control.innerHTML = '';
            addOption(control, '선택안함', '선택안함|0');
            
            const add = (label, value) => control.add(new Option(label, `${label}|${value}`));

            if (itemId === 'health-check' && weight > 0) {
                if (weight < 20) {
                     add('(<20kg) 1세미만 퍼피 안심(4dx O)', 199000);
                     add('(<20kg) 7세미만 성견 안심(4dx O)', 299000);
                     add('(<20kg) 7세이상 성견 안심(4dx O)', 439000);
                     add('(<20kg) 7세이상 VIP 안심(4dx O)', 489000);
                     add('(<20kg) 1세미만 퍼피(4dx X)', 160000);
                     add('(<20kg) 7세미만 성견(4dx X)', 260000);
                     add('(<20kg) 7세이상 성견(4dx X)', 399000);
                     add('(<20kg) 7세이상 VIP(4dx X)', 449000);
                } else {
                     add('(20kg≥) 큰아이 7세미만(4dx O)', 294000);
                     add('(20kg≥) 큰아이 7세이상(4dx O)', 344000);
                     add('(20kg≥) 큰아이 7세이상 심화(4dx O)', 394000);
                     add('(20kg≥) 큰아이 7세미만(4dx X)', 249000);
                     add('(20kg≥) 큰아이 7세이상(4dx X)', 299000);
                     add('(20kg≥) 큰아이 7세이상 심화(4dx X)', 349000);
                }
            }
            if (itemId === 'scaling-package' && weight > 0) {
                let price;
                if (weight < 5) price = 239000;
                else if (weight < 10) price = 299000;
                else if (weight < 15) price = 388000;
                else if (weight < 20) price = 438000;
                else price = 488000;
                add(`스케일링 패키지 (본원검사O)`, price);
                add(`스케일링 패키지 (타병원검사/미검사)`, price + 100000);
            }
            if(itemId === 'iv_additives'){
                add('수액첨가제(간기능 회복제)', 11000);
            }
            if (itemId === 'anesthesia_pre' && weight > 0) {
                 if (weight < 5) add('도입마취 변경(알팍산)', 33000);
                 else if (weight < 10) add('도입마취 변경(알팍산)', 44000);
                 else if (weight < 15) add('도입마취 변경(알팍산)', 55000);
                 else if (weight < 20) add('도입마취 변경(알팍산)', 66000);
                 else add('도입마취 변경(알팍산)', 77000);
            }
            if (itemId === 'anesthesia_ext' && weight > 0) {
                let pricePer30min;
                if (weight < 5) pricePer30min = 45000;
                else if (weight < 10) pricePer30min = 55000;
                else if (weight < 15) pricePer30min = 66000;
                else if (weight < 20) pricePer30min = 77000;
                else pricePer30min = 88000;
                for(let i = 1; i <= 8; i++){ // 30분 ~ 4시간(240분)
                    add(`마취시간 연장 (${i*30}분)`, pricePer30min * i);
                }
            }
            if(itemId === 'local_anesthesia' && weight > 0) {
                if (weight < 5) {
                    add('국소마취 (1 site)', 10000); add('국소마취 (2 site)', 15000);
                    add('국소마취 (3 site)', 18000); add('국소마취 (4 site)', 20000);
                } else if (weight < 10) {
                    add('국소마취 (1 site)', 12000); add('국소마취 (2 site)', 17000);
                    add('국소마취 (3 site)', 20000); add('국소마취 (4 site)', 22000);
                } else if (weight < 20) { // 10-15, 15-20 가격 동일
                    add('국소마취 (1 site)', 12000); add('국소마취 (2 site)', 17000);
                    add('국소마취 (3 site)', 20000); add('국소마취 (4 site)', 22000);
                } else {
                    add('국소마취 (1 site)', 13000); add('국소마취 (2 site)', 18000);
                    add('국소마취 (3 site)', 21000); add('국소마취 (4 site)', 23000);
                }
            }
            if (itemId === 'pain_opioid_iv' && weight > 0) {
                if (weight < 5) add('마약성 진통 혈관주사', 20000);
                else if (weight < 10) add('마약성 진통 혈관주사', 25000);
                else if (weight < 15) add('마약성 진통 혈관주사', 26000);
                else if (weight < 20) add('마약성 진통 혈관주사', 27000);
                else add('마약성 진통 혈관주사', 28000);
            }
            if (itemId === 'pain_24hr_injection' && weight > 0) {
                if (weight < 5) add('24시간 지속 진통 주사', 15000);
                else if (weight < 10) add('24시간 지속 진통 주사', 20000);
                else if (weight < 15) add('24시간 지속 진통 주사', 25000);
                else if (weight < 20) add('24시간 지속 진통 주사', 28000);
                else add('24시간 지속 진통 주사', 30000);
            }
            if (itemId === 'pain_cri' && weight > 0) {
                 if (weight < 5) add('무통 주사(시린지펌프)', 40000);
                 else if (weight < 10) add('무통 주사(시린지펌프)', 45000);
                 else if (weight < 15) add('무통 주사(시린지펌프)', 50000);
                 else if (weight < 20) add('무통 주사(시린지펌프)', 55000);
                 else add('무통 주사(시린지펌프)', 60000);
            }
            if(itemId === 'pain_patch'){
                add('마약성 진통패치 (5ug)', 40000);
                add('마약성 진통패치 (10ug)', 50000);
                add('마약성 진통패치 (20ug)', 60000);
            }
            if (itemId === 'recovery_injection' && weight > 0) {
                let price_normal, price_1w;
                if (weight < 5) { price_normal = 11000; price_1w = 15000; }
                else if (weight < 10) { price_normal = 13000; price_1w = 18000; }
                else if (weight < 15) { price_normal = 15000; price_1w = 20000; }
                else if (weight < 20) { price_normal = 17000; price_1w = 25000; }
                else { price_normal = 20000; price_1w = 30000; }
                add('항생/소염 주사 (일반)', price_normal);
                add('1주 지속 항생/소염 주사', price_1w);
            }
            if (itemId === 'laser_therapy' && weight > 0) {
                let price_local, price_full;
                 if (weight < 5) { price_local = 20000; price_full = 25000; }
                 else if (weight < 10) { price_local = 23000; price_full = 28000; }
                 else if (weight < 15) { price_local = 26000; price_full = 31000; }
                 else if (weight < 20) { price_local = 29000; price_full = 34000; }
                 else { price_local = 32000; price_full = 37000; }
                 add('레이저 치료 (국소)', price_local);
                 add('레이저 치료 (전체)', price_full);
            }
            if(itemId === 'fluoride' && weight > 0) {
                 if (weight < 5) add('불소 도포', 35000);
                 else if (weight < 10) add('불소 도포', 40000);
                 else if (weight < 15) add('불소 도포', 45000);
                 else if (weight < 20) add('불소 도포', 48000);
                 else add('불소 도포', 50000);
            }
            if (itemId === 'medication' && weight > 0) {
                 let pricePerDay;
                 if (weight < 5) pricePerDay = 3300;
                 else if (weight < 10) pricePerDay = 3800;
                 else if (weight < 15) pricePerDay = 4400;
                 else if (weight < 20) pricePerDay = 4900;
                 else pricePerDay = 5500;
                 for(let d=1; d<=7; d++) {
                     add(`${d}일분`, pricePerDay * d);
                 }
            }
            if(itemId === 'liquid_analgesic_nsaid' && weight > 0) {
                 const pricePerMl = 8000;
                 for(let d=1; d<=7; d++) {
                    let totalMl = (weight * 0.2) + (d > 1 ? (d - 1) * weight * 0.1 : 0);
                    let roundedMl = Math.ceil(totalMl * 10) / 10;
                    let cost = roundedMl * pricePerMl;
                    let roundedCost = Math.ceil(cost / 100) * 100;
                    add(`${d}일 (${roundedMl}ml)`, roundedCost);
                 }
            }
            if (itemId === 'hexidine_spray') add('헥시딘 스프레이', 10000);
            if (itemId === 'steroid_ointment') add('스테로이드 연고', 15000);
            if (itemId === 'coating_spray') add('구강점막코팅 스프레이', 33000);
            if (itemId === 'paradont_gel') add('파라돈 겔', 25000);
            if (itemId === 'probiotics') add('구강 유산균', 50000);
            if (itemId === 'neck_collar') {
                 const collars = [ {s:8,p:8000}, {s:10,p:10000}, {s:13,p:12000}, {s:15,p:15000}, {s:17,p:17000}, {s:20,p:20000}, {s:25,p:25000}, {s:35,p:30000} ];
                 collars.forEach(c => add(`넥카라 ${c.s}cm`, c.p));
            }
            
            if (Array.from(control.options).some(opt => opt.value === savedValue)) {
                control.value = savedValue;
            } else {
                control.value = '선택안함|0';
            }
            handleSelectionChange(control);
         });
    }
    
    function updateTotalCost() {
        let dentalSurgeryCost = 0;
        page.querySelectorAll('.main-container .cost').forEach(cell => dentalSurgeryCost += parseInt(cell.dataset.cost, 10) || 0);
        
        let healthCheckCost = 0;
        let scalingCost = 0;
        let additionalTreatmentCost = 0;

        page.querySelectorAll('.additional-treatments-container .cost').forEach(cell => {
            const row = cell.closest('tr');
            if (row && row.classList.contains('selected-row')) {
                const cost = parseInt(cell.dataset.cost, 10) || 0;
                const select = row.querySelector('select[data-item-id]');
                const itemId = select ? select.dataset.itemId : null;

                if (itemId === 'health-check') {
                    healthCheckCost += cost;
                } else if (itemId === 'scaling-package') {
                    scalingCost += cost;
                } else {
                    additionalTreatmentCost += cost;
                }
            }
        });

        const summaryTableBody = page.querySelector('.cost-summary-table tbody');
        const additionalCostRow = summaryTableBody.querySelector('tr:has(.additional-treatment-cost-display)');

        // 건강검진 비용 행 처리
        let healthCheckRow = summaryTableBody.querySelector('#health-check-cost-row');
        if (healthCheckCost > 0) {
            if (!healthCheckRow) {
                healthCheckRow = document.createElement('tr');
                healthCheckRow.id = 'health-check-cost-row';
                healthCheckRow.innerHTML = `<td>🩺 건강검진 비용</td><td class="health-check-cost-display"></td>`;
                summaryTableBody.insertBefore(healthCheckRow, additionalCostRow);
            }
            healthCheckRow.style.display = '';
            healthCheckRow.querySelector('.health-check-cost-display').textContent = '₩' + healthCheckCost.toLocaleString('ko-KR');
        } else if (healthCheckRow) {
            healthCheckRow.style.display = 'none';
        }

        // 스케일링 비용 행 처리
        let scalingRow = summaryTableBody.querySelector('#scaling-cost-row');
        if (scalingCost > 0) {
            if (!scalingRow) {
                scalingRow = document.createElement('tr');
                scalingRow.id = 'scaling-cost-row';
                scalingRow.innerHTML = `<td>🦷 스케일링 비용</td><td class="scaling-cost-display"></td>`;
                summaryTableBody.insertBefore(scalingRow, additionalCostRow);
            }
            scalingRow.style.display = '';
            scalingRow.querySelector('.scaling-cost-display').textContent = '₩' + scalingCost.toLocaleString('ko-KR');
        } else if (scalingRow) {
            scalingRow.style.display = 'none';
        }

        page.querySelector('.dental-surgery-cost-display').textContent = '₩' + dentalSurgeryCost.toLocaleString('ko-KR');
        page.querySelector('.additional-treatment-cost-display').textContent = '₩' + additionalTreatmentCost.toLocaleString('ko-KR');
        
        const totalCost = dentalSurgeryCost + healthCheckCost + scalingCost + additionalTreatmentCost;
        page.querySelector('.total-cost-display').textContent = '₩' + totalCost.toLocaleString('ko-KR');

        updateTreatmentSummary();
    }
    
    function updateTreatmentSummary() {
        const summarySection = page.querySelector('.treatment-summary-section');
        if (!summarySection) return;
        const patientName = page.querySelector('#patient-name-calc').value || '댕댕이';
        summarySection.querySelector('.summary-patient-name').textContent = patientName;
        const categories = { '발치/제거': 0, '치주 치료': 0, '신경/보존 치료': 0, '기타': 0, '모니터링': 0 };
        page.querySelectorAll('.procedure-select').forEach(select => {
            const selectedOption = select.options[select.selectedIndex];
            if (!selectedOption || select.value === '0' || select.value === 'disabled') return;
            const category = selectedOption?.dataset.category;
            if (category && categories.hasOwnProperty(category)) categories[category]++;
        });
        const extractionTbody = summarySection.querySelector('.extraction-summary-table tbody');
        extractionTbody.innerHTML = '';
        if (categories['발치/제거'] > 0) {
            extractionTbody.innerHTML += `<tr><td class="summary-item">발치/제거</td><td class="summary-count">${categories['발치/제거']} 개</td></tr>`;
            extractionTbody.innerHTML += `<tr class="summary-total"><td>총 발치 개수</td><td class="summary-count">${categories['발치/제거']} 개</td></tr>`;
        } else {
            extractionTbody.innerHTML = '<tr><td colspan="2" style="text-align:center;">해당 내역 없음</td></tr>';
        }
        const treatmentTbody = summarySection.querySelector('.treatment-summary-table tbody');
        treatmentTbody.innerHTML = '';
        let totalTreatments = categories['치주 치료'] + categories['신경/보존 치료'] + categories['기타'] + categories['모니터링'];
        if (totalTreatments > 0) {
            if(categories['치주 치료'] > 0) treatmentTbody.innerHTML += `<tr><td class="summary-item">치주 치료</td><td class="summary-count">${categories['치주 치료']} 개</td></tr>`;
            if(categories['신경/보존 치료'] > 0) treatmentTbody.innerHTML += `<tr><td class="summary-item">신경/보존 치료</td><td class="summary-count">${categories['신경/보존 치료']} 개</td></tr>`;
            if(categories['기타'] > 0) treatmentTbody.innerHTML += `<tr><td class="summary-item">기타</td><td class="summary-count">${categories['기타']} 개</td></tr>`;
            if(categories['모니터링'] > 0) treatmentTbody.innerHTML += `<tr><td class="summary-item">모니터링</td><td class="summary-count">${categories['모니터링']} 개</td></tr>`;
            treatmentTbody.innerHTML += `<tr class="summary-total"><td>총 치료 개수</td><td class="summary-count">${totalTreatments} 개</td></tr>`;
        } else {
            treatmentTbody.innerHTML = '<tr><td colspan="2" style="text-align:center;">해당 내역 없음</td></tr>';
        }
    }
    
    function updateDynamicTitle() {
        const nameInput = page.querySelector('#patient-name-calc');
        const dateInput = page.querySelector('#visit-date-calc');
        const titleEl = page.querySelector('.dynamic-chart-title');
        const patientName = nameInput.value || '댕댕이';
        try {
            const visitDate = new Date(dateInput.value);
            if (isNaN(visitDate.getTime())) throw new Error("Invalid Date");
            const formattedDate = `${visitDate.getFullYear()}년 ${visitDate.getMonth() + 1}월 ${visitDate.getDate()}일`;
            titleEl.textContent = `🗓️ ${formattedDate} ${patientName}의 치과 차트`;
        } catch(e) {
            titleEl.textContent = `🦷 ${patientName}의 치과 차트`;
        }
    }
    
    function saveData() {
        const chartData = { appVersion: CURRENT_VERSION, patientName: page.querySelector('#patient-name-calc').value, visitDate: page.querySelector('#visit-date-calc').value, patientWeight: page.querySelector('#patient-weight-calc').value, dentalProcedures: {}, additionalTreatments: {} };
        const procedureGroups = {};
        page.querySelectorAll('.main-container tr[data-permanent-id]').forEach(row => {
            const id = row.dataset.permanentId;
            if (!procedureGroups[id]) procedureGroups[id] = [];
            procedureGroups[id].push({ procedure: row.querySelector('.procedure-select').value, notes: row.querySelector('.notes').value });
        });
        for (const [id, procedures] of Object.entries(procedureGroups)) {
            const validProcedures = procedures.filter(p => (p.procedure && p.procedure !== '0' && p.procedure !== 'disabled') || p.notes.trim() !== '');
            if (validProcedures.length > 0) chartData.dentalProcedures[id] = validProcedures;
        }
        page.querySelectorAll('.additional-treatments-container select').forEach(control => {
            const id = control.dataset.itemId;
            const value = control.value;
            if (value && value !== '선택안함|0') chartData.additionalTreatments[id] = value;
        });
        const blob = new Blob([JSON.stringify(chartData, null, 2)], { type: 'application/json' });
        const link = document.createElement('a');
        link.download = `${chartData.patientName || '환자'}_${chartData.visitDate || '오늘'}_강아지_치과차트.json`;
        link.href = URL.createObjectURL(blob);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        isChartDirty = false;
    }

    function loadData(event) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                let chartData = JSON.parse(e.target.result);
                page.querySelector('#patient-name-calc').value = chartData.patientName || '';
                page.querySelector('#visit-date-calc').value = chartData.visitDate || new Date().toISOString().split('T')[0];
                page.querySelector('#patient-weight-calc').value = chartData.patientWeight || '';
                
                updateAllProcedureSelects();
                updateAdditionalOptions();

                page.querySelectorAll('.main-container tbody').forEach(tbody => tbody.innerHTML = '');
                
                for (const [tableId, teeth] of Object.entries(toothData)) { 
                    const tableBody = page.querySelector(`.${tableId} tbody`);
                    teeth.forEach(tooth => {
                        const proceduresForTooth = chartData.dentalProcedures?.[tooth.id] || [];
                        const firstEntry = proceduresForTooth.length > 0 ? proceduresForTooth[0] : { procedure: '0', notes: '' };
                        
                        const mainRow = createMainRow(tooth, firstEntry.notes, [firstEntry.procedure]);
                        tableBody.appendChild(mainRow);
                        
                        if (proceduresForTooth.length > 1) {
                            let lastRow = mainRow;
                            for (let i = 1; i < proceduresForTooth.length; i++) {
                                const entry = proceduresForTooth[i];
                                const typeCell = findGoverningTypeCell(lastRow);
                                if (typeCell) typeCell.rowSpan += 1;
                                const newSubRow = createSubRow(tooth.id, entry.procedure);
                                newSubRow.querySelector('.notes').value = entry.notes;
                                lastRow.insertAdjacentElement('afterend', newSubRow);
                                lastRow = newSubRow;
                            }
                        }
                    });
                }
                
                page.querySelectorAll('.main-container .procedure-select').forEach(select => handleSelectionChange(select));

                if (chartData.additionalTreatments) {
                    for (const [id, value] of Object.entries(chartData.additionalTreatments)) {
                        const control = page.querySelector(`[data-item-id="${id}"]`);
                        if (control) {
                             if (Array.from(control.options).some(opt => opt.value === value)) {
                                control.value = value;
                             } else {
                                 control.value = '선택안함|0';
                             }
                             handleSelectionChange(control);
                        }
                    }
                }

                updateDynamicTitle();
                updateTotalCost();
                isChartDirty = false;
                alert('데이터를 성공적으로 불러왔습니다.');

            } catch (err) {
                console.error("Failed to load chart data:", err);
                alert('오류: 차트 파일을 불러오는 데 실패했습니다. 파일 형식이 올바른지 확인해주세요.');
            }
        };
        reader.readAsText(file);
    }
    
    page.addEventListener('change', (e) => {
        if (e.target.matches('.procedure-select, .additional-treatments-container select')) {
            handleSelectionChange(e.target);
        }
    });

    page.addEventListener('input', (e) => {
        isChartDirty = true;
        if (e.target.matches('.notes')) updateRowHighlight(e.target.closest('tr'));
        if (e.target.matches('#patient-weight-calc')) { 
            updateAllProcedureSelects();
            updateAdditionalOptions(); 
        }
        if (e.target.matches('#patient-name-calc, #visit-date-calc')) updateDynamicTitle();
    });

    page.addEventListener('click', (e) => {
        if (e.target.matches('.add-btn')) {
            isChartDirty = true;
            const mainRow = e.target.closest('tr');
            if (!mainRow) return;

            let insertAfterRow = mainRow;
            while(insertAfterRow.nextElementSibling && insertAfterRow.nextElementSibling.classList.contains('procedure-sub-row') && insertAfterRow.nextElementSibling.dataset.permanentId === mainRow.dataset.permanentId) {
                insertAfterRow = insertAfterRow.nextElementSibling;
            }
            
            const typeCell = findGoverningTypeCell(insertAfterRow);
            if (typeCell) typeCell.rowSpan += 1;
            
            const newSubRow = createSubRow(mainRow.dataset.permanentId);
            insertAfterRow.insertAdjacentElement('afterend', newSubRow);
            handleSelectionChange(newSubRow.querySelector('select'));
        } 
        if (e.target.matches('.remove-btn')) { 
            isChartDirty = true;
            const rowToRemove = e.target.closest('tr');
            if (!rowToRemove) return;
            const typeCell = findGoverningTypeCell(rowToRemove);
            if (typeCell && typeCell.rowSpan > 1) typeCell.rowSpan -= 1;
            rowToRemove.remove(); 
            updateTotalCost();
        }
    });

    page.querySelector('#visit-date-calc').valueAsDate = new Date();
    for (const [tableId, teeth] of Object.entries(toothData)) { 
        const tableBody = page.querySelector(`.${tableId} tbody`); 
        teeth.forEach(tooth => {
            const mainRow = createMainRow(tooth);
            tableBody.appendChild(mainRow);
        });
    }
    
    populateAdditionalTreatments();
    updateAdditionalOptions();
    
    page.querySelectorAll('.procedure-select, .additional-treatments-container select').forEach(select => handleSelectionChange(select));

    updateDynamicTitle();
    updateTotalCost();

    const btnContainer = page.closest('.content-panel').querySelector('.export-container');
    btnContainer.querySelector('.save-data-btn')?.addEventListener('click', saveData);
    btnContainer.querySelector('.load-data-btn')?.addEventListener('click', () => btnContainer.querySelector('.load-data-input').click());
    btnContainer.querySelector('.load-data-input')?.addEventListener('change', loadData);
    
    window.addEventListener('beforeunload', (e) => {
        if (isChartDirty) { 
            e.preventDefault(); 
            e.returnValue = '변경사항이 저장되지 않을 수 있습니다.'; 
        }
    });
}

function copyCalculatorDataTo(targetId) {
    const calculatorCaptureArea = document.querySelector('#Calculator-Page .capture-area');
    const targetPanel = document.getElementById(targetId);
    if (!targetPanel) return;
    const targetCaptureArea = targetPanel.querySelector('.capture-area');
    if (!targetCaptureArea) return;
    
    const clonedArea = calculatorCaptureArea.cloneNode(true);

    const sourceElements = calculatorCaptureArea.querySelectorAll('input, select');
    const clonedElements = clonedArea.querySelectorAll('input, select');
    sourceElements.forEach((sourceEl, index) => {
        const clonedEl = clonedElements[index];
        if (clonedEl) {
            if (sourceEl.tagName === 'SELECT') {
                clonedEl.selectedIndex = sourceEl.selectedIndex;
                // 스타일 복사
                const sourceOption = sourceEl.options[sourceEl.selectedIndex];
                const clonedOption = clonedEl.options[clonedEl.selectedIndex];
                if (sourceOption && clonedOption && sourceOption.style.color) {
                    clonedOption.style.color = sourceOption.style.color;
                    clonedOption.style.fontWeight = sourceOption.style.fontWeight;
                }
            }
            else if (sourceEl.type === 'checkbox' || sourceEl.type === 'radio') clonedEl.checked = sourceEl.checked;
            else clonedEl.value = sourceEl.value;
        }
    });

    clonedArea.querySelectorAll('.additional-treatments-container tr.additional-row').forEach(row => {
        const select = row.querySelector('select');
        if (select && select.value === '선택안함|0') {
            row.style.display = 'none';
        }
    });
    clonedArea.querySelectorAll('.additional-treatments-container tr.category-header').forEach(row => {
        let next = row.nextElementSibling;
        let allHidden = true;
        while(next && !next.classList.contains('category-header')){
            if(next.style.display !== 'none') {
                allHidden = false;
                break;
            }
            next = next.nextElementSibling;
        }
        if(allHidden) row.style.display = 'none';
    });
    
    clonedArea.querySelectorAll('.main-container tr').forEach(row => {
        const select = row.querySelector('.procedure-select');
        const notes = row.querySelector('.notes');
        if (select && select.value === '0' && notes && notes.value.trim() === '') {
            row.style.display = 'none';
        }
    });

    const patientName = document.querySelector('#patient-name-calc').value || '댕댕이';
    const visitDateRaw = document.querySelector('#visit-date-calc').value;
    const visitDate = new Date(visitDateRaw);
    const formattedDate = visitDateRaw && !isNaN(visitDate.getTime()) ? `${visitDate.getFullYear()}년 ${visitDate.getMonth() + 1}월 ${visitDate.getDate()}일` : "오늘";
    
    targetCaptureArea.innerHTML = ''; // Clear previous content
    
    const toothFormulaImage = document.createElement('img');
    toothFormulaImage.src = "https://raw.githubusercontent.com/ivomec/image/main/%EC%B9%98%EC%8B%9D1.jpg?raw=true";
    toothFormulaImage.alt = "강아지 치아 모식도";
    toothFormulaImage.style.width = "100%";
    toothFormulaImage.style.maxWidth = "800px";
    toothFormulaImage.style.margin = "0 auto 25px";
    toothFormulaImage.style.display = "block";
    toothFormulaImage.style.borderRadius = "15px";
    targetCaptureArea.appendChild(toothFormulaImage);
    
    if (targetId === 'content-estimate') {
        clonedArea.querySelector('.dynamic-chart-title').textContent = `📄 ${patientName}의 치과수술 예상 비용`;
        const totalCostContainer = clonedArea.querySelector('.total-cost-container');
        if (totalCostContainer) {
            totalCostContainer.querySelector('h2').textContent = '💰 전체 예상 비용 내역';
            totalCostContainer.querySelector('.total-row td:first-child').textContent = '총 예상 비용';
        }
        
        const summarySection = clonedArea.querySelector('.treatment-summary-section');
        if(summarySection) {
            const summaryTitle = summarySection.querySelector('.summary-title');
            if(summaryTitle) summaryTitle.innerHTML = `📊 ${patientName}의 예상 치료 요약 📊`;
        }
        clonedArea.querySelector('.patient-info-inputs')?.remove();
        
        targetCaptureArea.appendChild(clonedArea);
        targetCaptureArea.insertAdjacentHTML('beforeend', `<div class="disclaimer-box"><h3>⚠️ 비용 안내 ⚠️</h3><p>본 예상 비용은 현재 상태를 바탕으로 한 추정치입니다.<br>치과 수술의 특성상, 마취 후 구강 전체에 대한 정밀 검사(치과 X-ray 및 탐침)를 통해 숨겨진 병변이 추가로 발견될 수 있습니다.<br>이 경우, 보호자와의 상담을 통해 치료 계획 및 비용이 조정될 수 있음을 미리 안내해 드립니다. 아이의 건강을 위한 최선의 결정을 함께하겠습니다.</p></div>`);
    } else if (targetId === 'content-guardian-report') {
        clonedArea.querySelector('.dynamic-chart-title').textContent = `❤️ ${formattedDate} 우리 ${patientName}의 치과 치료 기록 ❤️`;
        clonedArea.querySelector('.patient-info-inputs')?.remove();
        targetCaptureArea.appendChild(clonedArea);
        targetCaptureArea.insertAdjacentHTML('beforeend', generateGuardianComments(clonedArea));
    }
}

function generateGuardianComments(clonedArea) {
    const careAdviceCategories = new Set();
    const careAdviceMap = {
        'GENERAL': '오늘 수술은 잘 마무리되었습니다! 마취에서 완전히 회복하고 편안해질 때까지 아이를 잘 지켜봐 주시고, 궁금한 점은 언제든 병원으로 문의해주세요.',
        'EXTRACTION': '발치 수술 부위가 잘 아물 때까지 약 2주간 딱딱한 간식이나 장난감은 피해주시고, 부드러운 음식 위주로 급여해 주시는 것이 좋습니다.',
        'PERIODONTAL': '잇몸 치료를 받은 부위는 앞으로 꾸준한 양치 관리가 재발 방지에 매우 중요합니다. 병원에서 안내드린 시점부터 부드럽게 칫솔질을 시작해주세요.',
        'RESIN': '레진으로 때운 부위는 완전히 굳는 데 시간이 걸립니다. 약 1주일간 단단한 것을 씹지 않도록 주의가 필요하며, 이후부터 해당 부위를 꼼꼼히 닦아주시면 오래 유지됩니다.',
        'MEDICATION': '처방된 내복약은 통증을 줄이고 감염을 예방하는 데 중요하므로, 정해진 시간과 용량을 꼭 지켜서 모두 복용시켜 주세요.',
        'RECHECK': '양치질 시작 시점과 다음 검진(리첵) 일정은 병원에서 별도로 안내해 드릴 예정입니다. 아이의 빠른 회복과 구강 건강 유지를 위해 꼭 지켜주시길 바랍니다.'
    };
    
    clonedArea.querySelectorAll('.procedure-select').forEach(select => {
        if(!select || select.value === '0' || select.value === 'disabled') return;
        const selectedOption = select.options[select.selectedIndex];
        const category = selectedOption?.dataset.category;
        
        if (category === '발치/제거') careAdviceCategories.add('EXTRACTION');
        if (category === '신경/보존 치료') careAdviceCategories.add('RESIN');
        if (category === '치주 치료') careAdviceCategories.add('PERIODONTAL');
    });
    
    if (clonedArea.querySelector('[data-item-id="medication"]')?.value !== '선택안함|0' || clonedArea.querySelector('[data-item-id="liquid_analgesic_nsaid"]')?.value !== '선택안함|0') {
        careAdviceCategories.add('MEDICATION');
    }
    let careAdviceHTML = `<li>${careAdviceMap['GENERAL']}</li>`;
    if (careAdviceCategories.has('EXTRACTION')) careAdviceHTML += `<li>${careAdviceMap['EXTRACTION']}</li>`;
    if (careAdviceCategories.has('PERIODONTAL')) careAdviceHTML += `<li>${careAdviceMap['PERIODONTAL']}</li>`;
    if (careAdviceCategories.has('RESIN')) careAdviceHTML += `<li>${careAdviceMap['RESIN']}</li>`;
    if (careAdviceCategories.has('MEDICATION')) careAdviceHTML += `<li>${careAdviceMap['MEDICATION']}</li>`;
    careAdviceHTML += `<li>${careAdviceMap['RECHECK']}</li>`;
    return `<div class="guardian-comment-section"><h2>⭐ 우리 아이, 이렇게 관리해주세요! ⭐</h2><div class="comment-box"><h3>- 🩺 앞으로의 관리 안내</h3><ul>${careAdviceHTML}</ul></div><p class="thank-you-message">소중한 아이의 치과 수술을 저희 금호동물병원에 믿고 맡겨주셔서 다시 한번 진심으로 감사드립니다.</p></div>`;
}

function addExportListeners(pageSelector, type) {
    const page = document.querySelector(pageSelector);
    if (!page) return;
    const btnContainer = page.querySelector('.export-container');
    if (!btnContainer) return;

    const exportHandler = (exportFunc) => {
        const captureArea = page.querySelector('.capture-area');
        const patientInfoInputs = document.querySelector('#Calculator-Page .patient-info-inputs');
        const originalDisplay = patientInfoInputs ? patientInfoInputs.style.display : '';
        if (patientInfoInputs) patientInfoInputs.style.display = 'none';

        const unselectedAddonRows = captureArea.querySelectorAll('.additional-treatments-container tr.additional-row');
        const hiddenAddonRows = [];
        unselectedAddonRows.forEach(row => {
            const select = row.querySelector('select');
            if (select && select.value === '선택안함|0') {
                row.style.display = 'none';
                hiddenAddonRows.push(row);
            }
        });

        const categoryHeaders = captureArea.querySelectorAll('.additional-treatments-container tr.category-header');
        const hiddenCategoryHeaders = [];
        categoryHeaders.forEach(row => {
            let next = row.nextElementSibling;
            let allHidden = true;
            while(next && !next.classList.contains('category-header')){
                if(next.style.display !== 'none') {
                    allHidden = false;
                    break;
                }
                next = next.nextElementSibling;
            }
            if(allHidden) {
                row.style.display = 'none';
                hiddenCategoryHeaders.push(row);
            }
        });
        
        const unselectedDentalRows = captureArea.querySelectorAll('.main-container tr');
        const hiddenDentalRows = [];
        unselectedDentalRows.forEach(row => {
             const select = row.querySelector('.procedure-select');
             const notes = row.querySelector('.notes');
             if(select && select.value === '0' && notes && notes.value.trim() === '') {
                 row.style.display = 'none';
                 hiddenDentalRows.push(row);
             }
        });

        html2canvas(captureArea, { scale: 2, windowWidth: captureArea.scrollWidth, windowHeight: captureArea.scrollHeight, useCORS: true }).then(canvas => {
            const patientName = document.querySelector('#patient-name-calc').value || '환자';
            const date = document.querySelector('#visit-date-calc').value || new Date().toISOString().split('T')[0];
            const fileName = `${patientName}_${date}_${type}`;
            exportFunc(canvas, fileName);
        }).finally(() => {
            if (patientInfoInputs) patientInfoInputs.style.display = originalDisplay;
            hiddenAddonRows.forEach(row => row.style.display = '');
            hiddenCategoryHeaders.forEach(row => row.style.display = '');
            hiddenDentalRows.forEach(row => row.style.display = '');
        });
    };

    btnContainer.querySelector('.export-png-btn')?.addEventListener('click', () => {
        exportHandler((canvas, fileName) => {
            const link = document.createElement('a');
            link.download = fileName + '.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });

    btnContainer.querySelector('.export-pdf-btn')?.addEventListener('click', () => {
        exportHandler((canvas, fileName) => {
            const { jsPDF } = window.jspdf;
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const canvasAspectRatio = canvasWidth / canvasHeight;
            const renderHeight = pdfWidth / canvasAspectRatio;
            
            let position = 0;
            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, renderHeight);
            let heightLeft = renderHeight - pdf.internal.pageSize.getHeight();

            while (heightLeft > 0) {
                position -= pdf.internal.pageSize.getHeight();
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, renderHeight);
                heightLeft -= pdf.internal.pageSize.getHeight();
            }
            
            pdf.save(fileName + '.pdf');
        });
    });
}
