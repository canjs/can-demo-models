import {fixture, QueryLogic, MaybeDate, MaybeNumber, MaybeString, MaybeBoolean} from "//unpkg.com/can@5/core.mjs";

export default function(count){
    var terms = ["can you","please","","","",""],
        verbs = ["clean","walk","do","vaccum","organize","fold","wash","dust","pay","cook","get","take out"],
        subjects = ["dog","laundry","diapers","clothes","car","windows","carpet","taxes","food","gas","trash"];

    var dayInMS = 24*60*60*1000;
    var lastWeek = new Date() - (7*dayInMS);
    var fourWeeks = new Date().getTime() + (4*7*dayInMS);

    var todoStore = fixture.store(count, function(){
        return {
            complete: fixture.rand([true, false],1)[0],
            dueDate: new Date( fixture.rand(lastWeek, fourWeeks) ).toString(),
            name: (fixture.rand(terms,1)[0]+" "+fixture.rand(verbs,1)[0]+" "+fixture.rand(subjects,1)[0]).trim()
        };
    }, new QueryLogic({
        identity: ["id"],
        keys: {
            id: MaybeNumber,
            complete: MaybeBoolean,
            dueData: MaybeDate,
            name: MaybeString
        }
    }));

    fixture("/api/todos/{id}", todoStore);
}
