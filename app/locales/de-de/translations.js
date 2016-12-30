export default {
  back: 'Zurück',
  save: 'Speichern',
  delete: 'Löschen',

  sign: {
    in: 'Einloggen',
    up: 'Registrieren',
    out: 'Ausloggen'
  },

  home: {
    title: 'Home'
  },

  timetable: {
    title: 'Stundenplan',

    semesters: {
      title: 'Semester',
      edit: 'Semester bearbeiten',
      new: 'Neues Semester',
      from: 'Startdatum eingeben...',
      to: 'Enddatum eingeben...',
      name: 'Name eingeben...'
    },

    subjects: {
      title: 'Fächer',
      edit: 'Fach bearbeiten',
      new: 'Neues Fach',

      selectSemester: 'Semester auswählen...',
      enterName: 'Name eingeben...'
    }
  },

  performance: {
    title: 'Leistungen',

    grades: {
      title: 'Noten',
      edit: 'Note bearbeiten',
      new: 'Neue Note'
    },

    goals: {
      title: 'Ziele',
      edit: 'Ziel bearbeiten',
      new: 'Neues Ziel',

      goal: 'Ziel',
      reached: 'Erreicht',

      noSubject: 'Alle Fächer',
      noSubjectDesc: 'Das Ziel soll nicht auf ein Fach begrenzt sein, sondern über das ganze Semester zählen.',

      detail: {
        need: 'Du brauchst eine {{needed}} um dein Ziel zu erreichen.',
        notPossible: 'Das ist leider nicht möglich..',
        goodLuck: 'Viel Glück!',
        reached: 'Du hast dein Ziel erreicht. Glückwunsch!'
      }
    }
  },

  settings: {
    title: 'Einstellungen'
  },

  comments: {
    neutral: '',
    bad: 'Hoppla.',
    ok: 'Ganz OK...',
    good: 'Nett!'
  },

  error: {
    'auth/user-not-found': 'Dieser Benutzer existiert nicht.',
    'auth/wrong-password': 'Falsches Passwort.',
    'auth/email-already-in-use': 'Diese Email Adresse wird bereits gebraucht.'
  }
}
