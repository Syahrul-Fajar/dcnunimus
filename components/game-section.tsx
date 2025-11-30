"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Code2, Trophy, RotateCcw, CheckCircle2, XCircle, 
  ChevronRight, Timer, Flame, Zap, BrainCircuit, ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- DATA SOAL ---
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const questions: Question[] = [
  {
    id: 1,
    question: "Apa nama framework buatan Google untuk membuat aplikasi Android & iOS sekaligus?",
    options: ["React Native", "Flutter", "Kotlin", "Swift"],
    correctAnswer: 1,
    explanation: "Flutter adalah framework open-source buatan Google untuk membuat aplikasi multi-platform.",
    difficulty: 'easy'
  },
  {
    id: 2,
    question: "Bahasa pemrograman apa yang digunakan di Flutter?",
    options: ["Java", "Python", "Dart", "JavaScript"],
    correctAnswer: 2,
    explanation: "Dart adalah bahasa pemrograman yang digunakan untuk mengembangkan aplikasi Flutter.",
    difficulty: 'easy'
  },
  {
    id: 3,
    question: "Siapa perusahaan di balik pengembangan Flutter?",
    options: ["Facebook", "Microsoft", "Google", "Apple"],
    correctAnswer: 2,
    explanation: "Google meluncurkan Flutter (versi alpha) pertama kali pada tahun 2017.",
    difficulty: 'easy'
  },
  {
    id: 4,
    question: "Fitur apa yang memungkinkan developer melihat perubahan kode secara instan tanpa restart?",
    options: ["Hot Reload", "Live Stream", "Quick View", "Instant Run"],
    correctAnswer: 0,
    explanation: "Hot Reload adalah fitur unggulan Flutter untuk mempercepat proses development.",
    difficulty: 'easy'
  },
  {
    id: 5,
    question: "File apa yang digunakan untuk mengatur aset (gambar) dan library tambahan?",
    options: ["main.dart", "pubspec.yaml", "android.xml", "index.html"],
    correctAnswer: 1,
    explanation: "pubspec.yaml adalah file konfigurasi utama untuk project Flutter.",
    difficulty: 'easy'
  },
  {
    id: 6,
    question: "Widget sederhana untuk menampilkan tulisan di layar adalah?",
    options: ["Button", "Image", "Icon", "Text"],
    correctAnswer: 3,
    explanation: "Widget Text digunakan untuk menampilkan string karakter dengan berbagai gaya.",
    difficulty: 'easy'
  },
  {
    id: 7,
    question: "Untuk menyusun widget secara vertikal (atas ke bawah), kita menggunakan?",
    options: ["Row", "Column", "Stack", "Grid"],
    correctAnswer: 1,
    explanation: "Column menyusun anak-anak widget-nya dalam satu kolom vertikal.",
    difficulty: 'easy'
  },
  {
    id: 8,
    question: "Apa perintah dasar untuk membuat project Flutter baru?",
    options: ["flutter new", "flutter start", "flutter create", "flutter init"],
    correctAnswer: 2,
    explanation: "Perintah 'flutter create <nama_project>' digunakan untuk men-generate struktur project awal.",
    difficulty: 'easy'
  },
];

// --- COMPONENT ---
export function GameSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
  
  // Mechanics
  const [timeLeft, setTimeLeft] = useState(15);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [bonusPoints, setBonusPoints] = useState(0);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const QUESTION_TIME = 20; 

  // --- LOGIC ---
  useEffect(() => {
    if (isPlaying && !isAnswered && !showResult && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !isAnswered) {
      handleTimeOut();
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [timeLeft, isPlaying, isAnswered, showResult]);

  const handleTimeOut = () => {
    setIsAnswered(true);
    setStreak(0);
  };

  const startGame = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 5);
    setGameQuestions(shuffled);
    setIsPlaying(true);
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setIsAnswered(false);
    setStreak(0);
    setMaxStreak(0);
    setBonusPoints(0);
    setTimeLeft(QUESTION_TIME);
  };

  const handleAnswer = (answerIndex: number) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    
    const isCorrect = answerIndex === gameQuestions[currentQuestionIdx].correctAnswer;

    if (isCorrect) {
      const timeBonus = timeLeft * 10;
      const streakBonus = streak * 20;
      const points = 100 + timeBonus + streakBonus;
      
      setScore((prev) => prev + points);
      setStreak((prev) => prev + 1);
      if (streak + 1 > maxStreak) setMaxStreak(streak + 1);
      setBonusPoints(timeBonus + streakBonus);
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIdx < gameQuestions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setTimeLeft(QUESTION_TIME);
      setBonusPoints(0);
    } else {
      setShowResult(true);
    }
  };

  const getRank = () => {
    if (score > 1200) return { title: "Senior Flutter Dev", color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20", desc: "Pemahaman arsitektur yang sangat solid." };
    if (score > 800) return { title: "Mid-Level Dev", color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/20", desc: "Fondasi yang kuat, siap untuk project nyata." };
    if (score > 400) return { title: "Junior Dev", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", desc: "Awal yang bagus, terus eksplorasi widget." };
    return { title: "Flutter Intern", color: "text-zinc-400", bg: "bg-zinc-500/10 border-zinc-500/20", desc: "Jangan menyerah, dokumentasi adalah temanmu." };
  };

  const currentQ = gameQuestions[currentQuestionIdx];
  const rank = getRank();

  return (
    <section id="game" className="relative min-h-[800px] flex items-center justify-center overflow-hidden bg-zinc-950 font-sans text-zinc-100 py-12">
      
      {/* --- PROFESSIONAL BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Radial Fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#18181b,transparent)]"></div>
      </div>

      <div className="relative w-full max-w-3xl px-4 z-10">
        
        {/* === START SCREEN === */}
        {!isPlaying && !showResult && (
          <div className="text-center animate-in fade-in zoom-in duration-700 slide-in-from-bottom-4">

            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
              Flutter <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">Quiz</span>
            </h2>
            
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Validasi pengetahuan teknis Anda tentang ekosistem Flutter dalam simulasi 
              ujian cepat ini. Akurasi dan kecepatan adalah kunci.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
              {[
                { icon: Zap, label: "Speed Bonus", desc: "Waktu adalah poin" },
                { icon: Flame, label: "Streak Multiplier", desc: "Combo jawaban benar" },
                { icon: Trophy, label: "Rank System", desc: "Evaluasi level skill" }
              ].map((item, i) => (
                <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-zinc-700 transition-colors">
                  <item.icon className="w-6 h-6 text-zinc-300" />
                  <div className="font-semibold text-sm">{item.label}</div>
                  <div className="text-xs text-zinc-500">{item.desc}</div>
                </div>
              ))}
            </div>

            <Button 
              onClick={startGame}
              className="h-14 px-8 text-base bg-white text-black hover:bg-zinc-200 rounded-full font-bold shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              Mulai Game <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        )}

        {/* === GAMEPLAY SCREEN === */}
        {isPlaying && !showResult && (
          <div className="w-full max-w-2xl mx-auto">
            
            {/* HUD Header */}
            <div className="flex items-center justify-between mb-8 px-1">
              <div className="flex items-center gap-4">
                <div className="bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 flex items-center gap-2">
                  <span className="text-zinc-400 text-xs font-bold uppercase">Score</span>
                  <span className="font-mono font-bold text-white tabular-nums">{score}</span>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 flex items-center gap-2">
                  <span className="text-zinc-400 text-xs font-bold uppercase">Streak</span>
                  <span className={cn("font-mono font-bold tabular-nums", streak > 1 ? "text-orange-400" : "text-white")}>
                    {streak}x
                  </span>
                  {streak > 1 && <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />}
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="text-zinc-500">Q{currentQuestionIdx + 1}/5</span>
              </div>
            </div>

            {/* Timer Line (Integrated) */}
            <div className="relative h-1 w-full bg-zinc-900 rounded-full overflow-hidden mb-8">
              <div 
                className={cn(
                  "absolute top-0 left-0 h-full transition-all duration-1000 ease-linear",
                  timeLeft > 10 ? "bg-white" : timeLeft > 5 ? "bg-amber-400" : "bg-rose-500"
                )}
                style={{ width: `${(timeLeft / QUESTION_TIME) * 100}%` }}
              />
            </div>

            {/* Main Card */}
            <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden group">
              {/* Subtle light effect on top border */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-600 to-transparent opacity-50" />

              <h3 className="text-xl md:text-2xl font-bold text-white mb-8 leading-snug tracking-tight">
                {currentQ.question}
              </h3>

              <div className="space-y-3">
                {currentQ.options.map((option, index) => {
                  let btnStateClass = "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-300";
                  let icon = <div className="w-5 h-5 rounded-full border-2 border-zinc-700 group-hover:border-zinc-500 transition-colors" />;

                  if (isAnswered) {
                    if (index === currentQ.correctAnswer) {
                      btnStateClass = "border-emerald-500/50 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)]";
                      icon = <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500/20" />;
                    } else if (index === selectedAnswer) {
                      btnStateClass = "border-rose-500/50 bg-rose-500/10 text-rose-400";
                      icon = <XCircle className="w-5 h-5 text-rose-500" />;
                    } else {
                      btnStateClass = "border-zinc-800 bg-zinc-900/20 text-zinc-600 opacity-50";
                    }
                  } else if (selectedAnswer === index) {
                    // Active state before result (instant feedback possibility)
                    btnStateClass = "border-zinc-500 bg-zinc-800 text-white";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={isAnswered}
                      className={cn(
                        "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group relative",
                        !isAnswered && "hover:translate-x-1",
                        btnStateClass
                      )}
                    >
                      <span className="font-medium pr-4">{option}</span>
                      {icon}
                    </button>
                  )
                })}
              </div>

              {/* Explanation Section */}
              <div className={cn(
                "grid transition-all duration-500 ease-in-out",
                isAnswered ? "grid-rows-[1fr] mt-8 opacity-100" : "grid-rows-[0fr] mt-0 opacity-0"
              )}>
                <div className="overflow-hidden">
                  <div className="bg-indigo-950/30 border border-indigo-500/20 rounded-2xl p-5 flex gap-4 items-start">
                    <div className="mt-1 bg-indigo-500/20 p-2 rounded-lg shrink-0">
                      <Code2 className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-indigo-300 font-bold text-sm mb-1 uppercase tracking-wide">Insight</h4>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        {currentQ.explanation}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <Button 
                      onClick={nextQuestion}
                      className="rounded-full px-8 py-6 text-sm font-bold bg-white text-zinc-950 hover:bg-zinc-200 transition-transform active:scale-95"
                    >
                      {currentQuestionIdx < 4 ? "Pertanyaan Berikutnya" : "Lihat Hasil"}
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* === RESULT SCREEN === */}
        {showResult && (
          <div className="w-full max-w-md mx-auto animate-in zoom-in-95 duration-500">
            <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
              
              {/* Decorative Glow */}
              <div className={cn("absolute top-0 inset-x-0 h-40 bg-gradient-to-b opacity-20 blur-2xl", rank.color.replace('text-', 'bg-'))} />

              <div className="relative z-10">
                <div className={cn("inline-flex p-4 rounded-2xl mb-6 bg-zinc-950 border border-zinc-800 shadow-xl", rank.color)}>
                  <Trophy className="w-12 h-12" strokeWidth={1.5} />
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">{rank.title}</h3>
                <p className="text-zinc-400 mb-8 text-sm leading-relaxed px-4">{rank.desc}</p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800">
                    <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider mb-1">Final Score</div>
                    <div className="text-2xl font-mono font-bold text-white">{score}</div>
                  </div>
                  <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800">
                    <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider mb-1">Max Streak</div>
                    <div className="text-2xl font-mono font-bold text-orange-400">{maxStreak}x</div>
                  </div>
                </div>

                <Button
                  onClick={startGame}
                  className="w-full h-14 bg-white text-zinc-950 hover:bg-zinc-200 font-bold rounded-xl transition-all"
                >
                  <RotateCcw className="mr-2 w-4 h-4" />
                  Coba Lagi
                </Button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}