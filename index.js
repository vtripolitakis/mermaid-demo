import mermaidAPI from "mermaid"
import * as $ from "jquery"

$("#btn").click(()=>{    
    mermaidAPI.initialize({startOnLoad:true,cloneCssStyles:false})
    let graphDefinition = `graph LR
      ath((Athens))-- airplane -->chq;
      chq((Chania))-- airplane -->ath
      ath-- airplane -->her;
      her((Heraklion))-- airplane -->ath
      her-. national road .->rth
      chq-. national road .->rth
      rth((Rethymnon))-. national road .->her
      rth-. national road .->chq
      click ath myActionATH "ATH"
      click chq myActionCHQ
      click her myActionHER
      click rth myActionRETH;`
    let cb = function(svgGraph, bindFunctions) {
        $("#mermaid").html(svgGraph)
        bindFunctions($("#mermaid")[0])
    }
    mermaidAPI.render("d", graphDefinition, cb)
})