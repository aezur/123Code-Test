import { Commit, Dispatch } from 'vuex';
import { loremIpsum } from '~/helpers/loremIpsum';

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
    const usersResponse = await fetch(`https://random-data-api.com/api/v2/users?size=${count}`);
    const students: Student[] = await usersResponse.json();
    for (const student of students) {
      student.description = loremIpsum.generateParagraphs(1);
      const brandCount = Math.floor(Math.random() * 5) + 1;
      const brandResponse = await fetch(`https://random-data-api.com/api/v2/appliances?size=${brandCount}`);
      const brandData: Brand[] = await brandResponse.json();
      student.brands = brandData;
    }
    return commit('setStudents', students);
  }
}