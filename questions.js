// AI面试官题库数据
const QUESTIONS_DB = {
    // 算法工程师题库
    algorithm: {
        junior: [
            // 选择题
            {
                id: 1,
                type: "choice",
                question: "机器学习中，哪种学习方式需要使用标记好的训练数据？",
                options: ["A. 监督学习", "B. 无监督学习", "C. 强化学习", "D. 半监督学习"],
                correctAnswer: "A",
                explanation: "监督学习需要使用带有标签的训练数据来训练模型，通过输入-输出对来学习映射关系。",
                hrComments: {
                    correct: ["很好！基础概念掌握得很扎实。", "正确！看得出你对机器学习分类有清晰的理解。"],
                    wrong: ["这个基础概念还需要加强，建议复习一下监督学习的定义。", "答错了，监督学习是需要标签数据的。"]
                }
            },
            {
                id: 2,
                type: "choice",
                question: "以下哪个不是常见的机器学习算法？",
                options: ["A. 决策树", "B. 支持向量机", "C. 快速排序", "D. 随机森林"],
                correctAnswer: "C",
                explanation: "快速排序是计算机科学中的排序算法，不是机器学习算法。",
                hrComments: {
                    correct: ["正确！你能区分机器学习算法和传统算法。", "很好，基础概念很清楚。"],
                    wrong: ["需要区分机器学习算法和传统算法哦。", "快速排序是排序算法，不是ML算法。"]
                }
            },
            {
                id: 3,
                type: "choice",
                question: "在机器学习中，过拟合通常表现为：",
                options: ["A. 训练误差和测试误差都很高", "B. 训练误差很低，测试误差很高", "C. 训练误差很高，测试误差很低", "D. 训练误差和测试误差都很低"],
                correctAnswer: "B",
                explanation: "过拟合是指模型在训练数据上表现很好（训练误差低），但在新数据上表现差（测试误差高）。",
                hrComments: {
                    correct: ["正确！你对过拟合的理解很准确。", "很好，这是一个重要的概念。"],
                    wrong: ["过拟合的特征需要再理解一下。", "记住：过拟合就是训练好测试差。"]
                }
            },
            {
                id: 4,
                type: "choice",
                question: "梯度下降算法中，学习率过大会导致：",
                options: ["A. 收敛速度过慢", "B. 无法收敛或震荡", "C. 陷入局部最优", "D. 梯度消失"],
                correctAnswer: "B",
                explanation: "学习率过大会导致参数更新步长太大，可能跳过最优解，导致无法收敛或产生震荡。",
                hrComments: {
                    correct: ["正确！学习率调优是很重要的技能。", "很好，你理解梯度下降的关键参数。"],
                    wrong: ["学习率的影响需要再思考一下。", "学习率太大会让优化过程不稳定。"]
                }
            },
            {
                id: 5,
                type: "choice",
                question: "以下哪种方法可以用来防止过拟合？",
                options: ["A. 增加模型复杂度", "B. 减少训练数据", "C. 正则化", "D. 增加训练轮数"],
                correctAnswer: "C",
                explanation: "正则化通过在损失函数中添加惩罚项来限制模型复杂度，从而防止过拟合。",
                hrComments: {
                    correct: ["正确！正则化是防止过拟合的经典方法。", "很好，你知道如何控制模型复杂度。"],
                    wrong: ["防止过拟合的方法需要再学习一下。", "正则化是最常用的防过拟合技术。"]
                }
            },
            // 判断题
            {
                id: 6,
                type: "judge",
                question: "深度学习是机器学习的一个子集。",
                correctAnswer: true,
                explanation: "深度学习是机器学习的一个分支，专门研究使用深层神经网络的学习方法。",
                hrComments: {
                    correct: ["正确！你对AI领域的层次结构很清楚。", "很好，基础概念掌握得不错。"],
                    wrong: ["深度学习确实是机器学习的一部分。", "需要理清AI、ML、DL之间的关系。"]
                }
            },
            {
                id: 7,
                type: "judge",
                question: "神经网络中的激活函数必须是线性函数。",
                correctAnswer: false,
                explanation: "激活函数通常是非线性函数，线性激活函数会使整个神经网络退化为线性模型。",
                hrComments: {
                    correct: ["正确！非线性激活函数是神经网络的关键。", "很好，你理解激活函数的重要性。"],
                    wrong: ["激活函数的非线性特性很重要。", "线性激活函数会让神经网络失去表达能力。"]
                }
            },
            {
                id: 8,
                type: "judge",
                question: "交叉验证只能用于分类问题，不能用于回归问题。",
                correctAnswer: false,
                explanation: "交叉验证是一种模型评估技术，既可以用于分类问题，也可以用于回归问题。",
                hrComments: {
                    correct: ["正确！交叉验证是通用的评估方法。", "很好，你理解交叉验证的适用范围。"],
                    wrong: ["交叉验证可以用于各种机器学习任务。", "不要限制交叉验证的应用场景。"]
                }
            },
            {
                id: 9,
                type: "judge",
                question: "在神经网络中，权重初始化为0是一个好的选择。",
                correctAnswer: false,
                explanation: "将所有权重初始化为0会导致对称性问题，所有神经元会学到相同的特征，无法有效训练。",
                hrComments: {
                    correct: ["正确！权重初始化很重要，不能全为0。", "很好，你知道对称性破缺的重要性。"],
                    wrong: ["权重初始化为0会有对称性问题。", "需要随机初始化来破坏对称性。"]
                }
            },
            {
                id: 10,
                type: "judge",
                question: "批量梯度下降比随机梯度下降收敛速度更快。",
                correctAnswer: false,
                explanation: "虽然批量梯度下降每次迭代更稳定，但随机梯度下降通常能更快地接近最优解。",
                hrComments: {
                    correct: ["正确！SGD通常收敛更快。", "很好，你理解不同梯度下降方法的特点。"],
                    wrong: ["SGD虽然有噪声，但通常收敛更快。", "需要理解批量大小对收敛速度的影响。"]
                }
            },
            // 问答题
            {
                id: 11,
                type: "essay",
                question: "请简单解释一下什么是机器学习？它与传统编程有什么区别？",
                keywords: [
                    { word: "数据", score: 8 },
                    { word: "模型", score: 8 },
                    { word: "训练", score: 10 },
                    { word: "预测", score: 8 },
                    { word: "算法", score: 6 },
                    { word: "规则", score: 5 },
                    { word: "自动", score: 7 }
                ],
                penalties: [
                    { word: "不知道", score: -15 },
                    { word: "不会", score: -15 },
                    { word: "没学过", score: -20 }
                ],
                hrComments: {
                    excellent: [
                        "很好！你对机器学习的理解很到位，基础概念掌握得不错。",
                        "回答得很清晰，看得出你对ML有扎实的理解。",
                        "不错不错，概念解释得很准确，继续保持！"
                    ],
                    good: [
                        "回答还可以，但可以再详细一些，比如举个具体例子。",
                        "基本概念是对的，不过表达可以更清晰一点。",
                        "还行吧，不过感觉你对传统编程的对比理解不够深入。"
                    ],
                    poor: [
                        "嗯...看起来你对机器学习的理解还比较浅，建议多看看基础资料。",
                        "回答有点空泛，缺少关键概念，需要加强基础学习。",
                        "这个回答让我有点担心你的基础知识储备..."
                    ]
                }
            },
            {
                id: 12,
                type: "essay",
                question: "你知道监督学习和无监督学习的区别吗？能举个例子说明一下吗？",
                keywords: [
                    { word: "标签", score: 12 },
                    { word: "分类", score: 8 },
                    { word: "回归", score: 8 },
                    { word: "聚类", score: 10 },
                    { word: "降维", score: 8 },
                    { word: "有监督", score: 10 },
                    { word: "无监督", score: 10 },
                    { word: "训练集", score: 6 }
                ],
                penalties: [
                    { word: "一样", score: -20 },
                    { word: "没区别", score: -20 }
                ],
                hrComments: {
                    excellent: [
                        "很棒！监督和无监督学习的区别你解释得很清楚，例子也很恰当。",
                        "回答得非常好，看得出你对这两种学习方式有深入理解。",
                        "优秀！不仅概念清晰，举例也很到位，继续保持这个水平。"
                    ],
                    good: [
                        "概念基本正确，但例子可以更具体一些。",
                        "理解是对的，不过表达上还可以更准确。",
                        "还不错，但感觉你对无监督学习的理解还不够深入。"
                    ],
                    poor: [
                        "概念有些混淆，建议重新梳理一下监督学习的定义。",
                        "回答不够准确，需要加强对基本概念的理解。",
                        "嗯...这个回答让我觉得你可能需要重新学习一下基础概念。"
                    ]
                }
            },
            {
                id: 3,
                question: "什么是过拟合？如何避免过拟合现象？",
                keywords: [
                    { word: "过拟合", score: 10 },
                    { word: "泛化", score: 12 },
                    { word: "正则化", score: 10 },
                    { word: "交叉验证", score: 10 },
                    { word: "dropout", score: 8 },
                    { word: "早停", score: 8 },
                    { word: "数据增强", score: 6 },
                    { word: "验证集", score: 8 }
                ],
                penalties: [
                    { word: "好事", score: -25 },
                    { word: "越拟合越好", score: -30 }
                ],
                hrComments: {
                    excellent: [
                        "回答得很全面！过拟合的概念和解决方法都说得很到位。",
                        "很好，你对过拟合问题有深入的理解，解决方案也很实用。",
                        "优秀！不仅理论清晰，实践方法也很丰富。"
                    ],
                    good: [
                        "概念理解正确，但解决方法可以说得更具体一些。",
                        "基本回答正确，不过还可以补充一些实际应用的例子。",
                        "还可以，但感觉你对正则化的理解还不够深入。"
                    ],
                    poor: [
                        "对过拟合的理解还不够准确，建议多看看相关资料。",
                        "回答比较浅显，缺少具体的解决方案。",
                        "嗯...这个回答让我担心你在实际项目中会遇到问题。"
                    ]
                }
            }
        ],
        mid: [
            // 选择题
            {
                id: 13,
                type: "choice",
                question: "在深度学习中，以下哪种优化算法通常收敛速度最快？",
                options: ["A. SGD", "B. Adam", "C. RMSprop", "D. Adagrad"],
                correctAnswer: "B",
                explanation: "Adam结合了动量和自适应学习率的优点，通常在大多数情况下收敛速度较快。",
                hrComments: {
                    correct: ["正确！Adam确实是目前最流行的优化器之一。", "很好，你对优化算法有深入了解。"],
                    wrong: ["Adam优化器在实践中表现最好。", "建议深入学习各种优化算法的特点。"]
                }
            },
            {
                id: 14,
                type: "choice",
                question: "Transformer模型的核心创新是什么？",
                options: ["A. 卷积神经网络", "B. 循环神经网络", "C. 自注意力机制", "D. 池化层"],
                correctAnswer: "C",
                explanation: "Transformer的核心创新是自注意力机制，它允许模型直接建模序列中任意两个位置之间的关系。",
                hrComments: {
                    correct: ["正确！自注意力机制是Transformer的精髓。", "很好，你理解现代NLP的核心技术。"],
                    wrong: ["自注意力机制是Transformer的关键创新。", "建议深入学习Transformer架构。"]
                }
            },
            {
                id: 15,
                type: "choice",
                question: "在CNN中，哪种技术可以有效缓解梯度消失问题？",
                options: ["A. Dropout", "B. 残差连接", "C. 批量归一化", "D. 以上都是"],
                correctAnswer: "D",
                explanation: "残差连接、批量归一化和Dropout都可以在不同程度上缓解梯度消失问题。",
                hrComments: {
                    correct: ["正确！这些技术都对深度网络训练有帮助。", "很好，你对深度学习技巧很熟悉。"],
                    wrong: ["这些技术都有助于解决梯度问题。", "建议系统学习深度学习的训练技巧。"]
                }
            },
            // 判断题
            {
                id: 16,
                type: "judge",
                question: "BERT模型使用的是Transformer的编码器部分。",
                correctAnswer: true,
                explanation: "BERT确实只使用了Transformer的编码器部分，而GPT使用的是解码器部分。",
                hrComments: {
                    correct: ["正确！BERT是基于Transformer编码器的。", "很好，你对预训练模型架构很清楚。"],
                    wrong: ["BERT确实使用的是编码器架构。", "需要区分BERT和GPT的架构差异。"]
                }
            },
            {
                id: 17,
                type: "judge",
                question: "在神经网络中，Batch Normalization只能用在全连接层之后。",
                correctAnswer: false,
                explanation: "Batch Normalization可以用在卷积层、全连接层等多种层之后，不仅限于全连接层。",
                hrComments: {
                    correct: ["正确！BN可以用在多种层类型中。", "很好，你理解BN的通用性。"],
                    wrong: ["BN可以用在卷积层等多种层中。", "不要限制BN的应用范围。"]
                }
            },
            {
                id: 18,
                type: "judge",
                question: "增加网络深度总是能提高模型性能。",
                correctAnswer: false,
                explanation: "增加网络深度可能导致梯度消失、过拟合等问题，不一定能提高性能。",
                hrComments: {
                    correct: ["正确！深度不是越深越好。", "很好，你理解深度网络的挑战。"],
                    wrong: ["网络深度需要合理设计，不是越深越好。", "要考虑深度带来的训练难题。"]
                }
            },
            // 问答题
            {
                id: 19,
                type: "qa",
                question: "请解释什么是注意力机制，以及它在深度学习中的作用。",
                keywords: ["注意力", "权重", "特征", "重要性", "加权", "softmax", "查询", "键值", "相关性"],
                penalties: ["不知道", "不清楚", "没学过"],
                hrComments: {
                    excellent: ["回答很全面！你对注意力机制理解很深入。", "优秀！解释得很清晰，涵盖了关键概念。"],
                    good: ["不错的回答，基本概念都提到了。", "还可以，但可以更详细一些。"],
                    average: ["基础概念有了，但缺少深度。", "需要更深入理解注意力机制的原理。"],
                    poor: ["回答太简单了，需要加强学习。", "对注意力机制的理解还不够。"]
                }
            },
            {
                id: 20,
                type: "qa",
                question: "在实际项目中，如何处理数据不平衡问题？请提供几种解决方案。",
                keywords: ["重采样", "过采样", "欠采样", "SMOTE", "权重", "损失函数", "阈值", "集成", "数据增强"],
                penalties: ["不会", "没遇到过", "不知道"],
                hrComments: {
                    excellent: ["很好！提到了多种实用的解决方案。", "回答很全面，有实际项目经验。"],
                    good: ["不错，提到了几种常用方法。", "基本方法都知道，很好。"],
                    average: ["知道一些方法，但不够全面。", "需要更多实践经验。"],
                    poor: ["对数据不平衡问题了解不够。", "需要加强这方面的学习。"]
                }
            }
        ],
        senior: [
            // 选择题
            {
                id: 21,
                type: "choice",
                question: "在设计大型推荐系统时，哪项技术对于处理冷启动问题最有效？",
                options: ["A. 协同过滤", "B. 基于内容的推荐", "C. 矩阵分解", "D. 深度学习模型"],
                correctAnswer: "B",
                explanation: "基于内容的推荐通过分析物品或用户的属性来推荐，不需要历史行为数据，因此对冷启动问题最有效。",
                hrComments: {
                    correct: ["正确！基于内容的推荐是解决冷启动的经典方法。", "很好，你理解推荐系统的核心挑战。"],
                    wrong: ["协同过滤需要用户行为数据，不适合冷启动。", "冷启动需要利用内容信息。"]
                }
            },
            {
                id: 22,
                type: "choice",
                question: "在自然语言生成（NLG）任务中，哪种技术常用于提高生成文本的多样性？",
                options: ["A. Greedy Search", "B. Beam Search", "C. Top-k Sampling", "D. 梯度下降"],
                correctAnswer: "C",
                explanation: "Top-k Sampling通过从概率最高的k个词中随机采样来生成下一个词，可以有效提高文本多样性。",
                hrComments: {
                    correct: ["正确！Top-k Sampling是提高多样性的常用技巧。", "很好，你了解NLG的生成策略。"],
                    wrong: ["Greedy Search和Beam Search倾向于生成重复内容。", "采样方法是提高多样性的关键。"]
                }
            },
            {
                id: 23,
                type: "choice",
                question: "在强化学习中，Q-learning算法属于哪种类型？",
                options: ["A. 基于策略（Policy-based）", "B. 基于价值（Value-based）", "C. 基于模型（Model-based）", "D. Actor-Critic"],
                correctAnswer: "B",
                explanation: "Q-learning通过学习动作价值函数（Q函数）来选择最优动作，属于基于价值的强化学习算法。",
                hrComments: {
                    correct: ["正确！Q-learning是经典的基于价值的算法。", "很好，你对强化学习分类很清楚。"],
                    wrong: ["Q-learning的核心是学习Q值。", "需要区分基于价值和基于策略的方法。"]
                }
            },
            // 判断题
            {
                id: 24,
                type: "judge",
                question: "GAN（生成对抗网络）的训练过程总是稳定的。",
                correctAnswer: false,
                explanation: "GAN的训练过程非常不稳定，容易出现模式崩溃（mode collapse）等问题，需要很多技巧来稳定训练。",
                hrComments: {
                    correct: ["正确！GAN的训练稳定性是研究热点。", "很好，你了解GAN的训练难点。"],
                    wrong: ["GAN的训练非常不稳定。", "模式崩溃是GAN的经典问题。"]
                }
            },
            {
                id: 25,
                type: "judge",
                question: "在联邦学习中，原始数据会被上传到中央服务器进行训练。",
                correctAnswer: false,
                explanation: "联邦学习的核心思想是数据不动模型动，原始数据保留在本地，只上传模型更新，以保护数据隐私。",
                hrComments: {
                    correct: ["正确！联邦学习保护数据隐私。", "很好，你理解联邦学习的核心思想。"],
                    wrong: ["联邦学习不上传原始数据。", "数据隐私是联邦学习的关键。"]
                }
            },
            // 问答题
            {
                id: 26,
                type: "qa",
                question: "请详细说明Transformer架构的核心创新点，以及自注意力机制是如何工作的？",
                keywords: [
                    { word: "自注意力", score: 15 },
                    { word: "Query", score: 12 },
                    { word: "Key", score: 12 },
                    { word: "Value", score: 12 },
                    { word: "多头注意力", score: 10 },
                    { word: "位置编码", score: 10 },
                    { word: "并行计算", score: 8 },
                    { word: "残差连接", score: 6 }
                ],
                penalties: [
                    { word: "就是RNN", score: -30 },
                    { word: "和CNN一样", score: -25 }
                ],
                hrComments: {
                    excellent: [
                        "非常专业的回答！Transformer的核心机制解释得非常清晰和深入。",
                        "优秀！你对注意力机制的理解达到了高级工程师的水平。",
                        "很棒的回答，理论功底扎实，对前沿技术掌握得很好。"
                    ],
                    good: [
                        "基本概念正确，但对QKV机制的解释可以更详细一些。",
                        "理解是对的，不过对位置编码的重要性强调不够。",
                        "还不错，但感觉你对多头注意力的并行优势理解还不够深入。"
                    ],
                    poor: [
                        "对Transformer的理解还比较表面，建议深入研究相关论文。",
                        "回答缺少核心机制的详细解释，需要加强前沿技术学习。",
                        "这个回答让我觉得你可能还没有真正掌握现代NLP技术。"
                    ]
                }
            }
        ]
    },
    
    // 数据科学家题库
    "data-scientist": {
        junior: [
            // 选择题
            {
                id: 34,
                type: "choice",
                question: "在统计学中，P值（P-value）的含义是？",
                options: ["A. 原假设为真的概率", "B. 备择假设为真的概率", "C. 在原假设为真的前提下，观察到当前或更极端结果的概率", "D. 犯第一类错误的概率"],
                correctAnswer: "C",
                explanation: "P值是在原假设（H0）为真的条件下，获得当前观测样本或更极端样本的概率。它不代表原假设为真的概率。",
                hrComments: {
                    correct: ["定义非常准确！你对假设检验的核心概念理解得很清楚。", "很好，这正是P值的正确解释。"],
                    wrong: ["这是一个常见的误解，P值不是原假设为真的概率。", "需要重新理解P值在假设检验中的作用。"]
                }
            },
            // 判断题
            {
                id: 35,
                type: "judge",
                question: "相关性意味着因果性。",
                correctAnswer: false,
                explanation: "相关性不等于因果性。两个变量可能因为一个隐藏的混淆变量而相关，或者纯属巧合，但它们之间不一定有因果关系。",
                hrComments: {
                    correct: ["完全正确！这是数据分析中最重要也最容易被误解的原则之一。", "很好，你具备了数据科学家应有的审慎思维。"],
                    wrong: ["这是一个非常经典的错误，相关不代表因果。", "记住，要寻找因果关系需要进行实验设计或使用更高级的因果推断方法。"]
                }
            },
            // 问答题
            {
                id: 7,
                type: "qa",
                question: "请解释一下什么是数据清洗？在数据预处理中通常需要处理哪些问题？",
                keywords: [
                    { word: "缺失值", score: 12 },
                    { word: "异常值", score: 10 },
                    { word: "重复数据", score: 8 },
                    { word: "数据格式", score: 6 },
                    { word: "标准化", score: 8 },
                    { word: "归一化", score: 8 },
                    { word: "数据质量", score: 6 }
                ],
                penalties: [
                    { word: "不需要", score: -20 },
                    { word: "直接用", score: -15 }
                ],
                hrComments: {
                    excellent: [
                        "很好！你对数据清洗的理解很全面，实践经验丰富。",
                        "回答得很专业，看得出你在数据预处理方面有扎实的基础。",
                        "优秀！数据清洗的各个环节都提到了，很实用。"
                    ],
                    good: [
                        "基本概念正确，但可以补充一些具体的处理方法。",
                        "理解是对的，不过对异常值检测的方法可以说得更详细。",
                        "还可以，但感觉你对数据质量评估的经验还不够。"
                    ],
                    poor: [
                        "对数据清洗的理解还比较浅显，这在实际工作中会遇到很多问题。",
                        "回答缺少关键步骤，建议多实践数据预处理项目。",
                        "这个回答让我担心你处理真实数据时会手忙脚乱。"
                    ]
                }
            }
        ],
        mid: [
            // 选择题
            {
                id: 36,
                type: "choice",
                question: "在A/B测试中，什么是第一类错误（Type I Error）？",
                options: ["A. 错误地接受了原假设", "B. 错误地拒绝了原假设", "C. 样本量太小", "D. 实验时间太短"],
                correctAnswer: "B",
                explanation: "第一类错误（假阳性）是指原假设实际上为真，但我们却错误地拒绝了它。在A/B测试中，这通常意味着我们认为某个改动有效，但实际上它没有效果。",
                hrComments: {
                    correct: ["正确！第一类错误就是'弃真'错误。", "很好，你对A/B测试的统计学基础很扎实。"],
                    wrong: ["正好相反，第一类错误是错误地拒绝了原假设。", "需要区分第一类错误和第二类错误。"]
                }
            },
            // 判断题
            {
                id: 37,
                type: "judge",
                question: "对于一个分类模型，ROC曲线下的面积（AUC）越大，模型的性能越好。",
                correctAnswer: true,
                explanation: "AUC是衡量分类模型性能的重要指标，其值在0.5到1之间。AUC越大，代表模型将正例排在负例前面的能力越强，性能越好。",
                hrComments: {
                    correct: ["正确！AUC是评估分类器性能的常用指标。", "很好，你了解模型评估的关键指标。"],
                    wrong: ["这个说法是正确的，AUC越大模型性能越好。", "再回顾一下ROC曲线和AUC的含义吧。"]
                }
            },
            // 问答题
            {
                id: 8,
                type: "qa",
                question: "如何评估一个分类模型的性能？请详细说明各种评估指标的含义和适用场景。",
                keywords: [
                    { word: "准确率", score: 8 },
                    { word: "精确率", score: 10 },
                    { word: "召回率", score: 10 },
                    { word: "F1", score: 12 },
                    { word: "AUC", score: 10 },
                    { word: "ROC", score: 8 },
                    { word: "混淆矩阵", score: 10 },
                    { word: "类别不平衡", score: 8 }
                ],
                penalties: [
                    { word: "准确率就够了", score: -25 },
                    { word: "看起来对就行", score: -20 }
                ],
                hrComments: {
                    excellent: [
                        "非常专业的回答！各种评估指标的理解都很到位。",
                        "很棒！你对模型评估有深入的理解，实践经验丰富。",
                        "优秀的回答，对不同场景下指标选择的分析很准确。"
                    ],
                    good: [
                        "基本指标都提到了，但对适用场景的分析可以更深入。",
                        "理解是正确的，不过对类别不平衡问题的处理还可以详细一些。",
                        "还不错，但感觉你对AUC的理解还不够深入。"
                    ],
                    poor: [
                        "对评估指标的理解还比较表面，建议系统学习模型评估理论。",
                        "回答缺少关键指标，在实际项目中可能会做出错误判断。",
                        "这个回答让我担心你无法正确评估模型的真实性能。"
                    ]
                }
            }
        ],
        senior: [
            // 选择题
            {
                id: 38,
                type: "choice",
                question: "在处理不平衡数据集时，下列哪种方法是不推荐直接使用的？",
                options: ["A. 过采样（Oversampling）", "B. 欠采样（Undersampling）", "C. 使用准确率（Accuracy）作为评估指标", "D. 使用F1-score作为评估指标"],
                correctAnswer: "C",
                explanation: "在不平衡数据集中，准确率会产生误导。例如，如果99%的样本是负类，模型即使将所有样本都预测为负类，准确率也能达到99%，但这显然是一个无用的模型。",
                hrComments: {
                    correct: ["完全正确！准确率在不平衡数据下是不可靠的。", "很好，你清楚不平衡学习中的评估陷阱。"],
                    wrong: ["准确率会给出虚高的结果，不能反映模型对少数类的识别能力。", "在不平衡场景下，应该关注Precision, Recall, F1-score或AUC。"]
                }
            },
            // 判断题
            {
                id: 39,
                type: "judge",
                question: "多重共线性（Multicollinearity）会降低线性回归模型的预测精度。",
                correctAnswer: false,
                explanation: "多重共线性主要影响模型参数的稳定性和可解释性，使得系数的估计变得非常不稳定和不可靠。但它通常不会严重影响模型的整体预测精度。",
                hrComments: {
                    correct: ["回答正确！这是一个很关键且容易混淆的知识点。", "很好，你对多重共线性的影响理解得很准确。"],
                    wrong: ["多重共线性主要影响的是系数的解释，而不是预测性能。", "需要区分模型解释性和预测能力。"]
                }
            },
            {
                id: 9,
                type: "qa",
                question: "在处理大规模数据时，如何设计高效的特征工程流程？请结合具体场景说明。",
                keywords: [
                    { word: "特征选择", score: 12 },
                    { word: "特征构造", score: 10 },
                    { word: "降维", score: 8 },
                    { word: "分布式", score: 10 },
                    { word: "增量学习", score: 8 },
                    { word: "特征重要性", score: 8 },
                    { word: "内存优化", score: 6 },
                    { word: "并行处理", score: 8 }
                ],
                penalties: [
                    { word: "全部特征", score: -20 },
                    { word: "不需要优化", score: -25 }
                ],
                hrComments: {
                    excellent: [
                        "非常专业的回答！大规模特征工程的设计思路很清晰。",
                        "优秀！你对大数据场景下的特征工程有深入的实践经验。",
                        "很棒的回答，系统性思考和技术深度都很好。"
                    ],
                    good: [
                        "基本思路正确，但对分布式处理的细节可以更详细。",
                        "理解是对的，不过对内存优化的方法还可以补充一些。",
                        "还不错，但感觉你对增量特征更新的经验还不够丰富。"
                    ],
                    poor: [
                        "对大规模特征工程的理解还比较理论化，缺少实践经验。",
                        "回答缺少系统性思考，建议多参与大数据项目。",
                        "这个回答让我觉得你可能还没有处理过真正的大规模数据。"
                    ]
                }
            }
        ]
    },
    
    // AI工程师题库
    "ai-engineer": {
        junior: [
            // 选择题
            {
                id: 27,
                type: "choice",
                question: "以下哪个不是常见的激活函数？",
                options: ["A. Sigmoid", "B. ReLU", "C. Softmax", "D. Adam"],
                correctAnswer: "D",
                explanation: "Adam是一种优化算法，而不是激活函数。Sigmoid、ReLU和Softmax都是常用的激活函数。",
                hrComments: {
                    correct: ["回答正确！你对神经网络的基本组件很熟悉。", "很好，Adam是优化器，不是激活函数。"],
                    wrong: ["Adam是优化器哦，再想想激活函数有哪些？", "看来需要巩固一下基础知识了。"]
                }
            },
            // 判断题
            {
                id: 28,
                type: "judge",
                question: "批量归一化（Batch Normalization）通常用在激活函数之后。",
                correctAnswer: false,
                explanation: "批量归一化通常用在激活函数之前，以解决内部协变量偏移问题，稳定和加速训练过程。",
                hrComments: {
                    correct: ["正确！BN一般在激活函数之前使用。", "很好，你了解BN的作用和位置。"],
                    wrong: ["BN的顺序很重要，通常在激活函数之前。", "再回顾一下BN的经典用法吧。"]
                }
            },
            // 问答题
            {
                id: 29,
                type: "qa",
                question: "什么是过拟合？请至少说出两种防止过拟合的方法。",
                keywords: [
                    { word: "过拟合", score: 10 },
                    { word: "训练集表现好", score: 8 },
                    { word: "测试集表现差", score: 8 },
                    { word: "泛化能力差", score: 8 },
                    { word: "正则化", score: 10 },
                    { word: "Dropout", score: 10 },
                    { word: "数据增强", score: 8 },
                    { word: "提前终止", score: 8 }
                ],
                penalties: [
                    { word: "欠拟合", score: -20 }
                ],
                hrComments: {
                    excellent: [
                        "回答非常准确和全面，对过拟合的理解和解决方法都掌握得很好。",
                        "优秀！你不仅知道什么是过拟合，还能说出多种有效的应对策略。"
                    ],
                    good: [
                        "基本概念正确，但防止过拟合的方法可以再多说几种。",
                        "理解是对的，但对方法的解释可以更深入一些。"
                    ],
                    poor: [
                        "对过拟合的理解不够清晰，需要加强机器学习基础。",
                        "只说出了概念，没有说出解决方法，这在实践中是不够的。"
                    ]
                }
            }
        ],
        mid: [
            // 选择题
            {
                id: 30,
                type: "choice",
                question: "在计算机视觉中，用于目标检测的经典算法是？",
                options: ["A. VGGNet", "B. ResNet", "C. YOLO", "D. K-Means"],
                correctAnswer: "C",
                explanation: "YOLO (You Only Look Once) 是一种非常流行的实时目标检测算法。VGGNet和ResNet是图像分类网络，K-Means是聚类算法。",
                hrComments: {
                    correct: ["正确！YOLO是目标检测领域的代表性算法。", "很好，你对CV的关键任务和算法很了解。"],
                    wrong: ["YOLO才是目标检测算法，VGG和ResNet主要用于分类。", "需要理清不同CV任务对应的经典模型。"]
                }
            },
            // 判断题
            {
                id: 31,
                type: "judge",
                question: "L1正则化会使模型参数变得稀疏，而L2正则化会使参数趋向于较小的值。",
                correctAnswer: true,
                explanation: "L1正则化（Lasso）倾向于产生稀疏权重（很多为零），可以用于特征选择。L2正则化（Ridge）会惩罚大的权重，使权重分布更平滑。",
                hrComments: {
                    correct: ["完全正确！你对L1和L2正则化的区别理解得很透彻。", "很好，这是正则化方法的一个核心差异。"],
                    wrong: ["这个描述是正确的，再思考一下L1和L2的几何解释。", "L1正则化的稀疏性是它的重要特点。"]
                }
            },
            {
                id: 11,
                question: "在生产环境中，如何保证AI模型的稳定性和可靠性？请详细说明监控和维护策略。",
                keywords: [
                    { word: "数据漂移", score: 12 },
                    { word: "模型漂移", score: 12 },
                    { word: "A/B测试", score: 10 },
                    { word: "灰度发布", score: 8 },
                    { word: "回滚机制", score: 8 },
                    { word: "实时监控", score: 10 },
                    { word: "告警系统", score: 6 },
                    { word: "模型重训", score: 8 }
                ],
                penalties: [
                    { word: "不会出问题", score: -25 },
                    { word: "上线就不管", score: -30 }
                ],
                hrComments: {
                    excellent: [
                        "非常专业的回答！对生产环境的模型维护有深入的理解。",
                        "很棒！你对MLOps的实践经验很丰富，考虑得很全面。",
                        "优秀的回答，系统性思维和工程能力都很强。"
                    ],
                    good: [
                        "基本策略正确，但对数据漂移检测的方法可以更详细。",
                        "理解是对的，不过对自动化运维的重要性还可以强调一些。",
                        "还不错，但感觉你对大规模生产环境的经验还不够。"
                    ],
                    poor: [
                        "对生产环境的复杂性理解不够，建议多参与实际项目。",
                        "回答缺少关键的监控指标，在实际工作中会遇到很多问题。",
                        "这个回答让我觉得你可能还没有真正的生产环境经验。"
                    ]
                }
            }
        ],
        senior: [
            // 选择题
            {
                id: 32,
                type: "choice",
                question: "在分布式训练中，All-Reduce是一种什么样的通信策略？",
                options: ["A. 参数服务器模式", "B. 点对点通信", "C. 集合通信", "D. 主从模式"],
                correctAnswer: "C",
                explanation: "All-Reduce是一种集合通信操作，它将所有节点的数据进行规约（如求和），然后将结果分发回所有节点，常用于数据并行训练中的梯度同步。",
                hrComments: {
                    correct: ["正确！All-Reduce是分布式训练中的关键集合通信操作。", "很好，你对分布式训练的底层通信有了解。"],
                    wrong: ["All-Reduce属于集合通信，区别于参数服务器模式。", "需要深入理解分布式训练的通信原语。"]
                }
            },
            // 判断题
            {
                id: 33,
                type: "judge",
                question: "模型蒸馏（Knowledge Distillation）只能用于压缩模型，不能提升小模型的性能。",
                correctAnswer: false,
                explanation: "模型蒸馏不仅可以压缩模型，还能通过让小模型（Student）学习大模型（Teacher）的'软标签'（soft labels），来提升小模型的性能和泛化能力，有时甚至能超越原始独立训练的小模型。",
                hrComments: {
                    correct: ["回答正确！模型蒸馏也是一种有效的性能提升手段。", "很好，你对模型蒸馏的理解很深入。"],
                    wrong: ["模型蒸馏的一个重要作用就是提升小模型的性能。", "Teacher模型的软标签包含了更丰富的信息。"]
                }
            },
            {
                id: 12,
                question: "请设计一个高并发、低延迟的AI推理服务架构，并说明如何处理突发流量和故障恢复。",
                keywords: [
                    { word: "微服务", score: 10 },
                    { word: "负载均衡", score: 10 },
                    { word: "缓存策略", score: 12 },
                    { word: "异步处理", score: 10 },
                    { word: "熔断机制", score: 12 },
                    { word: "自动扩缩容", score: 10 },
                    { word: "降级策略", score: 8 },
                    { word: "分布式", score: 8 }
                ],
                penalties: [
                    { word: "单机就够", score: -30 },
                    { word: "不会有问题", score: -25 }
                ],
                hrComments: {
                    excellent: [
                        "非常出色的架构设计！考虑得很全面，技术深度很好。",
                        "优秀！你对高并发系统的设计有深入的理解和丰富的经验。",
                        "很棒的回答，系统架构能力和工程实践都达到了高级水平。"
                    ],
                    good: [
                        "基本架构合理，但对缓存策略的设计可以更详细一些。",
                        "思路是对的，不过对故障恢复的机制还可以补充。",
                        "还不错，但感觉你对分布式系统的复杂性考虑还不够充分。"
                    ],
                    poor: [
                        "架构设计还比较简单，缺少对高并发场景的深入思考。",
                        "回答缺少关键的技术细节，建议加强系统设计能力。",
                        "这个回答让我觉得你可能还没有设计过大规模系统的经验。"
                    ]
                }
            }
        ]
    }
};

// HR角色数据
const HR_PROFILES = [
    {
        name: "张经理",
        avatar: "👩‍💼",
        mood: "今天心情不错",
        style: "professional", // 专业型
        greetings: [
            "你好，欢迎来到我们公司面试！",
            "很高兴见到你，让我们开始今天的面试吧。",
            "欢迎！希望今天的面试对你我都有收获。"
        ]
    },
    {
        name: "李总监",
        avatar: "👨‍💼",
        mood: "有点严肃",
        style: "strict", // 严格型
        greetings: [
            "请坐，我们直接开始面试。",
            "时间宝贵，让我们快速进入正题。",
            "希望你已经做好了充分的准备。"
        ]
    },
    {
        name: "王小姐",
        avatar: "👩‍🦰",
        mood: "很友善",
        style: "friendly", // 友善型
        greetings: [
            "你好呀！别紧张，我们聊聊天就好～",
            "欢迎欢迎！今天天气不错呢，心情也很好！",
            "很开心见到你！放轻松，就当是技术交流。"
        ]
    },
    {
        name: "陈博士",
        avatar: "👨‍🔬",
        mood: "很专业",
        style: "academic", // 学术型
        greetings: [
            "你好，让我们从技术细节开始探讨。",
            "欢迎，我对你的技术背景很感兴趣。",
            "很好，我们来深入讨论一些技术问题。"
        ]
    },
    {
        name: "刘主管",
        avatar: "🧑‍💼",
        mood: "有点挑剔",
        style: "picky", // 挑剔型
        greetings: [
            "嗯，让我看看你的水平如何。",
            "希望你不会让我失望。",
            "我对候选人的要求比较高，希望你能理解。"
        ]
    }
];

// 最终评价模板
const FINAL_EVALUATIONS = {
    excellent: {
        title: "🎉 恭喜！你被录用了！",
        messages: [
            "表现非常出色！你的技术能力和思维深度都让我印象深刻。",
            "优秀的候选人！你的回答展现了扎实的基础和丰富的实践经验。",
            "太棒了！你完全符合我们的要求，期待你加入我们团队。"
        ],
        advice: [
            "继续保持这种学习热情和技术深度，你会在AI领域走得更远。",
            "建议多关注前沿技术发展，保持技术敏感度。",
            "可以考虑在某个细分领域深入专研，成为专家。"
        ]
    },
    good: {
        title: "👍 表现不错，但还需要提升",
        messages: [
            "基础还可以，但在某些方面还需要加强。",
            "有一定的技术基础，不过实践经验还需要积累。",
            "整体表现还行，但距离我们的要求还有一定差距。"
        ],
        advice: [
            "建议多做一些实际项目，积累更多实践经验。",
            "可以系统地学习一下相关理论知识，打牢基础。",
            "多关注行业动态，了解最新的技术发展趋势。"
        ]
    },
    poor: {
        title: "😅 需要继续努力",
        messages: [
            "基础知识还需要大幅提升，建议多学习。",
            "距离岗位要求还有较大差距，需要继续努力。",
            "技术基础比较薄弱，建议先夯实基础再来应聘。"
        ],
        advice: [
            "建议系统学习相关课程，打好理论基础。",
            "多做练习项目，在实践中提升技能。",
            "可以考虑参加一些培训课程或在线学习。"
        ]
    }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTIONS_DB, HR_PROFILES, FINAL_EVALUATIONS };
}