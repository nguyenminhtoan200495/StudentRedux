export const deleteStudent = (id) => ({
  type: 'DEL',
  id
})

export const editStudent = (student) => ({
  type: 'EDIT',
  student
})

export const addStudent = (student) => ({
  type: 'ADD',
  student
})