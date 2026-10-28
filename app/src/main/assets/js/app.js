// NEET Destroyer App Controller
(function() {
    'use strict';

    // --- State & LocalStorage ---
    const STORAGE_KEY = 'neet_destroyer_state_v2';

    const defaultState = {
        profile: {
            name: 'Aspirant',
            targetCollegeId: 'aiims_delhi',
            examDate: '2026-05-03',
            userClass: 'Class 11',
            wakeTime: '05:30',
            bedTime: '22:30',
            schoolHours: 6.5,
            schoolTravel: 0.75, // 45 min
            tuitionHours: 2.5,
            tuitionTravel: 0.5, // 30 min
            weakSubject: 'Physics',
            streak: 12,
            solvedToday: 42,
            focusMinutesToday: 95
        },
        syllabusProgress: {},
        ankiStats: {
            again: 3,
            hard: 5,
            good: 18,
            easy: 14
        },
        customCards: [],
        mistakes: [
            {
                id: 'm_01',
                subject: 'Physics',
                chapter: 'Current Electricity',
                question: 'Wire drawn to half length resistance change',
                reason: 'Calculation Trap: Forgot R is proportional to 1/A^2 when drawn/stretched',
                date: '2026-10-20',
                mastered: false
            },
            {
                id: 'm_02',
                subject: 'Chemistry',
                chapter: 'Aldehydes & Ketones',
                question: 'Cannizzaro reaction condition',
                reason: 'Conceptual Gap: Confused with Aldol, thought alpha-H was required',
                date: '2026-10-21',
                mastered: false
            },
            {
                id: 'm_03',
                subject: 'Botany',
                chapter: 'Cell Division',
                question: 'Stage of crossing over enzyme',
                reason: 'NCERT Misread: Forgot enzyme name is Recombinase in Pachytene',
                date: '2026-10-22',
                mastered: true
            }
        ]
    };

    let state = loadState();

    function loadState() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? Object.assign({}, defaultState, JSON.parse(saved)) : defaultState;
        } catch (e) {
            return defaultState;
        }
    }

    function saveState() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (e) {}
    }

    // Native Bridge Wrapper
    const Native = {
        toast: function(msg) {
            if (window.AndroidNative && window.AndroidNative.showToast) {
                window.AndroidNative.showToast(msg);
            } else {
                showInAppToast(msg);
            }
        },
        vibrate: function(ms) {
            if (window.AndroidNative && window.AndroidNative.vibrate) {
                window.AndroidNative.vibrate(ms);
            } else if (navigator.vibrate) {
                navigator.vibrate(ms);
            }
        },
        keepScreenOn: function(on) {
            if (window.AndroidNative && window.AndroidNative.setKeepScreenOn) {
                window.AndroidNative.setKeepScreenOn(on);
            }
        },
        share: function(title, body) {
            if (window.AndroidNative && window.AndroidNative.shareText) {
                window.AndroidNative.shareText(title, body);
            } else if (navigator.share) {
                navigator.share({ title, text: body }).catch(() => {});
            } else {
                alert(title + "\n\n" + body);
            }
        }
    };

    function showInAppToast(msg) {
        let toastEl = document.getElementById('in-app-toast');
        if (!toastEl) {
            toastEl = document.createElement('div');
            toastEl.id = 'in-app-toast';
            toastEl.style.cssText = 'position:fixed;bottom:76px;left:50%;transform:translateX(-50%);background:#06B6D4;color:#0F172A;padding:8px 16px;border-radius:20px;font-weight:700;font-size:12px;z-index:999;box-shadow:0 4px 12px rgba(0,0,0,0.5);transition:opacity 0.3s;pointer-events:none;';
            document.body.appendChild(toastEl);
        }
        toastEl.textContent = msg;
        toastEl.style.opacity = '1';
        clearTimeout(toastEl._timer);
        toastEl._timer = setTimeout(() => {
            toastEl.style.opacity = '0';
        }, 2200);
    }

    // --- Audio Synthesis for Ambient Focus and Chimes ---
    let audioCtx = null;
    let ambientNodes = null;

    function getAudioContext() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) audioCtx = new AudioContext();
        }
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    }

    function playBeep(freq = 587.33, duration = 0.2) {
        try {
            const ctx = getAudioContext();
            if (!ctx) return;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + duration);
        } catch (e) {}
    }

    function startAmbientSound(type) {
        stopAmbientSound();
        if (type === 'none') return;
        try {
            const ctx = getAudioContext();
            if (!ctx) return;

            if (type === 'binaural') {
                // 40Hz Gamma Focus Beats (200Hz Left, 240Hz Right)
                const merger = ctx.createChannelMerger(2);
                const oscL = ctx.createOscillator();
                const oscR = ctx.createOscillator();
                const gain = ctx.createGain();
                gain.gain.value = 0.08;

                oscL.frequency.value = 200;
                oscR.frequency.value = 240;

                oscL.connect(merger, 0, 0);
                oscR.connect(merger, 0, 1);
                merger.connect(gain);
                gain.connect(ctx.destination);

                oscL.start();
                oscR.start();
                ambientNodes = { stop: () => { oscL.stop(); oscR.stop(); } };
            } else if (type === 'rain' || type === 'whitenoise') {
                // Synthesized Pink / Brown Noise
                const bufferSize = ctx.sampleRate * 2;
                const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
                const data = buffer.getChannelData(0);
                let lastOut = 0.0;
                for (let i = 0; i < bufferSize; i++) {
                    const white = Math.random() * 2 - 1;
                    data[i] = (lastOut + (0.02 * white)) / 1.02; // Brown noise filter
                    lastOut = data[i];
                    data[i] *= 3.5;
                }
                const noise = ctx.createBufferSource();
                noise.buffer = buffer;
                noise.loop = true;

                const filter = ctx.createBiquadFilter();
                filter.type = type === 'rain' ? 'lowpass' : 'bandpass';
                filter.frequency.value = type === 'rain' ? 800 : 1200;

                const gain = ctx.createGain();
                gain.gain.value = 0.12;

                noise.connect(filter);
                filter.connect(gain);
                gain.connect(ctx.destination);

                noise.start();
                ambientNodes = { stop: () => { noise.stop(); } };
            }
        } catch (e) {}
    }

    function stopAmbientSound() {
        if (ambientNodes) {
            try { ambientNodes.stop(); } catch (e) {}
            ambientNodes = null;
        }
    }

    // --- Tab Navigation ---
    const tabs = document.querySelectorAll('.nav-item');
    const panes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = tab.getAttribute('data-tab');
            switchTab(targetId);
        });
    });

    function switchTab(tabId) {
        tabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-tab') === tabId));
        panes.forEach(p => p.classList.toggle('active', p.id === tabId));
        window.scrollTo(0, 0);
        Native.vibrate(20);
        if (tabId === 'tab-syllabus') renderSyllabus();
        if (tabId === 'tab-anki') renderAnki();
        if (tabId === 'tab-planner') renderPlanner();
        if (tabId === 'tab-dashboard') updateDashboard();
    }

    // --- Dashboard Logic ---
    function updateDashboard() {
        // Countdown
        const examDate = new Date(state.profile.examDate);
        const today = new Date();
        const diffTime = examDate - today;
        const diffDays = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
        const countdownEl = document.getElementById('days-countdown');
        if (countdownEl) countdownEl.textContent = `${diffDays} Days`;

        // Target College Card
        const college = NEET_DATA.colleges.find(c => c.id === state.profile.targetCollegeId) || NEET_DATA.colleges[0];
        const collegeNameEl = document.getElementById('dash-college-name');
        const collegeCutoffEl = document.getElementById('dash-college-cutoff');
        const collegeAirEl = document.getElementById('dash-college-air');
        if (collegeNameEl) collegeNameEl.textContent = college.name;
        if (collegeCutoffEl) collegeCutoffEl.textContent = `${college.score}+ / 720`;
        if (collegeAirEl) collegeAirEl.textContent = `Target AIR < ${college.air}`;

        // Global Syllabus Progress
        const totalChapters = NEET_DATA.chapters.length; // 97 Chapters
        let completedChs = 0;
        NEET_DATA.chapters.forEach(ch => {
            if (state.syllabusProgress[ch.id] && state.syllabusProgress[ch.id].completed) {
                completedChs++;
            }
        });
        const pct = Math.round((completedChs / totalChapters) * 100);
        const dashProgBar = document.getElementById('dash-syllabus-prog-bar');
        const dashProgText = document.getElementById('dash-syllabus-prog-text');
        if (dashProgBar) dashProgBar.style.width = `${pct}%`;
        if (dashProgText) dashProgText.textContent = `${completedChs}/${totalChapters} Chapters (${pct}%)`;

        // Subject Breakdown Progress
        const phyChs = NEET_DATA.chapters.filter(c => c.sub === 'Physics');
        const chemChs = NEET_DATA.chapters.filter(c => c.sub === 'Chemistry');
        const bioChs = NEET_DATA.chapters.filter(c => c.sub === 'Botany' || c.sub === 'Zoology' || c.sub === 'Biology');

        const phyDone = phyChs.filter(c => state.syllabusProgress[c.id]?.completed).length;
        const chemDone = chemChs.filter(c => state.syllabusProgress[c.id]?.completed).length;
        const bioDone = bioChs.filter(c => state.syllabusProgress[c.id]?.completed).length;

        setElemWidth('dash-phy-bar', Math.round((phyDone / phyChs.length) * 100));
        setElemText('dash-phy-text', `${phyDone}/${phyChs.length}`);

        setElemWidth('dash-chem-bar', Math.round((chemDone / chemChs.length) * 100));
        setElemText('dash-chem-text', `${chemDone}/${chemChs.length}`);

        setElemWidth('dash-bio-bar', Math.round((bioDone / bioChs.length) * 100));
        setElemText('dash-bio-text', `${bioDone}/${bioChs.length}`);

        // Solved & Focus
        setElemText('dash-solved-today', state.profile.solvedToday);
        setElemText('dash-focus-today', `${state.profile.focusMinutesToday}m`);
        setElemText('header-streak-count', state.profile.streak);

        // Score Gap Calculator Live Refresh
        calculateScoreGap();
    }

    function setElemWidth(id, pct) {
        const el = document.getElementById(id);
        if (el) el.style.width = `${pct}%`;
    }

    function setElemText(id, txt) {
        const el = document.getElementById(id);
        if (el) el.textContent = txt;
    }

    // Score & AIR Prediction Slider
    const scoreSlider = document.getElementById('score-calculator-slider');
    if (scoreSlider) {
        scoreSlider.addEventListener('input', calculateScoreGap);
    }

    function calculateScoreGap() {
        if (!scoreSlider) return;
        const currentScore = parseInt(scoreSlider.value, 10);
        setElemText('calc-current-score', currentScore);

        const college = NEET_DATA.colleges.find(c => c.id === state.profile.targetCollegeId) || NEET_DATA.colleges[0];
        const gap = college.score - currentScore;

        const gapEl = document.getElementById('calc-score-gap');
        if (gapEl) {
            if (gap <= 0) {
                gapEl.textContent = `🎯 SAFE ZONE! Score exceeds ${college.name} cutoff by ${Math.abs(gap)} marks!`;
                gapEl.style.color = '#10B981';
            } else {
                gapEl.textContent = `⚠️ Gap to ${college.name}: ${gap} Marks (${Math.ceil(gap / 4)} more questions needed)`;
                gapEl.style.color = '#F43F5E';
            }
        }

        // Predicted AIR Rank formula based on NEET historical trends
        let predictedAir = 1;
        if (currentScore >= 715) predictedAir = Math.round(1 + (720 - currentScore) * 12);
        else if (currentScore >= 700) predictedAir = Math.round(60 + (715 - currentScore) * 60);
        else if (currentScore >= 680) predictedAir = Math.round(960 + (700 - currentScore) * 150);
        else if (currentScore >= 650) predictedAir = Math.round(3960 + (680 - currentScore) * 350);
        else if (currentScore >= 600) predictedAir = Math.round(14460 + (650 - currentScore) * 700);
        else predictedAir = Math.round(49460 + (600 - currentScore) * 1500);

        setElemText('calc-predicted-air', `AIR ~ ${predictedAir.toLocaleString()}`);
    }

    // --- Complete 97 Syllabus Engine ---
    let syllabusFilterScope = 'All';
    let syllabusFilterSub = 'All';
    let syllabusFilterClass = 'All';
    let syllabusFilterPrio = 'All';
    let syllabusSearchQuery = '';

    const syllabusSearchInput = document.getElementById('syllabus-search');
    if (syllabusSearchInput) {
        syllabusSearchInput.addEventListener('input', (e) => {
            syllabusSearchQuery = e.target.value.toLowerCase().trim();
            renderSyllabus();
        });
    }

    document.querySelectorAll('[data-syllabus-scope]').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('[data-syllabus-scope]').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            syllabusFilterScope = pill.getAttribute('data-syllabus-scope');
            renderSyllabus();
        });
    });

    document.querySelectorAll('[data-syllabus-sub]').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('[data-syllabus-sub]').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            syllabusFilterSub = pill.getAttribute('data-syllabus-sub');
            renderSyllabus();
        });
    });

    document.querySelectorAll('[data-syllabus-class]').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('[data-syllabus-class]').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            syllabusFilterClass = pill.getAttribute('data-syllabus-class');
            renderSyllabus();
        });
    });

    function renderSyllabus() {
        const listEl = document.getElementById('syllabus-chapters-list');
        if (!listEl) return;

        const filtered = NEET_DATA.chapters.filter(ch => {
            if (syllabusFilterScope === 'NMC' && !ch.is_nmc) {
                return false;
            }
            if (syllabusFilterSub !== 'All') {
                if (syllabusFilterSub === 'Biology') {
                    if (ch.sub !== 'Botany' && ch.sub !== 'Zoology' && ch.sub !== 'Biology') return false;
                } else if (ch.sub !== syllabusFilterSub) {
                    return false;
                }
            }
            if (syllabusFilterClass !== 'All' && String(ch.class) !== syllabusFilterClass) {
                return false;
            }
            if (syllabusSearchQuery) {
                const matchName = ch.name.toLowerCase().includes(syllabusSearchQuery);
                const matchTopic = ch.topics.some(t => t.toLowerCase().includes(syllabusSearchQuery));
                if (!matchName && !matchTopic) return false;
            }
            return true;
        });

        if (filtered.length === 0) {
            listEl.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted);">No chapters found matching criteria.</div>';
            return;
        }

        let html = '';
        filtered.forEach(ch => {
            const isCompleted = state.syllabusProgress[ch.id]?.completed || false;
            const prioClass = `prio-${ch.prio}`;
            const nmcBadge = ch.is_nmc ? '<span class="badge prio-A" style="font-size:9px;">NMC Core</span>' : '<span class="badge prio-C" style="font-size:9px;">Historical NCERT</span>';
            html += `
            <div class="chapter-item ${isCompleted ? 'completed' : ''}" id="chapter-item-${ch.id}">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
                    <div>
                        <div style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
                            <span class="badge ${prioClass}">Priority ${ch.prio}</span>
                            ${nmcBadge}
                            <span style="font-size:11px;color:var(--text-muted);font-weight:700;">Class ${ch.class} • ${ch.sub}</span>
                        </div>
                        <h4 style="font-size:14px;font-weight:700;color:#fff;">${ch.name}</h4>
                    </div>
                    <button class="btn btn-sm ${isCompleted ? 'btn-success' : ''}" onclick="window.NEETApp.toggleChapterDone('${ch.id}')" style="white-space:nowrap;">
                        ${isCompleted ? '✓ Mastered' : 'Mark Done'}
                    </button>
                </div>

                <div style="display:flex;gap:12px;font-size:11px;color:var(--text-muted);margin:8px 0;">
                    <span>📊 Weightage: <strong style="color:var(--primary);">${ch.qs}</strong></span>
                    <span>🎯 Target: <strong style="color:var(--accent-gold);">${ch.target} Qs</strong></span>
                    <span>⏳ Est: <strong style="color:#fff;">${ch.days} days</strong></span>
                </div>

                <details style="margin-top:6px;background:var(--bg-elevated);border-radius:8px;padding:8px 10px;">
                    <summary style="font-size:11px;font-weight:700;color:var(--primary);cursor:pointer;">
                        High-Yield Micro-Topics & Question Bank (${ch.target} Qs in neet_questions.db)
                    </summary>
                    <ul style="list-style:none;padding-top:8px;font-size:12px;">
                        ${ch.topics.map((t, idx) => `
                            <li style="padding:4px 0;display:flex;align-items:center;gap:6px;color:#CBD5E1;">
                                <span style="color:var(--primary);font-size:10px;">●</span> ${t}
                            </li>
                        `).join('')}
                    </ul>
                </details>
            </div>
            `;
        });

        listEl.innerHTML = html;
    }

    function toggleChapterDone(chId) {
        if (!state.syllabusProgress[chId]) state.syllabusProgress[chId] = {};
        const cur = state.syllabusProgress[chId].completed || false;
        state.syllabusProgress[chId].completed = !cur;
        saveState();
        Native.vibrate(40);
        Native.toast(!cur ? "Chapter marked as Mastered! 🎉" : "Chapter marked uncompleted.");
        renderSyllabus();
        updateDashboard();
    }

    // --- Anki Spaced Repetition Engine ---
    let ankiCards = [];
    let currentAnkiIndex = 0;
    let ankiFilter = 'All';

    document.querySelectorAll('[data-anki-filter]').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('[data-anki-filter]').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            ankiFilter = pill.getAttribute('data-anki-filter');
            loadAnkiDeck();
        });
    });

    function loadAnkiDeck() {
        const allCards = [...NEET_DATA.flashcards, ...state.customCards];
        if (ankiFilter === 'All') {
            ankiCards = allCards;
        } else {
            ankiCards = allCards.filter(c => c.subject === ankiFilter);
        }
        currentAnkiIndex = 0;
        renderAnkiCard();
    }

    function renderAnki() {
        loadAnkiDeck();
        setElemText('anki-count-again', state.ankiStats.again);
        setElemText('anki-count-hard', state.ankiStats.hard);
        setElemText('anki-count-good', state.ankiStats.good);
        setElemText('anki-count-easy', state.ankiStats.easy);
    }

    function renderAnkiCard() {
        const cardFront = document.getElementById('anki-front-text');
        const cardBack = document.getElementById('anki-back-text');
        const cardTag = document.getElementById('anki-card-tag');
        const cardRef = document.getElementById('anki-card-ref');
        const cardSub = document.getElementById('anki-card-sub');
        const cardCounter = document.getElementById('anki-deck-counter');
        const cardWrapper = document.getElementById('anki-flashcard');

        if (!cardWrapper) return;
        cardWrapper.classList.remove('flipped');

        if (ankiCards.length === 0) {
            if (cardFront) cardFront.innerHTML = '<h3>No cards in this deck!</h3><p>Tap + Add Card to create one.</p>';
            return;
        }

        const card = ankiCards[currentAnkiIndex];
        if (cardFront) cardFront.textContent = card.front;
        if (cardBack) cardBack.textContent = card.back;
        if (cardTag) cardTag.textContent = card.tag || 'High-Yield';
        if (cardRef) cardRef.textContent = card.ncertRef || '';
        if (cardSub) cardSub.textContent = `${card.subject} • ${card.chapter}`;
        if (cardCounter) cardCounter.textContent = `${currentAnkiIndex + 1} / ${ankiCards.length}`;
    }

    function flipAnkiCard() {
        const cardWrapper = document.getElementById('anki-flashcard');
        if (cardWrapper) {
            cardWrapper.classList.toggle('flipped');
            playBeep(440, 0.05);
            Native.vibrate(15);
        }
    }

    function rateAnki(rating) {
        if (ankiCards.length === 0) return;
        state.ankiStats[rating] = (state.ankiStats[rating] || 0) + 1;
        state.profile.solvedToday += 1;
        saveState();

        Native.vibrate(30);
        playBeep(rating === 'again' ? 300 : (rating === 'easy' ? 650 : 500), 0.1);

        currentAnkiIndex = (currentAnkiIndex + 1) % ankiCards.length;
        renderAnkiCard();
        setElemText(`anki-count-${rating}`, state.ankiStats[rating]);
        setElemText('dash-solved-today', state.profile.solvedToday);
    }

    // --- Pomodoro & Deep Work Focus Engine ---
    let timerTotalSeconds = 25 * 60;
    let timerRemainingSeconds = 25 * 60;
    let timerInterval = null;
    let timerIsRunning = false;
    let timerPreset = 25;

    function setFocusPreset(minutes) {
        if (timerIsRunning) pauseFocusTimer();
        timerPreset = minutes;
        timerTotalSeconds = minutes * 60;
        timerRemainingSeconds = timerTotalSeconds;
        updateTimerDisplay();
        document.querySelectorAll('[data-timer-preset]').forEach(b => {
            b.classList.toggle('btn-primary', parseInt(b.getAttribute('data-timer-preset'), 10) === minutes);
        });
    }

    function toggleFocusTimer() {
        if (timerIsRunning) {
            pauseFocusTimer();
        } else {
            startFocusTimer();
        }
    }

    function startFocusTimer() {
        timerIsRunning = true;
        Native.keepScreenOn(true);
        Native.vibrate(50);
        playBeep(523.25, 0.2); // C5
        setElemText('focus-start-btn', '⏸ Pause');
        setElemText('focus-timer-status', 'Focusing...');

        const soundSelect = document.getElementById('ambient-sound-select');
        if (soundSelect && soundSelect.value !== 'none') {
            startAmbientSound(soundSelect.value);
        }

        timerInterval = setInterval(() => {
            if (timerRemainingSeconds > 0) {
                timerRemainingSeconds--;
                updateTimerDisplay();
            } else {
                completeFocusSession();
            }
        }, 1000);
    }

    function pauseFocusTimer() {
        timerIsRunning = false;
        clearInterval(timerInterval);
        stopAmbientSound();
        Native.keepScreenOn(false);
        setElemText('focus-start-btn', '▶ Resume');
        setElemText('focus-timer-status', 'Paused');
    }

    function resetFocusTimer() {
        pauseFocusTimer();
        timerRemainingSeconds = timerTotalSeconds;
        updateTimerDisplay();
        setElemText('focus-start-btn', '▶ Start Focus');
        setElemText('focus-timer-status', 'Ready');
    }

    function completeFocusSession() {
        pauseFocusTimer();
        Native.vibrate(500);
        playBeep(880, 0.5); // High completion chime
        state.profile.focusMinutesToday += timerPreset;
        saveState();
        Native.toast(`🎉 Focus Session Complete! Logged +${timerPreset} min.`);
        updateDashboard();
        setElemText('focus-timer-status', 'Completed! Take a 5-min break.');
    }

    function updateTimerDisplay() {
        const mins = Math.floor(timerRemainingSeconds / 60);
        const secs = timerRemainingSeconds % 60;
        const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        setElemText('focus-time-display', formatted);

        // Circular SVG stroke
        const circle = document.getElementById('timer-svg-circle');
        if (circle) {
            const circumference = 2 * Math.PI * 90; // r=90 => ~565.48
            const offset = circumference - (timerRemainingSeconds / timerTotalSeconds) * circumference;
            circle.style.strokeDashoffset = offset;
        }
    }

    // --- Mock Test Engine ---
    let mockQuestions = [];
    let mockAnswers = {}; // { [index]: selectedOptionNumber }
    let mockCurrentIndex = 0;
    let mockTimerSeconds = 200 * 60; // 3h 20m NEET time
    let mockTimerInterval = null;
    let mockIsActive = false;

    function startMockTest(questionCount = 20) {
        mockQuestions = [...NEET_DATA.questions].slice(0, questionCount);
        mockAnswers = {};
        mockCurrentIndex = 0;
        mockTimerSeconds = Math.min(200 * 60, questionCount * 60 * 1.5); // proportional
        mockIsActive = true;

        document.getElementById('mock-intro-card').style.display = 'none';
        document.getElementById('mock-active-card').style.display = 'block';
        document.getElementById('mock-result-card').style.display = 'none';

        startMockTimer();
        renderMockQuestion();
        Native.toast("NEET Mock Test Started! Negative marking active (-1, +4).");
    }

    function startMockTimer() {
        clearInterval(mockTimerInterval);
        mockTimerInterval = setInterval(() => {
            if (mockTimerSeconds > 0) {
                mockTimerSeconds--;
                const m = Math.floor(mockTimerSeconds / 60);
                const s = mockTimerSeconds % 60;
                setElemText('mock-timer-display', `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`);
            } else {
                submitMockTest();
            }
        }, 1000);
    }

    function renderMockQuestion() {
        const q = mockQuestions[mockCurrentIndex];
        if (!q) return;

        setElemText('mock-q-subject', `${q.subject} • Section ${q.section}`);
        setElemText('mock-q-counter', `Question ${mockCurrentIndex + 1} of ${mockQuestions.length}`);
        setElemText('mock-q-text', q.text);

        const optionsContainer = document.getElementById('mock-options-container');
        if (optionsContainer) {
            const letters = ['A', 'B', 'C', 'D'];
            optionsContainer.innerHTML = q.options.map((opt, i) => {
                const isSelected = mockAnswers[mockCurrentIndex] === i;
                return `
                <div class="option-item ${isSelected ? 'selected' : ''}" onclick="window.NEETApp.selectOption(${i})">
                    <div class="option-circle">${letters[i]}</div>
                    <div style="font-size:13px;color:#fff;">${opt}</div>
                </div>
                `;
            }).join('');
        }

        setElemText('mock-btn-prev', mockCurrentIndex === 0 ? 'Start' : '← Previous');
        setElemText('mock-btn-next', mockCurrentIndex === mockQuestions.length - 1 ? 'Submit Test' : 'Next →');
    }

    function selectOption(optionIndex) {
        mockAnswers[mockCurrentIndex] = optionIndex;
        Native.vibrate(20);
        playBeep(480, 0.05);
        renderMockQuestion();
    }

    function mockNav(direction) {
        if (direction === 'prev' && mockCurrentIndex > 0) {
            mockCurrentIndex--;
            renderMockQuestion();
        } else if (direction === 'next') {
            if (mockCurrentIndex < mockQuestions.length - 1) {
                mockCurrentIndex++;
                renderMockQuestion();
            } else {
                if (confirm("Are you sure you want to submit your NEET Mock Test?")) {
                    submitMockTest();
                }
            }
        }
    }

    function submitMockTest() {
        clearInterval(mockTimerInterval);
        mockIsActive = false;

        let correct = 0;
        let incorrect = 0;
        let unattempted = 0;
        let loggedMistakes = [];

        mockQuestions.forEach((q, idx) => {
            const ans = mockAnswers[idx];
            if (ans === undefined) {
                unattempted++;
            } else if (ans === q.correct) {
                correct++;
            } else {
                incorrect++;
                loggedMistakes.push({
                    id: 'm_' + Date.now() + '_' + idx,
                    subject: q.subject,
                    chapter: q.chapter,
                    question: q.text.slice(0, 70) + '...',
                    reason: 'Test Mistake: Selected ' + q.options[ans] + ' instead of ' + q.options[q.correct],
                    date: new Date().toISOString().split('T')[0],
                    mastered: false
                });
            }
        });

        // Score: +4 for correct, -1 for incorrect
        const score = (correct * 4) - (incorrect * 1);
        const maxScore = mockQuestions.length * 4;

        // Automatically append mistakes to notebook
        if (loggedMistakes.length > 0) {
            state.mistakes = [...loggedMistakes, ...state.mistakes];
            saveState();
        }

        document.getElementById('mock-active-card').style.display = 'none';
        document.getElementById('mock-result-card').style.display = 'block';

        setElemText('result-score', `${score} / ${maxScore}`);
        setElemText('result-correct', `${correct} (+${correct * 4})`);
        setElemText('result-incorrect', `${incorrect} (-${incorrect})`);
        setElemText('result-unattempted', unattempted);

        const accuracy = (correct + incorrect) > 0 ? Math.round((correct / (correct + incorrect)) * 100) : 0;
        setElemText('result-accuracy', `${accuracy}%`);

        Native.vibrate(300);
        playBeep(score >= (maxScore * 0.8) ? 784 : 392, 0.3);

        // Solutions review list
        const reviewEl = document.getElementById('mock-solutions-list');
        if (reviewEl) {
            reviewEl.innerHTML = mockQuestions.map((q, idx) => {
                const userAns = mockAnswers[idx];
                const isRight = userAns === q.correct;
                const isSkipped = userAns === undefined;
                return `
                <div style="background:var(--bg-elevated);border-radius:10px;padding:12px;margin-bottom:8px;border-left:4px solid ${isRight ? '#10B981' : (isSkipped ? '#94A3B8' : '#F43F5E')};">
                    <div style="font-weight:700;font-size:12px;color:#fff;margin-bottom:4px;">
                        Q${idx+1}: ${q.text}
                    </div>
                    <div style="font-size:11px;color:${isRight ? '#10B981' : '#F43F5E'};margin-bottom:4px;">
                        ${isSkipped ? '⚪ Unattempted' : (isRight ? '✅ Correct (+4)' : `❌ Incorrect (-1) | You picked: ${q.options[userAns]}`)}
                    </div>
                    <div style="font-size:11px;color:#CBD5E1;background:rgba(0,0,0,0.2);padding:6px;border-radius:6px;">
                        <strong style="color:var(--primary);">Correct: ${q.options[q.correct]}</strong><br>
                        <em>${q.explanation}</em>
                    </div>
                </div>
                `;
            }).join('');
        }
    }

    // --- Mistake Notebook & Timetable Planner ---
    function renderPlanner() {
        renderMistakeNotebook();
        calculateTimetable();
        renderRoadmaps();
    }

    function renderMistakeNotebook() {
        const listEl = document.getElementById('mistakes-list');
        if (!listEl) return;

        if (state.mistakes.length === 0) {
            listEl.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text-muted);">No mistakes logged yet! Keep solving questions.</div>';
            return;
        }

        listEl.innerHTML = state.mistakes.map(m => `
            <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:10px;padding:12px;margin-bottom:8px;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                    <span class="badge ${m.subject === 'Physics' ? 'prio-A' : (m.subject === 'Chemistry' ? 'prio-B' : 'prio-C')}">${m.subject}</span>
                    <span style="font-size:10px;color:var(--text-muted);">${m.date}</span>
                </div>
                <div style="font-weight:700;font-size:13px;color:#fff;margin-bottom:4px;">${m.question}</div>
                <div style="font-size:11px;color:#FCA5A5;background:rgba(239,68,68,0.1);padding:6px;border-radius:6px;margin-bottom:6px;">
                    ⚠️ ${m.reason}
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-size:11px;color:${m.mastered ? '#10B981' : '#F59E0B'};font-weight:700;">
                        ${m.mastered ? '✓ Mastered' : '⏳ Needs Revision'}
                    </span>
                    <button class="btn btn-sm" onclick="window.NEETApp.toggleMistakeMastered('${m.id}')">
                        ${m.mastered ? 'Re-open' : 'Mark Resolved'}
                    </button>
                </div>
            </div>
        `).join('');
    }

    function toggleMistakeMastered(id) {
        const item = state.mistakes.find(m => m.id === id);
        if (item) {
            item.mastered = !item.mastered;
            saveState();
            Native.toast(item.mastered ? "Mistake marked as resolved! 🧠" : "Marked for revision.");
            renderMistakeNotebook();
        }
    }

    function calculateTimetable() {
        const p = state.profile;
        const wakeH = parseInt(p.wakeTime.split(':')[0], 10) + parseInt(p.wakeTime.split(':')[1], 10)/60;
        const bedH = parseInt(p.bedTime.split(':')[0], 10) + parseInt(p.bedTime.split(':')[1], 10)/60;
        const totalWaking = (bedH >= wakeH) ? (bedH - wakeH) : (24 - wakeH + bedH);

        const schoolTotal = p.schoolHours + (p.schoolTravel * 2);
        const tuitionTotal = p.tuitionHours + (p.tuitionTravel * 2);
        const essentials = 3.5; // meals, hygiene, buffer

        const netStudyHours = Math.max(1.5, Math.round((totalWaking - schoolTotal - tuitionTotal - essentials) * 10) / 10);
        setElemText('tt-net-hours', `${netStudyHours} Hours`);

        // Generate personalized study blocks
        const scheduleContainer = document.getElementById('tt-schedule-blocks');
        if (scheduleContainer) {
            scheduleContainer.innerHTML = `
                <div style="background:var(--bg-elevated);border-left:4px solid var(--primary);padding:10px;border-radius:6px;margin-bottom:6px;">
                    <strong style="color:var(--primary);font-size:12px;">🌅 05:45 - 06:45 AM (1.0 hr) — Active Recall & Anki</strong>
                    <div style="font-size:11px;color:#CBD5E1;">Review 50 Spaced Repetition cards (Biology NCERT lines & Chemistry named reactions).</div>
                </div>
                <div style="background:var(--bg-elevated);border-left:4px solid var(--accent-red);padding:10px;border-radius:6px;margin-bottom:6px;">
                    <strong style="color:#FB7185;font-size:12px;">⚡ 04:30 - 06:00 PM (1.5 hrs) — Weak Subject Deep Drill (${p.weakSubject})</strong>
                    <div style="font-size:11px;color:#CBD5E1;">High-intensity problem solving: 45 numericals under timed conditions without solutions.</div>
                </div>
                <div style="background:var(--bg-elevated);border-left:4px solid var(--accent-gold);padding:10px;border-radius:6px;margin-bottom:6px;">
                    <strong style="color:#FBBF24;font-size:12px;">🔬 08:30 - 09:45 PM (1.25 hrs) — Chemistry / Biology NCERT Deep Read</strong>
                    <div style="font-size:11px;color:#CBD5E1;">Line-by-line NCERT decoding, diagram analysis, and summary margin notes.</div>
                </div>
                <div style="background:var(--bg-elevated);border-left:4px solid var(--accent-green);padding:10px;border-radius:6px;margin-bottom:6px;">
                    <strong style="color:#34D399;font-size:12px;">🎯 10:00 - 10:30 PM (0.5 hr) — Daily Mistake Notebook Analysis</strong>
                    <div style="font-size:11px;color:#CBD5E1;">Re-solve all wrong questions from today; tag silly mistakes vs conceptual holes.</div>
                </div>
                <div style="background:rgba(245,158,11,0.1);border:1px dashed var(--accent-gold);padding:8px 10px;border-radius:6px;margin-top:10px;font-size:11px;color:#FBBF24;">
                    🔔 <strong>Sunday Golden Rule:</strong> Full mock test strictly between <strong>2:00 PM – 5:20 PM</strong> for circadian NTA alignment!
                </div>
            `;
        }
    }

    function renderRoadmaps() {
        const road90El = document.getElementById('roadmap-90-container');
        if (road90El) {
            road90El.innerHTML = NEET_DATA.roadmap90.map(w => `
                <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:8px;padding:10px;margin-bottom:8px;">
                    <div style="display:flex;justify-content:space-between;font-weight:700;font-size:12px;color:var(--primary);margin-bottom:4px;">
                        <span>Week ${w.week}: ${w.phase}</span>
                        <span>🎯 ${w.targetQs} Qs</span>
                    </div>
                    <div style="font-size:11px;color:#fff;">⚛️ <strong>Phy:</strong> ${w.physics}</div>
                    <div style="font-size:11px;color:#fff;">🧪 <strong>Chem:</strong> ${w.chem}</div>
                    <div style="font-size:11px;color:#fff;">🌿 <strong>Bio:</strong> ${w.bio}</div>
                </div>
            `).join('');
        }

        const road15El = document.getElementById('roadmap-15m-container');
        if (road15El) {
            road15El.innerHTML = NEET_DATA.roadmap15m.map(p => `
                <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:8px;padding:12px;margin-bottom:8px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                        <span class="badge prio-A">Phase ${p.phase}</span>
                        <span style="font-size:11px;color:var(--accent-gold);font-weight:700;">${p.duration}</span>
                    </div>
                    <div style="font-weight:700;font-size:13px;color:#fff;margin-bottom:2px;">${p.title}</div>
                    <div style="font-size:11px;color:var(--text-muted);">${p.goal}</div>
                </div>
            `).join('');
        }
    }

    // --- Onboarding / Settings Modal ---
    function openSettingsModal() {
        const modal = document.getElementById('settings-modal');
        if (!modal) return;
        const selCollege = document.getElementById('settings-college-select');
        if (selCollege) {
            selCollege.innerHTML = NEET_DATA.colleges.map(c => `
                <option value="${c.id}" ${c.id === state.profile.targetCollegeId ? 'selected' : ''}>
                    ${c.name} (Cutoff: ${c.score}+ | AIR < ${c.air})
                </option>
            `).join('');
        }
        document.getElementById('settings-exam-date').value = state.profile.examDate;
        document.getElementById('settings-user-class').value = state.profile.userClass;
        document.getElementById('settings-weak-sub').value = state.profile.weakSubject;
        document.getElementById('settings-school-hours').value = state.profile.schoolHours;
        document.getElementById('settings-tuition-hours').value = state.profile.tuitionHours;
        modal.classList.add('active');
    }

    function closeSettingsModal() {
        const modal = document.getElementById('settings-modal');
        if (modal) modal.classList.remove('active');
    }

    function saveSettings() {
        state.profile.targetCollegeId = document.getElementById('settings-college-select').value;
        state.profile.examDate = document.getElementById('settings-exam-date').value;
        state.profile.userClass = document.getElementById('settings-user-class').value;
        state.profile.weakSubject = document.getElementById('settings-weak-sub').value;
        state.profile.schoolHours = parseFloat(document.getElementById('settings-school-hours').value) || 6;
        state.profile.tuitionHours = parseFloat(document.getElementById('settings-tuition-hours').value) || 2.5;

        saveState();
        closeSettingsModal();
        Native.toast("Personalization saved! Timetable & cutoffs updated.");
        updateDashboard();
        calculateTimetable();
    }

    // --- Public App Interface ---
    window.NEETApp = {
        switchTab,
        toggleChapterDone,
        flipAnkiCard,
        rateAnki,
        setFocusPreset,
        toggleFocusTimer,
        resetFocusTimer,
        startMockTest,
        selectOption,
        mockNav,
        submitMockTest,
        toggleMistakeMastered,
        openSettingsModal,
        closeSettingsModal,
        saveSettings,
        shareScorecard: function() {
            const college = NEET_DATA.colleges.find(c => c.id === state.profile.targetCollegeId) || NEET_DATA.colleges[0];
            Native.share("NEET Destroyer Daily Milestone", `🎯 NEET Destroyer Milestone!\nTarget: ${college.name} (Score: ${college.score}+)\n🔥 Streak: ${state.profile.streak} Days\n📚 Solved Today: ${state.profile.solvedToday} Qs\n⏱ Focus: ${state.profile.focusMinutesToday} mins`);
        }
    };

    // Initialize on load
    window.addEventListener('DOMContentLoaded', () => {
        updateDashboard();
        setFocusPreset(25);
        updateTimerDisplay();
    });

})();
