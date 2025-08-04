// AI面试官游戏主逻辑
class AIInterviewer {
    constructor() {
        this.currentJob = null;
        this.currentLevel = null;
        this.currentHR = null;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.totalScore = 0;
        this.maxScore = 0;
        this.answers = [];
        
        this.initializeGame();
    }
    
    initializeGame() {
        this.bindEvents();
        this.showStartScreen();
    }
    
    bindEvents() {
        // 岗位选择
        document.querySelectorAll('.job-card').forEach(card => {
            card.addEventListener('click', (e) => {
                document.querySelectorAll('.job-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                this.currentJob = card.dataset.job;
                this.updateStartButton();
            });
        });
        
        // 难度选择
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                this.currentLevel = btn.dataset.level;
                this.updateStartButton();
            });
        });
        
        // 开始面试
        document.getElementById('start-interview').addEventListener('click', () => {
            this.startInterview();
        });
        
        // 提交答案
        document.getElementById('submit-answer').addEventListener('click', () => {
            this.submitAnswer();
        });
        
        // 下一题
        document.getElementById('next-question').addEventListener('click', () => {
            this.nextQuestion();
        });
        
        // 重新开始
        document.getElementById('restart-game').addEventListener('click', () => {
            this.restartGame();
        });
        
        // 分享结果
        document.getElementById('share-result').addEventListener('click', () => {
            this.shareResult();
        });
        
        // 答案输入字数统计
        document.getElementById('answer-input').addEventListener('input', (e) => {
            const charCount = e.target.value.length;
            document.querySelector('.char-count').textContent = `${charCount}/500`;
        });
    }
    
    updateStartButton() {
        const startBtn = document.getElementById('start-interview');
        if (this.currentJob && this.currentLevel) {
            startBtn.disabled = false;
            startBtn.textContent = '开始面试';
        } else {
            startBtn.disabled = true;
            startBtn.textContent = '请选择岗位和难度';
        }
    }
    
    showStartScreen() {
        this.hideAllScreens();
        document.getElementById('start-screen').classList.add('active');
    }
    
    showInterviewScreen() {
        this.hideAllScreens();
        document.getElementById('interview-screen').classList.add('active');
    }
    
    showResultScreen() {
        this.hideAllScreens();
        document.getElementById('result-screen').classList.add('active');
    }
    
    hideAllScreens() {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
    }
    
    startInterview() {
        // 随机选择HR
        this.currentHR = HR_PROFILES[Math.floor(Math.random() * HR_PROFILES.length)];
        
        // 获取题目
        this.questions = this.getQuestions();
        this.currentQuestionIndex = 0;
        this.totalScore = 0;
        this.maxScore = this.questions.length * 20; // 每题最高20分
        this.answers = [];
        
        // 显示面试界面
        this.showInterviewScreen();
        this.updateHRInfo();
        this.showGreeting();
    }
    
    getQuestions() {
        const jobQuestions = QUESTIONS_DB[this.currentJob][this.currentLevel];
        // 随机选择5道题
        const shuffled = [...jobQuestions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, Math.min(5, shuffled.length));
    }
    
    updateHRInfo() {
        document.getElementById('hr-name').textContent = this.currentHR.name;
        document.getElementById('hr-mood').textContent = this.currentHR.mood;
        document.querySelector('.hr-avatar').textContent = this.currentHR.avatar;
    }
    
    showGreeting() {
        const greeting = this.currentHR.greetings[Math.floor(Math.random() * this.currentHR.greetings.length)];
        document.getElementById('question-text').textContent = greeting;
        
        // 2秒后显示第一题
        setTimeout(() => {
            this.showCurrentQuestion();
        }, 2000);
    }
    
    showCurrentQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.showFinalResult();
            return;
        }
        
        const question = this.questions[this.currentQuestionIndex];
        document.getElementById('question-text').textContent = question.question;
        document.getElementById('question-counter').textContent = `${this.currentQuestionIndex + 1}/${this.questions.length}`;
        document.getElementById('current-score').textContent = this.totalScore;
        
        // 重置答案区域
        document.getElementById('answer-input').value = '';
        document.querySelector('.char-count').textContent = '0/500';
        document.getElementById('feedback-area').classList.add('hidden');
        document.getElementById('answer-input').disabled = false;
        document.getElementById('submit-answer').disabled = false;
    }
    
    submitAnswer() {
        const answer = document.getElementById('answer-input').value.trim();
        if (!answer) {
            this.showError('请输入你的回答！');
            return;
        }
        
        // 禁用输入
        document.getElementById('answer-input').disabled = true;
        document.getElementById('submit-answer').disabled = true;
        
        // 评分
        const result = this.evaluateAnswer(answer);
        this.answers.push({
            question: this.questions[this.currentQuestionIndex].question,
            answer: answer,
            score: result.score,
            feedback: result.feedback
        });
        
        this.totalScore += result.score;
        
        // 显示反馈
        this.showFeedback(result);
    }
    
    evaluateAnswer(answer) {
        const question = this.questions[this.currentQuestionIndex];
        let score = 0;
        let matchedKeywords = [];
        let penalties = [];
        
        // 检查关键词
        question.keywords.forEach(keyword => {
            if (answer.toLowerCase().includes(keyword.word.toLowerCase())) {
                score += keyword.score;
                matchedKeywords.push(keyword.word);
            }
        });
        
        // 检查扣分项
        question.penalties.forEach(penalty => {
            if (answer.toLowerCase().includes(penalty.word.toLowerCase())) {
                score += penalty.score; // penalty.score是负数
                penalties.push(penalty.word);
            }
        });
        
        // 确保分数在合理范围内
        score = Math.max(0, Math.min(20, score));
        
        // 根据分数选择评语
        let feedback;
        let level;
        if (score >= 15) {
            level = 'excellent';
            feedback = question.hrComments.excellent[Math.floor(Math.random() * question.hrComments.excellent.length)];
        } else if (score >= 8) {
            level = 'good';
            feedback = question.hrComments.good[Math.floor(Math.random() * question.hrComments.good.length)];
        } else {
            level = 'poor';
            feedback = question.hrComments.poor[Math.floor(Math.random() * question.hrComments.poor.length)];
        }
        
        // 根据HR风格调整评语
        feedback = this.adjustFeedbackByHRStyle(feedback, level);
        
        return {
            score: score,
            feedback: feedback,
            level: level,
            matchedKeywords: matchedKeywords,
            penalties: penalties
        };
    }
    
    adjustFeedbackByHRStyle(feedback, level) {
        const style = this.currentHR.style;
        
        switch (style) {
            case 'strict':
                if (level === 'excellent') {
                    return feedback.replace(/很好|很棒|优秀/, '还算可以');
                } else if (level === 'poor') {
                    return feedback + ' 这样的水平很难通过我们的面试。';
                }
                break;
                
            case 'friendly':
                if (level === 'poor') {
                    return feedback.replace(/比较薄弱|还需要|建议/, '没关系，慢慢来～') + ' 加油哦！';
                } else {
                    return feedback + ' 继续保持！';
                }
                break;
                
            case 'academic':
                return '从技术角度来看，' + feedback.toLowerCase();
                
            case 'picky':
                if (level === 'excellent') {
                    return feedback.replace(/很好|很棒|优秀/, '勉强达到要求');
                } else {
                    return feedback + ' 我见过更好的回答。';
                }
                break;
        }
        
        return feedback;
    }
    
    showFeedback(result) {
        document.getElementById('feedback-text').textContent = result.feedback;
        
        const scoreChange = document.getElementById('score-change');
        scoreChange.textContent = `+${result.score} 分`;
        scoreChange.className = 'score-change ' + (result.score >= 10 ? 'positive' : 'negative');
        
        document.getElementById('current-score').textContent = this.totalScore;
        document.getElementById('feedback-area').classList.remove('hidden');
        
        // 添加动画效果
        if (result.score >= 15) {
            document.querySelector('.hr-feedback').classList.add('pulse');
        } else if (result.score < 5) {
            document.querySelector('.hr-feedback').classList.add('shake');
        }
        
        setTimeout(() => {
            document.querySelector('.hr-feedback').classList.remove('pulse', 'shake');
        }, 500);
    }
    
    nextQuestion() {
        this.currentQuestionIndex++;
        this.showCurrentQuestion();
    }
    
    showFinalResult() {
        this.showResultScreen();
        
        const percentage = (this.totalScore / this.maxScore) * 100;
        let resultLevel;
        
        if (percentage >= 75) {
            resultLevel = 'excellent';
        } else if (percentage >= 50) {
            resultLevel = 'good';
        } else {
            resultLevel = 'poor';
        }
        
        const evaluation = FINAL_EVALUATIONS[resultLevel];
        
        document.getElementById('result-title').textContent = evaluation.title;
        document.getElementById('final-score').textContent = this.totalScore;
        
        const message = evaluation.messages[Math.floor(Math.random() * evaluation.messages.length)];
        const advice = evaluation.advice[Math.floor(Math.random() * evaluation.advice.length)];
        
        document.getElementById('result-message').textContent = message;
        document.getElementById('result-advice').textContent = advice;
        
        // 保存历史记录
        this.saveToHistory();
    }
    
    saveToHistory() {
        const history = JSON.parse(localStorage.getItem('ai-interviewer-history') || '[]');
        const record = {
            date: new Date().toISOString(),
            job: this.currentJob,
            level: this.currentLevel,
            score: this.totalScore,
            maxScore: this.maxScore,
            percentage: Math.round((this.totalScore / this.maxScore) * 100),
            hr: this.currentHR.name
        };
        
        history.unshift(record);
        // 只保留最近10次记录
        if (history.length > 10) {
            history.splice(10);
        }
        
        localStorage.setItem('ai-interviewer-history', JSON.stringify(history));
    }
    
    restartGame() {
        // 重置所有状态
        this.currentJob = null;
        this.currentLevel = null;
        this.currentHR = null;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.totalScore = 0;
        this.maxScore = 0;
        this.answers = [];
        
        // 重置UI
        document.querySelectorAll('.job-card').forEach(card => card.classList.remove('selected'));
        document.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('selected'));
        document.getElementById('start-interview').disabled = true;
        document.getElementById('start-interview').textContent = '请选择岗位和难度';
        
        this.showStartScreen();
    }
    
    shareResult() {
        const percentage = Math.round((this.totalScore / this.maxScore) * 100);
        const jobNames = {
            'algorithm': '算法工程师',
            'data-scientist': '数据科学家',
            'ai-engineer': 'AI工程师'
        };
        const levelNames = {
            'junior': '初级',
            'mid': '中级',
            'senior': '高级'
        };
        
        const shareText = `我刚刚完成了AI面试官游戏！\n` +
                         `岗位：${jobNames[this.currentJob]}（${levelNames[this.currentLevel]}）\n` +
                         `得分：${this.totalScore}/${this.maxScore}（${percentage}%）\n` +
                         `面试官：${this.currentHR.name}\n` +
                         `快来挑战吧！`;
        
        if (navigator.share) {
            navigator.share({
                title: 'AI面试官游戏成绩',
                text: shareText,
                url: window.location.href
            });
        } else {
            // 复制到剪贴板
            navigator.clipboard.writeText(shareText).then(() => {
                this.showSuccess('成绩已复制到剪贴板！');
            }).catch(() => {
                // 降级方案
                const textArea = document.createElement('textarea');
                textArea.value = shareText;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                this.showSuccess('成绩已复制到剪贴板！');
            });
        }
    }
    
    showError(message) {
        // 简单的错误提示
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #dc3545;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    }
    
    showSuccess(message) {
        // 简单的成功提示
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        successDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(successDiv);
        
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }
}

// 页面加载完成后初始化游戏
document.addEventListener('DOMContentLoaded', () => {
    new AIInterviewer();
});

// 添加一些实用功能

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    // Ctrl+Enter 提交答案
    if (e.ctrlKey && e.key === 'Enter') {
        const submitBtn = document.getElementById('submit-answer');
        if (!submitBtn.disabled) {
            submitBtn.click();
        }
    }
    
    // Enter 下一题
    if (e.key === 'Enter' && !e.ctrlKey) {
        const nextBtn = document.getElementById('next-question');
        if (nextBtn && !document.getElementById('feedback-area').classList.contains('hidden')) {
            nextBtn.click();
        }
    }
});

// 防止页面刷新丢失进度
window.addEventListener('beforeunload', (e) => {
    const interviewScreen = document.getElementById('interview-screen');
    if (interviewScreen.classList.contains('active')) {
        e.preventDefault();
        e.returnValue = '面试正在进行中，确定要离开吗？';
    }
});

// 响应式处理
window.addEventListener('resize', () => {
    // 移动端优化
    if (window.innerWidth <= 768) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
});

// 初始检查
if (window.innerWidth <= 768) {
    document.body.classList.add('mobile');
}