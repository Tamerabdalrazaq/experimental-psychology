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
         [GAME_TYPES.training]: 3,
         [GAME_TYPES.set_1]: 3,
         [GAME_TYPES.set_2]: 3,
      },
      round_timer: 3000,
      computer_delay: [500, 3000],
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
      S_C: [20, 0],
      S_S: [10, 10],
   },
   DICTATORS_GAME_MONEY: 100,
};

export const tutorial_steps = [
   {
      selector: ".game-view",
      content: {
         EN: "Welcome! We are going to make a brief tour in the game",
         AR: "أمن المنون وريبها تتوجع",
      },
   },
   {
      selector: ".player-card.opponent",
      content: { EN: "This is your opponent.", AR: "أمن المنون وريبها تتوجع" },
   },
   {
      selector: "div.choise-status",
      content: {
         EN: "This circle indicate the status of the player. \n A blue circle indicates that the player has already played",
         AR: "أمن المنون وريبها تتوجع",
      },
   },
   {
      selector: "div.wallet",
      content: {
         EN: "Here is the score of the player",
         AR: "أمن المنون وريبها تتوجع",
      },
   },
   {
      selector: "div.choise-buttons > button:nth-child(1)",
      content: {
         EN: "Use these buttons to choose your play each round",
         AR: "أمن المنون وريبها تتوجع",
      },
   },
   {
      selector: "div.choise-buttons > button:nth-child(3)",
      content: {
         EN: "You can either click on the button, or press on the corresponding key on your keyboard",
         AR: "أمن المنون وريبها تتوجع",
      },
   },
   {
      selector: ".player-card.you",
      content: {
         EN: "This is you. \n all data are symmetrical to above.",
         AR: "أمن المنون وريبها تتوجع",
      },
   },
   {
      selector: ".player-card.you .choise-status",
      content: {
         EN: "A gray animating circle means the player has not played yet.",
         AR: "أمن المنون وريبها تتوجع",
      },
   },
   {
      selector: ".game-view",
      content: {
         EN: "You will play 3 round so that you understand the flow of the game. Press X when ready!",
         AR: "أمن المنون وريبها تتوجع",
      },
   },
];

export const UI_DATA = {
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
      title: { EN: "Welcome!", AR: "..." },
      instructions: [
         {
            EN: "Before we begin the experiment, we need to make sure that please sit in an interruption-free environment, and also put your phone on silent. Thank you!",
            AR: "...",
         },
      ],
      attention_questions: [
         {
            EN: {
               label: "Are you in an interruption-free environment? ",

               checked: true,
            },
            AR: {
               label: "...",

               checked: true,
            },
         },
         {
            EN: {
               label: "Is your phone on silent / off? (Please check this box if so) ",

               checked: true,
            },
            AR: {
               label: "...",

               checked: true,
            },
         },
         {
            EN: {
               label: "Please do not check this box",

               checked: false,
            },
            AR: {
               label: "...",

               checked: false,
            },
         },
      ],
   },

   PRE_TRAINING_INSTRUCTIONS: {
      title: { EN: "What We Will DO", AR: "..." },
      instructions: [
         {
            EN: "Now we will play a series of 3 rounds with a computer-controlled fictional charachter named Dana.",
            AR: "...",
         },
         {
            EN: "In the first round of the 3, you'll learn how Dana plays. Her behaviour is consistent througout the game.",
            AR: "...",
         },
         {
            EN: "Press Next to procede to the game.",
            AR: "...",
         },
      ],
   },
   SECOND_ATTENTION: {
      title: { EN: "Set 2\\3 Completed!", AR: "..." },
      instructions: [
         {
            EN: "You have completed the first set with Amir Mizrahi, in the next part you will continue playing another set of rounds with the same player.",
            AR: "...",
         },
      ],
      attention_questions: [
         {
            label: {
               EN: "Are you in an interruption-free environment? ",
               AR: "...",
            },
            checked: true,
         },
         {
            label: {
               EN: "Please do not check this box",
               AR: "...",
            },
            checked: false,
         },
         {
            label: {
               EN: "Is your phone on silent / off? (Please check this box if so) ",
               AR: "...",
            },
            checked: true,
         },
      ],
   },
   INSTRUCTIONS_ARRAY: [
      {
         title: { EN: "What we will do", AR: "..." },
         instructions: [
            {
               EN: "In this study, you will play an interactive game that will test your strategic decision-making skills while playing with the computer. This game will be played for several rounds.",
               AR: "...",
            },
            {
               EN: "Your objective is to accumulate as many points as possible.",
               AR: "...",
            },
         ],
      },
      {
         title: { EN: "Games Rules", AR: "..." },
         instructions: [
            {
               EN: "Each turn you will need to choose between collaboration (press “D”) or not to collaborate (press “K”). Not collaborating would be called a “Solo”  move. Score would be assigned to your opponent based on your choices, which is determined by these rules: ",
               AR: "...",
            },
            {
               EN: <RewardsTable />,
               AR: <RewardsTable />,
            },
         ],
      },
   ],
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
      title: { EN: "Let the game begin!", AR: "..." },
      instructions: [],
   },
   GENERAL_QUESTIONS: {
      title: { EN: "General Questions", AR: "..." },
      instructions: [],
      q_1: {
         EN: "Do you think your behavior / Average contribution changed before and after the 20 second break?",
         AR: "...",
      },
      q_2: {
         EN: "If your behavior changed, Why do you think it changed?",
         AR: "...",
      },
      q_3: {
         EN: "What do you think was the purpose of this study? ",
         AR: "...",
      },
   },
   DEBRIEF: {
      title: "Debrief",
      instructions: [
         {
            EN: "Thanks for participating in our study. ",
            AR: "...",
         },
         {
            EN: (
               <>
                  We would like to remind you that you played against a{" "}
                  {bold_underlineText("computer")}.
               </>
            ),
            AR: (
               <>
                  {`We would like to remind you that you played against a{" "}
                  ${bold_underlineText("computer")}`}
                  .
               </>
            ),
         },
         {
            EN: "The study was conducted in order to test if and how people play cooperative games based on timing and types of information presented to them.",
            AR: "...",
         },
      ],
   },
};
