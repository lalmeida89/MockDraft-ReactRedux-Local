export const SHOW_POSITION = 'SHOW_POSITION';
export const SHOW_NOTES = 'SHOW_NOTES'
export const SHOW_SCHEDULE = 'SHOW_SCHEDULE'

export const showPosition = displayPlayers => ({
    type: SHOW_POSITION,
    displayPlayers
});


export const showNotes = notes => ({
  type: SHOW_NOTES,
  notes
})

export const showSchedule = schedule => ({
  type: SHOW_SCHEDULE,
  schedule
})
