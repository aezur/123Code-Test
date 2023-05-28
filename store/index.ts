import { Commit, Dispatch } from 'vuex';
import { loremIpsum } from '~/helpers/loremIpsum';

export interface State {
  students: Student[];
};

export const state = () => ({
  students: [],
} as State);

export const getters = {
  currentStudent(state: State) {
    return state.students[state.students.length - 1];
  }
}

export const mutations = {
  addStudent(state: State, student: Student) {
    state.students = [ ...state.students, student ];
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }: { dispatch: Dispatch }) {
    await dispatch('fetchStudent');
  },
  async fetchStudent({ commit }: { commit: Commit }) {
    const brandCount = Math.floor(Math.random() * 5) + 1;
    const apiCalls = [
      fetch(`https://random-data-api.com/api/v2/users`),
      fetch(`https://random-data-api.com/api/v2/appliances?size=${brandCount}`)
    ];
    const [userResponse, brandResponse] = await Promise.all(apiCalls);
    const json = [userResponse.json(), brandResponse.json()];
    const [student, brandData] = await Promise.all(json);

    student.description = loremIpsum.generateParagraphs(1);
    student.brands = brandData?.length ? brandData : [brandData];

    return commit('addStudent', student);
  }
}