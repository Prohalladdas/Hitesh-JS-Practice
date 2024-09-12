var name = "Prohallad"
console.log("Line 2", name);

function sayMyName() {
    var name = "MR.P";
    console.log("Line 6", name);
    sayMyName2();
    
    function sayMyName2() {
        var name = "DAS";
        console.log("Line 10", name);
        
    }
}
sayMyName();