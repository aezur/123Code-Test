import { Commit, Dispatch } from 'vuex';
import { loremIpsum } from '~/mixins/loremIpsum';

export interface State {
  students: Student[];
};

export const state = () => ({
  students: [],
} as State);

export const getters = {
  getRandomStudent: (state: State) => (): Student => {
    return state.students[Math.floor(Math.random() * state.students.length)];
  },
}

export const mutations = {
  setStudents(state: State, students: Student[]) {
    state.students = students;
  }
}

export const actions = {
  nuxtServerInit({ dispatch }: { dispatch: Dispatch }) {
    return dispatch('fetchStudents');
  },
  async fetchStudents({ commit }: { commit: Commit }, count: number = 10) {
    const response = await fetch(`https://random-data-api.com/api/v2/users?size=${count}`);
    const data: Student[] = await response.json();
    const students = data.map((student: Student) => ({ ...student, description: loremIpsum.methods.generateParagraphs(1) }));
    return commit('setStudents', students);
  }
}