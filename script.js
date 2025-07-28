document.addEventListener('DOMContentLoaded', () => {
    const hospitalData = {
      "main": {
        "headerTitle": "💖 치과 특화 금호동물병원 💖",
        "headerSubtitle": "🦷 우리 댕댕이의 건강한 미소를 지켜주는 곳 🦷",
        "contact": {
          "phone": "062-383-7572"
        },
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
            {
              "title": "최신 전문 장비 완비! 빵빵해요! 🚀",
              "items": [
                "📸 <strong>치과전용 X-ray:</strong> 최상의 화질을 자랑하는 최신 덴츠플라이 센서로 정확하게 진단해요.",
                "💎 <strong>브러쉬리스 모터 덴탈 유닛:</strong> 속도 조절이 가능해서 훨씬 정교하고 섬세한 치료가 가능해요.",
                "💧 <strong>피에조톰 수술기:</strong> 사람 성형외과 & 치과 대학병원에서 쓰는 장비로, 뼈 손상을 최소화하여 안전한 수술을 진행해요.",
                "🌬️ <strong>최신 호흡마취기:</strong> Ai가 아이의 호흡을 자동으로 감지하고 관리해 무호흡 상태를 방지하며 안전한 마취를 도와줘요.",
                "❤️‍🩹 <strong>최신호흡마취기와 연동되는 페이션트 모니터:</strong> 혈압, 심전도, 체온 등 모든 활력 징후를 마취기와 연동하여 실시간으로 감시하며 안전하게 수술해요.",
                "🔥 <strong>수의용 베어허거:</strong> 저온화상의 위험 없이 마취 중 아이의 체온을 가장 안전하게 유지하는 최신 체온 조절 장치예요.",
                "📡 <strong>광주 전남 최초 동물용 치과 CT 검사기 도입 예정:</strong> 더욱 정밀한 진단과 치료를 위해, 곧 만나요!"
              ]
            },
            {
              "title": "강아지 치과 진료, 경험치 MAX! 💪",
              "items": [
                "<strong>신경치료:</strong> 감염된 신경을 제거하고 치아를 보존하여 발치를 피하는 치료.",
                "<strong>생활치수절단술:</strong> 신경 노출 시 감염된 부분만 제거 후 특수 약물로 보호하여 신경을 살리는 치료.",
                "<strong>치주치료:</strong> 잇몸과 주변 조직의 염증을 치료하고 치석을 제거하여 잇몸 건강을 되찾는 치료.",
                "<strong>보존치료:</strong> 충치나 손상 부위를 레진 등 치아와 유사한 재료로 메워 치아의 기능과 형태를 회복하는 치료.",
                "<strong>구비강누공 폐쇄술:</strong> 치주염 등으로 생긴 입과 코 사이의 구멍을 막아 음식물 역류와 감염을 막는 수술.",
                "<strong>함치성치낭:</strong> 잇몸 속에 숨어있는 치아 주변의 물혹을 제거하여 주변 뼈와 치아의 손상을 막는 치료.",
                "<strong>치아흡수:</strong> 고양이에게서 특히 많이 발생하는, 치아 뿌리가 녹는 질환을 진단하고 발치하는 치료.",
                "<strong>턱뼈 골수염:</strong> 세균 감염으로 턱뼈에 생긴 염증을 치료하고, 심할 경우 원인이 되는 치아를 발치하는 치료.",
                "<br>이처럼 다양한 고난도 치료 케이스들은 <a href='https://blog.naver.com/kumhoanimal' target='_blank' style='color:#0277bd; font-weight:bold;'>병원 블로그</a>에서 직접 확인하실 수 있어요!"
              ]
            }
          ]
        },
        "notice": {
          "title": "🦷 꼭 읽어주세요! 안전한 치과 수술을 위한 안내 🦷",
          "items": [
            "<strong>치과 치료(수술)비는 예측이 힘들어요.</strong><br>사람과 달리 아이들은 입 안을 자세히 보여주지 않아요. 겉으로 보이는 것만으로는 치아 뿌리의 상태나 숨겨진 질병을 정확히 알 수 없습니다. <strong>안전하게 마취한 후 치과 전용 엑스레이를 찍고 정밀 탐침 검사까지 마쳐야</strong> 비로소 아이의 구강 상태를 100% 파악할 수 있답니다. 따라서, 상담 시 안내드린 예상 비용과 실제 치료 후 청구되는 비용에 차이가 발생할 수 있는 점, 너그러이 양해 부탁드립니다.",
            "<strong>장시간 마취의 위험성을 이해해주세요.</strong><br>치과 치료는 정교함을 요하는 작업이라 생각보다 시간이 오래 걸립니다. 기본적인 엑스레이 검사와 스케일링만으로도 중성화 수술과 비슷한 시간이 소요되며, 발치나 신경치료 등 추가 시술이 들어가면 마취 시간은 더 길어질 수밖에 없습니다. 치과 시술 자체는 위험성이 낮지만, <strong>마취 시간이 길어지는 만큼 일반 수술보다 마취의 부담이나 위험은 더 높을 수 있습니다.</strong>",
            "<strong>안전을 위해, 수술 전 병원 방문은 필수예요.</strong><br>위와 같은 이유로, 아이의 안전을 위해 <strong>마취 전 검사는 선택이 아닌 필수</strong>입니다. 전화상으로 바로 수술 예약을 잡을 수는 없으며, 반드시 병원에 먼저 내원하시어 구강 상태 평가 및 건강검진(마취 전 검사)을 받아야 합니다. 검사 결과를 바탕으로 마취 위험성을 평가하고, 보호자님과 충분히 상의한 후에 안전하게 수술 날짜를 잡고 있습니다.",
            "<strong>보호자님의 치료 의사를 미리 알려주세요.</strong><br>겉으로는 멀쩡해 보여도 검사 후에 치료가 필요한 치아가 발견될 수 있습니다. 만약 이런 치아가 발견되었을 때, <strong>보호자님께 연락하여 동의를 구한 후 치료를 할지, 혹은 즉시 필요한 치료를 진행할지</strong>를 마취 전에 꼭 저희에게 알려주셔야 합니다. 아이를 위한 최선의 결정을 함께 할 수 있도록 미리 소통해주세요!"
          ]
        },
        "footer": {
          "title": "🚀 빠른 상담 & 예약 🚀",
          "kakaoLink": "https://pf.kakao.com/_jiICK/chat",
          "telLink": "tel:062-383-7572"
        }
      },
      "healthCheck": {
        "headerTitle": "🩺✨ 우리 댕댕이 맞춤! 안심 건강검진 ✨🩺",
        "headerSubtitle": "💖 안전한 마취를 위한 첫걸음! 🌈 20kg 이상 아이들을 위한 플랜입니다! 💖",
        "largeDogExplanation": "<p>우리 듬직한 댕댕이들을 위한 플랜은 왜 따로 있냐구요~? 😚<br>몸집이 아주 큰 아이들은 일반 엑스레이 테이블에 올라가기가 어려워서, 부득이하게 엑스레이 검사를 제외한 맞춤 플랜으로 구성했답니다.<br>아이의 안전을 위한 결정이니 보호자님의 너른 양해 부탁드려요! 🙏</p>",
        "packagesWith4Dx": [
          {
            "borderColor": "#228B22", "titleColor": "#228B22", "title": "🌳 큰 아이 맞춤설계 (7세미만, 20kg이상) 🌳",
            "items": ["(1) 신체검사", "💉 (2) 채혈비", "❤️‍🩹 (3) 혈압 체크", "🩸 (4) CBC 검사", "🧪 (5) CHEMI 7종 검사", "<strong>❤️ (6) 심장사상충 검사</strong>", "💓 (7) NT-proBNP - 심장 질환 바이오마커 검사", "⚡️ (8) 전해질 검사", "🔥 (9) CRP(염증수치 검사)"],
            "originalPrice": 284200, "discountPrice": 220000
          },
          {
            "borderColor": "#FF8C00", "titleColor": "#FF8C00", "title": "🍂 큰 아이 맞춤설계 (7세이상, 20kg이상) 🍂",
            "items": ["(1) 신체검사", "💉 (2) 채혈비", "❤️‍🩹 (3) 혈압 체크", "🩸 (4) CBC 검사", "<strong>❤️ (5) 심장사상충 검사</strong>", "🧪 (6) CHEMI 12종 검사", "💓 (7) NT-proBNP - 심장 질환 바이오마커 검사", "(8) T4 검사 – 갑상선호르몬", "🔥 (9) CRP 검사", "⚡️ (10) 전해질 검사"],
            "originalPrice": 385400, "discountPrice": 270000
          },
          {
            "borderColor": "#B22222", "titleColor": "#B22222", "title": "🍁 큰 아이 맞춤설계 (7세이상 심화, 20kg이상) 🍁",
            "items": ["(1) 신체검사", "💉 (2) 채혈비", "❤️‍🩹 (3) 혈압 체크", "🩸 (4) CBC 검사", "<strong>❤️ (5) 심장사상충 검사</strong>", "🧪 (6) CHEMI 12종 검사", "💓 (7) NT-proBNP - 심장 질환 바이오마커 검사", "(8) T4 검사 – 갑상선호르몬", "🔥 (9) CRP 검사", "🦋 (10) SDMA 검사", "⚡️ (11) 전해질 검사", "(12) CPL(췌장염키트검사)"],
            "originalPrice": 500400, "discountPrice": 350000
          }
        ],
        "packagesWithout4Dx": [
          {
            "borderColor": "#228B22", "titleColor": "#228B22", "title": "🌳 큰 아이 맞춤설계 (7세미만, 20kg이상) 🌳",
            "items": ["(1) 신체검사", "💉 (2) 채혈비", "❤️‍🩹 (3) 혈압 체크", "🩸 (4) CBC 검사", "🧪 (5) CHEMI 7종 검사", "💓 (6) NT-proBNP - 심장 질환 바이오마커 검사", "⚡️ (7) 전해질 검사", "🔥 (8) CRP(염증수치 검사)"],
            "originalPrice": 239200, "discountPrice": 190000 
          },
          {
            "borderColor": "#FF8C00", "titleColor": "#FF8C00", "title": "🍂 큰 아이 맞춤설계 (7세이상, 20kg이상) 🍂",
            "items": ["(1) 신체검사", "💉 (2) 채혈비", "❤️‍🩹 (3) 혈압 체크", "🩸 (4) CBC 검사", "🧪 (5) CHEMI 12종 검사", "💓 (6) NT-proBNP - 심장 질환 바이오마커 검사", "(7) T4 검사 – 갑상선호르몬", "🔥 (8) CRP 검사", "⚡️ (9) 전해질 검사"],
            "originalPrice": 340400, "discountPrice": 240000
          },
          {
            "borderColor": "#B22222", "titleColor": "#B22222", "title": "🍁 큰 아이 맞춤설계 (7세이상 심화, 20kg이상) 🍁",
            "items": ["(1) 신체검사", "💉 (2) 채혈비", "❤️‍🩹 (3) 혈압 체크", "🩸 (4) CBC 검사", "🧪 (5) CHEMI 12종 검사", "💓 (6) NT-proBNP - 심장 질환 바이오마커 검사", "(7) T4 검사 – 갑상선호르몬", "🔥 (8) CRP 검사", "🦋 (9) SDMA 검사", "⚡️ (10) 전해질 검사", "(11) CPL(췌장염키트검사)"],
            "originalPrice": 455400, "discountPrice": 320000
          }
        ],
        "explanation": {
          "title": "💡 마취 전 건강검진, 왜 꼭 필요할까요? 💡",
          "content": [
            "전신 마취는 마치 <strong>'비행기 여행 ✈️'</strong>과 같아요. 여행 전에 <strong>날씨를 꼭! 체크 🌤️</strong>하는 것처럼, 마취 전 건강검진은 우리 아이의 몸 상태를 미리 확인해서 가장 안전한 여행(마취) 계획을 세우는 과정이랍니다.",
            "겉으로는 보이지 않는 장기의 이상이나 숨겨진 질병을 미리 발견해서, 마취 중 발생할 수 있는 위험을 최소화하고 <strong>우리 댕댕이에게 가장 안전한 방법을 찾기 위한 💖사랑의 과정💖</strong>이에요."
          ]
        }
      },
      "scaling": {
        "headerTitle": "🦷✨ 우리 댕댕이 반짝반짝 스케일링 ✨🦷",
        "headerSubtitle": "💖 사랑과 정성을 담아! 🌈 체중별 합리적인 혜택가로 안내합니다! 💖",
        "packages": [
          {
            "borderColor": "#ff7eb9", "titleColor": "#ff7eb9", "title": "🐶 5kg 미만 🐶",
            "items": ["💧 술 전 수액 처치", "🌬️ 산소 처치", "💉 술 전 주사 마취", "😴 호흡 마취 <small>(기본 1시간)</small>", "📸 전체 치과 X-ray <small>(10장 이상 꼼꼼 촬영!)</small>", "🧼 스케일링", "💎 폴리싱"],
            "originalPrice": 492000, "discountPrice": 239000
          },
          {
            "borderColor": "#ffc107", "titleColor": "#ffc107", "title": "🐕 5kg ~ 10kg 🐕",
            "items": ["💧 술 전 수액 처치", "🌬️ 산소 처치", "💉 술 전 주사 마취", "😴 호흡 마취 <small>(기본 1시간)</small>", "📸 전체 치과 X-ray <small>(10장 이상 꼼꼼 촬영!)</small>", "🧼 스케일링", "💎 폴리싱"],
            "originalPrice": 553000, "discountPrice": 299000
          },
          {
            "borderColor": "#20c997", "titleColor": "#20c997", "title": "🐕‍🦺 10kg ~ 15kg 🐕‍🦺",
            "items": ["💧 술 전 수액 처치", "🌬️ 산소 처치", "💉 술 전 주사 마취", "😴 호흡 마취 <small>(기본 1시간)</small>", "📸 전체 치과 X-ray <small>(10장 이상 꼼꼼 촬영!)</small>", "🧼 스케일링", "💎 폴리싱"],
            "originalPrice": 634000, "discountPrice": 388000
          },
          {
            "borderColor": "#4dabf7", "titleColor": "#1c7ed6", "title": "🐾 15kg ~ 20kg 🐾",
            "items": ["💧 술 전 수액 처치", "🌬️ 산소 처치", "💉 술 전 주사 마취", "😴 호흡 마취 <small>(기본 1시간)</small>", "📸 전체 치과 X-ray <small>(10장 이상 꼼꼼 촬영!)</small>", "🧼 스케일링", "💎 폴리싱"],
            "originalPrice": 705000, "discountPrice": 438000
          },
          {
            "borderColor": "#845ef7", "titleColor": "#845ef7", "title": "듬직한 20kg 이상",
            "items": ["💧 술 전 수액 처치", "🌬️ 산소 처치", "💉 술 전 주사 마취", "😴 호흡 마취 <small>(기본 1시간)</small>", "📸 전체 치과 X-ray <small>(10장 이상 꼼꼼 촬영!)</small>", "🧼 스케일링", "💎 폴리싱"],
            "originalPrice": 776000, "discountPrice": 488000
          }
        ],
        "explanation": {
          "title": "💡 필독! 혜택 적용 비용 안내 💡",
          "content": [
            "저희 금호동물병원에서는 아이의 <strong>안전을 💖최우선💖</strong>으로 생각해요. 그래서 최근 <strong>✅ 저희 병원에서 직접 마취 전 혈액검사</strong>를 진행해서, 아이의 건강 상태를 저희 의료진이 완벽하게 파악하고 있는 경우! 감사의 마음을 담아 <strong>👑혜택가👑</strong>를 적용해 드리고 있답니다.",
            "다른 병원에서 검사를 받으셨거나 사정상 검사를 못 하셨어도 괜찮아요! 물론 안전한 치과 치료가 가능합니다. 다만, 이 경우 <strong>10만원이 추가</strong>되는 점, 보호자님의 너른 양해를 부탁드려요. 🙏",
            "<strong>🚨 잠깐!</strong> 안내된 비용은 스케일링과 기본 처치 비용이에요. 아이의 구강 상태에 따라 발치, 신경치료, 약 처방 등 추가 치료가 필요할 수 있어요. 이 경우, 꼭! <strong>보호자님과 충분히 상의 후 진행</strong>하니 걱정 마세요! 😉"
          ]
        }
      },
      "extraction": {
        "headerTitle": "🦷😿 우리 댕댕이 아픈 치아 치료 😿🦷",
        "headerSubtitle": "❤️ 아이의 고통을 덜어주는 발치 비용을 투명하게 안내해요 (10kg&ge;) ❤️",
        "costs": [
            { "title": "🦷 뿌리 1개 발치 (앞니 등)", "description": "<strong>일반 쏙!:</strong> 많이 흔들리는 치아<br><strong>수술 샥!:</strong> 잇몸 절개&봉합 포함", "prices": [{ "label": "일반", "value": "33000" }, {"label": "수술", "value": "66000"}] },
            { "title": "🦷🦷 뿌리 2개 발치 (작은어금니)", "description": "<strong>일반 쏙! :</strong> 많이 흔들리는 치아<br><strong>수술 샥! :</strong> 잇몸 절개&봉합 포함", "prices": [{ "label": "일반", "value": "77000" }, {"label": "수술", "value": "140000"}] },
            { "title": "🦷🦷🦷 뿌리 3개 발치 (큰어금니)", "description": "<strong>일반 쏙! :</strong> 많이 흔들리는 치아<br><strong>수술 샥! :</strong> 잇몸 절개&봉합 포함", "prices": [{ "label": "일반", "value": "110000" }, {"label": "수술", "value": "320000"}] },
            { "title": "💪 튼튼한 송곳니 수술 발치", "description": "길고 튼튼한 송곳니 뿌리! 정교한 수술로 안전하게 제거해요.", "prices": [{ "label": "위턱", "value": "320000" }, { "label": "아래턱", "value": "370000" }] },
            { "title": "💥 대구치(M1) & 열육치(P4) 발치", "description": "가장 크고 중요한 어금니들을 발치해요!", "prices": [{ "label": "일반", "value": "110000" }, { "label": "수술", "value": "320000" }] },
            { "title": "🍼 유치 발치", "description": "빠져야 할 시기에 빠지지 않은 유치를 안전하게 제거해요.", "prices": [{ "label": "단순 발치", "value": "33000" }, { "label": "수술 발치", "value": "66000" }] },
            { 
                "title": "🦷 유치 송곳니(504,604,704,804) 발치", 
                "description": "제때 빠지지 않은 유치 송곳니를 안전하게 제거합니다. 발치 전 엑스레이 검사로 부러진 치근이 남지 않는지 확인하는 과정이 추천됩니다.", 
                "prices": [
                    { "label": "X-ray 없이 발치", "value": "33000" },
                    { "label": "X-ray 포함 발치", "value": "44000" },
                    { "label": "수술 발치(치근제거&봉합)", "value": "88000" }
                ] 
            }
        ],
        "explanation": {
          "title": "💡 꼭! 확인해주세요! '일반' vs '수술' 발치 💡",
          "content": [
            "<strong>일반 발치 (쏙!) 😿</strong><br>잇몸병으로 치아가 이미 <strong>많이많이 흔들릴 때!</strong> 잇몸 절개 없이 쏙~ 뽑아요. (봉합이 필요하면 비용이 추가될 수 있어요!)",
            "<strong>수술 발치 (샥!) 💪</strong><br>치아 뿌리가 아직 <strong>잇몸뼈에 단단히 박혀있을 때!</strong> 잇몸을 열고 안전하게 조각내어 제거한 뒤, 꼼꼼하게 봉합까지 하는 전문적인 과정이에요."
          ]
        }
      },
      "addons": {
          "headerTitle": "💊 추가 처치 비용 (10kg&ge;) 💊",
          "headerSubtitle": "💖 10kg 이상 아이들을 위한 맞춤 케어 비용 안내 💖",
          "costs": [
              { "borderColor": "#f06292", "titleColor": "#c2185b", "title": "🪄 통증 관리", "prices": [{ "label": "💉 진통 주사(세레니아)", "value": "25,000원 ~" }, { "label": "🎯 국소 마취", "value": "12,000원 ~" }, { "label": "✨ 무통 주사", "value": "50,000원 ~"}, { "label": "🩹 진통 패치", "value": "50,000원 ~" }] },
              { "borderColor": "#4dd0e1", "titleColor": "#00838f", "title": "🚀 빠른 회복", "prices": [{ "label": "💉 항생/소염 주사", "value": "15,000원 ~" }, { "label": "⏰ 1주 지속 항생/소염 주사", "value": "20,000원 ~" }, { "label": "✨ 불소 도포", "value": "45,000원 ~" }] },
              { "borderColor": "#9575cd", "titleColor": "#512da8", "title": "🏡 홈케어 용품", "prices": [{ "label": "👑 넥카라", "value": "12,000원 ~" }, { "label": "💧 액상 진통제(3일분)", "value": "32,000원" }, { "label": "🌿 구강소독 헥시딘 스프레이", "value": "10,000원" }, { "label": "🩹 구강항생연고(페리덱스)", "value": "33,000원" }, {"label": "👄 구강점막 코팅 스프레이(뮤코딘)", "value": "33,000원"}] }
          ],
          "explanation": {
            "title": "💡 꼭 확인해주세요! 🤔",
            "content": [
              "안내된 비용은 <strong>15kg 아이를 기준</strong>으로 한 최소 시작 금액이며, 아이의 체중에 따라 비용이 달라질 수 있습니다.",
              "모든 항목은 아이의 상태에 따라 수의사 선생님과 상의 후 결정되니 안심하세요.",
              "정확한 전체 비용을 안내드리지 못하는 점 너른 양해 부탁드립니다. 🙏"
            ]
          }
      },
      "nerve": {
        "headerTitle": "❤️‍🩹 우리 댕댕이 치아 살리기 대작전! ❤️‍🩹",
        "headerSubtitle": "무조건 뽑지 않아요! 💪 소중한 치아를 지켜주는 치료 비용 안내",
        "costs": [
          {
            "borderColor": "#ffc078", "titleColor": "#f76707", "title": "✨ 살아있는 신경 살리기! (VPT)",
            "description": "<strong>⏳ 48시간 골든타임! ⏳</strong><br>치아가 부러진 직후, 아직 신경이 살아있을 때만 가능해요! 오염된 신경만 살짝 걷어내고 🩹 특수 보호 약품으로 코팅해서 치아의 생명력을 지켜준답니다.<span style=\"display:block;font-size:.9em;color:#e64980;font-weight:700;margin-top:10px;text-align:center\">🚨 레진 충전 비용은 별도예요!</span>",
            "price": 270000, "priceStyle": "single"
          },
          {
            "borderColor": "#ff87c2", "titleColor": "#c2255c", "title": "💔 아픈 신경 치료하기 (신경치료)",
            "description": "이미 신경이 죽었거나 🦠 세균에 감염되었을 때 필요해요. 감염된 신경을 싹~ 제거하고 깨끗하게 소독한 뒤, 특수 재료로 채워서 통증의 원인을 없애고 치아는 보존해요.<span style=\"display:block;font-size:.9em;color:#e64980;font-weight:700;margin-top:10px;text-align:center\">🚨 레진 충전 비용은 별도예요!</span>",
            "prices": [
                { "label": "앞이빨", "value": 330000 },
                { "label": "송곳니", "value": 770000 },
                { "label": "어금니(다근치)", "value": 880000 }
            ], "priceStyle": "list"
          },
          {
            "borderColor": "#4dabf7", "titleColor": "#1c7ed6", "title": "🎨 예쁘게 때워주기 (레진 치료)",
            "description": "충치나 마모, 살짝 깨진 부위를 치아 색과 비슷한 예쁜 재료로 메워서, 원래 모양과 기능을 되찾아주는 치료예요! 손상 범위와 치아에 따라 비용이 달라져요.",
            "prices": [
              { "label": "쪼꼬만 손상", "value": 55000 },
              { "label": "송곳니", "value": 110000 },
              { "label": "어금니", "value": 132000 }
            ], "priceStyle": "list"
          }
        ],
        "explanation": {
          "title": "💡 '신경 살리기' vs '신경 치료', 차이점이 뭐예요? 🧐",
          "content": [
            "<strong>VPT (신경 살리기) 🩹 :</strong> 살아있는 신경을 <strong>'보호'</strong>하는 거예요. 작은 상처에 연고 바르고 밴드 붙여서 새살이 돋게 하는 것과 같아요! 🥰",
            "<strong>신경치료 🧹 :</strong> 이미 아픈 신경을 <strong>'제거'</strong>하는 거예요. 썩은 부분을 깨끗이 파내고, 튼튼한 재료로 채워서 치아 기둥을 지키는 것과 같답니다! 💪",
            "<strong>따라서 치아가 부러졌다면, ⏳48시간 골든타임⏳ 안에 병원에 와주시는게 치아를 살릴 최고의 방법이에요! 🐶</strong>"
          ]
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
});

const formatPrice = (price) => {
    if (typeof price === 'number') {
        return `💸 ${price.toLocaleString('ko-KR')}원`;
    }
    return `💸 ${price}`;
};

function populateContent(data) {
    if (!data) return;
    if (data.main) {
        document.getElementById('main-header-title').innerHTML = data.main.headerTitle;
        document.getElementById('main-header-subtitle').innerHTML = data.main.headerSubtitle;

        const infoGrid = document.querySelector('#content-main .info-grid');
        infoGrid.innerHTML = `
            <div class="info-card" style="grid-column:1/-1; border-top:none;">
                <h3>${data.main.hours.title}</h3>
                <p style="color:#d81b60; font-weight:bold; text-align:center;">${data.main.hours.surgeryNotice}</p>
                <ul id="main-hours"></ul>
            </div>
        `;

        const hoursList = document.getElementById('main-hours');
        hoursList.innerHTML = data.main.hours.times.map(h => {
            let style = '';
            if (h.highlight) style = 'color:#d81b60;font-weight:bold';
            if (h.isHoliday) style = 'color:red';
            return `<li><strong style="${style}">${h.day}:</strong> ${h.time}</li>`;
        }).join('');
        
        const prideSection = document.getElementById('main-pride');
        prideSection.innerHTML = `<h2 style="color:#0277bd">${data.main.pride.title}</h2>` +
        data.main.pride.points.map(p => `
            <div style="margin-bottom: 20px;">
                <strong style="font-size: 1.2em; color: #0277bd;">${p.title}</strong>
                <ul style="list-style-type: '✔️ '; padding-left: 20px; margin-top: 10px;">${p.items.map(i => `<li style="margin-bottom: 8px;">${i}</li>`).join('')}</ul>
            </div>`).join('');

        document.getElementById('main-notice-title').innerHTML = data.main.notice.title;
        const noticeList = document.getElementById('main-notice-list');
        noticeList.innerHTML = data.main.notice.items.map(item => {
            return `<li>${item}</li>`;
        }).join('');
        
        const mainContainer = document.querySelector('#content-main .container > main');
        const parkingAndMapViewHTML = `
            <section class="info-section" style="margin-top: 30px;">
                <div class="info-grid">
                     <div class="info-card" style="grid-column:1/-1; border-top:none;">
                        <h3>${data.main.parking.title}</h3>
                        <ul>
                            ${data.main.parking.content.map(p => `<li><strong ${p.highlight ? 'style="color:#d81b60;font-weight:bold"' : ''}>${p.label}:</strong> ${p.desc}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </section>
            <section class="info-section" style="margin-top: 30px;">
                <div class="info-grid">
                    <div class="info-card" style="grid-column:1/-1; border-top:none; padding: 10px;">
                        <h3>🗺️ 네이버 지도로 위치 확인하기</h3>
                        <iframe src="https://new-map.naver.com/p/entry/place/16083453?c=15.00,0,0,0,dh" 
                                width="100%" 
                                height="450" 
                                style="border:0; border-radius: 15px;" 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </section>
        `;
        mainContainer.insertAdjacentHTML('beforeend', parkingAndMapViewHTML);

        const footer = document.getElementById('main-footer');
        footer.innerHTML = `<h2>${data.main.footer.title}</h2>
            <a href="${data.main.footer.kakaoLink}" target="_blank" class="action-button kakao-btn">💬 카카오톡 채널로 상담하기</a>
            <a href="${data.main.footer.telLink}" class="action-button tel-btn">📞 ${data.main.contact.phone}</a>`;
    }

    if (data.healthCheck) {
        document.getElementById('healthcheck-header-title-large').innerHTML = data.healthCheck.headerTitle;
        document.getElementById('healthcheck-header-subtitle-large').innerHTML = data.healthCheck.headerSubtitle;
        document.getElementById('large-dog-explanation-content').innerHTML = data.healthCheck.largeDogExplanation;
        document.getElementById('healthcheck-explanation-title-large').innerHTML = data.healthCheck.explanation.title;
        document.getElementById('healthcheck-explanation-content-large').innerHTML = (data.healthCheck.explanation.content || []).map(p => `<p>${p}</p>`).join('');
        
        renderHealthCheckPackages('large', data.healthCheck.packagesWith4Dx);

        const btnWith4DxLarge = document.getElementById('btn-healthcheck-with-4dx-large');
        const btnWithout4DxLarge = document.getElementById('btn-healthcheck-without-4dx-large');
        
        btnWith4DxLarge.addEventListener('click', () => {
            renderHealthCheckPackages('large', data.healthCheck.packagesWith4Dx);
            btnWith4DxLarge.classList.add('active');
            btnWithout4DxLarge.classList.remove('active');
        });

        btnWithout4DxLarge.addEventListener('click', () => {
            renderHealthCheckPackages('large', data.healthCheck.packagesWithout4Dx);
            btnWithout4DxLarge.classList.add('active');
            btnWith4DxLarge.classList.remove('active');
        });
    }

    if (data.scaling) {
        document.getElementById('scaling-header-title').innerHTML = data.scaling.headerTitle;
        document.getElementById('scaling-header-subtitle').innerHTML = data.scaling.headerSubtitle;
        document.getElementById('scaling-packages').innerHTML = data.scaling.packages.map(pkg => `
            <div class="package-card" style="border-top-color:${pkg.borderColor}">
                <h3 style="color:${pkg.titleColor}">${pkg.title}</h3>
                <ul>${(pkg.items || []).map(item => `<li>${item}</li>`).join('')}</ul>
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
        document.getElementById('extraction-header-title-large').innerHTML = data.extraction.headerTitle;
        document.getElementById('extraction-header-subtitle-large').innerHTML = data.extraction.headerSubtitle;
        document.getElementById('extraction-costs-large').innerHTML = data.extraction.costs.map(cost => {
            const priceInfo = cost.prices.map(p => `<div class="price-item"><span class="price-label">${p.label.replace(' (10kg 이상)','')}</span> <span class="price-value">${formatPrice(p.value)}</span></div>`).join('');
            return `<div class="cost-card"><h3>${cost.title}</h3><div class="description" style="flex-grow:1;">${cost.description}</div><div class="price-wrapper" style="text-align: right;">${priceInfo}</div></div>`;
        }).join('');
        document.getElementById('extraction-explanation-title-large').innerHTML = data.extraction.explanation.title;
        document.getElementById('extraction-explanation-content-large').innerHTML = (data.extraction.explanation.content || []).map(p => `<p>${p}</p>`).join('');
    }
  
    if(data.addons) {
        document.getElementById('addons-header-title-large').innerHTML = data.addons.headerTitle;
        document.getElementById('addons-header-subtitle-large').innerHTML = data.addons.headerSubtitle;
        document.getElementById('addons-costs-large').innerHTML = data.addons.costs.map(cost => `
            <div class="cost-card" style="border-top-color:${cost.borderColor}">
                <h3 style="color:${cost.titleColor}">${cost.title}</h3>
                 <div class="price-wrapper" style="text-align: right; border-top: none; padding-top: 0;">
                    ${(cost.prices || []).map(p => `<div class="price-item"><span class="price-label">${p.label}</span> <span class="price-value">${p.value}</span></div>`).join('')}
                </div>
            </div>
        `).join('');
        document.getElementById('addons-explanation-title-large').innerHTML = data.addons.explanation.title;
        document.getElementById('addons-explanation-content-large').innerHTML = (data.addons.explanation.content || []).map(p => `<p>${p}</p>`).join('');
    }
  
    if(data.nerve) {
        document.getElementById('nerve-header-title').innerHTML = data.nerve.headerTitle;
        document.getElementById('nerve-header-subtitle').innerHTML = data.nerve.headerSubtitle;
        
        document.getElementById('nerve-costs').innerHTML = data.nerve.costs.map(cost => `
            <div class="cost-card" style="border-top-color:${cost.borderColor}">
                <h3 style="color:${cost.titleColor}">${cost.title}</h3>
                <div class="description" style="flex-grow:1;">${cost.description}</div>
                <div class="price-wrapper" style="${cost.priceStyle === 'single' ? 'text-align:center' : 'text-align:right'}">
                    ${cost.priceStyle === 'single' ? 
                    `<span class="discount-price pulse" style="font-size:2.5em;color:#fa5252">👑 ${cost.price.toLocaleString('ko-KR')}원<small style="font-size:.5em;font-weight:400;color:#666;display:block">${cost.priceNote || ''}</small></span>` :
                    (cost.prices || []).map(p => `<div class="price-item"><span class="price-label">${p.label}</span> <span class="price-value" style="color:#fa5252;font-size:1.3em">${formatPrice(p.value)}</span></div>`).join('')
                    }
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
            <h3 style="color:${pkg.titleColor}">${pkg.title}</h3>
            <ul>${(pkg.items || []).map(item => `<li>${item}</li>`).join('')}</ul>
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

    showContent('content-main');
}