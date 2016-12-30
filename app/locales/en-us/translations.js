export default {
  back: 'Back',
  save: 'Save',
  delete: 'Delete',

  sign: {
    in: 'Sign in',
    up: 'Sign up',
    out: 'Sign out'
  },

  home: {
    title: 'Home'
  },

  timetable: {
    title: 'Timetable',

    semesters: {
      title: 'Semesters',
      edit: 'Edit semester',
      new: 'New semester',
      from: 'Enter start date...',
      to: 'Enter end date...',
      name: 'Enter name...'
    },

    subjects: {
      title: 'Subjects',
      edit: 'Edit subject',
      new: 'New subject',

      selectSemester: 'Select semester...',
      enterName: 'Enter name...'
    }
  },

  performance: {
    title: 'Performance',

    grades: {
      title: 'Grades',
      edit: 'Edit grade',
      new: 'New grade'
    },

    goals: {
      title: 'Goals',
      edit: 'Edit goal',
      new: 'New goal',

      goal: 'Goal',
      reached: 'Reached',

      noSubject: 'All subjects',
      noSubjectDesc: 'The goal shouldn\'t be limited to one subject but count for the whole semester.',

      detail: {
        need: 'You need a {{needed}} to reach your goal.',
        notPossible: 'That\'s not possible..',
        goodLuck: 'Good luck!',
        reached: 'You reached your goal. Congratulations!'
      }
    }
  },

  settings: {
    title: 'Settings'
  },

  comments: {
    neutral: '',
    bad: 'Ooops.',
    ok: 'Not bad...',
    good: 'Nice!'
  },

  error: {
    'auth/user-not-found': 'User not found.',
    'auth/wrong-password': 'Wrong password.',
    'auth/email-already-in-use': 'This email address is already in use.'
  }
}
