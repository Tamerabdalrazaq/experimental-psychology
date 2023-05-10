export const config = {
   GAME_CONFIG: {
      opponent_name: "Amir Mizrahi",
      rounds: 30,
      round_timer: 3000,
      computer_delay: [500, 3000],
      inputs: {
         COOPORATE_KEY: "K",
         SOLO_KEY: "D",
      },
   },
   GAME_TYPES: {
      training: "TRAIN",
      set_1: "SET_1",
      set_2: "SET_2",
   },
   ALGORITHM: {
      BETRAYAL: 7,
      FOREGIVENESS: 33,
   },
};

export const UI_DATA = {
   FIRST_ATTENTION: {
      title: "First Attention Check",
      instructions: [
         "Before we begin the experiment, we need to make sure that please sit in an interruption-free environment, and also put your phone on silent. Thank you!",
      ],
      attention_questions: [
         {
            label: "Are you in an interruption-free environment? ",
            checked: true,
         },
         {
            label: "Is your phone on silent / off? (Please check this box if so) ",
            checked: true,
         },
         { label: "Please do not check this box", checked: false },
      ],
   },
   SECOND_ATTENTION: {
      title: "Set 1\\2 Completed!",
      instructions: [
         "You have completed the first set with Amir Mizrahi, in the next part you will continue playing another set of rounds with the same player.",
      ],
      attention_questions: [
         {
            label: "Are you in an interruption-free environment? ",
            checked: true,
         },
         { label: "Please do not check this box", checked: false },
         {
            label: "Is your phone on silent / off? (Please check this box if so) ",
            checked: true,
         },
      ],
   },
   INSTRUCTIONS_ARRAY: [
      {
         title: "Welcome!",
         instructions: [
            "In this study, you will play an interactive game that will test your strategic decision-making skills while playing with the computer. The game is played for an unknown number of rounds.",
            "Your objective is to accumulate as many points as possible.",
         ],
      },

      {
         title: "Your Opponent",
         instructions: [
            "You will be playing with a computer-controlled fictional character named Amir Mizrahi, is 24, he’s a straight man with brown eyes, who is weighing roughly 76 kg. He has 2 siblings, one older and one younger. ",
         ],
      },
      {
         title: "Games Rules",
         instructions: [
            "Each turn you will need to choose between collaboration (press “D”) or not to collaborate (press “K”). Not collaborating would be called a “Solo”  move. Score would be assigned to you and Amir as a result of your choices based on the following rules:",
            "Collaboration (both you and Amir choose this action): You and Amir earn 3 points.",
            "Single Solo Move (one player chooses Collaborate, the other person chooses a solo move): Solo Move player earns 4 points, Collaborating player earns 0 points.",
            "Mutual Solo Move: (both players choose not to collaborate): Both players earn 1 point.",
         ],
      },
      {
         title: "Order of the game",
         instructions: [
            "Before each round, decide whether to choose Collaborate or Solo Move. Keep in mind that Amir will also make a choice.",
            "After you choose, you will see Amir’s choice, and you will receive award points according to the rules above.",
            "The game will repeat for a predetermined amount of rounds. ",
            "Your final score would consist of the final amount of points you have at the end of the game.",
         ],
      },
      {
         title: "Order of the game",
         instructions: [
            "We will first start with a training session to make you familiar with the game. Everything will be exactly the same as in the game including the behavior of Amir. Amir would not remember how you played and he would not take that into consideration in the next stages of the game. This stage is strictly to get you familiarized with the game and Amir.  ",
            "A continue button will be displayed at the bottom of the page. ",
         ],
      },
   ],
   POST_LEARNING_INSTRUCTIONS: {
      title: "Learning Phase Completed!",
      instructions: [
         "Thank you for playing the first training set. The score previously would not count towards your final score.",
         "You will now continue to play against the same player. From now on your behavior would count towards your final score",
      ],
   },
};
