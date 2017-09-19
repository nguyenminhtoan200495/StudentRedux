let initState = [{
    id: 1,
    name: 'Nguyễn Minh Toàn',
    date: '20/04/1995',
    gender: 'male',
    address: 'Bến Tre',
    email: 'nguyenminhtoan.20.04.95@gmail.com',
    phone: '0965558393'
},
{
    id: 2,
    name: 'Nguyễn Minh Tiến',
    date: '01/03/1991',
    gender: 'male',
    address: 'Bến Tre',
    email: 'nguyenminhtiend@gmail.com',
    phone: '0966638355'
}]

export default (state = initState, action) => {
    switch (action.type) {
        case 'DEL':
            return state.filter(element => element.id !== action.id)
        case 'EDIT':
            let newState = [...state];
            return newState.map(item =>
                (item.id === action.student.id)
                    ? action.student
                    : item
            )
        case 'ADD':
            return [
                ...state,
                action.student
            ]
        default:
            return state
    }
}