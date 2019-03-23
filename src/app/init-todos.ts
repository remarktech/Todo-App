export class Init{
    load(){
        if( localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
            console.log('No Todos Found');
            var todos=[
                    {
                      text: 'pickup kids from school'
                    },
                    {
                      text: 'Meeting with boss'
                    },
                    {
                      text: 'Dinner with wife'
                    }
            ];
            localStorage.setItem('todos', JSON.stringify(todos));
            return;
        }
        else{
            console.log('found the todos');
        }
    }
}