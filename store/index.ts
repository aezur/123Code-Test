import { Commit, Dispatch } from 'vuex';

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
    state.students = students ;
  }
}

export const actions = {
  nuxtServerInit({ dispatch }: { dispatch: Dispatch }) {
    return dispatch('fetchStudents');
  },
  async fetchStudents({ commit }: { commit: Commit }) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: Student[] = await response.json();
    return commit('setStudents', data);
  }
}