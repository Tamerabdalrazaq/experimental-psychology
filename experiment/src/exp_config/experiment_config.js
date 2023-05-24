import RewardsTable from "../components/UI/RewardsTable";
import { bold_underlineText } from "../helpers/semantics";

export const GAME_TYPES = {
   learning: "LEARNING",
   training: "TRAINING",
   set_1: "SET_1",
   set_2: "SET_2",
};

export const config = {
   subject_types: {
      EARLY_IN: "E_I",
      EARLY_OUT: "E_O",
      LATE_IN: "L_I",
      LATE_OUT: "L_O",
   },
   GAME_CONFIG: {
      opponent_name: {
         OUT: { EN: "Dana Mizrahi", AR: "دانة مزراخي" },
         IN: { EN: "Dana Ahmadi", AR: "دانة أحمدي" },
      },
      rounds: {
         [GAME_TYPES.learning]: 3,
         [GAME_TYPES.training]: 30,
         [GAME_TYPES.set_1]: 40,
         [GAME_TYPES.set_2]: 40,
      },
      round_timer: 3000,
      computer_delay: [500, 2300],
      inputs: {
         COOPORATE_KEY: "K",
         SOLO_KEY: "D",
      },
   },
   GAME_TYPES,
   ALGORITHM: {
      BETRAYAL: 7,
      FOREGIVENESS: 33,
   },
   REDAWRDS: {
      C_C: [30, 30],
      S_C: [40, 0],
      S_S: [10, 10],
   },
   DICTATORS_GAME_MONEY: 100,
};

export const tutorial_steps = [
   {
      selector: ".game-view",
      content: {
         EN: "Welcome! We are going to make a brief tour in the game",
         AR: "!سنقوم بجولة تعريفية سريعة للعبتنا",
      },
   },
   {
      selector: ".player-card.opponent",
      content: { EN: "This is your opponent.", AR: "هذا سيكون خصمكِ" },
   },
   {
      selector: "div.choise-status",
      content: {
         EN: "This circle indicate the status of the player. A blue circle indicates that the player has already played",
         AR: "يدل اللون الازرق هنا ان الخصم قد قام بالاختيار",
      },
   },
   {
      selector: "div.wallet",
      content: {
         EN: "Here is the score of the player",
         AR: "هنا ستظهر النتيجة التي حصل عليها الخصم",
      },
   },
   {
      selector: "div.choise-buttons > button:nth-child(1)",
      content: {
         EN: "Use these buttons to choose your play each round",
         AR: "استعملي هذه الازرار للعب في كل جولة",
      },
   },
   {
      selector: "div.choise-buttons > button:nth-child(3)",
      content: {
         EN: "You can either click on the button, or press on the corresponding key on your keyboard",
         AR: "يمكنك الضغط عليها او استعمال الازرار الملائمة في لوحة المفاتيح",
      },
   },
   {
      selector: ".player-card.you",
      content: {
         EN: "This is you. \n all data are symmetrical to above.",
         AR: "هنا ستظهر المعلومات المتعلقة بكِ، مطابقة لما شُرح سابقاً",
      },
   },
   {
      selector: ".player-card.you .choise-status",
      content: {
         EN: "A gray animating circle means the player has not played yet.",
         AR: " :) ستبقى الدائرة متحركة طالما أنك لم تقومي باللعب ",
      },
   },
   {
      selector: ".game-view",
      content: {
         EN: "You will play 3 round so that you understand the flow of the game. Press X when ready!",
         AR: "x سنقوم بالتمرن ل 3 جولات، عندما تكونين جاهزة اضغطي  ",
      },
   },
];

export const UI_DATA = {
   AGREEMENT_INSTRUCTIONS: {
      title: { EN: "Terms of Agreement", AR: "بنود التوافق" },
      instructions: [
         {
            EN: "Hello,",
            AR: "،مرحبًا",
         },
         {
            EN: "You are invited to participate in a study conducted as part of a course in experimental psychology at Tel Aviv University",
            AR: ".انت مدعو/ة للمشاركة في دراسة التي تُجرى كجزء من كورس في علم النفس التجريبي في جامعة تل أبيب",
         },
         {
            EN: "You will be asked to read several short paragraphs in both Arabic and Hebrew, and then participate in a number of tasks/games. The expected time for participation is approximately 13 minutes.",
            AR: "سيُطلب منك قراءة عدَّة فقرات قصيرة في اللغتين العربيَّة والعبريَّة ومن ثم الاشتراك في عدد من المهام/الألعاب. من المُتَوقَّع أن يستغرق وقت المشاركة حوالي 13 دقيقة.            ",
         },
         {
            EN: (
               <p>
                  If you feel uncomfortable, you have the right to withdraw at
                  any time. If you choose to withdraw from the study, youذ
                  {bold_underlineText(" will not ")}
                  be able to return.
               </p>
            ),
            AR: (
               <p>
                  إذا شعرت بعدم الارتياح، لديك الحق في الخروج في أي وقت. في حال
                  خروجك من التجربة،
                  {bold_underlineText(" لن تتمكّن ")}
                  من العودة.
               </p>
            ),
         },
         {
            EN: "Participation will be anonymous, and the data collected from the study will be used for research purposes only and will not be used for any other purpose",
            AR: "المشاركة ستكون بشكل مجهول والبيانات التي سيتم جمعها من الدراسة ستكون لأغراض البحث فقط ولن يتم استخدامها لأي هدف آخر.",
         },
         {
            EN: "Best regards,",
            AR: "مع التحيّة،",
         },
         {
            EN: "Researchers Team.",
            AR: "فريق البحث.",
         },
      ],
   },
   BUTTONS: {
      NEXT: {
         EN: "Next",
         AR: "التالي",
      },
      PREV: {
         EN: "Prev",
         AR: "السابق",
      },
   },
   FIRST_ATTENTION: {
      id: "attetion_1",
      title: { EN: "Welcome!", AR: "!مرحبا" },
      instructions: [
         {
            EN: "Before we begin the experiment, we need to make sure that please sit in an interruption-free environment, and also put your phone on silent. Thank you!",
            AR: "قبل أن نبدأ تجربتنا نرجو منك أن تكوني في بيئة خالية من المشتتات، وأن يكون هاتفك بوضعية الصامت.. شكرا :) ",
         },
      ],
      attention_questions: [
         {
            EN: {
               label: "Are you in an interruption-free environment? ",

               checked: true,
            },
            AR: {
               label: "هل أنت في بيئة خالية من المشتتات؟",

               checked: true,
            },
         },
         {
            EN: {
               label: "Is your phone on silent / off? (Please check this box if so) ",

               checked: true,
            },
            AR: {
               label: "هل هاتفك بوضعية الصامت؟",

               checked: true,
            },
         },
         {
            EN: {
               label: "Please do not check this box",

               checked: false,
            },
            AR: {
               label: "لا تقومي بالإشارة الى هذا البند",

               checked: false,
            },
         },
      ],
   },

   FIRST_SET_FINISHED: {
      title: { EN: "Set 1\\3 Completed!", AR: "الجولة الاولى اكتملت" },
      instructions: [
         {
            EN: "You have completed the first round. Your final score will be calculated base on the next two rounds.",
            AR: "نتيجتك النهائية ستم احتسابها وفقاً للجولتيين التاليتين",
         },
      ],
   },
   SECOND_ATTENTION: {
      title: { EN: "Set 2\\3 Completed!", AR: "الجولة الثانية اكتملت" },
      instructions: [
         {
            EN: "You have completed the first set with Amir Mizrahi, in the next part you will continue playing another set of rounds with the same player.",
            AR: "",
         },
      ],
      attention_questions: [
         {
            label: {
               EN: "Are you in an interruption-free environment? ",
               AR: "هل انت في بيئة خالية من المشتتات؟",
            },
            checked: true,
         },
         {
            label: {
               EN: "Please do not check this box",
               AR: "لا تشيري الى هذا البند",
            },
            checked: false,
         },
         {
            label: {
               EN: "Is your phone on silent / off? (Please check this box if so) ",
               AR: "هل هاتفك في وضع الصامت؟",
            },
            checked: true,
         },
      ],
   },

   INSTRUCTIONS_ARRAY: [
      {
         title: { EN: "What we will do", AR: "سير التجربة" },
         instructions: [
            {
               EN: "In this study, you will play an interactive game that will test your strategic decision-making skills while playing with the computer. This game will be played for several rounds.",
               AR: "في هذه التجربة ستقومين باللعب تفاعلياً لعدة جولات، حيث سنفحص مهاراتك الاستراتيجية في اتخاذ القرارات من خلال لعبك ضد الحاسوب.",
            },
            {
               EN: "Your objective is to accumulate as many points as possible.",
               AR: "عليك أن تحصلي على أكبر قدر من النقاط",
            },
         ],
      },
      {
         title: { EN: "Games Rules", AR: "قواعد اللعبة" },
         instructions: [
            {
               EN: "Each turn you will need to choose between collaboration (press “D”) or not to collaborate (press “K”). ",
               AR: "في كل جولة يمكنك تلعبي بالتعاون مع خصمك (Cooporate - Press D )  او يمكنك اللعب بشكل منفرد (Solo-Move - Press K) ",
            },
            {
               EN: " Not collaborating would be called a “Solo”  move. Score would be assigned to your opponent based on your choices, which is determined by these rules: ",
               AR: "ستحسب النقاط حسب خياراتك وخيارات الخصم حسب هذه القوانين:",
            },
            { EN: <RewardsTable />, AR: <RewardsTable /> },
         ],
      },
   ],

   PRE_TRAINING_INSTRUCTIONS: {
      title: { EN: "What We Will DO", AR: "ماذا سنفعل" },
      instructions: [
         {
            EN: "Now we will play a series of 3 rounds with a computer-controlled fictional charachter named Dana.",
            AR: "سنبدأ سلسلة من 3 جولات، بها ستلعبين مع شخصيّة افتراضيّة اسمها دانة.",
         },
         {
            EN: "In the first round of the 3, you'll learn how Dana plays. Her behaviour is consistent througout the experiment.",
            AR: "في الجولة الأولى، ستتعلمين كيف تلعب دانة. طريقة لعبها ثابتة حتى نهاية التجربة.",
         },
         {
            EN: "Press Next to procede to the game.",
            AR: 'اضغطي على "التالي" للاستمرار.',
         },
      ],
   },

   OPPONENT_DESCRIPTION_INSTRUCTIONS: {
      title: { EN: "Your Opponent", AR: "..." },
      instructions: [
         {
            EN: "You will be playing with a computer-controlled fictional character named Amir Mizrahi, is 24, he’s a straight man with brown eyes, who is weighing roughly 76 kg. He has 2 siblings, one older and one younger. ",
            AR: "...",
         },
      ],
   },
   POST_LEARNING_INSTRUCTIONS: {
      title: {
         EN: "Learning Phase Completed!",
         AR: "...",
      },
      instructions: [
         {
            EN: "Thank you for playing the first set. The score previously would not count towards your final score.",
            AR: "...",
         },
         {
            EN: "You will now continue to play against the same player. From now on your behavior would count towards your final score",
            AR: "...",
         },
      ],
   },
   POST_LEARNING_INSTRUCTIONS: {
      title: { EN: "Let the game begin!", AR: "لعبتنا ستبدأ الآن" },
      instructions: [],
   },
   GENERAL_QUESTIONS: {
      title: { EN: "General Questions", AR: "أسئلة عامّة" },
      instructions: [],
      q_1: {
         EN: "Do you think your behavior / Average contribution changed between rounds?",
         AR: "هل تظنين ان طريقتك في اللعب تغيرت بين الجولات؟",
      },
      q_2: {
         EN: "If your behavior changed, Why do you think it changed?",
         AR: "اذا كان قد تغير، لماذا تعتقدين انه تغير؟",
      },
      q_3: {
         EN: "What do you think was the purpose of this study? ",
         AR: "ما هو الهدف من التجربة حسب رأيك؟",
      },
   },
   DEBRIEF: {
      title: { EN: "Debrief", AR: "تلخيص" },
      instructions: [
         {
            EN: "Thanks for participating in our study. ",
            AR: "شكرا لمشاركتك، نقدر مساعدتك",
         },
         {
            EN: (
               <p>
                  We would like to remind you that you played against a{" "}
                  {bold_underlineText("computer")}.
               </p>
            ),
            AR: (
               <p>
                  {`نودُّ تذكيركِ بأن قد لعبتِ مع `}{" "}
                  {bold_underlineText("حاسوب")}.
               </p>
            ),
         },
         {
            EN: "The study was conducted in order to test if and how people play cooperative games based on timing and types of information presented to them.",
            AR: "هَدَفَت هذه التجربة لفحص فيما لو يتأثر الاشخاص من المعلومات في الاوقات المختلفة في الألعاب التعاونيّة.",
         },
         {
            EN: "You can close this window.",
            AR: "يُمكنك اغلاق هذه النافذة.",
         },
      ],
   },
};
