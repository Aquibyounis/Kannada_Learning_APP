import { useState, useMemo, useCallback, useEffect } from "react";
import {
  Card,
  Button,
  Progress,
  Typography,
  Tag,
  ConfigProvider,
  Collapse,
  theme as antTheme,
  Segmented,
  Radio,
  Badge,
  Modal,
} from "antd";
import {
  SoundOutlined,
  RightOutlined,
  LeftOutlined,
  BulbOutlined,
  BookOutlined,
  ReadOutlined,
  CheckOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  SunOutlined,
  MoonOutlined,
  TrophyOutlined,
  StarFilled,
  FireFilled,
  CloseOutlined,
} from "@ant-design/icons";
import {
  keywords,
  sentences,
  grammarTips,
  keywordCategories,
  sentenceCategories,
  categoryConfig,
} from "./phrases";

const { Title, Text } = Typography;

/* ─── Audio helper ─── */
function speakKannada(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "kn-IN";
  u.rate = 0.85;
  window.speechSynthesis.speak(u);
}

/* ─── Quiz helpers ─── */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateQuizQuestions(pool, count = 10) {
  if (pool.length < 4) return [];
  const questions = [];
  const selected = shuffle(pool).slice(0, Math.min(count, pool.length));

  for (const item of selected) {
    const isKannadaToEnglish = Math.random() > 0.5;
    const wrongPool = pool.filter((w) => w.id !== item.id);
    const distractors = shuffle(wrongPool).slice(0, 3);

    if (isKannadaToEnglish) {
      const options = shuffle([
        item.english,
        ...distractors.map((d) => d.english),
      ]);
      questions.push({
        id: item.id,
        question: item.kannada,
        hint: item.transliteration,
        answer: item.english,
        options,
        type: "kannada→english",
      });
    } else {
      const options = shuffle([
        item.kannada,
        ...distractors.map((d) => d.kannada),
      ]);
      questions.push({
        id: item.id,
        question: item.english,
        hint: null,
        answer: item.kannada,
        options,
        type: "english→kannada",
      });
    }
  }
  return questions;
}

/* ═══════════════════════════════════════════
   APP
   ═══════════════════════════════════════════ */
export default function App() {
  /* ── Theme ── */
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("kn-theme");
    return saved !== null ? saved === "dark" : true;
  });

  useEffect(() => {
    localStorage.setItem("kn-theme", isDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  /* ── Navigation ── */
  const [activeTab, setActiveTab] = useState("keywords");

  /* ── Learning state ── */
  const [learnedKws, setLearnedKws] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem("kn-kw") || "[]")); }
    catch { return new Set(); }
  });
  const [learnedSns, setLearnedSns] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem("kn-sn") || "[]")); }
    catch { return new Set(); }
  });

  useEffect(() => { localStorage.setItem("kn-kw", JSON.stringify([...learnedKws])); }, [learnedKws]);
  useEffect(() => { localStorage.setItem("kn-sn", JSON.stringify([...learnedSns])); }, [learnedSns]);

  /* ── Category filters ── */
  const [kwCat, setKwCat] = useState("All");
  const [snCat, setSnCat] = useState("All");

  /* ── Sentence nav ── */
  const [snIdx, setSnIdx] = useState(0);
  const [showBreakdown, setShowBreakdown] = useState(false);

  /* ── Quiz state ── */
  const [quizCat, setQuizCat] = useState(null); // null = not started
  const [quizMode, setQuizMode] = useState("all"); // "all" | "learned"
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizSelected, setQuizSelected] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [quizAnswered, setQuizAnswered] = useState(false);

  /* ── Filtered data ── */
  const filteredKws = useMemo(
    () => (kwCat === "All" ? keywords : keywords.filter((k) => k.category === kwCat)),
    [kwCat]
  );
  const filteredSns = useMemo(
    () => (snCat === "All" ? sentences : sentences.filter((s) => s.category === snCat)),
    [snCat]
  );

  /* ── Progress ── */
  const totalItems = keywords.length + sentences.length;
  const learnedCount = learnedKws.size + learnedSns.size;
  const pct = Math.round((learnedCount / totalItems) * 100);

  /* ── Handlers ── */
  const toggleKw = useCallback((id) => {
    setLearnedKws((prev) => {
      const s = new Set(prev);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });
  }, []);

  const toggleSn = useCallback((id) => {
    setLearnedSns((prev) => {
      const s = new Set(prev);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });
  }, []);

  const sn = filteredSns[snIdx] || filteredSns[0];

  useEffect(() => { setSnIdx(0); setShowBreakdown(false); }, [snCat]);

  /* ── Quiz start ── */
  const startQuiz = (cat) => {
    let pool = keywords.filter((k) => k.category === cat);
    if (quizMode === "learned") {
      pool = pool.filter((k) => learnedKws.has(k.id));
    }
    const qs = generateQuizQuestions(pool, 10);
    if (qs.length === 0) {
      Modal.info({
        title: "Not enough words!",
        content: quizMode === "learned"
          ? `You need to learn at least 4 words in "${categoryConfig[cat]?.label || cat}" first.`
          : `Not enough words in this category.`,
      });
      return;
    }
    setQuizCat(cat);
    setQuizQuestions(qs);
    setQuizIdx(0);
    setQuizScore(0);
    setQuizDone(false);
    setQuizSelected(null);
    setQuizAnswered(false);
  };

  const answerQuiz = (option) => {
    if (quizAnswered) return;
    setQuizSelected(option);
    setQuizAnswered(true);
    if (option === quizQuestions[quizIdx].answer) {
      setQuizScore((s) => s + 1);
    }
  };

  const nextQuizQ = () => {
    if (quizIdx + 1 >= quizQuestions.length) {
      setQuizDone(true);
    } else {
      setQuizIdx((i) => i + 1);
      setQuizSelected(null);
      setQuizAnswered(false);
    }
  };

  const resetQuiz = () => {
    setQuizCat(null);
    setQuizQuestions([]);
    setQuizIdx(0);
    setQuizScore(0);
    setQuizDone(false);
    setQuizSelected(null);
    setQuizAnswered(false);
  };

  /* ── Quiz level helpers ── */
  const getCatStats = (cat) => {
    const catKws = keywords.filter((k) => k.category === cat);
    const learned = catKws.filter((k) => learnedKws.has(k.id)).length;
    return { total: catKws.length, learned };
  };

  const getLevel = (learned, total) => {
    const pct = total > 0 ? learned / total : 0;
    if (pct >= 0.8) return { label: "Advanced", color: "#f59e0b", icon: <FireFilled /> };
    if (pct >= 0.4) return { label: "Intermediate", color: "#3b82f6", icon: <StarFilled /> };
    return { label: "Beginner", color: "#22c55e", icon: <BookOutlined /> };
  };

  /* ═══════════ RENDER ═══════════ */
  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
        token: {
          colorPrimary: "#7c3aed",
          borderRadius: 12,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        },
      }}
    >
      <div className={`app-wrapper ${isDark ? "dark" : "light"}`}>
        {/* Background orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="app-container">
          {/* ── Header ── */}
          <header className="app-header">
            <div className="header-title-row">
              <span className="header-emoji">🇮🇳</span>
              <Title level={3} style={{ margin: 0, color: isDark ? "#fff" : "#1a1a2e" }}>
                Kannada Coach
              </Title>
              <button
                className="theme-toggle"
                onClick={() => setIsDark((d) => !d)}
                aria-label="Toggle theme"
              >
                {isDark ? <SunOutlined /> : <MoonOutlined />}
              </button>
            </div>
            <Text className="header-subtitle">
              Learn Kannada words & phrases visually
            </Text>
          </header>

          {/* ── Progress ── */}
          <div className="progress-section">
            <div className="progress-label">
              <Text style={{ color: isDark ? "#94a3b8" : "#64748b", fontSize: 13 }}>
                📊 Learning Progress
              </Text>
              <Text style={{ color: isDark ? "#a78bfa" : "#7c3aed", fontWeight: 600, fontSize: 13 }}>
                {learnedCount} / {totalItems}
              </Text>
            </div>
            <Progress
              percent={pct}
              showInfo={false}
              strokeColor={{ from: "#7c3aed", to: "#a78bfa" }}
              trailColor={isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}
              size="small"
            />
          </div>

          {/* ── Tab Switcher ── */}
          <Segmented
            block
            value={activeTab}
            onChange={(v) => { setActiveTab(v); resetQuiz(); }}
            className="tab-switcher"
            options={[
              { label: "📖 Words", value: "keywords", icon: <BookOutlined /> },
              { label: "🧩 Phrases", value: "sentences", icon: <ReadOutlined /> },
              { label: "🧠 Quiz", value: "quiz", icon: <TrophyOutlined /> },
              { label: "💡 Tips", value: "tips", icon: <BulbOutlined /> },
            ]}
          />

          {/* ════════════════════════════════
              KEYWORDS TAB
              ════════════════════════════════ */}
          {activeTab === "keywords" && (
            <div className="tab-content">
              <div className="category-tabs">
                {keywordCategories.map((c) => (
                  <Tag
                    key={c}
                    className={`category-tag ${kwCat === c ? "active" : ""}`}
                    onClick={() => setKwCat(c)}
                  >
                    {c === "All" ? "All" : `${categoryConfig[c]?.emoji || ""} ${categoryConfig[c]?.label || c}`}
                  </Tag>
                ))}
              </div>

              <div className="keyword-grid">
                {filteredKws.map((kw) => (
                  <div
                    key={kw.id}
                    className={`keyword-card ${learnedKws.has(kw.id) ? "learned" : ""}`}
                  >
                    <div className="kw-category-dot" style={{ background: categoryConfig[kw.category]?.color || "#7c3aed" }} />
                    <span className="kw-translit">{kw.transliteration}</span>
                    <span className="kw-english">{kw.english}</span>
                    <div className="kw-bottom">
                      <span className="kw-kannada">{kw.kannada}</span>
                      <Button
                        type="text"
                        size="small"
                        icon={<SoundOutlined />}
                        className="kw-sound-btn"
                        onClick={() => speakKannada(kw.kannada)}
                      />
                    </div>
                    <Button
                      type="text"
                      size="small"
                      className={`kw-learn-btn ${learnedKws.has(kw.id) ? "done" : ""}`}
                      icon={learnedKws.has(kw.id) ? <CheckOutlined /> : <EyeOutlined />}
                      onClick={() => toggleKw(kw.id)}
                    >
                      {learnedKws.has(kw.id) ? "Learned" : "Learn"}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ════════════════════════════════
              SENTENCES TAB
              ════════════════════════════════ */}
          {activeTab === "sentences" && (
            <div className="tab-content">
              <div className="category-tabs">
                {sentenceCategories.map((c) => (
                  <Tag
                    key={c}
                    className={`category-tag ${snCat === c ? "active" : ""}`}
                    onClick={() => setSnCat(c)}
                  >
                    {c === "All" ? "All" : `${categoryConfig[c]?.emoji || ""} ${categoryConfig[c]?.label || c}`}
                  </Tag>
                ))}
              </div>

              {sn && (
                <Card className="sentence-card" bordered={false}>
                  <div className="sn-header">
                    <Tag color={categoryConfig[sn.category]?.color}>
                      {categoryConfig[sn.category]?.emoji} {categoryConfig[sn.category]?.label}
                    </Tag>
                    <Button
                      type="text"
                      size="small"
                      className={`kw-learn-btn ${learnedSns.has(sn.id) ? "done" : ""}`}
                      icon={learnedSns.has(sn.id) ? <CheckOutlined /> : <EyeOutlined />}
                      onClick={() => toggleSn(sn.id)}
                    >
                      {learnedSns.has(sn.id) ? "Learned" : "Learn"}
                    </Button>
                  </div>

                  <Title level={4} className="sn-english">{sn.english}</Title>

                  <div className="sn-kannada-row">
                    <span className="sn-kannada">{sn.kannada}</span>
                    <Button
                      type="text"
                      icon={<SoundOutlined />}
                      className="kw-sound-btn"
                      onClick={() => speakKannada(sn.kannada)}
                    />
                  </div>
                  <Text className="sn-translit">{sn.transliteration}</Text>

                  <div className="sn-structure">
                    <Text className="sn-struct-label">Pattern</Text>
                    <code className="sn-struct-code">{sn.structure}</code>
                  </div>

                  <Button
                    block
                    className="breakdown-toggle"
                    icon={showBreakdown ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                    onClick={() => setShowBreakdown((v) => !v)}
                  >
                    {showBreakdown ? "Hide Breakdown" : "Show Word Breakdown"}
                  </Button>

                  {showBreakdown && (
                    <div className="breakdown-section">
                      {sn.breakdown.map((b, i) => (
                        <div key={i} className="breakdown-item">
                          <span className="bd-word">{b.word}</span>
                          <RightOutlined className="bd-arrow" />
                          <span className="bd-meaning">{b.meaning}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="sn-tip">
                    <BulbOutlined style={{ marginTop: 2, flexShrink: 0 }} />
                    <span>{sn.tip}</span>
                  </div>

                  <div className="sn-nav">
                    <Button
                      type="text"
                      className="sn-nav-btn"
                      icon={<LeftOutlined />}
                      disabled={snIdx === 0}
                      onClick={() => { setSnIdx((i) => i - 1); setShowBreakdown(false); }}
                    >
                      Prev
                    </Button>
                    <Text style={{ color: isDark ? "#94a3b8" : "#64748b", fontSize: 13, alignSelf: "center" }}>
                      {snIdx + 1} / {filteredSns.length}
                    </Text>
                    <Button
                      type="text"
                      className="sn-nav-btn"
                      disabled={snIdx >= filteredSns.length - 1}
                      onClick={() => { setSnIdx((i) => i + 1); setShowBreakdown(false); }}
                    >
                      Next <RightOutlined />
                    </Button>
                  </div>
                </Card>
              )}
            </div>
          )}

          {/* ════════════════════════════════
              QUIZ TAB
              ════════════════════════════════ */}
          {activeTab === "quiz" && (
            <div className="tab-content">
              {/* Category selection */}
              {!quizCat && !quizDone && (
                <div className="quiz-menu">
                  <div className="quiz-mode-row">
                    <Text style={{ color: isDark ? "#e2e8f0" : "#334155", fontWeight: 500, fontSize: 14 }}>
                      Quiz on:
                    </Text>
                    <Radio.Group
                      value={quizMode}
                      onChange={(e) => setQuizMode(e.target.value)}
                      size="small"
                      buttonStyle="solid"
                    >
                      <Radio.Button value="all">All Words</Radio.Button>
                      <Radio.Button value="learned">Learned Only</Radio.Button>
                    </Radio.Group>
                  </div>

                  <div className="quiz-cats">
                    {Object.entries(categoryConfig).map(([key, cfg]) => {
                      const { total, learned } = getCatStats(key);
                      const level = getLevel(learned, total);
                      return (
                        <button
                          key={key}
                          className="quiz-cat-card"
                          onClick={() => startQuiz(key)}
                        >
                          <div className="qcc-top">
                            <span className="qcc-emoji">{cfg.emoji}</span>
                            <span className="qcc-label">{cfg.label}</span>
                          </div>
                          <div className="qcc-stats">
                            <span className="qcc-learned">{learned}/{total} learned</span>
                            <Badge
                              count={level.label}
                              style={{ backgroundColor: level.color, fontSize: 10, fontWeight: 600 }}
                            />
                          </div>
                          <Progress
                            percent={Math.round((learned / total) * 100)}
                            showInfo={false}
                            size="small"
                            strokeColor={cfg.color}
                            trailColor={isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Active quiz question */}
              {quizCat && !quizDone && quizQuestions.length > 0 && (
                <div className="quiz-active">
                  <div className="quiz-header-bar">
                    <Button
                      type="text"
                      icon={<CloseOutlined />}
                      onClick={resetQuiz}
                      style={{ color: isDark ? "#94a3b8" : "#64748b" }}
                    />
                    <Text style={{ color: isDark ? "#e2e8f0" : "#334155", fontWeight: 600, fontSize: 14 }}>
                      {categoryConfig[quizCat]?.emoji} {categoryConfig[quizCat]?.label}
                    </Text>
                    <Text style={{ color: isDark ? "#a78bfa" : "#7c3aed", fontWeight: 600, fontSize: 13 }}>
                      {quizIdx + 1} / {quizQuestions.length}
                    </Text>
                  </div>

                  <Progress
                    percent={Math.round(((quizIdx + 1) / quizQuestions.length) * 100)}
                    showInfo={false}
                    size="small"
                    strokeColor={{ from: "#7c3aed", to: "#a78bfa" }}
                    trailColor={isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}
                  />

                  <div className="quiz-question-card">
                    <Text className="quiz-type-label">
                      {quizQuestions[quizIdx].type === "kannada→english"
                        ? "What does this mean?"
                        : "How do you say this in Kannada?"}
                    </Text>

                    <div className="quiz-prompt">
                      <span className="quiz-prompt-text">
                        {quizQuestions[quizIdx].question}
                      </span>
                      {quizQuestions[quizIdx].hint && (
                        <span className="quiz-prompt-hint">
                          {quizQuestions[quizIdx].hint}
                        </span>
                      )}
                    </div>

                    <div className="quiz-options">
                      {quizQuestions[quizIdx].options.map((opt, i) => {
                        let cls = "quiz-option";
                        if (quizAnswered) {
                          if (opt === quizQuestions[quizIdx].answer) cls += " correct";
                          else if (opt === quizSelected) cls += " wrong";
                        } else if (opt === quizSelected) {
                          cls += " selected";
                        }
                        return (
                          <button
                            key={i}
                            className={cls}
                            onClick={() => answerQuiz(opt)}
                            disabled={quizAnswered}
                          >
                            <span className="qo-letter">{String.fromCharCode(65 + i)}</span>
                            <span className="qo-text">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {quizAnswered && (
                      <Button
                        type="primary"
                        block
                        size="large"
                        className="quiz-next-btn"
                        onClick={nextQuizQ}
                      >
                        {quizIdx + 1 >= quizQuestions.length ? "See Results" : "Next Question →"}
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {/* Quiz results */}
              {quizDone && (
                <div className="quiz-results">
                  <div className="quiz-result-card">
                    <div className="qr-emoji">
                      {quizScore >= quizQuestions.length * 0.8 ? "🏆" :
                        quizScore >= quizQuestions.length * 0.5 ? "⭐" : "📚"}
                    </div>
                    <Title level={3} style={{ margin: 0, color: isDark ? "#fff" : "#1e293b" }}>
                      {quizScore >= quizQuestions.length * 0.8 ? "Excellent!" :
                        quizScore >= quizQuestions.length * 0.5 ? "Good Job!" : "Keep Practicing!"}
                    </Title>
                    <div className="qr-score">
                      <span className="qr-score-num">{quizScore}</span>
                      <span className="qr-score-of">/ {quizQuestions.length}</span>
                    </div>
                    <Text style={{ color: isDark ? "#94a3b8" : "#64748b", fontSize: 14 }}>
                      correct answers in {categoryConfig[quizCat]?.label}
                    </Text>
                    <div className="qr-actions">
                      <Button size="large" onClick={resetQuiz}>
                        Pick Another
                      </Button>
                      <Button type="primary" size="large" onClick={() => startQuiz(quizCat)}>
                        Retry
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ════════════════════════════════
              TIPS TAB
              ════════════════════════════════ */}
          {activeTab === "tips" && (
            <div className="tab-content">
              <Collapse
                className="tips-collapse"
                expandIconPosition="end"
                bordered={false}
                items={grammarTips.map((t) => ({
                  key: t.id,
                  label: (
                    <div className="tip-title">
                      <BulbOutlined style={{ color: "#fbbf24" }} />
                      <span>{t.title}</span>
                    </div>
                  ),
                  children: (
                    <div className="tip-body">
                      <Text className="tip-content">{t.content}</Text>
                      <div className="tip-example">
                        <Text className="tip-example-label">Example</Text>
                        <Text className="tip-example-text">{t.example}</Text>
                      </div>
                    </div>
                  ),
                }))}
              />
            </div>
          )}
        </div>
      </div>
    </ConfigProvider>
  );
}
