import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../db/firebase";
import { config } from "../exp_config/experiment_config";
import { waitForPendingWrites } from "@firebase/firestore";

const types = config.GAME_TYPES;
const {
   GAME_CONFIG: { inputs },
} = config;

const handleSubmit = async (data, accept, reject) => {
   const ref = collection(firestore, "test_data");
   const trimmed = prepare_data_shipping(data);
   window.localStorage.setItem("subject_data", JSON.stringify(trimmed));
   console.log(JSON.stringify(trimmed));
   try {
      const res = await addDoc(ref, trimmed);
      console.log(res);
      accept();
   } catch (err) {
      console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
      console.log(err);
      reject(err);
   }
};

function prepare_data_shipping(context_data) {
   const prepared = {
      [types.training]: prepare_gamesets_shipping(
         context_data[types.training].current
      ),
      [types.set_1]: prepare_gamesets_shipping(
         context_data[types.set_1].current
      ),
      [types.set_2]: prepare_gamesets_shipping(
         context_data[types.set_2].current
      ),
      screened_out: context_data.screened_out.current,
      wallet: context_data.wallet.current,
      dictator_input: context_data.dictator_input.current,
      general_questions: context_data.general_questions.current,
      subject_id: context_data.subject_id.current,
      started_at: context_data.curr_date.current,
   };
   return prepared;
}

function prepare_gamesets_shipping(set) {
   const subject_round = [];
   const computer_round = [];
   let subject_cooporations = 0;
   let computer_cooporations = 0;
   set.forEach((round) => {
      subject_round.push(round[0]);
      computer_round.push(round[1]);
      subject_cooporations += round[0] === inputs.COOPORATE_KEY ? 1 : 0;
      computer_cooporations += round[1] === inputs.COOPORATE_KEY ? 1 : 0;
   });
   return {
      subject_round: JSON.stringify(keyboard_to_binary(subject_round)),
      subject_cooporations,
      computer_round: JSON.stringify(keyboard_to_binary(computer_round)),
      computer_cooporations,
   };
}

function keyboard_to_binary(arr) {
   return arr.map((input) =>
      input === config.GAME_CONFIG.inputs.COOPORATE_KEY ? 1 : 0
   );
}

export default handleSubmit;
