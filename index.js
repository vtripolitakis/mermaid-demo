import mermaidAPI from "mermaid"
import * as $ from "jquery"
import "./src/callbacks"


//init
//Note: We rely on a config.js file setting the global conf variable.
mermaidAPI.initialize({startOnLoad:true,cloneCssStyles:false})

//get the graph definition
let graphDefinition = conf.graphDefinition

//bind the callback functions defined in src/callbacks.js
let cb = function(svgGraph, bindFunctions) {
    $("#mermaid").html(svgGraph)
    bindFunctions($("#mermaid")[0])
}

// render
mermaidAPI.render("d", graphDefinition, cb)